import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';


export const CcInputBase = class extends utilsMixin(SerializableElement) {

  static get properties() {
    return {
      value: String,
      params: {type: Object, value: {}},
      type: String,
      columnSize: String,
      ColumnOffset: {type: Array},
    };
  }

  constructor() {
    super();
    this.value = "";
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  getName() {
    return this.e.formName;
  }

  getInput() {
		return this.qs('text-input');
	}

  getValue() {
		return this.getInput().value;
	}

  validate() {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const nonSpaceValue = this.getValue().split(" ").join("");

    if (this.e.required) {
      if (nonSpaceValue.length !==16) {
        return new this.Validation(false, this.e.name+' Minimum of 16 Required');
      } 
      else if(!visaRegEx.test(nonSpaceValue) && !mastercardRegEx.test(nonSpaceValue)) {
        return new this.Validation(false, 'Card number entered is not valid');
      }
    }

    return new this.Validation(true, 'valid');
  }

  static get is() {
    return 'cc-input';
  }
  
  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = CcInputBase.toTitleCase(pElement.name);
    this.required = pElement.min && pElement.min > 0;
    this.name = pElement.name;
  }
};
