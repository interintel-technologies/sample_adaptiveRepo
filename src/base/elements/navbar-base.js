import {BaseElement} from '../../core/base-element';


export const NavbarBase = class extends BaseElement {
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
