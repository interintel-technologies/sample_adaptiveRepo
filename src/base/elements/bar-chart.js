
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import { BaseElement } from './../../core/base-element';
import * as d3 from 'd3';

export const BarChartBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {

    static get properties () {
        return {
            chart:Object,
            details: Object,

            svg:Object,
            svgCanvas:Object,

            width:Number,
            height:Number,
            margin:Object,

            x_index:Number,
            y_index:Number,

            x_axis:Object,
            y_axis:Object,

            x_axisElement:Object,
            y_axisElement:Object,

            x_axisLabelElement:Object,
            y_axisLabelElement:Object,
            filtersElement: Object,

            x_axisLabel:String,
            y_axisLabel:String,

            tooltip:Object,
            bars:Object,
            useCase:String,
            legend: Array,
            parsedXYData:Array
        }
    }

    constructor() {
        super();

        this.legend = [];
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        this.chart = this.qs('#chart');
        this.useCase = this.e.details.use_case;

        this.loader = this.chartSummaryLoader ? this.chartSummaryLoader : this.loader;

        this.loader.then(dsc => {
            this.cols = this.chartSummaryCols ? this.chartSummaryCols : this.cols;
            this.rows = this.chartSummaryRows ? this.chartSummaryRows : this.rows;
            this.details = this.chartSummaryDetails ? this.chartSummaryDetails : this.e.details;
            this.filters = this.details.filters;
            this.x_axisLabel = this.toTitleCase(this.details.x_axis);
            this.y_axisLabel = this.toTitleCase(this.details.y_axis);

            this.createChartData();

            this.initChart();

            //Responsiveness
            new ResizeObserver(()=>this.drawChart()).observe(this.chart);
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

    initChart () {
        this.createSVGs();

        this.createScales()
        this.createAxes();
        this.updateChart();
        this.createToolTip();
        this.drawChart();

        this.animateOnLoad();
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label.toLowerCase() === columnLabel.toLowerCase()); 
    }

    createChartData() {
        const x_axisIndex = this.getIndexByColumnLabel(this.details.x_axis);
        const y_axisIndex = this.getIndexByColumnLabel(this.details.y_axis);

        this.parsedXYData = this.rows.map(row=>{
            const parseValue = index => {
                switch(this.cols[index].type) {
                    case "datetime" :
                        return new Date(row[index]);
                    case "string" :
                        return parseFloat(row[index]);
                    default :
                        return row[index]
                }
            };

            const parsedObject = {
                x : row[x_axisIndex],
                y : parseValue(y_axisIndex)
            }
            return parsedObject;
        });

        this.legend = this.legend.concat({
            label: this.toTitleCase(this.y_axisLabel),
            color: "var(--primary)"
        });
    }

    calculateMargin() {
        const marginTop = 0;
        const marginRight = 0;
        let marginLeft = 20;
        let marginBottom = 40;

        if(this.parsedXYData) {
            const widestX_AxisLabel = this.svg.append("text").text(d3.max(this.parsedXYData, d => this.useCase === "time" ? d3.timeFormat(this.timeFormat)(d.x) : d.x));
            const widestY_AxisLabel = this.svg.append("text").text(d3.max(this.parsedXYData, d => d.y));

            const widestX_AxisLabelLength =  widestX_AxisLabel.node().getComputedTextLength();
            const widestY_AxisLabelLength =  widestY_AxisLabel.node().getComputedTextLength();

            marginLeft = marginLeft + widestY_AxisLabelLength;
            marginBottom = marginBottom + widestX_AxisLabelLength;
            
            widestX_AxisLabel.remove();
            widestY_AxisLabel.remove();
        }

        this.margin = {top: marginTop, right: marginRight, bottom: marginBottom, left:marginLeft};
    }

    calculateSVGDimensions() {
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

    createScales() {
        this.x_scale = d3.scaleBand();
        this.y_scale = d3.scaleLinear();
    }

    createX_Scale() {
        this.x_scale = d3.scaleBand()
            .domain(this.parsedXYData.map(item=>item.x));
    }

    createY_Scale() {
        this.y_scale = d3.scaleLinear()
            .domain([0, d3.max(this.parsedXYData, d => d.y)]);
    }

    createAxes() {
        this.x_axis = d3.axisBottom(this.x_scale);
        this.y_axis = d3.axisLeft(this.y_scale);
        if(this.useCase === "time") {
            this.x_axis = d3.axisBottom(this.x_scale).ticks(d3.timeHour.every(12))
                .tickFormat(d=>d3.timeFormat("%a %d")(d));
        }

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

    createX_Axis() {
        if(this.useCase === "time") {
            this.x_axis = d3.axisBottom(this.x_scale).ticks(d3.timeHour.every(12))
                .tickFormat(d=>d3.timeFormat("%a %d")(d));
        }
        else {
            this.x_axis = d3.axisBottom(this.x_scale);
        }
    }

    createY_Axis() {
        this.y_axis = d3.axisLeft(this.y_scale);
    }

    createX_AxisElement() {
        this.x_axisElement = this.svgCanvas.append("g")
            .attr("transform", `translate(0,${this.height})`);
    }

    createY_AxisElement() {
        this.y_axisElement = this.svgCanvas.append("g")
            .attr("transform", "translate(0,0)");
    }

    createSVGs () {
        this.svg = d3.select(this.chart).append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet");
        this.calculateSVGDimensions();
        this.svgCanvas = this.svg.append("g")
            .attr("transform",`translate(${this.margin.left},${this.margin.top + 13})`);
    }

    createBars() {
        if (this.bars) {
          this.bars.remove();
        }
      
        const onBarMouseOverHandler = (d, index, bars) => {
          this.tooltip.transition()
            .duration(200)
            .style("opacity", 0.9);
      
          d3.select(bars[index]).style("fill", "var(--link)");
      
          this.tooltip.html(`${this.x_axisLabel}: ${d.x}<br/>${this.y_axisLabel}: ${d.y}`)
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        };
      
        const onBarMouseOutHandler = (index, bars) => {
          this.tooltip.transition()
            .duration(500)
            .style("opacity", 0);
          d3.select(bars[index]).style("fill", "var(--primary)");
        };
      
        this.bars = this.svgCanvas.selectAll(".bar")
          .data(this.parsedXYData)
          .join("rect")
          .attr("class", "bar")
          .style("fill", "var(--primary)")
          .style("cursor", "pointer")
          .attr("x", (d) => this.x_scale(d.x))
          .attr("y", this.height)
          .attr("width", this.x_scale.bandwidth())
          .attr("height", 0)
          .on("mouseover", (d, index, bars) => onBarMouseOverHandler(d, index, bars))
          .on("mouseout", (d, index, bars) => onBarMouseOutHandler(index, bars))
          .transition()
          .delay((d, i) => i * 100) 
          .duration(10)
          .attr("y", (d) => this.y_scale(d.y))
          .attr("height", (d) => this.height - this.y_scale(d.y));
    }

    createToolTip() {
        this.tooltip = d3.select(this.chart).append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);
    }

    updateChart() {
        this.x_scale.domain(this.parsedXYData.map(item=>item.x));
        this.y_scale.domain([0, d3.max(this.parsedXYData, d => d.y)]);

        this.createBars();
    }

    drawChart() {
        this.calculateSVGDimensions();
        this.responsiveSVG();
        this.responsiveSVGCanvas();
        this.responsiveScaleRanges();
        this.responsiveScale();
        this.responsiveYTicks();
        this.responsiveAxes();
        this.responsiveBars();
    }

    responsiveSVG() {
        this.svg.attr("width",this.width + this.margin.left + this.margin.right);
        this.svg.attr("height",this.height + this.margin.top + this.margin.bottom);
    }

    responsiveSVGCanvas() {
        this.svgCanvas.attr("transform",`translate(${this.margin.left},${this.margin.top + 13})`);
    }

    responsiveScaleRanges() {
        this.y_scale.range([this.height, 0]);
        this.x_scale.rangeRound([0, this.width], .05).padding(0.1)
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
        this.responsiveAxesLabels();
    }
    
    responsiveBars() {
        this.bars.attr("x", d => this.x_scale(d.x))
            .attr("width", this.x_scale.bandwidth())
            .attr("y", d => this.y_scale(d.y))
            .attr("height", d =>  this.height - this.y_scale(d.y))
    }

    responsiveAxesLabels() {
        this.y_axisLabelElement.attr("y", -this.margin.left+13)
            .attr("x", -this.height/2);
        this.x_axisLabelElement.attr("x",this.width/2)
            .attr("y",this.height + (this.margin.bottom-25));
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
                .attr("fill", "black") 
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

    static get is() {
        return 'bar-chart';
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
        self.loader = this.loadData();
    }
}