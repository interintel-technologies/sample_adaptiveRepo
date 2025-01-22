import { css, html,LitElement,unsafeCSS } from "lit-element";
import { ProductMetaViewStyles } from "./product-meta-view-css";
import globalStyles from '../../App.css?raw'
class ProductMetaView extends LitElement {
  static get styles() {
    return [
        unsafeCSS(globalStyles),ProductMetaViewStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      content: Object,
    };
  }

  constructor() {
    super();

    this.content = this.renderContent("");
  }


  updated(changedProperties) {
		if (changedProperties.has('e') || changedProperties.has('cols')) {
      this.content = this.renderContent("Description");

    }}


  onTabClickHandler(e, type) {
    const tabs = this.shadowRoot.querySelectorAll("li");
    const selectedTab = e.target;

    tabs.forEach((tab) => tab.classList.remove("is-active"));
    selectedTab.classList.add("is-active");

    this.content = this.renderContent(type);
  }

  renderDescriptionContent() {
    return html`
      <p>
        Ex qui ad pariatur ad voluptate. Id ullamco eiusmod incididunt ea est
        tempor ad occaecat ex amet est. Id exercitation laborum ut do aliquip
        mollit cillum id eiusmod incididunt.
      </p>
    `;
  }

  renderShippingRefundsContent() {
    return html`
      <p>
        Dolor do aliquip et do culpa cillum enim ea. Pariatur ea elit veniam ut
        voluptate mollit officia pariatur. Eiusmod est officia non nulla
        consectetur qui occaecat ex nostrud incididunt sint labore commodo esse.
        Officia fugiat quis velit irure deserunt. Esse nisi tempor minim labore
        exercitation. Ullamco dolore aliquip eu pariatur nulla proident.
        Pariatur esse sint excepteur id do aliquip duis voluptate tempor ullamco
        aliqua adipisicing reprehenderit sit.
      </p>
    `;
  }

  renderProductReviews() {
    return html`
      <p>
        Fugiat est cupidatat enim ipsum in ut cupidatat proident. Nisi nulla
        velit nisi ea dolor et et laborum occaecat officia laboris est. Mollit
        magna ipsum amet Lorem aliquip est nostrud.
      </p>
    `;
  }

  renderContent(type) {
    switch (type) {
      case "Description":
        return this.renderDescriptionContent();
      case "Shipping / Refunds":
        return this.renderShippingRefundsContent();
      case "Product Reviews":
        return this.renderProductReviews();
      default:
        return html``;
    }
  }

  static get is() {
    return "product-meta-view";
  }

  render() {
    return html`
      <div id="product-meta-view" class="column">
        <div class="hero-body">
          <div class="tabs is-large is-centered is-fullwidth">
            <ul>
              <li
                class="is-active"
                @click=${(e) => this.onTabClickHandler(e, "Description")}
              >
                <a>Description</a>
              </li>
              <li
                @click=${(e) => this.onTabClickHandler(e, "Shipping / Refunds")}
              >
                <a>Shipping / Refunds</a>
              </li>
              <li @click=${(e) => this.onTabClickHandler(e, "Product Reviews")}>
                <a>Product Reviews</a>
              </li>
            </ul>
          </div>
          <div class="content"><p>${this.content}</p></div>
        </div>
      </div>
    `;
  }
}

customElements.define(ProductMetaView.is, ProductMetaView);
