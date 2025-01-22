import { html, css, unsafeCSS } from 'lit-element';
import { StaticDropdownSelectBase } from '../../base/elements/static-dropdown-select';
import { StaticDropDownSelectStyles } from './static-dropdown-select-css';

import globalStyles from '../../App.css?raw';

class StaticDropdownSelect extends StaticDropdownSelectBase {
  static get properties() {
    return {
      e: Object,
      items: Object
    };
  }

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      StaticDropDownSelectStyles,
      css`
        :host {
          display: block;
        }
        
        .is-danger {
          border-color: red;
        }

        .is-success {
          border-color: green;
        }

        #warning-text {
          color: red;
          font-size: 12px;
          display: none;
        }
      `
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      this.parseData();
      this.getSelected();
    }
  }

  getSelected() {
    const selectElement = this.shadowRoot.querySelector('select');
    if (selectElement) {
      this.dropdownValue = selectElement.value;
    }
  }

  optionSelected(event) {
    event.preventDefault();
    const selectedValue = event.target.value;
    this.dropdownValue = selectedValue;
    this.operateDp();
  }

  operateDp() {
    this.contentOpen = !this.contentOpen;
  }

  getValue() {
    return this.dropdownValue;
  }

  valid() {
    const select = this.shadowRoot.querySelector('select');
    const warningText = this.shadowRoot.querySelector('#warning-text');

    select.classList.remove('is-danger');
    select.classList.add('is-success');

    warningText.style.display = 'none';
  }

  invalid() {
    const select = this.shadowRoot.querySelector('select');
    const warningText = this.shadowRoot.querySelector('#warning-text');

    select.classList.remove('is-success');
    select.classList.add('is-danger');

    warningText.style.display = 'block';
  }

  static get is() {
    return 'static-dropdown-select';
  }

  render() {
    return html`
      <div class="content">
        <div class="main-container">
          <div class="dropdown-container" id="dropdownSelect">
            <p for="dropdown">${this.e.name}</p>
            <select id="dropdown" @change="${this.optionSelected}">
              <option value="" disabled selected>Select an option</option>
              ${this.data && this.data.length === 0
                ? html`<option disabled>No values present. We are working on it.</option>`
                : html`
                    ${this.data.map(
                      item => html`<option value="${item.id}" ?selected="${item.selected}">${item.name}</option>`
                    )}
                  `}
            </select>
            <p id="warning-text">${this.e.name} required</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(StaticDropdownSelect.is, StaticDropdownSelect);
