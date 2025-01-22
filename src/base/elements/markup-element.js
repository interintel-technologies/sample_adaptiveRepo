

import { BaseElement } from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const MarkupElementBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'markup-element';}

  static get properties() {return {

    icon: String,
    data_name: String,
    color: String,
    title: String,
    maxlength: Number,
    pattern: String,
    required: Boolean,
    markup: String,
  };
  }

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);
  // }

  
  updated(changedProperties) {
    if (changedProperties.has('e')) {
      
      var self = this;

      self.title = MarkupElementBase.toTitleCase(this.e.name);
      self.icon = this.e.icon;
      self.markup = escape(this.e.defaultValue + this.e.styles);
  
    }
}


  // init(pElement, loader) {
  //   super.init(pElement, loader);

  //   var self = this;

  //   self.title = MarkupElementBase.toTitleCase(pElement.name);
  //   self.icon = pElement.icon;
  //   self.markup = escape(pElement.defaultValue + pElement.styles);
  // }
};

