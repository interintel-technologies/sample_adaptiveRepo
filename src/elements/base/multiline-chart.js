import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';
import * as d3 from 'd3';

export const MultilineChartBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'multiline-chart';
  }

  static get properties() {
    return {
      icon: String,
      dataName: {type: String, value: ''},
      service: String,
      title: String,
      maxlength: Number,
      pattern: String,
      q: {type: String, value: ''},
      dropdownValue: Object,
      rows: {value: []},
      params: {type: Object, value: ''},
      columnSize: {type: Array},
    };
  }
  initMultiline() {
  // Define margins, dimensions, and some line colors
    const margin = {top: 40, right: 120, bottom: 30, left: 40};
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Define the scales and tell D3 how to draw the line
    const x = d3.scaleLinear().domain([1910, 2010]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 40000000]).range([height, 0]);
    const line = d3.line().x(d => x(d.name)).y(d => y(d.value));

    const chart = d3.select('svg').append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const tooltip = d3.select('#tooltip');
    const tooltipLine = chart.append('line');

    // Add the axes and a title
    const xAxis = d3.axisBottom(x).tickFormat(d3.format('.4'));
    const yAxis = d3.axisLeft(y).tickFormat(d3.format('.2s'));
    chart.append('g').call(yAxis);
    chart.append('g').attr('transform', 'translate(0,' + height + ')').call(xAxis);
    chart.append('text').html('State Population Over Time').attr('x', 200);

    // Load the data and draw a chart
    let states; let tipBox;
    // load data from json file
    d3.json('data.json', function(error, data1) {
      // plot rows and cols json
      var data = data1[0].data;
      var cols = data1[0].cols;
      var rows = data1[0].rows;

      x.domain(rows.map(function(d) {return d[1];})); // Label - data1[0]

      y.domain([0, d3.max(rows, function(d) {return d[0];})]);


      chart.selectAll()
        .data(states).enter()
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', d => d.color)
        .attr('stroke-width', 2)
        .datum(d => d.history)
        .attr('d', line);

      chart.selectAll()
        .data(states).enter()
        .append('text')
        .html(d => d.name)
        .attr('fill', d => d.color)
        .attr('alignment-baseline', 'middle')
        .attr('x', width)
        .attr('dx', '.5em')
        .attr('y', d => y(d.currentvalue));

      tipBox = chart.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('opacity', 0)
        .on('mousemove', drawTooltip)
        .on('mouseout', removeTooltip);
    });

    function removeTooltip() {
      if (tooltip) tooltip.style('display', 'none');
      if (tooltipLine) tooltipLine.attr('stroke', 'none');
    }

    function drawTooltip() {
      const name = Math.floor((x.invert(d3.mouse(tipBox.node())[0]) + 5) / 10) * 10;

      states.sort((a, b) => {
        return b.history.find(h => h.name == name).value - a.history.find(h => h.name == name).value;
      });

      tooltipLine.attr('stroke', 'black')
        .attr('x1', x(name))
        .attr('x2', x(name))
        .attr('y1', 0)
        .attr('y2', height);

      tooltip.html(name)
        .style('display', 'block')
        .style('left', d3.event.pageX + 20)
        .style('top', d3.event.pageY - 20)
        .selectAll()
        .data(states).enter()
        .append('div')
        .style('color', d => d.color)
        .html(d => d.name + ': ' + d.history.find(h => h.name == name)).value;
    }
  }
  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.multilineValue = select.value;

    return this.lineValue;
  }

  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
    if (this.e.required && ! this.getValue() ) {
      return false;
    }
    // TODO implement validation
    return true;
  }


  /**
     * Formats a Row for Displaying
     * the first column is assumed to be the Id
     * the columns that are action links should be ignored
     *
     * @param data
     * @return {*}
     * @private
     */
  _dataJoined(data) {
    const self = this;

    return data.filter(function(item, index) {
      if (index===0 || (self.cols.length && self.cols[index]['type'] === 'href')) {
        return false;
      }

      return true;
    }).join(' ');
  }


  dscDataName() {
    return this.dataName;
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc =>{
      rows.dsc;
      self. initMultiline(dsc);
    });
  }

  _computeItemsCount(rows) {
    return rows.length;
  }

  _shouldFilter(items) {
    var b = this._computeItemsCount(items);
    return (b>10);
  }

  _computeItems(rows, q) {
    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];
      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1 ) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      // if(filtered_items.length>   10){
      //     break
      // }
    }

    return filtered_items;
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.required = pElement.min && pElement.min > 0;

    self.title = DropdownSelect.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;
    self.dropdownValue = Number(pElement.kind);
    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};


