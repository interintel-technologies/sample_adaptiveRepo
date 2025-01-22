import {html, css, unsafeCSS, LitElement} from 'lit-element';
import { TopSellingItemsStyles } from './top-selling-items-css';
import globalStyles from '../../App.css?raw';

class TopSellingItems extends LitElement{
    static get styles(){
        return [
            unsafeCSS(globalStyles),
            TopSellingItemsStyles,
            css` 
                :host{
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            items: Array,
            filters: Object,
            columns: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        };
    }

    constructor() {
        super();
        this.items = [];
        this.filters = {};
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
            this.filters = this.e.details.filters;
            this.items = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];

        }
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(price);
    }

    onSelectChangeHandler(value, key) {
        this.updateParams(key, value);
    }

    static get is() {
        return "top-selling-items";
    }

    render(){
        return html`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-header-title">${this.e.name}</h4>
                            <div class="card-header-icon" aria-label="more options">
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
                            </div>
                        </div>
                        <div class="card-content">
                            <ul class="columns">
                                ${
                                    this.items.map(item => html`
                                        <li class="column">
                                            <div class="column is-flex" title="${item.name}">
                                                <img src="${item.image}" alt="${item.name}"/>
                                                <h5>${item.name}</h5>
                                                <p>${this.formatPrice(item.price)}</p>
                                                <h6>${item.quantity} Psc</h6>
                                            </div>
                                        </li>
                                    `)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define(TopSellingItems.is,TopSellingItems); 