import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';
import * as d3 from 'd3';

export const LineChartBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {

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

            x_scale:Object,
            y_scale:Object,
            colorScale:Object,

            x_axis:Object,
            y_axis:Object,

            x_axisElement:Object,
            y_axisElement:Object,
            x_axisLabelElement:Object,
            y_axisLabelElement:Object,
            filtersElement: Object,

            line:Object,
            dots:Object,

            x_axisLabel:String,
            y_axisLabel:String,

            tooltip:Object,
            legend:Object,
            chartTitle:Object,
            colors: Array,

            parsedArrayObjects:Array,
            isMultiline: Boolean,
            sumstat: Object
        };
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
            this.filters = this.details.filters;
            this.isMultiline = this.details.isMultiline;

            this.createChartData();

            this.initChart();

            //responsiveness
            new ResizeObserver(() => this.drawChart()).observe(this.chart);
        });
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        changedProperties.forEach((oldValue, propName) => {
            if(propName === "rows" && oldValue) {
                if(oldValue.length > 0) {
                    this.createChartData();
                    this.updateChart();
                    this.drawChart();
                }
            }
        });
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label.toLowerCase() === columnLabel.toLowerCase()); 
    }

    initChart () {
        this.createSVGs();
        
        this.createScales();
        this.createAxes();
        this.updateChart();
        
        this.createToolTip();
        this.createFilters();
        this.createChartTitle();
        this.createLegend();

        this.drawChart();
    }

    createChartData() {
        if(this.isMultiline) {
            this.createGroups();
            this.colors = this.groups.map((item,index,array)=>this.randomColorGenerator(array.length,index));
        }
        const x_axisIndex = this.getIndexByColumnLabel(this.details.x_axis);
        const y_axisIndex = this.getIndexByColumnLabel(this.details.y_axis);

        this.parsedArrayObjects = this.rows.map(row=>{
            let object = {
                x : parseFloat(row[x_axisIndex]),
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
    }

    calculateMargin() {
        const marginTop = 80;
        const marginRight = 50;
        let marginLeft = 30;
        let marginBottom = 35;

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
        const chartHeight = this.details.height ? this.details.height : 65;
        
        this.width = (chartWidth * 0.95) - this.margin.left - this.margin.right;
        this.height = calculateVh(chartHeight) - this.margin.top;
    }

    createGroups() {
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
        this.x_scale = d3.scaleLinear();
        this.y_scale = d3.scaleLinear();
        if(this.isMultiline) {
            this.colorScale = d3.scaleOrdinal();
        }
    }

    createAxes() {
        this.x_axis = d3.axisBottom(this.x_scale);
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
            .attr("transform", "rotate(-90)")
            .text(`${this.y_axisLabel}`)
    }

    createLine() {
        this.line = d3.line();
    }

    createSVGs () {
        this.svg = d3.select(this.chart).append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet");
        this.svgCanvas = this.svg.append("g");
        
        this.calculateSvgDimensions();
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
                .attr("stroke", "var(--app-default-color)");
        }
        this.path.attr("fill", "none")
            .attr("stroke-width", 1.5)
            .transition()
            .duration(3000);
    }

    createDots() {
        if(this.dots) {
            this.dots.remove();
        } 
        const onDotMouseOverHandler = (d, index, dots) => {
            this.tooltip.transition()		
                .duration(200)		
                .style("opacity", .9);		
            this.tooltip.html(`${this.x_axisLabel}: ${d.x}<br/>${this.y_axisLabel}: ${d.y}`)	
                .style("left", (d3.mouse(this)[0]+50) + "px")		
                .style("top", (d3.mouse(this)[1]) + "px");
        };
        const onDotMouseOutHandler = () => {
            this.tooltip.transition()		
                .duration(500)		
                .style("opacity", 0);	
        };
        const radius = 2.5;

        this.dots = this.svgCanvas.append("g")
            .selectAll("dot")
            .data(this.parsedArrayObjects)
            .enter()
            .append("circle")
            .attr("r", radius)
            .attr("fill", "b;acl")
            .style("cursor", "pointer")
            .on("mouseover", (d,index,dots) => onDotMouseOverHandler(d, index, dots))
            .on("mouseout", () => onDotMouseOutHandler());
    }

    createFilters() {
        this.filtersElement = d3.select(this.chart).append("div")
            .attr("class", "filters-element");
        
        this.createSelectFilters();
    }

    createSelectFilters() {
        // only create filters when available
        if(this.filters) {
            const onFilterChangeHandler = key => {
                const value = this.shadowRoot.querySelector(`#${key},Select`).value; 
    
                const selectFilter = {
					[key]: value
				};

                this.mergeParams(selectFilter);
            };
    
            Object.entries(this.filters).forEach(([key, filters]) => {
                const selectContainer = this.filtersElement.append("div")
                    .attr("class", "select");
                const select = selectContainer.append("select").attr("id", key+"Select")
                    .on("change", () => onFilterChangeHandler(key));
    
                filters.forEach(filter => {
                    select.append("option").text(filter);
                });
            });  
        }
    }

    createToolTip() {
        this.tooltip = d3.select(this.chart).append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);
    }

    createChartTitle () {
		const name = this.e ? this.e.name : "";

        this.chartTitle = this.svgCanvas.append("text")
            .attr("text-anchor", "start")
            .attr("x",0)
            .attr("y", -this.margin.top)
            .attr("font-size",16)
            .attr("text-decoration","underline")
            .text(name);
    }

    createLegend() {
        this.legend = d3.select(this.chart).append("div") 
            .attr("class","legend");
        
        if(this.isMultiline) {
            this.groups.forEach(group=>{
                const color = this.colorScale(group);
                const text=this.toTitleCase(group); 
                const cont = this.legend.append("div")
                    .attr("class","legend-item");

                cont.append("div")
                    .attr("class","legend-color")
                    .style("background-color", color);

                cont.append("h4")
                    .text(text);
            });
        }
        else {
            const color = "var(--app-default-color)";
            const text=this.toTitleCase(this.y_axisLabel); 
            const cont = this.legend.append("div")
                .attr("class","legend-item");
            cont.append("div")
                .attr("class","legend-color")
                .style("background-color", color);

            cont.append("h4")
                .text(text);
        }
    }

    updateChart() {
        this.x_scale.domain([d3.min(this.parsedArrayObjects, d =>d.x), d3.max(this.parsedArrayObjects, d =>d.x)]);
        this.y_scale.domain([0, d3.max(this.parsedArrayObjects, d => d.y)]);
        if(this.isMultiline) {
            this.colorScale.domain(this.groups)
                .range(this.colors);
        }

        this.createPath();
        this.createDots();
    }

    drawChart() {
        this.calculateSvgDimensions();

        this.responsiveSVG();
        this.responsiveSVGCanvas();
        this.responsiveScaleRanges();
        this.responsiveScale();
        this.responsiveYTicks();
        this.responsiveAxes();        
        this.responsiveAxesLabels();
        this.responsiveDots();
        this.responsiveChartTitle();
        this.responsivePath();
        this.responsiveLegend();
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
    }

    responsiveChartTitle() {
        this.chartTitle.attr("x", -this.margin.left);
    }

    responsiveAxesLabels() {
        this.y_axisLabelElement.attr("y", -this.margin.left+13)
            .attr("x", -this.height/2);
        this.x_axisLabelElement.attr("x",this.width/2)
            .attr("y",this.height + (this.margin.bottom-16));
    }

    responsiveLegend() {
        this.legend.style("width", this.width);
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
            .call(g =>g.selectAll("text").attr("x", -10));

        this.x_axisElement.attr("transform", `translate(0,${this.height})`)
            .call(g => g.selectAll(".tick:not(:first-of-type) line")
                .attr("stroke-opacity", 0.3))
            .call(g =>g.selectAll("text")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", ".35em")
                .attr("transform", "rotate(60)")
                .style("text-anchor", "start")
            );
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
        return 'line-chart';
    }
};


