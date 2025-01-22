import { LitElement } from 'lit-element';
import {SerializableElement} from '../../core/serializable-element';


export const PaymentMethodSelectBase = class extends SerializableElement {

    static get properties() {
        return {
            params: {type: Object, value: {}},
            type: String,
            columnSize: {type: Array},
            value: String
        };
    }

    getValue() {
        if(this.selectedPaymentMethod=='M-Pesa'){
            if(this.selectedOption=='Paybill'){
                const accountNum=this.shadowRoot.querySelector('#accountNum').value;
                const paybillNum=this.shadowRoot.querySelector('#paybillNum').value;
                return {
                    method: this.selectedPaymentMethod,
                    option: this.selectedOption,
                    value: {'paybill':paybillNum,'account':accountNum}
                };
            }else if(this.selectedOption=='Buy Goods'){
                const tillNum=this.shadowRoot.querySelector('#tillNum').value;
                return {
                    method: this.selectedPaymentMethod,
                    option: this.selectedOption,
                    value: tillNum
                };
            }else{
                return {
                    method: this.selectedPaymentMethod,
                    option: this.selectedOption,
                    value: this.shadowRoot.querySelector(`input`).value
                };
            }
            
        }
        else if( this.selectedPaymentMethod != 'Card'){
            return {
                method: this.selectedPaymentMethod,
                value: this.shadowRoot.querySelector(`input`).value
            };
        }else{
            const textValue=this.shadowRoot.querySelector('text-input').value;
            const ccValue=this.shadowRoot.querySelector('cc-input').value;
            const ccExpValue=this.shadowRoot.querySelector('cc-expiration').value;
            const cvcValue=this.shadowRoot.querySelector('cvc-input').value;
            
            return{
                method: this.selectedPaymentMethod,
                value: {'name':textValue,'cc':ccValue,'expiry':ccExpValue, 'cvc':cvcValue}
            }
        }
       
    }

    getName() {
        return this.e.formName;
    }

    validate() {
     
        if( this.selectedPaymentMethod != 'Card'){
            if(this.selectedPaymentMethod=='M-Pesa'){
                    if(this.selectedOption=='Paybill'){
                        if (this.required && this.getValue().value.account.length < 6 ) {
                            return new this.Validation(false, this.e.name + ' is Required');
                        }else if(this.getValue().value.paybill.length < 6){
                            return new this.Validation(false, this.e.name + ' is Required');
                        }
                        return new this.Validation(true, 'valid');
                    }else if(this.selectedOption=='Buy Goods'){
                        if (this.required && this.getValue().value.length < 6) {
                                return new this.Validation(false, this.e.name + ' is Required');
                            }
                            return new this.Validation(true, 'valid');
                    }
                    else {
                        if (this.required && this.getValue().value.length < 10) {
                            return new this.Validation(false, this.e.name + ' is Required');
                        }
                        return new this.Validation(true, 'valid');
                    }
              
            }else{
                if (this.required && this.getValue().value.length < 10) {
                    return new this.Validation(false, this.e.name + ' is Required');
                }
                return new this.Validation(true, 'valid');
            }

        }
        
        else{
            let errors = false;
            const textInput=this.shadowRoot.querySelector('text-input');
            const ccInput=this.shadowRoot.querySelector('cc-input');
            const ccExpInput=this.shadowRoot.querySelector('cc-expiration');
            const cvcInput=this.shadowRoot.querySelector('cvc-input');
          
            if(textInput.value==''|| textInput.value===null || (textInput.value).length===0){
                textInput.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                return new this.Validation(false, ' Field is empty');
            }else{
                textInput.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
            }

            if(ccInput.value==''|| ccInput.value===null || (ccInput.value).length===0){
                ccInput.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors = true;
                return new this.Validation(false, ' Field is empty');
            }else{
                ccInput.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));
            }

            if(ccExpInput.value==''|| ccExpInput.value===null || (ccInput.value).length===0){
                ccExpInput.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors = true;
                return new this.Validation(false, ' Field is empty');
            }else{
                ccExpInput.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
            }

            if(cvcInput.value==''|| cvcInput.value===null || (ccInput.value).length===0){
                cvcInput.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors = true;
                return new this.Validation(false, ' Field is empty');
            }else{
                cvcInput.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));
            }

            return new this.Validation(true, 'valid');
         
        }
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }


    init(pElement, loader) {
        super.init(pElement, loader);
        // this.required = pElement.min && pElement.min > 0;
        this.required = this.e.required || (pElement.min && pElement.min > 0);
        this.value = pElement.defaultValue || '';
    }
};
