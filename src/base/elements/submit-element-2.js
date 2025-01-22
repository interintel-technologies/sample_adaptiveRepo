import {BaseElement} from '../../core/base-element';


export const SubmitElement2Base = class extends BaseElement {
  static get is() {return 'submit-element-2';}
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
    this.type = 'submit2';
  }

  /**
   * Form Submission
   * this is intended for children
   */
  submit() {
    this.pl.submitForm();
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    // const self = this;
    this.name = pElement.name;
  }
};
