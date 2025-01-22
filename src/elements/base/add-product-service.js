import { utilsMixin } from './../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';

export class AddProductServiceBase extends utilsMixin(SerializableElement) {
    constructor() {
        super();
        this.value = [];
    }

    static get properties() {
        return {
            value: String
        };
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
        this.title = AddProductServiceBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
    }
}