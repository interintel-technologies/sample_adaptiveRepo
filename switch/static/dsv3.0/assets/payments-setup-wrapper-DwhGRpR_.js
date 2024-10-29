import{S as c,i as o,r as u,g as d,k as s,a as r,j as i}from"./index-C2PWchud.js";import{u as p}from"./utils-mixin-D5aAiqNi.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";const l=class extends p(c){static get properties(){return{value:String,params:{type:Object,value:{}},type:String,loader:Object,columnSize:String,ColumnOffset:{type:Array}}}constructor(){super(),this.value=void 0}firstUpdated(t){super.firstUpdated(t)}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(t,e){super.init(t,e);const a=this;a.title=l.toTitleCase(t.name),this.required=t.min&&t.min>0,this.name=t.name,this.loader=e}},m=o`
    .cont {
        border: 0.7px var(--primary-text);
        border-radius: 7px;
        padding: 32px;
        margin: 16px;
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
    .back{
        cursor: pointer; 
        color: var(--primary) !important;
        text-align: center;
    }
    .back:hover {
        color: var(--link) !important;
    }
    #warning-text{
        display:none;
    }
`;class n extends l{static get styles(){return[u(d),m]}constructor(){super(),this.e=null}static get properties(){return{options:Array,e:{type:Object}}}updated(e){e.has("e")&&console.log("this element is ",this.e)}iconSelector(e){switch(e){case"Mipay":return"products:mipay";case"Mpesa":return"mpesa";case"Mastercard":return"mastercard";case"Visa":return"visa";case"PayPal":return"paypal";default:return""}}onSetupBtnClickHandler(e){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.service,params:{selectedPayment:e}},bubbles:!0,composed:!0}))}onNextBtnClickHandler(){this.dispatchEvent(new CustomEvent("submit-form",{}))}static get is(){return"payments-setup"}render(){return s`
			<div class="content">
                <div class="column content cont">
                    <h3 class="label">${this.e.name}</h3>
                    <h4>${this.e.defaultValue}</h4>
                    <hr >
                    <div class="column">
                        ${this.e.details.options.map(e=>s`
                                <div class="level">
                                    <div class="level-left">
                                        <div class="level-item">
                                            ${e.label==="Accept Cash"?s`
                                                    <input type="checkbox"/>
                                                `:s`
                                                    <adaptive-ui-icon icon="${this.iconSelector(e.label)}"></adaptive-ui-icon>
                                                `}
                                        </div>
                                        <div class="level-item">
                                            <div class="content">
                                                <h4>${e.label}</h4>
                                                <p>${e.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            ${e.label==="Accept Cash"?s`
                                                `:s`
                                                    <button class="button" @click=${()=>this.onSetupBtnClickHandler(e.label)}>
                                                        Set up
                                                    </button>
                                                `}
                                        </div>
                                    </div>
                                </div>
                            `)}
                    </div>
                    <div class="level">
                        <h4 class="back">Back</h4>
                        <button class="button" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
                    </div>
                    <p id="warning-text">${this.e.name} required</p>
                </div>
            </div>
        `}}customElements.define(n.is,n);const h=({element:t})=>{const e=r.useRef(null);return r.useEffect(()=>{const a=e.current;a&&t&&(a.e=t)},[t]),i.jsx("div",{children:t?i.jsx("payments-setup",{id:"payments-setup",ref:e}):i.jsx("p",{children:"Loading data..."})})},g=v(h);export{g as default};
