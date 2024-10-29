import{i as o,h as l,r as h,g as d,k as p,a as n,j as r}from"./index-C2PWchud.js";const x=o`
    .container {
        display:flex;
        flex-direction:row;
        width:100%;
        padding:16px;
        justify-content:center;
    }
    .steps-progress {
        display:flex;
        justify-content:center;
        width:100%;
        position:relative;
    }
    .step-container {
        display:flex;
        flex-direction:column;
        align-items:center;
        height:fit-content;
    }
    .step-circle {
        display:flex;
        width:30px;
        height:30px;
        border-radius:50%;
        justify-content:center;
        background-color:var(--md-sys-color-onBackground);
        z-index:2;
    }
    .step-number {
        color:white;
        align-self:center;
        margin: 0 !important;
    }
    .step-text {
        text-align:center;
    }
    .steps-connector {
        margin-top:15px;
        position: absolute;
        right: 0;
        height:1px;
        background-color:var(--primary);
    }
    .active {
        background-color: var(--primary);
    }
    .inactive {
        background-color:#bebebe;
    }
    @media screen and (max-width: 414px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 375px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 360px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 320px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
`;class c extends l{static get styles(){return[h(d),x,o`
				:host {
					display: block;
					width: 100%;
				}
			`]}static get properties(){return{steps:Array,activeStep:String,e:{type:Object}}}constructor(){super(),this.steps=[],this.activeStep="",this.e=null}updated(t){super.updated(t),(t.has("cols")||t.has("rows")||t.has("e"))&&(this.steps=this.propSteps?this.propSteps:this.e.details.steps,this.activeStep=this.propActiveStep?this.propActiveStep:this.e.details.active_step)}getActiveStepIndex(t){return t.findIndex((e,s)=>this.isStepActive(e,s))}stepConnectorDynamicStyle(){const t=this.steps.length,e=100/t,s=e*(t-1),a=e/2;return`width:${s}%;margin-right:${a}%;`}isStepActive(t,e){return isNaN(this.activeStep)?t===this.activeStep:e===this.activeStep}static get is(){return"steps-progress"}render(){return p`
			<div class="container content">
				<ul class="steps-progress">
					<hr class="steps-connector" style=${this.stepConnectorDynamicStyle()}>
					${this.steps.map((t,e,s)=>p`
							<li class="step-container" style="width: ${100/s.length}%;">
								<div class="step-circle ${this.isStepActive(t,e)?"active":""} ${e<this.getActiveStepIndex(s)?"inactive":""}">
									<h6 class="step-number">${e+1}</h6>
								</div>
								<h4 class="step-text">${t}</h4>
							</li>  
						`)}
				</ul>
			</div>
		`}}customElements.define(c.is,c);const u=({element:i})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&i&&(t.current.e=i)},[i]),r.jsx("div",{children:i?r.jsx("steps-progress",{id:"steps-progress",ref:t}):r.jsx("p",{children:"Loading data..."})})};export{u as default};
