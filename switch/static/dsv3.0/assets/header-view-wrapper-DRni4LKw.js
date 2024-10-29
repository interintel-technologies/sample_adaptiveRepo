import{i as d,r as n,g as o,k as u,a as r,j as s}from"./index-C2PWchud.js";import{B as c}from"./base-element-5lxvCIHt.js";import{u as l}from"./utils-mixin-D5aAiqNi.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const p=d`
.field {
    display: flex;
    justify-content: space-around;
  }

`,i=class extends l(c){static get is(){return"header-view"}static get properties(){return{icon:String,text:String,name:String,params:{type:Object,value:{}}}}firstUpdated(e){super.firstUpdated(e)}init(e,t){super.init(e,t),this.required=this.e.required||e.min&&e.min>0,this.name=i.toTitleCase(e.name),this.text=i.toTitleCase(e.defaultValue)}};class a extends i{static get styles(){return[n(o),p,d`
        :host {
          display: block;
        }
      `]}static get properties(){return{image:String,e:{type:Object}}}constructor(){super(),this.e={}}updated(t){t.has("e")&&console.log("this header view details ",this.e)}render(){return u`
      <div class="field">
        <h2>${this.e.defaultValue}<h2>
      </div> `}}window.customElements.define(a.is,a);const x=({element:e})=>{const t=r.useRef(null);return r.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),s.jsx("div",{children:e?s.jsx("header-view",{id:"header-view",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{x as default};
