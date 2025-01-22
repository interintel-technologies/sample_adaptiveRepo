import { html, css, unsafeCSS } from 'lit-element';
import './map-marker';
import { LocationPickerBase } from '../../base/elements/location-picker';
import { LocationPickerStyles } from "./location-picker-css";
import globalStyles from '../../App.css?raw';

class LocationPicker extends LocationPickerBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      LocationPickerStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  constructor() {
    super();
    this.e = null; // Initialize 'e' as null
  }

  static get properties() {
    return {
      e: { type: Object },
      location: { type: Object },
    };
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      console.log("Updated properties:", this.e);
    }
  }

  render() {
    if (!this.e) {
      return html`<p>Loading data...</p>`;
    }

    return html`
      <div class="column is-5 is-offset-4">
        <div class="field">
          <h4>${this.e.name}</h4>
          <div id="picked"></div>    
          <map-marker key="${this.e.kind}" @center-change=${this._centerChanged}></map-marker>
        </div>
      </div>
    `;
  }

  _centerChanged(e) {
    const location = e.detail['location'];
    this.location = location;

    const onIdlePositionView = this.shadowRoot.querySelector('#picked');
    if (onIdlePositionView) {
      onIdlePositionView.innerHTML = 'Chosen location: lat ' + location.lat + ', lng ' + location.lng;
    }
  }

  getValue() {
    return this.location ? `${this.location.lng},${this.location.lat}` : '';
  }

  valid(validation) {
    // Implement validation logic
  }

  invalid(validation) {
    // Implement validation logic
  }
}

customElements.define('location-picker', LocationPicker);
