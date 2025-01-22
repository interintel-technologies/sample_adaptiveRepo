import {BaseElement} from '../../core/base-element';
import { dataSourceMixin } from './../../core/mixins/datasource-mixin';
import { adaptiveUiMixin } from './../../core/mixins/adaptiveui-mixin';
import { serviceCallMixin } from './../../core/mixins/servicecall-mixin';

export const Navbar7Base = class extends adaptiveUiMixin(dataSourceMixin(serviceCallMixin(BaseElement))) {
    static get properties() {
        return {
            loader: Object,
        }
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        this.loader = this.loadData();
    }
};
