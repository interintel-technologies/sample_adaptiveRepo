import { html, css, unsafeCSS } from 'lit-element';
import { TimeSlotPickerStyles } from './time-slot-picker-css';
import { TimeSlotPickerBase } from '../../base/elements/time-slot-picker';
import globalStyles from '../../App.css?raw';

class TimeSlotPicker extends TimeSlotPickerBase {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            TimeSlotPickerStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            timeSlots: Array,
            columns: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        };
    }

    constructor() {
        super();
        this.timeSlots = [];
        this.columns = [];
        this.rows = [];
        this.e = null; // Default structure

    }

    firstUpdated() {
        this.loader.then(() => {
            this.timeSlots = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        });
    }

    updated(changedProperties) {
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            this.timeSlots = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];

        }
    }

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener('get-selected-date', e => this.updateParams('selected-date', e.detail.date));
    }
    
    onCheckboxChangeHandler(index) {
        const checkbox = this.shadowRoot.querySelector(`#checkbox${index}`);
        const span = this.shadowRoot.querySelector(`#span${index}`);
        const initialCheck = checkbox.checked;

        this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(checkbox1 => {
            checkbox1.checked = false;
            this.value = undefined;
        });
        this.shadowRoot.querySelectorAll("span").forEach(span => {
            span.classList.remove("selected");
        });

        if(initialCheck) {
            checkbox.checked = true;
            span.classList.add("selected");
            this.value = this.timeSlots[index];
        }
    }

    onSpanClickHandler(index) {
        const checkbox = this.shadowRoot.querySelector(`#checkbox${index}`);
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true;
        this.onCheckboxChangeHandler(index);
    }

    convertTime(time) {
        const date = new Date(time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours < 12 ? "AM" : "PM";

        return  (hours > 12 ? hours -12 : hours)+" : "+(minutes < 10 ? "0"+minutes : minutes)+" "+period;
    }

    valid(validation) {
        const title = this.shadowRoot.querySelector("h4");
        const span = this.shadowRoot.querySelector(`.selected`);
        this.shadowRoot.querySelector('#warning-text').style.display='none';

        title.classList.remove("invalid");
        title.classList.add("valid");
        span.classList.add("valid-span");

        setTimeout(() => {
            title.classList.remove("valid");
            span.classList.remove("valid-span");
        }, 3000);
    }

    invalid(validation) {
        const title = this.shadowRoot.querySelector("h4");
        this.shadowRoot.querySelector('#warning-text').style.display='block';

        title.classList.add("invalid");
    }

    static get is() {
        return 'time-slot-picker';
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-content">
                            <h4>${this.e.name}</h4>
                            <ul>
                                ${
                                    this.timeSlots.map((timeSlot, index) => html`
                                        <li class="is-flex">
                                            <input id="checkbox${index}" type="checkbox" value="${timeSlot}" @change=${() => this.onCheckboxChangeHandler(index)}/>
                                            <span id="span${index}" @click=${() => this.onSpanClickHandler(index)}>
                                                <h5>${this.convertTime(timeSlot.from)} - ${this.convertTime(timeSlot.to)}</h5>
                                            </span>
                                        </li>
                                    `)
                                }
                            </ul>
                        </div>
                    </div>
                    <p id="warning-text">Required</p>
                </div>
            </div>
        `;
    }

}

customElements.define(TimeSlotPicker.is, TimeSlotPicker);