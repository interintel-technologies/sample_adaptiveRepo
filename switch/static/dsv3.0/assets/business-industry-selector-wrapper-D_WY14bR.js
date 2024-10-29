import{i as c,S as u,r as p,g as m,k as a,a as n,j as i}from"./index-C2PWchud.js";import{u as h}from"./utils-mixin-D5aAiqNi.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";const b=c`
    .cont {
        border: 0.7px solid black;
        border-radius: 7px;
        padding: 32px;
        margin: 16px;
    }
    .card {
        flex-direction: column;
        align-items: center;
        padding: 16px;
        background: var(--paper) !important;
        border:0.4px solid black;
        border-radius: 7px;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        cursor: pointer; 
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        min-height:125px !important;
    }
    .columns {
        max-height: 80vh;
        overflow-y: auto;
    }
    .card > * {
        pointer-events: none;
        text-align: center;
    }
    .icon{
        pointer-events: none;
        margin-bottom:20px !important;
    }
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        border-color:var(--primary);
    }
    .card:hover > * {
        color :var(--primary) !important;
        fill :var(--primary) !important;
    }
    .selected {
        border: 1.2px solid var(--primary) !important;
    }
    .selected > * {
        color :var(--primary) !important;
        fill :var(--primary) !important;
    }
    .card:hover .overlay {
        transform: scale(4) translateZ(0);
    }
    .unavailable{
        cursor: pointer; 
        color: var(--primary) !important;
        text-align: center;
    }
    .actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
    .unavailable:hover {
        color: var(--link) !important;
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
    .card-success > *{
        color :#23d160!important;
        fill :#23d160!important;
    }
    .cont-success {
        border-color: #23d160 !important;
    }
    .cont-danger {
        border-color: #ff2b56 !important;
    }
    @media screen and (max-width: 770px) {
        .cont {
            margin: 0;
        }
        .actions {
            justify-content: center;
        }
    }
`,l=class extends h(u){static get properties(){return{value:String,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array},loader:Object}}constructor(){super(),this.value=void 0}firstUpdated(s){super.firstUpdated(s)}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):(localStorage.setItem("businessIndustrySelector",this.value),new this.Validation(!0,"valid"))}dscDataName(){return this.e.defaultValue}init(s,t){super.init(s,t);const e=this;e.title=l.toTitleCase(s.name),this.required=s.min&&s.min>0,this.name=s.name,this.loader=this.loadData()}};class o extends l{static get styles(){return[p(m),b,c`
				:host {
					display: block;
				}
			`]}static get properties(){return{businessIndustries:Array,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.businessIndustries=[],this.e=null,this.rows=[],this.cols=[]}updated(t){(t.has("rows")||t.has("cols"))&&(this.businessIndustries=[...this.rows.map(e=>Object.fromEntries(e.map((r,d)=>[this.cols[d].label,r])))])}unselectBusinessIndustryCard(){const t=this.shadowRoot.querySelector(".selected");t&&t.classList.remove("selected")}onBusinessIndustryCardClickHandler(t,e){this.unselectBusinessIndustryCard(),t.target.classList.add("selected"),this.value===e?(this.value=void 0,this.unselectBusinessIndustryCard()):this.value=e}onNextBtnClickHandler(){console.log("submitting 1 "),this.dispatchEvent(new CustomEvent("submit-form",{detail:{action:this.action}})),console.log("submitting 2 ")}valid(t){const e=this.shadowRoot.querySelector("#warning-text"),r=this.shadowRoot.querySelector(".selected");r.classList.add("card-success"),e.style.display="none",setTimeout(()=>{r.classList.remove("card-success")},3e3)}invalid(t){const e=this.shadowRoot.querySelector("#warning-text");e.style.display="block"}static get is(){return"business-industry-selector"}render(){return a`
			<div class="content">
				<h4>${this.e[0]&&this.e[0]}</h4>
				<div class="columns is-multiline">
					${this.businessIndustries.length>0?this.businessIndustries.map(t=>a`
							<div class="column is-2">
								<div class="card is-flex" @click=${e=>this.onBusinessIndustryCardClickHandler(e,t.name)}>
									<span class="icon is-medium">
										<adaptive-ui-icon icon="${t.icon}"></adaptive-ui-icon>
									</span>
									<h5>${t.name}</h5>
									<p>${t.description}</p>
								</div>
							</div>
						`):a`<h4>There are no Industries to Select</h4>`}
				</div>
				<div class="actions">
					<h4 class="unavailable">Can't see your kind of service?</h4>
					<button class="button is-primary" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
				</div>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
			</div>
		`}}customElements.define(o.is,o);const y=({element:s,rows:t,cols:e})=>{const r=n.useRef(null);return n.useEffect(()=>{r.current&&s&&(r.current.e=s,r.current.rows=t,r.current.cols=e)},[s,t,e]),i.jsx(i.Fragment,{children:s&&t&&e?i.jsx("business-industry-selector",{id:"business-industry-selector",ref:r}):i.jsx("p",{children:"Loading data..."})})},w=v(y);export{w as default};
