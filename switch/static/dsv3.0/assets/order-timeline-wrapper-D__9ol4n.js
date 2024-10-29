import{i as d,h,r as g,g as m,k as a,a as p,j as c}from"./index-C2PWchud.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";const u=d`
.content{
    padding:.75rem;    
}
.content ul{
    margin-left:0 !important;
}
.steps-container{
    display:flex;
    justify-content: space-between;
    position:relative;
}
.stepCol{
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    text-align:center;
    align-items:center;
}
.step-info{
    height:45px;
    margin-top:.5rem;
}
.step-info h3{
    color: var(--primary);
    font-weight:600;
    font-size:.875rem !important;
}
.step-info p{
    color:#ACACAC;
    font-size:.625rem !important;
    font-weight:400;
}

.step-circle{
    border-radius:50%;
    height:25px;
    width:25px;
    z-index:3;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    bottom: 0;
}

.step-circle .icon {
    color:#1751C5;
    fill:white;
    z-index:1;
}
.steps-connector {
    position: absolute;
    height: 5px !important;
    background-color: #1751C5;
    left:12%;
    min-width: 9rem;
    z-index:0;
}

.inactive .step-circle .icon {
    color:grey;
    
}

.inactive .step-info h3{
    color:grey;
}

.progress-bar{
    position:absolute;
    height:3px;

    background-color:var(--primary);
    z-index:0;
    top:25%;
    /* margin-left:110px; */
}

.progress-bar.inactive{
    background-color:transparent !important;
}

.progress-bar .indicator{
    position:absolute;
    height:100%;
    background:transparent;
}

.progress-bar.inactive .indicator{
    background-color:grey !important;
}

/* li:nth-child(5) .progress-bar{
    width:80px;
    /* display:none; 
} */
/* li:last-child{
    overflow:hidden;
} */
li:last-child .progress-bar{
    display:none;
}

@media(max-width:768px){
    .steps-container{
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;

    }
    .stepCol{
        flex-direction:row;
        justify-content:flex-start !important;
        text-align:left;
        align-items:flex-start;
    }
    .step-circle{
        margin-left:.35rem;
    }
    .step-info{
        padding-left:1.5rem;
        margin-top:.0 !important;
    }
    .progress-bar{
        transform:rotate(90deg);
        /* top:initial; */
       /* margin-left:-8rem; */
       /* right: 25.1rem; */
       
    }
    .progress-bar .indicator{
        /* width:0; */
  
    }
    /* li:nth-child(5) .progress-bar{
        width:initial;
    } */
}
`;class l extends h{static get properties(){return{steps:Array,e:{type:Object},cols:{type:Array},rows:{type:Array}}}constructor(){super(),this.steps=[],this.rows=[],this.cols=[],this.e=null}updated(t){if(t.has("e")||t.has("data")){this.steps=[...this.rows.map(i=>Object.fromEntries(i.map((s,r)=>[this.cols[r].label,s])))];const e=this.shadowRoot.querySelector(".steps-container");new ResizeObserver(()=>this.setProgressWidth()).observe(e)}}setProgressWidth(){const t=this.shadowRoot.querySelector(".steps-container"),e=this.shadowRoot.querySelector(".progress-bar"),i=this.shadowRoot.querySelector(".indicator"),r=t.offsetWidth/this.steps.length,o=t.offsetHeight/this.steps.length;window.innerWidth>768?(e.style.width=`${r*this.getActiveStepIndex()}px`,e.style.marginLeft=`${r/2}px`,i.style.width=`${r*this.getInactiveSteps()}px`,i.style.marginLeft=`${r*this.getActiveStepIndex()}px`):(e.style.width=`${o*this.getActiveStepIndex()}px`,e.style.transformOrigin=`${o/1.45}px -700%`,i.style.width=`${o*this.getInactiveSteps()}px`,i.style.left=`${o*this.getActiveStepIndex()}px`)}static get styles(){return[g(m),u,d`
                 :host {
                    display: block;
                }
            `]}static get is(){return"order-timeline"}getActiveStepIndex(){return this.steps.findIndex(t=>t.isActive)}getInactiveSteps(){return this.steps.length-1-this.getActiveStepIndex()}render(){return a`
            <div class="content">
                <ul class="columns steps-container">
                <div class="progress-bar ">
                                <span class="indicator"></span>
                            </div>     
                    ${this.steps.map((t,e)=>a`
                        <li class="column stepCol ${t.isActive?"active":""} ${e>this.getActiveStepIndex()?"inactive":""}">    
                            <div class="circle-container">
                                <div class="step-circle">
                                    ${e>this.getActiveStepIndex()?a`
                                        <span class="icon">
                                        <adaptive-ui-icon datacolor="var(--primary)" icon="icons:MdCheckCircleOutline"></adaptive-ui-icon>
                                        </span>
                                    `:a`
                                        <span class="icon">
                                        <adaptive-ui-icon datacolor="var(--primary)"  icon="icons:MdCheckCircle" ></adaptive-ui-icon>

                                        </span>
                                    `}    
                                </div>
                            </div>
                            <div class="step-info">
                                <h3>${t.title}</h3>
                                <p>${t.subtitle}</p>
                            </div>  
                           
                        </li>
                    `)}  
                    <!-- <div class="progress-bar ">
                                <span class="indicator"></span>
                            </div>      -->
                </ul>
            </div>
        `}}customElements.define(l.is,l);const x=({element:n,data:t,rows:e,cols:i})=>{const s=p.useRef(null);return p.useEffect(()=>{s.current&&n&&(s.current.e=n,s.current.data=t,s.current.rows=e,s.current.cols=i)},[n,t,e,i]),c.jsx("div",{children:n&&t&&e?c.jsx("order-timeline",{id:"order-timeline",ref:s}):c.jsx("p",{children:"Loading data..."})})},w=f(x);export{w as default};
