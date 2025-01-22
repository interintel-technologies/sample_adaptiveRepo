import '../cc-input/cc-input';
import '../cc-expiration/cc-expiration';
import '../text-input/text-input';

import { html, css, unsafeCSS } from 'lit-element';
import { CheckOutSummaryElementStyles } from './checkout-summary-element-css';
import { CheckOutSummaryElementBase } from '../../base/elements/checkout-summary-element';
import globalStyles from '../../App.css?raw';

class CheckOutSummaryElement extends CheckOutSummaryElementBase{
    static get styles(){
        return [
            unsafeCSS(globalStyles),
            CheckOutSummaryElementStyles,
            css`
                :host {
                    display: block;
                }
            `
        ]
    }

    static get properties() {
        return {
            activeTabIndex: { type: Number },
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.activeTabIndex = 1;
        this.inputValues = [];
        this.e = null; // Initialize `e` to null

    }
    updated(changedProperties) {
        if (changedProperties.has('e')) {
 
                console.log("thisi si ",this.e);
                
           
        }
    }

    changeMethod(id){
        this.activeTabIndex = id;
    }

    handleInput(e, cInputKey){
        console.log("i am handleInput ",e,cInputKey);
        
        const tabTitle = this.e.details.methods.find(method => method.id === this.activeTabIndex).label;
        const inputValue = e.detail.target.value;
        
        // card tab
        if (this.activeTabIndex === 3) {
            this.value = {
                [tabTitle]: {
                    ...this.value[tabTitle],
                    [cInputKey]: inputValue
                }
            };
            
        } else {
            this.value = {
                [tabTitle]: inputValue
            };
        }
    }

    static get is(){
        return 'checkout-summary-element'
    }

    render(){
        return html`
            <div class="checkout-summary-element-container p-3">
                <div class="total-payment mb-6">
                    <p class="has-text-centered mb-5">${this.e.name}</p>
                    <p class="has-text-centered has-text-weight-bold amount is-size-3 p-4">KSH. 3, 480.00</p>
                </div>
                <div class="payment-btns payment-tabs mb-4">
                    <div class="columns is-multiline">
                        ${this.e && this.e.details.methods.map(method => html`
                        <div class="column is-half">
                        <li href="${method.link}" target=${method.link != '' ? "_blank" : ""}
                            class=${this.activeTabIndex === method.id 
                                ? 'has-text-centered has-text-weight-bold p-4 active' 
                                : 'has-text-centered has-text-weight-bold p-4'} 
                            @click=${() => this.changeMethod(method.id)}
                            >${method.label}</li>
                        </div>
                        `)}
                    </div>
                </div>
                <div id="tab-1" class="is-fullwidth ${this.activeTabIndex === 1 ? 'payment-tabs-content active' : 'payment-tabs-content'}">
                    <div class="control">
                        <text-input hint="Payment via Cash" @on-input=${e => this.handleInput(e)}></text-input>
                    </div>
                </div>
                <div id="tab-2" class="is-fullwidth ${this.activeTabIndex === 2 ? 'payment-tabs-content active' : 'payment-tabs-content'}">
                    <div class="control">
                        <text-input hint="Payment via Mpesa" @on-input=${e => this.handleInput(e)}></text-input>
                    </div>
                </div>
                <div id="tab-3" class="is-fullwidth ${this.activeTabIndex === 3 ? 'payment-tabs-content active' : 'payment-tabs-content'}">
                    <div class="field">
                        <div class="column">
                            <cc-input class="mb-3" .name=${'Card Number'} .hint=${'cc input'} .icon=${this.e.icon} @on-input=${e => this.handleInput(e, "cc")}></cc-input>
                            <div class="is-flex">
                                <cc-expiration class="my-4 mr-1" .name=${"Card Expiry"} @on-input=${e => this.handleInput(e, "ccExpiration")}></cc-expiration>
                                <cvc-input class="my-4 ml-1" .name=${'Card Verification Code'} .hint=${'cvc input'} .icon=${this.e.icon} @on-input=${e => this.handleInput(e, "cvc")}></cvc-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-4" class="is-fullwidth ${this.activeTabIndex === 4  ? 'payment-tabs-content active' : 'payment-tabs-content'}">
                    <div class="control">
                        <text-input hint="Payment via Airtel Money" @on-input=${e => this.handleInput(e)}></text-input>
                    </div>
                </div>
                <div id="tab-5" class="is-fullwidth ${this.activeTabIndex === 5 ? 'payment-tabs-content active' : 'payment-tabs-content'}">
                    <div class="control">
                        <text-input hint="Payment via Tkash" @on-input=${e => this.handleInput(e)}></text-input>
                    </div>
                </div>
                <div id="tab-6" class="is-fullwidth ${this.activeTabIndex === 6 ? 'payment-tabs-content active' : 'payment-tabs-content'}">
                    <div>
                        <p>pay via <strong>Mipay</strong></p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define(CheckOutSummaryElement.is, CheckOutSummaryElement);
