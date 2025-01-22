
import { html, css, unsafeCSS } from 'lit-element';
import { PaymentMethodSelectStyles } from './payment-method-select-css';
import { PaymentMethodSelectBase } from '../../base/elements/payment-method-select';
import safcomSvg from '../../svgs/airtel.svg';
import telkomSvg from '../../svgs/telkom.svg';
import airtelSvg from '../../svgs/airtel.svg';
import mpesaPng from '../../img/mpesa.png'
import '../cc-input/cc-input';
import '../cvc-input/cvc-input';
import '../cc-expiration/cc-expiration';
import '../text-input/text-input';
import globalStyles from '../../App.css?raw'

class PaymentMethodSelect extends PaymentMethodSelectBase {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            PaymentMethodSelectStyles,
            css`
                :host() {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            paymentMethods: Array,
            selectedPaymentMethod: String,
            currentDate: String,
            expirationDate: String,
            selectedOption: String
        };
    }

    constructor() {
        super();
        
        this.paymentMethods=[
            {"method": "M-Pesa", "options": ["Phone Number","Paybill","Buy Goods"],"image": html`<img src=${safcomSvg}>&ensp; M-Pesa `},
            {"method": "T-Kash", "options": ["Phone Number"],"image":html`<img src=${telkomSvg}>&ensp; TKash`},
            {"method": "Airtel", "options": ["Phone Number"],"image":html`<img src=${airtelSvg}>&ensp; Airtel Money`},
            {"method": "Card", "options": ["Visa","Master"],"image":html`<adaptive-ui-icon icon="icons:credit-card"></adaptive-ui-icon>&ensp; Card`}
        ];
        this.selectedPaymentMethod = this.paymentMethods[0].method;
        this.selectedPaymentOptions=this.paymentMethods[0].options;
        this.selectedOption=this.selectedPaymentOptions[0];
        this.currentDate='';
        this.expirationDate='';
    }

    firstUpdated() {
        // this.paymentMethods = this.e.details.paymentMethods ? [...this.paymentMethods.filter(paymentMethod => this.e.details.paymentMethods.includes(paymentMethod.method))] : this.paymentMethods;
      
        const filteredMethod=this.paymentMethods.filter(paymentMethod=> this.e.details.paymentMethods.method.includes(paymentMethod.method))[0];
        const filteredOptions= filteredMethod.options.filter(fil=>this.e.details.paymentMethods.options.includes(fil));
        const filteredObj={"method":filteredMethod.method,"options":filteredOptions}
     
        this.paymentMethods = this.e.details.paymentMethods ? [filteredObj] : this.paymentMethods;
        this.selectedPaymentMethod=filteredMethod.method;
        this.selectedPaymentOptions=filteredOptions;
        this.selectedOption=this.selectedPaymentOptions[0]
   
        const date=new Date();
		
		const options = {
			year: 'numeric',	
            month: 'numeric',
		};
        
		const currentDate = date.toISOString('en-US', options);
        const dateArr=currentDate.split('-');
        const formattedDate=dateArr[0]+`-`+dateArr[1];

        this.currentDate=formattedDate;

        const expirationDate = new Date();
        expirationDate.setFullYear(date.getFullYear() + 10);
        const formattedExp=expirationDate.toISOString('en-US', options);
        const dateArr2=formattedExp.split('-');
        const formattedDate2=dateArr2[0]+`-`+dateArr2[1];
        this.expirationDate=formattedDate2;
    }

    onDropdownClickHandler() {
        this.shadowRoot.querySelector("#dropdown3").classList.toggle("is-active");
    }
    onOptionsDropdownClickHandler(){
        this.shadowRoot.querySelector("#dropdown4").classList.toggle("is-active");
    }

    valid() {
        if(this.selectedPaymentMethod !== 'Card'){
            this.shadowRoot.querySelector(`input`).classList.remove("is-danger");
            this.shadowRoot.querySelector(`input`).classList.add("is-success");
    
            setTimeout(() => {
                this.shadowRoot.querySelector(`input`).classList.remove("is-success");
            }, 3000);
        }
    }

    invalid() {
        if(this.selectedPaymentMethod !== 'Card'){
            this.shadowRoot.querySelector(`input`).classList.add("is-danger");
            this.shadowRoot.querySelector(`input`).classList.remove("is-success");
        }
    }

    selectCurrentMethod(paymentMethod){
        this.selectedPaymentMethod = paymentMethod.method;
        this.selectedPaymentOptions = paymentMethod.options;

    }
    
    selectCurrentOption(option){
        this.selectedOption=option;
    }

    static get is() {
        return "payment-method-select";
    }

    render() {
        return html`
            <div class="content mx-3">
            
                  
                        <div class="field pb-3">
                            <label class="label">${this.e.name}</label>
                            <div class="control">
                                <div class="dropdown" id="dropdown3" style="width: 100%" @click=${() => this.onDropdownClickHandler()}>
                                    <div class="dropdown-trigger" style="width: 100%">
                                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                            <span>
                                                <span class="icon-text">
                                                    ${this.paymentMethods.find(paymentMethod => paymentMethod.method === this.selectedPaymentMethod).method}
                                                </span>
                                            </span>
                                            <span class="icon is-small">
                                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div class="dropdown-menu" id="dropdown-menu3" style="width: 100%;" role="menu">
                                        <div class="dropdown-content">
                                            ${
                                                this.paymentMethods.map(paymentMethod => html`
                                                    <li href="#" class="dropdown-item" @click=${() => this.selectCurrentMethod(paymentMethod)}>
                                                        <span class="icon-text">${paymentMethod.method}</span>
                                                    </li>
                                                `)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>${this.e.details.message}</p>
                        ${
                            this.selectedPaymentMethod==="M-Pesa"?html`
                                <div id="card2">
                                    <div class="field">
                                        <label class="label">Select ${this.selectedPaymentMethod} Options</label>
                                        <div class="control my-4">
                                            <div class="dropdown" id="dropdown4" style="width: 100%" @click=${() => this.onOptionsDropdownClickHandler()}>
                                                <div class="dropdown-trigger" style="width: 100%">
                                                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                                        <span>
                                                            <span class="icon-text">
                                                                ${this.selectedPaymentOptions.find(paymentOption => paymentOption === this.selectedOption)}
                                                            </span>
                                                        </span>
                                                        <span class="icon is-small">
                                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="dropdown-menu" id="dropdown-menu4" style="width: 100%;" role="menu">
                                                    <div class="dropdown-content">
                                                        ${
                                                            this.selectedPaymentOptions.map(option => html`
                                                                <li href="#" class="dropdown-item" @click=${() => this.selectCurrentOption(option)}>
                                                                    <span class="icon-text">${option}</span>
                                                                </li>
                                                            `)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ${this.selectedOption=='Paybill'?html`                                   
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
                                `:this.selectedOption=='Buy Goods'?html`
                                    <div class="field">
                                        <div class="control my-4">
                                            <label class="label">Enter Till number</label>
                                            <input class="input" id="tillNum" type="number" placeholder="121212">
                                        </div>
                                    </div>
                                `:html`
                                    <div class="field">   
                                        <div class="control my-4">
                                            <label class="label">Enter Phone number</label>
                                            <input class="input" type="tel" placeholder="0712345678">
                                        </div>
                                    </div>
                                `}
                                
                                </div>
                            `:
                            this.selectedPaymentMethod === "Card" ? html`
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
                            `: html`
                        
                                <div class="field">
                                    <label class="label">Enter ${this.selectedPaymentMethod} mobile number</label>
                                    <div class="control">
                                        <input class="input" type="tel" placeholder="0712345678">
                                    </div>
                                </div>  
                            `
                        }
             
            </div>
        `;
    }
}

customElements.define(PaymentMethodSelect.is, PaymentMethodSelect);
