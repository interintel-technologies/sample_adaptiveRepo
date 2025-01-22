import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


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

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }


  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.title = MarkupElementBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.markup = escape(pElement.defaultValue + pElement.styles);
  }
};

