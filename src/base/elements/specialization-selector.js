import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import { dataSourceMixin } from './../../core/mixins/datasource-mixin';


export const SpecializationSelectorBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
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
        this.value = [];
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
        if (this.e.required && !this.getValue().length > 0) {
            return new this.Validation(false, 'invalid');
        }

        return new this.Validation(true, 'valid');
    }

    dscDataName() {
        return  localStorage.getItem("businessIndustrySelector");
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;
        self.title = SpecializationSelectorBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
        this.loader = this.loadData();
    }
};