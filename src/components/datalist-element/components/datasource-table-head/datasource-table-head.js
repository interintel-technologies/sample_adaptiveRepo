
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import { DatasourceTableHeadStyles } from "./datasource-table-head-css";
import { DatalistCalenderStyles } from "./datalist-calender-styles-css";
import { DatalistHeaderStyles } from '../../datalist-header-css';
import globalStyles from '../../../../App.css?raw';



/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class DataSourceTableHead extends LitElement {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DatalistHeaderStyles,
            DatasourceTableHeadStyles,
            DatalistCalenderStyles,
            css`
                :host {
                        display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            currentMonth: Number,
            currentYear: Number,
            today: String,
            todaysDate:String,
            months:Array,
            todayDateNumber: Number,
            dateSelected: String,
            wasDateSelected: Boolean,
            monthYearCalenderVisibile:Boolean,
            monthCalenderValue: String,
            fromDateSelected:String,
            toDateSelected:String,
            fromMonthSelected:String,
            toMonthSelected:String,
            toYearSelected:String,
            fromYearSelected:String,
            language: String,
            column: {
                type: Object,
                notify: true,
                value: () => ({}),
            },
            positionSortIcon: String,
            sortable: {
                type: Boolean,
                value: () => false,
            },
            sorted: {
                type: Boolean,
                value: () => false,
            },
            sortDirection: {
                type: String,
                value: () => 'asc',
            },
            previousValue: {
                type: String,
                value: () => '',
            },
            currentValue: {
                type: String,
                value: () => '',
            },
            timeoutFilter: Number,
            focused: {
                type: Boolean,
                value: false,
            },
            _dateFrom: Number,
            _dateTo: Number,
            dateFormat: String,
            dateFromSelected:Boolean,
            dateToSelected:Boolean,
            sortAscending:{type:Boolean},
            bgColor: { type: String },

        };
    }

    constructor() {
        super();
        this.today = new Date();
        this.currentMonth = this.today.getMonth();
        this.currentYear = this.today.getFullYear();
        this.todayDateNumber = this.today.getDate();
        this.todaysDate =`${this.currentMonth+1}`+'/'+this.todayDateNumber+'/'+this.currentYear;
        this.wasDateSelected = false;
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.monthYearCalenderVisibile = false;
        this.dateFromSelected = false;
        this.dateToSelected = false;
        this.sortedColumn = null; 
        const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--adaptive-ui-icon-stroke-color');
     

        

    }

    static get observers() {
        return ['_dateChanged(_dateTo)'];
    }
    
    adjustCalenderBlockSize() {
        const calenderBlock = this.shadowRoot.querySelector(".calender-block");
        if(calenderBlock.getBoundingClientRect().width < 230) {
            calenderBlock.setAttribute("style","width: 50%; right: -200px;");
        }
    }

    toggleCalenders() {
        const calendar = this.shadowRoot.querySelector(".calender-block");
        const arrowDown = this.shadowRoot.querySelector(".from-arrow-down");
        const arrowRight = this.shadowRoot.querySelector(".from-arrow-right");

        calendar.classList.toggle('is-block');
        this.adjustCalenderBlockSize();

        if(calendar.classList.contains('is-block')){
            arrowDown.style.display = 'none';
            arrowRight.style.display = 'block';
        } else {
            if(this.dateFromSelected == true){
                arrowDown.style.display = 'none';
                arrowRight.style.display = 'block';
            } else {
                arrowDown.style.display = 'block';
                arrowRight.style.display = 'none';
            }
        }
        this.column.choices[0]

        let month = this.currentMonth;
        let year = this.currentYear;

        if(this.column.choices.length > 0)  {
            month = new Date(this.column.choices[0]).getMonth();
            year = new Date(this.column.choices[0]).getFullYear();
        }
        this.showCalendar(month, year);
    }

    closeCalender(){
        const calendar = this.shadowRoot.querySelector(".calender-block");
        const arrowDown = this.shadowRoot.querySelector(".from-arrow-down");
        const arrowRight = this.shadowRoot.querySelector(".from-arrow-right");

        // calendar.classList.toggle('is-block');
        if(calendar != null){
            if(calendar.classList.contains('is-block')){
                calendar.classList.remove('is-block');
                if(this.dateFromSelected == true) {
                    arrowDown.style.display = 'none';
                    arrowRight.style.display = 'block';
                } else {
                    arrowDown.style.display = 'block';
                    arrowRight.style.display = 'none';
                }
            }
        }
    }

    showCalendar(month, year) {
        const date = new Date();
        const firstDay = (new Date(year, month)).getDay();
        const fromDateTitle = this.shadowRoot.querySelector("#from-date-title");
        const toDateTitle = this.shadowRoot.querySelector("#to-date-title");
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthAndYear = this.shadowRoot.getElementById('monthAndYear');
        let renderNum = 1;
        const bdy = this.shadowRoot.getElementById('days');
        
        monthAndYear.innerHTML = months[month] + ',' + year;
        bdy.innerHTML = '';

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('ul');

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    const cell = document.createElement('li');
                    const cellText = document.createTextNode('');
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    let dateAppended = new Date(`${month+1}`+'/'+cell.innerText+'/'+year);
                    if(!this.checkDateifItsWithinFilter(dateAppended)){
                        cell.style.opacity = "0.3";
                    }
                } else if (renderNum > this.daysInMonth(month, year)) {
                    break;
                } else {
                    const cell = document.createElement('li');
                    const cellText = document.createTextNode(renderNum);

                    if (renderNum === date.getDate() && year === date.getFullYear() && month === date.getMonth()) {
                        if(!this.wasDateSelected){
                        }        
                    }
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    renderNum++;
                    let dateAppended = new Date(`${month+1}`+'/'+cell.innerText+'/'+year);
                    if(!this.checkDateifItsWithinFilter(dateAppended)){
                        cell.style.opacity = "0.3";
                    }

                    cell.addEventListener('mouseover',()=>{
                        let dateHovered = new Date(`${month+1}`+'/'+cell.innerText+'/'+year);
                        if(this.column.choices !== null && this.column.choices !== undefined){
                            //means there is date filters
                            if(!this.checkDateifItsWithinFilter(dateHovered)){
                                //To show user they should not click the date, but they will try to click anyway..
                                //the clickListener below will prevent it
                                cell.style.cursor = 'not-allowed';
                                cell.title = "Date is not within the filter range";
                            }
                        }
                    });

                    cell.addEventListener('click', () => {
                        //check if the date is within the date filters
                        let dateclicked = new Date(`${month+1}`+'/'+cell.innerText+'/'+year);

                        if(this.column.choices !== null && this.column.choices !== undefined){
                            //means there is date filters
                            if(this.checkDateifItsWithinFilter(dateclicked)){
                            //carry on selection
                            const allCells = this.shadowRoot
                                .querySelector('#days')
                                .querySelectorAll('li');
                            allCells.forEach((cell) =>{cell.classList.remove('active');});

                            if(this.dateFromSelected == false && this.dateToSelected == false){
                                this.fromDateSelected = `${month+1}`+'/'+cell.innerText+'/'+year;
                                let fd = new Date(this.fromDateSelected);
                                let td = new Date(this.todaysDate);
                                if(fd <= td ){
                                    //from date is on current date or in the past which we want
                                    cell.classList.add('from-active');
                                    this.dateFromSelected = true;
                                    this.fromMonthSelected = this.months[month];
                                    this.fromYearSelected = year;
                                    this._dateFrom = cell.innerText;
                                    cell.classList.remove('no-select');
                                    fromDateTitle.innerText = cell.innerText+'/'+`${month+1}`+'/'+year;
                                  
                                } else {
                                    //from date is in the future which there are no data
                                    cell.classList.add('no-select');
                                }
                            } else if(this.dateFromSelected == true && this.dateToSelected == false) {
                                this.toDateSelected =  `${month+1}`+'/'+cell.innerText+'/'+year;
                                let fd = new Date(this.fromDateSelected);
                                let td = new Date(this.todaysDate);
                                let toD = new Date(this.toDateSelected);
                                if(toD === fd || toD > td ){
                                    //do nothing
                                    cell.classList.add('no-select');
                                } else {
                                    cell.classList.add('from-active');
                                    cell.classList.add('to-active');
                                    this.dateToSelected = true;
                                    this.toMonthSelected =  this.months[month];
                                    this.toYearSelected = year;
                                    this._dateTo = cell.innerText;

                                    toDateTitle.innerText = cell.innerText+'/'+`${month+1}`+'/'+year;
                                    this.toggleCalenders();
                                  
                                    //do backend search
                                    this._dateToFilter();
                                }
                            } else if(this.dateFromSelected == true && this.dateToSelected == true) {
                                //reset
                                const allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
                                allCells.forEach((cell) =>{
                                    if(cell.classList.contains('from-active') || cell.classList.contains('to-active')){
                                        cell.classList.remove('from-active');
                                        cell.classList.remove('to-active');
                                    }
                                });

                                this.dateFromSelected = false;
                                this.dateToSelected = false;

                                toDateTitle.innerText = "To";
                                fromDateTitle.innerText = "From"
                            
                            }
                        }
                        } else {
                            //default selection of date
                            //carry on selection
                            const allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
                            allCells.forEach((cell) => {cell.classList.remove('active');});

                            if(this.dateFromSelected == false && this.dateToSelected == false) {
                                this.fromDateSelected = `${month+1}`+'/'+cell.innerText+'/'+year;
                                let fd = new Date(this.fromDateSelected);
                                let td = new Date(this.todaysDate);

                                if(fd <= td ){
                                    //from date is on current date or in the past which we want
                                    cell.classList.add('from-active');
                                    this.dateFromSelected = true;
                                    this.fromMonthSelected = this.months[month];
                                    this.fromYearSelected = year;
                                    this._dateFrom = cell.innerText;
                                    cell.classList.remove('no-select');
                                    fromDateTitle.innerText = cell.innerText+'/'+`${month+1}`+'/'+year;
                                }else{
                                    //from date is in the future which there are no data
                                    cell.classList.add('no-select');
                                }
                            } else if(this.dateFromSelected == true && this.dateToSelected == false) {
                                this.toDateSelected =  `${month+1}`+'/'+cell.innerText+'/'+year;

                                let fd = new Date(this.fromDateSelected);
                                let td = new Date(this.todaysDate);
                                let toD = new Date(this.toDateSelected);

                                if(toD === fd || toD > td ){
                                    //do nothing
                                    cell.classList.add('no-select');
                                }else{
                                    cell.classList.add('from-active');
                                    cell.classList.add('to-active');
                                    this.dateToSelected = true;
                                    this.toMonthSelected =  this.months[month];
                                    this.toYearSelected = year;
                                    this._dateTo = cell.innerText;

                                    toDateTitle.innerText = cell.innerText+'/'+`${month+1}`+'/'+year;
                                    this.toggleCalenders();

                                    //do backend search
                                    this._dateToFilter();
                                }      
                            } else if(this.dateFromSelected == true && this.dateToSelected == true){
                                //reset
                                const allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
                                allCells.forEach((cell) =>{

                                    if(cell.classList.contains('from-active') || cell.classList.contains('to-active')){
                                        cell.classList.remove('from-active');
                                        cell.classList.remove('to-active');
                                    }
                                });

                                this.dateFromSelected = false;
                                this.dateToSelected = false;

                                toDateTitle.innerText = "To";
                                fromDateTitle.innerText = "From"
                            }
                        }
                    });
                }
            }

            bdy.appendChild(row);
            let dates = this.shadowRoot.querySelector('#days').querySelectorAll('li');

            if(this.dateFromSelected || this.dateToSelected) {
                let monthAndYear = this.shadowRoot.getElementById("monthAndYear").innerHTML;
                let month = monthAndYear.slice(0, 3);
                let year = monthAndYear.slice(4);

                if( this.dateFromSelected == true &&  this.fromMonthSelected == month && this.fromYearSelected == year){
                    //set active date color
                    dates.forEach((date) =>{
                        if(date.innerText == this._dateFrom){
                            date.classList.add('from-active');
                        }
                    });
                }

                if (this.dateToSelected == true && this.toMonthSelected == month && this.toYearSelected == year){
                    //set active date color
                    dates.forEach((date) =>{
                        if(date.innerText == this._dateTo){
                            date.classList.add('to-active');
                        }
                    });
                }
            }
        }
    }

    next() {
        if(this.monthYearCalenderVisibile) {
            const monthYearView = this.shadowRoot.getElementById('monthAndYear');

            this.currentYear++;
            monthYearView.innerText = this.currentYear;

        } else {
        //Remove active color by default
            let allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
            allCells.forEach((cell) =>{cell.classList.remove('active')});

            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentYear++;
                this.currentMonth = 0;
            }
            this.showCalendar(this.currentMonth, this.currentYear);
        }
    }

    previous() {
        if(this.monthYearCalenderVisibile){
            const monthYearView = this.shadowRoot.getElementById('monthAndYear');

            this.currentYear--;
            monthYearView.innerText = this.currentYear;

        }else{
            let allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
            allCells.forEach((cell) =>{cell.classList.remove('active')});
            this.currentMonth--;

            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            this.showCalendar(this.currentMonth, this.currentYear);
        }
    }

    monthToggle(){
        const monthBody = this.shadowRoot.getElementById('months-calender');
        const days = this.shadowRoot.getElementById('days');
        const weekdays = this.shadowRoot.getElementById('weekdays');
        const monthYearView = this.shadowRoot.getElementById('monthAndYear');
        const allMonthsInCalender = this.shadowRoot.querySelectorAll(".monthN")

        if(!this.monthYearCalenderVisibile){
            monthBody.style.display = "block";
            days.style.display = "none";
            weekdays.style.display = "none"
            allMonthsInCalender.forEach((month)=>{
                if(month.innerText == this.months[this.currentMonth]){
                    month.classList.add("active");
                }else{
                    month.classList.remove("active");
                }
            });
            //show current year
            monthYearView.innerText = this.currentYear;
            this.monthYearCalenderVisibile = true;
        } else {
            monthBody.style.display = "none";
            days.style.display = "block";
            weekdays.style.display = "block";

            //show current year
            this.monthYearCalenderVisibile = false;
            this.showCalendar(this.currentMonth, this.currentYear);
        }
    }

    selectMonth(monthText){
        const allMonthsInCalender = this.shadowRoot.querySelectorAll(".monthN")
        const monthBody = this.shadowRoot.getElementById('months-calender');
        const days = this.shadowRoot.getElementById('days');
        const weekdays = this.shadowRoot.getElementById('weekdays');

        allMonthsInCalender.forEach((month)=>{
            month.classList.remove("active");
        });

        allMonthsInCalender.forEach((month)=>{
            if(month.innerText == monthText){
            month.classList.add("active");
            }
        });
        
        this.currentMonth = this.months.indexOf(monthText);
        
        monthBody.style.display = "none";
        days.style.display = "block";
        weekdays.style.display = "block";
        this.monthYearCalenderVisibile = false;
        this.showCalendar(this.currentMonth, this.currentYear);
    }

    daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }


    checkDateifItsWithinFilter(date){
        let minDate = new Date(this.column.choices[0]);
        let maxDate = new Date(this.column.choices[1]);
        let mindate_1 = new Date( minDate.setDate(minDate.getDate()-1));

        if(date < mindate_1 || date >= maxDate){
            // console.log("Date is outside filter range", "filter range is:",this.column.choices[0],"~",this.column.choices[1] );
            return false;
        }else{
            // console.log("Date is within filter range", "filter range is:",this.column.choices[0],"~",this.column.choices[1] );
            return true;
        }
    }

    _dateChanged() {
        if (this._dateFrom && this._dateTo) {
            this.column.activeFilterValue = {
                dateFrom: this._dateFrom,
                dateTo: this._dateTo,
            };
            this.fire('date-input-change-th-content', {
                column: this.column,
                value: this.column.activeFilterValue,
            });
        }
    }

    _displayPickerDate(dateFrom, dateTo) {
        if (dateFrom && dateTo) {
            return `${dateFrom} - ${dateTo}`;
        }
        return '';
    }

    _handleSort() {
        this.dispatchEvent(new CustomEvent('sort-th-content', {
            detail: {column: this.column},
        }));
    }

    _dateToFilter(evt) {
        const column = this.shadowRoot.querySelector("#date-title").innerText;
        let fromFilterDate =`${this.fromYearSelected}` + "-"+`${this.checkDigit(this.months.indexOf(this.fromMonthSelected)+1)}`+"-"+`${this._dateFrom}`;
        let toFilterDate =`${this.toYearSelected}` + "-"+`${this.checkDigit(this.months.indexOf(this.toMonthSelected)+1)}`+"-"+`${this._dateTo}`;

        console.log("column is >> ",column,this.column.propertyPath, this.column.choices);

        let columnValue = this.column.propertyPath;
        this.dispatchEvent(new CustomEvent('filter-date-range', {
            detail: {
                column:column,
                columnValue:columnValue,
                start_date: fromFilterDate,
                end_date:toFilterDate
            },
        }));
    }
    
    checkDigit(digit){
        let digitLength =  digit.toString().length;
        let newDigit;

        if(digitLength == 2){
            return digit
        }else if(digitLength == 1){
            newDigit = "0"+digit;
            return newDigit;
        }
    }

    _handleFilter() {
        console.log("this column is ",this.column);
        
        if (this.column.filter) {
            if (this.column.activeFilter) {
                const paperInput = this.shadowRoot.querySelector('paper-input');
                if (paperInput) {
                    paperInput.value = '';
                }
                this.previousValue = null;
            }
            // this.fire('filter-th-content', {column: this.column});
        }
    }

    setPaperInputValue(value) {
        this.shadowRoot.querySelector('paper-input').value = value;
    }

    _handleChoiceChanged() {
        this.dispatchEvent(new CustomEvent('input-change-th-content', {
            detail: {column: this.column, value: this._selectedChoices},
        }));
 
    }

    _handleColumnDropdownFilter(evt) {
        let value = evt.target.value;
        if(value == 'All'){ value=''}
        this.dispatchEvent(new CustomEvent('input-change-th-content', {
            detail: {column: this.column, value: value},
        }));
       
    }

    _handleActiveFilterChange(event) {
        const parentDiv = event.currentTarget.parentNode;
        Polymer.dom.flush();
        this.async(() => {
            let paperInput;
            if (!this.column.date && !this.column.choices) {
                paperInput = this.shadowRoot.querySelector('paper-input');
                if (paperInput) {
                    paperInput.focus();
                    if (this.column.activeFilterValue) {
                        this.previousValue = this.column.activeFilterValue;
                    }
                }
            } else if (this.column.date) {
                    const datePicker = parentDiv.querySelector('range-datepicker-input');
                    if (datePicker) {
                        if (this.column.activeFilterValue) {
                            this.previousValue = this.column.activeFilterValue;
                        }
                    }
            } else {
                this._selectedChoices = [];
            }
        });
    }

    _handleKeyDownInput(event) {
        const input = event.currentTarget;
        this.currentValue = input.value;
        if (this.previousValue !== this.currentValue) {
            if (event.keyCode === 13) {
                this.fire('input-change-th-content', {column: this.column, value: this.currentValue});
                this.previousValue = this.currentValue;
            } else {
                clearTimeout(this.timeoutFilter);
                this.timeoutFilter = setTimeout(() => {
                    if (this.previousValue !== this.currentValue) {
                        this.fire('input-change-th-content', {column: this.column, value: this.currentValue});
                    }
                    this.previousValue = this.currentValue;
                }, 1000);
            }
        }
    }

    equals(targetedValue, value) {
        return value === targetedValue;
    }

    dropdown(){
        // console.log("dropdown function");
        const dropdown = this.shadowRoot.querySelector('.datalist-dropdown');
        if(dropdown.classList.contains('is-active')){
            dropdown.classList.remove('is-active');
        }else{
            dropdown.classList.add('is-active');
        }
    }

    closeDropdown(){
        const dropdown = this.shadowRoot.querySelector('.datalist-dropdown');
        if(dropdown.classList.contains('is-active')){
            dropdown.classList.remove('is-active');
        }
    }

    _draggableClass(draggable) {
        if (draggable) {
            return 'draggable';
        }
        return '';
    }

    _isDraggable(draggableColumn, focused) {
        if (draggableColumn && !focused) {
            return 'true';
        }
        return 'false';
    }

    _computeIconName(choice, selectedChoices) {
        if (selectedChoices.base.indexOf(choice) === -1) {
            return 'check-box-outline-blank';
        }
        return 'check-box';
    }

    updated(changedProperties) {
        // Check if bgColor needs updating if the component re-renders
        const newBgColor = getComputedStyle(document.documentElement).getPropertyValue('--adaptive-ui-icon-stroke-color');
        if (this.bgColor !== newBgColor) {
          this.bgColor = newBgColor;
        }
      }
      

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const self = this;

        if(self.column.choices){
            document.addEventListener('click', event => {
                var path = event.composedPath ? event.composedPath() : event.path;
                if(path[0].className == 'dropdown cell-dropdown') {
                    //do nothing
                }else if(path[0].className == 'default_option') {
                    let[title,column_header] = path[0].id.split("-");
                    const dropdown = self.shadowRoot.getElementById("ul-"+column_header);
                
                }else{
                    // self.closeDropdown();
                }
                let [title, columnName] = path[0].id.split('|');

                if(title != "datalist_column_header"){
                    self.closeDropDowns(path[0]);
                } else {
                //do nothing
                }
            });
        }
    }

    closeDropDowns(whatWasClicked){
        const drops = this.shadowRoot.querySelectorAll('.datalist-dropdown');

        drops.forEach(drop =>{
            if(drop.classList.contains('is-block')){
                drop.classList.remove('is-block');
            }
        });

        if(whatWasClicked.id == 'from-date-title' || whatWasClicked.id == 'to-date-title' || whatWasClicked.id == 'monthAndYear'
            || whatWasClicked.id == 'days' || whatWasClicked.id == 'buttons' || whatWasClicked.tagName == 'use'  
            || whatWasClicked.tagName == 'UL' || whatWasClicked.tagName == 'LI' || whatWasClicked.className == 'monthN'
            || whatWasClicked.className == 'weekday' || whatWasClicked.className == 'prev' || whatWasClicked.className == 'next' 
            || whatWasClicked.id == 'month-column' || whatWasClicked.className == 'calendar-scroll is-flex is-pulled-right'
            ) {
            //do nothing
        }else{
            this.closeCalender();
        }
    }


  
    static get is() {return 'datasource-table-head';}

    render() {
        return html`
            <div class="head">
                ${
                    this.equals(this.positionSortIcon, 'left') ? html`
                        ${
                            this.column.sortable ? html`
                                <paper-icon-button icon="paper-datatable-api-icons:arrow-downward"
                                    sorted$="[[sorted]]"
                                    class="sort"
                                    on-tap="_handleSort"
                                    sort-direction$="[[sortDirection]]">
                                </paper-icon-button>
                            ` : ""}
                        ${
                            this.column.filter ? html`
                                ${
                                    this.column.activeFilter ? html`
                                        <paper-icon-button icon="paper-datatable-api-icons:clear"
                                            sortable$="[[sortable]]" class="filter active"
                                            @tap="${this._handleFilter}">
                                        </paper-icon-button>
                                    ` : html`
                                        <paper-icon-button icon="paper-datatable-api-icons:search" sortable$="[[sortable]]" class="filter" @tap="${this._handleFilter}">
                                        </paper-icon-button>
                                    `
                                }
                            `: ""
                        } 
                    ` : ""
                }
                <div class="is-flex flex"  @click="${ () => {this._handleFilter}}" style="cursor:pointer;${this.column.header === "Status" ? "padding:0 20px;" : ""}">                  
                    <div style="font-size: 13px; font-weight: 400; color: #464646; display: flex; align-items: center;">${this.column.choices ? "" : html` <div style="color:var(--adaptive-ui-icon-stroke-color)">${this.column.header}</div>`}</div>
                    ${
                        this.column.date ? html`
                            <div class="column_header mr-2" style="padding-top: 0px;">
                                <p @click="${this.toggleCalenders}" id="date-title" class="datalist-column-header">${this.column.header}</p>
                            </div>
                            <div id="date-range" class="date-range">
                                <p @click="${this.toggleCalenders}" id="from-date-title" class="datalist-column-header">From</p>
                                <span id="arrow-down" class="icon from-arrow-down" @click="${this.toggleCalenders}">
                                    <i color="#6C7A89" size="18px" class="fas fa-angle-down"></i>
                                </span>
                                <span  id="arrow-right" class="icon from-arrow-right" @click="${this.toggleCalenders}">
                                    <i color="#6C7A89" size="18px" class="fas fa-angle-right"></i>
                                </span>
                                <p @click="${this.toggleCalenders}" id="to-date-title" class="datalist-column-header">To</p>
                            </div>
                            <div class="calender-block">
                                <div id="calender" class="calendar-select-body">
                                    <div id="calender-start" class="columns">
                                        <div id="month-column" class="column" @click="${this.monthToggle}">
                                            <li class="is-pulled-left monthAndYear" id="monthAndYear">
                                                August
                                            </li>
                                        </div>
                                        <div id="buttons" class="column">
                                            <div class="calendar-scroll is-flex is-pulled-right">
                                                ${this.column.choices ? html`
                                                <p class="filter-dates">Select dates</p>`
                                                :``}
                                                <li class="prev" @click = "${this.previous}">&#10094;</li>
                                                <li class="next" @click = "$${this.next}">&#10095;</li>
                                            </div>
                                        </div>
                                    </div>
                                <ul class="weekdays" id="weekdays">
                                    <li class="week-day">Su</li>
                                    <li class="week-day">Mo</li> 
                                    <li class="week-day">Tu</li>
                                    <li class="week-day">We</li>
                                    <li class="week-day">Th</li>
                                    <li class="week-day">Fr</li>
                                    <li class="week-day">Sa</li>
                                </ul>
                                <div class="days" id="days"></div>
                                <div class="month-calender" id="months-calender">
                                    <ul id="months" class="months">
                                        ${
                                            this.months.map((month) => html`
                                                <li @click=${()=>this.selectMonth(month)} class ="monthN">${month}</li>
                                            `)
                                        }  
                                    </ul>
                                </div>
                                </div>          
                            </div>
                        ` : html`
                            ${
                                this.column.choices ? html`
                                    <div class="field is-grouped">
                                       
                                        <div class="control is-expanded">
                                            <span class="select is-fullwidth" style="width: 192px">
                                            <select id="default-${this.column.header}" style="background: none;">
                                                <option>${this.column.header}</option>
                                                <option @click="${this._handleColumnDropdownFilter}">All</option>
                                                ${this.column.choices.map((choice) => html`<option @click="${this._handleColumnDropdownFilter}" .val=${choice}>${choice}</option>`)}
                                            </select>
                                            </span>
                                        </div>
                                    </div>
                            
                                ` : ""
                            }
                        `
                    }
                </div>
                ${
                    this.equals(this.positionSortIcon, 'right') ? html`
                        <!-- Filter icon -->
                        ${
                            this.column.filter ? html`
                                ${
                                    this.column.activeFilter ? html`
                                        <paper-icon-button icon="paper-datatable-api-icons:clear" sortable$="[[sortable]]" class="filter active"
                                            on-tap="_handleFilter"></paper-icon-button>
                                    ` : html`
                                        <paper-icon-button icon="paper-datatable-api-icons:search" sortable$="[[sortable]]" class="filter" on-tap="_handleFilter"></paper-icon-button>
                                    `
                                }
                            ` : ""
                        }
                        <!-- Sort -->
                        ${
                            this.column.sortable ? html`
                                <paper-icon-button icon="paper-datatable-api-icons:arrow-downward" sorted$="[[sorted]]" class="sort"
                                    on-tap="_handleSort" sort-direction$="[[sortDirection]]"></paper-icon-button>             
                            ` : ""
                        }   
                    ` : ""
                }
            </div>
        `;
    }
}


customElements.define(DataSourceTableHead.is, DataSourceTableHead);
