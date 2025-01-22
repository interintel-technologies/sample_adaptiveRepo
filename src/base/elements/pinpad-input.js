import {SerializableElement} from '../../core/serializable-element';


export const PinPadInputBase = class extends SerializableElement {
  static get is() {
    return 'pinpad-input';
  }

  static get properties() {
    return {
      params: {type: Object, value: {}},
      type: String,
      columnSize: {type: Array},
    };
  }

  getName() {
    return this.e.formName;
  }


  validate() {
    if (this.required && !this.getValue()) {
      return new this.Validation(false, this.e.name + ' is Required');
    }else if(this.required && this.getValue().length < this.e.min){
      return new this.Validation(false, this.e.name + ' cannot be less than '+ this.e.min);
    }

    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }


  init(pElement, loader) {
    super.init(pElement, loader);
    // this.required = pElement.min && pElement.min > 0;
    this.required = this.e.required || (pElement.min && pElement.min > 0);

    this.value = pElement.defaultValue || '';
  }
};
