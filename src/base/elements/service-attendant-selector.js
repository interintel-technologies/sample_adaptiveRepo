import { utilsMixin } from '../../core/mixins/utils-mixins-2';
import {SerializableElement} from '../../core/serializable-element';

export const ServiceAttendantSelectorBase = class extends utilsMixin(SerializableElement) {

    static get properties() {
        return {
            required: Boolean,
            value: Number,
            loader: Object,
            params: Object
        };
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        const service = this.shadowRoot.querySelector('#serviceSelect');
        const attendant = this.shadowRoot.querySelector('#attendantSelect');

        this.value = {
            service: service.value,
            attendant: attendant.value
        };

        return this.value;
    }

    validate() {
        if ((this.required) && !this.getValue()) {
            return new this.Validation(false, 'invalid');
        }else{
            return new this.Validation(true, 'valid');
        }
    }
    
    dscDataName() {
        return this.e.defaultValue;
    }
    
    init(pElement, loader) {
        super.init(pElement, loader);

        this.params = loader.pl.paramsCopy();
        this.required = this.e.required || (pElement.min && pElement.min > 0);
        this.loader = this.loadData();
    }
};
