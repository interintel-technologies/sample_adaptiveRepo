import{S as u,i as p,r as h,g as m,k as l,a as c,j as o}from"./index-C2PWchud.js";import"./iron-icons-CfX5YBfy.js";import"./iron-icon-Ci-yo7Ra.js";import"./fa-icon-COAiXmZs.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./polymer-legacy-CVdXdTHq.js";import"./iron-flex-layout-C17s8gyg.js";import"./lit-html-dRijB2IX.js";const g=class extends u{constructor(){super(),this.rows=[]}static get is(){return"msisdn-input"}static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){return(this.e.required||this.required)&&!this.getValue()?new this.Validation(!1,this.e.name+" is invalid"):new this.Validation(!0,"valid")}valid(e){}invalid(e){}dscDataName(){return this.dataName}firstUpdated(e){super.firstUpdated(e);const t=this;this.loader.then(i=>{t.loading=!1})}init(e,t){super.init(e,t),this.required=this.e.required||e.min&&e.min>0,this.params=this.pl.paramsCopy(),this.dataName=e.defaultValue,this.limit=500,this.loader=this.loadData()}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const y=p`
.column {
  padding:0 !important;
}
.msisdn-container{
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--md-sys-color-outlineVariant);

}
.msisdn-container.is-danger{
  border: #ff3860 2px solid;
}
.msisdn-container.is-danger input,
.msisdn-container.is-danger p, 
.msisdn-container.is-danger ~ label{
  color: #ff3860;
}
.msisdn-container.is-success{
  border: #23d160 2px solid;
}
.msisdn-container.is-success input,
.msisdn-container.is-success p, 
.msisdn-container.is-success ~ label{
  color: #23d160;
}
.input-left{
  width: 80px;
}
.country-code{
  cursor: pointer;
  min-height: 100%;
}
.country-code p{
  position: relative;
  left: 29%;
  top: 10px;
  color: rgb(1, 50, 67);
  letter-spacing: 0.5px;
  pointer-events: none;
  transition: all 0.3s ease 0s;
}

.input-right:before{
  content: '';
  background-color: #b7b5b5;
  width: 1px;
  height: 30px;
  position: absolute;
  top: 5px;
  z-index: 1;
}
.input-right{
  width: 95%;
  position: relative;
}
.input-right input{
  width: 100%;
  border: 0 solid transparent;
  padding: 13px 15px;
}
.input-right input:focus{
  outline: 0;
}
.input-right input ~ label.input-label{
  position: absolute;
  left: 11px;
  top: 8px;
  width: 100%;
  color: rgb(1, 50, 67);
  letter-spacing: 0.5px;
  pointer-events: none;
  transition: all 0.3s ease 0s;
}
// .icon{
//   top: 5px!important;
// }

#danger-icon {
  visibility: hidden;
  margin-top: 8px;
}

#check-icon {
  visibility: hidden;
  margin-top: 8px;
}
#warning-text {
  display: none;
}
.form_lists{
  display: none;
  position: absolute;
  /*padding: 0 20px;*/

  width: 200px;
  max-height: 350px;
  overflow: scroll;
  z-index: 1000;
  border: 1px solid #b7b5b5;
  border-radius: 4px;
  margin-top: 10px;
}
.form__list{
  padding: 5px 10px;
  cursor: pointer;
}
.form__list:hover{
  background-color: var(--app-default-color);
  color: #fff;
}
.lbl.is-success{
  color: #23d160!important;
}
.lbl.is-danger{
  color: #ff3860!important;
}
input{
    background:transparent;
    padding: 13.5px 45px;
    border: 1px solid var(--md-sys-color-outlineVariant);

}
`;class d extends g{static get styles(){return[h(m),y,p`
        :host {
          display: block;
        }
      `]}render(){return l`
      <div class="column is-block is-marginless">
      <p class="input-label lbl" id="label">${this.e.name}</p>
        <div class="msisdn-container is-flex">
          <div class="input-left">
            <div class="country-code" @click=${this.codeList}>
              <p>+254</p>
            </div>
          </div>
          <div class="input-right">
            <div class="msisdn-input field">
              <div class="input-container control has-icons-right">
                <input pattern="[^0-9]+" @keydown=${this.filterNumericInput} type="text" id="input" name="${this.e.name}" class="form-input" required="${this.required}" aria-required="true" aria-describedby="gentle_0" minlength="${this.e.min}" maxlength="${this.e.max}" >

                <span id="danger-icon" class="icon is-small is-right">
                  <fa-icon
                    class="fas fa-exclamation-triangle icon"
                    size="1em"
                    color="#ff3860"
                  ></fa-icon>
                </span>
                <span id="check-icon" class="icon is-small is-right">
                  <fa-icon
                    class="fas fa-check"
                    size="1em"
                    color="#23d160"
                  ></fa-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p class="help" id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
        <div class="form_lists" id="code_list">
          <ul id="code">
         ${this.rows.map((t,i)=>l`<li class="form__list" id="list" @click="${()=>this.codeSelected(t[0])}" ?selected="${t[0]==="254"}">${t[1]} +${t[0]}</li>`)}
          </ul>
        </div>
      </div>
        `}updated(t){t.has("e")&&console.log("Updated properties:",this.e)}constructor(){super(),this.e=null,this.countryCode="+254"}static get properties(){return{e:{type:Object},countryCode:String}}codeList(){this.shadowRoot.getElementById("code_list").classList.toggle("is-block")}codeSelected(t){const i=this.shadowRoot.querySelector(".form_lists"),s=this.shadowRoot.querySelector(".country-code p");s.textContent="+"+t,this.countryCode=s.textContent,i.classList.remove("is-block")}filterNumericInput(t){const i=t.key||t.code;t.key.length<=1&&!(t.metaKey||t.ctrlKey||t.altKey)&&(i>="0"&&i<="9"||i==="."||i===","||i==="-"||i===" "||(t.preventDefault?t.preventDefault():t.returnValue=!1))}getValue(t){const i=this.shadowRoot.querySelector("#input");if(i.value)return this.countryCode+i.value}valid(t){const i=this.shadowRoot.querySelector("#label"),s=this.shadowRoot.querySelector(".msisdn-container"),n=this.shadowRoot.querySelector("#danger-icon"),r=this.shadowRoot.querySelector("#check-icon"),a=this.shadowRoot.querySelector("#warning-text");s.classList.remove("is-danger"),i.classList.remove("is-danger"),s.classList.add("is-success"),i.classList.add("is-success"),a.style.display="none",n.style.visibility="hidden",r.style.visibility="visible"}invalid(t){const i=this.shadowRoot.querySelector(".msisdn-container"),s=this.shadowRoot.querySelector("#label"),n=this.shadowRoot.querySelector("#danger-icon"),r=this.shadowRoot.querySelector("#check-icon"),a=this.shadowRoot.querySelector("#warning-text");a.style.display="block",i.classList.remove("is-success"),s.classList.remove("is-success"),i.classList.add("is-danger"),s.classList.add("is-danger"),n.style.visibility="visible",r.style.visibility="hidden",t&&(this.shadowRoot.querySelector("#warning-text").textContent=t)}stickyLabel(t){const i=this.shadowRoot.querySelector("#label");i.style.top="-25px",i.style.left="-6%",i.style.fontSize="12px",i.style.fontWeight=700}labelReset(t){const i=this.shadowRoot.querySelector("#label");this.shadowRoot.querySelector("#input").value==""&&(i.style.top="8px",i.style.left="11px",i.style.fontSize="inherit",i.style.fontWeight="inherit")}}customElements.define(d.is,d);const R=({element:e})=>{const t=c.useRef(null);return c.useEffect(()=>{t.current&&e&&t.current.e!==e&&(t.current.e=e)},[e]),o.jsx(o.Fragment,{children:e?o.jsx("msisdn-input",{style:{padding:"0.73rem 0"},id:"msisdn-input",ref:t}):o.jsx("p",{children:"Loading data..."})})};export{R as default};
