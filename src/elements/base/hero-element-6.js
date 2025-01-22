
    import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
    import {BaseElement} from '../../core/base-element';
    import {utilsMixin} from '../../core/mixins/utils-mixin';

    import {LitElement} from 'lit-element';



    export const HeroElement6Base = class extends LitElement {
        constructor() {
            super();
        }


        static get is() {
            return 'hero-element-6';
        }

        init(pElement, loader) {
            // super.init(pElement, loader);
            var self = this;
        }

    }

    