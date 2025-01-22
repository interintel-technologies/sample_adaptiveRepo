
import {html, css, LitElement} from 'lit-element';
// import {CvcInputBase} from '../../../../../elements/base/cvc-input';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin.js';
import { InputMixin } from '../../../../themes/dsv2.0/components/mixins/InputMixin.js';
// import "../number-input/number-input";

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
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
  
class CvcInput extends InputMixin(ThemeMixin(LitElement)) {

	static get styles(){
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
			`
		];
	}

	constructor() {
		super();
		this.name = 'cvc-input';
		this.hint ='';
		this.icon = '';
		this.Validation = Validation;
	}

	
	
	static get properties(){
		return {
			name: String,
			icon: String,
			hint: String,
		}
	}

	getInput() {
		return this.qs('input.input');
	}

	getValue() {
		return this.getInput().value;
	}

	onInputHandler(event) {
	
		this.dispatchEvent(new CustomEvent('on-input', {
            bubbles: true,
            composed: true,
            detail: event
        }));

		const formattedValue = (event.target.value).slice(0, 3);
	
		this.value=formattedValue;

		event.target.value=this.value;
	}

	validate() {
		if (this.getValue().length !==3) {
		  if (this.getValue().length !==3) {
			return new this.Validation(false, this.name+' 3 numbers required');
		  } else {
			return new this.Validation(false, this.name+' is Required');
		  }
		}
		return new this.Validation(true, 'valid');
	  }
	
	
	valid(validation) {
		this.getInput().setAttribute("validation", JSON.stringify({
			isValid: true,
			validationMessage: ""
		}));
	}

	invalid(validation) {
		this.getInput().setAttribute("validation", JSON.stringify({
			isValid: false,
			validationMessage: validation.validationMessage
		}));
	}

	static get is(){
		return 'cvc-input';
	}

	render() {
		return html`
		    <div class="field">
				<div class="control has-icons-right">
					<input class="input" placeholder="123" type="number" id=${"cvcInput"}  @input=${e => this.onInputHandler(e)} leftIcon=${JSON.stringify({ type: "adaptive-ui-icon", name: this.icon })} name=${this.name} maxLength="3">
				</div>
				<p class="help is-danger"></p>
            </div>
		`;
	}
}

customElements.define(CvcInput.is, CvcInput);
