import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const BarcodeScannerBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'barcode-scanner';
  }

  static get properties() {
    return {
      params: Object,
      type: String,
      pageType: Object,
      columnSize: Array,
      columnOffset: Array,
    };
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if ( this.required && !this.getValue()) {
      return new this.Validation(false, this.e.name+' is Required');
    }

    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = BarcodeScannerBase.toTitleCase(pElement.name);
    // this.required = pElement.min && pElement.min > 0;
    this.required = this.e.required || (pElement.min && pElement.min > 0);

    this.value = pElement.defaultValue|| '';
  }
};

