import { html, css,unsafeCSS } from "lit-element";
import globalStyles from '../../App.css?raw';

import { VerticalServiceButtonStyles } from "./vertical-service-button-css";
import { VerticalServiceButtonBase } from "../../base/elements/vertical-service-button";

class VerticalServiceButton extends VerticalServiceButtonBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      VerticalServiceButtonStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

    
  static get properties() {
    return {
      e: { type: Object },
    };
  }

  constructor() {
    super();
    this.e = null;
  }

    
  updated(changedProperties) {
    if (changedProperties.has('e')) {
      
    }
  }

  render() {
    return html`
      <div class="service-button-container">
        <div class="content-area">
          <div class="icon-holder">
            <adaptive-ui-icon
              icon="icons:input"
              style="width:28px !important;height: 28px !important;"
            ></adaptive-ui-icon>
          </div>
          <div class="content-txt is-flex">
            <div class="heading">
              <h1 class="title is-size-6">${this.e.name}</h1>
              <p class="subtitle">${this.e.details.description}</p>
            </div>
            <div class="nxt"></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(VerticalServiceButton.is, VerticalServiceButton);
