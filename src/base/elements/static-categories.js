import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const StaticCategoriesBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  constructor() {
    super();
    this.currentData = [];
  }


  static get is() {
    return 'static-categories';
  }

  static get properties() {
    return {
      icon: String,
      params: {type: Object, value: {}},
      currentData: Array,
      title: String,
      required: Boolean,
      variable: String,
      menu_open: Boolean,
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    this.loader.then(dsc => {
      var objs = {};

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
      this.currentData = this._toArray(objs);
    });
    /* if (!window.matchMedia('screen and (max-width: 768px)').matches) {
            this.shadowRoot.querySelector('.cd-dropdown-trigger').classList.add('dropdown-is-active');
            this.shadowRoot.querySelector('.cd-dropdown').classList.add('dropdown-is-active');
        }*/
  }
  _action(evt) {
    const dataAction = evt.currentTarget.dataLink;
    this.pl._dialog('PRODUCTS', dataAction.params);
    console.log('load service dialog');
  }
  _followLink(evt) {
    const dataAction = evt.currentTarget.dataLink;
    this.pl._dialog(dataAction.service, dataAction.params);
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

    self.required = pElement.required ||(pElement.min && pElement.min > 0);

    self.icon = pElement.icon;
    self.title = StaticCategoriesBase.toTitleCase(pElement.name);
    self.params = loader.pl.paramsCopy();
    self.menu_open = false;
    this.loader = this.loadData();
  }
};
