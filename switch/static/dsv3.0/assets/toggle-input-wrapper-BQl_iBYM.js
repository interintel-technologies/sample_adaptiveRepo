import{S as a,i as n,r as l,g as u,k as p,a as r,j as i}from"./index-C2PWchud.js";import{u as d}from"./utils-mixin-D5aAiqNi.js";const o=class extends d(a){static get is(){return"toggle-input"}static get properties(){return{params:{type:Object,value:{}},icon:String,service:String,title:String,maxlength:Number,pattern:String,required:Boolean,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){return this.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}updated(t){if(t.has("e")){const e=this;e.name=o.toTitleCase(e.e.name),this.required=this.e.required||e.e.min&&e.e.min>0}}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const c=n`

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
    background-color: #ccc;
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
    background-color:var(--app-default-color);
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1pxvar(--app-default-color);
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .lbl{
      position: relative;
      top: -12px;
      font-weight: 400;
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
`;class s extends o{static get styles(){return[l(u),c,n`
        :host {
          display: block;
        }
      `]}updated(e){e.has("e")&&console.log("Updated properties: ",this.e)}constructor(){super(),this.e=null}static get properties(){return{e:{type:Object}}}render(){return p`
<div class="main-container">
  <div class="column">
  <div class="field">
  <label class="switch">
    <input type="checkbox" id="input" required=${this.e.required}>
    <span class="slider round"></span>
  </label>
  <label for="switch" class="lbl">${this.e.name}</label>
    </div>
    </div>
  </div>
  `}static get is(){return"toggle-input"}getInput(){return this.qs("#input")}getValue(){return this.getInput().checked?"on":"off"}}window.customElements.define(s.is,s);const f=({element:t})=>{const e=r.useRef();return r.useEffect(()=>{e.current?e.current.e=t:console.log("toggleInputRef.current is not set")},[t]),i.jsx(i.Fragment,{children:t?i.jsx("toggle-input",{ref:e}):i.jsx("p",{children:"Loading data..."})})};export{f as default};
