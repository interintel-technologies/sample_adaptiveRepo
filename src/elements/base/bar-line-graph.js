
    import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
    import {BaseElement} from '../../core/base-element';
    import {utilsMixin} from '../../core/mixins/utils-mixin';

    import {LitElement} from 'lit-element';
    import * as d3 from 'd3';
    import { max } from 'd3';



    export const BarLineGraphBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
        constructor() {
            super();
            this.chartTheme = {
                margin : {
                    top: 35, 
                    right: 145, 
                    bottom: 35, 
                    left: 45
                },
                barsColors : '#23d160',
                tickColor : '#aeaeae',
                pathColor : '#aeaeae',
                gridColor : '#aeaeae', 
                barTitleColor : "#23d160",
                lineColor : "steelblue",
            }
        }

        static get is() {
            return 'bar-line-graph';
        }

        static get properties() {

            return {
                chartTheme: Object,
            }
        }

        barLineGraph(selector, props, data){
            const {
                margin, 
                width, 
                height, 
                barsColors, 
                tickColor, 
                pathColor, 
                gridColor, 
                barTitleColor, 
                lineColor,
            } = props;
    
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;
            const globalStyle = getComputedStyle(document.body);
    
            const yAccessor = d => d.length;
    
            const x = d3.scaleBand()
                .rangeRound([0, innerWidth])
                .padding(0.1);
    
            const y = d3.scaleLinear()
                .range([innerHeight - margin.bottom - 17, 0]);
    
            const svg = d3.select(selector);
    
            let chart = svg.selectAll('svg')
                .data([null]);
    
            chart = chart.enter()
                .append('svg')
                .merge(svg)
                    // .attr('width', innerWidth)
                    // .attr('height', innerHeight);
                    .attr('viewBox', `0,0, ${innerWidth}, ${innerHeight}`)
    
            chart.append('text')
                .attr('x', 0)             
                .attr('y', margin.top / 2)
                .attr('text-anchor', 'start')  
                .style('font-size', '18px') 
                .attr('fill', '#4c6072') 
                .text('Bar Graph');
    
    
            let g = chart.selectAll('g').data([null]);
    
            g = g.enter()
                .append('g')
                .merge(g)
                    .attr('transform', `translate(${margin.left}, ${margin.top})`)
                    
    
            const xAxis = d3.axisBottom(x);
    
            const yAxis = d3.axisLeft(y)
                .ticks(5)
                .tickSizeInner(-innerWidth)
                .tickSizeOuter(0)
                .tickPadding(10);
    
            x.domain(data.map(function (d) {
                return d[0];
            }));
    
            y.domain([0, max(data, function (d) {
                return d[4];
            })]);
    
            let xAxisG = g.selectAll('.x axis').data([null]);
            xAxisG = xAxisG.enter()
                .append('g')
                .attr('class', 'x axis')
                .merge(xAxisG)
                    .attr('transform', `translate(0, ${innerHeight - margin.bottom - 17})`)
            
            let yAxisG = g.selectAll('y axis').data([null]);
            yAxisG = yAxisG.enter()
                .append('g')
                .attr('class', 'y axis')
                .merge(yAxisG)
    
            xAxisG.call(xAxis);
            xAxisG.selectAll('.tick text')
                .attr('fill', tickColor)
            xAxisG.selectAll('.tick line')
                .attr('stroke', pathColor);
            xAxisG.select('.domain')
                .attr('stroke', 'transparent');
    
            yAxisG.call(yAxis);
            yAxisG.selectAll('.tick text')
                .attr('fill', tickColor)
            yAxisG.selectAll('.tick line')
                .attr('stroke', pathColor);
            yAxisG.select('.domain')
                .attr('stroke', 'transparent');    
    
            let padding = 100;
    
            const tooltip = d3.select(this.qs("#tooltip"));
    
            const onMouseEnter = d => {
                const xPos = innerWidth / 2;
                const yPos = innerHeight - y(d[4]);
    
                tooltip.style("opacity", 1);
    
                tooltip.style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .html(`<b>Value</b>: ${Math.floor(d[4])}`)
    
            }
    
            const onMouseLeave = () => tooltip.style("opacity", 0);

            const line = d3.line()   
                .x(d => x(d[0]))   
                .y(d => y(d[4]))
    
            let bar = g.selectAll('rect').data([null]);
    
            bar = bar.data(data)
                .enter()
                .append('rect')
                .merge(bar);
    
            bar.attr('y', d => y(0))
                .attr('x', (d, i) => x(d[0]))
                .attr('height',  d => innerHeight - margin.bottom - 17 - y(0))
                .attr('width', x.bandwidth())
                .attr('fill', globalStyle.getPropertyValue('--app-default-color'))
                .on("mouseenter", onMouseEnter)
                .on("mouseleave", onMouseLeave);
    
            bar.append('text')
                .attr('class', 'value')
                .attr('dy', '.35em')
                .attr('x', d => x(d[0]))
                .attr('y', d => y(d[4]) - 17)
                .attr('fill', barTitleColor)
                .style('z-index', '9999')
                .text(d => Math.floor(d[4]));
    
            chart.selectAll('rect')
                .transition()
                .duration(800)
                .attr('y', d => y(d[4]))
                .attr('height',  d => innerHeight - margin.bottom - 17 - y(d[4]))
                .delay((d,i) => {
                    return(i*100)
                })

            chart.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", lineColor)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
        }

        initBarLineGraph(dsc){
            const rows = dsc.rows;
            const cont = this.qs('#chart');
    
            
    
            this.barLineGraph(cont, Object.assign({}, this.chartTheme, {
                width: this.qs('#container').clientWidth,
                height: 400,
            }), rows);
        }

        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            let self = this;
    
            this.loader.then(dsc => {
                self.initBarLineGraph(dsc);
    
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

    