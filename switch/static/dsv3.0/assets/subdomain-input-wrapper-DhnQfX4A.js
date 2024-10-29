import{S as l,i as r,r as d,g as u,k as c,a,j as n}from"./index-C2PWchud.js";import"./iron-icon-Ci-yo7Ra.js";import"./iron-flex-layout-C17s8gyg.js";import"./polymer-legacy-CVdXdTHq.js";const p=class extends l{static get is(){return"subdomain-input"}static get properties(){return{value:Object}}constructor(){super(),this.value=void 0}invalid(e){this.qs("#message").innerText=e.message}valid(e){this.qs("#message").innerText=e.message}getValue(){return this.value=this.shadowRoot.querySelector(".input").value,this.value}getName(){return this.e.formName}validate(){const e=this.getValue();return this.required&&!e?new this.Validation(!1,this.e.name+" is Required"):new this.Validation(!0,"Valid Domain")}firstUpdated(e){super.firstUpdated(e)}dscDataName(){return this.e.defaultValue}init(e,t){super.init(e,t),this.required=this.e.required||e.min&&e.min>0}},h=r`
    section {
        position: relative;
    }
    .cont {
        border: 1px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    input {
        appearance: none;
        width: 16px;
        height: 16px;
        box-shadow: none !important;
        border: none !important;
    }
    .content {
        background: var(--primary);
      
        margin: 0 !important;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0px);
        align-items: center;
        -webkit-backdrop-filter: blur(0px);
    }
    h4 {
        margin: 0 10px !important;
    }
    label {
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
        position: absolute;
        top: -15px;
    }
    .lbl-danger{
        color: #ff2b56;
    }
    .cont-danger{
        border: 2px solid #ff2b56;
    }
    .lbl-success{
        color: #23d160 !important;
    }
    .cont-success{
        border: 2px solid #23d160;
    }
    #warning-text {
        display: none;
    }
`;class o extends p{static get styles(){return[d(u),h,r`
        :host {
          display: block;
        }
      `]}static get properties(){return{defaultValue:String,domain:String,e:{type:Object}}}static get is(){return"subdomain-input"}constructor(){super(),this.defaultValue="",this.domain="domain",this.e=null}updated(t){t.has("e")&&(this.defaultValue=this.e.details.defaultValue?this.e.details.defaultValue:"",this.domain=this.e.details.domain?this.e.details.domain:"domain",this.value=this.defaultValue)}onSubdomainInputHandler(t){const i=this.shadowRoot.querySelector("#warning-text");this.rows.length===0?(i.style.display="none",this.shadowRoot.querySelector(".content").forEach(s=>{s.style.background="rgba(35, 209, 96, 0.49)",this.value=t})):(i.style.display="block",i.innerText="Error. Subdomain already available.",this.shadowRoot.querySelector(".content").forEach(s=>{s.style.background="rgba(255, 56, 96, 0.46)",this.value=void 0}))}valid(t){const i=this.shadowRoot.querySelector("#warning-text"),s=this.shadowRoot.querySelector(".cont");i.style.display="none",s.classList.remove("cont-danger"),s.classList.add("cont-success"),setTimeout(()=>{s.classList.remove("cont-success")},3e3)}invalid(){const t=this.shadowRoot.querySelector("#warning-text"),i=this.shadowRoot.querySelector(".cont");t.style.display="block",i.classList.add("cont-danger")}render(){return c`
      <section class="column">
        <div class="cont is-flex">
          <div class="content is-flex"><h4>https://</h4></div>
          <input class="input" type="text" name="description" @input=${t=>this.onSubdomainInputHandler(t.target.value)} value=${this.defaultValue}>
          <label>${this.e.name}</label>
          <div class="content is-flex"><h4>.${this.domain}.com</h4></div>
        </div>
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </section>
    `}}customElements.define(o.is,o);const f=e=>{const{element:t}=e;console.log("element subdomain input ",t);const i=a.useRef(null);return a.useEffect(()=>{i.current&&t&&(i.current.e=t)},[t]),n.jsx("div",{children:t?n.jsx("subdomain-input",{id:"subdomain-input",ref:i}):n.jsx("p",{children:"Loading data..."})})};export{f as default};
