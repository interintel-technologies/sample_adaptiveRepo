import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { LineChartStyles } from './line-chart-css.js';
import * as d3 from 'd3';
import globalStyles from '../../App.css?raw';
import '../month-range-picker/month-range-picker.js';

export class LineChart extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      LineChartStyles,
      css`
        :host {
          display: block;
        }
        svg {
          width: 100%;
          height: 400px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      keys: { type: Array },
      rows: { type: Array },
      e: { type: Object },
      cols: { type: Array },
      hiddenKeys: { type: Array },
      fromMonth: { type: String },
      toMonth: { type: String },
    };
  }

  constructor() {
    super();
    this.keys = [];
    this.rows = [];
    this.data = [];
    this.cols = [];
    this.colorCodes = [];
    this.hiddenKeys = []; 
    this.fromMonth = '';
    this.toMonth = '';
    this.bgColor = ""
    this.monthNames = []

  }


  // Extracts unique months and month names from the rows
  deduceAvailableMonths() {
    if (this.rows && this.rows.length > 0) {
      // Extract unique month parts from the date strings in `this.rows`
      const uniqueMonths = [...new Set(this.rows.map(row => row[0].slice(0, 7)))]; // e.g., '2024-06'
      
      // Extract month names from the uniqueMonths array
      this.monthNames = uniqueMonths.map(month => {
        const year = month.split('-')[0];
        const monthIndex = parseInt(month.split('-')[1], 10) - 1;
        const monthName = new Date(year, monthIndex).toLocaleString('default', { month: 'long' });
        return `${monthName}`;
      });

      this.updateFilteredMonths();
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('cols') || changedProperties.has('rows') || changedProperties.has('e')) {
      this.bgColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-primaryContainer');

      this.data = this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])));
      this.keys = Object.keys(this.data[0] || {}).filter(key => key !== 'Date');      


      if (this.e.details.static_colors) {
        this.colorCodes = this.e.details.color_pallete.split(",").map(color => color.trim());
      } else {
        this.colorCodes = [this.primaryColor, this.surfaceVariantColor, this.secondaryColor];
      }
      
      this.deduceAvailableMonths()
      this.updateChart(); // Call updateChart after data changes
    }
  }

  updateChart() {
    // Parse fromMonth and toMonth into Date objects
    const fromDate = this.fromMonth ? new Date(this.fromMonth) : null;
    const toDate = this.toMonth ? new Date(this.toMonth) : null;
  
    // Filter the data based on the selected date range
    const filteredData = this.data.filter(d => {
      const date = new Date(d.Date);
      return (!fromDate || date >= fromDate) && (!toDate || date <= toDate);
    });
  
    // Update the chart with filtered data
    this.createChart(filteredData, this.keys.filter(key => !this.hiddenKeys.includes(key)));
  }
  
  
  toggleLine(key) {
    // Add or remove key from hiddenKeys array
    if (this.hiddenKeys.includes(key)) {
      this.hiddenKeys = this.hiddenKeys.filter(k => k !== key);
    } else {
      this.hiddenKeys = [...this.hiddenKeys, key];
    }
    this.updateChart();
  }

  createChart(data, keys) {
    // Adjust margin values to create more space around the chart
    const margin = { top: 20, right: 20, bottom: 50, left: 50 }; // Increase left margin if needed
    const svg = d3.select(this.shadowRoot.querySelector('svg'));
    svg.selectAll('*').remove();
  
    // Increase the height to elongate the Y-axis
    const width = parseInt(svg.style('width')) - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom; // Set the height to a larger value (400)
  
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  
    // Convert "Date" field in data to Date objects
    data.forEach(d => {
      d.date = new Date(d.Date);
    });
  
    // X scale for days
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);
  
    // Y scale for values - Adjust for elongated height
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(keys, key => isNaN(d[key]) ? 0 : d[key]))]).nice()
      .range([height, 0]); // Adjusted for more height
  
    // Color scale for each key
    const color = d3.scaleOrdinal()
      .domain(keys)
      .range(this.colorCodes);
  
    // Line generator
    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX); // Smooth curve
  
      const tooltip = d3.select(this.shadowRoot.querySelector('.tooltip'))
    .style('position', 'absolute')
    .style('display', 'none')
    .style('background-color', 'var(--paper)')
    .style('padding', '5px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '4px')
    .style('pointer-events', 'none')
    .style('box-shadow', '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)')
    .style('border-radius', '4px')
    .style('font-weight', 'bolder')
    .style('font-size', '16px')


    // Draw the lines for each key
    keys.forEach(key => {
      const lineData = data
        .map(d => ({ date: d.date, value: d[key] }))
        .filter(d => !isNaN(d.value)); // Filter out invalid values
  
      g.append('path')
        .datum(lineData)
        .attr('fill', 'none')
        .attr('stroke', color(key))
        .attr('stroke-width', 1)
        .attr('d', line);


      g.selectAll(`.circle-${key}`)
      .data(lineData)
      .enter()
      .append('circle')
      .attr('class', `circle-${key}`)
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.value))
      .attr('r', 5)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('mouseover', function (event, d) {      
        const formattedDate = new Date(event.date).toLocaleDateString();
        console.log("formattedDate",formattedDate);

        d3.select(this)
        .transition()
        .duration(100)
        .attr('fill', color(key))
        .attr('r', 7); // Increase circle size on hover

        
        tooltip
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY) + "px")
          .style('display', 'block')
          .html(`KES ${event.value},${formattedDate}`);
      })
      .on('mouseout', function () {

        d3.select(this)
        .transition()
        .duration(100)
        .attr('fill', 'none')
        .attr('r', 5) // Return circle to original size
        .style('padding', '20px')  // Add padding
        .style('border', '2px solid #FFFFFF')  // Add border
        .style('box-shadow', '0px 2px 8px rgba(0, 0, 0, 0.25)');  // Add box-shadow

        tooltip.style('display', 'none');
      });

    });
  // Append X axis with month ticks, allowing daily representation
  const xAxis = g.append('g')
  .attr('class', 'x-axis')
  .attr('transform', `translate(0,${height})`)
  .attr('fill', 'var(--adaptive-ui-icon-stroke-color)')
  .call(d3.axisBottom(x)
    .ticks(d3.timeMonth.every(1))
    .tickFormat(d3.timeFormat('%b'))); // Display month names


// Append Y axis - Increased for longer Y-axis
g.append('g')
  .attr('class', 'y-axis')
  .attr('fill', 'var(--adaptive-ui-icon-stroke-color)') // Apply the color to the text labels
  .call(d3.axisLeft(y).ticks(6)); // Increase number of Y-axis ticks for better readability

  }

  handleMonthRangeChange(event) {
    this.fromMonth = event.detail.fromMonth;
    this.toMonth = event.detail.toMonth;
  
    // Update the chart with the new date range
    this.updateChart();
  }
  
  
  hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}




  

  
  render() {
    

    return html`
    <div class="content">
      <div class="card" style="background: conic-gradient(from 208.84deg at 50% 50%, ${this.bgColor && this.hexToRgbA(this.bgColor)} 0deg, #FFFFFF 91.8deg, ${this.bgColor && this.hexToRgbA(this.bgColor)} 360deg);">
        <h6 class="card-header-title">${this.e.name}</h6>
        <div class="scroll-container">
          <div class="columns is-mobile">
            <div class="tabs-container">
              <div class="tab-contents">
              <div class="columns">
              <div class="column is-two-fifths">
              <month-range-picker .data="${this.data}" @month-range-changed="${this.handleMonthRangeChange}"></month-range-picker>
              </div>
              </div>
                <div class="tab-content">
                  <svg></svg>
                  <div class="legend">
                      ${this.keys && this.keys.length > 1 && this.keys.map((key, index) => {
                        const backgroundColor = this.colorCodes[index];
                        const isHidden = this.hiddenKeys.includes(key);
                        return html`
                          <div class="legend-item" @click="${() => this.toggleLine(key)}" style="opacity: ${isHidden ? 0.5 : 1};">
                            <span style="background-color: ${backgroundColor};"></span>
                            <p>${key}</p>
                          </div>
                        `;
                      })}
                    </div>
                </div>
                <div class="tooltip"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('line-chart', LineChart);
