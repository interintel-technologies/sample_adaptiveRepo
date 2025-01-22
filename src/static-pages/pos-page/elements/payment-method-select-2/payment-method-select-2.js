import {html,css, LitElement} from 'lit-element';
import { PaymentMethodSelectStyles2 } from './payment-method-select-2-css';
import cashPng from '../../../../../images/payments/cash.png';
import mpesaPng from '../../../../../images/payments/mpesa.png';
// import tkashPng from '../../../../../../images/payments/tkash.png';
// import airtelPng from '../../../../../../images/payments/airtel.png';
// import visaPng from '../../../../../../images/payments/visa.png';
// import mastercardPng from '../../../../../../images/payments/mastercard.png';
// import cardPng from '../../../../../../images/payments/credit-card.png';
import '../number-pad/number-pad';
import { POSPageMixin } from '../../POSPageMixin';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';


class PaymentMethodSelect2 extends POSPageMixin(ThemeMixin(LitElement)) {
    static get properties() {
        return {
            paymentMethods: Array,
            inputAmount: String,
            selectedPaymentMethodIndex: Number
        }
    }

    constructor() {
        super();
        this.paymentMethods = ["Cash", "Mpesa"];
        this.options = [html`<img src=${cashPng}>`,html`<img src=${mpesaPng}>`];
        this.selectedPaymentMethodIndex = 1;
        this.inputAmount = "";
    }

    static get styles() {
        return [
            super.styles,
            PaymentMethodSelectStyles2,
            css`
                :host() {
                    display: block;
                }
            `
        ];
    }

    firstUpdated() {
        if( this.selectedPaymentMethodIndex ==1){
            const defaultOption=this.qs('#wrapper-'+ 1);
            defaultOption.classList.toggle('is-active');
        }
    }

    onOptionSelect(index){
        this.selectedPaymentMethodIndex = index;
        const allOptions=this.shadowRoot.querySelectorAll('.imgWrapper');
        allOptions.forEach(opt => {
            opt.classList.remove('is-active');
        });

        const selectedOption=this.qs('#wrapper-'+index);
        selectedOption.classList.toggle('is-active');
    }

    onNumberPadInputHandler(e) {
        this.inputAmount = e.detail
    }

    onNumberPadServiceHandler(e) {
        this.inputAmount = e.detail;

        this.makePayment();
    }

    onSTKPushClickHandler(){
        this.makePayment();
    }

    makePayment() {
        this.viewSidePanel("transaction-panel");
        // PopUp.showStatusDialog('in-progress','loading');
        // setTimeout(()=>{
        //     PopUp.showStatusDialog('success', 'success');
        // },7000);
        // setTimeout(() => this.viewSidePanel("transaction-panel"), 8000)
    }

    static get is() {
        return "payment-method-select-2";
    }

    render() {
        return html`
            <div class="content">
                <label><h6>${this.name}</h6></label>
                <div class="columns is-mobile is-multiline">
                    ${
                        this.options.map((option,index)=>html`
                            <div  class="column imgCol is-6-desktop is-6-mobile" @click=${()=>this.onOptionSelect(index)}>
                                <div id="wrapper-${index}" class="p-1 imgWrapper is-flex p-1">
                                    <figure class="image pt-1">
                                        ${option}
                                    </figure>
                                </div>      
                            </div>
                        `)
                    }
                </div>   
                <div class="onHold py-2">
                    <p>Put On Hold</p>
                </div>
                ${
                    this.paymentMethods[this.selectedPaymentMethodIndex]=='Cash'? html`
                        <div class="mt-5 soon">
                            <div class="control">
                                <label class="label">Input Amount</label>
                                <input id="numInput" class="input" type="text" value=${this.inputAmount}>
                            </div>
                            <number-pad .service=${"ENTER"} @number-pad-input=${e => this.onNumberPadInputHandler(e)} @number-pad-service=${e => this.onNumberPadServiceHandler(e)}></number-pad>
                        </div>
                    ` : html`
                        <div class="mt-5 soon">
                            <!-- <label><h6>Coming Soon</h6></label> -->
                            <div class="field">
                                <label class="label">Enter ${this.paymentMethods[this.selectedPaymentMethodIndex]} number</label>
                                <div class="control">
                                    <input class="input" type="tel">
                                </div>
                            </div>
                            <div class="stkBtn btn" @click=${()=>this.onSTKPushClickHandler()}>
                                <p>Send STK Push</p>
                            </div>
                        </div>
                    `
                }
            </div>
        `;
    }
}

customElements.define(PaymentMethodSelect2.is, PaymentMethodSelect2);
