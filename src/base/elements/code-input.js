import { SerializableElement } from "../../core/serializable-element";


export const CodeInputBase = class extends SerializableElement{
    static get properties() {
        return {
            params: {type: Object, value: {}},
            type: String,
            columnSize: {type: Array},
            value: String
        };
    }

    validate(){
        const inputs=this.shadowRoot.querySelectorAll('.input');
        
        inputs.forEach(input =>{
            if(input.value===null || input.value==''){
                // input.classList.remove("is-success");
                // input.classList.add("is-danger");
                return new this.Validation(false, 'Each Digit is Required');
            }else{
                input.classList.remove("is-danger");
                input.classList.add("is-success");
                setTimeout(() => {
                    input.classList.remove("is-success");
                }, 3000);

                return new this.Validation(true, 'valid');
            }
        });
       
        if(!this.getValue()){
            return new this.Validation(false,  'OTP code is Required');
        }else if(this.getValue().length<this.e.details.codeLength){
            return new this.Validation(false,  'OTP code is Required');
        }else{

            return new this.Validation(true, 'valid');
        }
        
    }

    getName() {
        return this.e.formName;
    }

    getValue(){
        const inputs=this.shadowRoot.querySelectorAll('.input');
        const otpArray=[];
        inputs.forEach(input =>{otpArray.push(input.value)});
        const otpDigits=otpArray.join('');
        return otpDigits;
    }

  

    init(pElement, loader) {
        super.init(pElement, loader);
        // this.required = pElement.min && pElement.min > 0;
        this.required = this.e.required || (pElement.min && pElement.min > 0);
        this.value = pElement.defaultValue || '';
    }
};