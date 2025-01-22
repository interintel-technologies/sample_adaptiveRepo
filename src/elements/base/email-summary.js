import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const EmailSummaryBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'email-summary';
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

    
  }
  

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.title = EmailSummaryBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;

    self.params = loader.pl.paramsCopy();
    self.maxlength = pElement.max;
  }
};
