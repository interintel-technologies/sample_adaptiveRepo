import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const AddRolesBase = class extends utilsMixin(SerializableElement) {
    static get properties() {
        return {
            value: Array,
            params: {type: Object, value: {}},
            type: String,
            columnSize: String,
            ColumnOffset: {type: Array},
            loader:Object
        };
    }

    constructor(){
        super();
        this.value = [undefined];
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

    dscDataName() {
        return this.e.defaultValue;
    }


    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;
        self.title = AddRolesBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
        this.loader = this.loadData();
    }
};
