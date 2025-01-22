import {SerializableElement} from '../core/serializable-element';
import {html} from 'lit-element';


class HiddenElement extends SerializableElement {
  static get is() {return 'hidden-element';}

  // todo move into super class
  render() {
    return html``;
  }

  static get properties() {return {
    icon: String,
    params: {type: Object, value: {}},
    
  };}

  getValue() {
    return this.e.defaultValue;
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    return new this.Validation(true, '');
  }

  valid(validation) {}
  invalid(validation) {
    // will never happen
  }
}
customElements.define(HiddenElement.is, HiddenElement);
