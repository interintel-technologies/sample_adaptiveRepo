import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';


export const CheckboxCheckBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'checkbox-check';}
  static get properties() {
    return {
      icon: String,
      maxlength: Number,
    };
  }


  getName() {
    return this.e.formName;
  }


  validate() {
    // has to be checked to be valid
    const isOff = this.getValue() !== 'on';
    return new this.Validation(!isOff, isOff? this.e.name + ' is invalid':'valid');
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.title = CheckboxCheckBase.toTitleCase(pElement.name);
  }
};
