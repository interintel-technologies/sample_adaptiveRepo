
import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const HyperlinkElement2Base = class extends utilsMixin(BaseElement) {
  static get is() {return 'hyperlink-element-2';}

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
    this.title = HyperlinkElement2Base.toTitleCase(pElement.name);
    this.name = HyperlinkElement2Base.toTitleCase(pElement.name);

    this.params = loader.pl.paramsCopy();
  }
};
