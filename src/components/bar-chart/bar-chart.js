import { LitElement, html, css } from 'lit';
import * as d3 from 'd3';

export class D3BarChart extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    svg {
      width: 100%;
      height: 40vh; /* Increased height */
    }
    .tooltip {
      position: absolute;
      text-align: center;
      padding: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      border-radius: 3px;
      pointer-events: none;
      opacity: 0;
    }
    /* Define colors as CSS variables */
    :host {
      --primary: #1f77b4; /* Example primary color */
      --secondary: #ff7f0e; /* Example secondary color */
      --black: #000; /* Black color */
    }
  `;

  static properties = {
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = [];
    this.handleResize = this.handleResize.bind(this);
  }

  firstUpdated() {
    this._renderChart();
    window.addEventListener('resize', this.handleResize); // Re-render on window resize
  }

  updated(changedProperties) {
    if (changedProperties.has('data')) {
        console.log(this.data);
        
      this._renderChart();
    }
  }

  handleResize() {
    this._renderChart();
  }

  _renderChart() {
    const svg = d3.select(this.shadowRoot.querySelector('svg'));
    svg.selectAll('*').remove(); // Clear previous content

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = this.clientWidth - margin.left - margin.right;
    const height = this.clientHeight - margin.top - margin.bottom;

    if (!this.data || this.data.length === 0) return;

    // Determine keys (e.g., 'DELIVERED', 'OFFLINE') dynamically from data
    const keys = Object.keys(this.data[0]).filter(key => key !== 'links');
    
    // Create x0 scale using the index of the data
    const x0 = d3.scaleBand()
      .domain(this.data.map((_, i) => i))
      .rangeRound([margin.left, width - margin.right])
      .paddingInner(0.1);

    // Create x1 scale for the keys
    const x1 = d3.scaleBand()
      .domain(keys)
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => Math.max(...keys.map(key => +d[key])))])
      .nice()
      .rangeRound([height - margin.bottom, margin.top]);

    // Use CSS variables for color
    const color = d3.scaleOrdinal()
      .domain(keys)
      .range([getComputedStyle(this).getPropertyValue('--primary').trim(), 
             getComputedStyle(this).getPropertyValue('--secondary').trim(), 
             getComputedStyle(this).getPropertyValue('--black').trim()]);

    // Update xAxis to use dynamic keys
    const xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x0)
        .tickFormat(i => keys[i] || `Data ${i + 1}`)) // Use dynamic keys
      .selectAll('text')
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

    const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, "s"))
      .call(g => g.select(".domain").remove());

    const tooltip = d3.select(this.shadowRoot.querySelector('.tooltip'));

    svg.append("g")
      .selectAll("g")
      .data(this.data)
      .join("g")
        .attr("transform", (d, i) => `translate(${x0(i)},0)`)
      .selectAll("rect")
      .data(d => keys.map(key => ({ key, value: +d[key] })))
      .join("rect")
        .attr("x", d => x1(d.key))
        .attr("y", d => y(d.value))
        .attr("width", x1.bandwidth())
        .attr("height", d => y(0) - y(d.value))
        .attr("fill", d => color(d.key))
        .on('mouseover', function(event, d) {
          tooltip.transition().duration(200).style('opacity', .9);
          tooltip.html(`${d.key}: ${d.value}`)
            .style("left", (event.pageX + 5) + "px")
            .style("top", (event.pageY - 28) + "px");
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

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
}


  render() {
    return html`
     
      <svg></svg>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.handleResize); // Cleanup event listener
  }
}

customElements.define('bar-chart', D3BarChart);
