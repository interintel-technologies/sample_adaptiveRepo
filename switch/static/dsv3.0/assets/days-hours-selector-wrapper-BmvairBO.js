import{S as x,i as b,r as g,g as k,k as m,a as h,j as c}from"./index-C2PWchud.js";import"./time-element-nWPlqPDT.js";import{u as $}from"./utils-mixin-D5aAiqNi.js";import"./time-element-DQE4_iDI.js";import"./utils-mixins-2-CV_UYnIr.js";import"./InputMixin-CGm-oGk-.js";const y=class extends $(x){static get properties(){return{value:Array,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array}}}constructor(){super(),this.value=[]}firstUpdated(i){super.firstUpdated(i)}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(i,e){super.init(i,e);const t=this;t.title=y.toTitleCase(i.name),this.required=i.min&&i.min>0,this.name=i.name}},w=b`
    .cont {
        border: 0.7px solid black;
        border-radius: 7px;
        padding: 32px;
        margin: 16px;
    }
    .column.is-flex {
        align-items: center;
        min-height: fit-content;
    }
    .c-title,
    .c-desc {
        text-align: center;
        pointer-events: none;
        margin-bottom:0 !important;
    }
    .fas{
        pointer-events: none;
        margin-bottom:20px !important;
    }
    .selected {
        border: 1.2px solid var(--link) !important;
    }
    .unavailable{
        cursor: pointer; 
        color: var(--primary) !important;
        text-align: center;
    }
    .unavailable:hover {
        color: var(--link) !important;
    }
    .unavailable:active {
        transform: scale(0.9);
    }
    .more {
        cursor: pointer; 
        width: fit-content;
        color: var(--primary) !important;
        text-align: flex-start;
    }
    .more:hover {
        color: var(--link) !important;
    }
    h4 {
        margin-bottom:0 !important;
    }
    .more:active {
        transform: scale(0.9);
    }
    .button{
        background-color: var(--primary);
        padding: 0 35px;
        border-color: none;
        color: white;
    }
    .button:hover{
        background-color: var(--link);
    }
    #warning-text{
        display:none;
    }
    .title-danger{
        color: #ff2b56 !important;
    }
    .title-success{
        color: #23d160 !important;
    }
    .card-success{
        border-color: #23d160 !important;
    }
    .cont-success {
        border-color: #23d160 !important;
    }
    .cont-danger {
        border-color: #ff2b56 !important;
    }
    input {
        border: 2px solid var(--primary);
        transition: 0.2s all linear;
        margin-right: 5px;
    }
    input:checked {
        border: 5px solid var(--link);
    }
    .input-success {
        border: 5px solid #23d160 !important;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    .input-warning {
        color:#ff3860;
        display:none;
        position: absolute;
        top: 37px;
    }
    .column .is-3 {
        padding-left: 0 !important;
        padding-right: 0 !important;   
    }
    .break-hours {
        display: none;
    }
    @media screen and (max-width:450px) {
        .column.is-flex {
            justify-content:center;
            flex-wrap: wrap;
        }

        h4 {
            width: 100%;
            text-align: center;
        }
        .day {
            border-bottom: 1px solid black;
        }
    }

`;class v extends y{static get styles(){return[g(k),w,b`
				:host {
				    display: block;
				}
			`]}static get properties(){return{days:Object,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.days={},this.e=null,this.rows=[],this.cols=[]}updated(e){e.has("e")&&(this.autoPlayInterval=this.e.details.autoPlayInterval||this.autoPlayInterval,this.days=this.e.details.defaultValue?this.e.details.defaultValue:this.createDays(),console.log("this days updator e is ",this.days))}createDays(){const e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],t={"24Hours":!1,closed:!1,hours:{from:"7:30 am",to:"8:00 pm"},break:null},r={};return e.forEach(n=>Object.assign(r,{[n]:{...t}})),r}onNextBtnClickHandler(){this.value=this.days,this.dispatchEvent(new CustomEvent("submit-form",{detail:{action:this.action}}))}valid(e){const t=this.shadowRoot.querySelector("#warning-text");t.style.display="none"}invalid(e){const t=this.shadowRoot.querySelector("#warning-text");t.style.display="block"}createDayOfWeekHourSelector(e,t){let r={};const n=(s,o)=>{r={...e,hours:{...e.hours,[s]:o}},this.days={...this.days,[t]:r}},a=(s,o)=>{r={...e,[s]:o},this.days={...this.days,[t]:r}},d=(s,o)=>{r={...e,break:{...e.break,[s]:o}},this.days={...this.days,[t]:r}},l=s=>{const o=this.qs("#"+t+"24Hours"),p=this.qs("#"+t+"Closed"),f=this.qs("#"+t+"Break");s==="24Hours"?(o.checked&&(p.checked=!1,a("closed",!1)),a(s,!0)):s==="closed"?(p.checked&&(o.checked=!1,f.checked=!1,a("24Hours",!1),a("break",null),u()),a(s,!0)):s==="break"&&u()},u=()=>{const s=this.shadowRoot.querySelector(`#${t}BreakHours`);s.style.display=s.style.display==="block"?"none":"block"};return m`
            <div class="column day content">
                <div class="columns" style="margin: 0;">
                    <div class="column is-3 is-flex" style="justify-content: space-around;">
                        <h4>${t}: </h4>
                        <div class="is-flex" style="align-items: center;">
                            <input 
                                id=${t+"24Hours"} 
                                type="checkbox"
                                ?checked=${e["24Hours"]}
                                @click=${()=>l("24Hours")}
                            />
                            <h4>24 hours</h4>
                        </div>
                    </div>
                    <div class="column is-3 is-flex">
                        <h4>From: </h4>
                        <div style="padding: 0 10px; width: 100%;">
                            <time-element  @getTime="${s=>n("from",s.detail.time)}" .propName=${""} .propDefaultValue=${e.hours.from}></time-element>
                        </div>
                    </div>
                    <div class="column is-3 is-flex">
                        <h4>To: </h4>
                        <div style="padding: 0 10px; width: 100%;">
                            <time-element  @getTime="${s=>n("to",s.detail.time)}" .propName=${""} .propDefaultValue=${e.hours.to}></time-element>
                        </div>
                    </div>
                    <div class="column is-3 is-flex" style="justify-content: space-around;">
                        <div class="is-flex" style="align-items: center;">
                            <input 
                                id=${t+"Closed"} 
                                type="checkbox" 
                                ?checked=${e.closed}
                                @click=${()=>l("closed")}
                            />
                            <h4>Closed</h4>
                        </div>
                        <div class="is-flex" style="align-items: center;">
                            <input 
                                id=${t+"Break"} 
                                type="checkbox"
                                @click=${()=>l("break")})} 
                            />
                            <h4>Add Break Hours</h4>
                        </div>
                    </div>
                </div>
                <div id="${t}BreakHours" class="column break-hours">
                    <div class="columns" style="margin: 0;">
                        <div class="column is-1 is-flex is-offset-2">
                            <h4>Break</h4>
                        </div>
                        <div class="column is-3 is-flex">
                            <h4>From:</h4>
                            <time-element 
                                @getTime="${s=>d("from",s.detail.time)}"
                                .propName=${""}
                                .propDefaultValue=${e.break?e.break.from:"7:30 am"}
                            >
                            </time-element>
                        </div>
                        <div class="column is-3 is-flex">
                            <h4>To:</h4>
                            <time-element 
                                @getTime="${s=>d("to",s.detail.time)}"
                                .propName=${""}
                                .propDefaultValue=${e.break?e.break.to:"8:30 am"}
                            >
                            </time-element>
                        </div>
                    </div>
                </div>
            </div>
        `}static get is(){return"days-hours-selector"}render(){return m`
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
			<div class="column content">
				<div class="column">
                    <h4>${this.e&&this.e.details.description}</h4>
                    ${Object.keys(this.days).map(e=>this.createDayOfWeekHourSelector(this.days[e],e))}
				</div>
				<div class="level">
					<h5 class="unavailable">Back</h5>
					<button class="button" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
				</div>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
			</div>
		`}}customElements.define(v.is,v);const T=({element:i})=>{const e=h.useRef(null);return h.useEffect(()=>{if(e.current&&i){const t=e.current;t.e=i}},[i]),c.jsx(c.Fragment,{children:i&&c.jsx("days-hours-selector",{id:"days-hours-selector",ref:e})})};export{T as default};
