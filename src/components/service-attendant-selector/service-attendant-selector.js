import { html, css,unsafeCSS } from "lit-element";
import { ServiceAttendantSelectorStyles } from "./service-attendant-selector-css";
import { ServiceAttendantSelectorBase } from "../../base/elements/service-attendant-selector";
import globalStyles from '../../App.css?raw'
class ServiceAttendantSelector extends ServiceAttendantSelectorBase {
  static get styles() {
    return [unsafeCSS(globalStyles),ServiceAttendantSelectorStyles];
  }

  static get properties() {
    return {
      services: Array,
      attendants: Array,
      duration: Number,
      charges: Number,
    };
  }

  constructor() {
    super();

    this.services = [];
    this.attendants = [];
    this.duration = 0;
    this.charges = 0;
  }

  firstUpdated() {
    this.loader.then(() => {
      const data = [
        ...this.rows.map((row) =>
          Object.fromEntries(
            row.map((rowValue, index) => [this.cols[index].label, rowValue])
          )
        ),
      ][0];
      this.services = data.services;
      this.attendants = data.attendants;
      this.duration = data.duration;
      this.charges = data.charges;
    });
  }

  formatToKenyaShillings(value) {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
    }).format(value);
  }

  static get is() {
    return "service-attendant-selector";
  }

  render() {
    return html`
      <div class="column content">
        <div class="card">
          <div class="card-content">
            <div class="block">
              <h5>Select Service</h5>
              <div class="select">
                <select id="serviceSelect">
                  ${this.services.map(
                    (service) => html` <option><h6>${service}</h6></option> `
                  )}
                </select>
              </div>
            </div>
            <div class="block">
              <h5>Select to be attendant by</h5>
              <div class="select">
                <select id="attendantSelect">
                  ${this.attendants.map(
                    (attendant) => html`
                      <option><h6>${attendant}</h6></option>
                    `
                  )}
                </select>
              </div>
            </div>
            <div class="block is-flex">
              <adaptive-ui-icon icon="image:timer"></adaptive-ui-icon>
              <h5>Duration : ${this.duration} minutes</h5>
            </div>
            <div class="block is-flex">
              <adaptive-ui-icon icon="credit-card"></adaptive-ui-icon>
              <h5>Charges : ${this.formatToKenyaShillings(this.charges)}</h5>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(ServiceAttendantSelector.is, ServiceAttendantSelector);
