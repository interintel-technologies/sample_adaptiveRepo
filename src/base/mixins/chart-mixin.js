
import { html } from 'lit-element';
import "../../components/calendar-element/calendar-element.js";
import "../../components/select-element/select-element.js";

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const ChartMixin = BaseClass => class extends BaseClass {

	static get properties() {
		return {
			dateRange: Object,
			selectedDateType: String,
			legend: Array,
			e: { type: Object },
            rows: { type: Array },
            cols: { type: Array },
            isLoaded: { type: Boolean }
		};
	}

	constructor() {
		super();
		this.dateRange = {};
		this.legend = [],
		this.e = {};
        this.rows = [];
        this.cols = [];
        this.isLoaded = false;
	}

	firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.isLoaded = true;
    }

	animateOnLoad() {
        this.path.attr('stroke-dasharray', function () {
          const length = this.getTotalLength();
          return `${length} ${length}`;
        })
        .attr('stroke-dashoffset', function () {
        return this.getTotalLength();
        })
        .transition()
        .duration(1000)
        .attr('stroke-dashoffset', 0);
        
        this.dots.attr('r', 0)
            .transition()
            .delay(1000)
            .duration(500)
            .attr('r', 2.5);

		// Use switch
	}

	toggleDropdown() {
		const dropdownContent = this.shadowRoot.querySelector('.dropdown-content');
		dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
	}
	
	handleDateSelected(event) {
		const selectedDate = event.detail;
		const dropdownHeader = this.shadowRoot.querySelector('.dropdown-header span');
		dropdownHeader.textContent = selectedDate;
		const dropdownContent = this.shadowRoot.querySelector('.dropdown-content');
		dropdownContent.style.display = 'none';
	}

	createDateFilter() {
		const dateColumn = this.cols.filter(col => col["date_filters"])[0];
		
		const dateElement2 = this.shadowRoot.querySelector("date-element-2");
		const dateContainer = this.shadowRoot.querySelector(".date-container");
		
		const filterDates = () => {
			const dateColumnFilters = dateColumn["date_filters"];
			const fromDate = new Date(dateColumnFilters[0]);
            const toDate = new Date(dateColumnFilters[1]);
			const dates = [];
			let currentDate = fromDate;
			while(currentDate <= toDate) {
				dates.push(currentDate);
				currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
			}

			return dates;
		};

		const onDateClickHandler = type => {
			dateContainer.classList.remove("is-hidden");

			if(this.dateRange[type]) {
				dateElement2.setAttribute("selectedDate", this.dateRange[type]);
			}
			this.selectedDateType = type;
		};

		const onDateSelectedHandler = date => {
			this.dateRange = {...this.dateRange, [this.selectedDateType]: date};
		};
		
		const onCloseDateContainerIconClickHandler = () => {
			const date = this.shadowRoot.querySelector("#" + this.selectedDateType + "Date");
			dateContainer.classList.add("is-hidden");

			if(this.dateRange[this.selectedDateType]) {
				date.innerHTML = new Date(this.dateRange[this.selectedDateType]).toLocaleDateString("en-KE");
			}

			else {
				date.innerHTML = this.toTitleCase(this.selectedDateType);
			}

			if(this.dateRange.from && this.dateRange.to) {
				const key = dateColumn.value;
				const fromDate = this.formatDate(this.dateRange.from);
				const toDate = this.formatDate(this.dateRange.to);
				const range = {[key]: `${fromDate}, ${toDate}`};
				
				this.mergeParams(range);
				
				resetDates();
			}
		};
		
		const resetDates = () => {
			this.dateRange = {};
			this.shadowRoot.querySelector("#toDate").innerHTML = "To";
			this.shadowRoot.querySelector("#fromDate").innerHTML = "From";
		};

		return html`
			${
				dateColumn ? html`
				<div class="custom-dropdown">
					<div class="dropdown-header" @click=${this.toggleDropdown}>
						<span>Select a date</span>
						<i class="fa fa-caret-down"></i>
					</div>
					<div class="dropdown-content">
						<lit-calendar @date-selected=${this.handleDateSelected}></lit-calendar>
					</div>
				</div>
				` : ""
			}
		`;
	}

	createSelectFilters() {
		const columnsWithFilters = this.cols.filter(col => col["list_filters"]);
		const onSelectFilterChangeHandler = (key, value) => {
			this.updateParams(key, value);
		};

		return columnsWithFilters.length > 0 ? html`
			<div class="select-filters is-flex">
				${
					columnsWithFilters.map(column => html`
						<select-element .name=${""} .options=${column["list_filters"].map(filter => ({value: filter, label: filter}))} 
							@on-change=${e => onSelectFilterChangeHandler(column.value, e.detail.target.value)}></select-element>
					`)
				}
			</div>
		` : "";
	}

	createLegend() {
		return html`
			<div class="legend">
				${
					this.legend.map(item => html`
						<div class="legend-item">
							<div class="legend-color" style="color: ${item.color};"></div>
							<h6>${item.label}</h6>
						</div>
					`)
				}
			</div>
		`;
	}

	formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

	toTitleCase(string) {
        if (!string) return '';
        string = string.toString();
        string = string.toLowerCase().split(' ');
        let newString = [];
        for (let i = 0; i < string.length; i++) {
            newString[i] = string[i].substr(0, 1).toUpperCase() + string[i].substr(1);
        }
        return newString.join(' ');
    }

	render() {

		if (!this.isLoaded) {
            return html`<p>Loading data...</p>`;
        }
		
		return html`
			<script src="https://d3js.org/d3.v6.min.js"></script>
			<div class="chart-container content card">
				<div class="level is-align-items-flex-start">
					<div class="level-left">
						<div class="level-item">
							<h4>${this.e.name}</h4>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<div class="level is-mobile filters is-align-items-flex-start">
								<div class="level-left">
									<div class="level-item">
										${this.createDateFilter()}
									</div>
								</div>
								<div class="level-right">
									<div class="level-item">
										${this.createSelectFilters()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="m-2">
				<div id="chart"></div>
				<div class="legend legend-container" id="lg">
					${
						this.legend.map(item => html`
							<div class="legend-item mr-1">
								<div class="legend-color" style="background-color: ${item.color};"></div>
								<h6 style="margin-bottom: 0;">${item.label}</h6>
							</div>
						`)
					}
				</div>
			</div>
		`;
	}
};
