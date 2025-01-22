import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';
import * as d3 from 'd3';


export const ForceDirectedBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'force-directed';
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
      forcedirectedValue: Object,
      rows: {value: []},
      params: {type: Object, value: ''},
      columnSize: {type: Array},
    };
  }
  initForceDirected() {
    // var width = 960;
    // var height = 500;
    // var margin = 100;

    // var x_center = width / 2;
    // var y_center = height / 2;
    // var radius = (height - 2 * margin) / 2;

    // var n_elements;
    // function index_to_rad(index) {
    //   return 2 * Math.PI * index / n_elements;
    // }

    // var color = d3.scale.category20();

    // var force = d3.layout.force()
    //   .charge(-120)
    //   .linkDistance(30)
    //   .size([width, height]);

    // var x_scale = d3.scale.linear()
    //   .domain([0, 1])
    //   .range([x_center, x_center + radius]);

    // var y_scale = d3.scale.linear()
    //   .domain([0, 1])
    //   .range([y_center, y_center + radius]);

    // var svg = d3.select('body').append('svg')
    //   .attr('width', width)
    //   .attr('height', height);

    // d3.json('data.json', function(error, graph) {
    //   if (error) throw error;

    //   graph.nodes = graph.nodes.sort(function(a, b) {return d3.ascending(a.group, b.group);});
    //   n_elements = graph.nodes.length;

    //   force
    //     .nodes(graph.nodes)
    //     .links(graph.links)
    //     .start();

    //   var max_value = d3.max(graph.links, function(d) {return d.value;});

    //   var link = svg.selectAll('.link')
    //     .data(graph.links)
    //     .enter().append('line')
    //     .attr('class', 'link')
    //     .style('opacity', function(d) {return 0.2 + 0.8 * d.value / max_value;});

    //   var node = svg.selectAll('.node')
    //     .data(graph.nodes)
    //     .enter().append('circle')
    //     .attr('class', 'node')
    //     .attr('r', 5)
    //     .style('fill', function(d) {return color(d.group);})
    //     .call(force.drag);

    //   node.append('title')
    //     .text(function(d) {return d.name;});

    //   force.on('tick', function() {
    //     link.attr('x1', function(d) {return d.source.x;})
    //       .attr('y1', function(d) {return d.source.y;})
    //       .attr('x2', function(d) {return d.target.x;})
    //       .attr('y2', function(d) {return d.target.y;});

    //     node.attr('cx', function(d) {return d.x;})
    //       .attr('cy', function(d) {return d.y;});
    //   });
    // });
    // d3.selectAll('#controls input[name=mode]').on('change', function() {
    //   if (this.value == 'circle') {
    //     force.stop();

    //     var circles = svg.selectAll('circle')[0];
    //     svg.selectAll('circle').data().forEach(function(d, i) {
    //       d.x_resume = circles[i].cx.animVal.value;
    //       d.y_resume = circles[i].cy.animVal.value;
    //     });

    //     svg.selectAll('line')
    //       .transition().duration(1000)
    //       .attr('x1', function(d) {return x_scale(Math.sin(index_to_rad(d.source.index)));})
    //       .attr('x2', function(d) {return x_scale(Math.sin(index_to_rad(d.target.index)));})
    //       .attr('y1', function(d) {return y_scale(Math.cos(index_to_rad(d.source.index)));})
    //       .attr('y2', function(d) {return y_scale(Math.cos(index_to_rad(d.target.index)));});

    //     svg.selectAll('circle')
    //       .transition().duration(1000)
    //       .attr('cx', function(d, i) {return x_scale(Math.sin(index_to_rad(i)));})
    //       .attr('cy', function(d, i) {return y_scale(Math.cos(index_to_rad(i)));});
    //   } else {
    //     svg.selectAll('line')
    //       .transition().duration(1000)
    //       .attr('x1', function(d) {return d.source.x_resume;})
    //       .attr('y1', function(d) {return d.source.y_resume;})
    //       .attr('x2', function(d) {return d.target.x_resume;})
    //       .attr('y2', function(d) {return d.target.y_resume;});

    //     svg.selectAll('circle')
    //       .transition().duration(1000)
    //       .attr('cx', function(d) {return d.x_resume;})
    //       .attr('cy', function(d) {return d.y_resume;});

    //     setTimeout(function() {
    //       force.resume();
    //     }, 1000);
    //   }
    // });
  }
  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.forcedirectedValue = select.value;

    return this.forcedirectedValue;
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
      dsc.rows;
      self.initForceDirected(dsc);
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

    self.title = ForceDirectedBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;
    self.forcedirectedValue = Number(pElement.kind);

    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};


