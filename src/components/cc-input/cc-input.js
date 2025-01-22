import { html, css, unsafeCSS } from "lit-element";
import "./../text-input/text-input.js";
import { CcInputBase } from '../../base/elements/cc-input';
import globalStyles from '../../App.css?raw';

class CcInput extends CcInputBase {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties(){
        return {
            name: String,
            icon: String,
            hint: String,
            e: { type: Object },
        }
    }

    constructor() {
        super();
        this.name = '';
        this.icon = '';
        this.hint = '';
        this.e = null;
    }

    updated(changedProperties) {
        if (changedProperties.has('e') && this.e) {
            this.icon = this.e.icon;
          
        }
    }

    valid() {
        this.getInput().setAttribute("validation", JSON.stringify({
            isValid: true,
            validationMessage: "Valid card number"
        }));

        this.rightIcon = {
            type: "adaptive-ui-icon",
            name: "MdError"
        };
    }

    invalid(message) {
        this.getInput().setAttribute("validation", JSON.stringify({
            isValid: false,
            validationMessage: message
        }));
    }

    onInputCCHandler(event) {
        let value = event.detail.target.value;
        const nonSpaceValue = value.split(" ").join("");
        // console.log("non-space value is ", nonSpaceValue);

        if (nonSpaceValue.length > 0 && !isNaN(nonSpaceValue)) {
            const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
            const matches = v.match(/\d{4,16}/g);
            const match = (matches && matches[0]) || "";
            const parts = [];

            for (let i = 0, len = match.length; i < len; i += 4) {
                parts.push(match.substring(i, i + 4));
            }

            if (parts.length) {
                const cc = parts.join("");

                // Check card type and validation
                this.ccTypeValidationIconLoader(cc);
                value = parts.join(" ");
            } else {
                this.getInput().setAttribute("rightIcon", "");
                this.invalid("Invalid card number format");
            }
        } else {
            this.getInput().setAttribute("rightIcon", "");
            this.invalid("Card number contains invalid characters");
        }

        this.value = value;

        this.dispatchEvent(new CustomEvent('on-input', {
            bubbles: true,
            composed: true,
            detail: event
        }));

        return value;
    }

    ccTypeValidationIconLoader(cc) {
        // Remove any non-numeric characters (such as spaces) for validation purposes
        const cleanedCC = cc.replace(/\D/g, '');
    
        // Regular expressions for various card types
        const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
        const mastercardRegEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
        const amexRegEx = /^3[47][0-9]{13}$/;
        const discoverRegEx = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
        const dinersRegEx = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
        const jcbRegEx = /^(?:2131|1800|35\d{3})\d{11}$/;
    
        // Check card type and set icon
        if (visaRegEx.test(cleanedCC)) {
            this.getInput().setAttribute("rightIcon", JSON.stringify({
                type: "fa-icon",
                name: "fa-brands fa-cc-visa"
            }));
            this.valid();
        } else if (mastercardRegEx.test(cleanedCC)) {
            this.getInput().setAttribute("rightIcon", JSON.stringify({
                type: "fa-icon",
                name: "fa-brands fa-cc-mastercard"
            }));
            this.valid();
        } else if (amexRegEx.test(cleanedCC)) {
            this.getInput().setAttribute("rightIcon", JSON.stringify({
                type: "fa-icon",
                name: "fa-brands fa-cc-amex"
            }));
            this.valid();
        } else if (discoverRegEx.test(cleanedCC)) {
            this.getInput().setAttribute("rightIcon", JSON.stringify({
                type: "fa-icon",
                name: "fa-brands fa-cc-discover"
            }));
            this.valid();
        } else if (dinersRegEx.test(cleanedCC)) {
            this.getInput().setAttribute("rightIcon", JSON.stringify({
                type: "fa-icon",
                name: "fa-brands fa-cc-diners-club"
            }));
            this.valid();
        } else if (jcbRegEx.test(cleanedCC)) {
            this.getInput().setAttribute("rightIcon", JSON.stringify({
                type: "fa-icon",
                name: "fa-brands fa-cc-jcb"
            }));
            this.valid();
        } else {
            this.getInput().setAttribute("rightIcon", "");
            this.invalid("Card number is not valid");
        }
    }
    
    

    render() {
        return html`
            <text-input .e=${this.e} .hint=${this.hint} .id=${"ccInput"} .name=${this.name} 
                .leftIcon=${JSON.stringify({ type: "adaptive-ui-icon", name: this.icon })} 
                @on-input=${e => (e.detail.target.value = this.onInputCCHandler(e))}>
            </text-input>
        `;
    }
}

customElements.define(CcInput.is, CcInput);
