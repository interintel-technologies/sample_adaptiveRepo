import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';



export const LoginMipayBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'login-mipay';}
  constructor() {
    super();
    this.addEventListener('click', evt => {
      evt.preventDefault();
      this.pl._dialog(this.e.service, this.params);
    });
  }
  static get properties() {
    return {
      title: String,
      name: String,
      type: String,
      params: {type: Object, value: {}},
    };}
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.type = 'submit';
  }
  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    this.name = pElement.name;
    self.params = loader.pl.paramsCopy();
  }
  _submit() {
    this.pl.submitForm();
  }
};
