
import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';

export const CategoryInputBase = class extends utilsMixin(SerializableElement){

    static get properties() {
        return {
            params: {type: Object, value: {}},
            type: String,
            pageType: {type: Object, value: {}},
            columnSize: {type: Array},
            columnOffset: {type: Array},
            value: Object
        };
    }

    constructor(){
        super();

        this.value={};
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        this.value = {
            category: this.selectedCategory,
            subCategory: this.selectedSubCategory
        }
		return this.value;
	}

    dscDataName() {
        return this.e.defaultValue;
    }

    validate() {
        this.getValue();
        if (this.required && !this.value.category && !this.value.subCategory) {
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
        this.loader = this.loadData();
    }
};
