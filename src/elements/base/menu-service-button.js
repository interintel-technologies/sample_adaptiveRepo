import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const MenuServiceButtonBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'menu-service-button';}
  static get properties() {
    return {
      color: String,
      icon: String,
      name: String,
      params: {type: Object, value: {}},
    };
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    // TODO update to use customEvent
    self.addEventListener('click', function(evt) {
      evt.preventDefault();
      self.pl._dialog(self.e.service, self.params);
    });
  }
  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.title = MenuServiceButtonBase.toTitleCase(pElement.name);
    self.name = MenuServiceButtonBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.color = pElement.kind;
  }
};
