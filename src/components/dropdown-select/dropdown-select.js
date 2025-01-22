
import {html, css, unsafeCSS} from 'lit-element';
import {DropdownSelectBase} from '../../base/elements/dropdown-select';
import "../select-element/select-element.js";
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DropdownSelect extends DropdownSelectBase {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			css`
				:host {
					display: block;
					height: 100%;
				}
			`
		];
	}

	static get properties() {
		return {
			selected: String,
			isLoading: Boolean,
			options: Array,
			e: { type: Object },
			rows: { type: Array },
			cols: { type: Array },

		};
	}

	constructor() {
		super();
    this.e = null
		this.selected = "";
		this.isLoading = false;
		this.options = [];
		this.rows = []
		this.cols = []

	}

	updated(changedProperties) {
		if (changedProperties.has('e') || changedProperties.has('cols')) {
			
			// Clear previous options to avoid duplication
			// this.options = [];
	
			const options=this.rows.map(row => {
				const option = {};
				row.forEach((rowValue, index) => {
					if (index === 0) {
						option.value = rowValue;
					}
					else if (index === 1) {
						option.label = rowValue;
					}
					else {
						if (rowValue === true) {
							this.selected = row[0];
						}
					}
				});
				return option;
				// this.options = [...this.options, option];
			});
	
			// Add default option at the beginning
			options.unshift({
				value: '',
				label: '--Please choose an option--'
			});

			  // Update the reactive property once
			  this.options = options;
	
		}
	}
	



	getInput() {
		return this.shadowRoot.querySelector("select-element");
	}

	getValue() {
		return this.getInput().value;
	}

	valid(validation) {
		this.getInput().setAttribute("validation", JSON.stringify({
			isValid: true,
			validationMessage: "Field is empty"
		}));
	}

	invalid(validation) {
		this.getInput().setAttribute("validation", JSON.stringify({
			isValid: false,
			validationMessage: "invalid"
		}));
	}

	render() {
		return html`
			<select-element .name=${this.e?.name} .value=${this.selected} .isLoading=${this.isLoading} .options=${this.options}></select-element>
		`;
	}
}

customElements.define(DropdownSelect.is, DropdownSelect);
