import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';
import * as d3 from 'd3';

export const HistogramBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'histogram';
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
      histogramValue: Object,
      rows: {value: []},
      params: {type: Object, value: ''},
      columnSize: {type: Array},
    };
  }
  initHistogram() {
    // Get pre-computed histogram data
    d3.json('', function(json) {
      var maxBin = 40;
      var binInc = 10;

      // transform data that is already binned into data
      // that is better for use in D3
      //
      for ( var i = 0; i < json.length; i++) {
        // use the name of the group to initialize the array
        var group = json[i].name;
        var data = [];

        // we have a max bin for our histogram, must ensure
        var binCounts = {};
        for ( var j = 0; j < json[i].data.length; j++) {
          var xValue = json[i].data[j].bin;
          // bin cannot exceed the maximum bin
          xValue = ( xValue > maxBin ? maxBin : xValue);
          var yValue = json[i].data[j].count;

          if (binCounts[xValue] === undefined) {
            binCounts[xValue] = 0;
          }
          binCounts[xValue] += yValue;
        }

        // add the bin counts in
        for ( var bin in binCounts) {
          data.push({'x': bin, 'y': binCounts[bin]});
        }

        // add the histogram
        createHistogram(data, maxBin, binInc, group.toUpperCase());
      }
    });

    var createHistogram = function(data, maxBin, binInc, title) {
      // // A formatter for counts.
      // var formatCount = d3.format(',.0f');
      // var totalWidth = 480;
      // var totalHeight = 240;
      // var margin = {top: 40, right: 60, bottom: 50, left: 70};
      // var width = totalWidth - margin.left - margin.right;
      // var height = totalHeight - margin.top - margin.bottom;

      // var binArray = [];
      // for (var i = 0; i <= maxBin + binInc; i += binInc) {
      //   binArray.push(i);
      // }
      // var binTicks = [];
      // for (var i = 0; i < maxBin + binInc; i += binInc) {
      //   binTicks.push(i);
      // }

      // var x = d3.scale.linear()
      //   .domain([0, maxBin + binInc])
      //   .range([0, width]);
      // var binWidth = parseFloat(width / (binArray.length - 1)) - 1;

      // var y = d3.scale.linear()
      //   .domain([0, d3.max(data, function(d) {return d.y;})])
      //   .range([height, 0]);

      // var xAxis = d3.svg.axis()
      //   .scale(x)
      //   .orient('bottom')
      //   .tickValues(binTicks);

      // var yAxis = d3.svg.axis()
      //   .scale(y)
      //   .orient('left');

      // var svg = d3.select('body').append('svg')
      //   .attr('width', width + margin.left + margin.right)
      //   .attr('height', height + margin.top + margin.bottom)
      //   .append('g')
      //   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // var bar = svg.selectAll('.bar')
      //   .data(data)
      //   .enter()
      //   .append('rect')
      //   .attr('class', 'bar')
      //   .attr('x', function(d) {return x(d.x);})
      //   .attr('width', binWidth)
      //   .attr('y', function(d) {return y(d.y);})
      //   .attr('height', function(d) {return height - y(d.y);})
      //   .on('mouseover', function(d) {
      //     var barWidth = parseFloat(d3.select(this).attr('width'));
      //     var xPosition = parseFloat(d3.select(this).attr('x')) + (barWidth / 2);
      //     var yPosition = parseFloat(d3.select(this).attr('y')) - 10;

      //     svg.append('text')
      //       .attr('id', 'tooltip')
      //       .attr('x', xPosition)
      //       .attr('y', yPosition)
      //       .attr('text-anchor', 'middle')
      //       .text(d.y);
      //   })
      //   .on('mouseout', function(d) {
      //     d3.select('#tooltip').remove();
      //   });

      // svg.append('g')
      //   .attr('class', 'x axis')
      //   .attr('transform', 'translate(0,' + height + ')')
      //   .call(xAxis);

      // svg.append('g')
      //   .attr('class', 'y axis')
      // // .attr("transform", "translate(0," + height + ")")
      //   .call(yAxis);

      // // Add axis labels
      // svg.append('text')
      //   .attr('class', 'x label')
      //   .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.bottom - 15) + ')')
      // // .attr("dy", "1em")
      //   .attr('text-anchor', 'middle')
      //   .text('Time (minutes)');

      // svg.append('text')
      //   .attr('class', 'y label')
      //   .attr('transform', 'rotate(-90)')
      //   .attr('y', 0 - margin.left)
      //   .attr('x', 0 - (height / 2))
      //   .attr('dy', '1em')
      //   .attr('text-anchor', 'middle')
      //   .text('Count');

      // // Add title to chart
      // svg.append('text')
      //   .attr('class', 'title')
      //   .attr('transform', 'translate(' + (width / 2) + ' ,' + (-20) + ')')
      // // .attr("dy", "1em")
      //   .attr('text-anchor', 'middle')
      //   .text(title);
    };
  }
  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.histogramValue = select.value;

    return this.histogramValue;
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

    this.loadData().then(dsc => {

      rows.dsc;
      self.initHistogram(dsc);
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

    self.title = histogram.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;
    self.histogramValue = Number(pElement.kind);

    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};


