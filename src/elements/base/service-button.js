import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const ServiceButtonBase = class extends utilsMixin( BaseElement) {
  static get is() {return 'service-button';}
  static get properties() {return {
    color: String,

    params: {type: Object, value: {}},
  };}
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    self.addEventListener('click', function(evt) {
      evt.preventDefault();
      self._dialog(self.e.service, self.params);
    });
  }

  
};
