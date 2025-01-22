
import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';

import {LitElement} from 'lit-element';



export const AboutSectionBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
    constructor() {
        super();
    }


    static get is() {
        return 'about-section';
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
    }

}

