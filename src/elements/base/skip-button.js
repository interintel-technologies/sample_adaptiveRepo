import {BaseElement} from '../../core/base-element';


export const SkipButtonBase = class extends BaseElement {
  static get is() {return 'skip-button';}
  constructor() {
    super();
  }
  static get properties() {
    return {
      title: String,
      name: String,
      type: String,
      params: {type: Object, value: {}},
    };
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.type = 'skip';
  }

  /**
   * Form Submission
   * this is intended for children
   */
  submit() {
    this.pl.skipForm();
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    // const self = this;
    this.name = pElement.name;
  }
};
