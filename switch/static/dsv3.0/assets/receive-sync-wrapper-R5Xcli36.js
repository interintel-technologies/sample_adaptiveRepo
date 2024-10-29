import{i as n,r as o,g as d,k as l,a as r,j as i}from"./index-C2PWchud.js";import{m as u}from"./mqtt-mixin-W6USKsd2.js";import{B as m}from"./base-element-5lxvCIHt.js";import{u as p}from"./utils-mixin-D5aAiqNi.js";import"./paho-mqtt-CBfrIYbz.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const g=n`

`,t=class extends p(u(m)){static get is(){return"receive-sync"}static get properties(){return{icon:String,text:String,name:String,e:{type:Object}}}constructor(){super(),this.e=null}updated(e){if(e.has("e")){let s=this;if(s.e.kind)try{s.register(s,s.e.kind)}catch(c){console.error(c)}this.required=this.e.min&&this.e.min>0,this.name=t.toTitleCase(this.e.name),this.text=t.toTitleCase(this.e.defaultValue)}}onMqttMessage(e){super.onMqttMessage(e),console.log("on-mqtt-message")}init(e,s){super.init(e,s),this.required=e.min&&e.min>0,this.name=t.toTitleCase(e.name),this.text=t.toTitleCase(e.defaultValue)}};class a extends t{static get styles(){return[o(d),g,n`
        :host {
          display: block;
        }
      `]}render(){return l`
 
<div class="field">
<article class="message is-primary">
  <div class="message-header">
    <p>${this.name}</p>
  </div>
  <div class="message-body">
   ${this.text}
  </div>
</article>
</div>

        `}firstUpdated(s){super.firstUpdated(s)}onMqttMessage(s){super.onMqttMessage(s),console.log("on-mqtt-message")}}window.customElements.define(a.is,a);const M=({element:e})=>{const s=r.useRef(null);return r.useEffect(()=>{s.current&&e&&(s.current.e=e)},[e]),i.jsx("div",{children:e?i.jsx("receive-sync",{id:"receive-sync",ref:s}):i.jsx("p",{children:"Loading data..."})})};export{M as default};
