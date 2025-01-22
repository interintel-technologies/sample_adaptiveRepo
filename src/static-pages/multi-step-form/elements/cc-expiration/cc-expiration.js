import {html, css, LitElement} from 'lit-element';
// import {CcExpirationBase} from '../../../../../elements/base/cc-expiration';
import { InputMixin } from '../../../../themes/dsv2.0/components/mixins/InputMixin';
import { multiStepMixin } from '../../mixins/multiStepMixin';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CcExpiration extends multiStepMixin(InputMixin(LitElement)) {
	
	get type() {
		return 'text';
	}

	static get properties() {
        return {
            value: String
        }
    }

    constructor() {
        super();
        this.value = '';
    }

	static get styles(){
		return[
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
		]
	}

	static get is() {
		return "cc-expiration";
	}

	formatExpDate(value) {
		// Remove non-numeric characters
		let formattedValue = value.replace(/\D/g, '');
  
		// Add a slash after the first two characters (month)
		if (formattedValue.length > 2) {
			formattedValue = formattedValue.slice(0, 2) + '-' + formattedValue.slice(2);
		}
		// Trim to a maximum length of 5 characters
		formattedValue = formattedValue.slice(0, 5);
  
		return formattedValue;
	  }
	

	  onInputCvcHandler(event){
		let target=event.target
		let value = target.value;
		// console.log(value)
		const trimmedValue = value.replace(/\s+/g, ''); // Remove any spaces
	
		const formattedValue = this.formatExpDate(trimmedValue);
		this.value=formattedValue
		target.value=formattedValue;

	// 	 const expirationYear = new Date().getFullYear() + 5;
    //   const inputYear = parseInt(formattedValue.slice(-2));
	  }

	render(){
		return html`
			<div class="field">
				<div class="control has-icons-right">
					<input class="input" placeholder="MM-YY" value=${this.value}  @input=${e=>this.onInputCvcHandler(e)} type="text" maxlength="5">
				</div>
				<p class="help is-danger"></p>
			</div>
		`
	}
}

customElements.define(CcExpiration.is, CcExpiration);
