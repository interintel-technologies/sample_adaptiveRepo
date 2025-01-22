import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const ProductSearchBase = class extends utilsMixin( dataSourceMixin(BaseElement)) {
  static get is() {return 'product-search';}
  static get properties() {return {
    icon: String,
    dataName: {type: String, value: ''},
    service: String,
    q: {type: String, value: ''},
    title: String,
    pattern: String,
    required: Boolean,
    rows: {value: []},
    params: {type: Object, value: ''},
    colorType: {type: Array},
  };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {

    });
  }

  _action(evt) {
    const dataAction = evt.currentTarget.dataLink;
    this.pl._dialog(dataAction.service, dataAction.params);
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.required = pElement.min && pElement.min > 0;

    self.title = ProductSearchBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.params;
    self.colorType = ['success', 'secondary', 'warning', 'danger', 'primary'];
    self.loader = this.loadData();
  }
};
