
import { SerializableElement } from '../../core/serializable-element';
import { utilsMixin } from './../../core/mixins/utils-mixin';
import { dataSourceMixin } from './../../core/mixins/datasource-mixin';
import { ECommerceMixin } from './../../core/mixins/ecommerce-mixin';

export class ProductsGrid2Base extends ECommerceMixin(dataSourceMixin(utilsMixin(SerializableElement))) {
    static get properties() {
        return {
            value: Object
        };
    }

    constructor() {
        super();
        this.value = [];
    }

    getName() {
        const el = this.e.formName.split('=');
        return el[0];
    }

    getValue() {
        return this.value;
    }

    validate() {
        if (this.e.required && !this.value || this.value === undefined ) {
        return new this.Validation(false, 'invalid');
        }
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
        this.title = ProductsGrid2Base.toTitleCase(pElement.name);
        this.icon = pElement.icon;
        this.params = this.pl.paramsCopy();
        this.sectionSize = pElement.sectionSize;
        this.loader = this.loadData();
    }
}