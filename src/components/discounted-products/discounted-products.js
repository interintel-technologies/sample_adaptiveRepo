
import {html, css, LitElement, unsafeCSS} from 'lit-element';
import { DiscountedProductStyles } from './discounted-products-css';
import globalStyles from '../../App.css?raw';

class DiscountedProducts extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DiscountedProductStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            discountedProducts:Array,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.discountedProducts = [];
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    // firstUpdated(changedProperties) {
    //     super.firstUpdated(changedProperties);

    //     this.loader.then(() => {
    //         this.discountedProducts = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
    //     });
    // }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {

            this.discountedProducts = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];


        }
    }

    onItemClickHandler(id) {

        this.dispatchEvent(new CustomEvent('service-call', { 
            detail: { service: this.e.service, params: {id:id} },
            bubbles: true,
            composed: true 
        }));

        // this.pl._dialog(this.e.service, {id:id});
    } 

    static get is(){
        return 'discounted-products';
    }

    render(){
        return html`
            <div class="columns content" style="margin:0;">
                ${
                    this.discountedProducts.map(product => html`
                        <div class="column">
                            <div class="card" @click=${()=>this.onItemClickHandler(product.id)}>
                                <div class="card-content">
                                    <h5 class="title is-5">Sales Upto ${product.percentage} Discount on ${product.name}</h5>
                                    <button class="button is-primary">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    `)
                }
            </div>
        `;
    }
}

customElements.define(DiscountedProducts.is, DiscountedProducts);
