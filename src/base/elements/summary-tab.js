
import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const SummaryTabBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'summary-tab';
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

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);
  //   const self = this;
    
  // }
  
  updated(changedProperties) {
    if (changedProperties.has('e') ) {
      const self = this;
      self.title = SummaryTabBase.toTitleCase(pElement.name);
      self.icon = this.e.icon;
      self.service = this.e.service;
  
      self.maxlength = this.e.max;
    }
  }

  // init(pElement, loader) {
  //   super.init(pElement, loader);
  //   var self = this;

  //   self.title = SummaryTabBase.toTitleCase(pElement.name);
  //   self.icon = pElement.icon;
  //   self.service = pElement.service;

  //   self.params = loader.pl.paramsCopy();
  //   self.maxlength = pElement.max;
  // }
};
