import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {adaptiveUiMixin} from '../../core/mixins/adaptiveui-mixin';


import {LitElement} from 'lit-element';



export const Navbar14Base = class extends adaptiveUiMixin(utilsMixin(BaseElement)) {
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
