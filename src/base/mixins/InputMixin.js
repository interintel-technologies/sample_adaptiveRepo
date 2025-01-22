
import { html, css, unsafeCSS } from "lit-element";
import {  enterSubmitMixin } from "./enter-submit-mixin";
import globalStyles from '../../App.css?raw'
export const InputMixin= BaseClass => class extends enterSubmitMixin(BaseClass) {

    static get styles() {
        return [unsafeCSS(globalStyles)]
    }

    static get properties() {
    return {
            _type: String,
            icon: String,
            leftIcon: Object,
            rightIcon: Object,
            name: String,
            required: Boolean,
            hint: String,
            help: String,
            addons: Object,
            value: Object,
            validation: Object, // to trigger validation methods when being reused in other elements {isValid: true, validationMessage: ""}
            pattern: Object,
            maxLength: Number,
            minLength: Number,
            min: Object,
            max: Object,
            inputMode: String,
            options: Array,
            isLoading: Boolean,
            rows: Number,
            cols: Number,
            submit_name:String,
            e: { type: Object },

        };
    }

    constructor(){
        super();

        this.hint = "";
        this.help = "";
        this._type = this.type;
        this.value = this.type === 'date' ? this.getTodayDate() : "";
        this.submit_name = ""
        this.options = [];
        this.isLoading = false;
        this.e = null
        this.required = false
        // this.name = "Default Name";
        
        
    }


    getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    updated(changedProperties) {

        if (changedProperties.has('type') && this.type === 'date') {
            this.value = this.getTodayDate();  // Update value to today's date if type changes to 'date'
        }
        
        if (changedProperties.has('validation')) {
            this.externalValidationTrigger();
        }

        if (
            changedProperties.has('name') || changedProperties.has('e')
          ) {

            
            
        if(this.e) {
            this.id = this.e.id;
            this.icon = this.e.icon;
            this.name = this.e.name;
        this.hint = this.e.details.hint;
            this.help = this.e.details.help;
            this.pattern = this.e.details.pattern;
            this.maxLength = this.e.max;
            this.minLength = this.e.min;
            this.required = this.e.required;
            this.max = this.e.details.maxLength;
            this.min = this.e.details.minLength;
            this.options = this.e.details.options;
            this.rows = this.e.details.rows;
            this.cols = this.e.details.cols;
            this.inputMode = this.e.details.inputMode
        }

        this.hint = this.hint ? this.hint : "";
        this.help = this.help ? this.help : "";
        this.pattern = this.pattern ? this.pattern : "";

        this.setDefaultIcons();

        window.onbeforeunload = () =>{
            localStorage.removeItem("activeInputId");
        };

      }
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('keyInput', e => this.onNumberPadKeyInputListener(e));
        window.addEventListener('numberPicker', e => this.onNumberPickerListener(e));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('keyInput',e => this.onNumberPadKeyInputListener(e));
        window.removeEventListener('numberPicker', e => this.onNumberPickerListener(e))
        localStorage.removeItem("activeInputId");
    }

    setDefaultIcons() {
        if(this.icon) {
            this.leftIcon = {
                type: "adaptive-ui-icon",
                name: this.icon,
                title: ""
            };
        }
        if(this._type === "password") {
            this.leftIcon = {
                type: "adaptive-ui-icon",
                name: "MdRemoveRedEye",
                title: "Show"
            };
        }
        if(this.type === "search"){
            this.leftIcon={
                type: "adaptive-ui-icon",
                name: "MdLocationSearching",
                title: "Search"
            }
        }
    }

    invalid(validation) {
        
        // this.resetValidationStyles();
        this.rightIcon = {
            type: "adaptive-ui-icon",
            name: "MdError",
            datacolor:"red"
        };

        const iconLoading = async () => await this.updateComplete;
        iconLoading().then(() => {
            const input = this.shadowRoot.querySelector(this.type === "select" ? ".select" : this.type === "textarea" ? "textarea" : "input");
            const help = this.shadowRoot.querySelector(`.help`);
            const icon = this.shadowRoot.querySelector(".is-right");

            this.resetValidationStyles();

            input.classList.add("is-danger");
            help.classList.add("is-danger");
            if(icon !== null) {
                icon.classList.add("has-text-danger");
            }
            help.innerText = validation.validationMessage;
        });
    }

    valid(validation) {
        this.rightIcon = {
            type: "adaptive-ui-icon",
            name: "MdDoneAll",
            title: "Valid"
        };

        const iconLoading = async () => await this.updateComplete;
        iconLoading().then(() => {
            const input = this.shadowRoot.querySelector(this.type === "select" ? ".select" : this.type === "textarea" ? "textarea" : "input");
            const help = this.shadowRoot.querySelector(`.help`);
            const icon = this.shadowRoot.querySelector(".is-right");

            this.resetValidationStyles();

            input.classList.add("is-success");
            help.classList.add("is-success");
            if(icon !== null) {
                icon.classList.add("has-text-success");
            }
            help.innerText = "";
        });

        setTimeout(() => {
            this.resetValidationStyles();
            this.rightIcon = undefined;
        }, 3000);
    }

    resetValidationStyles(){
        const input = this.shadowRoot.querySelector(this.type === "select" ? ".select" : this.type === "textarea" ? "textarea" : "input");
        const help = this.shadowRoot.querySelector(`.help`);
        const icon = this.shadowRoot.querySelector(".is-right");

        input.classList.remove("is-success", "is-danger");
        help.classList.remove("is-success", "is-danger");
        help.innerText = this.help;
        if(icon !== null) {
            icon.classList.remove("has-text-success", "has-text-danger");
        }
    }

    passwordVisibility() {
        const input = this.shadowRoot.querySelector(`input`);

        if(this.type !== "textarea") {
            if(input.type === "password") {
                input.type = "text";
                this.leftIcon = {
                    type: "adaptive-ui-icon",
                    name: "MdDisabledVisible",
                    title: "Hide"
                }
            }
            else {
                input.type = "password";
                this.leftIcon = {
                    type: "adaptive-ui-icon",
                    name: "MdFaEye",
                    title: "Show"
                }
            }
        }
    }

    getInput() {
        return this.shadowRoot.querySelector(this.type === "select" ? "select" : this.type === "textarea" ? "textarea" : "input");
    }

    getValue() {    
        return this.getInput().value;
    }

    get renderMode() {
        return this.pl.renderMode;
    }

    get type() {
        return "text";
    }

    onLeftIconClickHandler() {
        if(this.type === "password") {
            this.passwordVisibility();
        }
    }

    onRightIconClickHandler() {

    }

    onNumberPadKeyInputListener(e) {
        const input = this.shadowRoot.querySelector("#"+localStorage.getItem("activeInputId"));

        if(input !== null && this.type === "number") {
            const keyInput = e.detail;
    
            if(keyInput === "-1") {
                this.value = this.value.substring(0, this.value.length -1)
            }
            else if(Number.isInteger(keyInput)) {
                this.value = this.value + keyInput;
            }
            else if(keyInput === "."){
                if (!this.value.includes('.') && this.value != "") {
                    this.value += "."
                }
            }
            else if(keyInput === "reset"){
                this.value = "";
            }
        }
    }

    onNumberPickerListener(e) {
        if (this.e.details.isNumberCompatible) {
            const amount = e.detail;
    
            // Access the shadow host containing the input field
            const shadowHost = document.querySelector('number-input'); // Replace with actual host selector
            
            // Get the shadow root of the shadow host
            const shadowRoot = shadowHost.shadowRoot;
            
            // Access the input field within the shadow root
            const inputField = shadowRoot.querySelector('.input'); // Adjust selector if needed
    
            if (inputField) {
                // Set the value of the input field
                inputField.value = amount;
                
               
            } else {
                console.error("Input field not found in the shadow root.");
            }
        }
    }
    
    

    onInputFocusHandler() {
        localStorage.setItem('activeInputId', this.id);
    }

    onInputHandler(event) {
        this.value = this.getValue();
        this.dispatchEvent(new CustomEvent('on-input', {
            bubbles: true,
            composed: true,
            detail: event
        }));
    }

    onChangeHandler(event) {
        this.value = this.getValue();
        this.dispatchEvent(new CustomEvent('on-change', {
            bubbles: true,
            composed: true,
            detail: event
        }));
    }

    onKeyPressHandler(event) {
        
        this.dispatchEvent(new CustomEvent('on-key-press', {
            bubbles: true,
            composed: true,
            detail: event
        }));

        if(this.type === "number" && this.maxLength) {
            if(event.target.value.length >= this.maxLength) {
                event.preventDefault();
            }
        }
    }

    externalValidationTrigger() {
        if(this.validation) {
            if(typeof this.validation === "string") {
                this.validation = JSON.parse(this.validation);
            }
            this.validation.isValid ? this.valid(this.validation) : this.invalid(this.validation);
            // console.log("validation is ",this.validation.isValid);
            
        }
        else {
            this.resetValidationStyles();
        }
    }

    iconLoader(icon) {
        const ic = typeof icon === "string" ? JSON.parse(icon) : icon;
        const datacolor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-onPrimaryContainer');

        return ic.type === "fa-icon" ? html`
            <i class=${ic.name} title=${ic.title}></i>
        ` : html`
            <adaptive-ui-icon datacolor="${ic.datacolor}"  icon=${ic.name} title=${ic.title}></adaptive-ui-icon>
        `;
    }

    render() {
        return html`
            <div class="content">
                <div class="field">
                <label class="label">${this.name}</label>
                    
                    <div class="control ${this.leftIcon ? 'has-icons-left' : ''}  ${this.rightIcon ? 'has-icons-right' : ''} ${this.isLoading ? "is-loading" : ""}">
                        ${
                            this.type === "select" ? html`
                                    <div class="select" style="width: 100%;">
                                        <select style="width: 100%;font-family:var(--family-sans-serif);padding-bottom:0.8rem;border-radius:var(--CornerSmall) !important;" name=${this.name} formName=${this.formNmae} value=${this.value} @change=${e => this.onChangeHandler(e)}>
                                            ${
                                                this.options.map(option => html`<option value="${option.value}" ?selected="${option.value === this.value}">${option.label}</option>`)
                                            }    
                                        </select>
                                    </div>
                            ` : this.type === "textarea" ? html`
                                <textarea class="textarea" style="width: 100%;" placeholder=${this.hint} minlength=${this.minLength}
                                maxlength=${this.maxLength} rows=${this.rows} cols=${this.cols} style="padding: 18px 55px; border: 1px solid var(--md-sys-color-outlineVariant);font-family:var(--family-sans-serif)"></textarea>
                            ` : html`
                                <input id=${this.id} class="input" placeholder=${this.hint} type=${this.type} value=${this.value} 
                                    @input=${e => this.onInputHandler(e)} @focus=${() => this.onInputFocusHandler()} 
                                    @keypress=${e => this.onKeyPressHandler(e)} pattern=${this.pattern} minlength=${this.minLength}
                                    maxlength=${this.maxLength} max=${this.max} min=${this.min} inputmode=${this.inputMode} style="padding: 13.5px 45px; border: 1px solid var(--md-sys-color-outlineVariant);border-radius:var(--CornerSmall) !important;"
                                >
                            `
                        }
                        ${
                            this.leftIcon && this.type !== "textarea" ? html`
                                <span class="icon is-small is-left" style="pointer-events: auto; left: 10px; top: 10%" @click=${() => this.onLeftIconClickHandler()}>${this.iconLoader(this.leftIcon)}</span>
                            ` : ""
                        }
                        ${
                            this.rightIcon && this.type !== "textarea" ? html`
                         
                         <span class="icon is-small is-right" style="height:100%" @click=${() => this.onRightIconClickHandler()}>${this.iconLoader(this.rightIcon)}</span>
                            ` : ""
                        }
                    </div>
                    <small class="help">${this.help}</small>
                </div>
            </div>
        `;
    }
};
