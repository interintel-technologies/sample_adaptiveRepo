import{i as d,S as p,r as h,g as m,k as r,a as l,j as a}from"./index-C2PWchud.js";import"./cc-input-YY8ulI_X.js";import"./cc-expiration-ChSI4Afr.js";import"./text-input-C-gOlH-_.js";import{u as v}from"./utils-mixin-D5aAiqNi.js";import"./InputMixin-CGm-oGk-.js";import"./utils-mixins-2-CV_UYnIr.js";const b=d`
.column {
    padding: 0;
}
.total-payment p:first-of-type{
    color: var(--grey-darker);
}
.payment-btns{
    width: 100%;
}
.total-payment .amount{
    border: 2px solid var(--grey-darker);
}
.payment-tabs .column li{
    display: block;
    margin: 4px 5px;
    border: 2px solid var(--primary);
    color: var(--primary);
    cursor: pointer;
    transition: color 300ms ease, transform 300ms ease;
}
.payment-tabs .column li:hover{
    background-color: var(--primary);
    color: #fff;
}
.payment-tabs .column li:active{
    transform: scale(0.8);
}
.payment-tabs .column a.active{
    background: var(--primary);
    color: #fff;
}
.payment-tabs-content{
    display: none;
}
.payment-tabs-content.active {
    display: block;
}
@media screen and (min-width: 769px){

}
`;class s extends v(p){static get properties(){return{required:Boolean,title:String,icon:String,params:Object,sectionSize:String,loader:Function,value:Object}}constructor(){super(),this.value={}}getName(){return this.e.formName.split("=")[0]}getValue(){return this.value}validate(){return this.e.required&&!this.value||this.value===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(t){}invalid(t){}dscDataName(){return this.e.defaultValue}init(t,e){super.init(t,e),this.required=this.e.required||t.min&&t.min>0,this.title=s.toTitleCase(t.name),this.icon=t.icon,this.params=this.pl.paramsCopy(),this.sectionSize=t.sectionSize,this.loader=this.loadData()}}class o extends s{static get styles(){return[h(m),b,d`
                :host {
                    display: block;
                }
            `]}static get properties(){return{activeTabIndex:{type:Number},e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.activeTabIndex=1,this.inputValues=[],this.e=null}updated(t){t.has("e")&&console.log("thisi si ",this.e)}changeMethod(t){this.activeTabIndex=t}handleInput(t,e){console.log("i am handleInput ",t,e);const n=this.e.details.methods.find(u=>u.id===this.activeTabIndex).label,c=t.detail.target.value;this.activeTabIndex===3?this.value={[n]:{...this.value[n],[e]:c}}:this.value={[n]:c}}static get is(){return"checkout-summary-element"}render(){return r`
            <div class="checkout-summary-element-container p-3">
                <div class="total-payment mb-6">
                    <p class="has-text-centered mb-5">${this.e.name}</p>
                    <p class="has-text-centered has-text-weight-bold amount is-size-3 p-4">KSH. 3, 480.00</p>
                </div>
                <div class="payment-btns payment-tabs mb-4">
                    <div class="columns is-multiline">
                        ${this.e&&this.e.details.methods.map(t=>r`
                        <div class="column is-half">
                        <li href="${t.link}" target=${t.link!=""?"_blank":""}
                            class=${this.activeTabIndex===t.id?"has-text-centered has-text-weight-bold p-4 active":"has-text-centered has-text-weight-bold p-4"} 
                            @click=${()=>this.changeMethod(t.id)}
                            >${t.label}</li>
                        </div>
                        `)}
                    </div>
                </div>
                <div id="tab-1" class="is-fullwidth ${this.activeTabIndex===1?"payment-tabs-content active":"payment-tabs-content"}">
                    <div class="control">
                        <text-input hint="Payment via Cash" @on-input=${t=>this.handleInput(t)}></text-input>
                    </div>
                </div>
                <div id="tab-2" class="is-fullwidth ${this.activeTabIndex===2?"payment-tabs-content active":"payment-tabs-content"}">
                    <div class="control">
                        <text-input hint="Payment via Mpesa" @on-input=${t=>this.handleInput(t)}></text-input>
                    </div>
                </div>
                <div id="tab-3" class="is-fullwidth ${this.activeTabIndex===3?"payment-tabs-content active":"payment-tabs-content"}">
                    <div class="field">
                        <div class="column">
                            <cc-input class="mb-3" .name=${"Card Number"} .hint=${"cc input"} .icon=${this.e.icon} @on-input=${t=>this.handleInput(t,"cc")}></cc-input>
                            <div class="is-flex">
                                <cc-expiration class="my-4 mr-1" .name=${"Card Expiry"} @on-input=${t=>this.handleInput(t,"ccExpiration")}></cc-expiration>
                                <cvc-input class="my-4 ml-1" .name=${"Card Verification Code"} .hint=${"cvc input"} .icon=${this.e.icon} @on-input=${t=>this.handleInput(t,"cvc")}></cvc-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-4" class="is-fullwidth ${this.activeTabIndex===4?"payment-tabs-content active":"payment-tabs-content"}">
                    <div class="control">
                        <text-input hint="Payment via Airtel Money" @on-input=${t=>this.handleInput(t)}></text-input>
                    </div>
                </div>
                <div id="tab-5" class="is-fullwidth ${this.activeTabIndex===5?"payment-tabs-content active":"payment-tabs-content"}">
                    <div class="control">
                        <text-input hint="Payment via Tkash" @on-input=${t=>this.handleInput(t)}></text-input>
                    </div>
                </div>
                <div id="tab-6" class="is-fullwidth ${this.activeTabIndex===6?"payment-tabs-content active":"payment-tabs-content"}">
                    <div>
                        <p>pay via <strong>Mipay</strong></p>
                    </div>
                </div>
            </div>
        `}}customElements.define(o.is,o);const T=({element:i})=>{const t=l.useRef(null);return l.useEffect(()=>{t.current&&i&&t.current.e!==i&&(t.current.e=i)},[i]),a.jsx(a.Fragment,{children:i?a.jsx("checkout-summary-element",{id:"checkout-summary-element",ref:t}):a.jsx("p",{children:"Loading data..."})})};export{T as default};
