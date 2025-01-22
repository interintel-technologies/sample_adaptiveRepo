import { html, css, unsafeCSS } from 'lit-element';
import { StepsProgress2Styles } from './steps-progress-2-css';
import { SectionPElementDsc } from '../../base/elements/section-pelement-dsc';
import globalStyles from '../../App.css?raw';

class StepsProgress2 extends SectionPElementDsc {
    
    static get styles() {
        return [unsafeCSS(globalStyles),StepsProgress2Styles];
    }

    static get properties() {
        return {
            steps: Array,
            inProgressConnectorCircles: Array
        };
    }
    
    constructor() {
        super();
        this.steps = [];
        this.inProgressConnectorCircles = [];
    }

    firstUpdated() {
        this.loader.then(() => {
            this.steps = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
            const stepProgress = this.shadowRoot.querySelector(".steps-progress");
            
            this.setDynamicStyles()
            
            new ResizeObserver(()=>this.setDynamicStyles()).observe(stepProgress);
        });
    }

    setDynamicStyles() {
        const stepContainer = this.shadowRoot.querySelector(".step-container");
        if(stepContainer) {
            const width = stepContainer.getBoundingClientRect().width;

            this.setConnectorWidths(width)
            this.setTimeTakenPositions(width)
            this.inProgressConnectorCircles = [...this.createInProgressConnectorCircles(width)];
        }
    }
    
    setConnectorWidths(stepContainerWidth) {
        const stepsConnector = this.shadowRoot.querySelector(".steps-connector");
        const inProgressConnector = this.shadowRoot.querySelector(".in-progress-connector");

        const stepsConnectorStart = stepContainerWidth / 2;
        const inProgressConnectorStart = (this.getActiveStepIndex() * stepContainerWidth) + (stepContainerWidth / 2);
        
        stepsConnector.setAttribute("style", `width: ${stepContainerWidth*this.getActiveStepIndex()}px; left: ${stepsConnectorStart}px;`);
        inProgressConnector.setAttribute("style", `width: ${stepContainerWidth}px; left: ${inProgressConnectorStart}px;`);
    }

    setTimeTakenPositions(stepContainerWidth) {
        this.steps.forEach((step, index) => {
            const text = this.shadowRoot.querySelector("#text"+index);
            const position = stepContainerWidth + (stepContainerWidth * index);
            
            text.setAttribute("style", `left: ${position}px;`);
        });
    }

    createInProgressConnectorCircles(width) {
        const circlesNo = width / 25;
        const circles = [];

        for(let i = 0; i < circlesNo; i ++) {
            circles.push(i);
        }

        return circles;
    }
    
    getActiveStepIndex() {
        return this.steps.findIndex(step => step.isActive);
    }

    isStepComplete(index) {
        return index < this.getActiveStepIndex() ? true : false;
    }

    static get is() {
        return "steps-progress-2";
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <ul class="steps-progress">
                        <hr class="steps-connector">
                        <div class="in-progress-connector">
                            ${
                                this.inProgressConnectorCircles.map(() => html`
                                    <div class="in-progress-circle"></div>
                                `)
                            }
                        </div>
                        ${
                            this.steps.map((step, index) => html`
                                <li class="step-container">
                                    <div class="step-circle ${step.isActive ? "active":""} ${index > this.getActiveStepIndex() ? "inactive" : ""}"></div>
                                    <h6>${step.title}</h6>
                                    <p>${step.subtitle}</p>
                                    <h6 class="time-taken" id="text${index}">${step.timeTaken}</h6>
                                </li>
                            `)
                        }
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define(StepsProgress2.is, StepsProgress2);
