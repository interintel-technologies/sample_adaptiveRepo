import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const ColorInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'color-input';
  }

  static get properties() {
    return {
      title: String,
      icon: String,
      params: {type: Object, value: {}},
      columnSize: {type: Array},
    };
  }

  getName() {
    return this.e.formName;
  }


  validate() {
    if (this.e.required && !this.getValue()) {
      return new this.Validation(false, 'invalid');
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
    self.title = ColorInputBase.toTitleCase(pElement.name);

    this.value = pElement.defaultValue || '#212121';
  }
};
