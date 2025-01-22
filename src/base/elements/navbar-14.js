

import { BaseElement } from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';



export const Navbar14Base = class extends utilsMixin(BaseElement) {
    constructor() {
        super();
    }


    static get is() {
        return 'navbar-14';
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
    }

}
