import{i as v,S as b,r as g,g as w,k as i,a as h,j as o}from"./index-C2PWchud.js";import{a as p,t as S}from"./telkom-C_i13dMP.js";import"./cc-input-YY8ulI_X.js";import"./cvc-input-DMUxRJWu.js";import"./cc-expiration-ChSI4Afr.js";import"./text-input-C-gOlH-_.js";import{w as M}from"./datasource-mixin-DMQBE4lo.js";import"./utils-mixin-D5aAiqNi.js";import"./number-input-CfcFoMf9.js";import"./InputMixin-CGm-oGk-.js";import"./utils-mixins-2-CV_UYnIr.js";const P=v`
    img {
        width: 1.5rem;
        height: 1.5rem;
    }
    .button {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .card{
        box-shadow:none !important;
    }
    #card2{
        padding:1.5em;
        border:1px solid var(--input-border-color) !important;
        border-radius:4px;
    }
    /* #card2 .field label.label{
        color:var(--grey-dark);
        font-weight:400 !important;
    } */
    #card2 .field{
        margin-top:2em;
    }
    .imgHeader{
        display:inline-flex;
    }
    .img{
        width:75px;
        height:40px;
        margin-bottom:.5em;
    }
    .mpesa{
        color:#39B54A;
        font-weight:800;
        font-size:20px;
        font-family:var(--family-sans-serif);
    }
    ::placeholder{
        color:var(--grey) !important;
        font-weight:400 !important;
    }
    .icon-text{
        font-weight:600 !important;
        cursor:pointer !important;
    }
   
`,x=class extends b{static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array},value:String}}getValue(){if(this.selectedPaymentMethod=="M-Pesa")if(this.selectedOption=="Paybill"){const t=this.shadowRoot.querySelector("#accountNum").value,e=this.shadowRoot.querySelector("#paybillNum").value;return{method:this.selectedPaymentMethod,option:this.selectedOption,value:{paybill:e,account:t}}}else if(this.selectedOption=="Buy Goods"){const t=this.shadowRoot.querySelector("#tillNum").value;return{method:this.selectedPaymentMethod,option:this.selectedOption,value:t}}else return{method:this.selectedPaymentMethod,option:this.selectedOption,value:this.shadowRoot.querySelector("input").value};else{if(this.selectedPaymentMethod!="Card")return{method:this.selectedPaymentMethod,value:this.shadowRoot.querySelector("input").value};{const t=this.shadowRoot.querySelector("text-input").value,e=this.shadowRoot.querySelector("cc-input").value,s=this.shadowRoot.querySelector("cc-expiration").value,a=this.shadowRoot.querySelector("cvc-input").value;return{method:this.selectedPaymentMethod,value:{name:t,cc:e,expiry:s,cvc:a}}}}}getName(){return this.e.formName}validate(){if(this.selectedPaymentMethod!="Card")return this.selectedPaymentMethod=="M-Pesa"?this.selectedOption=="Paybill"?this.required&&this.getValue().value.account.length<6?new this.Validation(!1,this.e.name+" is Required"):this.getValue().value.paybill.length<6?new this.Validation(!1,this.e.name+" is Required"):new this.Validation(!0,"valid"):this.selectedOption=="Buy Goods"?this.required&&this.getValue().value.length<6?new this.Validation(!1,this.e.name+" is Required"):new this.Validation(!0,"valid"):this.required&&this.getValue().value.length<10?new this.Validation(!1,this.e.name+" is Required"):new this.Validation(!0,"valid"):this.required&&this.getValue().value.length<10?new this.Validation(!1,this.e.name+" is Required"):new this.Validation(!0,"valid");{const t=this.shadowRoot.querySelector("text-input"),e=this.shadowRoot.querySelector("cc-input"),s=this.shadowRoot.querySelector("cc-expiration"),a=this.shadowRoot.querySelector("cvc-input");return t.value==""||t.value===null||t.value.length===0?(t.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),new this.Validation(!1," Field is empty")):(t.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),e.value==""||e.value===null||e.value.length===0?(e.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),new this.Validation(!1," Field is empty")):(e.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),s.value==""||s.value===null||e.value.length===0?(s.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),new this.Validation(!1," Field is empty")):(s.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),a.value==""||a.value===null||e.value.length===0?(a.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),new this.Validation(!1," Field is empty")):(a.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),new this.Validation(!0,"valid")))))}}firstUpdated(t){super.firstUpdated(t)}init(t,e){super.init(t,e),this.required=this.e.required||t.min&&t.min>0,this.value=t.defaultValue||""}};class m extends x{static get styles(){return[g(w),P,v`
                :host() {
                    display: block;
                }
            `]}static get properties(){return{paymentMethods:Array,selectedPaymentMethod:String,currentDate:String,expirationDate:String,selectedOption:String}}constructor(){super(),this.paymentMethods=[{method:"M-Pesa",options:["Phone Number","Paybill","Buy Goods"],image:i`<img src=${p}>&ensp; M-Pesa `},{method:"T-Kash",options:["Phone Number"],image:i`<img src=${S}>&ensp; TKash`},{method:"Airtel",options:["Phone Number"],image:i`<img src=${p}>&ensp; Airtel Money`},{method:"Card",options:["Visa","Master"],image:i`<adaptive-ui-icon icon="icons:credit-card"></adaptive-ui-icon>&ensp; Card`}],this.selectedPaymentMethod=this.paymentMethods[0].method,this.selectedPaymentOptions=this.paymentMethods[0].options,this.selectedOption=this.selectedPaymentOptions[0],this.currentDate="",this.expirationDate=""}firstUpdated(){const e=this.paymentMethods.filter(l=>this.e.details.paymentMethods.method.includes(l.method))[0],s=e.options.filter(l=>this.e.details.paymentMethods.options.includes(l)),a={method:e.method,options:s};this.paymentMethods=this.e.details.paymentMethods?[a]:this.paymentMethods,this.selectedPaymentMethod=e.method,this.selectedPaymentOptions=s,this.selectedOption=this.selectedPaymentOptions[0];const n=new Date,d={year:"numeric",month:"numeric"},r=n.toISOString("en-US",d).split("-"),y=r[0]+"-"+r[1];this.currentDate=y;const c=new Date;c.setFullYear(n.getFullYear()+10);const u=c.toISOString("en-US",d).split("-"),f=u[0]+"-"+u[1];this.expirationDate=f}onDropdownClickHandler(){this.shadowRoot.querySelector("#dropdown3").classList.toggle("is-active")}onOptionsDropdownClickHandler(){this.shadowRoot.querySelector("#dropdown4").classList.toggle("is-active")}valid(){this.selectedPaymentMethod!=="Card"&&(this.shadowRoot.querySelector("input").classList.remove("is-danger"),this.shadowRoot.querySelector("input").classList.add("is-success"),setTimeout(()=>{this.shadowRoot.querySelector("input").classList.remove("is-success")},3e3))}invalid(){this.selectedPaymentMethod!=="Card"&&(this.shadowRoot.querySelector("input").classList.add("is-danger"),this.shadowRoot.querySelector("input").classList.remove("is-success"))}selectCurrentMethod(e){this.selectedPaymentMethod=e.method,this.selectedPaymentOptions=e.options}selectCurrentOption(e){this.selectedOption=e}static get is(){return"payment-method-select"}render(){return i`
            <div class="content mx-3">
            
                  
                        <div class="field pb-3">
                            <label class="label">${this.e.name}</label>
                            <div class="control">
                                <div class="dropdown" id="dropdown3" style="width: 100%" @click=${()=>this.onDropdownClickHandler()}>
                                    <div class="dropdown-trigger" style="width: 100%">
                                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                            <span>
                                                <span class="icon-text">
                                                    ${this.paymentMethods.find(e=>e.method===this.selectedPaymentMethod).method}
                                                </span>
                                            </span>
                                            <span class="icon is-small">
                                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div class="dropdown-menu" id="dropdown-menu3" style="width: 100%;" role="menu">
                                        <div class="dropdown-content">
                                            ${this.paymentMethods.map(e=>i`
                                                    <li href="#" class="dropdown-item" @click=${()=>this.selectCurrentMethod(e)}>
                                                        <span class="icon-text">${e.method}</span>
                                                    </li>
                                                `)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>${this.e.details.message}</p>
                        ${this.selectedPaymentMethod==="M-Pesa"?i`
                                <div id="card2">
                                    <div class="field">
                                        <label class="label">Select ${this.selectedPaymentMethod} Options</label>
                                        <div class="control my-4">
                                            <div class="dropdown" id="dropdown4" style="width: 100%" @click=${()=>this.onOptionsDropdownClickHandler()}>
                                                <div class="dropdown-trigger" style="width: 100%">
                                                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                                        <span>
                                                            <span class="icon-text">
                                                                ${this.selectedPaymentOptions.find(e=>e===this.selectedOption)}
                                                            </span>
                                                        </span>
                                                        <span class="icon is-small">
                                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="dropdown-menu" id="dropdown-menu4" style="width: 100%;" role="menu">
                                                    <div class="dropdown-content">
                                                        ${this.selectedPaymentOptions.map(e=>i`
                                                                <li href="#" class="dropdown-item" @click=${()=>this.selectCurrentOption(e)}>
                                                                    <span class="icon-text">${e}</span>
                                                                </li>
                                                            `)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ${this.selectedOption=="Paybill"?i`                                   
                                    <div class="field">
                                        <div class="control my-4">
                                            <label class="label">Enter Paybill number</label>
                                            <input class="input" id="paybillNum" type="number" placeholder="121212">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control my-4">
                                            <label class="label">Enter Account number</label>
                                            <input class="input" id="accountNum" type="number" placeholder="121212">
                                        </div>
                                    </div> 
                                `:this.selectedOption=="Buy Goods"?i`
                                    <div class="field">
                                        <div class="control my-4">
                                            <label class="label">Enter Till number</label>
                                            <input class="input" id="tillNum" type="number" placeholder="121212">
                                        </div>
                                    </div>
                                `:i`
                                    <div class="field">   
                                        <div class="control my-4">
                                            <label class="label">Enter Phone number</label>
                                            <input class="input" type="tel" placeholder="0712345678">
                                        </div>
                                    </div>
                                `}
                                
                                </div>
                            `:this.selectedPaymentMethod==="Card"?i`
                                <div class="field">
                                    <label class="label">Name On Card</label>
                                    <text-input></text-input>
                                </div>
                                <div class="field">
                                    <label class="label">Card Number</label>
                                    <cc-input></cc-input>
                                </div>
                                <div class="field">
                                    <label class="label">Expiration Date</label>
                                    <cc-expiration .min=${this.currentDate} .max=${this.expirationDate}></cc-expiration>
                                </div>
                                <div class="field">
                                    <label class="label">CVC</label>
                                    <cvc-input></cvc-input>
                                </div>
                            `:i`
                        
                                <div class="field">
                                    <label class="label">Enter ${this.selectedPaymentMethod} mobile number</label>
                                    <div class="control">
                                        <input class="input" type="tel" placeholder="0712345678">
                                    </div>
                                </div>  
                            `}
             
            </div>
        `}}customElements.define(m.is,m);const O=({element:t})=>{const e=h.useRef(null);return h.useEffect(()=>{const s=e.current;s&&t&&(s.e=t)},[t]),o.jsx("div",{children:t?o.jsx("payment-method-select",{id:"payment-method-select",ref:e}):o.jsx("p",{children:"Loading data..."})})},L=M(O);export{L as default};
