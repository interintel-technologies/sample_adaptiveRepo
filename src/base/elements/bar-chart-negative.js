import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';
import * as d3 from 'd3';


export const BarChartNegativeBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'bar-chart-negative';
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
      barchartnegativeValue: Object,
      rows: {value: []},
      params: {type: Object, value: ''},
      columnSize: {type: Array},
    };
  }
  initBarChartNegative() {
    document.addEventListener('DOMContentLoaded', () => {
      var render = (selector, size, data1) => {
        var margin = size.margin;
        var width = size.width - margin.left - margin.right;
        var height = size.height - margin.top - margin.bottom;

        var data = data1.data;
        var cols = data1.cols;
        var rows = data1.rows;

        var x = d3.scaleLinear()
          .domain(d3.extent(data, d => d.value))
          .range([0, width]);

        var y = d3.scaleBand()
          .domain(data.map(d => d.name))
          .rangeRound([0, height])
          .padding(0.2);

        x.domain(rows.map(function(d) {return d[1];})); // Label - data1[0]

        y.domain([0, d3.max(rows, function(d) {return d[0];})]);

        var xAxis = d3.axisBottom(x);

        var yAxis = d3.axisLeft(y)
          .tickSize(0);

        var svg = d3.select(selector)
          .attr('width', size.width)
          .attr('height', size.height);

        var chart = svg.append('g')
          .attr('transform', `translate(${ margin.left }, ${ margin.top })`);

        var bar = chart.selectAll('.bar')
          .data(data)
          .enter().append('rect')
          .attr('class', d => `bar ${ d.value < 0 ? 'negative': 'positive' }`)
          .attr('x', d => x(Math.min(0, d.value)))
          .attr('y', d => y(d.name))
          .attr('width', d => Math.abs(x(d.value) - x(0)))
          .attr('height', y.bandwidth());

        chart.append('g')
          .attr('transform', `translate(0, ${ height })`)
          .attr('class', 'axis x')
          .call(xAxis);

        chart.append('g')
          .attr('class', 'axis y')
          .attr('transform', `translate(${ x(0) }, 0)`)
          .call(yAxis);
      };
    });

    d3.json('data.json', function(data) {
      // var data = data.data;

      var settings = {
        width: 500,
        height: 300,
        margin: {
          top: 20,
          right: 20,
          bottom: 30,
          left: 40,
        },
      };
      render('#chart', settings, data[0]);
    });
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

    this.loader.then(dsc =>  {
  

      self.rows;
      self. initBarChartNegative(dsc);
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

    self.title = BarChartNegative.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;
    self.barchartnegativeValue = Number(pElement.kind);

    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};


