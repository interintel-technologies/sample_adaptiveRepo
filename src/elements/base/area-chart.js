
import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';

// import {LitElement} from 'lit-element';
import * as d3 from 'd3';



export const AreaChartBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
    constructor() {
        super();
    }


    static get is() {
        return 'area-chart';
    }

    areaChart(selector, props, data){
        // set the dimensions and margins of the graph
        let margin = {top: 10, right: 30, bottom: 30, left: 50},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        let svg = d3.select(selector)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        // Add X axis --> it is a date format
        const x = d3.scaleBand()
            .domain(data.map(function (d) {
                return d[0];
            }))
            .range([ 0, width ]);

        svg.append("g")
            .attr("transform", "translate(0," + (height+5) + ")")
            .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0));

        // Add Y axis
        var y = d3.scaleLinear()
            .domain( d3.extent(data, function(d) { return +d[4]; }) )
            .range([ height, 0 ]);

        svg.append("g")
            .attr("transform", "translate(-5,0)")
            .call(d3.axisLeft(y).tickSizeOuter(0));

        // Add the area
        svg.append("path")
            .datum(data)
            .attr("fill", "#69b3a2")
            .attr("fill-opacity", .3)
            .attr("stroke", "none")
            .attr("d", d3.area()
            .x(function(d) { return x(d[0]) })
            .y0( height )
            .y1(function(d) { return y(+d[4]) })
            )

        // Add the line
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#69b3a2")
            .attr("stroke-width", 2)
            .attr("d", d3.line()
            .x(function(d) { return x(d[0]) })
            .y(function(d) { return y(+d[4]) })
            )

        // Add the line
        svg.selectAll("myCircles")
            .data(data)
            .enter()
            .append("circle")
            .attr("fill", "red")
            .attr("stroke", "none")
            .attr("cx", function(d) { return x(d[0]) })
            .attr("cy", function(d) { return y(parseInt(d[4])) })
            .attr("r", 2)
        
    }

    initAreaChart(dsc){
        const rows = dsc.rows;
        const data = dsc.data;
        const cont = this.qs('#chart');

        this.areaChart(cont, Object.assign({}, this.chartTheme, {
            width: this.qs('#container').clientWidth,
            height: 400,
        }), rows);
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        let self = this;

        this.loader.then(dsc => {
            self.initAreaChart(dsc);
        });
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

