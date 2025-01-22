import { SerializableElement } from '../../core/serializable-element';
import { utilsMixin } from './../../core/mixins/utils-mixin';

export class DeliveryCheckboxBase extends utilsMixin(SerializableElement) {
    constructor() {
        super();
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

    saveValue() {
        const checkedBoxes = this.shadowRoot.querySelectorAll("input:checked");

        if(checkedBoxes.length > 0) {
            const tempValues = [];
            checkedBoxes.forEach(checkedBox => tempValues.push(checkedBox.value));

            this.value = tempValues; 
        }
        else {
            this.value = undefined;
        }
    }

    validate() {
        this.saveValue();
        if (!this.getValue() || this.getValue() === undefined ) {
            return new this.Validation(false, 'Please select an option above.');
        }else{
            return new this.Validation(true, 'valid');
        }
    }

    valid(validation) {
        const title = this.shadowRoot.querySelector('.label');
        const warningText =this.shadowRoot.querySelector("#warning-text");

        title.classList.remove('title-danger');
        title.classList.add("title-success");
        warningText.style.display = 'none';

        setTimeout(()=>{
            title.classList.remove('title-success');
        }, 3000);
    }

    invalid(validation) {
        const title = this.shadowRoot.querySelector('.label');
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
}