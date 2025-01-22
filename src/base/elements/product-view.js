
import { SerializableElement } from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';
import { ECommerceMixin } from './../../core/mixins/ecommerce-mixin';

export class ProductViewBase extends ECommerceMixin(utilsMixin(SerializableElement)) {

    static get properties() {
        return {
            required: Boolean,
			title: String,
			icon: String,
			params: Object,
			sectionSize: String,
			loader: Function,
            value: Object
        };
    }

    constructor() {
        super();
        this.value = undefined;
    }

    getName() {
        const el = this.e.formName.split('=');
        return el[0];
    }

    getValue() {
        return this.value;
    }

    validate() {
        return new this.Validation(true, 'valid');
    }

    valid(validation) {}

    invalid(validation) {}

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);

        this.required = this.e.required || (pElement.min && pElement.min > 0);
        this.title = ProductViewBase.toTitleCase(pElement.name);
        this.icon = pElement.icon;
        this.params = this.pl.paramsCopy();
        this.sectionSize = pElement.sectionSize;
        this.loader = this.loadData();
    }
}