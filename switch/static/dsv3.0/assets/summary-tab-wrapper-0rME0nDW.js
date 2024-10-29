import{i as u,r as m,g as p,k as a,a as l,j as o}from"./index-C2PWchud.js";import{B as d}from"./base-element-5lxvCIHt.js";import{u as h}from"./utils-mixin-D5aAiqNi.js";const c=class extends h(d){static get is(){return"summary-tab"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}updated(e){if(e.has("e")){const t=this;t.title=c.toTitleCase(pElement.name),t.icon=this.e.icon,t.service=this.e.service,t.maxlength=this.e.max}}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const b=u`
.columns {
    display: flex!important;
    flex-direction: column!important;
}
.group {
    display: flex!important;
    flex-direction: row!important;
    
}
h1{
    font-size: 18px!important;
    font-weight: 500!important;
    padding-left: 29px!important;
}
.column {
    display:flex;
}
.details {
    display: flex;
    justify-content:space-between;
    align-items:center;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 1.75rem;
    padding-right: 2rem;
    border:1px solid grey;
    border-radius:4px;
}
.block {
    margin-bottom:0;
}
.summary-p{
    color:white;
}
.summary-info{
    color:white;
    font-weight: normal!important;
    margin-bottom: 15px;
}

@media screen and (max-width:720px) {
    .group {
        display: flex!important;
        flex-direction: column!important;
        
    }
}




`;class n extends c{static get styles(){return[m(p),b,u`
            :host {
              display: block;
            }
          `]}static get properties(){return{loading:Boolean,rows:Array,cols:Array,groups:Array,e:Object}}constructor(){super(),this.loading=!1,this.rows=[],this.cols=[],this.groups=[],this.e=null}updated(t){super.updated(t),t.has("e")&&console.log("summary-tab ",this.e)}render(){return a`
        
    <section>
      Summary Tab
        <div class="columns has-text-weight-bold is-size-6">

            ${this.getGroupTitles(JSON.parse(this.e.defaultValue)).map((t,i)=>a`
                <div class="group-title">
                  <h1>${t}</h1>
                </div>
            
              <div class="group">
             ${this._getSubGroupTitles(t).map(s=>a`
             
                <div class="column">
                  <div class="details" style="background-color:hsl(${this.hueGenerator()},50%,50%)">
                    <div>
                      <p class="summary-p ">${s}</p>
                      <p class="summary-info">${this._getSubtitleValue(t,s)}</p>
                    </div>
                    <iron-icon class="iron-icon" style="width:50px !important;height: 50px !important; color: white!important;" icon="${this.e.icon}"></iron-icon>
                  </div> 
                </div>
            
             
             `)}
            </div>
            
            
            `)}

        
    </section>
        
        `}static get is(){return"summary-tab"}firstUpdated(t){super.firstUpdated(t)}getGroupTitles(t){return Object.keys(t)}_getSubGroupTitles(t){let s=JSON.parse(this.e.defaultValue)[t];return Object.keys(s)}_getSubtitleValue(t,i){return JSON.parse(this.e.defaultValue)[t][i]}hueGenerator(){let t=Math.random()*360;return(t>=38&&t<=103||t>=169&&t<=189)&&this.hueGenerator(),t}}customElements.define(n.is,n);const j=({element:e,data:t,rows:i,cols:s})=>{const r=l.useRef(null);return l.useEffect(()=>{r.current&&e&&(r.current.e=e)},[e]),o.jsx("div",{children:e?o.jsx("summary-tab",{id:"summary-tab",ref:r}):o.jsx("p",{children:"Loading data..."})})};export{j as default};
