
import { html, css,unsafeCSS } from 'lit-element';
import { PurchaseOrderEditorBase } from '../../base/elements/purchase-order-editor';
import "../cart-editor/cart-editor.js";
import globalStyles from '../../App.css?raw'
class PurchaseOrderEditor extends PurchaseOrderEditorBase{
    static get properties() {
        return {
            cart: Array
        };
    }

    static get styles() {
        return [unsafeCSS(globalStyles)];
    }

    firstUpdated() {
        this.fetchCart();
    }

    onCartUpdatedHandler(e) {
        const key = Object.keys(e.detail)[0];
        if(this.value) {
            const itemIndex = this.value.findIndex(item => item[key] === e.detail[key]);
            const item = this.value[itemIndex];
            if(item) {
                //update quantity of existing
                const tempValue = [...this.value];
            
                item.quantity = e.detail.quantity;
                tempValue.splice(itemIndex, 1, item);

                this.value = [...tempValue];
            }
            else {
                this.value = [...this.value, e.detail];
            }
        }
        else {
            this.value = [e.detail];
        }
        
        this.updateCartItemQuantity(e.detail[key], e.detail.quantity, "cart");
    }

    static get is() {
        return "purchase-order-editor";
    }

    render() {
        return html`
            <div class="content">
                <cart-editor id="cartEditor" .cart=${this.cart} .e=${this.e} .pl=${this.pl} @cartUpdated=${e => this.onCartUpdatedHandler(e)}></cart-editor>
            </div>
        `;
    }
}

customElements.define(PurchaseOrderEditor.is, PurchaseOrderEditor);
