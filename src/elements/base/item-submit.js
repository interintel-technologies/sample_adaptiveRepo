import {BaseElement} from '../../core/base-element';


export const ItemSubmitBase = class extends BaseElement {
  static get is() {return 'item-submit';}
  static get properties() {return {
    params: {type: Object, value: {}},
  };}
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.value;
  }

  validate() {
    return this.$.input.validate();
  }
  init(pElement, loader) {
    super.init(pElement, loader);
    this.required = pElement.min && pElement.min > 0;

    /*
         // TODO finish
         let product_config = pElement.elementJson[5];
         let product_config_ar = product_config.split('|');

         let dynamicEl = this.$.input;

         dynamicEl.setAttribute("min", product_config_ar[0]);
         if (product_config_ar[1] && product_config_ar[1] > 0) {
             dynamicEl.setAttribute("value", product_config_ar[1])
         }
         dynamicEl.setAttribute("max", product_config_ar[2]);
         */
  }
};

