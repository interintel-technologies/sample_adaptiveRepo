import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const LiveChat2Base = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'live-chat-2';
  }

  static get properties() {
    return {
     
    };
  }

  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
  

  }

  valid(validation) {}
  invalid(validation) {}



  // dscDataName() {
  //   return this.e.defaultValue;
  // }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
  
  }



  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);
    self.title = LiveChat2Base.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();

  }
};
