
import {html,css, LitElement, unsafeCSS} from 'lit-element';
import { StepsProgressStyles } from './steps-progress-css';
import globalStyles from '../../App.css?raw';

export class StepsProgress extends LitElement{

	static get styles() {
		return [
			unsafeCSS(globalStyles), 
			StepsProgressStyles,
			css`
				:host {
					display: block;
					width: 100%;
				}
			`
		];
	}

	static get properties() {
		return {
			steps: Array,
			activeStep: String,
			e: { type: Object },
		};
	}

	constructor() {
		super();
		this.steps = [];
		this.activeStep = "",
		this.e = null 
	}

	updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
			this.steps = this.propSteps ? this.propSteps : this.e.details.steps;
			this.activeStep = this.propActiveStep ? this.propActiveStep : this.e.details.active_step; 
	
        }}

	// firstUpdated() {
	// 	this.steps = this.propSteps ? this.propSteps : this.e.details.steps;
	// 	this.activeStep = this.propActiveStep ? this.propActiveStep : this.e.details.active_step; 
	// }

	getActiveStepIndex(array) {
		return array.findIndex((step,index) => this.isStepActive(step,index));
	}

	stepConnectorDynamicStyle() {
		const stepsLength=this.steps.length;
		const stepWidth=100/stepsLength;
		const stepConnectorWidth=stepWidth*(stepsLength-1);
		const stepConnectorMarginRight=stepWidth/2;

		return `width:${stepConnectorWidth}%;margin-right:${stepConnectorMarginRight}%;`
	}

	isStepActive(step,index) {
		if(isNaN(this.activeStep)) {
			return step === this.activeStep;
		}
		else {
			return index === this.activeStep;
		}
	}

	static get is() {
		return 'steps-progress';
	}

	render() {
		return html`
			<div class="container content">
				<ul class="steps-progress">
					<hr class="steps-connector" style=${this.stepConnectorDynamicStyle()}>
					${
						this.steps.map((step,index,array)=>html`
							<li class="step-container" style="width: ${100/(array.length)}%;">
								<div class="step-circle ${this.isStepActive(step,index) ? "active":""} ${index < this.getActiveStepIndex(array) ? "inactive" : ""}">
									<h6 class="step-number">${index+1}</h6>
								</div>
								<h4 class="step-text">${step}</h4>
							</li>  
						`)     
					}
				</ul>
			</div>
		`;
	}
}
customElements.define(StepsProgress.is, StepsProgress);