
import {SerializableElement} from '../../core/serializable-element';

export const SelectElementBase = class extends SerializableElement {

    static get properties() {
        return {
            params: {type: Object, value: {}},
            type: String,
            pageType: {type: Object, value: {}},
            columnSize: {type: Array},
            columnOffset: {type: Array},
            e:{type:Object}
        };
    }

    updated(changedProperties) {
        if (changedProperties.has('options')) {
                    console.log("this select ",this);

        }}    

    getName() {
        
        return this.formName;
    }

    validate() {
        if (this.required && !this.value) {
            return new this.Validation(false, this.e.name + ' is Required');
        }
        return new this.Validation(true, 'valid');
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        this.required = this.e.required || (pElement.min && pElement.min > 0);

        this.value = pElement.defaultValue|| '';
    }
};
