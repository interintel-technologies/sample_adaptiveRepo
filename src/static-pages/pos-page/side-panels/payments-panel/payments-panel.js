
import { LitElement, html, css } from 'lit-element';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin.js';

class PaymentsPanel extends ThemeMixin(LitElement) {
    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: block;
                    margin-bottom: 50px;
                }
            `
        ];
    }

    static get properties() {
        return {
            data: Object
        };
    }

    constructor() {
        super();
        import("../../elements/customer-select/customer-select.js");
        import("../../elements/payment-amount/payment-amount.js");
        import("../../elements/payment-method-select-2/payment-method-select-2.js");
    }
    
    static get is() {
        return "payments-panel";
    }

    render() {
        if(typeof this.data === "string") {
            this.data = JSON.parse(this.data);
        }
        return html`
            <div class="content">
                <customer-select></customer-select>
                <payment-amount .purchase_order_id=${this.data.purchase_order_id} .reference=${this.data.reference}></payment-amount>
                <payment-method-select-2></payment-method-select-2>
            </div>
        `;
    }

}

customElements.define(PaymentsPanel.is, PaymentsPanel);