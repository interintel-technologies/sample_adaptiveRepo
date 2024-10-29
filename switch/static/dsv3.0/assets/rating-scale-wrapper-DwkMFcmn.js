import{i as p,S as f,r as h,g as m,k as o,a as n,j as l}from"./index-C2PWchud.js";import{u as v}from"./utils-mixin-D5aAiqNi.js";import{w as g}from"./datasource-mixin-DMQBE4lo.js";const x=p`
    .circle {
        min-width: 40px;
        min-height: 40px;
        border: 2px solid black;
        border-radius: 50%;
        margin:10px 20px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
    }
    .scale {
        justify-content: space-evenly;
    }
    .selected {
        border-color: var(--link) !important;
        color: var(--link) !important;
    }
    .circle:hover {
        border: 1px solid var(--primary);
        color: var(--primary);
    }
    #warning-text {
        display:none;
    }
    .feedback {
        border: none;
    }
    .success {
        color: #23d160 !important;
        border-color: #23d160 !important;
    }
    .fail {
        color: #ff2b56 !important;
        border-color: #ff2b56 !important;
    }
    @media screen and (max-width: 1000px) {
        .scale {
            overflow-x: auto;
        }
    }
`,u=class extends v(f){static get properties(){return{value:String,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array}}}constructor(){super(),this.value=void 0}firstUpdated(e){super.firstUpdated(e)}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(e,s){super.init(e,s);const t=this;t.title=u.toTitleCase(e.name),this.required=e.min&&e.min>0,this.name=e.name}};class d extends u{static get styles(){return[h(m),x]}createScale(){let s=[];const t=(i,r)=>{this.qsa(".circle").forEach(c=>c.classList.remove("selected")),console.log(r),this.value!==r?(i.classList.add("selected"),this.value=r):this.value=void 0};let a=1;do s=[...s,a],a=a+1;while(a!==13);return s.map((i,r)=>o`
            <div class="circle is-flex" @click=${c=>t(c.target,r)} >${i}</div>
        `)}valid(s){const t=this.shadowRoot.querySelector(".feedback"),a=this.shadowRoot.querySelector(".selected"),i=this.shadowRoot.querySelector("#warning-text");t.classList.remove("fail"),a.classList.add("success"),t.classList.add("success"),setTimeout(()=>{a.classList.remove("success"),t.classList.remove("success")},3e3),i.style.display="none"}invalid(s){const t=this.shadowRoot.querySelector(".feedback"),a=this.shadowRoot.querySelector("#warning-text");t.classList.add("fail"),a.style.display="block"}static get is(){return"rating-scale"}render(){return o`
           <div class="content">
                <div class="column content">
                    <h5 class="feedback">${this.e.defaultValue}</h5>
                    <div class="scale is-flex">
                        ${this.createScale()}
                    </div>
                    <p id="warning-text">${this.e.name} required</p>
                </div>
           </div>
        `}}customElements.define(d.is,d);const S=({element:e})=>{const s=n.useRef(null);return n.useEffect(()=>{const t=s.current;t&&e&&(t.e=e)},[e]),l.jsx("div",{children:e?l.jsx("rating-scale",{id:"rating-scale",ref:s}):l.jsx("p",{children:"Loading data..."})})},k=g(S);export{k as default};
