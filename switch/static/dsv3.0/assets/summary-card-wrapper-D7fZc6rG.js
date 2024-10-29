import{i as d,h as l,r as p,g as u,k as o,a as c,j as a}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const h=d`
.container{
    padding:.75rem;
}
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 18px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;
    background-color:var(--paper);
}
.titleDiv{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:55%;
    margin-left:auto;
    margin-right:auto;
    gap:1.5rem;
}
.titleDiv p{
    font-size:18px;
    line-height:18px;
    font-weight:400;
    color:var(--md-sys-color-onBackground) !important;
}
.titleDiv:hover{
    cursor:pointer;
}
.svgDiv:hover{
    cursor:pointer;
}
.svgDiv{
    text-align:left;
    height:130px;
    vertical-align:bottom;
    flex-direction: column;
     justify-content: flex-end;
     display:flex;
    margin-left:auto;
    margin-right:auto;
    padding-top:2.5rem;
    border-bottom-left-radius:var(--CornerLarge);
    border-bottom-right-radius:var(--CornerLarge);
    width:50%
}
.svgDiv p{
    font-size:16px;
    line-height:24px;
    letter-spacing:.5px;
    color:#000;
}
#svgDiv-0{
    background:url('https://i.postimg.cc/LX0PjbsR/chart.png') no-repeat center center;
    background-size: cover;
}
#svgDiv-1{
    background:url('https://i.postimg.cc/pTd8hHRq/chart2.png') no-repeat center center;
    background-size: cover;
}

adaptive-ui-icon{
    height:30px;
    width:30px;
}
.column{
    padding:1.5rem;
}
@media(max-width:768px){
    .svgDiv{
        width:75%;
    }
    .titleDiv{
        gap:.25rem;
        width:100%;
    }
}
@media(max-width:480px){
    
}

`;class n extends l{static get properties(){return{rows:Array,cols:Array,groups:Array,e:Object,items:Array,isCurrency:Boolean}}constructor(){super(),this.rows=[],this.cols=[],this.groups=[],this.e=null,this.items=[],this.isCurrency=!1}static get styles(){return[p(u),h]}static get is(){return"summary-card"}updated(r){(r.has("e")||r.has("cols"))&&(console.log("Updated properties:",this.cols,this.rows,this.e),this.items=[...this.rows.map(t=>Object.fromEntries(t.map((s,i)=>[this.cols[i].label,s])))],this.e.details.currency?this.isCurrency=!0:this.isCurrency=!1)}onBtnClickHandler(r,t){console.log("service dispatched",r),this.dispatchEvent(new CustomEvent("service-call",{detail:{service:r},bubbles:!0,composed:!0}))}render(){return o`
        <div class="container">
            <div class="card">
                <div class="columns is-mobile">
                    ${this.items.map((r,t)=>o`
                            <div class="column is-half" @click=${()=>this.onBtnClickHandler(r.service)}>
                            <div class="titleDiv" id="titleDiv-${t}">
                                <adaptive-ui-icon dataColor="var(--primary)" icon="${r.icon}"></adaptive-ui-icon>
                                <p class="ml-3">${r.action_name}</p>
                            </div>
                            <div class="svgDiv pl-2" id="svgDiv-${t}">
                                <p>${this.isCurrency?this.e.details.currency+" "+r.value:r.value}</p>
                            </div>
                        </div>
                            `)}
                
                </div>                
            </div>
        </div>
        
        `}}customElements.define(n.is,n);const v=({element:e,data:r,rows:t,cols:s})=>{const i=c.useRef(null);return c.useEffect(()=>{i.current&&e&&(i.current.e=e,i.current.data=r,i.current.rows=t,i.current.cols=s)},[e,r,t,s]),a.jsx("div",{children:e&&r&&t?a.jsx("summary-card",{id:"summary-card",ref:i}):a.jsx("p",{children:"Loading data..."})})},f=m(v);export{f as default};
