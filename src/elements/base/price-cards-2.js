import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';

export const PriceCards2Base = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
    static get properties() {
        return {
            value: String,
            params: {type: Object, value: {}},
            type: String,
            columnSize: String,
            ColumnOffset: {type: Array}
        };
    }

    constructor(){
        super();
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    getName() {
        return this.e.formName;
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    getValue() {
        return this.value;
    }

    validate() {
        if (this.e.required && !this.getValue()) {
            return new this.Validation(false, 'invalid');
        }
        
        return new this.Validation(true, 'valid');
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;
        self.title = PriceCards2Base.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
    }
};
