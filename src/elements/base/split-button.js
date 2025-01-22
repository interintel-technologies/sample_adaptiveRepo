import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';


export const SplitButtonBase = class extends utilsMixin(SerializableElement) {
    static get properties() {
        return {
            value: Array,
            params: {type: Object, value: {}},
            type: String,
            columnSize: String,
            ColumnOffset: {type: Array},
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
        return new this.Validation(true, 'valid');
    }

    invalid(validation) {
        // will never happen
    }


    valid(validation) {

    }


    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;
        self.title = SplitButtonBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
    }
};