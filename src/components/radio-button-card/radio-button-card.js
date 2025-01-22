import { RadioGroupBase } from '../../base/elements/radio-group';
import { css, html,unsafeCSS } from 'lit-element';
import { RadioGroupStyles } from './radio-button-card-css';
import globalStyles from '../../App.css?raw'

class RadioButtonCard extends RadioGroupBase {

    static get styles () {
        return [
            unsafeCSS(globalStyles),
            RadioGroupStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            radios: { type: Array },
            phoneNumber: { type: String },
            amount: { type: String },
            selectedRadioLabel: { type: String },
            selectedRadioId: { type: String },
            selectedRadioOption:{type: String},
            isFormValid: { type: Boolean },
            services:{ type: Array},
            service:{ type: String},
            iconArray:{type: String},
            elementsArray:{type:String},
            payload: { type: Object },
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },

        };
    }

    constructor() {
        super();
        this.radios = [];
        this.phoneNumber = '';
        this.amount = '';
        this.selectedRadioLabel = '';
        this.selectedRadioId = '';
        this.selectedRadioOption = '';
        this.isFormValid = false;
        this.services=[];
        this.service='';
        this.iconArray=[html`<img src="/static/dsv3.0/images/web/mpesa.png">`,html`<img src="/static/dsv3.0/images/web/airtel.png">`,html`<img src="/static/dsv3.0/images/web/visa-mastercard.png">`];
        this.elementsArray=[];
        this.payload={};
        this.rows = [];
        this.cols = [];
        this.e = null;
    }

    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('cols')) {
            this.radios = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];            
            this.services=this.e.details.services;
            this.checkSelectedRadio();  
        }
    }

    connectedCallback() {
        super.connectedCallback();
    
        // window.addEventListener("message",ev=>{this.handleResult(ev)} );
        // const adaptiveUi = document.querySelector("adaptive-ui");
        // const payload=JSON.parse(adaptiveUi.payloadjson);
        // this.payload=payload;
        // const amount=this.payload['amount'];
        // const template=adaptiveUi.shadowRoot.querySelector(".template").firstChild;
        // const body=template.shadowRoot.querySelector(".body");
        // const formRender=body.querySelector('form-render');
        // const form=formRender.shadowRoot.querySelector("#form"); 
        // const eList=form.querySelector("e-list");
        // const elements = eList.shadowRoot.querySelectorAll("element-loader");
        // const elementsArray = Array.from(elements);
        // const submitElement = elementsArray[elementsArray.length - 1];
    
        //  submitElement.addEventListener("click",ev=>{
        //     this.handleSubmit(ev,amount);
        // })
    }

    checkSelectedRadio() {
        this.radios.forEach(radio => {
            if (radio.selected) {
                this.shadowRoot.querySelector(`#${radio.id}RadioBtn`).checked = true;
            }
        });
    }


    handleRadioChange(event) {
        const selectedRadio = this.radios.find(radio => radio.name === event.target.value);
        this.selectedRadioLabel = selectedRadio ? selectedRadio.icon : '';
        this.selectedRadioId  = selectedRadio ? selectedRadio.id : '';
        this.selectedRadioOption = selectedRadio ? selectedRadio.name : '';
       
        if(this.selectedRadioOption=="M-PESA"){
            const service=this.services.find(service=>service.includes("mpesa"));
            this.service=service;
        }else if(this.selectedRadioOption=="AIRTEL MONEY"){
            const service=this.services.find(service=>service.includes("airtel"));
            this.service=service;
        }else{
            const service=this.services.find(service=>service.includes("card"));
            this.service=service; 
        }
        
    }

    // validateForm() {
    //      this.selectedRadioId==''? this.isFormValid = false :this.isFormValid=true;
    // }

    handleSubmit(e,amount) {
        e.preventDefault();
        //data to be submimtted in window event
        const data = {
            // reference: textInput[0].value,
            // amount: numberInput[0].value,
            payment_method: this.selectedRadioOption
        };
      
        const location = document.location
        this.protocol = location.protocol;
        this.hostname = location.hostname;
        this.port=location.port;

        // let fullUrl = '#/0/1';
        let fullUrl=this.service==='card-payment'?this.protocol+'//'+this.hostname+'/'+this.service+'/?amount='+amount:this.protocol+'//'+this.hostname+'/'+this.service;
        // let fullUrl='http://127.0.0.1:5500/src/themes/dsv2.0/components/elements/radio-button-card/event.html';
      
        if(this.selectedRadioOption!=''){
            this.startEvent(fullUrl,data)
        }
              
    }

    //opens the new tab
    startEvent(fullUrl,data){
        const width = 600;
            const height = 600;
            const left = (window.screen.width / 2) - ((width / 2) + 10);
            const top = (window.screen.height / 2) - ((height / 2) + 50);
            const url = fullUrl;
            const child = window.open(`${url}`, "_blank");
            
            const interval = setInterval(() => {
                if (child && !child.closed) {
                    child.postMessage({ message: "requestResult", data:data }, '*');
                } else {
                    clearInterval(interval);
                }
            }, 5000);
    }

//handles the result from response html file and closes the child on response return
    handleResult(ev) {
        
        if (ev.data && ev.data.message === "deliverResult") {
            console.log(ev.data)
            ev.source.close();
            const resultDiv = this.qs('#resultDiv');
            let divContent = '';

            if (ev.data.success) {
                const payload = ev.data.payload;
                divContent = 'Transaction Successful</b>';

                for (const key in payload) {
                    if (key === 'response') {
                        for (const subKey in payload[key]) {
                            divContent += `Response: <div>${subKey}: <b>${payload[key][subKey]}</b></div>`;
                        }
                    } else {
                        divContent += `<div>${key}: <b>${payload[key]}</b></div>`;
                    }
                }
            } else {
                divContent = 'Transaction Failed</b>';
            }

            resultDiv.innerHTML = divContent;
        }
    }

    static get is() {
        return "radio-button-card";
    }

    render() {
        return html`
            <div class="">
                <div class="card">
                 
                        <h6 class="card-header-title">${this.e && this.e.name}</h6>

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
                            ${
                                this.radios.map((radio,index) => html`
                                    <label for="${radio.icon}RadioBtn" class="is-flex">
                                        <input 
                                            id="${radio.icon}RadioBtn RadioBtnInput" 
                                            type="radio" 
                                            name="radio-btn" 
                                            value="${radio.name}" 
                                            @change="${this.handleRadioChange}"
                                        >
                                        <div class="column text-clm">
                                            <!-- <adaptive-ui-icon id="${radio.icon}" class="icon" icon="icons:${radio.icon}" title="${radio.name}"></adaptive-ui-icon> -->
                                        ${radio.icon==="m-pesa"? this.iconArray[0]:radio.icon==="airtel-money"?this.iconArray[1]:radio.icon==="card"?this.iconArray[2]:``}
                                        </div>
                                    </label>
                                `)
                            }
                        </div>
                        <!-- <button id="submitBtn"
                            class="button btn-full has-text-weight-bold" 
                            @click="${(e)=>this.handleSubmit(e)}" 
                            ?disabled="${!this.isFormValid}"
                        >
                            Proceed  ${this.selectedRadioLabel ? `with ${this.selectedRadioLabel}` : ``}
                        </button> -->
                     
                        <div style="display:none;" id="resultDiv"></div>
             
                </div>
            </div>
        `;
    }
}

customElements.define(RadioButtonCard.is, RadioButtonCard);