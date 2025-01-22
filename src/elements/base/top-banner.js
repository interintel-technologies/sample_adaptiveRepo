
    import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
    import {BaseElement} from '../../core/base-element';
    import {utilsMixin} from '../../core/mixins/utils-mixin';
    import {SerializableElement} from '../../core/serializable-element';

    import {LitElement} from 'lit-element';



    export const TopBannerBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
        constructor() {
            super();
        }


        static get is() {
            return 'top-banner';
        }

        dscDataName() {
            return this.e.defaultValue;
        }

        init(pElement, loader) {
            super.init(pElement, loader);
            var self = this;
            self.loader = this.loadData();
        }
        

    }

    