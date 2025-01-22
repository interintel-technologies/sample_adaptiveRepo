
import {html, css, unsafeCSS} from 'lit-element';
import "../password-input/password-input";
import { PinInputBase } from '../../base/elements/pin-input';
import globalStyles from '../../App.css?raw'



/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PinInput extends PinInputBase {

	static get styles(){
		return [
			unsafeCSS(globalStyles),
			css`
				:host {
					display: block;
				}
			`
		];
	}

	constructor() {
		super();
		this.name = '';
		this.hint ='';
		this.icon = '';
		this.e = null
	}
	
	static get properties(){
		return {
			name: String,
			icon: String,
			hint: String,
			e: { type: Object },
			
		}
	}

	
    
	getInput() {
		return this.shadowRoot.querySelector('password-input');
	}

	getValue() {
		return this.getInput().value;
	}

	onInputHandler(event) {
		let value = event.detail.target.value;

		if (isNaN(value)) {
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

	render() {
		return html`
			<password-input .e=${this.e} .id=${"pinInput"} .value=${this.value} @on-input=${e => (e.details.target.value = this.onInputHandler(e))} .hint=${this.e && this.e.details.hint} 
				.name=${this.e.name} .inputMode=${"numeric"} .minLength=${this.e.minLength} .maxLength=${this.e.maxLength}></password-input>
		`;
	}
}

customElements.define(PinInput.is, PinInput);
