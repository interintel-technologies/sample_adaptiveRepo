import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const StaticPosBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  constructor() {
    super();

    this.productItems = [];
    this.cartItems = [];
    var retrievedObject = localStorage.getItem('pos-cart');
    if (!retrievedObject) {
      localStorage.setItem('pos-cart', '[]');
    } else {
      this.cartItems = JSON.parse(retrievedObject);
    }
  }

  static get is() {
    return 'static-pos';
  }

  static get properties() {
    return {
      icon: String,
      q: {type: String, value: ''},
      title: String,
      pattern: String,
      required: Boolean,
      rows: {value: []},
      productItems: {type: Array, value: []},
      items: {type: Array, value: []},
      params: Object,
      is_pad: Boolean,
      cartItems: {type: Array},
      itemPad: {type: Object},
    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {
      // console.log(dsc);

      self.cols = dsc.cols;
      self.rows = dsc.rows;
      self.q = '';

      self.groups = dsc.groups;
      self.currentGroups = self.groups;

      self.data = dsc.data;
      self.productItems = dsc.data;
      self.currentData = self.data;

      if (Object.keys(self.rows).length > 0) {
        self.dropdownValue = self.rows[0][0];
      }
    });
  }

  getValue() {
    if (!this.cartItems) {
      return '';
    }

    const cartItemQuantities = this.cartItems.map((item) => item['item']['id'] + '|' + item.quantity);
    return cartItemQuantities.join(',');
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

  _removeCartItem(product_id) {
    const cartItem = this._findCartItem(product_id);

    var index = this.cartItems.indexOf(cartItem);

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartItems = [...this.cartItems];
      localStorage.setItem('pos-cart', JSON.stringify(this.cartItems));
    }
  }

  _addProduct(productId) {
    const product = this._findProductItem(productId);
    // console.log(cartItem);
    this.currentProduct = product;

    // todo Update to show product item details in a dialog with quantity input field
    // then remove below
    this._addCartItem(product);
  }

  _addCartItem(item) {
    // console.log(evt.currentTarget.dataset);
    const productId = item['id'];
    console.log('id ' + productId);

    var retrievedObject = localStorage.getItem('pos-cart');
    const items = JSON.parse(retrievedObject);


    let cartItem = this._findInCartItem(items, productId);
    // console.log(cartItem);
    if (cartItem === undefined) {
      cartItem = {
        'item': item,
        'quantity': 1,
      };

      items.push(cartItem);
    } else {
      var index = items.indexOf(cartItem);


      items[index]['quantity'] = Number(items[index]['quantity']) + 1;
      // this.set('cartItems.'+index+'.quantity',Number(cartItem['quantity']) + quantity);
      // this.notifyPath('cartItems.'+index+'.quantity');
      // this.cartItems = this.cartItems.slice();
      // console.log(this.cartItems);
    }

    localStorage.setItem('pos-cart', JSON.stringify(items));
    this.cartItems = items;
  }

  _findInCartItem(items, productId) {
    var results = items.filter(
      function(item) {
        return item['item']['id'] === parseInt(productId);
      }
    );

    if (results.length) {
      return results[0];
    }

    return undefined;
  }

  _findProductItem(productId) {
    var results = this.productItems.filter(
      function(item) {
        // console.log(item);
        return item['id'] === parseInt(productId);
      }
    );
    return results[0];
  }

  _submit() {
    this.pl.submitForm();
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);
    self.title = StaticPosBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();
    self.loader = this.loadData();
  }
};
