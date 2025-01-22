import { LitElement, html, css } from 'lit-element';
import { ThemeMixin } from '../../themes/dsv2.0/components/mixins/ThemeMixin.js';
import { MultiStepStyles } from './multi-step-form-css.js';
import { multiStepMixin } from './mixins/multiStepMixin.js';
import successPng from '../../../images/web/success.png';
import successPng2 from '../../../images/web/successMipay.png';
import errorPng from '../../../images/web/error.png';

class MultiStepForm extends multiStepMixin(ThemeMixin(LitElement)) {
    static get properties() {
        return {
            slides: Array,
            slideIndex: Number,
            validationObject: Object,
            submittedObject: Object,
            currentDate: Date,
            loading: Boolean,
            params: { type: Object },
            stepParams: { type: Object },
            service: Object,
            url: String,
            csrfToken: String,
            method: String,
            responseObj: Object,
            infoObj: Object
        }
    }

    constructor() {
        super();
        import("./elements/steps-timeline/steps-timeline.js");
        import("./elements/cc-input/cc-input.js");
        import("./elements/cvc-input/cvc-input.js");
        import("./elements/cc-expiration/cc-expiration.js");
        // import("./index.php");
        this.slides = [{ "title": "Step 1: Card Payment Details", "subtitle": "Enter the  agency name,card_email (optional) ,phone number and the  agency logo (optional)", "id": 0 },
        { "title": "Step 2: Billing Address", "subtitle": "Enter admin username, card_email, password.", "id": 1 },
        { "title": "Step 3: Verification", "subtitle": "Enter the  agency name,card_email (optional) ,phone number and the  agency logo (optional)", "id": 2 },
        { "title": "", "subtitle": "", "id": 3 }
        ];
        this.slideIndex = 0;
        this.validationObject = {};
        this.submittedObject = {};
        this.currentDate = '';
        this.loading = false;
        this.service = null;
        this.url = '';
        this.csrfToken = '';
        this.method = '';
        this.responseObj = {};
        this.infoObj = {};
    }

    static get styles() {
        return [
            super.styles,
            MultiStepStyles,
            css`
               :host {
                    display: block;
                }
            `,
        ];
    }

    static get is() {
        return 'multi-step-form';
    }

    firstUpdated() {
        super.firstUpdated();
        const slidesCont = this.qs('.slidesCont');
        const cardCont = this.qs('.card-body');
        const slidesWidth = cardCont.offsetWidth;
        const innerWidth = cardCont.clientWidth;
        const slides = this.shadowRoot.querySelectorAll('.slidesCont .slide');
        new ResizeObserver(() => {
            this.setSlideWidth();
        }).observe(cardCont);
      

        const date = new Date();
        const currentDate = this.formatDate(date)
        this.currentDate = currentDate;

        const url = this.getAttribute('action');

        this.method = this.getAttribute('method');

        const location = document.location

        this.protocol = location.protocol;
        this.hostname = location.hostname;

        let fullHost = this.protocol + '//' + this.hostname + url;

        this.url = fullHost;

        const csrfToken = this.getAttribute('csrftoken');

        this.csrfToken = csrfToken;
        
        const responseObj = JSON.parse(sessionStorage.getItem('response'));
        if (responseObj) {
            const redirectBanner=this.qs(".redirectBanner");
            const mainCardWidth=this.qs("#mainCard").offsetWidth;
            redirectBanner.style.width=`${mainCardWidth+50}px`;
            redirectBanner.style.opacity=1;
            setTimeout(()=>{
                redirectBanner.style.opacity=0;
            },20000);
        }
        
    }

    connectedCallback() {
        super.connectedCallback();
      
        const responseObj = JSON.parse(sessionStorage.getItem('response'));
        if (responseObj) {
            this.slideIndex = 3;
            this.responseObj = responseObj;  
            const submittedObject=JSON.parse(sessionStorage.getItem("submittedObject"));
            this.submittedObject=submittedObject;        
            setTimeout(()=>{
                sessionStorage.clear();
            },20000);  
        }
      

        window.addEventListener("message",ev=>{this.handleResult(ev)} );
    }

