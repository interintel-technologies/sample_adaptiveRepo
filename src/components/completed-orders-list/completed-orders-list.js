import { html, css, unsafeCSS } from 'lit-element';
import { CompletedOrdersListStyles } from './completed-orders-list-css';
import { CompletedOrdersListBase } from '../../base/elements/completed-orders-list';
import globalStyles from '../../App.css?raw';

import "../text-area/text-area";

class CompletedOrdersList extends CompletedOrdersListBase {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            CompletedOrdersListStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            orders: Array,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }
    
    constructor() {
        super();
        this.orders = [];
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    firstUpdated() {
        this.loadData().then(() => {
            this.orders = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        });
    }

    
	updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            console.log("Updated: rows or cols changed");
            console.log("this.rows:", this.rows);
            console.log("this.cols:", this.cols);
            this.orders = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];


        }
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(price);
    }

    formatDate(date) {
        return new Date(date).toLocaleDateString();
    }

    onInputHandler(value, attribute, id) {
        const returnValueIndex = this.value.findIndex(returnValue => returnValue.id === id);
        let returnObject = {};
        if(returnValueIndex > -1) {
            returnObject = {...this.value[returnValueIndex], [attribute]: value};
        }
        else {
            returnObject = {id: id, [attribute]: value};
        }
        this.value = [...this.value.slice(0, returnValueIndex), returnObject, ...this.value.slice(returnValueIndex + 1)];
    }

    valid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");
        warningText.style.display = 'none';
    }

    invalid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");

        warningText.style.display = 'block';
    }

    toTitleCase(string) {
		if (!string) return '';
		string = string.toString();
		string = string.toLowerCase().split(' ');
		let newString = [];
		for (let i = 0; i < string.length; i++) {
			newString[i] = string[i].substr(0, 1).toUpperCase() + string[i].substr(1);
		}
		return newString.join(' ');
	}

    onReturnItemsBtnClickHandler(index) {
        const returnBtn = this.shadowRoot.querySelector(`#returnBtn${index}`);
        const returnColumn = this.shadowRoot.querySelector(`#returnColumn${index}`);

        returnBtn.style.display = 'none';
        returnColumn.style.display = 'block';
    }

    onCompleteRequestBtnClickHandler(index) {
        const returnBtn = this.shadowRoot.querySelector(`#returnBtn${index}`);
        const returnColumn = this.shadowRoot.querySelector(`#returnColumn${index}`);

        returnBtn.style.display = 'flex';
        returnColumn.style.display = 'none';
    }


    static get is() {
        return "completed-orders-list";
    }

    render() {
        return html`
            <div class="content">
                <ul>
                    ${
                        this.orders.map((order, index) => html`
                        <li>
                        <div class="columns is-multiline">
                            <div class="column is-12-mobile is-12-tablet is-3-desktop">
                                <figure class="image">
                                    <img src="/media/${order.product.image}" alt="${order.product.name} Image">
                                </figure>
                            </div>
                            <div class="column is-12-mobile is-12-tablet is-4-desktop has-text-centered-mobile">
                                <h5>${order.product.name}</h5>
                                ${
                                    Object.entries(order.product).filter(([key, value]) => (key !== "image" && key !== "name")).map(([key, value]) => html`
                                        <p>${this.toTitleCase(key)}: ${key === "price" ? this.formatPrice(value) : value}</p>
                                    `)
                                }
                                <h6>Total: ${this.formatPrice(order.product.quantity * order.product.price)}</h6>
                                <button id="returnBtn${index}" class="button is-fullwidth-mobile" @click=${() => this.onReturnItemsBtnClickHandler(index)}>
                                    Return Item(s)
                                </button>
                            </div>
                            <div class="column is-12-mobile is-12-tablet is-3-desktop has-text-centered-mobile">
                                <h5>Ordered: ${this.formatDate(order.date)}</h5>
                                <h5 id="status">Delivered ${this.formatDate(order.deliveryDate)}</h5>
                            </div>
                        </div>
                        <div id="returnColumn${index}" class="column" style="display: none;">
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <h6>Return Quantity:</h6>
                                </div>
                                <div class="column is-11-mobile is-11-tablet is-11-desktop">
                                    <input id="quantityInput" class="input" type="number" name="quantity"
                                        @input=${e => this.onInputHandler(e.target.value, "quantity", order.id)}
                                    >
                                </div>
                            </div>
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <h6>Reason:</h6>
                                </div>
                                <div class="column is-11-mobile is-11-tablet is-11-desktop">
                                    <input id="reasonInput" class="input" type="text" name="reason"
                                        @input=${e => this.onInputHandler(e.target.value, "reason", order.id)}
                                    >
                                </div>
                            </div>
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <h6>Comments:</h6>
                                </div>
                                <div class="column is-11-mobile is-11-tablet is-11-desktop">
                                    <textarea .propName=${""} .propDefaultValue=${""}
                                        .propMax=${200} @getTextAreaValue=${e => this.onInputHandler(e.detail.textAreaValue, "comments", order.id)}
                                    ></textarea>
                                </div>
                            </div>
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <button class="button is-fullwidth" @click=${e => this.onCompleteRequestBtnClickHandler(index)}>
                                        Complete Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                        `)
                    }
                </ul>
                <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `;
    }
}

customElements.define(CompletedOrdersList.is, CompletedOrdersList);
