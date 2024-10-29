import{i as p,S as h,r as v,g,k as l,a as c,j as r}from"./index-C2PWchud.js";import"./text-input-C-gOlH-_.js";import"./number-input-CfcFoMf9.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";import"./utils-mixins-2-CV_UYnIr.js";import"./InputMixin-CGm-oGk-.js";const b=p`
    .column.is-flex {
        flex-direction: column;
    }
    .buttons {
        justify-content:  flex-end;
       
    }
   .buttons .button{
        border-radius:10px !important; 
        padding-right:3rem !important;
        padding-left:3rem !important;
        font-weight:700 !important;
   }
 #addLineBtn{
        background-color:var(--primary);
    
   }
  
    #total {
        text-align: end;
        color:var(--grey) !important;
    }
    #subtotal{
        color:var(--grey) !important;
    }
    #deleteBtn{
        color:#FF0000 !important;
    }
    #warning-text{
        display:none;
    }
    h4 {
        margin: 0 !important;
    }
    .line {
        padding-right: 20px;
        position: relative;
        border:1px solid var(--grey-dark);
        border-radius:10px;
        margin-top:1.5rem !important;
        margin-left:1rem !important;
        margin-right:1rem !important;
    }
    .mainCol{
        padding:0 0 3rem 0;
    }
    .line:hover>.fas {
        display: block;
    }
    .columns {
        overflow-x: hidden
        /* border-top: 1px solid var(--grey-dark); */
    }
   

    .icon {
        cursor: pointer;
    }
    h6 {
        margin: 0 !important;
    }
  
   

    .totalDiv{
        padding-top:3rem;
        border-top:1px solid black;
        margin-right:2rem;
        margin-left:2rem;
    }
    @media(min-width:768px){
        .subtotalCol{
            margin-top:2rem;
        }
    }
    @media(max-width:768px){
        .line{
            margin-right:0 !important;
            margin-left:0 !important;
        }
        .buttons{
            padding-right:.75rem !important;
        }
        .totalDiv{
            padding-right:.75rem !important;
            margin-right:.75rem;
            margin-left:.75rem;
        }
    }
`;class d extends f(h){constructor(){super(),this.value=[]}static get properties(){return{value:String}}dscDataName(){return this.e.defaultValue}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(i,t){super.init(i,t),this.title=d.toTitleCase(i.name),this.required=i.min&&i.min>0,this.name=i.name}}class m extends d{static get styles(){return[v(g),b,p`
                :host {
                    display: block;
                }
            `]}static get properties(){return{productsServices:Array,e:{type:Object}}}constructor(){super(),this.productsServices=[{description:"",quantity:void 0,unitPrice:void 0,subtotal:0}],this.e=null}firstUpdated(i){super.firstUpdated(i),console.log("element is add product ",this.e)}onInputHandler(i,t,e){const n=i.target.value;this.productsServices=[...this.productsServices.slice(0,t),{...this.productsServices[t],[e]:n},...this.productsServices.slice(t+1)],this.performCalculations()}performCalculations(){let i=0;this.productsServices=[...this.productsServices.map((e,n)=>{if(e.quantity&&e.unitPrice){e.subtotal=e.quantity*e.unitPrice,i=i+e.subtotal;const s=this.shadowRoot.querySelector(`#subtotal${n}`);s&&(s.innerHTML=this.formatToKenyaShillings(e.subtotal))}else{const s=this.shadowRoot.querySelector(`#subtotal${n}`);s&&(s.innerHTML=this.formatToKenyaShillings(0))}return e})];const t=this.shadowRoot.querySelector("#total");t&&(t.innerHTML=this.formatToKenyaShillings(i))}onNewLineClickHandler(){const i={description:"",quantity:void 0,unitPrice:void 0,subtotal:0};this.productsServices=[...this.productsServices,i]}onRemoveIconVisibility(i,t){const e=this.shadowRoot.querySelector("#removeIcon"+i);e&&e.setAttribute("style",`display: ${t?"block":"none"};`)}onRemoveIconClickHandler(i){this.productsServices.splice(i,1),this.productsServices=[...this.productsServices],this.performCalculations()}valid(){const i=this.shadowRoot.querySelector("#warning-text");i&&(i.style.display="none"),this.shadowRoot.querySelectorAll(".input-warning").forEach(e=>e.style.display="none")}invalid(){const i=this.shadowRoot.querySelector("#warning-text");i&&(i.style.display="block")}onSaveAndSendBtnClickHandler(){let i=!1;this.value=[...this.productsServices],this.value.forEach((t,e)=>{const n=this.shadowRoot.querySelector(`#descriptionInput${e}`),s=this.shadowRoot.querySelector(`#quantityInput${e}`),o=this.shadowRoot.querySelector(`#unitPriceInput${e}`);(!t.description||!t.quantity||!t.unitPrice)&&(n&&n.setAttribute("validation",JSON.stringify({isValid:!!t.description,validationMessage:t.description?"":"Field is empty"})),s&&s.setAttribute("validation",JSON.stringify({isValid:!!t.quantity,validationMessage:t.quantity?"":"Field is empty"})),o&&o.setAttribute("validation",JSON.stringify({isValid:!!t.unitPrice,validationMessage:t.unitPrice?"":"Field is empty"})),i=i||!t.description||!t.quantity||!t.unitPrice)}),i||this.submitForm()}static get is(){return"add-product-service"}render(){return l`
            <div class="content">
            <h4>${this.e.name}</h4>
                <div class="buttons">
                    <button id="addLineBtn" class="button is-dark" title="Add Line" @click=${this.onNewLineClickHandler}>+ Add Line</button>
                </div>
               
                <li class="column mainCol">
                ${this.productsServices.map((i,t)=>{const e=`descriptionInput${t}`,n=`quantityInput${t}`,s=`unitPriceInput${t}`,o=`subtotal${t}`;return console.log(`Generated IDs: ${e}, ${n}, ${s}, ${o}`),l`
                    <div class="columns is-multiline line">
                    <div class="column is-12">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-12">    
                            <text-input  id="${e}" name="Description" 
                            @input=${a=>this.onInputHandler(a,t,"description")}
                        ></text-input>
                        
                            </div>
                            <div class="column is-6">
                            <number-input  id="${n}" name="Quantity" 
                            @input=${a=>this.onInputHandler(a,t,"quantity")}
                        ></number-input>
                        
                            </div>
                            <div class="column is-6">
                                <number-input  id="${s}" name="Unit Price" 
                                    @input=${a=>this.onInputHandler(a,t,"unitPrice")}
                                ></number-input>
                            </div>
                        </div>
                    </div>
                    <div class="column is-12">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-8-desktop is-7-tablet is-3-mobile deleteCol" style="display:flex; justify-content:flex-end;">
                                ${t!==0?l`
                                    <span class="icon is-small" id="deleteBtn" title="Remove" @click=${()=>this.onRemoveIconClickHandler(t)}>
                                        <i class="fa fa-trash fa-2x"></i>
                                    </span>
                                `:""}
                            </div>
                            <div class="column is-8-desktop is-7-tablet is-7-mobile subtotalCol"> 
                                <h6 style="text-align: right;" id="${o}">Subtotal:  <span class="bold">KES 0</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                    `})}
                
            </li>
            
                <div class="totalDiv">
                    <h3 id="total">Total  <span class="bold">${this.formatToKenyaShillings(0)}</span></h3>
                </div>
                <div class="buttons">
                    <button id="cancelBtn" name="Cancel" class="button is-danger"  
                        @click=${()=>this.pl.skipForm(this.e.service,this.e.formName,this.e.defaultValue)}
                    >
                        Cancel
                    </button>
                    <button id="saveSendBtn" title="Save & Send" class="button is-success"
                        @click=${this.onSaveAndSendBtnClickHandler}
                    >
                        Save and Send
                    </button>
                </div>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `}}customElements.define(m.is,m);const I=({submitForm:u,element:i})=>{const t=c.useRef(null);return c.useEffect(()=>{t.current&&i&&t.current.e!==i&&(t.current.e=i,t.current.submitForm=u)},[i]),r.jsx(r.Fragment,{children:i?r.jsx("add-product-service",{id:"add-product-service",ref:t}):r.jsx("p",{children:"Loading data..."})})};export{I as default};
