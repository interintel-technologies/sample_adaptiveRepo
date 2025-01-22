import {html,css, unsafeCSS} from 'lit-element';
import {HeaderViewStyles} from './header-view-css';
import { HeaderViewBase } from '../../base/elements/header-view';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class HeaderView extends HeaderViewBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      HeaderViewStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      image: String,
      e: { type: Object }
    };
  }

  constructor() {
    super();
    this.e = {};
  }

  updated(changedProperties) {
    if (
        changedProperties.has('e')
      ) {
        console.log("this header view details ",this.e);
            
}
}

  render() {
    return html`
      <div class="field">
        <h2>${this.e.defaultValue}<h2>
      </div> `;
  }
}
window.customElements.define(HeaderView.is, HeaderView);
