import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import * as d3 from 'd3';

export const TimeSeriesBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
    
    static get properties () {
        return {
            chart:Object,
            svg:Object,
            svgCanvas:Object,
            filters: Object,
            details: Object,

            width:Number,
            height:Number,
            margin:Object,

            x_axis:Object,
            y_axis:Object,

            x_scale:Object,
            y_scale:Object,
            colorScale:Object,

            x_axisElement:Object,
            y_axisElement:Object,
            filtersElement: Object,

            x_axisLabelElement:Object,
            y_axisLabelElement:Object,

            line:Object,
            dots:Object,
            legend: Array,

            x_axisLabel:String,
            y_axisLabel:String,
            tooltip:Object,
            
            ticks:String,
            timeFormat:String,
            colors: Array,

            parsedArrayObjects:Array,
            isMultiline: Boolean,
            sumstat: Object,

            cols: Array,
            rows: Array
        };
    }

    constructor() {
        super();

        this.legend = [];
        this.details = {};
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        this.chart = this.qs('#chart');
        this.loader = this.chartSummaryLoader ? this.chartSummaryLoader : this.loader;
        
        this.loader.then(() => {
            this.cols = this.chartSummaryCols ? this.chartSummaryCols : this.cols;
            this.rows = this.chartSummaryRows ? this.chartSummaryRows : this.rows;
            this.details = this.chartSummaryDetails ? this.chartSummaryDetails : this.e.details;
            this.x_axisLabel = this.toTitleCase(this.details.x_axis);
            this.y_axisLabel = this.toTitleCase(this.details.y_axis);
            this.timeFormat = this.details.time_format ? this.details.time_format : "%d %b"; 
            this.ticks = this.details.ticks ? this.details.ticks : {time: "day", interval: 12};
            this.filters = this.details.filters;
            this.isMultiline = this.details.isMultiline;

            this.createChartData();

            this.initTimeSeries();
            //Responsiveness
            new ResizeObserver(()=>this.drawTimeSeries()).observe(this.chart);
        });
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        changedProperties.forEach((oldValue, propName) => {
            if(propName === "rows") {
                if(oldValue.length > 0) {
                    this.createChartData();
                    this.updateChart();
                    this.drawTimeSeries();
                }
            }
        });
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label.toLowerCase() === columnLabel.toLowerCase()); 
    }

    createChartData() {
        if(this.isMultiline) {
            this.getGroups();
            this.colors = this.groups.map((item,index,array)=>this.randomColorGenerator(array.length,index));
            this.legend = this.legend.concat(this.groups.map((group, index)=>{
                const color = this.colors[index];
                const text=this.toTitleCase(group);

                return {
                    label: text,
                    color: color
                };
            }));
        }

        const x_axisIndex = this.getIndexByColumnLabel(this.details.x_axis);
        const y_axisIndex = this.getIndexByColumnLabel(this.details.y_axis);

        this.parsedArrayObjects = this.rows.map(row=>{
            let object = {
                x: new Date(row[x_axisIndex]),
                y : parseFloat(row[y_axisIndex])
            }
            if(this.isMultiline) {
                object = {...object,group:row[this.getIndexByColumnLabel("group")]};
            }
            return object;
        }).sort((a,b) => a.x - b.x);

        if(this.isMultiline) {
            this.sumstat = d3.nest() 
            .key(d => d.group)
            .entries(this.parsedArrayObjects);
        }

        this.legend = this.legend.concat({
            label: this.toTitleCase(this.y_axisLabel),
            color: "var(--primary)"
        });
    }

    initTimeSeries () {
        this.createSVGs();

        this.createScales();
        this.createAxes();
        this.updateChart();
        this.createToolTip();

        this.drawTimeSeries();

        this.animateOnLoad();
        new ResizeObserver(() => this.drawTimeSeries()).observe(this.chart);
    }

    calculateMargin() {
        const marginTop = 0;
        const marginRight = 0;
        let marginLeft = 20;
        let marginBottom = 10;

        if(this.parsedArrayObjects) {
            const widestX_AxisLabel = this.svg.append("text").text(d3.max(this.parsedArrayObjects, d => d3.timeFormat(this.timeFormat)(d.x)));
            const widestY_AxisLabel = this.svg.append("text").text(d3.max(this.parsedArrayObjects, d => d.y));

            const widestX_AxisLabelLength =  widestX_AxisLabel.node().getComputedTextLength();
            const widestY_AxisLabelLength =  widestY_AxisLabel.node().getComputedTextLength();

            marginLeft = marginLeft + widestY_AxisLabelLength;
            marginBottom = marginBottom + widestX_AxisLabelLength;
            
            widestX_AxisLabel.remove();
            widestY_AxisLabel.remove();
        }

        this.margin = {top: marginTop, right: marginRight, bottom: marginBottom, left:marginLeft};
    }

    calculateSvgDimensions() {
        this.calculateMargin();

        const calculateVh = vh => {
			const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			return (vh * h) / 100;
		};
        const chartWidth = this.chart.getBoundingClientRect().width;
        const chartHeight = this.details.height ? this.details.height : 50;

        this.width = (chartWidth * 0.97) - this.margin.right - this.margin.left;
        this.height = calculateVh(chartHeight) - this.margin.top;
    }

    getGroups() {
        const groupLabels = [];
        
        this.rows.forEach(row => {
            const groupLabel = row[this.getIndexByColumnLabel("group")];
            if(!groupLabels.includes(groupLabel)) {
                groupLabels.push(groupLabel);
                this.groups = [...this.groups,groupLabel];
            }
        });
    }

    createScales() {
        this.x_scale = d3.scaleTime();
        this.y_scale = d3.scaleLinear();
        if(this.isMultiline) {
            this.colorScale = d3.scaleOrdinal();
        }
    }

    createAxes() {
        this.x_axis = d3.axisBottom(this.x_scale).ticks(this.tickTime(),parseInt(this.ticks.interval))
            .tickFormat(d=>d3.timeFormat(this.timeFormat)(d));
        this.y_axis = d3.axisLeft(this.y_scale);

        this.x_axisElement = this.svgCanvas.append("g")
            .attr("transform", `translate(0,${this.height})`);
        this.y_axisElement = this.svgCanvas.append("g")
            .attr("transform", "translate(0,0)");

        this.x_axisLabelElement = this.svgCanvas.append("text")
            .attr("text-anchor", "middle")
            .text(`${this.x_axisLabel}`);
        this.y_axisLabelElement = this.svgCanvas.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", `rotate(${-90})`)
            .text(`${this.y_axisLabel}`);
        
    }

    updateChart() {
        this.x_scale.domain([d3.min(this.parsedArrayObjects, d =>d.x), 
            d3.max(this.parsedArrayObjects, d =>d.x)]);
        this.y_scale.domain([0, d3.max(this.parsedArrayObjects, d => d.y)])
        if(this.isMultiline) {
            this.colorScale.domain(this.groups)
                .range(this.colors);
        }

        this.createPath();
        this.createDots();
    }

    createSVGs () {
        this.svg = d3.select(this.chart).append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet");
        this.svgCanvas = this.svg.append("g");

        this.calculateSvgDimensions();
        this.responsiveSVG();
    }
    
    createPath() {
        if(this.path) {
            this.path.remove();
        }
        if(this.isMultiline) {
            this.path = this.svgCanvas.selectAll(".line")
                .data(this.sumstat)
                .join("path")
                .attr("stroke", d => this.colorScale(d.key));
        }
        else {
            this.path = this.svgCanvas.append("path")
                .datum(this.parsedArrayObjects)
                .attr("stroke", "var(--primary)");
        }
        this.path.attr("fill", "none")
            .attr("stroke-width", 1.5)
            .transition()
            .duration(3000)
    }

    createDots() {
        if(this.dots) {
            this.dots.remove();
        }
        const onDotMouseOverHandler = d => {
            this.tooltip.transition()		
                .duration(200)		
                .style("opacity", 0);		
            this.tooltip.html(`${this.x_axisLabel}: ${d3.timeFormat(this.timeFormat)(d.x)}<br/>${this.y_axisLabel}: ${d.y}`)	
                .style("left", (d3.mouse(this)[0]+50) + "px")		
                .style("top", (d3.mouse(this)[1]) + "px");
        };
        const onDotMouseOutHandler = () => {
            this.tooltip.transition()		
                .duration(500)		
                .style("opacity", .9);	
        };
        const radius = 2.5;

        this.dots = this.svgCanvas.append("g")
            .selectAll("dot")
            .data(this.parsedArrayObjects)
            .enter()
            .append("circle")
            .attr("r", radius)
            .attr("fill", "black")
            .style("cursor", "pointer")
            .on("mouseover", (d, index, dots) => onDotMouseOverHandler(d, index, dots))
            .on("mouseout", () => onDotMouseOutHandler());
    }

    createToolTip() {
        const tooltipOpacity = 0;
        this.tooltip = d3.select(this.chart).append("div")   
            .attr("class", "tooltip")               
            .style("opacity", tooltipOpacity);
    }

    tickTime() {
        switch(this.ticks.time) {
            case "second" :
                return d3.timeSecond;
            case "minute" :
                return d3.timeMinute;
            case "hour" : 
                return d3.timeHour;
            case "day" :
                return d3.timeDay;
            case "week" :
                return d3.timeWeek;
            case "month" :
                return d3.timeMonth;
            case "year" :
                return d3.timeYear;
            default :
                return d3.timeDay;
        }
    }

    drawTimeSeries() {
        this.calculateSvgDimensions();

        this.responsiveSVG();
        this.responsiveSVGCanvas();
        this.responsiveScaleRanges();
        this.responsiveScale();
        this.responsiveYTicks();
        this.responsiveAxes();
        this.responsiveDots();
        this.responsivePath();
    }

    responsiveSVG() {
        this.svg.attr("width",this.width + this.margin.left + this.margin.right);
        this.svg.attr("height",this.height + this.margin.top + this.margin.bottom);
    }

    responsiveSVGCanvas() {
        this.svgCanvas.attr("transform",`translate(${this.margin.left},${this.margin.top + 13})`);
    }

    responsiveScaleRanges() {
        this.x_scale.range([0, this.width]);
        this.y_scale.range([this.height, 0]);
    }

    responsiveScale() {
        this.x_axis.scale(this.x_scale);
        this.y_axis.scale(this.y_scale);
    }

    responsiveYTicks() {
        this.y_axis.tickSize(-this.width)
            .tickFormat(d => d);
    }

    responsiveAxes() {
        this.x_axisElement.call(this.x_axis);
        this.y_axisElement.call(this.y_axis);
        this.styleAxesElements();

        this.y_axisLabelElement.attr("y", -this.margin.left+13)
            .attr("x", -this.height/2);
        this.x_axisLabelElement.attr("x",this.width/2)
            .attr("y",this.height + (this.margin.bottom-15));
    }

    responsiveDots() {
        this.dots.attr("cx", d => this.x_scale(d.x))
            .attr("cy", d => this.y_scale(d.y))
    }

    responsivePath() {
        if(this.isMultiline) {
            this.path.attr('d',d =>  d3.line().x(d => this.x_scale(d.x))
                .y(d => this.y_scale(d.y))(d.values));
        }
        else {
            this.path.attr('d', d3.line().x(d => this.x_scale(d.x))
                .y(d => this.y_scale(d.y)));
        }
    }

    styleAxesElements() {
        this.y_axisElement.call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick:not(:first-of-type) line")
                .attr("stroke-opacity", 0.3))
            .call(g => g.selectAll("text")
                .attr("x", -7)
                .attr("fill", "black")
                .attr("dy", "0.35em") 
                .style("margin-right", "8px") 
            );
            
        this.x_axisElement.attr("transform", `translate(0,${this.height})`)
            .call(g => g.selectAll(".tick:not(:first-of-type) line"))
            .call(g => g.selectAll("text")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", "0.35em") 
                .attr("transform", "rotate(60)")
                .style("text-anchor", "start")
                .attr("fill", "black")  
                .style("margin-top", "8px")
            );
        
        if(this.width < 200) {
            this.x_axisElement.call(g => g.selectAll("text")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", "0.35em")  
                .attr("transform", "rotate(70)")
                .style("text-anchor", "start")
                .attr("fill", "blue") 
                .style("margin-top", "8px") 
            );
        }
    }
    

    toTitleCase(string) {
        if (!string) return '';
        string = string.toString();
        string = string.toLowerCase().split(' ');
        let newString = [];
        for (let i = 0; i < string.length; i++) {
            newString[i] = string[i].substr(0, 1).toUpperCase() + string[i].substr(1);
        }
        return newString.join(' ');
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
        self.loader = this.loadData();
    }

    static get is() {
        return 'time-series';
    }
}