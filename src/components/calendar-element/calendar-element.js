
import { html, css,unsafeCSS } from 'lit-element';
import { CalendarElementStyles } from './calendar-element-css';
import { CalendarElementBase } from '../../base/elements/calendar-element';
import globalStyles from '../../App.css?raw';


class CalendarElement extends CalendarElementBase {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            CalendarElementStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            name: String,
            months: Array,
            selectedDate: Number,
            currentMonth: Number,
            currentYear: Number,
            startDate: Number,
            minDate: Number,
            maxDate: Number,
            availableDays: Array
        };
    }

    constructor() {
        super();

        this.months = [];
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.availableDays = [];
    }
    
    firstUpdated() {
        this.initMonths()
        //get external configs where this element is used

        if(this.e) {
            this.name = this.e.name;
            this.availableDays = this.e.details.availableDays ? this.e.details.availableDays : [];
            this.selectedDate = this.e.details.selectedDate;
            this.startDate = this.e.details.startDate;
        }

        // if(typeof this.e === "string") {
        //     this.e = JSON.parse(this.e);
        // }
        // if(typeof this.availableDays === "string") {
        //     this.availableDays = JSON.parse(this.availableDays);
        // }
        
        if(this.startDate) {
            this.currentMonth = new Date(this.startDate).getMonth();
            this.currentYear = new Date(this.startDate).getFullYear();
        }
        if(this.selectedDate) {
            this.selectedDate = new Date(this.selectedDate);
        }
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        changedProperties.forEach((oldValue, propName) => {
            if(propName === "currentYear") {
                this.initMonths();
            }
        });
    }

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener('set-selected-date', e => {
            this.selectedDate = e.detail.date ? new Date(e.detail.date) : undefined;
        });
    }

    onMonthSelectChangeHandler(e) {
        this.currentMonth = this.months.findIndex(month => month.label === e.target.value);
    }

    onYearSelectChangeHandler(e) {
        const value = parseInt(e.target.value);
        this.currentYear = value;
    }

    onNavIconClickHandler(e) {
        const moveValue = parseInt(e.target.getAttribute("move"));

        if((moveValue + this.currentMonth) > 11) {
            this.currentMonth = 0;    
            this.currentYear = this.currentYear + 1;
        }
        else if((moveValue + this.currentMonth) < 0) {
            this.currentMonth = 11;
            this.currentYear = this.currentYear - 1;
        }
        else {
            this.currentMonth = moveValue + this.currentMonth;
        }
    }

    onDayClickHandler(e, day) {
        if(this.isDayAvailable(day)) {
            this.shadowRoot.querySelectorAll(".day").forEach(day => {
                day.classList.remove("selected");
            });
            
            if(new Date(this.selectedDate).toDateString() === new Date(this.currentYear, this.currentMonth, day).toDateString()) {
                this.selectedDate = undefined;
            }
            else {
                this.selectedDate = new Date(this.currentYear, this.currentMonth, day).getTime();
                e.target.classList.add("selected");
            }

            this.value = this.selectedDate;

            this.dispatchEvent(new CustomEvent('on-date-selected', {
                bubbles: true,
                composed: true,
                detail: {
                    value: this.selectedDate
                }
            }));
        }
    }

    onTodayClickHandler() {
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
    }

    onSelectedDateClickHandler() {
        this.currentMonth = new Date(this.selectedDate).getMonth();
        this.currentYear = new Date(this.selectedDate).getFullYear();

        const monthSelect  = this.shadowRoot.querySelector("#monthSelect");
        const yearSelect  = this.shadowRoot.querySelector("#yearSelect");

        monthSelect.value = this.months[this.currentMonth].label;
        yearSelect.value = this.currentYear;
    }

    initMonths() {
        const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.months = [...monthLabels.map((monthLabel, index) => {
            const daysOfMonth = new Date(this.currentYear, (index + 1), 0).getDate();
            const firstDay = new Date(this.currentYear, index, 0).getDay();
            const days = [];
            
            for(let i = 1; i <= daysOfMonth; i++) {
                days.push(i);
            }
            
            return {
                label: monthLabel,
                days: days,
                firstDay: firstDay,
            };
        })];
    }

    isDayToday(day) {
        const today = new Date().toDateString();
        const currentDay = new Date(this.currentYear, this.currentMonth, day).toDateString();

        return today === currentDay;
    }

    isDaySelected(day) {
        const currentDay = new Date(this.currentYear, this.currentMonth, day).toDateString();

        return currentDay === new Date(this.selectedDate).toDateString();
    }

    isDayAvailable(day) {
        const currentDay = new Date(this.currentYear, this.currentMonth, day).toDateString();
        let isAvailable = false;
        if(this.availableDays.length === 0) {
            isAvailable = true;
        }
        else {
            isAvailable = this.availableDays.map(day => new Date(day).toDateString()).includes(currentDay);
        }

        return isAvailable;
    }

    getDayString(day) {
        return new Date(this.currentYear, this.currentMonth, day).toDateString();
    }

    valid(validation) {
        const cardHeader = this.shadowRoot.querySelector(".card-header");
        this.shadowRoot.querySelector('#warning-text').style.display='none';

        cardHeader.classList.remove("invalid");
        cardHeader.classList.add("valid");

        setTimeout(() => {
            cardHeader.classList.remove("valid");
        }, 3000);
    }

    invalid(validation) {
        const cardHeader = this.shadowRoot.querySelector(".card-header");
        this.shadowRoot.querySelector('#warning-text').style.display='block';

        cardHeader.classList.add("invalid");
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label.toLowerCase() === columnLabel.toLowerCase()); 
    }

    static get is() {
        return 'calendar-element';
    }

    render() {
        const years = [];
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        for(let i = 1900; i <= 2100; i++) {
            years.push(i);
        }

        return html`
            <div class="content">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-title" @click=${() => this.onSelectedDateClickHandler()} title="Go to Selected Date">
                            <h5>${this.currentYear}</h5>
                            <h4 class="selected-date-btn">${this.selectedDate ? new Date(this.selectedDate).toDateString() : ""}</h4>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="date-navigation">
                            <div class="is-flex">
                                <div class="select">
                                    <select id="monthSelect" @change=${e => this.onMonthSelectChangeHandler(e)}>
                                        ${
                                            months.map((month, index) => html`
                                                <option ?selected=${index === this.currentMonth ? true : false}>${month}</option>
                                            `)
                                        }
                                    </select>
                                </div>
                                <div class="select">
                                    <select id="yearSelect" @change=${e => this.onYearSelectChangeHandler(e)}>
                        
                                        ${
                                            years.map((year, index) => html`
                                                <option ?selected=${year === this.currentYear ? true : false}>${year}</option>
                                            `)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div class="is-flex">
                                <div class="prev">
                                    <adaptive-ui-icon class="nav" title="Previous" @click=${e => this.onNavIconClickHandler(e)} move="-1" icon="chevron-left"></adaptive-ui-icon>
                                </div>
                                <div class="next">
                                    <adaptive-ui-icon class="nav" title="Next" @click=${e => this.onNavIconClickHandler(e)} move="1" icon="chevron-right"></adaptive-ui-icon>
                                </div>
                            </div>
                        </div>
                        <div class="month-grid">
                            ${
                                days.map(day => html`
                                    <div class="month-grid-cell">
                                        <h5>${day}</h5>
                                    </div>
                                `)
                            }
                            ${
                                this.months.length > 0 ? this.months[this.currentMonth].days.map((day, index) => html`
                                    <div class="month-grid-cell" style="grid-column-start: ${index === 0 ? this.months[this.currentMonth].firstDay + 1 : "auto"};">
                                        <div class="day ${!this.isDayAvailable(day) ? "unavailable" : ""} ${this.isDayToday(day) ? "today" : ""} ${this.isDaySelected(day) ? "selected-date" : ""}"
                                            title="${!this.isDayAvailable(day) ? "Day not available" : this.getDayString(day)}" @click=${e => this.onDayClickHandler(e, day)}
                                        >
                                            <h6 class="${this.isDayAvailable(day) ? "has-text-weight-bold" : ""}">${day}</h6>
                                        </div>
                                    </div>
                                `) : ""
                            }
                        </div>
                    </div>
                    <h6 class="today-text" @click=${() => this.onTodayClickHandler()} title="Go to Today">
                        Today is ${new Date().toDateString()}
                    </h6>
                </div>
                <p id="warning-text" style="color:#ff3860;">${this.name} required</p>
            </div>
        `;
    }
}

customElements.define(CalendarElement.is, CalendarElement);
