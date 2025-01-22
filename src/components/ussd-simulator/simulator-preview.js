import {LitElement, html, css} from 'lit-element';

export const CONNECTION_BEG = 'BEG';
export const CONNECTION_END = 'END';
export const CONNECTION_CON = 'CON';

import {SimulatorPreviewStyles} from './simulator-preview-css'

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class UssdSimulatorPreview extends LitElement {
  constructor() {
    super();
    this.state = CONNECTION_CON;
  }

  static get properties() {
    return {
      menus: String,
      connection: String,
      state: String,
    };
  }

  static get styles() {
    return [
      SimulatorPreviewStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  render() {
    return html`


    <p class="white-space-pre">${this.menus}</p>
    <br>
    
    ${this.state===CONNECTION_CON?html`
    <input type="text" id="selectionInput" style="width:100%;">
    `:html``}
    

    <div style="display:flex;flex-direction:row;margin-top:5px;margin-bottom:5px;">
    
    <input type="submit" @click=${this.cancel} value="Cancel" style="flex:1">
    ${this.state === CONNECTION_CON ? html`
    <input type="submit" @click=${this.submit} value="Send" style="flex:1">
    `:html``}
    </div>
    
    `;
  }

  cancel(evt) {
    evt.preventDefault();

    const event = new CustomEvent('cancel', {
      detail: {},
    });
    this.dispatchEvent(event);
  }

  // attach on enter key press event
  submit(evt) {
    evt.preventDefault();
    const selectionInput = this.shadowRoot.querySelector('#selectionInput');
    // get current input
    const selection = selectionInput.value;
    // clear input
    selectionInput.value = '';

    // fire event
    const event = new CustomEvent('submit', {
      detail: {
        selection: selection,
      },
    });
    this.dispatchEvent(event);
  }

  updateDisplay(menuString) {
    this.menus = menuString;
  }
  setState(state) {
    this.state = state;
  }
}

customElements.define('ussd-simulator-preview', UssdSimulatorPreview);
