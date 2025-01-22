
import { LitElement, html, css } from 'lit-element';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';

class TransactionPanel extends ThemeMixin(LitElement) {
    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {

        }
    }

    firstUpdated() {
        
    }

    constructor() {
        super();
        import("../../elements/transaction-summary/transaction-summary");
        this.summary=JSON.stringify({
            "OrderID": 1232,
            "Payment Type": "Cash",
            "Items Totals": 3480,
            "Amount Tendered": 4000,
            "Change Due": 500,
            "Points Earned": 348
        });
    }
    
    static get is() {
        return "transaction-panel";
    }

    render() {
        return html`
            <div class="content">
                <transaction-summary .summary=${this.summary}></transaction-summary>
            </div>
        `;
    }

}

customElements.define(TransactionPanel.is, TransactionPanel);