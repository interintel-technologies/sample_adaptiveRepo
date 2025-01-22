import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';
import * as d3 from 'd3';

export const FamilyTreeBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'family-tree';
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
  initFamilyTree() {
    const margin = {top: 0, right: 320, bottom: 0, left: 0};
    const fullWidth = 960;
    const fullHeight = 500;
    const width = fullWidth - margin.left - margin.right;
    const height = fullHeight - margin.top - margin.bottom;

    const tree = d3.tree()
      .separation((a, b) => ((a.parent === b.parent) ? 1 : 0.5))
      .size([height, width]);

    const svg = d3.select('body')
      .append('svg')
      .attr('width', fullWidth)
      .attr('height', fullHeight);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('text')
      .text('d3.tree - A Family Tree')
      .attr('class', 'title')
      .attr('x', 50)
      .attr('y', 50);

    const elbow = (d, i) => {
      return `M${d.source.y},${d.source.x}H${d.target.y},V${d.target.x}${d.target.children ? '' : 'h' + margin.right}`;
    };

    d3.json('data.json', (err, json) => {
      if (err) throw err;

      const nodes = d3.hierarchy(json, (d) => d.parents);

      // maps hierarchy to tree layout
      const treeNodes = tree(nodes);

      // adds links between nodes
      const link = g.selectAll('.link')
        .data(treeNodes.links())
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', elbow);

      const node = g.selectAll('.node')
        .data(treeNodes.descendants())
        .enter().append('g')
        .attr('class', 'node')
        .attr( 'transform', d => `translate(${d.y},${d.x})`);

      node.append('text')
        .attr('class', 'name')
        .attr('x', 8)
        .attr('y', -6)
        .text(d => `${d.data.name}`);

      node.append('text')
        .attr('x', 8)
        .attr('y', 8)
        .attr('dy', '.71em')
        .attr('class', 'about lifespan')
        .text(d => `${d.data.born} - ${d.data.died}`);

      node.append('text')
        .attr('class', 'about location')
        .attr('x', 8)
        .attr('y', 8)
        .attr('dy', '1.86em')
        .text(d => `${d.data.location}`);
    });
  }
  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.barChartValue = select.value;

    return this.barValue;
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

    this.loadData(function(dsc) {
      // console.log(dsc);

      rows.dsc;
      self. initFamilyTree(dsc);
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

    self.title = FamilyTreeBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;
    self.familyTreeValue = Number(pElement.kind);

    self.maxlength = pElement.max;
  }
};


