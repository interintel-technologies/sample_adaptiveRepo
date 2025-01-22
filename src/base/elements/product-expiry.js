import { SerializableElement } from "../../core/serializable-element";
import { utilsMixin } from "../mixins/utils-mixin";

export const ProductExpiryBase = class extends utilsMixin(SerializableElement) {
    static get properties() {
        return {
            value: Array,
            loader: Promise
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
        return this.products.map(product => {
            const value = this.shadowRoot.querySelector(`#dateInput${product.id}`).value;

            return {id: product.id, expiryDate: value};
        });
    }

    validate() {
        if (this.e.required) {
            let isInvalid;
            this.getValue().forEach(item => {
                if(!item.expiryDate) {
                    isInvalid = true;
                }
                else if(new Date().getTime() > new Date(item.expiryDate + "T00:00").getTime()) {
                    isInvalid = true;
                }
            });
            if(isInvalid) {
                return new this.Validation(false, 'invalid');
            }
        }
        return new this.Validation(true, 'valid');
    }


    init(pElement, loader) {
        super.init(pElement, loader);
        this.title = ProductExpiryBase.toTitleCase(pElement.name);
        this.required = pElement.min && pElement.min > 0;
        this.name = pElement.name;
		this.loader = this.loadData();
    }
}