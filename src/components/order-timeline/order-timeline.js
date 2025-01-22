import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { OrderTimelineStyles } from './order-timeline-css';
import globalStyles from '../../App.css?raw';


class OrderTimeline extends LitElement {
    static get properties() {
        return {
            steps: Array,
            e: {type: Object},
            cols: {type: Array},
            rows: {type: Array}
        }
    }


    constructor() {
        super();
        this.steps = [];
        this.rows = [];
        this.cols = [];
        this.e = null
    }

    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('data')) {
            this.steps = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
            const stepsCont = this.shadowRoot.querySelector(".steps-container");      
            new ResizeObserver(() => this.setProgressWidth()).observe(stepsCont);


        }
    }

    // firstUpdated() {
    //     this.loader.then(() => {
    //         this.steps = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
    //         const stepsCont = this.shadowRoot.querySelector(".steps-container");      
    //         new ResizeObserver(() => this.setProgressWidth()).observe(stepsCont);

    //     });
    // }

    setProgressWidth() {
        const stepsCont = this.shadowRoot.querySelector(".steps-container");
        const progressBar = this.shadowRoot.querySelector(".progress-bar");
        const indicator = this.shadowRoot.querySelector(".indicator");
        const contWidth = stepsCont.offsetWidth;
        const stepWidth = contWidth / (this.steps).length;
        const contHeight= stepsCont.offsetHeight;
        const stepHeight = contHeight / (this.steps).length;
        if (window.innerWidth > 768) {
            
            progressBar.style.width = `${stepWidth*this.getActiveStepIndex()}px`;
            progressBar.style.marginLeft = `${stepWidth / 2}px`;
            indicator.style.width = `${stepWidth*this.getInactiveSteps()}px`; 
            indicator.style.marginLeft=`${stepWidth*this.getActiveStepIndex()}px`;
          
        }else{
            progressBar.style.width = `${stepHeight*this.getActiveStepIndex()}px`;
            // progressBar.style.marginTop = `${stepHeight/2}px`;
            progressBar.style.transformOrigin = `${stepHeight/1.45}px -700%`;
            indicator.style.width = `${stepHeight*this.getInactiveSteps()}px`; 
            indicator.style.left=`${stepHeight*this.getActiveStepIndex()}px`;
            
        }

    }



    static get styles() {
        return [
            unsafeCSS(globalStyles),
            OrderTimelineStyles,
            css`
                 :host {
                    display: block;
                }
            `,
        ];
    }

    static get is() {
        return 'order-timeline';
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
                <div class="progress-bar ">
                                <span class="indicator"></span>
                            </div>     
                    ${this.steps.map((step, index) => html`
                        <li class="column stepCol ${step.isActive ? "active" : ""} ${index > this.getActiveStepIndex() ? "inactive" : ""}">    
                            <div class="circle-container">
                                <div class="step-circle">
                                    ${index > this.getActiveStepIndex() ? html`
                                        <span class="icon">
                                        <adaptive-ui-icon datacolor="var(--primary)" icon="icons:MdCheckCircleOutline"></adaptive-ui-icon>
                                        </span>
                                    ` : html`
                                        <span class="icon">
                                        <adaptive-ui-icon datacolor="var(--primary)"  icon="icons:MdCheckCircle" ></adaptive-ui-icon>

                                        </span>
                                    `}    
                                </div>
                            </div>
                            <div class="step-info">
                                <h3>${step.title}</h3>
                                <p>${step.subtitle}</p>
                            </div>  
                           
                        </li>
                    `)}  
                    <!-- <div class="progress-bar ">
                                <span class="indicator"></span>
                            </div>      -->
                </ul>
            </div>
        `;
    }

}

customElements.define(OrderTimeline.is, OrderTimeline);