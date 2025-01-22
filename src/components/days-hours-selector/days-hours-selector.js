
import {html, css, unsafeCSS} from 'lit-element';
import "../time-element/time-element"
import { DaysHoursSelectorBase } from '../../base/elements/day-hours-selector';
import { DaysHoursSelectorStyles } from './days-hours-selector-css';
import globalStyles from '../../App.css?raw';

class DaysHoursSelector extends DaysHoursSelectorBase {

	static get styles() {
		return [
            unsafeCSS(globalStyles),
			DaysHoursSelectorStyles,
			css`
				:host {
				    display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			days:Object,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },

		};
	}

	constructor() {
		super();
		this.days = {};
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
	}


    updated(changedProperties) {
        if (changedProperties.has('e')) {
            
            
                this.autoPlayInterval = this.e.details.autoPlayInterval || this.autoPlayInterval;
                this.days = this.e.details.defaultValue ? this.e.details.defaultValue : this.createDays(); 

                console.log("this days updator e is ",this.days);
            

        }
    }
    
    createDays() {
        const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        const day = {
            ["24Hours"]:false,
            closed:false,
            hours:{
                from:"7:30 am",
                to:"8:00 pm"
            },
            break: null
        };
        const createdDays = {};
        daysOfWeek.forEach(dayOfWeek => Object.assign(createdDays,{[dayOfWeek]:{...day}}));
        return createdDays;
    }

	onNextBtnClickHandler() {
        this.value = this.days;
        this.dispatchEvent(new CustomEvent('submit-form', { detail: { action: this.action } }));
	}

	valid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");

        warningText.style.display = 'none';
    }

    invalid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");
		
        warningText.style.display = 'block';
    }

    createDayOfWeekHourSelector(day,dayOfWeek) {
        let updatedDay = {}; 
        const onTimeChange = (attr,value) => {
            updatedDay = {...day,hours:{...day.hours,[attr]: value}};
            this.days = {...this.days,[dayOfWeek]:updatedDay};
        };

        const onCheckBoxChange = (attr,value) => {
            updatedDay = {...day, [attr]:value};
            this.days = {...this.days, [dayOfWeek]: updatedDay};
        };

        const onBreakChange= (attr,value) => {
            updatedDay = {...day,break:{...day.break,[attr]: value}};
            this.days = {...this.days, [dayOfWeek]: updatedDay};
        }

        const onCheckBoxClickHandler = attr => {
            const hoursCheckBox= this.qs("#"+dayOfWeek+"24Hours");
            const closedCheckBox = this.qs("#"+dayOfWeek+"Closed");
            const breakCheckBox = this.qs("#"+dayOfWeek+"Break");
            if(attr === "24Hours") {
                if(hoursCheckBox.checked){
                    closedCheckBox.checked = false;
                    onCheckBoxChange("closed",false);
                }
                onCheckBoxChange(attr,true);
            }
            else if(attr === "closed") {
                if(closedCheckBox.checked){
                    hoursCheckBox.checked = false;
                    breakCheckBox.checked = false;
                    onCheckBoxChange("24Hours",false);
                    onCheckBoxChange("break",null);
                    breakHoursVisibility();
                }
                onCheckBoxChange(attr,true);
            }
            else if(attr === "break") {
                breakHoursVisibility();
            }
        };

        const breakHoursVisibility = () => {
            const breakHours = this.shadowRoot.querySelector(`#${dayOfWeek}BreakHours`);
            
            breakHours.style.display = breakHours.style.display === "block" ? "none" : "block";
        };

        return html`
            <div class="column day content">
                <div class="columns" style="margin: 0;">
                    <div class="column is-3 is-flex" style="justify-content: space-around;">
                        <h4>${dayOfWeek}: </h4>
                        <div class="is-flex" style="align-items: center;">
                            <input 
                                id=${dayOfWeek+"24Hours"} 
                                type="checkbox"
                                ?checked=${day["24Hours"]}
                                @click=${()=>onCheckBoxClickHandler("24Hours")}
                            />
                            <h4>24 hours</h4>
                        </div>
                    </div>
                    <div class="column is-3 is-flex">
                        <h4>From: </h4>
                        <div style="padding: 0 10px; width: 100%;">
                            <time-element  @getTime="${evt => onTimeChange("from",evt.detail.time)}" .propName=${""} .propDefaultValue=${day.hours.from}></time-element>
                        </div>
                    </div>
                    <div class="column is-3 is-flex">
                        <h4>To: </h4>
                        <div style="padding: 0 10px; width: 100%;">
                            <time-element  @getTime="${evt => onTimeChange("to",evt.detail.time)}" .propName=${""} .propDefaultValue=${day.hours.to}></time-element>
                        </div>
                    </div>
                    <div class="column is-3 is-flex" style="justify-content: space-around;">
                        <div class="is-flex" style="align-items: center;">
                            <input 
                                id=${dayOfWeek+"Closed"} 
                                type="checkbox" 
                                ?checked=${day["closed"]}
                                @click=${()=>onCheckBoxClickHandler("closed")}
                            />
                            <h4>Closed</h4>
                        </div>
                        <div class="is-flex" style="align-items: center;">
                            <input 
                                id=${dayOfWeek+"Break"} 
                                type="checkbox"
                                @click=${()=>onCheckBoxClickHandler("break")})} 
                            />
                            <h4>Add Break Hours</h4>
                        </div>
                    </div>
                </div>
                <div id="${dayOfWeek}BreakHours" class="column break-hours">
                    <div class="columns" style="margin: 0;">
                        <div class="column is-1 is-flex is-offset-2">
                            <h4>Break</h4>
                        </div>
                        <div class="column is-3 is-flex">
                            <h4>From:</h4>
                            <time-element 
                                @getTime="${evt => onBreakChange("from", evt.detail.time)}"
                                .propName=${""}
                                .propDefaultValue=${day.break ? day.break.from : "7:30 am"}
                            >
                            </time-element>
                        </div>
                        <div class="column is-3 is-flex">
                            <h4>To:</h4>
                            <time-element 
                                @getTime="${evt => onBreakChange("to", evt.detail.time)}"
                                .propName=${""}
                                .propDefaultValue=${day.break ? day.break.to : "8:30 am" }
                            >
                            </time-element>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

	static get is() {
		return 'days-hours-selector';
	}

	render() {
		return html`
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
			<div class="column content">
				<div class="column">
                    <h4>${this.e && this.e.details.description}</h4>
                    ${Object.keys(this.days).map(dayOfWeek => this.createDayOfWeekHourSelector(this.days[dayOfWeek], dayOfWeek))}
				</div>
				<div class="level">
					<h5 class="unavailable">Back</h5>
					<button class="button" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
				</div>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
			</div>
		`;
    }
}

customElements.define(DaysHoursSelector.is, DaysHoursSelector);