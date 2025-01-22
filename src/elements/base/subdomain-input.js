import {SerializableElement} from '../../core/serializable-element';

export const SubdomainInputBase = class extends SerializableElement {
  static get is() {
    return 'subdomain-input';
  }

  static get properties() {
    return {
      value: Object
    };
  }

  constructor() {
    super();
    this.value = undefined;
  }

  invalid(validation) {
    this.qs('#message').innerText = validation.message;
  }

  valid(validation) {
    this.qs('#message').innerText = validation.message;
  }

  getValue() {
   this.value= this.shadowRoot.querySelector('.input').value;
    return this.value;
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    const value = this.getValue();
    if (this.required && !value) {
      return new this.Validation( false, this.e.name + ' is Required');
    }

    return new this.Validation(true, 'Valid Domain');
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  dscDataName() {
    return this.e.defaultValue;
  }


  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    // self.title = SubdomainInput.toTitleCase(pElement.name);
    this.required = this.e.required || (pElement.min && pElement.min > 0);
  }
};
