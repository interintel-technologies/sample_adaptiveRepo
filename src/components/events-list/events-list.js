import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { EventsListStyles } from './events-list-css';
import globalStyles from '../../App.css?raw';

class EventsList extends LitElement {

    static get properties() {
        return {
            e: { type: Object },
            rows: { type: Array },
            cols: { type: Array },
            isLoaded: { type: Boolean }
        };
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            EventsListStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    constructor() {
        super();
        this.e = {};
        this.rows = [];
        this.cols = [];
        this.isLoaded = false;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('get-selected-date', e => this.updateParams('selected-date', e.detail.date));
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.isLoaded = true;
    }

    convertTimeTo12HourFormat(time) {
        const date = this.convertTimeToDate(time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours < 12 ? "AM" : "PM";

        return `${hours}:${minutes} ${period}`;
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col => col.label === columnLabel);
    }

    convertTimeToDate(time) {
        return new Date(time);
    }

    getDayOfWeek(time) {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = this.convertTimeToDate(time);

        return weekday[date.getDay()];
    }

    onSelectChangeHandler(action) {
        if (action !== "Actions" && this.getCheckedEvents().length > 0) {
            this.updateParams('action', {
                events: this.getCheckedEvents(),
                action: action
            });
        }
    }

    getCheckedEvents() {
        const checkedEvents = [];
        this.shadowRoot.querySelectorAll("input:checked").forEach(input => checkedEvents.push(input.value));

        return checkedEvents;
    }

    static get is() {
        return "events-list";
    }

    render() {
        if (!this.isLoaded) {
            return html`<p>Loading data...</p>`;
        }

        // Ensure that e.name and e.details.actions are strings and arrays respectively
        const name = typeof this.e.name === 'string' ? this.e.name : 'Unknown Name';
        const actions = Array.isArray(this.e.details?.actions) ? this.e.details.actions : [];

        return html`
            <div class="column content">
                <div class="card-header">
                    <h4 class="card-header-title">${name}</h4>
                    <span class="card-header-icon" aria-label="more options">
                        <div class="select">
                            <select @change=${e => this.onSelectChangeHandler(e.target.value)}>
                                <option>Actions</option>
                                ${
                                    actions.map(action => html`
                                        <option>${action}</option>
                                    `)
                                }
                            </select>
                        </div>
                    </span>
                </div>
                <div class="column">
                    ${
                        this.rows.filter((row, index) => index < 7).map(row => html`
                            <div class="columns" style="margin: 0px;">
                                <div class="column is-1">
                                    <input type="checkbox" value=${row[this.getIndexByColumnLabel("id")]} />
                                </div>
                                <div class="column is-6">
                                    <h5><strong>${this.getDayOfWeek(row[this.getIndexByColumnLabel("time")].from)}</strong> - ${new Date(row[this.getIndexByColumnLabel("time")].from).toDateString()}</h5>
                                </div>
                                <div class="column is-5">
                                    <h5><strong>${row[this.getIndexByColumnLabel("label")]}</strong></h5>
                                    <h6>${this.convertTimeTo12HourFormat(row[this.getIndexByColumnLabel("time")].from)} - ${this.convertTimeTo12HourFormat(row[this.getIndexByColumnLabel("time")].to)}</h6>
                                </div>
                            </div>
                        `)
                    }
                    <h4 class="see-more">See More Events</h4>
                </div>
            </div>
        `;
    }
}

customElements.define(EventsList.is, EventsList);
