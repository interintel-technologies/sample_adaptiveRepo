
import { LitElement, html, css } from 'lit-element';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin.js';

class CartPanel extends ThemeMixin(LitElement) {
    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {

        }
    }

    constructor() {
        super();
        import("../../elements/customer-select/customer-select.js");
        import("../../elements/cart-editor-2/cart-editor-2.js");
        import("../../elements/saved-orders/saved-orders.js");
    }
    
    static get is() {
        return "cart-panel";
    }

    render() {
        return html`
            <div class="content">
                <saved-orders></saved-orders>
                <customer-select></customer-select>
                <cart-editor-2 class="mt-4"></cart-editor-2>
            </div>
        `;
    }

}

customElements.define(CartPanel.is, CartPanel);