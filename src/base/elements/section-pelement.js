
import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../../core/mixins/utils-mixins-2';


export const SectionPElementBase = class extends utilsMixin(BaseElement) {
  static get is() {
    // todo test
    throw new DOMException('Extending [SectionPElementBase] must implement `static get is()`');
  }
 
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }
};
