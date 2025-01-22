import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { MonthPickerStyles } from './month-ranger-pickercss.js';
import globalStyles from '../../App.css?raw';

class MonthRangePicker extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      MonthPickerStyles,
      css`
        :host {
          display: block;
          margin-bottom: 16px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      fromMonth: { type: String },
      toMonth: { type: String },
      months: { type: Array },
      monthNames: { type: Array },
      filteredMonths: { type: Array }, // Filtered months for the toMonth selection
    };
  }

  constructor() {
    super();
    this.fromMonth = '';
    this.toMonth = '';
    this.months = this.generateMonths('2024'); // Generate months for the year 2024
    this.monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    this.filteredMonths = [];
  }

  generateMonths(year) {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      const month = i < 10 ? `0${i}` : i;
      months.push(`${year}-${month}`);
    }
    return months;
  }

  handleMonthChange() {
    this.dispatchEvent(new CustomEvent('month-range-changed', {
      detail: { fromMonth: this.fromMonth, toMonth: this.toMonth },
    }));
    this.updateFilteredMonths(); // Update the filtered months after change
  }

  updateFilteredMonths() {
    const fromMonthIndex = this.months.indexOf(this.fromMonth);
    const maxAllowedIndex = fromMonthIndex + 2;

    // Filter months to be only within 3 months range from the selected `fromMonth`
    this.filteredMonths = this.months.slice(fromMonthIndex, Math.min(maxAllowedIndex + 1, this.months.length));

    // Ensure the selected `toMonth` remains valid
    if (this.filteredMonths.indexOf(this.toMonth) === -1) {
      this.toMonth = this.filteredMonths[this.filteredMonths.length - 1];
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('data') && this.data.length > 0) {
      const year = this.data[0].date.split('-')[0];
      this.months = this.generateMonths(year);
      this.fromMonth = this.months[0];
      this.toMonth = this.months[Math.min(2, this.months.length - 1)];
      this.updateFilteredMonths();
    }

    if (changedProperties.has('fromMonth') || changedProperties.has('toMonth')) {
      this.handleMonthChange();
    }
  }

  render() {
    return html`
      <div class="content">
        <div class="month-container">
          <label>
            <div class="select">
              <select .value=${this.fromMonth} @change=${(e) => { this.fromMonth = e.target.value; this.handleMonthChange(); }}>
                ${this.months.map((month, index) => html`<option value=${month}>${this.monthNames[index]}</option>`)}
              </select>
            </div>
          </label>
          <label>
            -
          </label>
          <label>
            <div class="select-container">
              <div class="select is-rounded is-normal">
                <select .value=${this.toMonth} @change=${(e) => { this.toMonth = e.target.value; this.handleMonthChange(); }}>
                  ${this.filteredMonths.map((month, index) => {
                    const originalIndex = this.months.indexOf(month);
                    return html`<option value=${month}>${this.monthNames[originalIndex]}</option>`;
                  })}
                </select>
              </div>
            </div>
          </label>
          <label>
            <adaptive-ui-icon icon="MdCalendarToday"></adaptive-ui-icon>
          </label>
        </div>
      </div>
    `;
  }
}

customElements.define('month-range-picker', MonthRangePicker);
