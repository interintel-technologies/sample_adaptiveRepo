var C=n=>{throw TypeError(n)};var Q=(n,t,s)=>t.has(n)||C("Cannot "+s);var F=(n,t,s)=>t.has(n)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,s);var I=(n,t,s)=>(Q(n,t,"access private method"),s);import{i as P,k as x,h as Y,a as W,j as q}from"./index-C2PWchud.js";import{S as Z}from"./SectionTemplate-Drou2IoY.js";import{w as tt}from"./datasource-mixin-DMQBE4lo.js";const st=n=>{var t,D,r;return r=class extends n{constructor(){super(...arguments);F(this,t)}async httpRequest(i,a,b,L){const l=await fetch(i,I(this,t,D).call(this,a,b,L));if(!l.ok)throw new Error("Network response was not ok");const d=l.headers.get("content-type");if(d&&d.includes("text/html"))return l.text();{const S=await JSON.parse(l.json());return{...S,isSuccessful:S.response_status===Z}}}},t=new WeakSet,D=function(i,a,b){const L=JSON.stringify(a);let l={};switch(i){case"GET":l={method:i,headers:{"Content-Type":"application/json"}};break;case"POST":l={method:i,body:L,headers:{"Content-Type":"application/json","X-CSRFToken":b}};break;case"PUT":l={method:i,body:L,headers:{"Content-Type":"application/json"}};break;case"DELETE":l={method:i,headers:{"Content-Type":"application/json"}};break;default:console.error(`Method ${i} doesn't Exist`);break}return Object.assign(l.headers,{Authorization:`Bearer ${b}`,"Access-Control-Allow-Origin":"*"}),l},r},et=P`
.content{
    padding:.75rem;    
}
.content ul{
    margin-left:0 !important;
    margin-top:0 !important;
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
;
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
    width:27px;
    z-index:3;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    bottom: 0;
    background-color: #EFF0F6;

}

.step-circle.active{
    background-color:var(--primary);
;
    color:white;
}

.stepCol.inactive .step-circle p{
    color:black !important;
}


.step-circle .icon {
    color:var(--primary);
;
    fill:white;
    z-index:1;
}
.steps-connector {
    position: absolute;
    height: 5px !important;
    background-color: var(--primary);
;
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
;
    z-index:0;
    top:50%;

}

.progress-bar.inactive{
    background-color: #EFF0F6 !important;
}

.progress-bar .indicator{
    position:absolute;
    height:100%;
    background: #EFF0F6;
}

.progress-bar.inactive .indicator{
    background-color:grey !important;
}

.columns:last-child{
    margin-bottom:1.5rem !important;
}
.columns:first-child{
    margin-top: 0.25rem !important;
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

/* @media(max-width:768px){
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
    }
} */
`,it=n=>class extends st(n){static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback(),window.addEventListener("new-step",t=>this.setActiveStep(t))}setActiveStep(t){}pxToRem(t,s=16){let r=t;return(typeof t=="string"||t instanceof String)&&(r=r.replace("px","")),r=parseInt(r),1/s*r}validate(t){const s=this.qs("#cardholder_name"),r=s.value,f=this.qs("#cardNameAlert"),i=this.qs("#card_number"),a=i.shadowRoot.querySelector(".input"),b=i.shadowRoot.querySelector("p.help");i.shadowRoot.querySelector(".icon i");const L=i.value,l=this.qs("#exp_date"),d=l.shadowRoot.querySelector(".input"),S=d.value,R=l.shadowRoot.querySelector("p.help"),T=this.qs("#cvc"),v=T.shadowRoot.querySelector(".input"),A=T.value,j=T.shadowRoot.querySelector("p.help"),o=this.qs("#email_address"),O=o.value,N=this.qs("#emailAlert"),c=this.qs("#phone_number"),M=c.value,V=this.qs("#phoneAlert"),u=this.qs("#street_address"),p=this.qs("#card_country"),H=this.qs("#streetAlert"),g=this.qs("#card_city"),h=this.qs("#zip_code"),E=this.qs("#cityAlert"),m=this.qs("#state_province"),_=this.qs("#stateAlert"),k=this.qs("#zipAlert"),$=this.qs("#countryAlert");if(t==1){if(r==""||r===null||r.length===0){s.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),s.classList.remove("is-success"),s.classList.add("is-danger");const e=JSON.parse(s.getAttribute("validation"));return f.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else s.classList.remove("is-danger"),s.classList.add("is-success"),setTimeout(()=>{s.classList.remove("is-success")},3e3),s.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),f.innerHTML="";if(L==""||L===null||L.length===0){a.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),a.classList.remove("is-success"),a.classList.add("is-danger");const e=JSON.parse(a.getAttribute("validation"));return b.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else{const e=/^(?:4[0-9]{12}(?:[0-9]{3})?)$/,J=/^(?:5[1-5][0-9]{14})$/,B=/^3[47][0-9]{13}$/,U=/^6(?:011|5[0-9]{2})[0-9]{12}$/,G=/^3[068][0-9]{12}$/,X=/^389[0-9]{11}$/,K=/^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,y=L.split(" ").join("");if(y.length!==16){a.classList.remove("is-success"),a.classList.add("is-danger"),a.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Minimum of 16 digits required"}));const w=JSON.parse(a.getAttribute("validation"));return b.innerHTML=w.validationMessage,this.validationObject={isValid:!1},this.validationObject}else if(!e.test(y)&&!J.test(y)&&!B.test(y)&&!U.test(y)&&!G.test(y)&&!X.test(y)&&!K.test(y)){a.classList.remove("is-success"),a.classList.add("is-danger"),a.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Card Number is not valid"}));const w=JSON.parse(a.getAttribute("validation"));return b.innerHTML=w.validationMessage,this.validationObject={isValid:!1},this.validationObject}else a.classList.remove("is-danger"),a.classList.add("is-success"),setTimeout(()=>{a.classList.remove("is-success")},3e3),a.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),b.innerHTML=""}if(S==""||S===null||S.length===0){d.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),d.classList.remove("is-success"),d.classList.add("is-danger");const e=JSON.parse(d.getAttribute("validation"));return R.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else d.classList.remove("is-danger"),d.classList.add("is-success"),setTimeout(()=>{d.classList.remove("is-success")},3e3),d.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),R.innerHTML="";if(A==""||A===null||A.length===0){v.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),v.classList.remove("is-success"),v.classList.add("is-danger");const e=JSON.parse(v.getAttribute("validation"));return j.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else if(A.length!==3){v.classList.remove("is-success"),v.classList.add("is-danger"),v.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"3 numbers required"}));const e=JSON.parse(v.getAttribute("validation"));return j.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else v.classList.remove("is-danger"),v.classList.add("is-success"),setTimeout(()=>{v.classList.remove("is-success")},3e3),v.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),j.innerHTML="";if(O==""||O===null||O.length===0){o.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),o.classList.remove("is-success"),o.classList.add("is-danger");const e=JSON.parse(o.getAttribute("validation"));return N.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else if(this.validateEmail(O)===!0)o.classList.remove("is-danger"),o.classList.add("is-success"),setTimeout(()=>{o.classList.remove("is-success")},3e3),o.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),N.innerHTML="";else{o.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"incorrect email format"})),o.classList.remove("is-success"),o.classList.add("is-danger");const e=JSON.parse(o.getAttribute("validation"));return N.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}if(M==""||M===null||M.length===0){c.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),c.classList.remove("is-success"),c.classList.add("is-danger");const e=JSON.parse(c.getAttribute("validation"));return V.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else if(/^\+?\d{0,3}[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(M))c.classList.remove("is-danger"),c.classList.add("is-success"),setTimeout(()=>{c.classList.remove("is-success")},3e3),c.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),V.innerHTML="";else{c.classList.add("is-danger"),c.classList.remove("is-success"),c.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Please enter a valid number"}));const J=JSON.parse(c.getAttribute("validation"));return V.innerHTML=J.validationMessage,this.validationObject={isValid:!1},this.validationObject}this.validationObject={isValid:!0}}else if(t==2){if(u.value==""||u.value===null||u.value.length===0){u.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),u.classList.remove("is-success"),u.classList.add("is-danger");const e=JSON.parse(u.getAttribute("validation"));return H.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else u.classList.remove("is-danger"),u.classList.add("is-success"),setTimeout(()=>{u.classList.remove("is-success")},3e3),u.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),H.innerHTML="";if(g.value==""||g.value===null||g.value.length===0){g.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),g.classList.remove("is-success"),g.classList.add("is-danger");const e=JSON.parse(g.getAttribute("validation"));return E.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else g.classList.remove("is-danger"),g.classList.add("is-success"),setTimeout(()=>{g.classList.remove("is-success")},3e3),g.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),E.innerHTML="";if(m.value==""||m.value===null||m.value.length===0){m.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),m.classList.remove("is-success"),m.classList.add("is-danger");const e=JSON.parse(m.getAttribute("validation"));return _.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else m.classList.remove("is-danger"),m.classList.add("is-success"),setTimeout(()=>{m.classList.remove("is-success")},3e3),m.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),_.innerHTML="";if(h.value==""||h.value===null||h.value.length===0){h.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty / use digits only"})),h.classList.remove("is-success"),h.classList.add("is-danger");const e=JSON.parse(h.getAttribute("validation"));return k.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else h.classList.remove("is-danger"),h.classList.add("is-success"),setTimeout(()=>{h.classList.remove("is-success")},3e3),h.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),k.innerHTML="";if(p.value==""||p.value===null||p.value.length===0){p.setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Field is empty"})),p.classList.remove("is-success"),p.classList.add("is-danger");const e=JSON.parse(p.getAttribute("validation"));return $.innerHTML=e.validationMessage,this.validationObject={isValid:!1},this.validationObject}else p.classList.remove("is-danger"),p.classList.add("is-success"),setTimeout(()=>{p.classList.remove("is-success")},3e3),p.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""})),$.innerHTML="";this.validationObject={isValid:!0}}}formRequest(t,s){return this.httpRequest(t.url,t.method,s,this.csrfToken)}};class z extends it(Y){static get properties(){return{steps:Array}}constructor(){super(),this.steps=[]}firstUpdated(){const t=this.shadowRoot.querySelector(".steps-container");new ResizeObserver(()=>this.setProgressWidth()).observe(t);const s=this.shadowRoot.querySelector(".indicator"),f=t.offsetWidth/this.steps.length;s.style.width=`${f*this.getInactiveSteps()}px`,s.style.marginLeft=`${f/2}px`}connectedCallback(){if(super.connectedCallback(),this.steps=[{isActive:!0,id:0},{isActive:!1,id:1}],JSON.parse(sessionStorage.getItem("response"))){const s={detail:2};this.setActiveStep(s)}else this.addEventListener("new-step",s=>this.setActiveStep(s))}setActiveStep(t){const s=this.steps.filter(i=>i.id===t.detail).shift();this.steps.forEach(i=>{i.isActive=!1}),s.isActive=!0;const r=this.steps.splice(t.detail,1,s),f=this.steps.splice(r);this.steps=f,this.setProgressWidth()}setProgressWidth(){const t=this.shadowRoot.querySelector(".steps-container"),s=this.shadowRoot.querySelector(".progress-bar"),r=this.shadowRoot.querySelector(".indicator"),i=t.offsetWidth/this.steps.length;s.style.width=`${i*this.getActiveStepIndex()}px`,s.style.marginLeft=`${i/2}px`,r.style.width=`${i*this.getInactiveSteps()}px`,r.style.marginLeft=`${i*this.getActiveStepIndex()}px`}static get styles(){return[et,P`
                 :host {
                    display: block;
                }
            `]}static get is(){return"steps-timeline"}getActiveStepIndex(){return this.steps.findIndex(t=>t.isActive)}getInactiveSteps(){return this.steps.length-1-this.getActiveStepIndex()}render(){return x`
            <div class="content">
                <ul class="columns steps-container">
                    <div class="progress-bar"><span class="indicator"></span></div>     
                    ${this.steps.map((t,s)=>x`
                        <li class="column stepCol ${t.isActive?"active":""} ${s>this.getActiveStepIndex()?"inactive":""}">    
                            <div class="circle-container">
                                <div class="step-circle pt-1 ${t.isActive?"active":""} ${s<this.getActiveStepIndex()?"active":""}">
                                    ${s>this.getActiveStepIndex()?x`
                                        
                                            <p>${t.id+1}</p>
                                        
                                    `:x`
                                      
                                            <p>${t.id+1}</p>
                                      
                                    `}    
                                </div>
                            </div>                           
                        </li>
                    `)}  
                </ul>
            </div>
        `}}customElements.define(z.is,z);const at=({element:n})=>{const t=W.useRef(null);return W.useEffect(()=>{const s=t.current;s&&n&&(s.e=n)},[n]),q.jsx("div",{children:n?q.jsx("steps-timeline",{id:"steps-timeline",ref:t}):q.jsx("p",{children:"Loading data..."})})},ct=tt(at);export{ct as default};
