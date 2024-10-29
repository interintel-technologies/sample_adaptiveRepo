import{i as p,r as l,g as m,a,j as r}from"./index-C2PWchud.js";import{b as c,A as u}from"./button-mixin-Bg706PtU.js";import{B as y}from"./base-element-5lxvCIHt.js";import{u as d}from"./utils-mixin-D5aAiqNi.js";const i=class extends d(y){static get is(){return"hyperlink-element-2"}static get properties(){return{name:String,params:Object,type:String}}firstUpdated(t){super.firstUpdated(t)}init(t,e){super.init(t,e),this.title=i.toTitleCase(t.name),this.name=i.toTitleCase(t.name),this.params=e.pl.paramsCopy()}},f=p`
    .link-container{
        color: var(--primary)!important;
        cursor: pointer!important;
        display: flex!important;
        align-items: start!important;
        justify-content: start!important;
        padding: 20px!important;
    }
    .link-container:hover{
        text-decoration: none!important;
    }
    p {
        color: var(--primary)!important;
    }
`;class o extends c(i){static get styles(){return[l(m),f,p`
				:host {
					display: block;
				}
			`]}static get properties(){return{name:String,params:{type:Object,value:{}}}}constructor(){super(),this.type="LINK2"}get action(){return u}}customElements.define(o.is,o);const E=({element:t,submitting:e,onAction:g})=>{const n=a.useRef(null);return a.useEffect(()=>{const s=n.current;s&&t&&(s.e=t)},[t]),r.jsx("div",{children:t?r.jsx("hyperlink-element-2",{id:"hyperlink-element-2",ref:n}):r.jsx("p",{children:"Loading data..."})})};export{E as default};
