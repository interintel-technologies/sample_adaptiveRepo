import { html, css, unsafeCSS } from 'lit-element';
import { OrderSummaryStyles } from './order-summary-css';
import{ OrderSummaryBase} from '../../base/elements/order-summary';
import globalStyles from '../../App.css?raw'
class OrderSummary extends OrderSummaryBase {

    static get styles() {
        return [unsafeCSS(globalStyles),OrderSummaryStyles,
            css`
            :host {
                display: block;
            }
        `
        ];
    }

    static get properties() {
        return {
            details     : Array,
            total       : Number,
            subtotal    : Number,
            discount    : Number,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.details    = [];
        this.total      = 0;
        this.subtotal   = 0;
        this.discount   = 0;
        this.rows = [];
        this.cols = [];
        this.e = null
    }



    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('rows')) {
          console.log('Property "e" or "rows" changed:', this.e, this.rows);
          this.fetchCart(); // Ensure this method uses `this.e`, `this.rows`, etc.
        }
    
        changedProperties.forEach((oldValue, propName) => {
          if (propName === 'cart') {
            this.total = this.cart.reduce((total, cartItem) => total + cartItem.total, 0);
            this.subtotal = this.cart.reduce((subtotal, cartItem) => subtotal + cartItem.subtotal, 0);
            this.discount = this.cart.reduce((discount, cartItem) => discount + cartItem.discount, 0);
          }
        });
      }
    

    static get is() {
        return "order-summary";
    }

    render() {
        return html`
            <div class="content">
                <div class="card">
                    <div class="card-content">
                        <h4>${this.e.name}</h4>
                        <div class="columns">
                            <div class="column">
                                <h5 class="order-title order-title-left">Product</h5>
                                ${this.cart.map(item => html`
                                <span class="">
                                    <p class="order-content order-content-left">${item.name} &emsp; ${this.formatToKenyaShillings(item.price)} x ${item.quantity}</p>
                                </span>
                                `)}
                            </div>
                            <div class="column">
                                <h5 class="order-title order-title-center">Discount</h5>
                                <!-- Discounts -->
                                ${this.cart.map(item => html`
                                <span class="">
                                    <p class="order-content order-content-center">${this.formatToKenyaShillings(item.discount)}</p>
                                </span> 
                                `)}
                            </div>
                            <div class="column">
                                <h5 class="order-title order-title-right" style="text-align: right">Total</h5>
                                ${this.cart.map(item => html`
                                <span class="">
                                    <p class="order-content order-content-right" style="text-align: right">${this.formatToKenyaShillings(item.subtotal)}</p>
                                </span>
                                `)}
                            </div>
                        </div>
                        
                        <hr >
                        <div class="is-flex is-justify-content-space-between">
                            <h6>Subtotal</h6>
                            <h6>${this.formatToKenyaShillings(this.subtotal)}</h6>
                        </div>
                        <div class="is-flex is-justify-content-space-between">
                            <h6>Discount</h6>
                            <h6>${this.formatToKenyaShillings(this.discount)}</h6>
                        </div>
                        <div class="is-flex is-justify-content-space-between">
                            <h6>Total</h6>
                            <h6>${this.formatToKenyaShillings(this.total)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(OrderSummary.is, OrderSummary);
