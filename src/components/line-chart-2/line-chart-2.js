import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { LineChart2Styles } from './line-chart-2-css.js';
import * as d3 from 'd3';
import '../month-range-picker/month-range-picker.js';
import globalStyles from '../../App.css?raw';

export class LineChart2 extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      LineChart2Styles,
      css`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        .tooltip {
          position: absolute;
          text-align: center;
          width: auto;
          padding: 8px;
          background: lightsteelblue;
          border-radius: 4px;
          pointer-events: none;
          opacity: 0;
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
      this.colorCodes = [this.primaryColor, this.surfaceVariantColor, this.secondaryColor];
      this.updateChart();
    }

    if (changedProperties.has('fromMonth') || changedProperties.has('toMonth')) {
      this.updateChart();
    }
  }

  handleMonthRangeChange(event) {
    this.fromMonth = event.detail.fromMonth;
    this.toMonth = event.detail.toMonth;
  }

  updateChart() {
    this.createChart();
  }

  createChart() {
    // Dynamic sizing based on the container's dimensions
    const margin = { top: 20, right: 30, bottom: 30, left: 60 },
      width = this.clientWidth - margin.left - margin.right,
      height = this.clientHeight - margin.top - margin.bottom;

    // Remove any existing SVG before appending a new one
    d3.select(this.renderRoot.querySelector('#my_dataviz')).selectAll('*').remove();

    // Append the svg object to the #my_dataviz div
    const svg = d3
      .select(this.renderRoot.querySelector('#my_dataviz'))
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Read the data
    d3.csv(
      'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv',
      function (d) {
        return {
          date: d3.timeParse('%Y-%m-%d')(d.date),
          value: +d.value,
        };
      }
    ).then((data) => {
      // X axis --> scale and draw
      const x = d3.scaleTime().domain(d3.extent(data, (d) => d.date)).range([0, width]);
      svg.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x));

      // Y axis --> scale and draw
      const y = d3.scaleLinear().domain([0, d3.max(data, (d) => +d.value)]).range([height, 0]);
      svg.append('g').call(d3.axisLeft(y));

      // Add the line
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr(
          'd',
          d3
            .line()
            .x((d) => x(d.date))
            .y((d) => y(d.value))
        );

      // Tooltip
      const tooltip = d3.select(this.renderRoot.querySelector('.tooltip'));

      // Add circles for each data point with tooltip functionality
      svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', 4)
        .attr('cx', (d) => x(d.date))
        .attr('cy', (d) => y(d.value))
        .attr('fill', 'steelblue')
        .on('mouseover', (event, d) => {
          tooltip
            .style('opacity', 1)
            .html(`Date: ${d3.timeFormat('%Y-%m-%d')(d.date)}<br>Value: ${d.value}`)
            .style('left', event.pageX + 10 + 'px')
            .style('top', event.pageY - 30 + 'px');
        })
        .on('mouseout', () => tooltip.style('opacity', 0));
    });
  }

  render() {
    return html`
      <div class="content">
        <div class="card">
          <h6 class="card-header-title">${this.e.name}</h6>
          <div class="card-content scroll-container">
            <div class="columns is-mobile">
              <div class="tabs-container">
                <div class="tab-contents">
                  <div class="tab-content">
                    <div id="my_dataviz" style="width: 100%; height: 400px;"></div>
                    ${this.keys.map(
                      (key, index) => html`
                        <span
                          class="tag"
                          style="background-color: ${this.colorCodes[index]}; color: var(--white);"
                          >${key}</span
                        >
                      `
                    )}
                  </div>
                </div>
              </div>
              <div class="tooltip"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('line-chart-2', LineChart2);
