import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const TextFieldBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'text-field';}
  static get properties() {
    return {
      params: {type: Object, value: {}},
      type: String,
      value: String,
      columnSize: {type: Array},
    };
  }


  getName() {
    return this.e.formName;
  }


  validate() {
    if ((this.e.required || this.required) && ! this.getValue() ) {
      return new this.Validation(false, this.e.name+' is Required');
    }
    return new this.Validation(true, 'valid');
  }

  valid(validation) {}
  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = TextFieldBase.toTitleCase(pElement.name);
    this.required = this.e.required|| (pElement.min && pElement.min > 0);

    this.value = pElement.defaultValue || '';
  }
};
