import {SerializableElement} from '../../core/serializable-element';


export const MsisdnInputBase = class extends SerializableElement {
  constructor() {
    super();
    this.rows = [];
  }

  static get is() {
    return 'msisdn-input';
  }

  static get properties() {
    return {
      params: {type: Object, value: {}},
      type: String,

      columnSize: {type: Array},
    };
  }


  getName() {
    return this.e.formName;
  }

  validate() {
    if ((this.e.required || this.required) && !this.getValue()) {
      return new this.Validation(false, this.e.name + ' is invalid');
    }
    return new this.Validation(true, 'valid');
  }


  valid(validation) {

  }

  invalid(validation) {

  }

  dscDataName() {
    return this.dataName;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    this.loader.then(dsc => {
      self.loading = false;
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    this.required = this.e.required || (pElement.min && pElement.min > 0);
    this.params = this.pl.paramsCopy();
    this.dataName = pElement.defaultValue;
    // Return all country codes
    // DSC defaults to paginating at 50
    this.limit = 500;
    this.loader = this.loadData();
  }
};
