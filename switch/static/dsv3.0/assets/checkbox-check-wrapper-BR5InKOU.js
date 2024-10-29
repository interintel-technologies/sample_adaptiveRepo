import{S as n,i as r,r as l,g as c,k as d,a as s,j as i}from"./index-C2PWchud.js";import{u as h}from"./utils-mixin-D5aAiqNi.js";const o=class extends h(n){static get is(){return"checkbox-check"}static get properties(){return{icon:String,maxlength:Number}}getName(){return this.e.formName}validate(){const e=this.getValue()!=="on";return new this.Validation(!e,e?this.e.name+" is invalid":"valid")}firstUpdated(e){super.firstUpdated(e)}init(e,t){super.init(e,t);var a=this;a.title=o.toTitleCase(e.name)}},p=r`
    .container{
        margin-top: 8px;
        margin-bottom:8px;
        display:flex;
        align-items:center;
    }
    .label {
        margin-left:8px;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    .switch input {display:none;}
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--mui-palette-grey-500);
        -webkit-transition: .4s;
        transition: .4s;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    input:checked + .slider {
        background-color: var(--primary);
    }
    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    .slider.round {
        border-radius: 34px;
    }
    .slider.round:before {
        border-radius: 50%;
    }
 
`;class u extends o{static get styles(){return[l(c),p,r`
        :host {
          display: block;
        }
      `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}updated(t){t.has("e")}getInput(){return this.shadowRoot.querySelector("#input")}getValue(){return this.shadowRoot.querySelector("#input").checked?"on":"off"}valid(t){this.shadowRoot.querySelector(".validation-info").style.display="none",this.shadowRoot.querySelector(".validation-info").textContent="Required"}invalid(t){this.shadowRoot.querySelector(".validation-info").style.display="block",t&&(this.shadowRoot.querySelector(".validation-info").textContent=t)}render(){return d`
      <div class="container">
        <label class="switch">
          <input type="checkbox" id="input" name=${this.e.name} type="checkbox" placeholder=${this.e.name} required=${this.e.required}>
          <span class="slider round"></span>
        </label>
        <br/>
        <small class="validation-info">Required</small>
        <br/>

        <span class="label">${this.e.name}: ${this.e.kind}</span>
      </div>
    `}}window.customElements.define("checkbox-check",u);const f=({element:e})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),i.jsx(i.Fragment,{children:e?i.jsx("checkbox-check",{id:"checkbox-check",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{f as default};
