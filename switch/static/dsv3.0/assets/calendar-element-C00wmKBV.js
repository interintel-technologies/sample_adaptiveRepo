import{i as h,N as c,S as m,r as v,g as D,k as s}from"./index-C2PWchud.js";import{u as g}from"./utils-mixin-D5aAiqNi.js";const p=h`
    .column.is-flex {
        justify-content: center;
        align-items: center;
    }
    .card-header {
        box-shadow: none;
        background-color: var(--primary);
    }
    .card-header-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
    }
    .card-header-title > h4, .card-header-title > h5 {
        color: white !important;
    }
    .card-content {
        padding: 1.5rem 0 0 0 !important;
    }
    hr {
        margin: 1rem !important;
    }
    h4 {
        margin-bottom: 0 !important;
    }
    .month {
        overflow-x: auto;
    }
    .card {
        border-radius: 6px;
        padding: 1.5rem;
    }
    .month-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
    .month-grid-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
    }
    .day-of-week > h5 {
        text-align: center;
        padding: 0.5rem;
    }
    .day {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        border: 2px solid transparent;
        width: fit-content;
        border-radius: 50%;
        cursor: pointer;
    }
    .day h6 {
        margin: 0 !important;
    }
    .day:hover {
        border-color: var(--primary);
    }    
    .today {
        background-color: var(--link);
    }
    .today > h6, .selected-date > h6 {
        color: white !important;
    }
    .selected-date {
        background-color: var(--primary);
    }
    .selected-date:hover {
        border-color: var(--link);
    }
    .unavailable {
        opacity: 0.15;
        cursor: not-allowed;
    }
    .unavailable:hover {
        border-color: transparent !important;
    }
    .today-text {
        cursor: pointer;
        width: fit-content;
        margin-top: 1.5rem;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .today-text:hover {
        color: var(--link) !important;
        transform: scale(1.03);
    }
    .today-text:active {
        color: var(--link) !important;
        transform: scale(0.97);
    }
    .selected-date-btn:hover {
        transform: scale(1.01);
    }
    .selected-date-btn {
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .fas {
        height:22px; 
        width: 22px; 
        margin-right:10px;
    }
    .card-header > *:active {
        transform: scale(.99);
    }
    .nav {
        width: 28px !important;
        height: 28px !important;
        cursor: pointer;
        border:1px solid black;
        border-radius: 50%;
        margin-right: 10px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .nav:hover {
        transform: scale(1.05);
    }
    .nav:active {
        transform: scale(0.95);
    }
    .date-navigation {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }
    .date-navigation .is-flex {
        flex-wrap: wrap;
        margin-top: 5px;
    }
    .select {
        margin-right: 10px !important;
    }
    .columns {
        margin: 0 !important;
    }
    .valid{
        background-color :#23D160!important;
    }
    .invalid{
        background-color: rgb(255, 56, 96)!important;
    }
    #warning-text{
        display: none;
    }
    @media screen and (max-width:550px) {
        .card-content {
            padding: 1.5rem 0 0 0 !important;
        }
        .month-grid {
            overflow-x: auto;
        }
        .date-navigation {
            justify-content: center;
        }
    }
`,u=class extends g(m){static get properties(){return{label:String,required:Boolean,value:Number,loader:Object}}getName(){return this.e.formName}getValue(){const i="yyyy-MM-dd";let e=new Date(this.value);return c(e,i)}validate(){if(this.required&&!this.getValue())return new this.Validation(!1,"Invalid date");if(this.minDate=this.e.details.minDate,this.minDate){if(this.getValue()==null||this.getValue()==null)return new this.Validation(!1,"Invalid date");{const i="yyyy-MM-dd";let e=new Date(this.getInput()),t=c(e,i),r=new Date(t),a=new Date;return r.setHours(0,0,0,0)<=a.setHours(0,0,0,0)?new this.Validation(!1,"Select a future date"):new this.Validation(!0,"valid date")}}return new this.Validation(!0,"valid date")}dscDataName(){return this.e.defaultValue}init(i,e){super.init(i,e);const t=this;t.label=u.toTitleCase(i.name),t.params=e.pl.paramsCopy(),t.required=this.e.required||i.min&&i.min>0,t.loader=this.loadData()}};class d extends u{static get styles(){return[v(D),p,h`
                :host {
                    display: block;
                }
            `]}static get properties(){return{name:String,months:Array,selectedDate:Number,currentMonth:Number,currentYear:Number,startDate:Number,minDate:Number,maxDate:Number,availableDays:Array}}constructor(){super(),this.months=[],this.currentMonth=new Date().getMonth(),this.currentYear=new Date().getFullYear(),this.availableDays=[]}firstUpdated(){this.initMonths(),this.e&&(this.name=this.e.name,this.availableDays=this.e.details.availableDays?this.e.details.availableDays:[],this.selectedDate=this.e.details.selectedDate,this.startDate=this.e.details.startDate),this.startDate&&(this.currentMonth=new Date(this.startDate).getMonth(),this.currentYear=new Date(this.startDate).getFullYear()),this.selectedDate&&(this.selectedDate=new Date(this.selectedDate))}updated(e){super.updated(e),e.forEach((t,r)=>{r==="currentYear"&&this.initMonths()})}connectedCallback(){super.connectedCallback(),window.addEventListener("set-selected-date",e=>{this.selectedDate=e.detail.date?new Date(e.detail.date):void 0})}onMonthSelectChangeHandler(e){this.currentMonth=this.months.findIndex(t=>t.label===e.target.value)}onYearSelectChangeHandler(e){const t=parseInt(e.target.value);this.currentYear=t}onNavIconClickHandler(e){const t=parseInt(e.target.getAttribute("move"));t+this.currentMonth>11?(this.currentMonth=0,this.currentYear=this.currentYear+1):t+this.currentMonth<0?(this.currentMonth=11,this.currentYear=this.currentYear-1):this.currentMonth=t+this.currentMonth}onDayClickHandler(e,t){this.isDayAvailable(t)&&(this.shadowRoot.querySelectorAll(".day").forEach(r=>{r.classList.remove("selected")}),new Date(this.selectedDate).toDateString()===new Date(this.currentYear,this.currentMonth,t).toDateString()?this.selectedDate=void 0:(this.selectedDate=new Date(this.currentYear,this.currentMonth,t).getTime(),e.target.classList.add("selected")),this.value=this.selectedDate,this.dispatchEvent(new CustomEvent("on-date-selected",{bubbles:!0,composed:!0,detail:{value:this.selectedDate}})))}onTodayClickHandler(){this.currentMonth=new Date().getMonth(),this.currentYear=new Date().getFullYear()}onSelectedDateClickHandler(){this.currentMonth=new Date(this.selectedDate).getMonth(),this.currentYear=new Date(this.selectedDate).getFullYear();const e=this.shadowRoot.querySelector("#monthSelect"),t=this.shadowRoot.querySelector("#yearSelect");e.value=this.months[this.currentMonth].label,t.value=this.currentYear}initMonths(){const e=["January","February","March","April","May","June","July","August","September","October","November","December"];this.months=[...e.map((t,r)=>{const a=new Date(this.currentYear,r+1,0).getDate(),n=new Date(this.currentYear,r,0).getDay(),o=[];for(let l=1;l<=a;l++)o.push(l);return{label:t,days:o,firstDay:n}})]}isDayToday(e){const t=new Date().toDateString(),r=new Date(this.currentYear,this.currentMonth,e).toDateString();return t===r}isDaySelected(e){return new Date(this.currentYear,this.currentMonth,e).toDateString()===new Date(this.selectedDate).toDateString()}isDayAvailable(e){const t=new Date(this.currentYear,this.currentMonth,e).toDateString();let r=!1;return this.availableDays.length===0?r=!0:r=this.availableDays.map(a=>new Date(a).toDateString()).includes(t),r}getDayString(e){return new Date(this.currentYear,this.currentMonth,e).toDateString()}valid(e){const t=this.shadowRoot.querySelector(".card-header");this.shadowRoot.querySelector("#warning-text").style.display="none",t.classList.remove("invalid"),t.classList.add("valid"),setTimeout(()=>{t.classList.remove("valid")},3e3)}invalid(e){const t=this.shadowRoot.querySelector(".card-header");this.shadowRoot.querySelector("#warning-text").style.display="block",t.classList.add("invalid")}getIndexByColumnLabel(e){return this.cols.findIndex(t=>t.label.toLowerCase()===e.toLowerCase())}static get is(){return"calendar-element"}render(){const e=[],t=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];for(let a=1900;a<=2100;a++)e.push(a);return s`
            <div class="content">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-title" @click=${()=>this.onSelectedDateClickHandler()} title="Go to Selected Date">
                            <h5>${this.currentYear}</h5>
                            <h4 class="selected-date-btn">${this.selectedDate?new Date(this.selectedDate).toDateString():""}</h4>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="date-navigation">
                            <div class="is-flex">
                                <div class="select">
                                    <select id="monthSelect" @change=${a=>this.onMonthSelectChangeHandler(a)}>
                                        ${t.map((a,n)=>s`
                                                <option ?selected=${n===this.currentMonth}>${a}</option>
                                            `)}
                                    </select>
                                </div>
                                <div class="select">
                                    <select id="yearSelect" @change=${a=>this.onYearSelectChangeHandler(a)}>
                        
                                        ${e.map((a,n)=>s`
                                                <option ?selected=${a===this.currentYear}>${a}</option>
                                            `)}
                                    </select>
                                </div>
                            </div>
                            <div class="is-flex">
                                <div class="prev">
                                    <adaptive-ui-icon class="nav" title="Previous" @click=${a=>this.onNavIconClickHandler(a)} move="-1" icon="chevron-left"></adaptive-ui-icon>
                                </div>
                                <div class="next">
                                    <adaptive-ui-icon class="nav" title="Next" @click=${a=>this.onNavIconClickHandler(a)} move="1" icon="chevron-right"></adaptive-ui-icon>
                                </div>
                            </div>
                        </div>
                        <div class="month-grid">
                            ${r.map(a=>s`
                                    <div class="month-grid-cell">
                                        <h5>${a}</h5>
                                    </div>
                                `)}
                            ${this.months.length>0?this.months[this.currentMonth].days.map((a,n)=>s`
                                    <div class="month-grid-cell" style="grid-column-start: ${n===0?this.months[this.currentMonth].firstDay+1:"auto"};">
                                        <div class="day ${this.isDayAvailable(a)?"":"unavailable"} ${this.isDayToday(a)?"today":""} ${this.isDaySelected(a)?"selected-date":""}"
                                            title="${this.isDayAvailable(a)?this.getDayString(a):"Day not available"}" @click=${o=>this.onDayClickHandler(o,a)}
                                        >
                                            <h6 class="${this.isDayAvailable(a)?"has-text-weight-bold":""}">${a}</h6>
                                        </div>
                                    </div>
                                `):""}
                        </div>
                    </div>
                    <h6 class="today-text" @click=${()=>this.onTodayClickHandler()} title="Go to Today">
                        Today is ${new Date().toDateString()}
                    </h6>
                </div>
                <p id="warning-text" style="color:#ff3860;">${this.name} required</p>
            </div>
        `}}customElements.define(d.is,d);
