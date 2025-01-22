import { html, css, LitElement,unsafeCSS } from 'lit-element';
import { OrderDetailsStyles } from './order-details-css';
import globalStyles from '../../App.css?raw';

class OrderDetails extends LitElement {
    
    static get styles() {
        return [unsafeCSS(globalStyles),OrderDetailsStyles];
    }

    static get properties() {
        return {
            order: Array,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        }
    }

    constructor() {
        super();

        this.rows = [];
        this.cols = [];
        this.lines = [];
        this.e = null;
    }


    updated(changedProperties) {
        if (changedProperties.has('rows')  || changedProperties.has('rows'))  {
            this.order = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));
		}}

    
    getRGBA() {
        
        const defaultColor = document.documentElement.style.getPropertyValue('--primary');
        //const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--app-secondary-color');
        const rgba = (hex, a) => {
            const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
            return `rgba(${r},${g},${b},${a})`;
        };
        
        return rgba(defaultColor, 0.16);
    }

    formatKey(key) {
        const unCamelCase = str => {
            return str
                // insert a space between lower & upper
                .replace(/([a-z])([A-Z])/g, '$1 $2')
                // space before last upper in a sequence followed by lower
                .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
                // uppercase the first character
                .replace(/^./, function(str){ return str.toUpperCase(); })
        };
        return unCamelCase(key).toUpperCase();
    }

    static get is() {
        return "order-details";
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <div class="columns">
                        ${
                            this.order ? html`
                                <div class="column">
                                    <figure class="image">
                                        <img src="/media/${this.order.productImage}" alt="${this.order.productName} Image">
                                    </figure>
                                </div>
                                <ul class="column">
                                    <h3>Product Details</h3>
                                    ${
                                        Object.entries(this.order).filter(([key, value]) => key !== "productImage").map(([key, value]) => html`
                                            <li class="columns" style="background: ${this.getRGBA()};">
                                                <div class="column">
                                                    <h5>${this.formatKey(key)}:</h5>
                                                </div>
                                                <div class="column">
                                                    <h5>${value ? value : "-"}</h5>
                                                </div>
                                            </li>
                                        `)
                                    }
                                </ul>
                            ` : ""
                        }
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(OrderDetails.is, OrderDetails);