import { html, css, LitElement } from "lit-element";
// import { CcInputBase } from "../../../../../elements/base/cc-input";
import { InputMixin } from '../../../../themes/dsv2.0/components/mixins/InputMixin';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin.js';
import { multiStepMixin } from '../../mixins/multiStepMixin.js';
export class Validation {
	constructor(valid, message) {
	  this.isValid = valid;
	  this.validationMessage = message;
	}
  
	/**
	   * Validation Status
	   * @return {Boolean}
	   */
	get valid() {
	  return this.isValid;
	}
  
	/**
	   * Validation Message
	   * @return {String}
	   */
	get message() {
	  return this.validationMessage;
	}
  
	toString() {
	  return this.message;
	}
  }

class CcInput extends multiStepMixin(InputMixin(ThemeMixin(LitElement))) {
	static get styles() {
		return [
			super.styles,
			css`
				.input{
					border: 1px solid rgba(239, 240, 246, 1);
					border-radius:15px;
					box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
					height:3em!important;
				}
				.control span.icon{
					color:rgba(160, 163, 189, 1) !important;
				}
				input.input::placeholder{
					font-weight:400 !important;
					color: #6F6C90 !important;
				}
				.input:focus{
					box-shadow: 0 0 0 .0625em #170F49;
				}
			`,
		];
	}

	valid(validation) {
		this.getInput().setAttribute("validation", JSON.stringify({
			isValid: true,
			validationMessage: "Field is empty"
		}));
	}

	constructor() {
		super();
		this.name = '';
		this.icon = '';
		this.hint ='';
		this.Validation = Validation;
	}

	static get properties(){
		return {
			name: String,
			icon: String,
			hint: String,
		}
	}
	
	firstUpdated(){
		if(this.e) {
			this.icon = this.e.icon;
		}
	}

	invalid(validation) {
		this.getInput().setAttribute("validation", JSON.stringify({
			isValid: false,
			validationMessage: "invalid"
		}));
	}

	static get is(){
		return 'cc-input';
	}

	validate() {
		const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
		const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
		const nonSpaceValue = this.getValue().split(" ").join("");
	
		if (this.required) {
		  if (nonSpaceValue.length !==16) {
			return new this.Validation(false, this.e.name+' Minimum of 16 Required');
		  } 
		  else if(!visaRegEx.test(nonSpaceValue) && !mastercardRegEx.test(nonSpaceValue)) {
			return new this.Validation(false, 'Card number entered is not valid');
		  }
		}
	
		return new this.Validation(true, 'valid');
	}

	// getInput(){
	// 		const input=this.qs("input.input");
	// 		return input;
	// }

	onInputCCHandler(event) {
		let value = event.target.value;
		const nonSpaceValue = value.split(" ").join("");
		this.getInput().setAttribute("validation", "");

		if (!isNaN(nonSpaceValue)) {
			const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
			const matches = v.match(/\d{4,16}/g);
			const match = (matches && matches[0]) || "";
			const parts = [];

			for (let i = 0, len = match.length; i < len; i += 4) {
				parts.push(match.substring(i, i + 4));
			}
			if (parts.length) {
				const cc = parts.join("");
				this.ccTypeValidationIconLoader(cc)
				value = parts.join(" ");
			} else {
				this.getInput().setAttribute("rightIcon", "");
			}
		} else {
			const previousIndex = value.split("").length - 1;
			value = value.slice(0, previousIndex);
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
		const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
		const mastercardRegEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
		const amexRegEx= /^3[47][0-9]{13}$/;
		const discoverRegEx= /^6(?:011|5[0-9]{2})[0-9]{12}$/;
		const dinersRegEx= /^3[068][0-9]{12}$/;
		const carteRegEx=/^389[0-9]{11}$/;
		const maestroRegEx=/^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/;
		if(visaRegEx.test(cc)) {
			this.getInput().setAttribute("rightIcon", JSON.stringify({
				type: "fa-brands",
				name: "fa-cc-visa"
			}));
			const rightIcon=JSON.parse(this.getInput().getAttribute("rightIcon"));
			const ccIcon=this.shadowRoot.querySelector('.icon i');
			ccIcon.classList.add(rightIcon.type);
			ccIcon.classList.add(rightIcon.name);
			// ccIcon.classList.add(rightIcon.name);
		}
		else if (mastercardRegEx.test(cc)) {
			this.getInput().setAttribute("rightIcon", JSON.stringify({
				type: "fa-brands",
				name: "fa-cc-mastercard"
			}));
			const rightIcon=JSON.parse(this.getInput().getAttribute("rightIcon"));
			const ccIcon=this.shadowRoot.querySelector('.icon i');
			ccIcon.classList.add(rightIcon.type);
			ccIcon.classList.add(rightIcon.name);
		}
		else if (amexRegEx.test(cc)) {
			this.getInput().setAttribute("rightIcon", JSON.stringify({
				type: "fa-brands",
				name: "fa-cc-amex"
			}));
			const rightIcon=JSON.parse(this.getInput().getAttribute("rightIcon"));
			const ccIcon=this.shadowRoot.querySelector('.icon i');
			ccIcon.classList.add(rightIcon.type);
			ccIcon.classList.add(rightIcon.name);
		}
		else if (discoverRegEx.test(cc)) {
			this.getInput().setAttribute("rightIcon", JSON.stringify({
				type: "fa-brands",
				name: "fa-cc-discover"
			}));
			const rightIcon=JSON.parse(this.getInput().getAttribute("rightIcon"));
			const ccIcon=this.shadowRoot.querySelector('.icon i');
			ccIcon.classList.add(rightIcon.type);
			ccIcon.classList.add(rightIcon.name);
		}
		else if (dinersRegEx.test(cc)) {
			this.getInput().setAttribute("rightIcon", JSON.stringify({
				type: "fa-brands",
				name: "fa-cc-diners-club"
			}));
			const rightIcon=JSON.parse(this.getInput().getAttribute("rightIcon"));
			const ccIcon=this.shadowRoot.querySelector('.icon i');
			ccIcon.classList.add(rightIcon.type);
			ccIcon.classList.add(rightIcon.name);
		}
		else if (carteRegEx.test(cc)) {
			this.getInput().setAttribute("rightIcon", JSON.stringify({
				type: "fa-brands",
				name: "fa-credit-card"
			}));
			const rightIcon=JSON.parse(this.getInput().getAttribute("rightIcon"));
			const ccIcon=this.shadowRoot.querySelector('.icon i');
			ccIcon.classList.add(rightIcon.type);
			ccIcon.classList.add(rightIcon.name);
		}
		else if (maestroRegEx.test(cc)) {
			this.getInput().setAttribute("rightIcon", JSON.stringify({
				type: "fa-brands",
				name: "fa-credit-card"
			}));
			const rightIcon=JSON.parse(this.getInput().getAttribute("rightIcon"));
			const ccIcon=this.shadowRoot.querySelector('.icon i');
			ccIcon.classList.add(rightIcon.type);
			ccIcon.classList.add(rightIcon.name);
		}
		else {
			this.getInput().setAttribute("rightIcon", "");
			
		}
	}

	render() {
		return html`
			<div class="field">
				<div class="control has-icons-right">
					<input class="input" type="text" .id=${"ccInput"} name="cc-input"
					@input=${e =>e.target.value= this.onInputCCHandler(e)} placeholder="**** **** **** ****">
				
					<span class="icon is-small is-right">
					<i class=""></i>
					</span>
				</div>
				<p class="help is-danger"></p>
			</div>
		`;
	}
}

customElements.define(CcInput.is, CcInput);
