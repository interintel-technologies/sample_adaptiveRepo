import { StaticHTTPMixin } from "../../mixins/StaticHTTPMixin";
export const multiStepMixin=BaseClass=>class extends StaticHTTPMixin(BaseClass){
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('new-step', e => this.setActiveStep(e));
      
    }

    setActiveStep(e){
     
    }

       /**
   * @description This method converts px to rem
   */
    pxToRem(px, base = 16){
        let tempPx = px
        if (typeof px === 'string' || px instanceof String)
          tempPx = tempPx.replace('px', '')
      
        tempPx = parseInt(tempPx)
        return (1 / base) * tempPx 
    }

    
    validate(index){
        let errors = false;
        const card_names=this.qs('#cardholder_name');
        const card_namesVal=card_names.value;
        const cardNameAlert=this.qs('#cardNameAlert');
        const cardNumber=this.qs('#card_number');
        const card_accountnumber=cardNumber.shadowRoot.querySelector('.input');
        const ccAlert=cardNumber.shadowRoot.querySelector('p.help');
        const ccIcon=cardNumber.shadowRoot.querySelector('.icon i');
        const cardNumberVal=cardNumber.value;
        const expDate=this.qs('#exp_date');
        const card_expirationdate=expDate.shadowRoot.querySelector('.input');
        const expDateVal=card_expirationdate.value;
        const expDateAlert=expDate.shadowRoot.querySelector('p.help');
        const cvc=this.qs('#cvc');
        const card_cvnumber=cvc.shadowRoot.querySelector('.input');
        const cvcVal=cvc.value;
        const cvcAlert=cvc.shadowRoot.querySelector('p.help');
        const card_email=this.qs('#email_address');
        const emailVal=card_email.value;
        const emailAlert=this.qs('#emailAlert');
        const phone=this.qs('#phone_number');
        const phoneNumberVal=phone.value;
        const phoneAlert=this.qs('#phoneAlert');
        const card_physical_address=this.qs('#street_address');
        const card_country=this.qs('#card_country');
        const streetAlert=this.qs('#streetAlert');
        const card_city=this.qs('#card_city');
        const card_postal_code=this.qs('#zip_code');
        const cityAlert=this.qs('#cityAlert');
        const card_region=this.qs('#state_province');
        const stateAlert=this.qs('#stateAlert');
        const zipAlert=this.qs('#zipAlert');
        const countryAlert=this.qs('#countryAlert');
        // const codeInput=this.qs('code-input');
        // const codeAlert=codeInput.shadowRoot.querySelector('p.help');
        // const otpInput=codeInput.shadowRoot.querySelector('.otp-input');
      
        if(index==1){
            if(card_namesVal==''|| card_namesVal===null || card_namesVal.length===0){
                card_names.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_names.classList.remove("is-success");
                card_names.classList.add("is-danger");
                const validation=JSON.parse(card_names.getAttribute("validation"));
                cardNameAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                card_names.classList.remove("is-danger");
                card_names.classList.add("is-success");
                setTimeout(() => {
                    card_names.classList.remove("is-success");
                }, 3000);
                card_names.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                cardNameAlert.innerHTML='';
                
            }
    
            if(cardNumberVal==''|| cardNumberVal===null || cardNumberVal.length===0){
                card_accountnumber.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_accountnumber.classList.remove("is-success");
                card_accountnumber.classList.add("is-danger");
                const validation=JSON.parse(card_accountnumber.getAttribute("validation"));
                ccAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
                const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
                const amexRegEx= /^3[47][0-9]{13}$/;
                const discoverRegEx= /^6(?:011|5[0-9]{2})[0-9]{12}$/;
                const dinersRegEx= /^3[068][0-9]{12}$/;
                const carteRegEx=/^389[0-9]{11}$/;
                const maestroRegEx=/^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/;
                const nonSpaceValue = cardNumberVal.split(" ").join("");
                if (nonSpaceValue.length !==16) {
                    card_accountnumber.classList.remove("is-success");
                    card_accountnumber.classList.add("is-danger");
                     card_accountnumber.setAttribute("validation", JSON.stringify({
                        isValid: false,
                        validationMessage: "Minimum of 16 digits required"
                    }));
                    const validation=JSON.parse(card_accountnumber.getAttribute("validation"));
                    ccAlert.innerHTML=validation.validationMessage;
                    this.validationObject={"isValid":false}
                    return this.validationObject;
        
                }
                else if(!visaRegEx.test(nonSpaceValue) && !mastercardRegEx.test(nonSpaceValue) && !amexRegEx.test(nonSpaceValue)
                 && !discoverRegEx.test(nonSpaceValue) && !dinersRegEx.test(nonSpaceValue) && !carteRegEx.test(nonSpaceValue) && !maestroRegEx.test(nonSpaceValue)) {
                    card_accountnumber.classList.remove("is-success");
                    card_accountnumber.classList.add("is-danger");
                    card_accountnumber.setAttribute("validation", JSON.stringify({
                        isValid: false,
                        validationMessage: "Card Number is not valid"
                    }));
                    const validation=JSON.parse(card_accountnumber.getAttribute("validation"));
                    ccAlert.innerHTML=validation.validationMessage;
                    this.validationObject={"isValid":false}
                    return this.validationObject;
                } 
                else{
                    card_accountnumber.classList.remove("is-danger");
                card_accountnumber.classList.add("is-success");
                setTimeout(() => {
                    card_accountnumber.classList.remove("is-success");
                }, 3000);
                
                card_accountnumber.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                ccAlert.innerHTML='';
                
                }               
                   
            }
    
            if(expDateVal==''|| expDateVal===null || expDateVal.length===0){
                card_expirationdate.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_expirationdate.classList.remove("is-success");
                card_expirationdate.classList.add("is-danger");
                const validation=JSON.parse(card_expirationdate.getAttribute("validation"));
                expDateAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
        
                card_expirationdate.classList.remove("is-danger");
                card_expirationdate.classList.add("is-success");
                setTimeout(() => {
                    card_expirationdate.classList.remove("is-success");
                }, 3000);
                card_expirationdate.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                expDateAlert.innerHTML='';
            }
    
            if(cvcVal==''|| cvcVal===null || cvcVal.length===0){
                card_cvnumber.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_cvnumber.classList.remove("is-success");
                card_cvnumber.classList.add("is-danger");
                const validation=JSON.parse(card_cvnumber.getAttribute("validation"));
                cvcAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                if (cvcVal.length !==3) {
                    card_cvnumber.classList.remove("is-success");
                    card_cvnumber.classList.add("is-danger");           
                    card_cvnumber.setAttribute("validation", JSON.stringify({
                        isValid: false,
                        validationMessage: "3 numbers required"
                    }));
                    const validation=JSON.parse(card_cvnumber.getAttribute("validation"));
                    cvcAlert.innerHTML=validation.validationMessage;
                    this.validationObject={"isValid":false}
                return this.validationObject;
                  } else {
                    card_cvnumber.classList.remove("is-danger");
                    card_cvnumber.classList.add("is-success");
                    setTimeout(() => {
                        card_cvnumber.classList.remove("is-success");
                    }, 3000);
                    card_cvnumber.setAttribute("validation", JSON.stringify({
                        isValid: true,
                        validationMessage: ""
                    }));  
                    cvcAlert.innerHTML='';
                  }
                   
            }
            
            if(emailVal==''|| emailVal===null || emailVal.length===0){
                card_email.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_email.classList.remove("is-success");
                card_email.classList.add("is-danger");
                const validation=JSON.parse(card_email.getAttribute("validation"));
                emailAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                if(this.validateEmail(emailVal)===true){
                    card_email.classList.remove("is-danger");
                    card_email.classList.add("is-success");
                    setTimeout(() => {
                        card_email.classList.remove("is-success");
                    }, 3000);
                    card_email.setAttribute("validation", JSON.stringify({
                        isValid: true,
                        validationMessage: ""
                    }));  
                    emailAlert.innerHTML='';
                }else{
                    card_email.setAttribute("validation", JSON.stringify({
                        isValid: false,
                        validationMessage: "incorrect email format"
                    }));
                    errors=true;
                    card_email.classList.remove("is-success");
                    card_email.classList.add("is-danger");
                    const validation=JSON.parse(card_email.getAttribute("validation"));
                    emailAlert.innerHTML=validation.validationMessage;
                    this.validationObject={"isValid":false}
                    return this.validationObject;
                }
              
            }
    
            if(phoneNumberVal==''|| phoneNumberVal===null || phoneNumberVal.length===0){
                phone.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                phone.classList.remove("is-success");
                phone.classList.add("is-danger");
                const validation=JSON.parse(phone.getAttribute("validation"));
                phoneAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                const pattern = /^\+?\d{0,3}[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                if (!pattern.test(phoneNumberVal)) {
                    phone.classList.add("is-danger");
                    phone.classList.remove("is-success");
                    phone.setAttribute("validation", JSON.stringify({
                        isValid: false,
                        validationMessage: "Please enter a valid number"
                    }));  
                    const validation=JSON.parse(phone.getAttribute("validation"));
                    phoneAlert.innerHTML=validation.validationMessage;
                    this.validationObject={"isValid":false}
                    return this.validationObject;
                  }else{
                    phone.classList.remove("is-danger");
                    phone.classList.add("is-success");
                    setTimeout(() => {
                        phone.classList.remove("is-success");
                    }, 3000);
                    phone.setAttribute("validation", JSON.stringify({
                        isValid: true,
                        validationMessage: ""
                    }));  
                    phoneAlert.innerHTML="";
                  }
                            
            }
    
          this.validationObject={"isValid":true}
        }else if(index==2){
            if(card_physical_address.value==''|| card_physical_address.value===null || card_physical_address.value.length===0){
                card_physical_address.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_physical_address.classList.remove("is-success");
                card_physical_address.classList.add("is-danger");
                const validation=JSON.parse(card_physical_address.getAttribute("validation"));
                streetAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                card_physical_address.classList.remove("is-danger");
                card_physical_address.classList.add("is-success");
                setTimeout(() => {
                    card_physical_address.classList.remove("is-success");
                }, 3000);
                card_physical_address.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                streetAlert.innerHTML='';
                
            }

            if(card_city.value==''|| card_city.value===null || card_city.value.length===0){
                card_city.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_city.classList.remove("is-success");
                card_city.classList.add("is-danger");
                const validation=JSON.parse(card_city.getAttribute("validation"));
                cityAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                card_city.classList.remove("is-danger");
                card_city.classList.add("is-success");
                setTimeout(() => {
                    card_city.classList.remove("is-success");
                }, 3000);
                card_city.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                cityAlert.innerHTML='';
                
            }

            if(card_region.value==''|| card_region.value===null || card_region.value.length===0){
                card_region.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_region.classList.remove("is-success");
                card_region.classList.add("is-danger");
                const validation=JSON.parse(card_region.getAttribute("validation"));
                stateAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                card_region.classList.remove("is-danger");
                card_region.classList.add("is-success");
                setTimeout(() => {
                    card_region.classList.remove("is-success");
                }, 3000);
                card_region.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                stateAlert.innerHTML='';
                
            }

            if(card_postal_code.value==''|| card_postal_code.value===null || card_postal_code.value.length===0){
                card_postal_code.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty / use digits only"
                }));
                errors=true;
                card_postal_code.classList.remove("is-success");
                card_postal_code.classList.add("is-danger");
                const validation=JSON.parse(card_postal_code.getAttribute("validation"));
                zipAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                card_postal_code.classList.remove("is-danger");
                card_postal_code.classList.add("is-success");
                setTimeout(() => {
                    card_postal_code.classList.remove("is-success");
                }, 3000);
                card_postal_code.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                zipAlert.innerHTML='';
                
            }

            if(card_country.value==''|| card_country.value===null || card_country.value.length===0){
                card_country.setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Field is empty"
                }));
                errors=true;
                card_country.classList.remove("is-success");
                card_country.classList.add("is-danger");
                const validation=JSON.parse(card_country.getAttribute("validation"));
                countryAlert.innerHTML=validation.validationMessage;
                this.validationObject={"isValid":false}
                return this.validationObject;
            }else{
                card_country.classList.remove("is-danger");
                card_country.classList.add("is-success");
                setTimeout(() => {
                    card_country.classList.remove("is-success");
                }, 3000);
                card_country.setAttribute("validation", JSON.stringify({
                    isValid: true,
                    validationMessage: ""
                }));  
                countryAlert.innerHTML='';
                
            }
        this.validationObject={"isValid":true}
        }
       
    }

     /**
     * Fetch static POS APIs
     * @param {POSService} service 
     * @param {Object} body 
     * @param {*} resolve 
     * @param {*} reject 
     */
     formRequest(service, body) {
        return this.httpRequest(service.url, service.method, body, this.csrfToken);
    }
  
};