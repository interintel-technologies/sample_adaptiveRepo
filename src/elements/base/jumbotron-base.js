import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const JumbotronBase = class extends utilsMixin(BaseElement) {
  static get is() {
    // todo test
    throw new DOMException('Extending [JumbotronBaseBase] must implement `static get is()`');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }
  
};
