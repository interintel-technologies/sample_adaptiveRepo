import { LitElement } from 'lit-element';


export class Validation {
  constructor(valid, message) {
    this.isValid = valid;
    this.validationMessage = message;
  }

  /**
     * Validation Status
     * @return {Boolean}
     */
  get valid() {
    return this.isValid;
  }

  /**
     * Validation Message
     * @return {String}
     */
  get message() {
    return this.validationMessage;
  }

  toString() {
    return this.message;
  }
}

/**
 * Base Class for elements that provides name value pairs for
 * Submission, e.g from forms
 */
export class SerializableElement extends LitElement {
  constructor() {
    super();
    this.Validation = Validation;
  }

  static get properties() {
    return {
      required: {
        type: Boolean,
        value: false,
      },

      name: String,
      value: Object,
    };
  }

  getName() {
    throw new DOMException('using "SerializableMixin" must override "getName"');
  }

  getValue() {
    throw new DOMException('using "SerializableMixin" must override "getValue"');
  }

  validate() {
    throw new DOMException('using "SerializableMixin" must override "validate"');
  }


  invalid() {
    throw new DOMException('using "SerializableMixin" must override "invalid"');
  }


  valid() {
    throw new DOMException('using "SerializableMixin" must override "valid"');
  }
}
