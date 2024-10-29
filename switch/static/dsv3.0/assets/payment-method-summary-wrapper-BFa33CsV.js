import{i as d,S as m,r as h,g as p,k as o,a as c,j as l}from"./index-C2PWchud.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";const y=d`
  .label {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;
    padding-bottom: 10px;
  }
  .icon {
    width: 200px;
    height: 200px;
  }
  .columns {
    margin: 0 0 10px 0 !important;
  }
  .column.is-flex {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    color: white !important;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .button:hover {
    border: none !important;
    transform: scale(1.01);
  }
  .button:active {
    transform: scale(0.99);
  }
  .remove {
    color: var(--link);
    cursor: pointer;
    margin-top: 10px;
    text-decoration: underline;
  }
  ul {
    list-style: disc;
  }
  .connected {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .check-icon {
    width: 38px !important;
    height: 38px !important;
    fill: #23d160;
  }
  .title-danger {
    color: #ff2b56;
  }
  .title-success {
    color: #23d160 !important;
  }
  #warning-text {
    display: none;
  }
`,x=class extends f(m){constructor(){super(),this.value=[]}static get properties(){return{value:String}}getName(){return this.e.formName}getValue(){return this.value}validate(){return!this.getValue().length>0?new this.Validation(!1,"Make sure to connect to a payment method."):new this.Validation(!0,"valid")}dscDataName(){return this.e.defaultValue}firstUpdated(s){super.firstUpdated(s)}_computeItemsCount(s){return s.length}_shouldFilter(s){var t=this._computeItemsCount(s);return t>10}_computeItems(s,t){const e=[];for(let r=0;r<s.length;r++){const n=s[r];if(t){var i=t.toLowerCase(),a=n[1].toLowerCase();a.indexOf(i)!==-1&&e.push(n)}else e.push(n)}return e}init(s,t){super.init(s,t),this.name=s.name,s.kind?this.selected=Number(s.kind):this.required&&this.rows.length>0&&(this.selected=this.rows[0][0]),this.loader=this.loadData()}};class u extends x{static get styles(){return[h(p),y]}static get properties(){return{paymentMethods:Array,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.paymentMethods=[],this.rows=[],this.cols=[],this.e=null}updated(t){(t.has("e")||t.has("cols"))&&(this.paymentMethods=[...this.rows.map(e=>Object.fromEntries(e.map((i,a)=>[this.cols[a].label,i])))],this.setDefaultValues())}setDefaultValues(){this.value=this.paymentMethods.filter(t=>t.status==="Active").map(t=>t.id)}onPaymentMethodBtnClickHandler(t){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.service,params:{connectPaymentMethod:t}},bubbles:!0,composed:!0})),this.value=[...this.value,t]}onRemoveClickHandler(t){this.updateParams("removePaymentMethod",t),this.value=this.value.filter(e=>e!==t)}valid(t){const e=this.shadowRoot.querySelector(".label"),i=this.shadowRoot.querySelector("#warning-text");e.classList.remove("title-danger"),e.classList.add("title-success"),i.style.display="none",setTimeout(()=>{e.classList.remove("title-success")},3e3)}invalid(t){const e=this.shadowRoot.querySelector(".label"),i=this.shadowRoot.querySelector("#warning-text");e.classList.remove("title-success"),e.classList.add("title-danger"),i.style.display="block"}static get is(){return"payment-method-summary"}render(){return o`
      <div class="column content">
        <h5 class="label">${this.e.name}</h5>
        ${this.paymentMethods.map(t=>o`
            <div class="columns card">
              <div class="column is-flex">
                <adaptive-ui-icon
                  class="icon"
                  icon=${t.icon}
                ></adaptive-ui-icon>
              </div>
              <div class="column is-flex">
                <h3 style="text-align: center;">${t.name}</h3>
                ${t.details.map(e=>Object.entries(e).map(([i,a])=>o`
                      <h6 style="text-align: center;">${i}: ${a}</h6>
                    `))}
              </div>
              <div class="column is-flex">
                <h6>Status: ${t.status}</h6>
                <button
                  id="Btn${t.id}"
                  style="background-color: ${t.status==="Disabled"?"green":"red"}"
                  class="button"
                  @click=${()=>this.onPaymentMethodBtnClickHandler(t.id)}
                >
                  ${t.status==="Disabled"?"Activate":"Deactivate"}
                </button>
              </div>
            </div>
          `)}
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </div>
    `}}customElements.define(u.is,u);const g=s=>{const{element:t,rows:e,cols:i}=s,a=c.useRef(null);return c.useEffect(()=>{a.current&&t&&(a.current.e=t,a.current.rows=e,a.current.cols=i)},[t,e,s,i]),l.jsx("div",{children:t?l.jsx("payment-method-summary",{id:"payment-method-summary",ref:a}):l.jsx("p",{children:"Loading data..."})})},k=v(g);export{k as default};
