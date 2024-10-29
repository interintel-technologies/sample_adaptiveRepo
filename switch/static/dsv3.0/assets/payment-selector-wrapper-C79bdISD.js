import{i as m,S as h,r as p,g as y,k as o,a as n,j as c}from"./index-C2PWchud.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";import{w as g}from"./datasource-mixin-DMQBE4lo.js";const v=m`
    .column {
        padding: 16px;
    }
    .payment-selector-list {
        display: flex;
        flex-direction: row;
        overflow:auto;
        margin: 10px 0;
    }
    .card {
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-width:170px;
        margin: 0 20px;
        padding: 15px;
        border: 2.8px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .card-image {
        width: 140px;
        object-fit: contain;
    }
    .subtitle {
        text-align:center;
    }
    .check-icon {
        display:none;
        position:absolute;
        top: 50%;
        transform: translateY(-50%);
        right:-20px;
        width:38px !important;
        height: 38px !important;
        fill: var(--primary);
        background-color:white;
    }
    .card:hover {
        border-color: var(--primary);
    }
    .selected {
        border-color: var(--primary);
    }
    .title-danger{
        color: #ff2b56;
    }
    .title-success{
        color: #23d160 !important;
    }
    .selected-success {
        border-color: #23d160 !important;   
        fill: #23d160 !important;
    }
    #warning-text{
        display:none;
    }
    @media screen and (max-width: 550px) {
        .card {
            margin:0 10px;
        }
    }
`,u=class extends f(h){static get properties(){return{icon:String,title:String,selected:String}}getName(){return this.e.formName.split("=")[0]}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(s){}invalid(s){}_dataJoined(s){const e=this;let t=[];return e.e.details.concat_exclude&&(t=e.e.details.concat_exclude.split(",")),s.filter(function(r,i){return!(i===0||t.includes(String(i))||e.cols.length&&e.cols[i].type==="href")}).join(" ")}dscDataName(){return this.e.defaultValue}firstUpdated(s){super.firstUpdated(s);const e=this;this.loader.then(t=>{e.q="",e.currentGroups=e.groups,e.currentData=e.data})}_computeItemsCount(s){return s.length}_shouldFilter(s){return this._computeItemsCount(s)>10}_computeItems(s,e){const t=[];for(let l=0;l<s.length;l++){const a=s[l];if(e){var r=e.toLowerCase(),i=a[1].toLowerCase();i.indexOf(r)!==-1&&t.push(a)}else t.push(a)}return t}init(s,e){super.init(s,e);const t=this;t.required=this.e.required||s.min&&s.min>0,t.title=u.toTitleCase(s.name),t.icon=s.icon,t.params=t.pl.paramsCopy(),s.kind?this.selected=Number(s.kind):t.required&&t.rows.length>0&&(t.selected=t.rows[0][0]),t.loader=this.loadData()}};class d extends u{static get styles(){return[p(y),v]}static get properties(){return{selectedPayment:String,value:String,payments:Array,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.payments=[],this.rows=[],this.cols=[],this.e=null}updated(e){(e.has("e")||e.has("cols"))&&(this.payments=[...this.rows.map(t=>Object.fromEntries(t.map((r,i)=>[this.cols[i].label,r])))])}getSelectedPayment(e){const t=this.rows.find(r=>r[0]===e.id);t&&(this.selectedPayment={label:t[1],value:t[0]},this.value=this.selectedPayment.value)}isPaymentSelected(e){if(this.selectedPayment)return e.id===this.selectedPayment.value}onPaymentClickHandler(e){this.getSelectedPayment(e)}valid(e){const t=this.shadowRoot.querySelector(".title"),r=this.shadowRoot.querySelectorAll(".selected"),i=this.shadowRoot.querySelector(".check-icon"),l=this.shadowRoot.querySelector("#warning-text");r.forEach(a=>a.classList.add("selected-success")),i.classList.add("check-icon-success"),t.classList.remove("title-danger"),t.classList.add("title-success"),l.style.display="none",setTimeout(()=>{t.classList.remove("title-success"),r.forEach(a=>a.classList.remove("selected-success")),i.classList.remove("check-icon-success")},3e3)}invalid(e){const t=this.shadowRoot.querySelector(".title"),r=this.shadowRoot.querySelector("#warning-text");t.classList.remove("title-success"),t.classList.add("title-danger"),r.style.display="block"}getValue(){return this.value}static get is(){return"payment-selector"}render(){return o`
            <div class="content">
                <div class="column">
                    <h3 class="title is-6">${this.e.name}</h3>
                    <ul class="payment-selector-list">
                        ${this.payments.map(e=>o`
                                <li class="card is-flex ${this.isPaymentSelected(e)?"selected":""}" @click="${()=>this.onPaymentClickHandler(e)}">
                                    <img class="card-image" src="${e.image}"/>
                                    <h4 class="subtitle is-6" style="margin-bottom:0;">${e.name}</h4>
                                    <adaptive-ui-icon icon="check-circle" style="display: ${this.isPaymentSelected(e)?"flex":"none"};" class="check-icon ${this.isPaymentSelected(e)?"selected":""}"></adaptive-ui-icon>
                                </li>
                            `)}
                    </ul>
                    <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
                </div>
            </div>
        `}}customElements.define(d.is,d);const x=s=>{const{element:e,rows:t,cols:r}=s,i=n.useRef(null);return n.useEffect(()=>{i.current&&e&&(i.current.e=e,i.current.rows=t,i.current.cols=r)},[e,t,r]),c.jsx("div",{children:e?c.jsx("payment-selector",{id:"payment-selector",ref:i}):c.jsx("p",{children:"Loading data..."})})},k=g(x);export{k as default};
