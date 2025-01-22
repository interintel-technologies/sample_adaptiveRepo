import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';


export const PaymentsSetupBase = class extends utilsMixin(SerializableElement) {
    static get properties() {
        return {
            value: String,
            params: {type: Object, value: {}},
            type: String,
            loader: Object,
            columnSize: String,
            ColumnOffset: {type: Array},
        };
    }

    constructor(){
        super();
        this.value = undefined;
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        return this.value;
    }

    validate() {
        if (this.e.required && !this.getValue() || this.getValue() === undefined ) {
            return new this.Validation(false, 'invalid');
        }
        
        return new this.Validation(true, 'valid');
    }


    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;
        self.title = PaymentsSetupBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
        this.loader = loader;
    }
};
