import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const SmsFloatPurchaseBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'sms-float-purchase';}
  static get properties() {
    return {
      params: {type: Object, value: {}},
      type: String,
      value: String,
      columnSize: {type: Array},
      items: {type: Object},
      dropDownList: Array,
      selected: String,
    };
  }




  getName() {
    return this.e.formName;
  }


  validate() {
    if ((this.e.required || this.required) && ! this.getValue() ) {
      return new this.Validation(false, this.e.name+' is Required');
    }else if((this.e.required || this.required) && this.getValue()){
      return new this.Validation(true, 'valid');
    }
    return new this.Validation(true, 'valid');
  }



  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }



  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = SmsFloatPurchaseBase.toTitleCase(pElement.name);
    this.required = this.e.required|| (pElement.min && pElement.min > 0);
    self.items = JSON.parse(pElement.defaultValue);
    this.value = pElement.defaultValue || '';
  }
};
