import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { ChosenPriceStyles } from './chosen-price-css';
import globalStyles from '../../App.css?raw';

class ChosenPrice extends LitElement {
  static get properties() {
    return {
      e: { type: Object }, // Add `e` as a property
      details: { type: Object }, // Add `details` as a property
    };
  }

  constructor() {
    super();
    this.e = null; // Initialize `e` to null
    this.details = {}; // Initialize `details` to an empty object
  }

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      ChosenPriceStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has('e') && this.e) {
      console.log('details is ', this.e);
      this.details = this.e.details;
    }
  }

  static get is() {
    return 'chosen-price';
  }

  render() {
    return html`
      <div class="hero-body content has-background-primary-light">
        <h3>You've Chosen:</h3>
        <h3>
          <strong>${this.details ? this.details.label : 'No label available'}</strong>
        </h3>
        <hr />
        <p>
          <strong>Price: ${this.details ? this.details.price : 'No price available'}</strong>
        </p>
      </div>
    `;
  }
}

customElements.define(ChosenPrice.is, ChosenPrice);
