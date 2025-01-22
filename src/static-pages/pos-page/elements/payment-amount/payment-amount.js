import {html, css, LitElement} from 'lit-element';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';
import { PaymentAmountStyles } from './payment-amount-css';
import { BANNER } from '../../../../themes/dsv2.0/components/popups/banner-element/banner-element';
import { PopUp } from '../../../../themes/dsv2.0/components/popups/PopUp';
import { POSPageMixin, STATIC_POS_GET_PURCHASE_ORDER_SERVICE } from '../../POSPageMixin';

class PaymentAmount extends POSPageMixin(ThemeMixin(LitElement)) {
    static get styles() {
        return [
            super.styles,
            PaymentAmountStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            reference: String,
            purchase_order_id: String,
            total: Number,
            isLoading: Boolean,
        };
    }

    constructor () {
        super();
        this.total = 0;
        this.isLoading = false;
    }

    firstUpdated(changedProperties){
        super.firstUpdated(changedProperties)
        this.isLoading = true;
        const getPurchaseOrderService = STATIC_POS_GET_PURCHASE_ORDER_SERVICE;
        getPurchaseOrderService.url = getPurchaseOrderService.url + this.reference;
        this.posAPIRequest(getPurchaseOrderService, {session_gateway_profile_id: 2777131}).then(response => {
            this.isLoading = false;
            if(response.isSuccessful) {
                this.total = response.data.amount;
            }
            else {
                const banner = BANNER;
                banner.duration = 2000;
                banner.type = "danger";
                banner.message = response.response;
                PopUp.pushBanner(banner);
            }
        }).catch(err => {
            console.error(err)
            this.isLoading = false;
            this.total = 0
        })
    }

    static get is() {
        return "payment-amount";
    }

    render() {
        return html`
        <div class="payment-amount content">
            <h1 class="payment-title is-size-6">Total Amount to Pay</h1>
            <div class="amount px-3 py-5 is-flex">
                <p class="is-size-5">
                    ${
                        this.isLoading ? html`
                            <p>
                                <span class="icon loader">
                                    <i class="fa-solid fa-spinner"></i>
                                </span> Loading
                            </p>` : html`Ksh ${this.total}
                        `
                    }
                </p>
            </div>
        </div>
        `;
    }
}

customElements.define(PaymentAmount.is, PaymentAmount);