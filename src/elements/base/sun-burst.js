import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';
import * as d3 from 'd3';


export const SunburstBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'sun-burst';
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
      sunburstValue: Object,
      rows: {value: []},
      params: {type: Object, value: ''},
      columnSize: {type: Array},
    };
  }

  initSunburst() {
    // // Variables
    // var width = 500;
    // var height = 500;
    // var radius = Math.min(width, height) / 2;
    // var color = d3.scaleOrdinal(d3.schemeCategory20b);

    // // Size our <svg> element, add a <g> element, and move translate 0,0 to the center of the element.
    // var g = d3.select('svg')
    //   .attr('width', width)
    //   .attr('height', height)
    //   .append('g')
    //   .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // // Create our sunburst data structure and size it.
    // var partition = d3.partition()
    //   .size([2 * Math.PI, radius]);

    // // Get the data from our JSON file
    // d3.json('data.json', function(error, nodeData) {
    //   var data = nodeData[0].data;
    //   var cols = nodeData[0].cols;
    //   var rows = nodeData[0].rows;
    //   // Find the root node of our data, and begin sizing process.
    //   var root = d3.hierarchy(nodeData)
    //     .sum(function(d) {return d.size;});

    //   // Calculate the sizes of each
    //   partition(root);
    //   var arc = d3.arc()
    //     .startAngle(function(d) {return d.x0;})
    //     .endAngle(function(d) {return d.x1;})
    //     .innerRadius(function(d) {return d.y0;})
    //     .outerRadius(function(d) {return d.y1;});


    //   // Add a <g> element for each node in thd data, then append <path> elements and draw lines based on the arc
    //   // variable calculations. Last, color the lines and the slices.
    //   g.selectAll('g')
    //     .data(root.descendants())
    //     .enter().append('g').attr('class', 'node').append('path')
    //     .attr('display', function(d) {return d.depth ? null : 'none';})
    //     .attr('d', arc)
    //     .style('stroke', '#fff')
    //     .style('fill', function(d) {return color((d.children ? d : d.parent).data.name);});


    //   // Populate the <text> elements with our data-driven titles.
    //   g.selectAll('.node')
    //     .append('text')
    //     .attr('transform', function(d) {
    //       return 'translate(' + arc.centroid(d) + ')rotate(' + computeTextRotation(d) + ')';})
    //     .attr('dx', '-20') // radius margin
    //     .attr('dy', '.5em') // rotation align
    //     .text(function(d) {return d.parent ? d.data.name : '';});
    // });

    // function computeTextRotation(d) {
    //   var angle = (d.x0 + d.x1) / Math.PI * 90;

    //   // Avoid upside-down labels
    //   return (angle < 120 || angle > 270) ? angle : angle + 180; // labels as rims
    //   // return (angle < 180) ? angle - 90 : angle + 90;  // labels as spokes
    // }
  }
  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.sunburstValue = select.value;

    return this.sunburstValue;
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

    this.loader.then(dsc => {
      // console.log(dsc);

      rows.dsc;
      self. initSunburst(dsc);
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

    self.title =SunburstBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;
    self.sunburstValue = Number(pElement.kind);
    self.loader = this.loadData();
    self.maxlength = pElement.max;
  }
};


