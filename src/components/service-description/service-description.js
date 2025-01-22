import { html, css,unsafeCSS } from "lit-element";
import { ServiceDescriptionBase } from "../../base/elements/service-description";
import { ServiceDescriptionStyles } from "./service-description-css";
import globalStyles from '../../App.css?raw'
class ServiceDescription extends ServiceDescriptionBase {
  static get styles() {
    return [unsafeCSS(globalStyles),ServiceDescriptionStyles];
  }

  static get properties() {
    return {
      serviceDescriptions: Array,
    };
  }

  constructor() {
    super();
    this.serviceDescriptions = [];
    this.createServiceDescriptions();
  }

  createServiceDescriptions() {
    for (let i = 0; i < 4; i++) {
      const serviceDescription = {
        id: i,
        description: undefined,
        price: undefined,
        hours: undefined,
        minutes: undefined,
      };
      this.serviceDescriptions = [
        ...this.serviceDescriptions,
        serviceDescription,
      ];
    }
  }

  onAddMoreFieldsClickHandler() {
    const serviceDescription = {
      id: this.serviceDescriptions.length,
      description: undefined,
      price: undefined,
      hours: undefined,
      minutes: undefined,
    };
    this.serviceDescriptions = [
      ...this.serviceDescriptions,
      serviceDescription,
    ];
  }

  onNextBtnClickHandler() {
    let errors = false;
    this.value = this.serviceDescriptions.filter(
      (serviceDescription) =>
        serviceDescription.description || serviceDescription.price
    );
    this.value.forEach((serviceDescription) => {
      const descriptionWarningText = this.shadowRoot.querySelector(
        `#descriptionWarningText${serviceDescription.id}`
      );
      const priceWarningText = this.shadowRoot.querySelector(
        `#priceWarningText${serviceDescription.id}`
      );
      const hoursWarningText = this.shadowRoot.querySelector(
        `#hoursWarningText${serviceDescription.id}`
      );
      const minutesWarningText = this.shadowRoot.querySelector(
        `#minutesWarningText${serviceDescription.id}`
      );

      if (!serviceDescription.description) {
        descriptionWarningText.style.display = "block";
        errors = true;
      }
      if (!serviceDescription.price) {
        priceWarningText.style.display = "block";
        errors = true;
      }
      if (
        !serviceDescription.hours ||
        serviceDescription.hours < 0 ||
        serviceDescription.hours > 23
      ) {
        hoursWarningText.style.display = "block";
        hoursWarningText.innerHTML = "Hours must be between 0 and 23";
        errors = true;
      } else {
        hoursWarningText.style.display = "none";
      }
      if (
        !serviceDescription.minutes ||
        serviceDescription.minutes < 0 ||
        serviceDescription.minutes > 59
      ) {
        minutesWarningText.style.display = "block";
        minutesWarningText.innerHTML = "Minutes must be between 0 and 59";
        errors = true;
      } else {
        minutesWarningText.style.display = "none";
      }
    });
    if (!errors) {
      this.pl.submitForm();
    }
  }

  focusOutLabel(e, id) {
    const name = e.target.name;
    const input = e.target.value;
    const label = this.shadowRoot.querySelector(`#${name}Label${id}`);

    if (input == "") {
      label.style.top = -30 + "px";
      label.style.left = 25 + "px";
      label.style.fontSize = 14 + "px";
      label.style.fontWeight = "normal";
    }
  }

  focusInLabel(e, id) {
    const name = e.target.name;
    const label = this.shadowRoot.querySelector(`#${name}Label${id}`);

    label.style.top = -64 + "px";
    label.style.left = 0;
    label.style.fontSize = 12 + "px";
    label.style.fontWeight = 700;
  }

  valid(validation) {
    const warningText = this.shadowRoot.querySelector("#warning-text");
    const inputWarnings = this.shadowRoot.querySelectorAll(".input-warning");

    this.value.forEach((item) => {
      const descriptionInput = this.shadowRoot.querySelector(
        "#descriptionInput" + item.id
      );
      const priceInput = this.shadowRoot.querySelector("#priceInput" + item.id);
      const hoursInput = this.shadowRoot.querySelector("#hoursInput" + item.id);
      const minutesInput = this.shadowRoot.querySelector(
        "#minutesInput" + item.id
      );
      const descriptionLabel = this.shadowRoot.querySelector(
        "#descriptionLabel" + item.id
      );
      const priceLabel = this.shadowRoot.querySelector("#priceLabel" + item.id);
      const hoursLabel = this.shadowRoot.querySelector("#hoursLabel" + item.id);
      const minutesLabel = this.shadowRoot.querySelector(
        "#minutesLabel" + item.id
      );

      descriptionInput.classList.add("cont-success");
      priceInput.classList.add("cont-success");
      hoursInput.classList.add("cont-success");
      minutesInput.classList.add("cont-success");
      descriptionLabel.classList.add("title-success");
      priceLabel.classList.add("title-success");
      hoursLabel.classList.add("title-success");
      minutesLabel.classList.add("title-success");
    });

    warningText.style.display = "none";
    inputWarnings.forEach(
      (inputWarning) => (inputWarning.style.display = "none")
    );

    setTimeout(() => {
      this.value.forEach((item) => {
        const descriptionInput = this.shadowRoot.querySelector(
          "#descriptionInput" + item.id
        );
        const priceInput = this.shadowRoot.querySelector(
          "#priceInput" + item.id
        );
        const hoursInput = this.shadowRoot.querySelector(
          "#hoursInput" + item.id
        );
        const minutesInput = this.shadowRoot.querySelector(
          "#minutesInput" + item.id
        );
        const descriptionLabel = this.shadowRoot.querySelector(
          "#descriptionLabel" + item.id
        );
        const priceLabel = this.shadowRoot.querySelector(
          "#priceLabel" + item.id
        );
        const hoursLabel = this.shadowRoot.querySelector(
          "#hoursLabel" + item.id
        );
        const minutesLabel = this.shadowRoot.querySelector(
          "#minutesLabel" + item.id
        );

        descriptionInput.classList.remove("cont-success");
        priceInput.classList.remove("cont-success");
        hoursInput.classList.remove("cont-success");
        minutesInput.classList.remove("cont-success");
        descriptionLabel.classList.remove("title-success");
        priceLabel.classList.remove("title-success");
        hoursLabel.classList.remove("title-success");
        minutesLabel.classList.remove("title-success");
      });
    }, 3000);
  }

