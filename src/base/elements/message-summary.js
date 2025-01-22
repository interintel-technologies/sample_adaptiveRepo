import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const MessageSummaryBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'message-summary';
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


  constructor() {
    super();
    this.searchText = '';
    this.rows = [];
    this.cols = [];
    this.e = null;
}

static get properties() {
    return {
        rows: { type: Array },
        e: { type: Object },
        cols: { type: Array },
    };
}


  dscDataName() {
    return this.e.defaultValue;
  }

  dataResponseType() {
    return Symbol.for('DATA');
  }


  
  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('cols')) {
      const self = this;
    }
}

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);
  //   const self = this;

    
  // }
  

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.title = MessageSummaryBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;

    self.params = loader.pl.paramsCopy();
    self.maxlength = pElement.max;
  }
};
