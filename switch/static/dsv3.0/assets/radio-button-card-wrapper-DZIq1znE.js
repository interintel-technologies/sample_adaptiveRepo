import{i as p,r as h,g as u,k as o,a as d,j as n}from"./index-C2PWchud.js";import{R as m}from"./radio-group-BfRkiILg.js";import{w as b}from"./datasource-mixin-DMQBE4lo.js";import"./utils-mixin-D5aAiqNi.js";const v=p`
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 8px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;
    background-color:var(--paper);

}
.card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);

}
.card-header-subtitle{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400 !important;
    padding: 0 1rem;
    cursor:pointer;
}  

h3.label{
       text-align: center;
       }

   

.outlined-input {
    position: relative;
    border:1px solid var(--input-border-color);
    border-radius:20px;
    margin: 2% 0;
    height: 4rem;
    display:flex;
    align-items: center;
}
    

.outlined-input input {
    width:100%;
    border-radius: 5px;
    border: none;
    padding-left: 20px;
    transition: .1s cubic-bezier(.65,.05,.36,1);
    background: var(--white) ;
    outline: var(--white);
    color:var(--black);
    }
    label{
        margin-left:2.5em;
    }
.outlined-input label {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    background-color: var(--white);
    text-align: center;
   transition: .2s cubic-bezier(.65,.05,.36,1);
    pointer-events: none;
    padding: 0 5px;
    text-align:left;
}

.outlined-input input:not(:placeholder-shown) ~ label,
.outlined-input input:focus ~ label {
    top: 0px;
    left: 10px;
    font-size: 75%;
}



.outlined-input input:hover {
    outline: 1px solid var(--main-white);
}

.outlined-input input:focus ~ label {
    color: var(--grey-darker--800--lighten) !important;
    
}

button{
width:100%
}

.is-success{
    border:1px solid#48c78e;
    transition:.3s ease-in-out;
}
    img{
        height: 2.3em;
    }

    #submitBtn{
        background-color:var(--primary);
        color:var(--white-bis);
    }

`;class c extends m{static get styles(){return[h(u),v,p`
                :host {
                    display: block;
                }
            `]}static get properties(){return{radios:{type:Array},phoneNumber:{type:String},amount:{type:String},selectedRadioLabel:{type:String},selectedRadioId:{type:String},selectedRadioOption:{type:String},isFormValid:{type:Boolean},services:{type:Array},service:{type:String},iconArray:{type:String},elementsArray:{type:String},payload:{type:Object},rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.radios=[],this.phoneNumber="",this.amount="",this.selectedRadioLabel="",this.selectedRadioId="",this.selectedRadioOption="",this.isFormValid=!1,this.services=[],this.service="",this.iconArray=[o`<img src="/static/dsv3.0/images/web/mpesa.png">`,o`<img src="/static/dsv3.0/images/web/airtel.png">`,o`<img src="/static/dsv3.0/images/web/visa-mastercard.png">`],this.elementsArray=[],this.payload={},this.rows=[],this.cols=[],this.e=null}updated(e){(e.has("e")||e.has("cols"))&&(this.radios=[...this.rows.map(s=>Object.fromEntries(s.map((i,t)=>[this.cols[t].label,i])))],this.services=this.e.details.services,this.checkSelectedRadio())}connectedCallback(){super.connectedCallback()}checkSelectedRadio(){this.radios.forEach(e=>{e.selected&&(this.shadowRoot.querySelector(`#${e.id}RadioBtn`).checked=!0)})}handleRadioChange(e){const s=this.radios.find(i=>i.name===e.target.value);if(this.selectedRadioLabel=s?s.icon:"",this.selectedRadioId=s?s.id:"",this.selectedRadioOption=s?s.name:"",this.selectedRadioOption=="M-PESA"){const i=this.services.find(t=>t.includes("mpesa"));this.service=i}else if(this.selectedRadioOption=="AIRTEL MONEY"){const i=this.services.find(t=>t.includes("airtel"));this.service=i}else{const i=this.services.find(t=>t.includes("card"));this.service=i}}handleSubmit(e,s){e.preventDefault();const i={payment_method:this.selectedRadioOption},t=document.location;this.protocol=t.protocol,this.hostname=t.hostname,this.port=t.port;let a=this.service==="card-payment"?this.protocol+"//"+this.hostname+"/"+this.service+"/?amount="+s:this.protocol+"//"+this.hostname+"/"+this.service;this.selectedRadioOption!=""&&this.startEvent(a,i)}startEvent(e,s){const i=e,t=window.open(`${i}`,"_blank"),a=setInterval(()=>{t&&!t.closed?t.postMessage({message:"requestResult",data:s},"*"):clearInterval(a)},5e3)}handleResult(e){if(e.data&&e.data.message==="deliverResult"){console.log(e.data),e.source.close();const s=this.qs("#resultDiv");let i="";if(e.data.success){const t=e.data.payload;i="Transaction Successful</b>";for(const a in t)if(a==="response")for(const l in t[a])i+=`Response: <div>${l}: <b>${t[a][l]}</b></div>`;else i+=`<div>${a}: <b>${t[a]}</b></div>`}else i="Transaction Failed</b>";s.innerHTML=i}}static get is(){return"radio-button-card"}render(){return o`
            <div class="">
                <div class="card">
                 
                        <h6 class="card-header-title">${this.e&&this.e.name}</h6>

                        <!-- <div class="field">
                            <div class="control">
                                <div class="outlined-input">
                                    <input 
                                        type="number" 
                                        value="${this.phoneNumber}" 
                                        @input="${this.handlePhoneInputChange}"
                                        name="phoneNumber" 
                                        placeholder=" " 
                                        minlength="5" 
                                        maxlength="45"
                                        required
                                    >
                                    <label for="phoneNumber">Phone number to receive airtime</label>
                                
                                </div>
                            </div>
                           
                        </div>

                        <div class="outlined-input">
                            <input 
                                type="number" 
                                value="${this.amount}" 
                                @input="${this.handleAmountInputChange}"
                                name="amount" 
                                placeholder=" "
                                required
                            >
                            <label for="amount">Amount to pay</label>
                        </div> -->
                        <p class="ml-1 mt-3 card-header-subtitle">Payment Options</p>
                        <div class="column">
                            ${this.radios.map((e,s)=>o`
                                    <label for="${e.icon}RadioBtn" class="is-flex">
                                        <input 
                                            id="${e.icon}RadioBtn RadioBtnInput" 
                                            type="radio" 
                                            name="radio-btn" 
                                            value="${e.name}" 
                                            @change="${this.handleRadioChange}"
                                        >
                                        <div class="column text-clm">
                                            <!-- <adaptive-ui-icon id="${e.icon}" class="icon" icon="icons:${e.icon}" title="${e.name}"></adaptive-ui-icon> -->
                                        ${e.icon==="m-pesa"?this.iconArray[0]:e.icon==="airtel-money"?this.iconArray[1]:e.icon==="card"?this.iconArray[2]:""}
                                        </div>
                                    </label>
                                `)}
                        </div>
                        <!-- <button id="submitBtn"
                            class="button btn-full has-text-weight-bold" 
                            @click="${e=>this.handleSubmit(e)}" 
                            ?disabled="${!this.isFormValid}"
                        >
                            Proceed  ${this.selectedRadioLabel?`with ${this.selectedRadioLabel}`:""}
                        </button> -->
                     
                        <div style="display:none;" id="resultDiv"></div>
             
                </div>
            </div>
        `}}customElements.define(c.is,c);const g=r=>{const{element:e,rows:s,cols:i}=r,t=d.useRef(null);return d.useEffect(()=>{t.current&&e&&(t.current.e=e,t.current.rows=s,t.current.cols=i)},[e,s,i]),n.jsx("div",{children:e?n.jsx("radio-button-card",{id:"radio-button-card",ref:t}):n.jsx("p",{children:"Loading data..."})})},w=b(g);export{w as default};
