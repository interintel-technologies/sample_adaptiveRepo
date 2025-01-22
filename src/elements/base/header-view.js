import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const HeaderViewBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'header-view';}
  static get properties() {
    return {
      icon: String,
      text: String,
      name: String,
      params: {type: Object, value: {}},
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  init(pElement, loader) {
    super.init(pElement, loader);
    this.required = this.e.required|| (pElement.min && pElement.min > 0);
    // this.name =  Text.toTitleCase(pElement.name);
    this.name = HeaderViewBase.toTitleCase(pElement.name);
    this.text = HeaderViewBase.toTitleCase(pElement.defaultValue);
  }
};
