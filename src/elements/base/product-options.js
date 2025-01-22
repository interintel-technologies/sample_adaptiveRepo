import { utilsMixin } from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';
import { dataSourceMixin } from '../../core/mixins/datasource-mixin';

export class ProductOptionsBase extends utilsMixin(dataSourceMixin(SerializableElement)) {
    
    static get properties() {
        return {
            value: String,
            loader: Promise
        };
    }

    constructor() {
        super();
        this.value = [];
    }
    
    dscDataName() {
        return this.e.defaultValue;
    }

    dataResponseType() {
        return Symbol.for('DATA');
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        return this.finalProductOptions;
    }

    validate() {
        return new this.Validation(true, 'valid');
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
        this.loader = this.loadData();
    }
}