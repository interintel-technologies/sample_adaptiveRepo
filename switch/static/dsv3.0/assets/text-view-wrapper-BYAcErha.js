import{i as a,r as c,g as d,k as o,a as i,o as u,j as s}from"./index-C2PWchud.js";import{B as p}from"./base-element-5lxvCIHt.js";import{u as x}from"./utils-mixin-D5aAiqNi.js";const n=class extends x(p){static get is(){return"text-view"}static get properties(){return{icon:String,text:String,name:String,style:String}}firstUpdated(e){super.firstUpdated(e)}checkStyles(){return console.log("check style called"),!!this.style}init(e,t){super.init(e,t),this.name=n.toTitleCase(e.name),this.text=e.defaultValue,this.style=e.styles}},h=a`

`;class r extends n{static get styles(){return[c(d),h,a`
				:host {
					display: block;
				}
			`]}static get properties(){return{e:{type:Object},name:{type:String},text:{type:String}}}updated(t){t.has("e")&&(this.name=this.e.name,this.text=this.e.defaultValue)}render(){return o`
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

		`}}window.customElements.define(r.is,r);const y=({element:e})=>{const t=i.useRef(null),l=u();return i.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),s.jsx("div",{children:e?s.jsx("text-view",{"theme-background-color":l.palette.background.paper,id:"text-view",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{y as default};
