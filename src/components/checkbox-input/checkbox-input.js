import {html, css, unsafeCSS} from 'lit-element';
import {CheckboxInputBase} from '../../base/elements/checkbox-input';
import {CheckboxInputStyles} from './checkbox-input-css';
import globalStyles from '../../App.css?raw';



/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CheckboxInput extends CheckboxInputBase {

	static get styles(){
		return [
			unsafeCSS(globalStyles),
			CheckboxInputStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			'rounded': Boolean,
			e: { type: Object }, // Add `e` as a property

		};
	}

	constructor() {
		super();
		this.rounded = false;
		this.e = null; // Initialize `e` to null

	}

	firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);
		this.rounded = this.e.details['rounded'] || false;
		this.shadowRoot.querySelector('#checkbox_1').checked = this.checked;
	}

	updated(changedProperties) {
        if (changedProperties.has('e')) {
            
            if (this.e && this.e.details.length > 0) {
                this.rounded = this.e.details.details['rounded'] || false;
            }
        
        }
    }

	getInput() {
		return this.shadowRoot.querySelector('input');
	}

	getValue() {
		if(this.id != undefined && this.id != null){
			return this.id;
		}

		return this.shadowRoot.querySelector('#checkbox_1').checked;
	}

	valid(validation) {
	}
	


	render() {
		return html`
			<div class="content">
				<div class="checkbox">
					<input type="checkbox" name=${this.e.formName} id="checkbox_1">
					<label for="checkbox_1">${this.e.name}</label>
				</div>
			</div>
		`;
	}
}

window.customElements.define(CheckboxInput.is, CheckboxInput);
