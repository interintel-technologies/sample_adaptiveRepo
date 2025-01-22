import { css, html,unsafeCSS } from 'lit-element';
import { PaymentsSetupBase } from '../../base/elements/payments-setup';
import { PaymentsSetupStyles } from './payments-setup-css';
import globalStyles from '../../App.css?raw'

class PaymentsSetup extends PaymentsSetupBase {

    static get styles () {
        return [unsafeCSS(globalStyles),PaymentsSetupStyles];
    }

    constructor(){
        super();
        this.e = null
      }

    static get properties () {
        return {
            options: Array,
            e: { type: Object },
        };
    }

    updated(changedProperties) {
        if (changedProperties.has('e') ) {
                console.log("this element is ",this.e);
                
       
        
        }
    }

    iconSelector(label) {
        switch(label) {
            case "Mipay" :
                return "products:mipay";
            case "Mpesa":
                return "mpesa";
            case "Mastercard":
                return "mastercard"
            case "Visa":
                return "visa"
            case "PayPal":
                return "paypal"
            default :
                return "";
            break;
        }
    }

    onSetupBtnClickHandler(label) {
        this.dispatchEvent(new CustomEvent('service-call', { 
            detail: { service: this.e.service,params:{selectedPayment:label} },
            bubbles: true,
            composed: true 
        }));
        // this.pl._dialog(this.e.service, {selectedPayment:label});
    }

    onNextBtnClickHandler() {
		// this.pl.submitForm();
        this.dispatchEvent(new CustomEvent('submit-form', {  }));

	}

    static get is() {
        return "payments-setup";
    }

    render() {
        return html`
			<div class="content">
                <div class="column content cont">
                    <h3 class="label">${this.e.name}</h3>
                    <h4>${this.e.defaultValue}</h4>
                    <hr >
                    <div class="column">
                        ${
                            this.e.details.options.map(option => html`
                                <div class="level">
                                    <div class="level-left">
                                        <div class="level-item">
                                            ${
                                                (option.label === "Accept Cash" ? html`
                                                    <input type="checkbox"/>
                                                `: html`
                                                    <adaptive-ui-icon icon="${this.iconSelector(option.label)}"></adaptive-ui-icon>
                                                `)
                                            }
                                        </div>
                                        <div class="level-item">
                                            <div class="content">
                                                <h4>${option.label}</h4>
                                                <p>${option.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            ${
                                                (option.label === "Accept Cash" ? html`
                                                `: html`
                                                    <button class="button" @click=${()=>this.onSetupBtnClickHandler(option.label)}>
                                                        Set up
                                                    </button>
                                                `)
                                            }
                                        </div>
                                    </div>
                                </div>
                            `)
                        }
                    </div>
                    <div class="level">
                        <h4 class="back">Back</h4>
                        <button class="button" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
                    </div>
                    <p id="warning-text">${this.e.name} required</p>
                </div>
            </div>
        `;
    }
}

customElements.define(PaymentsSetup.is,PaymentsSetup);