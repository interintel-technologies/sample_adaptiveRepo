import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import * as d3 from 'd3';
import { BaseElement } from './../../core/base-element';

export const PieChartBase = class extends utilsMixin( dataSourceMixin(BaseElement)) {

	static get properties() {
		return {
			dataToPlot:Object,
			processedData:Object,
			colors:Array,
			details: Object,
			colorScale:Object,
			chart:Object,
			svg:Object,
			svgCanvas:Object,
			sections:Object,

			width:Number,
			height:Number,
			margin:Object,
			radius:Number,
			tooltip:Object,
		};
	}

	constructor() {
		super();
		this.dataToPlot = {};
		this.colors = [];
		this.legend = [];
	}

	firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);

		this.chart = this.qs('#chart');
        this.loader = this.chartSummaryLoader ? this.chartSummaryLoader : this.loader;

		this.loader.then(() => {  
			this.cols = this.chartSummaryCols ? this.chartSummaryCols : this.cols;
            this.rows = this.chartSummaryRows ? this.chartSummaryRows : this.rows;
            this.details = this.chartSummaryDetails ? this.chartSummaryDetails : this.e.details;
			this.createChartData();
			this.initChart();
			
			//responsiveness
			new ResizeObserver(()=>this.drawChart()).observe(this.chart);

			this.animateChart();
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

	initChart() {
		this.createSVGs();
		this.createScales();
		this.updateChart();
		this.createToolTip();

		this.drawChart();
		// this.animateChart();
	}

	animateChart() {
		const arcTween = (d) => {
		  const interpolate = d3.interpolate(
			{ startAngle: 0, endAngle: 0 },
			d
		  );
		  return (t) => {
			return d3.arc()
			  .innerRadius(0)
			  .outerRadius(this.radius)(interpolate(t));
		  };
		};
	  
		this.sections
		  .attr('d', d3.arc()
			.innerRadius(0)
			.outerRadius(0)
		  )
		  .transition()
		  .duration(1000)
		  .attrTween('d', arcTween);
	}
	

	calculateDimensions() {
		const calculateVh = vh => {
			const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			return (vh * h) / 100;
		};
		const chartWidth = this.chart.getBoundingClientRect().width;
        const chartHeight = calculateVh(this.details.height ? this.details.height : 50);

		this.margin = {top:50, right: 5, bottom:25, left: 5};
        this.width = chartWidth;
        this.height = chartHeight;
		this.radius = Math.min(this.width, this.height) / 2;
	}

	createChartData() {
		const columnsToPlot = this.details["columns_to_plot"];
		const rowToPlot = 0 // can be dynamic
		const row = this.rows[rowToPlot];
		
		// create dataToPlot
		columnsToPlot.forEach(column=>{
			const columnIndex = this.cols.findIndex(item=>item.label.toLowerCase() === column.toLowerCase());
			Object.assign(this.dataToPlot,{[column]:row[columnIndex]});
		});
		
		this.colors = columnsToPlot.map((column,index,array)=>this.randomColorGenerator(array.length,index));
		console.log(this.dataToPlot);
		this.legend = columnsToPlot.map((column, index)=>{
			const color = this.colors[index];
			const text=this.toTitleCase(column); 
			
			return {
				label: text,
				color: color
			};
		});
	}

	createSVGs () {
		this.calculateDimensions();	
		this.svg = d3.select(this.chart).append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet");
		this.svgCanvas = this.svg.append("g")
			.attr("transform",`translate(${this.width / 2},${this.height / 2})`);
	}

	createScales() {
		this.colorScale = d3.scaleOrdinal()
	}

	updateChart() {
		this.colorScale.domain(this.dataToPlot).range(this.colors);
		this.pie = d3.pie().value(d => d.value);
		this.processedData = this.pie(d3.entries(this.dataToPlot));

		this.sections = this.svgCanvas
			.selectAll("path")
			.data(this.processedData)

		this.createSections();
	}

	createSections () {
		if(this.sections) {
            this.sections.remove();
        }
		const onSectionMouseOverHandler = (d,index,sections) => {
			this.tooltip.transition()		
				.duration(200)		
				.style("opacity", .9);	

			d3.select(sections[index]).style("opacity","0.7");

			this.tooltip.html(`Label: ${(this.toTitleCase(d.data.key))}<br/>Value: ${d.data.value}`)	
				.style("left", (d3.mouse(this)[0] + 50) + "px")		
				.style("top", (d3.mouse(this)[1]) + "px");
		};

		const onSectionMouseOutHandler = (index,sections) => {
			this.tooltip.transition()		
				.duration(500)		
				.style("opacity", 0);
			d3.select(sections[index]).style("opacity","1")	
		};

		this.sections = this.svgCanvas.selectAll("section")
			.data(this.processedData)
			.join("path")
			.attr('fill', d=>this.colorScale(d.data.key))
			.attr("stroke", "black")
			.style("stroke-width", "0.2px").attr("d",d3.arc()
				.innerRadius(0)
				.outerRadius(this.radius))
			.attr('fill', d=>this.colorScale(d.data.key))
			.attr("stroke", "black")
			.attr("cursor", "pointer")
			.on("mouseover", (d,index,sections) => onSectionMouseOverHandler(d, index, sections))
			.on("mouseout", (d,index,sections) => onSectionMouseOutHandler(index, sections));
	}

	createToolTip() {
		this.tooltip = d3.select(this.chart).append("div")   
			.attr("class", "tooltip")               
			.style("opacity", 0);
	}

	drawChart() {
		this.calculateDimensions();

		this.responsiveSVG();
		this.responsiveSVGCanvas();
		this.responsiveSections();
	}

	responsiveSVG() {
		this.svg.attr("width",this.width);
		this.svg.attr("height",this.height);
	}

	responsiveSVGCanvas() {
		this.svgCanvas.attr("transform",`translate(${this.width / 2}, ${this.height / 2})`);
	}

	responsiveSections () {
		this.sections.attr("d",d3.arc()
			.innerRadius(0).outerRadius(this.radius));
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
        return 'pie-chart';
    }
};
