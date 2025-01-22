import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const ProductVariantBase = class extends utilsMixin(SerializableElement) {
    constructor() {
        super();
        this.value = {};
    }

    static get properties() {
        return {
            value: String,
        };
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        return this.value;
    }

    validate() {
        if (!this.getValue() || this.getValue() === undefined ) {
            return new this.Validation(false, 'invalid');
        }
        // add 1 for color which is set by default
        const expectedKeysLength = Object.keys(this.e.details).length + 1;

        if (Object.keys(this.value).length < expectedKeysLength) {
            return new this.Validation(false,'Some values are missing! Please make sure to select a value for each variant.');
        }else{
            return new this.Validation(true, 'valid');
        }
    }

    valid(validation) {
        const title = this.shadowRoot.querySelector('.title.is-6');
        const warningText =this.shadowRoot.querySelector("#warning-text");
        const variantTitles = this.shadowRoot.querySelectorAll(".variant-title");
        const selectedVariantValues = this.shadowRoot.querySelectorAll(".selected");

        title.classList.remove('title-danger');
        title.classList.add("title-success");

        variantTitles.forEach(variantTitle => {
            variantTitle.classList.remove("variant-title-danger");
            variantTitle.classList.add("variant-title-success");
        });

        selectedVariantValues.forEach(selectedVariantValue => {
            selectedVariantValue.classList.add("selected-variant-value-success");
        });

        warningText.style.display = 'none';

        setTimeout(()=>{
            title.classList.remove('title-success');
            variantTitles.forEach(variantTitle => {
                variantTitle.classList.remove("variant-title-success");
            });
    
            selectedVariantValues.forEach(selectedVariantValue => {
                selectedVariantValue.classList.remove("selected-variant-value-success");
            });
        }, 3000);
    }

    invalid(validation) {
        const title = this.shadowRoot.querySelector('.title.is-6');
        const warningText =this.shadowRoot.querySelector("#warning-text");

        title.classList.add('title-danger');
        warningText.innerText = validation.validationMessage;
        warningText.style.display = 'block';
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const self = this;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        this.name = pElement.name;
    }
};
