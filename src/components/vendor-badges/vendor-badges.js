import { html, css, LitElement, unsafeCSS } from "lit-element";
import { VendorBadgesStyles } from "./vendor-badges-css";
import globalStyles from '../../App.css?raw';

class VendorBadges extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      VendorBadgesStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }
  static get properties() {
    return {
      vendorBadges: Array,
      e: { type: Object },
    };
  }

  constructor() {
    super();
    this.vendorBadges = [];
    this.e = null;
  }


  updated(changedProperties) {
    if (changedProperties.has('e')) {

      if (this.e) {
      this.vendorBadges = this.e.details;
        
      }
      
    }
  }

  static get is() {
    return "vendor-badges";
  }

  render() {
    return html`
      <div class="level">
        ${this.vendorBadges.map(
          (badge) => html`
            <div class="level-item">
            <adaptive-ui-icon icon=${badge.icon || 'icons:info'}></adaptive-ui-icon>
              <div class="content">
                <h5>${badge.title}</h5>
                <p>${badge.description}</p>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define(VendorBadges.is, VendorBadges);
