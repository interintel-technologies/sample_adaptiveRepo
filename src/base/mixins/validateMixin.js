import { LitElement, html } from 'lit-element';

export class ValidatedInput extends LitElement {
  
  static get properties() {
    return {
      type: { type: String },
      value: { type: String },
      name:{ type: String },
      required:{type:Boolean}
    };
  }

  constructor() {
    super();
    this.type = 'text'; // default type
    this.value = '';
    this.name = '';
    this.required = false
  }

  validate() {
    switch(this.type) {
      case 'number':
        return !isNaN(this.value) && this.value !== '';
      case 'email':
        return this._validateEmail(this.value);
      case 'url':
        return this._validateURL(this.value);
      case 'tel':
        return this._validatePhoneNumber(this.value);
      case 'text':
      case 'search':
      case 'password':
        return this.value.trim() !== '';
      default:
        return true;
    }
  }

  _validateEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  }

  _validateURL(value) {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  }

  _validatePhoneNumber(value) {
    const phonePattern = /^\+?[1-9]\d{1,14}$/; // Basic international phone number validation
    return phonePattern.test(value);
  }

  render() {
    return html`
      <input
        class="input"
        .type="${this.type}"
        .value="${this.value}"
        .name="${this.name}"
        @input="${this._onInput}"
        required="${this.required}"
      />
    `;
  }

  _onInput(event) {
    this.value = event.target.value;
  }
}
