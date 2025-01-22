import { SerializableElement } from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export class RadioGroupBase extends utilsMixin(SerializableElement) {
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
        const checkedRadio = this.shadowRoot.querySelector("input[type='radio']:checked");
        
        if (checkedRadio) {
            this.value = checkedRadio.value;  // Set the selected value
            console.log("Selected value saved:", this.value);
        } else {
            this.value = null;  // No radio button selected
            console.log("No radio button selected.");
        }
    }
    

    validate() {
        this.required = this.e.required;
        console.log("this.required ", this.required);
        
        if (this.required) {
            const inputs = this.shadowRoot.querySelectorAll('input[type="radio"]');
            console.log("inputs are ", inputs);
    
            let isSelected = false;
    
            // Check if any of the radio buttons is selected
            inputs.forEach((input) => {
                if (input.checked) {
                    isSelected = true;
                }
            });
    
            if (!isSelected) {
                // If no radio button is selected, apply the validation error
                inputs.forEach((input) => {
                    input.style.border = '1px solid red'; // Adjust the color as needed
                });
                return new this.Validation(false, 'Please select an option');
            } else {
                // Reset border if validation passes
                inputs.forEach((input) => {
                    input.style.border = '';
                });
                this.saveValue()
                return new this.Validation(true, 'valid');
            }
        }
    
        // Continue with the rest of the validation if not required
        this.saveValue();
        if (!this.getValue() || this.getValue() === undefined) {
            return new this.Validation(false, 'Please select an option above');
        } else {
            return new this.Validation(true, 'valid');
        }
    }
    

    valid(validation) {
        const title = this.shadowRoot.querySelector('.label');
        const warningText =this.shadowRoot.querySelector("#warning-text");
        const checkedRadio = this.shadowRoot.querySelector("input:checked");

        title.classList.remove('title-danger');
        title.classList.add("title-success");
        warningText.style.display = 'none';
        checkedRadio.style.borderColor = "#23d160"

        setTimeout(()=>{
            title.classList.remove('title-success');
            checkedRadio.style.borderColor = "";
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
        this.loader=this.loadData();
    }
}