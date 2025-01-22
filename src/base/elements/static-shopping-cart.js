import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const StaticShoppingCartBase = class extends utilsMixin(SerializableElement) {
  // TODO IMPLEMENT OWN LOCAL STORAGE

  static get is() {
    return 'static-shopping-cart';
  }

  constructor() {
    super();
    this.cartItems = [];

    var retrievedObject = localStorage.getItem('shop-cart');
    if (!retrievedObject) {
      localStorage.setItem('shop-cart', '[]');
    } else {
      this.cartItems = JSON.parse(retrievedObject);
    }
  }

  static get properties() {
    return {
      icon: String,
      target: String,
      data_name: String,
      service: String,
      params: {type: Object, value: {}},
      color: String,


      sums: Object,
      loading: {
        type: Boolean,
        value: false,
      },
      title: String,


      cartItems: {type: Array},

    };
  }

  static get observers() {
    return [
      '_computeQuantity(cartItems.*)',
    ];
  }


  getName() {
    return this.e.formName;
  }

  getValue() {
    if (!this.cartItems) {
      return '';
    }

    const cartItemQuantities = this.cartItems.map((item) => item['item']['id'] + '|' + item.quantity);
    return cartItemQuantities.join(',');
  }

  validate() {
    return true;
  }

  valid() {
    return true;
  }

  static get behaviors() {
    return [];
  }

  _computeTotal(quantity, price) {
    return quantity * price;
  }

  _computeTotals() {
    var self = this;
    if (!this.cartItems) {
      return 0;
    }


    return this.cartItems.reduce(
      function(
        accumulator,
        currentValue,
        currentIndex,
        array
      ) {
        return accumulator + (currentValue.quantity * currentValue['item']['price']);
      }, 0
    );
  }

  _computeQuantity() {
    if (!this.cartItems) {
      return 0;
    }

    this.pl.bind = this.cartItems.reduce(
      function(
        accumulator,
        currentValue,
        currentIndex,
        array
      ) {
        return accumulator + currentValue.quantity;
      }, 0
    );
  }

  _findCartItem(productId) {
    var results = this.cartItems.filter(
      function(item) {
        return item['item']['id'] === parseInt(productId);
      }
    );

    if (results.length) {
      return results[0];
    }

    return undefined;
  }

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

  _incrementQuantity(evt) {
    // console.log('_incrementQuantity');
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

  _decrementQuantity(evt) {
    // console.log('_decrementQuantity');
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
  _removeAllCartItems() {
    if (this.cartItems!==0) {
      this.cartItems = [];
      localStorage.removeItem('shop-cart');
    }
    this.dispatchEvent(new CustomEvent('change-cart-count', {
      bubbles: true,
      composed: true,
      detail: {},
    }));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  _submit() {
    this.dispatchEvent(new CustomEvent('submit-form', { detail: { action: this.action }, bubbles: true,
      composed: true, }));

    // this.pl.submitForm();
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.title = StaticShoppingCartBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
  }
};

