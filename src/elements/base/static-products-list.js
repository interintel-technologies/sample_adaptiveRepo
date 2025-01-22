import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {BaseElement} from '../../core/base-element';


export const StaticProductsListBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  constructor() {
    super();
    this.selectedProduct = {};
    this.productItems = [];
  }

  static get is() {
    return 'static-products-list';
  }

  static get properties() {
    return {
      icon: String,
      dataName: {type: String, value: ''},
      service: String,
      // q: {type:String,value:''},
      title: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      //
      productItems: {type: Array},
      selectedProduct: {type: Object, value: ''},
      items: {type: Array, value: []},
      params: {type: Object, value: ''},
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

      self.currentGroups = self.groups;


      self.productItems = dsc.data;
      self.currentData = self.data;
      // self.selectedProduct =self.productItems[0];
    });
    // self.selectedProduct ={};
    // self.selectedProduct.image ="";
  }

  static get observers() {
    return [
      '_groupItems(productItems.splices,search,business)',
    ];
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


  _addCartItem(evt) {
    var self = this;

    this.dispatchEvent(new CustomEvent('add-cart-item', {
      bubbles: true,
      composed: true,
      // todo detail: {item: self.currentProduct,quantity:Number(this.$.quantity.value)} // WP
      detail: {item: self.currentProduct, quantity: 1},
    }));
  }


  _shouldFilterInstitutions(items) {
    var b = this._computeBusinesses();
    return (b.length > 0);
  }

  _computeBusinesses(items) {
    var self = this;

    const unique_array = [];
    for (let i = 0; i < self.productItems.length; i++) {
      const business = self.productItems[i]['institution_name'];

      // institution name isn't specified in values
      if (!business) {
        return [];
      }

      if (unique_array.indexOf(business) === -1) {
        unique_array.push(business);
      }
    }
    return unique_array;
  }

  _groupItems() {
    const self = this;

    if (!self.productItems.length) {
      return;
    }

    var items = [];

    var row = new Array();

    for (var i = 0; i < self.productItems.length; i++) {
      var item = self.productItems[i];


      if (self.business) {
        var query = self.business.toLowerCase();
        var name = item['institution_name'].toLowerCase();

        if (query !== name) {
          continue;
        }
      }

      if (self.search) {
        var query = self.search.toLowerCase();
        var name = item['name'].toLowerCase();

        // TODO var barcode = item['barcode'];

        if (name.indexOf(query) !== -1) { // || TODO barcode.indexOf(string) !== -1
          row.push(item);
        }
      } else {
        row.push(item);
      }


      // todo self.productItems.push(item);

      if ((row.length % 4) === 0) {
        items.push(row);
        row = new Array();
      }
    }

    if (row.length) {
      items.push(row);
    }

    self.items = items;
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);

    self.icon = pElement.icon;
    self.title = StaticProductsListBase.toTitleCase(pElement.name);

    self.params = loader.pl.paramsCopy();
    self.service = pElement.service;
    self.variable = pElement.defaultValue;
    self.kind = pElement.kind;
    self.loader = this.loadData();
  }
};
