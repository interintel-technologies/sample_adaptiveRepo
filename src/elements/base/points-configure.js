import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import { dataSourceMixin } from '../../core/mixins/datasource-mixin';


export const PointsConfigureBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
    static get properties() {
        return {
            value: String,
            params: {type: Object, value: {}},
            type: String,
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

    isThereAnUndefinedValue() {
        let isThereAnUndefinedValue = false;
        Object.values(this.value).forEach(value => value === undefined ? isThereAnUndefinedValue = true : isThereAnUndefinedValue = false);

        return isThereAnUndefinedValue;
    }

    validate() {
        
        if (this.e.required && this.isThereAnUndefinedValue()) {
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
        self.title = PointsConfigureBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
        this.loader = this.loadData();
    }
};
