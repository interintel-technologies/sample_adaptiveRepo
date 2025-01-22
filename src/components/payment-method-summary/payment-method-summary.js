import { PaymentMethodSummaryStyles } from "./payment-method-summary-css";
import { PaymentMethodSummaryBase } from "../../base/elements/payment-method-summary";
import { css, html,unsafeCSS } from "lit-element";
import globalStyles from '../../App.css?raw'

class PaymentMethodSummary extends PaymentMethodSummaryBase {
  static get styles() {
    return [unsafeCSS(globalStyles),PaymentMethodSummaryStyles];
  }

  static get properties() {
    return {
      paymentMethods: Array,
      rows: { type: Array },
      e: { type: Object },
      cols: { type: Array },
    };
  }

  constructor() {
    super();

    this.paymentMethods = [];
    this.rows = [];
    this.cols = [];
    this.e = null
  }

  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('cols')) {
      this.paymentMethods = [
        ...this.rows.map((row) =>
          Object.fromEntries(
            row.map((rowValue, index) => [this.cols[index].label, rowValue])
          )
        ),
      ];
      this.setDefaultValues();
      }
}



  setDefaultValues() {
    this.value = this.paymentMethods
      .filter((paymentMethod) => paymentMethod.status === "Active")
      .map((paymentMethod) => paymentMethod.id);
  }

  onPaymentMethodBtnClickHandler(id) {
    this.dispatchEvent(new CustomEvent('service-call', { 
      detail: { service: this.e.service,params:{connectPaymentMethod: id} },
      bubbles: true,
      composed: true 
  }));

    // this.pl._dialog(this.e.service, { connectPaymentMethod: id });
    this.value = [...this.value, id];
  }

  onRemoveClickHandler(id) {
    this.updateParams("removePaymentMethod", id);
    this.value = this.value.filter((vId) => vId !== id);
  }

  valid(validation) {
    const title = this.shadowRoot.querySelector(".label");
    const warningText = this.shadowRoot.querySelector("#warning-text");
    title.classList.remove("title-danger");
    title.classList.add("title-success");
    warningText.style.display = "none";

    setTimeout(() => {
      title.classList.remove("title-success");
    }, 3000);
  }

  invalid(validation) {
    const title = this.shadowRoot.querySelector(".label");
    const warningText = this.shadowRoot.querySelector("#warning-text");

    title.classList.remove("title-success");
    title.classList.add("title-danger");
    warningText.style.display = "block";
  }

  static get is() {
    return "payment-method-summary";
  }

  render() {
    return html`
      <div class="column content">
        <h5 class="label">${this.e.name}</h5>
        ${this.paymentMethods.map(
          (paymentMethod) => html`
            <div class="columns card">
              <div class="column is-flex">
                <adaptive-ui-icon
                  class="icon"
                  icon=${paymentMethod.icon}
                ></adaptive-ui-icon>
              </div>
              <div class="column is-flex">
                <h3 style="text-align: center;">${paymentMethod.name}</h3>
                ${paymentMethod.details.map((detail) =>
                  Object.entries(detail).map(
                    ([key, value]) => html`
                      <h6 style="text-align: center;">${key}: ${value}</h6>
                    `
                  )
                )}
              </div>
              <div class="column is-flex">
                <h6>Status: ${paymentMethod.status}</h6>
                <button
                  id="Btn${paymentMethod.id}"
                  style="background-color: ${paymentMethod.status === "Disabled"
                    ? "green"
                    : "red"}"
                  class="button"
                  @click=${() =>
                    this.onPaymentMethodBtnClickHandler(paymentMethod.id)}
                >
                  ${paymentMethod.status === "Disabled"
                    ? "Activate"
                    : "Deactivate"}
                </button>
              </div>
            </div>
          `
        )}
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </div>
    `;
  }
}

customElements.define(PaymentMethodSummary.is, PaymentMethodSummary);
