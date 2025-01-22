
import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export class CompletedOrdersListBase extends utilsMixin(SerializableElement) {
    static get properties() {
        return {
            value: Array
        };
    }

    constructor() {
        super();
        this.value = [];
    }

    dscDataName() {
        return this.e.defaultValue;
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
        this.title = CompletedOrdersListBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
    }
}