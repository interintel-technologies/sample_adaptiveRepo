import{i as l,k as n,a,j as c}from"./index-C2PWchud.js";import{S as d}from"./section-pelement-dsc-WXP1kFbN.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const g=l`
    .column {
        overflow-x: auto;
    }
    h6, p {
        text-align: center !important;
    }
    .steps-progress {
        display:flex;
        justify-content:center;
        width:100%;
        margin: 0 !important;
        position:relative;
    }
    .step-container {
        display:flex;
        flex-direction:column;
        align-items:center;
        height:fit-content;
        width: 100%;
        margin: 0!important;
    }
    .time-taken {
        position: absolute;
        top: 30px;
        color: black !important;
        transform: translateX(-50%);
    }
    
    .step-circle {
        display:flex;
        width:40px;
        height:40px;
        border-radius:50%;
        justify-content:center;
        background-color: var(--primary);
        position: relative;
        margin-bottom: 1em;
        z-index:2;
    }
    .steps-connector {
        position: absolute;
        top: 20px;
        height: 5px !important;
        background-color: var(--primary);
        margin: 0 !important;
        transform: translateY(-50%);
        min-width: 300px;
    }
    .step-number {
        color:white;
        align-self:center;
    }
    .in-progress-connector {
        display: flex;
        position: absolute;
        justify-content: space-around;
        top: 20px;
        transform: translateY(-50%);
    }
    .in-progress-circle {
        display: flex;
        width:5px;
        height:5px;
        border-radius:50%;
        background-color: grey;
    }
    .step-text {
        text-align:center;
    }
    
    .active {
        background-color: var(--link);
    }
    .inactive {
        background-color: grey;
    }
    @media screen and (max-width: 414px){ 
        .step-circle {
            width:20px;
            height:20px;
        }
        .steps-connector, .in-progress-connector {
            top:10px;
        }
        .time-taken, p {
            display: none
        }
        
    }
`;class p extends d{static get styles(){return[unsafeCSS(globalStyles),g]}static get properties(){return{steps:Array,inProgressConnectorCircles:Array}}constructor(){super(),this.steps=[],this.inProgressConnectorCircles=[]}firstUpdated(){this.loader.then(()=>{this.steps=[...this.rows.map(e=>Object.fromEntries(e.map((s,r)=>[this.cols[r].label,s])))];const t=this.shadowRoot.querySelector(".steps-progress");this.setDynamicStyles(),new ResizeObserver(()=>this.setDynamicStyles()).observe(t)})}setDynamicStyles(){const t=this.shadowRoot.querySelector(".step-container");if(t){const e=t.getBoundingClientRect().width;this.setConnectorWidths(e),this.setTimeTakenPositions(e),this.inProgressConnectorCircles=[...this.createInProgressConnectorCircles(e)]}}setConnectorWidths(t){const e=this.shadowRoot.querySelector(".steps-connector"),s=this.shadowRoot.querySelector(".in-progress-connector"),r=t/2,i=this.getActiveStepIndex()*t+t/2;e.setAttribute("style",`width: ${t*this.getActiveStepIndex()}px; left: ${r}px;`),s.setAttribute("style",`width: ${t}px; left: ${i}px;`)}setTimeTakenPositions(t){this.steps.forEach((e,s)=>{const r=this.shadowRoot.querySelector("#text"+s),i=t+t*s;r.setAttribute("style",`left: ${i}px;`)})}createInProgressConnectorCircles(t){const e=t/25,s=[];for(let r=0;r<e;r++)s.push(r);return s}getActiveStepIndex(){return this.steps.findIndex(t=>t.isActive)}isStepComplete(t){return t<this.getActiveStepIndex()}static get is(){return"steps-progress-2"}render(){return n`
            <div class="content">
                <div class="column content">
                    <ul class="steps-progress">
                        <hr class="steps-connector">
                        <div class="in-progress-connector">
                            ${this.inProgressConnectorCircles.map(()=>n`
                                    <div class="in-progress-circle"></div>
                                `)}
                        </div>
                        ${this.steps.map((t,e)=>n`
                                <li class="step-container">
                                    <div class="step-circle ${t.isActive?"active":""} ${e>this.getActiveStepIndex()?"inactive":""}"></div>
                                    <h6>${t.title}</h6>
                                    <p>${t.subtitle}</p>
                                    <h6 class="time-taken" id="text${e}">${t.timeTaken}</h6>
                                </li>
                            `)}
                    </ul>
                </div>
            </div>
        `}}customElements.define(p.is,p);const u=({element:o})=>{const t=a.useRef(null);return a.useEffect(()=>{const e=t.current;e&&o&&(e.e=o)},[o]),c.jsx("div",{children:o?c.jsx("steps-progress-2",{id:"steps-progress-2",ref:t}):c.jsx("p",{children:"Loading data..."})})},b=h(u);export{b as default};
