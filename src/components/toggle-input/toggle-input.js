import {html, css, unsafeCSS} from 'lit-element';
import {ToggleInputBase} from '../../base/elements/toggle-input';
import {ToggleInputStyles} from './toggle-input-css';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
import globalStyles from '../../App.css?raw';

class ToggleInput extends ToggleInputBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      ToggleInputStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
        console.log("Updated properties: ", this.e);
    }
}

constructor() {
  super();
  this.e = null;
}

static get properties() {
  return {
      e: { type: Object },
  };
}

  render() {
    return html`
<div class="main-container">
  <div class="column">
  <div class="field">
  <label class="switch">
    <input type="checkbox" id="input" required=${this.e.required}>
    <span class="slider round"></span>
  </label>
  <label for="switch" class="lbl">${this.e.name}</label>
    </div>
    </div>
  </div>
  `;
  }
  static get is() {return 'toggle-input';}

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().checked?'on':'off';
  }


}
window.customElements.define(ToggleInput.is, ToggleInput);
