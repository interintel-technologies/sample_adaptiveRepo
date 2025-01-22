import {html, css, LitElement, unsafeCSS} from 'lit-element';
import { SpecializationSelectorStyles } from './specialization-selector-css';
import globalStyles from '../../App.css?raw';


class SpecializationSelector extends LitElement {
	static get styles() {
		return [
			unsafeCSS(globalStyles), 
			SpecializationSelectorStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			specializations:Array,
			cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
		}
	}

	constructor() {
		super();
		this.specializations = [];
	}

	// firstUpdated() {
	// 	this.loader.then(()=>{
	// 		this.specializations = this.rows;
	// 	});
	// }
	
	updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
			this.specializations = this.rows;
        }}


	onNextBtnClickHandler() {
        this.value = [];
        this.shadowRoot.querySelectorAll(".check").forEach(checkbox=>{
            if(checkbox.checked) {
                this.value = [...this.value,checkbox.value];
            }
        });
		this.dispatchEvent(new CustomEvent('submit-form', { detail: { action: 'ACTION_SUBMIT' } }));

		// this.pl.submitForm();
	}

	valid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");
        const checkBoxes = this.shadowRoot.querySelectorAll(".check");

		checkBoxes.forEach(checkbox=>{
            if(checkbox.checked) {
                checkbox.classList.add("input-success");
            }
        });
        warningText.style.display = 'none';
    
        setTimeout(()=>{
            checkBoxes.forEach(checkbox=>{
                if(checkbox.checked) {
                    checkbox.classList.remove("input-success");
                }
            });
        }, 3000);
    }

	getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label === columnLabel); 
    }
    
    invalid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");

		warningText.style.display = 'block';
    }

	static get is() {
		return 'specialization-selector';
	}

	render() {
		return html`
			<div class="content">
				<div class="column content">
					<div class="columns is-multiline">
						${
							this.specializations.map((specialization,index)=>html`
								<div class="column is-4">
									<label for="specializationInput${index}" class="card is-flex">
										<input id="specializationInput${index}" class="check" type="checkbox" value=${specialization[0]}>	
										<h5 class="c-title">${specialization[0]}</h5>
									</label>
								</div>
							`)
						}
					</div>
					<div class="level">
						<h4 class="unavailable">Back</h4>
						<button class="button" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
					</div>
					<p id="warning-text">${this.e.name} required</p>
				</div>
			</div>
		`;
	}
}

customElements.define(SpecializationSelector.is, SpecializationSelector);
