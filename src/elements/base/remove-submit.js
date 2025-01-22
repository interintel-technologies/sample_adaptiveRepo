import {BaseElement} from '../../core/base-element';

export const RemoveSubmitBase = class extends BaseElement {
  static get is() {return 'remove-submit';}
  static get properties() {return {
    title: String,
    name: String,
    icon: String,
    params: {type: Object, value: {}},
  };}
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  _inlineSubmit(evt) {
    evt.preventDefault();
    const self = this;
    self.pl.submitForm();
  }
  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;
    self.title = pElement.name;
    self.name = pElement.name;
    self.icon = pElement.icon;
  }
};

