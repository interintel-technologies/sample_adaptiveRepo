import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const ToggleInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'toggle-input';}
  static get properties() {
    return {
      params: {type: Object, value: {}},
      // type:String,
      icon: String,
      service: String,
      title: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      columnSize: {type: Array},
    };
  }


  getName() {
    return this.e.formName;
  }


  validate() {
    if (this.required && ! this.getValue() ) {
      return new this.Validation(false, 'invalid');
    }
    return new this.Validation(true, 'valid');
  }

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);
  // }


  updated(changedProperties) {
    if (changedProperties.has('e')) {
      const self = this;
      self.name = ToggleInputBase.toTitleCase(self.e.name);
  
      this.required = this.e.required || (self.e.min && self.e.min > 0);
  
    }
}

  // init(pElement, loader) {
  //   super.init(pElement, loader);
  //   const self = this;
  //   self.name = ToggleInputBase.toTitleCase(pElement.name);

  //   this.required = this.e.required || (pElement.min && pElement.min > 0);
  // }
};
