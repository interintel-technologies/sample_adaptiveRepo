import { css, html,unsafeCSS } from 'lit-element';
import { PaymentSelectorStyles } from './payment-selector-css';
import { PaymentSelectorBase } from '../../base/elements/payment-selector';
import globalStyles from '../../App.css?raw'

export class PaymentSelector extends PaymentSelectorBase {
    static get styles() {
        return [unsafeCSS(globalStyles), PaymentSelectorStyles];
    }


    static get properties() {
        return {
            selectedPayment:String,
            value:String,
            payments:Array,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        }
    }
    constructor(){
        super();
        this.payments=[];
        this.rows = [];
        this.cols = [];
        this.e = null
    }

  

    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('cols')) {
            this.payments = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
          }
    }

    getSelectedPayment(payment) {
        const o = this.rows.find(row=>row[0] === payment.id);
    
        if (o) {
            this.selectedPayment = {
                'label': o[1],
                'value': o[0],
            };
            this.value=this.selectedPayment.value;
        }
    }

    isPaymentSelected(payment) {
        if(this.selectedPayment){
            return payment.id === this.selectedPayment.value ? true : false ;
        }
    }

    onPaymentClickHandler(payment) {
        this.getSelectedPayment(payment);  
    }

    valid(validation) {
        const title = this.shadowRoot.querySelector('.title');
        const selectedElements=this.shadowRoot.querySelectorAll(".selected");
        const checkIcon =this.shadowRoot.querySelector(".check-icon");
        const warningText =this.shadowRoot.querySelector("#warning-text");
    
        selectedElements.forEach(selectedElement=>selectedElement.classList.add("selected-success"));
        checkIcon.classList.add("check-icon-success");
        title.classList.remove('title-danger');
        title.classList.add('title-success');
        warningText.style.display = 'none';
    
        setTimeout(()=>{
            title.classList.remove('title-success');  
        selectedElements.forEach(selectedElement=>selectedElement.classList.remove("selected-success"));
            checkIcon.classList.remove("check-icon-success");
        }, 3000);
    }
    
    invalid(validation) {
        const title = this.shadowRoot.querySelector('.title');
        const warningText =this.shadowRoot.querySelector("#warning-text");
    
        title.classList.remove('title-success');
        title.classList.add('title-danger');
        warningText.style.display = 'block';
    }

    getValue() {
        return this.value;
    }

    static get is() {
        return "payment-selector";
    }

    render() {
        return html`
            <div class="content">
                <div class="column">
                    <h3 class="title is-6">${this.e.name}</h3>
                    <ul class="payment-selector-list">
                        ${
                            this.payments.map(payment => html`
                                <li class="card is-flex ${this.isPaymentSelected(payment) ? "selected":""}" @click="${()=>this.onPaymentClickHandler(payment)}">
                                    <img class="card-image" src="${payment.image}"/>
                                    <h4 class="subtitle is-6" style="margin-bottom:0;">${payment.name}</h4>
                                    <adaptive-ui-icon icon="check-circle" style="display: ${this.isPaymentSelected(payment) ? "flex":"none"};" class="check-icon ${this.isPaymentSelected(payment) ? "selected":""}"></adaptive-ui-icon>
                                </li>
                            `)
                        }
                    </ul>
                    <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
                </div>
            </div>
        `;
    }
}

customElements.define(PaymentSelector.is,PaymentSelector);