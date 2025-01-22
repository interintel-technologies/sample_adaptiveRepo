import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const SummaryBoxesBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'summary-boxes';
  }

  static get properties() {
    return {
      service: String,
      color: String,
      icon: String,
      params: Object,
      currentData: Object,
      rows: { type: Array },
      cols: { type: Array },
      data :{ type: Array },
    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  dataResponseType() {
    return Symbol.for('DATA');
  }

  updated(changedProperties) {
    if (changedProperties.has('rows') || changedProperties.has('data')) {
      const self = this;
      self.currentGroups = self.groups;
      // self.data = dsc.data;
      self.currentData = self.data;
    }}
  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);
  //   const self = this;

  //   this.loader.then(dsc => {
  //     // self.cols = dsc.cols;
  //     // self.rows = dsc.rows;
  //     // self.groups = dsc.groups;
  //     self.currentGroups = self.groups;
  //     // self.data = dsc.data;
  //     self.currentData = self.data;

  //     self.loading = false;
  //   });
  // }
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

    self.title = SummaryBoxesBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;

    self.params = loader.pl.paramsCopy();
    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};
