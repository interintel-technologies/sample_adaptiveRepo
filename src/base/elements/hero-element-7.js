
import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';

import {LitElement} from 'lit-element';



export const HeroElement7Base = class extends utilsMixin(dataSourceMixin(BaseElement)) {
    constructor() {
        super();
    }


    static get is() {
        return 'hero-element-7';
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
    }

}

