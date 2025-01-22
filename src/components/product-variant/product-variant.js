import { ProductVariantBase } from "../../base/elements/product-variant";
import { html, css,unsafeCSS } from "lit-element";
import { ProductVariantStyles } from "./product-variant-css";
import globalStyles from '../../App.css?raw'
class ProductVariant extends ProductVariantBase {
  static get styles() {
    return [unsafeCSS(globalStyles),ProductVariantStyles];
  }

  static get is() {
    return "product-variant";
  }

  static get properties() {
    return {
      variantsObject: Object,
      variantTitles: Array,
      variantValues: Array,
      e: { type: Object },
    };
  }

  constructor() {
    super();
    this.variantsObject = {};
    this.variantTitles = [];
    this.variantsValues = [];
    this.e = null
  }


  updated(changedProperties) {
		if (changedProperties.has('e')) {
      this.variantsObject = {
        Color: ["white", "red", "black", "blue", "yellow", "green"],
        ...this.e.details,
      };
  
      this.variantTitles = Object.keys(this.variantsObject);
      this.variantsValues = Object.values(this.variantsObject);
  
            
    }}

  // firstUpdated() {
  //   this.variantsObject = {
  //     Color: ["white", "red", "black", "blue", "yellow", "green"],
  //     ...this.e.details,
  //   };

  //   this.variantTitles = Object.keys(this.variantsObject);
  //   this.variantsValues = Object.values(this.variantsObject);
  // }

  createVariantTitles() {
    return html`
      <div id="vt-columns-container" class="columns is-flex">
        ${this.variantTitles.map(
          (variantTitle) => html`
            <div class="column variant-container">
              <div class="button variant-title">
                <h3 class="is-5">${variantTitle}</h3>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  createVariantValues() {
    const onVariantValueClickHandler = (variantValue, index) => {
      const variantTitle = this.variantTitles[index];
      this.value = Object.assign(this.value, {
        [variantTitle]: variantValue,
      });

      selectVariant(variantValue, index);
    };

    const selectVariant = (variantValue, index) => {
      const variantContainer = this.shadowRoot.querySelector(`#vc${index}`);
      const variantValueDiv = this.shadowRoot.querySelector(
        `#${variantId(variantValue, index)}`
      );
      const alreadySelectedVariant =
        variantContainer.querySelector(`.selected`);

      if (alreadySelectedVariant) {
        alreadySelectedVariant.classList.toggle("selected");
      }

      variantValueDiv.classList.toggle("selected");
    };

    const variantId = (variantValue, index) => {
      const nonSpacedVariantValue = variantValue.split(" ").join("");

      return `vv${nonSpacedVariantValue}${index}`;
    };

    return html`
      <div id="vv-columns-container" class="columns is-flex">
        ${this.variantsValues.map(
          (variantValues, arrayIndex) => html`
            <div id="vc${arrayIndex}" class="column is-flex variant-container">
              ${variantValues.map(
                (variantValue) => html`
                                    <div
                                        id="${variantId(
                                          variantValue,
                                          arrayIndex
                                        )}"
                                        class="button variant-value"
                                        style="background-color: ${
                                          arrayIndex === 0 ? variantValue : ""
                                        };"
                                        @click=${() =>
                                          onVariantValueClickHandler(
                                            variantValue,
                                            arrayIndex
                                          )}
                                    >
                                        <h3 class="is-5"
                                            style="color: ${
                                              variantValue === "black"
                                                ? "white"
                                                : ""
                                            };"    
                                        >${variantValue}</h3>
                                    </div>
                                `
              )}
            </div>
          `
        )}
      </div>
    `;
  }

  render() {
    return html`
      <div class="hero-body" style="padding:16px">
        <h3 class="title is-6">${this.e.name}</h3>
        <div id="columns-container" class="columns is-flex">
          <div id="variant-titles" class="column is-flex">
            ${this.createVariantTitles()}
            <div class="vl"></div>
          </div>
          <div id="variant-values" class="column">
            ${this.createVariantValues()}
          </div>
        </div>
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </div>
    `;
  }
}

customElements.define(ProductVariant.is, ProductVariant);
