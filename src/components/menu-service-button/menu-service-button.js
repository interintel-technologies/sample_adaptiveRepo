import { html, css,unsafeCSS } from "lit-element";
import { MenuServiceButtonBase } from "../../base/elements/menu-service-button";
import { MenuServiceButtonStyles } from "./menu-service-button-css";
import globalStyles from '../../App.css?raw'

class MenuServiceButton extends MenuServiceButtonBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      MenuServiceButtonStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }
  renderDefault() {
    return html`
      <div class="box">
        <div id="container content">
          <div class="ccc">
            <div class="feature-wrap">
              <adaptive-ui-icon
                style="width:88px !important;height: 88px !important;"
                icon="[[icon]]"
              ></adaptive-ui-icon>
            </div>
            <h3>${this.name}</h3>
          </div>
        </div>
      </div>
    `;
  }
}
window.customElements.define(MenuServiceButton.is, MenuServiceButton);
