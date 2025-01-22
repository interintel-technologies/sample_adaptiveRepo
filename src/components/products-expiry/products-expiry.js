
import {css, html,unsafeCSS} from 'lit-element';
import "../date/date.js";
import { ProductsExpiryStyles } from './products-expiry-css';
import { ProductExpiryBase } from '../../base/elements/product-expiry.js';
import globalStyles from '../../App.css?raw'
class ProductsExpiry extends ProductExpiryBase {
    static get styles() {
        return [unsafeCSS(globalStyles),ProductsExpiryStyles];
    }

    static get properties() {
        return {
            products: Array
        };
    }

    constructor() {
        super();

        this.products = [];
    }

    firstUpdated() {
        this.loader.then(() => {
            this.products = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        });
    }

    valid() {
        return this.getValue().forEach(item => {
            this.shadowRoot.querySelector(`#dateInput${item.id}`).setAttribute("validation", JSON.stringify({
                isValid: true,
                validationMessage: ""
            }));
        });
    }
    
    invalid() {
        return this.getValue().forEach(item => {
            const isItemExpired = () => {
                return item.expiryDate ? (new Date().getTime() > new Date(item.expiryDate + "T00:00").getTime() ? true : false) : true
            };
            
            this.shadowRoot.querySelector(`#dateInput${item.id}`).setAttribute("validation", JSON.stringify({
                isValid: (!item.expiryDate || isItemExpired()) ? false : true,
                validationMessage: item.expiryDate ? (isItemExpired() ? "Product Expired" : "") : "Field is empty"
            }));
        });
    }

    static get is() {
        return "products-expiry";
    }

    render() {
        return html`
            <div class="content">
                <h3>${this.e.name}</h3>
                <div class="column cont p-0">
                    <div class="columns head mb-2 m-0">
                        <div class="column">
                            <h4 class="m-0">Product</h4>
                        </div>
                        <div class="column">
                            <h4 class="m-0">Expiry Date</h4>
                        </div>
                    </div>
                    <ul class="m-0">
                        ${
                            this.products.map(product => html`
                                <li class="columns m-0">
                                    <div class="column is-flex is-align-items-center">
                                        <figure class="image is-96x96">
                                            <img src="${product.image ? "/media/" + product.image : "http://via.placeholder.com/640x360"}" alt="${product.name}Image">
                                        </figure>
                                        <h6 class="m-0">${product.name}</h6>
                                    </div>
                                    <div class="column is-flex is-align-items-center">
                                        <date-input id="dateInput${product.id}" style="width: 100%;" .name=${"Pick a date"}></date-input>
                                    </div>
                                </li>
                            `)
                        }
                    </ul>
                </div>
            </div>
        `;
    }

}

customElements.define(ProductsExpiry.is, ProductsExpiry);