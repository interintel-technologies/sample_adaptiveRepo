
import {html, css, unsafeCSS} from 'lit-element';
import { BusinessIndustrySelectorStyles } from './business-industry-selector-css';
import { BusinessIndustrySelectorBase } from '../../base/elements/businessIndustrySelector';
import globalStyles from '../../App.css?raw';


class BusinessIndustrySelector extends BusinessIndustrySelectorBase {
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			BusinessIndustrySelectorStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			businessIndustries: Array,
			e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
		}
	}

	constructor() {
		super();
		this.businessIndustries = [];
		this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
	}



	updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {            
			this.businessIndustries = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];

        }
    }

	unselectBusinessIndustryCard() {
		const selectedCard = this.shadowRoot.querySelector(".selected");
		if(selectedCard) {
			selectedCard.classList.remove("selected");
		}
	}

	onBusinessIndustryCardClickHandler(e, businessName) {
		this.unselectBusinessIndustryCard();
		const clickedCard = e.target;
		clickedCard.classList.add("selected"); 

		if(this.value === businessName) {
			this.value = undefined;
			this.unselectBusinessIndustryCard();
		}
		else {
			this.value = businessName;
		}
	}

	onNextBtnClickHandler() {
		console.log("submitting 1 ");

		this.dispatchEvent(new CustomEvent('submit-form', { detail: { action: this.action } }));
		console.log("submitting 2 ");
		
		// this.pl.submitForm();
	}

	valid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");
		const selectedCard = this.shadowRoot.querySelector(".selected");

		selectedCard.classList.add("card-success");
        warningText.style.display = 'none';
    
        setTimeout(()=>{
			selectedCard.classList.remove("card-success");
        }, 3000);
    }
    
    invalid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");
		
        warningText.style.display = 'block';
    }

	static get is() {
		return 'business-industry-selector';
	}

	render() {
		return html`
			<div class="content">
				<h4>${this.e[0] && this.e[0]}</h4>
				<div class="columns is-multiline">
					${
						this.businessIndustries.length > 0 ? this.businessIndustries.map(businessIndustry =>html`
							<div class="column is-2">
								<div class="card is-flex" @click=${e => this.onBusinessIndustryCardClickHandler(e, businessIndustry.name)}>
									<span class="icon is-medium">
										<adaptive-ui-icon icon="${businessIndustry.icon}"></adaptive-ui-icon>
									</span>
									<h5>${businessIndustry.name}</h5>
									<p>${businessIndustry.description}</p>
								</div>
							</div>
						`) : html`<h4>There are no Industries to Select</h4>`
					}
				</div>
				<div class="actions">
					<h4 class="unavailable">Can't see your kind of service?</h4>
					<button class="button is-primary" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
				</div>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
			</div>
		`;
	}
}

customElements.define(BusinessIndustrySelector.is, BusinessIndustrySelector);
