import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { TopSellingItemsStyles } from './top-selling-products-css';
import globalStyles from '../../App.css?raw';

class TopSellingProducts extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            TopSellingItemsStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            products: Array,
            filters: Object,
            warningLevel: Number,
            columns: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        };
    }

    constructor() {
        super();
        this.products =[];
        this.filters = [];
        this.warningLevel = 10;
        this.columns = [];
        this.rows = [];
        this.e = null; // Default structure
    }



    updated(changedProperties) {
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            console.log("this e is ",this.e);
            
            this.filters = this.e.details.filters;
            this.warningLevel = this.e.details.warningLevel ? this.e.details.warningLevel : this.warningLevel;
            this.products = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.columns[index].label, rowValue])))];
        }
    }
    

    onSelectChangeHandler(value, key) {
        this.updateParams(key, value);
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(price);
    }

    getAvailabilityBackgroundColor(availability) {
        if(availability  > this.warningLevel) {
            return "okay-background";
        }
        else if(availability <= this.warningLevel && availability !== 0) {
            return "warning-background";
        }
        else {
            return "danger-background";
        }
    }

    static get is() {
        return "top-selling-products";
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-header-title">${this.e.name}</h4>
                            <span class="card-header-icon">
                                <div class="filters">
                                    ${
                                        Object.entries(this.filters).map(([key, value]) => html`
                                            <div class="select">
                                                <select @change=${e=>this.onSelectChangeHandler(e.target.value, key)}>
                                                    ${
                                                        value.map(v => html`
                                                            <option>${v}</option>
                                                        `)
                                                    }
                                                </select>
                                            </div>
                                        `)
                                    }
                                </div>
                            </span>
                        </div>
                        <div class="card-content">
                            <div class="columns hdr">
                                <div class="column is-6">
                                    <h4>Product</h4>
                                </div>
                                <div class="column is-3">
                                    <h4>Availability</h4>
                                </div>
                                <div class="column is-3 total">
                                    <h4>Total</h4>
                                </div>
                            </div>
                            ${
                                this.products.length > 0 ? this.products.map(product => html`
                                    <div class="columns item">
                                        <div class="column is-6 product">
                                            <figure class="image is-96x96 ">
                                                <img src=${product.image} alt="${product.name+"Image"}"/>
                                            </figure>
                                            <h5>${product.name}</h5>
                                        </div>
                                        <div class="column is-3 availability">
                                            <div class="availability-background ${this.getAvailabilityBackgroundColor(product.availability)}">
                                                <h5>${product.availability > 0 ? product.availability+" In Stock" : "Out of Stock"}</h5>
                                            </div>
                                        </div>
                                        <div class="column is-3 total">
                                            <h5 >${this.formatPrice(product.total)}</h5>
                                        </div>
                                    </div>
                                `): html``
                            }
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define(TopSellingProducts.is, TopSellingProducts);