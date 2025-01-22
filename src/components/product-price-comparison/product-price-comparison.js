import { html, css,unsafeCSS, LitElement } from "lit-element";
import { ProductPriceComparisonStyles } from "./product-price-comparison-css";
import globalStyles from '../../App.css?raw';

class ProductPriceComparison extends LitElement {
  static get styles() {
    return [unsafeCSS(globalStyles),ProductPriceComparisonStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      product: Object,
      rows: { type: Array },
      e: { type: Object },
      cols: { type: Array },
    };
  }

  constructor() {
    super();
    this.product = {};
    this.rows = [];
    this.cols = [];
  }

  updated(changedProperties) {
		if (changedProperties.has('e') || changedProperties.has('rows') || changedProperties.has('cols')) {
      this.product = Object.fromEntries(
        this.rows[0].map((rowValue, index) => [
          this.cols[index].label,
          rowValue,
        ])
      );
    }
  }
  // firstUpdated() {
  //   this.loader.then(() => {
  //     this.product = Object.fromEntries(
  //       this.rows[0].map((rowValue, index) => [
  //         this.cols[index].label,
  //         rowValue,
  //       ])
  //     );
  //   });
  // }

  formatPrice(price) {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
    }).format(price);
  }

  static get is() {
    return "product-price-comparison";
  }

  render() {
    return html`
      <div class="column content">
        <div class="columns hero-body">
          <div class="column is-5">
            <figure class="large-image image is-5by4">
              <img
                src="/media/${this.product.image}"
                alt="${this.product.name}-product-image"
              />
            </figure>
          </div>
          <div class="column is-7">
            <h2>${this.product.name}</h2>
            <h3>Price Comparison</h3>
            <ul>
              ${this.product.vendors
                ? this.product.vendors.map(
                    (vendor) => html`
                      <li class="columns">
                        <div class="column is-1">
                          <adaptive-ui-icon
                            icon=${vendor.icon}
                          ></adaptive-ui-icon>
                        </div>
                        <div class="column is-3">
                          <h4>${vendor.name}</h4>
                        </div>
                        <div class="column is-4">
                          <h4>${this.formatPrice(vendor.price)}</h4>
                        </div>
                        <div class="column is-2 stock">
                          ${!vendor.isInStock
                            ? html`
                                <div class="pill">
                                  <h4>Out of Stock</h4>
                                </div>
                              `
                            : ""}
                        </div>
                        <div class="column is-2">
                          <button class="button" ?disabled=${!vendor.isInStock}>
                            <h4>Buy</h4>
                          </button>
                        </div>
                      </li>
                    `
                  )
                : ""}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(ProductPriceComparison.is, ProductPriceComparison);
