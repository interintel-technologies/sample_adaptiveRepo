import{i as u,h as m,r as v,g as f,k as r,a as l,j as n}from"./index-C2PWchud.js";import{w as g}from"./datasource-mixin-DMQBE4lo.js";const x=u`
.container{
    padding:.75rem;
}
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 18px;
    border-radius: 20px;
    /* box-shadow:var(--mui-shadows-3); */
    border-radius: var(--CornerLarge) !important;
    background-color:var(--md-sys-color-secondaryContainer);
}
.select select{
   padding-top:.75rem;
   padding-bottom:.75rem;
   background-color:var(--md-sys-color-surface);
   border-radius: var(--CornerMedium) !important;
   width:100%;
   border:none !important;
}
.select{
    height:50px;
    width:100%;
  
}
.select option{
    background-color:var(--md-sys-color-surfaceContainer);
    font-family:'montserrat' !important;
    font-size:16px !important;
    text-align:center !important;
    line-height:24px !important
}
#selectCol{
    padding:0 !important;
}
img{
    position:absolute;
    right:10%;
    bottom:12%;
    height:74px;
}
#valueCol{
    display:inline-flex;

}

#valueCol p{
    font-size:16px;
    font-weight:800;
    color:var(--md-sys-color-surface) !important;
}
#valueCol span{
    font-size:16px;
    font-weight:800;
    color:var(--md-sys-color-onBackground) !important;
}
.switch {
    display: flex;
    width: 55px; /* total width of two circles */
    height: 25px;
    border-radius: 25px;
    cursor: pointer;
    justify-content: space-between; /* keep circles spaced evenly */
    padding: 2.5px; /* add padding inside the container */
    transition: background-color 0.3s ease;
    /* background-color: var(--md-sys-color-surface); */
    align-items:center;
    z-index:2;
}

.circle {
    width: 24px;
    height: 24px;
    background-color: var(--md-sys-color-surface);
    border-radius: 50%;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
}
.circle:first-child{
    left:10%;
}

.switch.active .circle:first-child {
    transform: translateX(20px); /* moves first circle to the right */
}
adaptive-ui-icon {
    fill:var(--primary) !important;
}
`;class d extends m{static get properties(){return{rows:Array,e:Object,cols:Array,options:Array,amount:Number,isActive:Boolean}}constructor(){super(),this.rows=[],this.cols=[],this.e=null,this.options=[],this.amount=0,this.isActive=!1}static get styles(){return[v(f),x]}static get is(){return"dropdown-details"}updated(t){if(t.has("e")||t.has("cols")){console.log("Updated properties:",this.cols,this.rows,this.e),this.options=this.e.details.options;const i=this.options.filter(o=>o.name==="Total");this.amount=i[0].amount;const s=this.shadowRoot.querySelector("select"),e=this.shadowRoot.querySelector("#switch");e.addEventListener("click",o=>{this.switchButtonHandler(o,e,s)})}}switchButtonHandler(t,i,s){if(i.classList.toggle("active"),i.classList.contains("active")){this.isActive=!0;const e=Array.from(String(this.amount)),o=[];e.forEach(c=>{const h=c.replace(c,"*");o.push(h)});const p=o.join("");this.amount=p}else this.isActive=!1,this.selectChangeHandler(t,s)}selectChangeHandler(t,i){if(i){const e=this.options.filter(o=>o.name===i.value);this.amount=e[0].amount}const s=this.options.filter(e=>e.name===t.target.value);this.amount=s[0].amount}render(){return r`
            <div class="container">
               
                <div class="card">
                      
                    <div class="columns is-mobile p-1">
                        <div class="column p-0 is-half" id="selectCol">
                        <div class="select">
                            <select @change=${t=>this.selectChangeHandler(t)}>
                                ${this.options.map(t=>r`
                                    <option>${t.name}</option>
                                `)}
                                
                            </select>
                            </div>
                        </div>
                        <div class="column pl-3 is-half">
                           <div class="columns is-mobile">
                                <div class="column is-two-thirds" id="valueCol">
                                   <p>KES</p> 
                                   <span class="ml-3">${this.amount}</span>
                                </div>
                                <div class="column is-one-third pr-1">
                                <div class="switch" id="switch">
                                   
                                    <div class="circle" title="hide">
                                        ${this.isActive?r`
                                                <adaptive-ui-icon datacolor="var(--primary)" icon="MdVisibility"></adaptive-ui-icon>
                                            `:r`
                                            <adaptive-ui-icon datacolor="var(--primary)" icon="MdVisibilityOff"></adaptive-ui-icon>
                                        `}
                                    </div>
                                    <div class="circle" title="show">
                                    ${this.isActive?r`
                                                 <adaptive-ui-icon datacolor="var(--primary)" icon="MdVisibility"></adaptive-ui-icon>
                                            `:r`
                                           
                                        `}
                                    </div>      
                                </div>

                                </div>
                           </div>
                        </div>
                    </div>
                    
                </div>   
                <img src="https://i.postimg.cc/htPV08TL/Vector-140.png"/>
            </div>
        `}}customElements.define(d.is,d);const w=({element:a,rows:t,cols:i})=>{const s=l.useRef(null);return l.useEffect(()=>{s.current&&(a&&(s.current.e=a,console.log("Element set in useEffect:",a)),t&&t.length>0&&(s.current.rows=t,console.log("Rows set in useEffect:",t)),i&&i.length>0&&(s.current.cols=i,console.log("Cols set in useEffect:",i)))},[a,t,i]),n.jsx(n.Fragment,{children:a&&t&&t.length>0&&i&&i.length>0?n.jsx("dropdown-details",{ref:s}):n.jsx("p",{children:"Loading data..."})})},C=g(w);export{C as default};
