import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const EmailInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'email-input';
  }

  static get properties() {
    return {
      params: {type: Object, value: {}},
      type: String,
      required: Boolean,
      pageType: {type: Object, value: {}},
      columnSize: {type: Array},
    };
  }


  getName() {
    return this.e.formName;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validate() {
    if ( this.required && !this.getValue() && !this.validateEmail(this.getValue())) {
      if (this.required && !this.getValue() ) {
        if(this.e.required === false && !this.getValue()){
          return new this.Validation(true,'valid');
        }
        return new this.Validation(false, this.e.name + ' is Required');
      } else {
        return new this.Validation(false, this.e.name + ' Invalid format');
      }
    }

    if (this.getValue()) {
      const emailValid = this.validateEmail(this.getValue());
      return new this.Validation(emailValid, emailValid?'Valid':'Invalid Email Format');
    }
    return new this.Validation(true, 'Valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self=this;
    self.title = EmailInputBase.toTitleCase(pElement.name);
    this.required = this.e.required || (pElement.min && pElement.min > 0);
    this.value = pElement.defaultValue|| '';
  }
};
