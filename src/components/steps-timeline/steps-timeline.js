import { LitElement, css, html } from 'lit-element';
import { StepsTimelineStyles } from './steps-timeline-css.js';
import { multiStepMixin } from '../../static-pages/multi-step-form/mixins/multiStepMixin.js';

class StepsTimeline extends multiStepMixin(LitElement) {
    static get properties() {
        return {
            steps: Array
        }
    }

    constructor() {
        super();
        this.steps = [];
    }

    firstUpdated() {
        const stepsCont = this.shadowRoot.querySelector(".steps-container");      
        new ResizeObserver(() => this.setProgressWidth()).observe(stepsCont);
        const indicator = this.shadowRoot.querySelector(".indicator");
        const contWidth = stepsCont.offsetWidth;
        const stepWidth = contWidth / (this.steps).length;
        indicator.style.width = `${stepWidth*this.getInactiveSteps()}px`; 
        indicator.style.marginLeft=`${stepWidth/2}px`;
    }

    connectedCallback() {
        super.connectedCallback();
        this.steps=[{"isActive":true,"id":0},{"isActive":false,"id":1}];
        const responseObj = JSON.parse(sessionStorage.getItem('response'));
        if(responseObj){
            const e={"detail":2};
            this.setActiveStep(e)
        }else{
            this.addEventListener('new-step', e => this.setActiveStep(e));
        }
    }

    setActiveStep(e){
        const ind=this.steps.filter(step => step.id===e.detail).shift();
        this.steps.forEach(step => {
            step.isActive=false;
        });
        ind.isActive=true;
        const removedObj=this.steps.splice(e.detail,1, ind);
        const newSteps=this.steps.splice(removedObj)
        this.steps=newSteps;
        this.setProgressWidth();
    }

    setProgressWidth() {
        const stepsCont = this.shadowRoot.querySelector(".steps-container");
        const progressBar = this.shadowRoot.querySelector(".progress-bar");
        const indicator = this.shadowRoot.querySelector(".indicator");
        const contWidth = stepsCont.offsetWidth;
        const stepWidth = contWidth / (this.steps).length;
        progressBar.style.width = `${stepWidth*this.getActiveStepIndex()}px`;
        progressBar.style.marginLeft = `${stepWidth / 2}px`;
        indicator.style.width = `${stepWidth*this.getInactiveSteps()}px`; 
        indicator.style.marginLeft=`${stepWidth*this.getActiveStepIndex()}px`;
    }

    static get styles() {
        return [
            StepsTimelineStyles,
            css`
                 :host {
                    display: block;
                }
            `,
        ];
    }

    static get is() {
        return 'steps-timeline';
    }


    getActiveStepIndex() {
        return this.steps.findIndex(step => step.isActive);
    }

    getInactiveSteps(){
        return (this.steps.length-1)-this.getActiveStepIndex();
    }

    render() {
        return html`
            <div class="content">
                <ul class="columns steps-container">
                    <div class="progress-bar"><span class="indicator"></span></div>     
                    ${this.steps.map((step, index) => html`
                        <li class="column stepCol ${step.isActive ? "active" : ""} ${index > this.getActiveStepIndex() ? "inactive" : ""}">    
                            <div class="circle-container">
                                <div class="step-circle pt-1 ${step.isActive ? "active" : ""} ${index < this.getActiveStepIndex() ? "active" : ""}">
                                    ${index > this.getActiveStepIndex() ? html`
                                        
                                            <p>${step.id+1}</p>
                                        
                                    ` : html`
                                      
                                            <p>${step.id+1}</p>
                                      
                                    `}    
                                </div>
                            </div>                           
                        </li>
                    `)}  
                </ul>
            </div>
        `;
    }

}

customElements.define(StepsTimeline.is, StepsTimeline);