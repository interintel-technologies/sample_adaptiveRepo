
import { html, css,unsafeCSS } from 'lit-element';
import { ShoppingCartBtnBase } from '../../base/elements/shopping-cart-btn';
import {ShoppingCartBtnStyles} from './shopping-cart-btn-css';
import globalStyles from '../../App.css?raw'
import { eCommerceStore } from '../../slices/eCommerceSlice';
class ShoppingCartBtn extends ShoppingCartBtnBase {
	static get styles() {
		return [unsafeCSS(globalStyles),ShoppingCartBtnStyles];
	}

	// firstUpdated() {
	// 	this.fetchCart();
	// }

	updated(changedProperties) {
		if (changedProperties.has('e') || changedProperties.has('rows')) {
		  console.log("this is row",this.rows);
		  
		  this.fetchCart();
		  this.loadCartFromStore()
		  }
	}

	loadCartFromStore() {
        const state = eCommerceStore.getState();
        this.cart = state.ecCommerce.cart
        console.log("syyaye is ",this.cart);
        
       
    }

	onShoppingCartBtnClickHandler() {
		this._dialog(this.e.details["view_cart_service"], this.params);
	}

	static get is() {
		return "shopping-cart-btn";
	}

	render() {
		
		const badgeID = this.cart.reduce((count, cartItem) => count + cartItem.quantity, 0)
		return html`
			<div class="cont">
				<div id="cart-dropdown" class="dropdown content">
					<div class="dropdown-trigger" @click=${() => this.onShoppingCartBtnClickHandler()}>
						<adaptive-ui-icon icon="MdShoppingCart" title="cart"></adaptive-ui-icon>
						<div class="cart-badge" aria-hidden="true">${(badgeID < 99) ? badgeID : '99+'}</div>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define(ShoppingCartBtn.is, ShoppingCartBtn);