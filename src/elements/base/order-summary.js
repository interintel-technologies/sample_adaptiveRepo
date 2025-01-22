import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';
import { ECommerceMixin } from './../../core/mixins/ecommerce-mixin';
import { utilsMixin } from './../../core/mixins/utils-mixin';

export const OrderSummaryBase = class extends ECommerceMixin(utilsMixin(dataSourceMixin(SerializableElement))) {

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
        this.value = [...this.cart.map(cartItem => ({id: cartItem.id, quantity: cartItem.quantity}))];

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
        this.title = OrderSummaryBase.toTitleCase(pElement.name);
        this.icon = pElement.icon;
        this.params = this.pl.paramsCopy();
        this.sectionSize = pElement.sectionSize;
        this.loader = this.loadData();
    }
};