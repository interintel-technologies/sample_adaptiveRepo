
import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const LiveChatBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'live-chat';
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
    self.title = LiveChatBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();

  }
};
