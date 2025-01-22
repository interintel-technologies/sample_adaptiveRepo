import { css, html, LitElement,unsafeCSS } from 'lit-element';
import { ProductListStyles } from './product-list-css';
import globalStyles from '../../App.css?raw';

class ProductList extends LitElement {

    static get styles() {
        return [unsafeCSS(globalStyles),ProductListStyles];
      }
    static get properties() {
        return {
            data: { type: Array },
        };
    }

    constructor() {
        super();
        this.items = [];
       
    }

    updated(changedProperties) {
        if (changedProperties.has('data')) {
          if (Array.isArray(this.data)) {
            console.log("data is ",this.data);
          
          } else {
            console.error('data is not an array:', this.data);
          }
        }
     
      }

      get total() {
        return this.data.reduce((sum, item) => sum + (item.Price * item.Qty || 0), 0);
    }

    onBtnClickHandler(service){
        console.log("service dispatched",service)
                this.dispatchEvent(new CustomEvent('service-call', {
                    detail: {  service },
                    bubbles: true,
                    composed: true
        }));
    }

    static get is() {
        return "product-list";
    }

    render() {
        return html`
        <div class="container">
            <p class="mb-2 ml-1">${this.element.name}</p>
            <div class="content px-3">
                <strong>${this.element._0}</strong>
                ${this.data.length === 0 ? html`
                    <div class="empty-message">There are no products.</div>
                ` : html`
                  
                    <div>
                    
                        <table>
                            <!-- Define table headers -->
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th id="quantityHdr">Qty</th>
                                    <th id="subTotalHdr">Subtotal</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="scroll-container py-2">
                            <table>
                                <!-- Define table body -->
                                <tbody class="py-2">
                                ${this.data.map(item => html`
                                        <tr>
                                            <td>${item.Item}</td>
                                            <td>${item.Qty}</td>
                                            <td>${item.Price * item.Qty}</td>
                                        </tr>
                                    `)}
                                   
                                </tbody>
                            </table>
                        </div>
                        <table>
                        <tr class="pt-2">
                        <th></th>
                        <th id="total">Total</th>
                        <th id="totalVal">${this.total}</th>
                        </tr>
                        </table>
                        <div class="pt-5" id="btnDiv">
                            <div class="btn addBtn px-2" @click=${()=>this.onBtnClickHandler(this.element.details.service)}>
                                <adaptive-ui-icon dataColor="var(--primary)" class="mr-3" icon="add"></adaptive-ui-icon>
                                Add Product  to List
                            </div>
                        </div>
                    </div>
                `}
            </div>
        </div>
           
        `;
    }
}

customElements.define('product-list', ProductList);
