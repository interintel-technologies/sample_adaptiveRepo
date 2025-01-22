
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';

export const RecaptchaElementBase = class extends utilsMixin(SerializableElement) {

  static get properties() {
    return {
      title: String,
      icon: String,
      required: Boolean,
      params: Object
    };
  }

  getValue() {
    return grecaptcha.execute(this.e.defaultValue, {action: 'submit'}).then(token => token);
  }

  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
    return new this.Validation(true, 'valid');
  }
  
  static get is() {
    return 'recaptcha-element';
  }

  valid(){}
  invalid(){}
  
  init(pElement, loader) {
    super.init(pElement, loader);

    this.required = this.e.required || (pElement.min && pElement.min > 0);
    this.title = RecaptchaElementBase.toTitleCase(pElement.name);
    this.icon = pElement.icon;
    this.params = this.pl.paramsCopy();
  }
};
