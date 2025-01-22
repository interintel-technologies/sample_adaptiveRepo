import {utilsMixin} from '../mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';

export const PriceCardsBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'price-cards';
  }

  static get properties() {
    return {
      service: String,
      icon: String,
      params: Object,
      currentData: Object
    };
  }
  constructor() {
    super();
  }
  dscDataName() {
    return this.e.defaultValue;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    
      // self.cols = dsc.cols;
      // self.rows = dsc.rows;
      // self.groups = dsc.groups;
      self.currentGroups = self.groups;
      // self.data = dsc.data;
      self.currentData = self.data;

      self.loading = false;
  
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

    self.title = PriceCardsBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;

    self.params = loader.pl.paramsCopy();
    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};
