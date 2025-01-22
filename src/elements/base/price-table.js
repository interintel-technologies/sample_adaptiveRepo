import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const PriceTableBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  static get is() {
    return 'price-table';
  }

  static get properties() {
    return {
      service: String,
      color: String,
      icon: String,
      params: Object,
      currentData: Object,
    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  dataResponseType() {
    return Symbol.for('DATA');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {
      // self.cols = dsc.cols;
      // self.rows = dsc.rows;
      // self.groups = dsc.groups;
      self.currentGroups = self.groups;
      // self.data = dsc.data;
      self.currentData = self.data;

      self.loading = false;
    });
  }
  _computeData(index) {
    return this.data[index];
  }

  _rowsOrColumns(cData) {
    if (cData === undefined) {return;}
    return cData.length;
  }


  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.title = PriceTableBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;

    self.params = loader.pl.paramsCopy();
    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};
