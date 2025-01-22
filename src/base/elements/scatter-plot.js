import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import * as d3 from 'd3';

export const ScatterPlotBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
    constructor() {
        super();
    }


    static get is() {
        return 'scatter-plot';
    }

    initScatterPlot(dsc){
        const rows = dsc.rows;

        // set the dimensions and margins of the graph
        let margin = {top: 10, right: 30, bottom: 40, left: 50},
            width = 520 - margin.left - margin.right,
            height = 520 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select(this.qs('.chart'))
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")")
        
        const x = d3.scaleBand()
            .rangeRound([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .range([height, 0]);

        x.domain(rows.map(function (d) {
            return d[0];
        }));

        y.domain([0, d3.max(rows, function (d) {
            return d[4];
        })])
        .nice();

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSize(-height*1.3).ticks(10))
            .select(".domain").remove()

        svg.append("g")
            .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
            .select(".domain").remove()

        // Add dots
        svg.append('g')
        .selectAll("dot")
        .data(rows)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return x(d[0]); } )
            .attr("cy", function (d) { return y(d[4]); } )
            .attr("r", 5)
            // .style("fill", function (d) { return color(d.Species) } )
            }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        let self = this;

        this.loader.then(dsc => {
            self.initScatterPlot(dsc);
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