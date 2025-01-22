import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { SummaryChartStyles } from './summary-chart-css.js';
import * as d3 from 'd3';
import '../month-range-picker/month-range-picker.js';
import globalStyles from '../../App.css?raw';

export class SummaryChart extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      SummaryChartStyles,
      css`
        :host {
          display: block;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      keys: { type: Array },
      fromMonth: { type: String },
      toMonth: { type: String },
      rows: { type: Array },
      e: { type: Object },
      cols: { type: Array },
    };
  }

  constructor() {
    super();
    this.keys = [];
    this.rows = [];
    this.data = [];
    this.cols = [];
    this.colorCodes = [];
    this.fromMonth = '';
    this.toMonth = '';
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (
      changedProperties.has('cols') ||
      changedProperties.has('rows') ||
      changedProperties.has('e')
    ) {
      this.data = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
      this.fromMonth = this.data[0].month || '';
      this.toMonth = this.data[this.data.length - 1].month || '';
      this.keys = Object.keys(this.data[0] || {}).filter(key => key !== 'month');
      this.colorCodes = [this.primaryColor, this.surfaceVariantColor, this.secondaryColor];

    }

    if (changedProperties.has('fromMonth') || changedProperties.has('toMonth')) {
      this.updateChart();
    }
  }


  handleMonthRangeChange(event) {
    this.fromMonth = event.detail.fromMonth;
    this.toMonth = event.detail.toMonth;
  }

  isDarkColor(color) {
    // A simple check for predefined color variables
    const darkColors = ['var(--black)', 'var(--primary)'];
    return darkColors.includes(color);
  }

  updateChart() {
    const filteredData = this.data.filter(d => {
      const month = d.month;
      return month >= this.fromMonth && month <= this.toMonth;
    });

    this.createChart(filteredData, this.keys);
  }

  createChart(data, keys) {
    const margin = { top: 20, right: 20, bottom: 50, left: 40 }; // Increase bottom margin for slanted labels
    const svg = d3.select(this.shadowRoot.querySelector('svg'));
    svg.selectAll('*').remove();
  
    const width = parseInt(svg.style('width')) - margin.left - margin.right;
    const height = parseInt(svg.style('height')) - margin.top - margin.bottom;
  
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .attr('class', 'svg');
  
    const x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .rangeRound([0, width])
      .paddingInner(0.3)
      .paddingOuter(0.3);
  
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(keys, key => d[key]))]).nice()
      .rangeRound([height, 0]);
  
    const color = d3.scaleOrdinal()
      .domain(keys)
      .range(this.colorCodes);
  
    const tooltip = d3.select(this.shadowRoot.querySelector('.tooltip'));
  
    g.append('g')
    .selectAll('g')
    .data(data)
    .enter().append('g')
    .attr('transform', d => `translate(${x(d.month)},0)`)
    .selectAll('rect')
    .data(d => keys.map(key => ({ key, value: d[key] })))
    .enter().append('rect')
    .attr('x', d => x.bandwidth() / keys.length * keys.indexOf(d.key))
    .attr('y', d => y(d.value))
    .attr('width', x.bandwidth() / keys.length)
    .attr('height', d => height - y(d.value))
    .attr('fill', d => color(d.key))
    // Apply border-radius only to the top side
    .attr('rx', (d) => y(d.value) < height ? 10 : 0)
    .attr('ry', (d) => y(d.value) < height ? 10 : 0)
    .style('transition', 'transform 0.2s, stroke 0.2s')
    .on('mouseover', function(event, d) {
      tooltip.transition().duration(200).style('opacity', .9);
      tooltip.html(`${event.key}: ${event.value}`)
        .style("left", (d3.pointer(event)[0] + 70) + "px")
        .style("top", (d3.pointer(event)[1]) + "px");
  
      d3.select(this)
        .style("stroke", "black")
        .style("transform", "scale(0.9)");
    })
    .on('mouseout', function() {
      tooltip.transition().duration(500).style('opacity', 0);
      d3.select(this)
        .style("stroke", "none")
        .style("transform", "scale(1)");
    });
  
  
    // Append X axis with slanted labels
    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'start')  // Align text at the start
      .attr('dx', '0.8em')  // Adjust horizontal position
      .attr('dy', '0')  // Adjust vertical position
      .attr('transform', 'rotate(45)');  // Rotate in the opposite direction
  

      g.append('g')
  .attr('class', 'y-axis')
  .call(d3.axisLeft(y).ticks(4));

  }
  

  render() {
    return html`
    <div class="content">
    <div class="card">
      <h6 class="card-header-title">${this.e.name}</h6>
      <div class="card-content scroll-container">
        <div class="columns is-mobile">
          <div class="tabs-container">
            <month-range-picker .data="${this.data}" @month-range-changed="${this.handleMonthRangeChange}"></month-range-picker>
            <div class="tab-contents">
              <div class="tab-content">
                <svg></svg>
                ${this.keys.map((key, index) => {
                  const backgroundColor = this.colorCodes[index];
                  const textColor = this.theme.palette.getContrastText
                  ? this.theme.palette.getContrastText(backgroundColor)
                  : 'var(--white-ter--800--lighten)'; // Fallback if `getContrastText` isn't available

                  return html`<span class="tag" style="background-color: ${backgroundColor}; color: ${textColor};">${key}</span>`
                  ;
                })}
                
                </div>
                <div class="tooltip"></div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('summary-chart', SummaryChart);
