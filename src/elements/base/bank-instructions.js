import {SerializableElement} from '../../core/serializable-element';

export const BankInstructionsBase = class extends SerializableElement {
  static get is() {
    return 'bank-instructions';
  }

  constructor() {
    super();
    this.bank = 0;
  }

  static get properties() {
    return {
      bank: Number,
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if (this.e.required && ! this.getValue() ) {
      return new this.Validation(false, 'invalid');
    }
    return new this.Validation(true, 'valid');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }
};
