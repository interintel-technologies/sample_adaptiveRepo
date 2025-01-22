import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const ShopProductsMenuBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  constructor() {
    super();
    this.currentData = [];
  }


  static get is() {
    return 'shop-products-menu';
  }

  static get properties() {
    return {
      icon: String,
      params: Object,
      title: String,
      variable: String,
      menu_open: Boolean,
    };
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {
      const objs = {};

      for (var d = 0; d < dsc.data.length; d++) {
        var itemT = dsc.data[d];
        if (!objs[itemT['category']]) {
          objs[itemT['category']] = [];
        }

        var toPush = {};
        toPush['name'] = itemT['group'];
        toPush['href'] = itemT['links'];

        objs[itemT['category']].push(toPush);
      }
      self.currentData = self._toArray(objs);
    });
    /* if (!window.matchMedia('screen and (max-width: 768px)').matches) {
            this.qs('.cd-dropdown-trigger').classList.add('dropdown-is-active');
            this.qs('.cd-dropdown').classList.add('dropdown-is-active');
        }*/
  }

  _followLink(evt) {
    //   evt.preventDefault();
    const dataAction = evt.currentTarget.dataLink;
    this.pl._dialog(dataAction.service, dataAction.params);
    // console.log("load service dialog");
    //  window.location = evt.target.href;
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  _toArray(obj) {
    return Object.keys(obj).map(function(key) {
      return {
        name: key,
        value: obj[key],
      };
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;


    self.icon = pElement.icon;
    self.title = ShopProductsMenuBase.toTitleCase(pElement.name);

    self.kind = pElement.kind;
    self.params = loader.pl.paramsCopy();
    self.loader = this.loadData();
  }
};
