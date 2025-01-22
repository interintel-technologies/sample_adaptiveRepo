import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import * as d3 from 'd3';

export const GroupedBarChartBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
    static get properties () {
        return {
            groups: Array,
            subGroups: Array,
            filters: Object,

            chart: Object,
            svg: Object,
            svgCanvas: Object,
            
            width: Number,
            height: Number,
            margin: Object,
            
            x_axis: Object,
            y_axis: Object,
            
            x_scale: Object,
            x_scale2: Object,
            y_scale: Object,
            colorScale: Object,
            
            x_axisElement: Object,
            y_axisElement: Object,
            filtersElement: Object,
            x_axisLabelElement: Object,
            y_axisLabelElement: Object,
            
            x_axisLabel: String,
            y_axisLabel: String,
            
            slice: Object,
            bars: Object,
            colors: Array,
            tooltip: Object,
            chartTitle: Object,
            details: Object,

            legendColor: Object,
            legendKey: Object,
            dateRange: Object,
            calenderToggler: String
        }
    }

    constructor() {
        super();
        this.groups = [];
        this.subGroups = [];
        this.chartData = [];
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.chart = this.qs('#chart');

        this.loader = this.chartSummaryLoader ? this.chartSummaryLoader : this.loader;
        this.details = this.chartSummaryDetails ? this.chartSummaryDetails : this.e.details;
        this.timeFormat = this.details.time_format ? this.details.time_format : "%d %b"; 
        this.loader.then(() => {
            this.cols = this.chartSummaryCols ? this.chartSummaryCols : this.cols;
            this.rows = this.chartSummaryRows ? this.chartSummaryRows : this.rows;
            
            this.createChartData();
            this.x_axisLabel = this.details.x_axisLabel;
            this.y_axisLabel = this.details.y_axisLabel;
            
            this.initGroupedBarChart();

            //Responsiveness
            new ResizeObserver(()=>this.drawGroupedBarChart()).observe(this.chart);
        });
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        changedProperties.forEach((oldValue, propName) => {
            if(propName === "rows" && oldValue) {
                if(oldValue.length > 0) {
                    this.createChartData();
                    this.updateChart();
                    this.drawGroupedBarChart();
                }
            }
        });
    }

    createGroups() {
        const groupLabels = [];
        
        this.rows.forEach(row => {
            let groupLabel = row[this.getIndexByColumnLabel("group")];
            if(!groupLabels.includes(groupLabel)) {
                if(this.isColumnLabelTypeDateTime("group")) {
                    groupLabel = d3.timeFormat(this.timeFormat)(new Date(groupLabel))
                }
                groupLabels.push(groupLabel);
                this.groups = [...this.groups, groupLabel];
            }
        });
    }

    createChartData() {
        this.createGroups();
        this.subGroups = this.details["columns_to_plot"] ? this.details["columns_to_plot"] : [];
        this.colors = this.subGroups.map((item,index,array)=>this.randomColorGenerator(array.length,index));
        this.chartData = [];
        this.groups.forEach((group,index)=>{
            let newGroup = {
                group: group
            };
            
            this.subGroups.forEach(subgroup => newGroup = {...newGroup, [subgroup]: this.rows[index][this.getIndexByColumnLabel(subgroup)]});
            this.chartData = [...this.chartData, newGroup];
        });
        this.legend = this.subGroups.map((subGroup, index)=>{
			const color = this.colors[index];
			const text=this.toTitleCase(subGroup); 
			
			return {
				label: text,
				color: color
			};
		});
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label.toLowerCase() === columnLabel.toLowerCase()); 
    }

    initGroupedBarChart () {
        this.createSVGs();

        this.createScales();
        this.createAxes();
        this.updateChart();

        this.createToolTip();

        this.drawGroupedBarChart();
    }

    calculateMargin() {
        const marginTop = 40;
        const marginRight = 25;
        let marginLeft = 5;
        let marginBottom = 15;

        if(this.chartData) {
            const widestX_AxisLabel = this.svg.append("text").text(d3.max(this.groups));
            const widestY_AxisLabel = this.svg.append("text").text(this.maxYAxisValue());

            marginLeft = widestY_AxisLabel.node().getComputedTextLength() + marginLeft;
            marginBottom = widestX_AxisLabel.node().getComputedTextLength() + marginBottom;

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
        const chartWidth = this.chart.getBoundingClientRect().width - this.margin.left;
        const chartHeight = calculateVh(this.details.height ? this.details.height : 50) - this.margin.bottom;

        this.width = chartWidth;
        this.height = chartHeight;
    }

    createScales() {
        this.x_scale = d3.scaleBand();
        this.x_scale2 = d3.scaleBand();
        this.y_scale = d3.scaleLinear();
        this.colorScale = d3.scaleOrdinal()
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
            .attr("fill", "var(--grey-dark)")
            .text(`${this.x_axisLabel}`);
        this.y_axisLabelElement = this.svgCanvas.append("text")
            .attr("text-anchor", "middle")
            .attr("fill", "var(--grey-dark)")
            .attr("transform", `rotate(${-90})`)
            .text(`${this.y_axisLabel}`);
    }

    maxYAxisValue() {
        let maxValue = 0;

        this.rows.forEach(row=>{
            this.subGroups.forEach(subgroup => {
                const value = row[this.getIndexByColumnLabel(subgroup)];
                if(value > maxValue) {
                    maxValue = value;
                }
            });
        });

        return maxValue;
    }

    updateChart() {
        this.x_scale.domain(this.groups);
        this.x_scale2.domain(this.subGroups);
        this.y_scale.domain([0, this.maxYAxisValue()]);
        this.colorScale.domain(this.subGroups).range(this.colors);

        this.createSlice();
        this.createBars();
    }

    createSlice() {
        if(this.slice) {
            this.slice.remove();
        }
        this.slice = this.svgCanvas.selectAll("slice").data(this.chartData)
            .join("g").attr("class", "g");
    }

    createBars() {
        if(this.bars) {
            this.bars.remove();
        }
        const onBarMouseOverHandler = (d,index,bars) => {
            this.tooltip.transition()		
                .duration(200)		
                .style("opacity", .9);	
            d3.select(bars[index])
                .style("opacity","0.6")
            this.tooltip.html(`${this.x_axisLabel}: ${(d.key)}<br/>${this.y_axisLabel}: ${d.value}`)	
                .style("left", (d3.mouse(this)[0]+70) + "px")		
                .style("top", (d3.mouse(this)[1]) + "px");
        };
        const onBarMouseOutHandler = (d,index,bars) => {
            this.tooltip.transition()		
                .duration(500)		
                .style("opacity", 0);
            d3.select(bars[index]).style("opacity","1")	
        };

        this.bars = this.slice
            .selectAll("rect")
            .data(d=> this.subGroups.map(subgroup => ({key:subgroup,value:d[subgroup]})))
            .join("rect")
            .style("fill", d => this.colorScale(d.key))
            .style("cursor", "pointer")
            .style("ry", "5")
            .on("mouseover",(d,index,bars) => onBarMouseOverHandler(d, index, bars))
            .on("mouseout",(d,index,bars) => onBarMouseOutHandler(d, index, bars));
    }

    createSVGs () {
        this.svg = d3.select(this.chart).append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet");
        this.svgCanvas = this.svg.append("g");

        this.calculateSvgDimensions();
    }

    createToolTip() {
        const tooltipOpacity = 0;
        this.tooltip = d3.select(this.chart).append("div")   
            .attr("class", "tooltip")               
            .style("opacity", tooltipOpacity);
    }

    drawGroupedBarChart() {
        this.calculateSvgDimensions();

        this.responsiveSVG();
        this.responsiveSVGCanvas();
        this.responsiveScale();
        this.responsiveYTicks();
        this.responsiveAxes();
        this.responsiveSlice();
        this.responsiveBars();
    }

    responsiveSVG() {
        this.svg.attr("width", this.width + this.margin.left);
        this.svg.attr("height", this.height + this.margin.bottom);
    }

    responsiveSVGCanvas() {
        this.svgCanvas.attr("transform", `translate(${this.margin.left}, 0)`);
    }

    responsiveScale() {
        this.x_scale.range([0, this.width]).padding(0.2);
        this.x_scale2.range([0,this.x_scale.bandwidth()]).padding(0.1);
        this.y_scale.range([this.height, 0]);
        
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

    responsiveSlice() {
        this.slice.attr("transform",d =>`translate(${this.x_scale(d.group)},0)`)
    }

    responsiveBars() {
        this.bars.attr("x", d => this.x_scale2(d.key))
            .attr("width", this.x_scale2.bandwidth())
            .attr("y", d => this.y_scale(d.value))
            .attr("height", d =>  this.height - this.y_scale(d.value))
    }

    styleAxesElements() {
        this.y_axisElement.call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick:not(:first-of-type) line")
                .attr("stroke-opacity", 0.05))
            .call(g =>g.selectAll("text").attr("x", -7));
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

    isColumnLabelTypeDateTime(columnLabel) {
        return this.cols[this.getIndexByColumnLabel(columnLabel)].type === "datetime";
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    static get is() {
        return "grouped-bar-chart";
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
        self.loader = this.loadData();
    }
}