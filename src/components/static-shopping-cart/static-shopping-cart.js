import {html,css, unsafeCSS} from 'lit-element';
import '@polymer/paper-icon-button/paper-icon-button';
import {StaticShoppingCartStyles} from './static-shopping-cart-css';
import { StaticShoppingCartBase } from '../../base/elements/static-shopping-cart';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class StaticShoppingCart extends StaticShoppingCartBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles), 
      StaticShoppingCartStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  render() {
    return html`
    
 <div class="shop-wrapper is-mobile-mode">
<div class="section" >
                <!-- Container -->
                <div class="container" >
                    <!-- Cart page -->
                    <div class="columns account-header">
                        <div class="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div class="account-title">
                                <h2>MY CART</h2>                  
                            </div>
                            <!-- Total and checkout -->
                            <div class="cart-summary">
                                <span class="cart-total">
                                    KES ${this._computeTotals(this.cartItems)} <small>${this.cartItems.length} <span>items in cart</span></small>
                                       <span>
                                 <a class="button is-danger is-outlined" @click=${()=>this._removeAllCartItems()} ><span>Clear</span><span><iron-icon icon="icons:delete"></iron-icon></span></a> </span>
                                </span>
                              
                                <button class="button feather-button is-bold primary-button raised" @click=${this._submit}>
                                    CHECKOUT
                                </button>
                            </div>
        
                            <!-- Cart Layout -->
                            <div class="columns is-account-grid is-multiline">
                                            ${this.cartItems.map((cartItem, idx) => html`
                                <!-- Product list -->
                                <div class="column is-12">
                                    <!-- Product -->
                                    <div class="flat-card is-auto cart-card">
                                        <ul class="cart-content">
                                            <li>
                                                <img src="/media/${cartItem.item.image}" alt=${cartItem.item.name}>
                                                <span class="product-info">
                                                    <span>${cartItem.item.name}</span>
                                                    <span>${cartItem.item.kind}</span>
                                                </span>
                                                <span class="product-price">
                                                    <span>Price</span>
                                                    <span>${cartItem.item.currency_code} ${cartItem.item.price}</span>
                                                </span>
        
                                                <span class="product-quantity">
                                                    <span>Qty</span>
                                                    <span class="control">
                                                        <input id="chart_item_${cartItem.item.id}" class="input" type="number" min="1" step="1" value="${cartItem.quantity}" @change=${()=>this._changeQuantity(cartItem.item.id)}>
                                                    </span>
                                                </span>
        
                                                <span class="action">
                                                    <span class="action-link is-like has-simple-popover" data-content="Add to Wishlist" data-placement="top">
                                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart feather-icons"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
                                                    </span>
                                                    <span class="action-link is-remove has-simple-popover" 
                                                        data-content="Remove from Cart" 
                                                        data-placement="top">
                                                        <a @click="${this._removeCartItem}" .cartItem="${cartItem.item.id}">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x feather-icons"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                        </a>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                       `)}
                            </div>
                            <!-- /Cart Layout -->
                        </div>
                    </div>
                    <!-- /Cart page -->
        
              
                </div>
                <!-- /Container -->
            </div>
            
</div>
        
    `;
  }

  // TODO IMPLEMENT OWN LOCAL STORAGE

  constructor() {
    super();
  }

  valid(validation) {}
  invalid(validation) {}


  // todo override kept because of qs
  _changeQuantity(productId) {
    const value = this.shadowRoot.querySelector('#chart_item_'+productId).value;
    const cartItem = this._findCartItem(productId);
    const index = this.cartItems.indexOf(cartItem);


    this.cartItems[index].quantity = value;
    this.cartItems = [...this.cartItems];
    // this.cartItems[index] = cartItem['quantity'] + 1;


    // this.set('cartItems.' + index + '.quantity', cartItem['quantity'] + 1);
    localStorage.setItem('shop-cart', JSON.stringify(this.cartItems));

    this.dispatchEvent(new CustomEvent('change-cart-count', {
      bubbles: true,
      composed: true,
      detail: {},
    }));
  }

  // todo override kept because of qs
  _incrementQuantity(evt) {
    console.log('_incrementQuantity');
    const productId = evt.currentTarget.dataset['product'];
    const cartItem = this._findCartItem(productId);
    const index = this.cartItems.indexOf(cartItem);


    this.cartItems[index].quantity = cartItem['quantity'] + 1;
    this.cartItems = [...this.cartItems];
    // this.cartItems[index] = cartItem['quantity'] + 1;


    // this.set('cartItems.' + index + '.quantity', cartItem['quantity'] + 1);
    localStorage.setItem('shop-cart', JSON.stringify(this.cartItems));

    this.dispatchEvent(new CustomEvent('change-cart-count', {
      bubbles: true,
      composed: true,
      detail: {},
    }));
  }

  // todo override kept because of qs
  _decrementQuantity(evt) {
    console.log('_decrementQuantity');
    const productId = evt.currentTarget.dataset['product'];
    const cartItem = this._findCartItem(productId);
    const index = this.cartItems.indexOf(cartItem);
    if (cartItem['quantity'] > 1) {
      this.cartItems[index].quantity = cartItem['quantity'] - 1;
      this.cartItems = [...this.cartItems];

      localStorage.setItem('shop-cart', JSON.stringify(this.cartItems));
    }

    this.dispatchEvent(new CustomEvent('change-cart-count', {
      bubbles: true,
      composed: true,
      detail: {},
    }));
  }

  // todo override kept because of qs
  _removeCartItem(evt) {
    const product_id = evt.currentTarget.cartItem;
    const cartItem = this._findCartItem(product_id);

    var index = this.cartItems.indexOf(cartItem);

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartItems = [...this.cartItems];
      localStorage.setItem('shop-cart', JSON.stringify(this.cartItems));
    }

    this.dispatchEvent(new CustomEvent('change-cart-count', {
      bubbles: true,
      composed: true,
      detail: {},
    }));
  }
}

customElements.define(StaticShoppingCart.is, StaticShoppingCart);

