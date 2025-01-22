
import {mqttMixin} from '../../core/mixins/mqtt-mixin';
import { utilsMixin } from '../mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';
import {LitElement} from 'lit-element';
import * as d3 from 'd3';
import { he } from 'date-fns/locale';


export const StackedBarBase = class extends utilsMixin(SerializableElement) {
    constructor() {
        super();
        this.e = null;
    }

    static get properties(){
        return{
            e: { type: Object }
        }
    }


    static get is() {
        return 'stacked-bar';
    }

    initStackedBarChart(dsc){
        console.log(dsc)
        const data = dsc.data;

        data.forEach( d => {
            let date = new Date(d.DATE);
            return d.DATE = new Date(d.DATE);
        });

        const width = 960;
        const height = 500;
        const margin = 5;
        const padding = 5;
        const adj = 40;
        const svg = d3.select(this.shadowRoot.querySelector('#chart')).append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "-"
                  + adj + " -"
                  + adj + " "
                  + (width + adj *3) + " "
                  + (height + adj*3))
            .style("padding", padding)
            .style("margin", margin)
            .classed("svg-content", true);

        const stackKey = ['DELIVERED', 'OFFLINE', 'SENT', 'UNDELIVERED', 'UNKNOWN']

        
        const stack = d3.stack().keys(stackKey);
        const series = stack(data);

        const xScale = d3.scaleBand().range([0,width]);
        const yScale = d3.scaleLinear().rangeRound([height, 0]);
        xScale.domain(data.map((d) => d.DATE));
        yScale.domain([0, d3.max(series, (d) => d3.max(d, (d) => d[1]))])
            .rangeRound([height, 0]);

        const yaxis = d3.axisLeft().scale(yScale); 
        const xaxis = d3.axisBottom().scale(xScale)
            .tickFormat(d3.timeFormat('%b-%d'));

        const colors = d3
            .scaleOrdinal()
            .domain(series.map((d) => d.key))
            .range(
                d3
                .quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), series.length)
                .reverse()
            )
            .unknown("#ccc");

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", `translate(40, ${height})`)
            .call(xaxis);

        svg.append("text")
            .attr("transform", `translate(${width/2},${(height - 5)})`)
            .attr("y", "3em")
            .style("text-anchor", "middle")
            .style('color', '#4a4a4a')
            .text("Dates");

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", `translate(40, 0)`)
            .call(yaxis);

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr('x', '-250')
            .attr("y", "-1em")
            .style("text-anchor", "middle")
            .style('color', '#4a4a4a')
            .text(stackKey);

        const legend = svg
            .append("g")
            .attr("class", "legend")
            .attr("transform", "translate(" + (width - 50) + "," + 20 + ")")
            .selectAll("g")
            .data(series)
            .enter()
            .append("g");
            
        // draw legend colored rectangles
        legend
            .append("rect")
            .attr("y", (d, i) => i * 30)
            .attr("height", 10)
            .attr("width", 10)
            .attr("fill", (d) => colors(d.key));
            
        // draw legend text
        legend
            .append("text")
            .attr("y", (d, i) => i * 30 + 9)
            .attr("x", 5 * 3)
            .text((d) => d.key);
        svg
            .append("text")
            .attr("class", "chart-title")
            .attr("y", -40)
            .attr("x", innerHeight / 2)
            .text(this.e.name)
            .attr("font-family", "arial")
            .attr("font-size", 24)
            .style("font-weight", "bold")
            .style("font-size", "30")
            .style('transform', 'translate(-229px, 25px)');

        const Tooltip = d3.select(this.shadowRoot.querySelector('#chart'))
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style('position', "absolute")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        const mouseover = function(d) {
            Tooltip
                .style("opacity", 1)
            d3.select(this)
                .style("stroke", "black")
                .style("opacity", 1)
              }
        const mousemove = function(d) {
            Tooltip
                .html(d3.max(series, (d) => d3.max(d, (d) => d[1])))
                .style("left", (d3.mouse(this)[0]) + "px")
                .style("top", (d3.mouse(this)[1]) + "px")
            }
        const mouseleave = function(d) {
            Tooltip
                .style("opacity", 0)
            d3.select(this)
                .style("stroke", "none")
                .style("opacity", 0.8)
            }
        svg.append("g")
            .attr('transform', `translate(40, 0)`)
            .selectAll("g")
            // Enter in the stack data = loop key per key = group per group
            .data(series)
            .enter().append("g")
            .attr("fill", function(d) { return colors(d.key); })
            .selectAll("rect")
            // enter a second time = loop subgroup per subgroup to add all rectangles
            .data(function(d) { return d; })
            .enter().append("rect")
                .attr("x", function(d) { return xScale(d.data.DATE); })
                .attr("y", function(d) { return yScale(d[1]); })
                .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); })
                .attr("width",xScale.bandwidth())
            // .on("mouseover", mouseover)
            // .on("mousemove", mousemove)
            // .on("mouseleave", mouseleave)
    
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    updated(changedProperties) {
        if (changedProperties.has('e')) {
            const self = this;

            if (self.e.kind) {
              try {
                self.register(self, self.e.kind);
              } catch (e) {
                console.error(e);
              }
            }
        

                self.initStackedBarChart(this.e);    
        
        }
       
     
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
        self.loader = this.loadData();
    }

}

