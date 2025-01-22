import { LitElement, html, css, unsafeCSS } from "lit-element";
import { WishListEditorStyles } from "./wish-list-editor-css";
import { ECommerceMixin } from "../../core/mixins/ecommerce-mixin";
import globalStyles from '../../App.css?raw';

class WishListEditor extends ECommerceMixin(LitElement) {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      WishListEditorStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  onRemoveProductBtnClickHandler(id) {
    this.removeItemFromWishlist(id);
  }

  onAddToCartBtnClickHandler(item) {
    this.addItemToCart(item);
    this.removeItemFromWishlist(item.id);
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  static get is() {
    return "wish-list-editor";
  }

  render() {
    return html`
      <div class="column content">
        <div class="columns hdr" style="margin: 0;">
          <div class="column is-6">
            <h4 style="text-align: center;">Product</h4>
          </div>
          <div class="column is-2">
            <h4 style="text-align: center;">Stock Status</h4>
          </div>
          <div class="column is-2">
            <h4 style="text-align: center;">Added on</h4>
          </div>
          <div class="column is-2"></div>
        </div>
        ${this.wishlist.length > 0
          ? this.wishlist.map(
              (item) => html`
                <div class="columns bdy" style="margin: 0;">
                  <div class="column is-6 is-flex">
                    <figure class="image is-128x128">
                      <img src="${item.image}" alt="${item.name}Image" />
                    </figure>
                    <div class="column">
                      <h5>${item.name}</h5>
                      <h6>${this.formatToKenyaShillings(item.price)}</h6>
                      <button
                        class="button"
                        title="Add to Cart"
                        type="button"
                        @click=${() => this.onAddToCartBtnClickHandler(item)}
                      >
                        <h6>Add to Cart</h6>
                      </button>
                    </div>
                  </div>
                  <div class="column is-2">
                    <h5 style="text-align: center;">
                      ${item.stockQuantity ? "In " : "Out of "}Stock
                    </h5>
                  </div>
                  <div class="column is-2">
                    <h4 style="text-align: center;">
                      ${this.formatDate(item.addedOn)}
                    </h4>
                  </div>
                  <div class="column is-2">
                    <adaptive-ui-icon
                      title="Remove ${item.name}"
                      icon="close"
                      @click=${() =>
                        this.onRemoveProductBtnClickHandler(item.id)}
                    ></adaptive-ui-icon>
                  </div>
                </div>
              `
            )
          : html`<h3>Wishlist is empty</h3>`}
      </div>
    `;
  }
}

customElements.define(WishListEditor.is, WishListEditor);