    //handles the result from response html file and closes the child on response return
    handleResult(ev) {
        if (ev.data && ev.data.message === "deliverResult") {
            ev.source.close();
            const resultDiv = this.qs('#resultDiv');
            let divContent = '';

            if (ev.data.success || ev.data.response_status=='00') {
                const payload = ev.data.payload;
                divContent = 'Transaction Successful</b>';

                for (const key in payload) {
                    if (key === 'response') {
                        for (const subKey in payload[key]) {
                            divContent += `Response: <div>${subKey}: <b>${payload[key][subKey]}</b></div>`;
                        }
                    } else {
                        divContent += `<div>${key}: <b>${payload[key]}</b></div>`;
                    }
                }
            } else {
                divContent = 'Transaction Failed</b>';
            }

            resultDiv.innerHTML = divContent;
        }
    }

    setSlideWidth() {
        const cardCont = this.qs('.card-body');
        const slidesWidth = cardCont.offsetWidth;
        const innerWidth = cardCont.clientWidth;
        const slides = this.shadowRoot.querySelectorAll('.slidesCont .slide');
        const firstSlide = this.shadowRoot.querySelector(`#slide-` + 0);
        firstSlide.style.marginLeft = `-${innerWidth * this.slideIndex}px`;

        slides.forEach(slide => {
            slide.style.width = `${innerWidth}px`;
        });
        
    }

    formatDate(date) {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        const suffix = this.getDaySuffix(day);

        return `${day}${suffix} ${month} ${year}`;
    }

    getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }


    onNextBtnClick(index) {
        this.validate(index);
        if (this.validationObject.isValid === true) {
            this.showNextSlide(index);
            if (index == 1) {
                const card_names = this.qs('#cardholder_name');
                const cardNumber = this.qs('#card_number');

                const card_accountnumber = cardNumber.shadowRoot.querySelector('.input');
                const expDate = this.qs('#exp_date');
                const card_expirationdate = expDate.shadowRoot.querySelector('.input');
                const cvc = this.qs('#cvc');
                const card_cvnumber = cvc.shadowRoot.querySelector('.input');
                const card_email = this.qs('#email_address');
                const phone = this.qs('#phone_number');
                const infoObj = {
                    "card_accountnumber": card_accountnumber,
                    "card_expirationdate": card_expirationdate,
                    "card_cvnumber": card_cvnumber,
                    "card_names": card_names,
                    "card_email": card_email,
                    "phone": phone
                }
                this.infoObj = infoObj;

            } else if (index == 2) {
                this.onSubmitHandler();
            }
        }

    }

    onPrevBtnClick(index) {
        if (index == 0) {
            const card_names = this.qs('#cardholder_name');
            const card_namesVal = card_names.value;
            const cardNameAlert = this.qs('#cardNameAlert');
            const cardNumber = this.qs('#card_number');
            const card_accountnumber = cardNumber.shadowRoot.querySelector('.input');
            const ccAlert = cardNumber.shadowRoot.querySelector('p.help');
            const ccIcon = cardNumber.shadowRoot.querySelector('.icon i');
            const cardNumberVal = cardNumber.value;
            const expDate = this.qs('#exp_date');
            const card_expirationdate = expDate.shadowRoot.querySelector('.input');
            const expDateVal = card_expirationdate.value;
            const expDateAlert = expDate.shadowRoot.querySelector('p.help');
            const cvc = this.qs('#cvc');
            const card_cvnumber = cvc.shadowRoot.querySelector('.input');
            const cvcVal = cvc.value;
            const cvcAlert = cvc.shadowRoot.querySelector('p.help');
            const card_email = this.qs('#email_address');
            const emailVal = card_email.value;
            const emailAlert = this.qs('#emailAlert');
            const phone = this.qs('#phone_number');
            const phoneNumberVal = phone.value;
            card_names.value = '';
            cardNumber.value = '';
            card_accountnumber.value = '';
            card_accountnumber.setAttribute("rightIcon", "");
            card_expirationdate.value = '';
            card_email.value = '';
            card_cvnumber.value = '';
            cvc.value = '';
            cvc.setAttribute("rightIcon", "");
            phone.value = '';
        }
        this.showPrevSlide(index);
    }

    showNextSlide(index) {
        const slidesCont = this.qs('.slidesCont');
        const slides = this.shadowRoot.querySelectorAll('.slidesCont .slide');
        const currentSlide = this.shadowRoot.querySelector(`#slide-` + this.slideIndex);
        const activeSlide = this.shadowRoot.querySelector(`#slide-` + index);
        activeSlide.classList.add('active');
        const slideWidth = activeSlide.offsetWidth;
        currentSlide.style.marginLeft = `-${slideWidth}px`;
        activeSlide.style.marginLeft = `0px`;
        this.slideIndex = index;
        this.dispatchEvent(new CustomEvent("new-step", {
            bubbles: true,
            composed: true,
            detail: index
        }));

    }

    showPrevSlide(index) {
        const slidesCont = this.qs('.slidesCont');
        const slides = this.shadowRoot.querySelectorAll('.slidesCont .slide');
        const currentSlide = this.shadowRoot.querySelector(`#slide-` + this.slideIndex);
        const activeSlide = this.shadowRoot.querySelector(`#slide-` + index);
        activeSlide.classList.add('active');
        const slideWidth = activeSlide.offsetWidth;
        currentSlide.style.marginLeft = `${slideWidth}px`;
        activeSlide.style.marginLeft = `0px`;
        this.slideIndex = index;
        this.dispatchEvent(new CustomEvent("new-step", {
            bubbles: true,
            composed: true,
            detail: index
        }));

    }

    validateEmail(card_email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(card_email).toLowerCase());
    }

    onInputEmailHandler(event) {
        const emailAddress = event.target.value;
        this.validateEmail(emailAddress);

    }


    async onSubmitHandler(e, index) {
        e.preventDefault();

        const card_physical_address = this.qs('#street_address');
        const card_country = this.qs('#card_country');
        const card_city = this.qs('#card_city');
        const card_postal_code = this.qs('#zip_code')
        const card_region = this.qs('#state_province');

        //

        const submittedObject = {
            "card_accountnumber": this.infoObj.card_accountnumber.value,
            "card_expirationdate": this.infoObj.card_expirationdate.value,
            "card_cvnumber": this.infoObj.card_cvnumber.value,
            "card_names": this.infoObj.card_names.value,
            "card_email": this.infoObj.card_email.value,
            "phone": this.infoObj.phone.value,
            "card_physical_address": card_physical_address.value,
            "card_country": card_country.value,
            "card_city": card_city.value,
            "card_postal_code": card_postal_code.value,
            "card_region": card_region.value
        }

        this.validate(index);

        if (this.validationObject.isValid === true) {
            this.submittedObject = submittedObject;
            const jsonData = JSON.stringify(this.submittedObject);

            this.loading = true;
            await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': this.csrfToken,

                },
                body: jsonData
            })
                .then(response => {

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();

                }).then(html => {
                    this.showNextSlide(index);
                    this.loading = true;
                    const jsonData = JSON.stringify(this.submittedObject);
                    sessionStorage.setItem("submittedObject",jsonData);
                    setTimeout(() => {
                        document.location.assign(this.protocol + '//' + this.hostname + "/device-collect/", "Processing...");
                    }, 1000);

                }).catch(error => {
                    // Handle error
                    console.error(error)
                })

        } else {

        }

    }

    openModal(){
		const modal=this.qs(".modal");
		modal.classList.add("is-active");
	}

    closeModal(){
		const modal=this.qs(".modal");
		modal.classList.remove('is-active');
	}

    maskCreditCard(cardNumber) {
        // Convert the input to string (in case it's not already a string)
        cardNumber = cardNumber.toString();
        
        // Define constants for masking
        const visibleDigits = 4;
        const totalVisibleGroups = 2;
        
        // Calculate the lengths of visible and masked parts
        const visiblePartLength = visibleDigits * totalVisibleGroups;
        const maskedPartLength = cardNumber.length - visiblePartLength;
        
        // Extract visible and masked parts
        const visiblePart = cardNumber.substr(0, visiblePartLength);
        const maskedPart = cardNumber.substr(visiblePartLength, maskedPartLength).replace(/\d/g, '*');
        
        // Combine and return the masked card number
        return `${visiblePart} `+" "+`${maskedPart}`+" "+` ${cardNumber.substr(-4)}`;
    }

    render() {
        return html`
                <div class="content">
                   
                    <form method="post">                        
                    <div class="columns is-mobile is-multiline" style="justify-content:center;">
                        <div class="column is-8-desktop is-8-tablet is-12-mobile"> 
                            <div class="card" id="mainCard">
                                
                                <div class="card-header">
                                    <steps-timeline style="width:100%"></steps-timeline>
                                </div>
                                
                                <div class="card-body py-5">
                                    <div class="slidesCont">
                                        ${this.slides.map(slide => html`
                                            <div class="slide px-1" id="slide-${slide.id}">
                                                <h4 class="card-title my-5">${slide.title}</h4>
                                                <!-- <p class="card-subtitle">${slide.subtitle}</p> -->

                                                ${slide.id == 0 || this.slideIndex == 0 ? html`
                                                    <div class="columns my-2 is-multiline is-mobile">
                                                        <div class="column is-6">
                                                            <label class="label">Cardholder Name</label>
                                                            <div class="field">
                                                                <div class="control has-icons-right">
                                                                    <input class="input" type="text" id="cardholder_name" placeholder="Name">
                                                                    <span class="icon pt-2 is-right">
                                                                    <i class="fa fa-user"></i>
                                                                    </span>
                                                                </div>
                                                                <p id="cardNameAlert" class="help is-danger"></p>
                                                            </div>
                            
                                                        </div>   
                                                        <div class="column is-6">
                                                            <label class="label">Card Number</label>
                                                            <cc-input id="card_number"></cc-input>
                                                        </div> 
                                                        
                                                        <div class="column is-6">
                                                            <label class="label">Expiration Date</label>
                                                            <cc-expiration id="exp_date"></cc-expiration>
                                                        </div>
                                                        <div class="column is-6">
                                                            <label class="label">CVV</label>
                                                            <cvc-input id="cvc"></cvc-input>
                                                        </div>
                                                    
                                                        <div class="column is-6">
                                                            <label class="label">Email Address</label>
                                                            <div class="field">
                                                                <div class="control has-icons-right">
                                                                    <input class="input" type="email" @input=${(e) => this.onInputEmailHandler(e)} placeholder="Email Address" id="email_address">
                                                                    <span class="icon pt-2 is-right">
                                                                    <i class="fa fa-envelope"></i>
                                                                    </span>
                                                                </div>
                                                                <p id="emailAlert" class="help is-danger"></p>
                                                            </div>
                                                        </div>
                                                        <div class="column is-6">
                                                            <label class="label">Phone Number</label>
                                                            <div class="field">
                                                                <div class="control has-icons-right">
                                                                    <input class="input" type="tel" placeholder="Phone Number" id="phone_number">
                                                                    <span class="icon pt-2 is-right">
                                                                    <i class="fa fa-phone"></i>
                                                                    </span>
                                                                </div>
                                                                <p id="phoneAlert" class="help is-danger"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `: slide.id == 1 || this.slideIndex == 1 ? html`
                                             
                                                    <div class="columns my-2 is-multiline is-mobile">
                                                        <div class="column">
                                                            
                                                            <label class="label">Street Address</label>
                                                            <div class="field">
                                                                <div class="control ">
                                                                    <input class="input" type="text" id="street_address" placeholder="kilimani">
                                                                </div>
                                                                <p id="streetAlert" class="help is-danger"></p>
                                                            </div>
                            
                                                        </div>    
                                                        <div class="column is-6">
                                                            <label class="label">City</label>
                                                            <div class="field">
                                                                <div class="control">
                                                                    <input class="input" type="text" id="card_city" placeholder="Nairobi">
                                                                </div>
                                                                <p id="cityAlert" class="help is-danger"></p>
                                                            </div>
                                                        </div>
                                                        <div class="column is-6">
                                                            <label class="label">State Province</label>
                                                            <div class="field">
                                                                <div class="control">
                                                                    <input class="input" type="text" id="state_province" placeholder="State Province">
                                                                </div>
                                                                <p id="stateAlert" class="help is-danger"></p>
                                                            </div>
                                                        </div>
                                                        <div class="column is-6">
                                                            <label class="label">Postal Zip Code</label>
                                                            <div class="field">
                                                                <div class="control has-icons-right">
                                                                    <input class="input" type="number" id="zip_code" placeholder="2987-0000">
                                                                    <span class="icon pt-2 is-right">
                                                                    <i class="fa fa-mobile"></i>
                                                                    </span>
                                                                </div>
                                                                <p id="zipAlert" class="help is-danger"></p>
                                                            </div>
                                                        </div>
                                                        <div class="column is-6">
                                                            <label class="label">Country</label>
                                                            <div class="field">
                                                                <div class="control has-icons-right">
                                                                    <input class="input" type="text" id="card_country" placeholder="Kenya">
                                                                    <span class="icon pt-2 is-right">
                                                                    <i class="fa fa-chevron-down"></i>
                                                                    </span>
                                                                </div>
                                                                <p id="countryAlert" class="help is-danger"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                `: slide.id == 2 || this.slideIndex == 2 ? html`
                                                    <div class="py-1 px-1" style="margin-top:4rem;">
                                                        <!-- <label class="label">One Time Password</label> -->
                                                        <!-- <code-input></code-input> -->
                                                           ${this.loading ? html`
                                                            <div class="loadingIcon is-large has-text-centered mt-6" style="width: 100%;">
                                                                <div class="progressIcon pb-2">
                                                                <img src="https://i.postimg.cc/dVz4ZBrH/Spinner-1s-200px-1.png"/>
                                                                </div>
                                                            </div>
                                                         ` : html`
                                                             <!-- <iframe class="iFrame" name="mainIframe" style="width: 100%;">
                                                                
                                                            </iframe> -->
                                                         `}
                                                                                                                     
                                                    </div>
                                                    
                                                `: slide.id == 3 || this.slideIndex == 3 ? html`
                                                    <div class="status-container py-5">
                                                        ${this.responseObj.response_status == "00" ? html`
                                                        <div class="redirectBanner py-5 content">
                                                        <h4 class="mt-4">Payment is successful redirecting you in 10 seconds .....</h4>
                                                        <div style="justify-content:flex-end; display:flex;">
                                                             <a href="" class="button py-5">Redirect</a>
                                                        </div>
                                                       
                                                        </div>
                                                             <!--if succesful-->
                                                            <img src="${successPng2}">
                                                            <h4 class=" mt-3 mb-5">${this.responseObj.response}</h4>
                                                            <p class="mt-5">Thank you for choosing our product! We appreciate your support. An email with a receipt was sent</p>
                                                            <a class="mt-2" @click=${()=>this.openModal()}>View your receipt details</a>
                                                        
                                                        `: html`
                                                       
                                                              <!--if error occurs-->
                                                            <img src="${errorPng}">
                                                            <h4 class=" mt-3 mb-5">${this.responseObj.response}</h4>
                                                            <p>An error occurred when processing the payment </p>
                                                            `
                }
                                                          
                                                    </div>
                                                    <div class="modal">
                                                        <div class="modal-background content"></div>
                                                        <div class="modal-card ">
                                                            <header class="modal-card-head" style="justify-content:flex-end">
                                                    
                                                                <a class="deleteBtn button is-danger" aria-label="close" @click=${() => this.closeModal()}>X</a>
                                                            </header>
                                                            <div class="modal-card-body ">
                                                                <div class="card" id="receiptCard">
                                                                     <div style="justify-content:flex-end; display:flex;">
                                                                            <h5 class="desc">${this.submittedObject.card_names}</h5>
                                                                         </div>
                                                                    <div class="card-header" style=" border-bottom:none !important; justify-content:center;">
                                                                        <img src="${successPng}" style="height:50px;">
                                                                        <h4 style="margin-top:2.5rem; margin-bottom:2.5rem;">Receipt Information</h4>
                                                                        <h5 style="margin-top:2.5rem; margin-bottom:2.5rem;">No. ${this.responseObj.receiptNumber}</h5>
                                                                    </div>
                                                                    <div class="card-body">
                                                                      
                                                                        <div class="columns is-mobile is-multiline">
                                                                             <div class="column is-6"><label class="label">Directory Server Transaction ID</label></div>
                                                                            <div class="column is-6"><label class="label desc" id="dirTransID">${this.responseObj.requestID}</label></div>
                                                                             <div class="column is-6"><label class="label">Transaction ID</label></div>
                                                                            <div class="column is-6"><label class="label desc" id="transID">${this.responseObj.transaction_reference}</label></div>
                                                                        </div>
                                                                          <div class="py-4">
                                                                            <label class="label">Address</label>
                                                                            <h5 class="desc">${this.submittedObject.card_city+` `+this.submittedObject.card_region+` `+this.submittedObject.card_country}</h5>
                                                                        </div>
                                                                        <div class="py-4">
                                                                                <label class="label">Postal Address</label>
                                                                                <h5 class="desc">${this.responseObj.card_physical_address}</h5>
                                                                        </div>
                                                                        <div class="py-4">
                                                                                <label class="label">Account Info</label>
                                                                                <h5><span class="desc">${this.maskCreditCard(this.submittedObject.card_accountnumber)}</span></h5>
                                                                        </div>
                                                                        
                                                                        <div class="columns orderFtr mt-2 is-mobile is-multiline">
                                                                            <div class="column is-6 desc"><h5>Item</h5></div>
                                                                            <div class="column is-6 desc"><h5>Amount</h5></div>
                                                                            <!-- <hr class="hrLine"> -->
                                                                            <div class="column is-6"><label class="label">Safaricom Airtime</label></div>
                                                                            <div class="column is-6"><label class="label" id="safAirtime">2000</label></div>
                                                                            <!-- <div class="column is-6"><label class="label">Airtel Airtime</label></div>
                                                                            <div class="column is-6"><label class="label" id="airtelAirtime">250</label></div>
                                                                            <hr class="hrLine"> -->
                                                                            <div class="column is-6"><h5>Total</h5></div>
                                                                            <div class="column is-6"><label class="label" id="total">250</label></div>
                                                                        </div>
                                                                       <div id="resultDiv"></div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                `: ``}
                    
                                            </div>
                                        `)}
                                        
                                    </div>       
                                </div>
                            </div>
                        
                            ${this.slideIndex == 1 ? html`
                                <div class="button-cont py-5">
                                    <button class="button prevBtn" type="button"  @click=${() => this.onPrevBtnClick(this.slideIndex - 1)}><p>Previous Step</p></button>
                                    <button type="submit" class="button nextBtn " @click=${(e) => this.onSubmitHandler(e, this.slideIndex + 1)}>${this.loading ? `Processing...` : `Submit`} </button>
                                </div>
                            `: this.slideIndex == 2 ? html`
                                <div class="button-cont py-5">
                                    <!-- <button class="button prevBtn" type="button" @click=${() => this.onPrevBtnClick(this.slideIndex - 1)}><p>Previous Step</p></button>
                                    <button type="button" class="button nextBtn" @click=${() => this.onNextBtnClick(this.slideIndex + 1)}><p>Next Step</p></button> -->
                                </div>
                            `
                : this.slideIndex == this.slides.length - 1 ? html`
                                <div class="button-cont2 py-5">
                                    ${this.responseObj.response_status == "00" ? html`
                                    
                                    `: html`
                                        <button class="button retryBtn" type="button" @click=${() => this.onPrevBtnClick(0)}><p>Retry</p></button>
                                    `}
                                    
                                </div>
                            `:
                    html`
                                <div class="button-cont2 py-5">
                                    <button class="button nextBtn" type="button" @click=${() => this.onNextBtnClick(this.slideIndex + 1)}><p>Next Step</p></button>
                                </div>
                            `}        
                        </div> 
                        
                        <div class="column px-5 ${this.slideIndex > 1 ? `hide` : `is-4-desktop is-4-tablet is-12-mobile`}"> 
                            <div class="card" id="summaryCard">
                                <div class="card-header" style="justify-content:center; border-bottom:none !important">
                                    <h4 style="margin-top:2.5rem; margin-bottom:2.5rem;">Order Summary</h4>
                                </div>
                                <div class="card-body">
                                    <div class="py-4">
                                        <label class="label">Order Reference</label>
                                        <h5>903238779re</h5>
                                    </div>
                                   <div class="py-4">
                                        <label class="label">Service Date</label>
                                        <h5>${this.currentDate}</h5>
                                   </div>
                                    
                                    <div class="field">
                                        <label class="label">Currency</label>
                                        <!-- <div class="control has-icons-right">
                                            <input class="input" type="number" id="currency" placeholder="Ksh">
                                            <span class="icon pt-2 is-right">
                                            <i class="fa fa-chevron-down"></i>
                                            </span>
                                        </div> -->
                                        <h5>Ksh</h5>
                                    </div>
                                    <div class="columns orderFtr is-mobile is-multiline">
                                        <div class="column is-6"><h5>Item</h5></div>
                                        <div class="column is-6"><h5>Amount</h5></div>
                                        <hr class="hrLine">
                                        <div class="column is-6"><label class="label">Safaricom Airtime</label></div>
                                        <div class="column is-6"><label class="label" id="safAirtime">250</label></div>
                                        <div class="column is-6"><label class="label">Airtel Airtime</label></div>
                                        <div class="column is-6"><label class="label" id="airtelAirtime">250</label></div>
                                        <hr class="hrLine">
                                        <div class="column is-6"><h5>Total</h5></div>
                                        <div class="column is-6"><label class="label" id="total">250</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                    </form>  
                    
                    
                </div>
        `;
    }

}

customElements.get(MultiStepForm.is) || customElements.define(MultiStepForm.is, MultiStepForm);