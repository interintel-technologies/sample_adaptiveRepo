
import {html, css, unsafeCSS} from 'lit-element';
import {CvcInputBase} from '../../base/elements/cvc-input';
import "../number-input/number-input";
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CvcInput extends CvcInputBase {

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
	}
	
	static get properties(){
		return {
			name: String,
			icon: String,
			hint: String,
		}
	}

	getInput() {
		return this.shadowRoot.querySelector('number-input');
	}

	getValue() {
		return this.getInput().value;
	}

	onInputHandler(event) {
		this.value = event.detail.target.value;

		this.dispatchEvent(new CustomEvent('on-input', {
            bubbles: true,
            composed: true,
            detail: event
        }));
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
			<number-input .id=${"cvcInput"} .value=${this.value} @on-input=${e => this.onInputHandler(e)} .hint=${this.hint} .leftIcon=${JSON.stringify({ type: "adaptive-ui-icon", name: this.icon })} .name=${this.name} .maxLength=${3}></number-input>
		`;
	}
}

customElements.define(CvcInput.is, CvcInput);
