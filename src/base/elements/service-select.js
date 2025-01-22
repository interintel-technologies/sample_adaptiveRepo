import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';

export const ServiceSelectBase = class extends utilsMixin(SerializableElement) {
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


    validate() {
        if (this.e.required && !this.getValue()) {
            return new this.Validation(false, 'invalid');
        }
        
        return new this.Validation(true, 'valid');
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;
        self.title = ServiceSelectBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
    }
};
