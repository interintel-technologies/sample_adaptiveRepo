import {SerializableElement} from '../../core/serializable-element';


export const TimeSlotPickerBase = class extends SerializableElement {
    static get properties() {
        return {
            value: String,
            loader:Object
        };
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

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
        this.loader = this.loadData();
    }
};