  invalid(validation) {
    const title = this.shadowRoot.querySelector(".label");
    const warningText = this.shadowRoot.querySelector("#warning-text");
    const cont = this.shadowRoot.querySelector(".cont");

    title.classList.remove("title-success");
    title.classList.add("title-danger");
    cont.classList.add("cont-danger");
    warningText.style.display = "block";
  }

  static get is() {
    return "service-description";
  }

  render() {
    return html`
      <div class="column content">
        <div class="column is-multiline">
          <div class="columns dr">
            <div class="column is-offset-6 is-4" style="padding-top:0;">
              <h5 style="text-align: center;">Duration</h5>
            </div>
          </div>
          ${this.serviceDescriptions.map(
            (serviceDescription) => html`
              <div class="columns">
                <div class="column is-6">
                  <div class="control input-mixin input-effect">
                    <label
                      id="descriptionLabel${serviceDescription.id}"
                      class="label"
                      >Service Description</label
                    >
                    <input
                      id="descriptionInput${serviceDescription.id}"
                      class="label-animation input"
                      type="text"
                      name="description"
                      @input=${(e) =>
                        (serviceDescription.description = e.target.value)}
                      @focusin=${(e) =>
                        this.focusInLabel(e, serviceDescription.id)}
                      @focusout="${(e) =>
                        this.focusOutLabel(e, serviceDescription.id)}}"
                    />
                    <p
                      id="descriptionWarningText${serviceDescription.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
                <div class="column is-2">
                  <div class="control input-mixin input-effect">
                    <label id="hoursLabel${serviceDescription.id}" class="label"
                      >Hours</label
                    >
                    <input
                      id="hoursInput${serviceDescription.id}"
                      class="label-animation input"
                      type="number"
                      name="hours"
                      @input=${(e) =>
                        (serviceDescription.hours = e.target.value)}
                      @focusin=${(e) =>
                        this.focusInLabel(e, serviceDescription.id)}
                      @focusout="${(e) =>
                        this.focusOutLabel(e, serviceDescription.id)}}"
                      min="0"
                    />
                    <p
                      id="hoursWarningText${serviceDescription.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
                <div class="column is-2">
                  <div class="control input-mixin input-effect">
                    <label
                      id="minutesLabel${serviceDescription.id}"
                      class="label"
                      >Minutes</label
                    >
                    <input
                      id="minutesInput${serviceDescription.id}"
                      class="label-animation input"
                      type="number"
                      name="minutes"
                      @input=${(e) =>
                        (serviceDescription.minutes = e.target.value)}
                      @focusin=${(e) =>
                        this.focusInLabel(e, serviceDescription.id)}
                      @focusout="${(e) =>
                        this.focusOutLabel(e, serviceDescription.id)}}"
                      min="0"
                      max="59"
                    />
                    <p
                      id="minutesWarningText${serviceDescription.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
                <div class="column is-2">
                  <div class="control input-mixin input-effect">
                    <label id="priceLabel${serviceDescription.id}" class="label"
                      >Price</label
                    >
                    <input
                      id="priceInput${serviceDescription.id}"
                      class="label-animation input"
                      type="number"
                      name="price"
                      @input=${(e) =>
                        (serviceDescription.price = e.target.value)}
                      @focusin=${(e) =>
                        this.focusInLabel(e, serviceDescription.id)}
                      @focusout="${(e) =>
                        this.focusOutLabel(e, serviceDescription.id)}}"
                    />
                    <p
                      id="priceWarningText${serviceDescription.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
              </div>
            `
          )}
          <h4 class="more" @click=${() => this.onAddMoreFieldsClickHandler()}>
            Add more fields
          </h4>
        </div>
        <div class="level">
          <h4 class="unavailable">Back</h4>
          <button class="button" @click=${() => this.onNextBtnClickHandler()}>
            Next
          </button>
        </div>
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </div>
    `;
  }
}

customElements.define(ServiceDescription.is, ServiceDescription);
