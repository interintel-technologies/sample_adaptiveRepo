
import {LitElement} from 'lit-element';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
export const RENDER_M_DEFAULT = 0;
export const RENDER_M_SIDE_BY_SIDE = 1;

export const EListBase = class extends LitElement {
  static get properties() {
    return {
      oe: Array,
      renderMode: Number,
    };
  }

  constructor() {
    super();
    this.oe = [];
    this.renderMode = RENDER_M_DEFAULT;
  }
  
  eSubmitForm() {
    return this.fr.eSubmitForm();
  }

  submitForm() {
    return this.fr.submitForm();
  }
  submitForm2(service) {
    return this.fr.submitForm2(service);
  }

  skipForm(service,name,value) {
    return this.fr.skipForm(service,name,value);
  }

  closeWindow(service) {
    return this.fr.closeWindow(service);
  }

  paramsCopy() {
    return this.fr.paramsCopy();
  }
  _dialog(...args) {
    // todo use the spread operator instead of apply
    this.fr._dialog.apply(this.fr, args);
  }
  
  _gridClasses(el) {
    if (!el.sectionSize) {
      return '24|24|24';
    }
    return el.sectionSize;
  }

  static get is() {return 'e-list';}

  render() {
    throw new DOMException('extending must override render');
  }
};
