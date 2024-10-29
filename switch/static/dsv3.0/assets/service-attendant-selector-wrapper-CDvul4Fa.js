import{i as d,S as l,r as u,g as h,k as r,a as c,j as n}from"./index-C2PWchud.js";import{u as v}from"./utils-mixins-2-CV_UYnIr.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const p=d`
    adaptive-ui-icon {
        margin-right: 1rem;
    }
    .select, select {
        width: 100% !important;
    }
    .card {
        border-radius: 7px;
    }
    .card-content {
        padding: 2.5rem !important;
    }
`,S=class extends v(l){static get properties(){return{required:Boolean,value:Number,loader:Object,params:Object}}getName(){return this.e.formName}getValue(){const t=this.shadowRoot.querySelector("#serviceSelect"),e=this.shadowRoot.querySelector("#attendantSelect");return this.value={service:t.value,attendant:e.value},this.value}validate(){return this.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}dscDataName(){return this.e.defaultValue}init(t,e){super.init(t,e),this.params=e.pl.paramsCopy(),this.required=this.e.required||t.min&&t.min>0,this.loader=this.loadData()}};class o extends S{static get styles(){return[u(h),p]}static get properties(){return{services:Array,attendants:Array,duration:Number,charges:Number}}constructor(){super(),this.services=[],this.attendants=[],this.duration=0,this.charges=0}firstUpdated(){this.loader.then(()=>{const e=[...this.rows.map(i=>Object.fromEntries(i.map((a,s)=>[this.cols[s].label,a])))][0];this.services=e.services,this.attendants=e.attendants,this.duration=e.duration,this.charges=e.charges})}formatToKenyaShillings(e){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(e)}static get is(){return"service-attendant-selector"}render(){return r`
      <div class="column content">
        <div class="card">
          <div class="card-content">
            <div class="block">
              <h5>Select Service</h5>
              <div class="select">
                <select id="serviceSelect">
                  ${this.services.map(e=>r` <option><h6>${e}</h6></option> `)}
                </select>
              </div>
            </div>
            <div class="block">
              <h5>Select to be attendant by</h5>
              <div class="select">
                <select id="attendantSelect">
                  ${this.attendants.map(e=>r`
                      <option><h6>${e}</h6></option>
                    `)}
                </select>
              </div>
            </div>
            <div class="block is-flex">
              <adaptive-ui-icon icon="image:timer"></adaptive-ui-icon>
              <h5>Duration : ${this.duration} minutes</h5>
            </div>
            <div class="block is-flex">
              <adaptive-ui-icon icon="credit-card"></adaptive-ui-icon>
              <h5>Charges : ${this.formatToKenyaShillings(this.charges)}</h5>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define(o.is,o);const f=t=>{const{element:e,rows:i,paramsCallback:a}=t,s=c.useRef(null);return c.useEffect(()=>{s.current&&e&&(s.current.e=e,s.current.rows=i)},[e,i,t,a]),n.jsx("div",{children:e?n.jsx("service-attendant-selector",{id:"service-attendant-selector",ref:s}):n.jsx("p",{children:"Loading data..."})})},x=m(f);export{x as default};
