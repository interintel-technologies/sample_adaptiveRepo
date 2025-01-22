import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { CheckboxCheckBase } from '../../base/elements/checkbox-check';
import { CheckboxCheckStyles } from './checkbox-check-css';
import globalStyles from '../../App.css?raw';

class CheckboxCheck extends CheckboxCheckBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      CheckboxCheckStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }


  static get properties() {
    return {
        e: { type: Object }, // Assuming 'e' is passed as a property
    };
}

  constructor() {
    super();
    this.e = null; // Initialize `this.e` as an empty array or with default values
  }

  updated(changedProperties) {
    if (
        changedProperties.has('e')
    ) {
      
    }
}


  getInput() {
    return this.shadowRoot.querySelector('#input');
  }

  getValue() {
    return this.shadowRoot.querySelector('#input').checked ? 'on' : 'off';
  }

  valid(Validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'none';
    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'block';
    if (validation) {
      this.shadowRoot.querySelector('.validation-info').textContent = validation;
    }
  }

  render() {
    return html`
      <div class="container">
        <label class="switch">
          <input type="checkbox" id="input" name=${this.e.name} type="checkbox" placeholder=${this.e.name} required=${this.e.required}>
          <span class="slider round"></span>
        </label>
        <br/>
        <small class="validation-info">Required</small>
        <br/>

        <span class="label">${this.e.name}: ${this.e.kind}</span>
      </div>
    `;
  }
}

window.customElements.define('checkbox-check', CheckboxCheck);
