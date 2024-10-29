import{i as o,S as c,r as d,g as u,k as l,a as n,j as a}from"./index-C2PWchud.js";import{u as h}from"./utils-mixin-D5aAiqNi.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const x=o`
    .label {
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
        position: relative;
        top: -5px;
        user-select: none;
    }
    li {
        justify-content: space-between;
        align-items: center;
        margin-bottom:15px;
    }
    #warning-text {
        display:none;
    }
    .subtitle {
        text-align: center;
    }
    .cont {
        flex:1;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 16px;
        height: 16px;
    }
    .title-success {
        color: #23d160;
    }
    .title-danger {
        color: #ff2b56;
    }
    h6 {
        margin: 0 !important;
    }
    @media screen and (max-width: 440px) {
        .subtitle {
            text-align:end;
        }
        .input-cont {
            justify-content: flex-start;
        }
        .label-cont {
            justify-content: flex-end;
        }
        #last-label{
            flex:4;
        }
    }
`;class f extends h(c){constructor(){super()}static get properties(){return{value:String}}getName(){return this.e.formName}getValue(){return this.value}saveValue(){const e=this.shadowRoot.querySelectorAll("input:checked");if(e.length>0){const i=[];e.forEach(t=>i.push(t.value)),this.value=i}else this.value=void 0}validate(){return this.saveValue(),!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"Please select an option above."):new this.Validation(!0,"valid")}valid(e){const i=this.shadowRoot.querySelector(".label"),t=this.shadowRoot.querySelector("#warning-text");i.classList.remove("title-danger"),i.classList.add("title-success"),t.style.display="none",setTimeout(()=>{i.classList.remove("title-success")},3e3)}invalid(e){const i=this.shadowRoot.querySelector(".label"),t=this.shadowRoot.querySelector("#warning-text");i.classList.add("title-danger"),t.innerText=e.validationMessage,t.style.display="block"}dscDataName(){return this.e.defaultValue}firstUpdated(e){super.firstUpdated(e)}}class r extends f{static get styles(){return[d(u),x,o`
                :host {
                    display: block;
                }
            `]}static get properties(){return{deliveryOptions:Array,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.deliveryOptions=[{id:"bike_rider",icon:"motorcycle",label:"Blade Rider"},{id:"van",icon:"bus",label:"Van"},{id:"truck",icon:"truck",label:"Truck"},{id:"air",icon:"plane",label:"Air"},{id:"shipping",icon:"ship",label:"Shipping"},{id:"no_delivery",label:"I don't offer Delivery"}],this.e=null,this.rows=[],this.cols=[]}onCheckBoxClickHandler(e){const i=this.shadowRoot.querySelectorAll("input:checked");e==="no_delivery"?i.forEach(t=>{t.value!=="no_delivery"&&(t.checked=!1)}):i.forEach(t=>{t.value==="no_delivery"&&(t.checked=!1)})}static get is(){return"delivery-checkbox"}render(){return l`
            <div class="content">
                <h5 class="label" style="margin-bottom:0;">${this.e[0]}</h5>
                <ul class="column">
                    ${this.deliveryOptions.map((e,i,t)=>l`
                            ${i+1!==t.length?l`
                                    <li class="is-flex">
                                        <div class="cont input-cont is-flex">
                                            <input type="checkbox" value=${e.id} @click=${()=>this.onCheckBoxClickHandler(e.id)}>
                                        </div>
                                        <div class="cont is-flex">
                                            <span class="icon has-text-primary">
                                                <i class="fa-solid fa-${e.icon}"></i>
                                            </span>
                                        </div>
                                        <div class="cont label-cont is-flex">
                                            <h6>${e.label}</h6>
                                        </div>
                                    </li>
                                `:l`
                                    <li class="is-flex">
                                        <div class="cont input-cont is-flex">
                                            <input type="checkbox" value=${e.id} @click=${()=>this.onCheckBoxClickHandler(e.id)}>
                                        </div>
                                        <div id="last-label" class="cont label-cont is-flex">
                                            <h3 class="subtitle is-6">${e.label}</h3>
                                        </div>
                                        <div class="cont is-flex">
                                        </div>
                                    </li>
                                `}
                        `)}
                </ul>
                <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `}}customElements.define(r.is,r);const v=({element:s,rows:e,cols:i})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&s&&(t.current.e=s,t.current.rows=e,t.current.cols=i)},[s,e,i]),a.jsx(a.Fragment,{children:s&&e&&i?a.jsx("delivery-checkbox",{id:"delivery-checkbox",ref:t}):a.jsx("p",{children:"Loading data..."})})},m=p(v);export{m as default};
