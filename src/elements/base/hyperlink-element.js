import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const HyperlinkElementBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'hyperlink-element';}

  static get properties() {
    return {
      name: String,
      params: Object,
      type: String,
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.title = HyperlinkElementBase.toTitleCase(pElement.name);
    this.name = HyperlinkElementBase.toTitleCase(pElement.name);

    this.params = loader.pl.paramsCopy();
  }
};
