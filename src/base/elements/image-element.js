import {BaseElement} from '../../core/base-element';


export const ImageElementBase = class extends BaseElement {
  static get is() {return 'image-element';}
  static get properties() {return {
    icon: String,
    params: {type: Object, value: {}},
  };}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }
};
