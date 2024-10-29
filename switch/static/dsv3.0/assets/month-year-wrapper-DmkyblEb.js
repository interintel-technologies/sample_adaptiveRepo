import{S as o,r as l,g as u,i as m,k as c,a,j as i}from"./index-C2PWchud.js";import{u as p}from"./utils-mixin-D5aAiqNi.js";import{I as d}from"./input-shared-default-D8777CY5.js";import{I as h}from"./input-label-animation-CeZfeLC5.js";const r=class extends p(o){static get is(){return"month-year"}init(t,s){super.init(t,s);var e=this;e.required=this.e.required||t.min&&t.min>0,e.title=r.toTitleCase(t.name),e.icon=t.icon,e.params=e.pl.paramsCopy(),e.maxlength=t.max}};class n extends r{static get styles(){return[l(u),d,h,m`
            :host {
                display: block;
            }
            `]}constructor(){super(),this.e=null}static get properties(){return{e:{type:Object}}}updated(s){s.has("e")&&console.log("Updated properties:",this.e)}render(){return c`
        <div class="column">
            <div class="input-mixin input-effect">
                <input class="label-animation" type="month" class="input is-medium" id="input"  name=${this.e.name} value=${this.value} required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max} @keyup="${this.count}">
                <label>${this.e.name}</label>
                <span class="focus-bg"></span>
            </div>
        </div>
        `}}customElements.define(n.is,n);const b=t=>{const{element:s}=t,e=a.useRef(null);return a.useEffect(()=>{e.current&&s&&(e.current.e=s)},[s]),i.jsx("div",{children:s?i.jsx("month-year",{id:"month-year",ref:e}):i.jsx("p",{children:"Loading data..."})})};export{b as default};
