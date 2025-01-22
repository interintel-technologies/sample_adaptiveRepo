import {html, css, unsafeCSS} from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

import {LoginMipayBase} from '../../base/elements/login-mipay';
import {LoginMipayStyles} from './login-mipay-css'
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
import globalStyles from '../../App.css?raw';

class LoginMipay extends LoginMipayBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      LoginMipayStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  renderDefault() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <div class="hero-body">
        <a class="button is-flex">
          <img class="mipay-image" src="src/themes/dsv1.0/img/mipay.png"/>
          <h3 class="title is-6">Login with Mipay</h3>
        </a>
      </div>
    `;
  }
  constructor() {
    super();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  init(pElement, loader) {
    super.init(pElement, loader);
  }
}

customElements.define(LoginMipay.is, LoginMipay);
