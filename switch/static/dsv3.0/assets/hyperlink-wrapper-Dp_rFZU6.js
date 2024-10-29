import{i as l,r as c,g as m,a as o,j as n}from"./index-C2PWchud.js";import{B as d}from"./base-element-5lxvCIHt.js";import{b as u,a as y}from"./button-mixin-Bg706PtU.js";const h=l`
    .button{
        width: 100%;
    }
    .icon {
        margin-right: 10px !important;
    }
    .link-container{
        position: relative;
        display: flex!important;
        align-items: center!important;
        justify-content: center!important;
        text-decoration: underline!important;
        color: var(--primary)!important;
        cursor: pointer!important;
    }

    .link-container:hover{
        text-decoration: none!important;
    }

`,i=class extends d{static get is(){return"hyperlink-element"}static get properties(){return{name:String,params:Object,type:String}}firstUpdated(t){super.firstUpdated(t)}init(t,r){super.init(t,r),this.title=i.toTitleCase(t.name),this.name=i.toTitleCase(t.name),this.params=r.pl.paramsCopy()}};class p extends u(i){static get styles(){return[c(m),h,l`
				:host {
					display: block;
				}
			`]}static get properties(){return{name:String,params:{type:Object,value:{}}}}constructor(){super(),this.type="LINK"}get action(){return y}}customElements.define(p.is,p);const x=({element:t,_dialog:r})=>{const a=o.useRef(null);return o.useEffect(()=>{const e=a.current;if(e&&t){e.e=t,e._dialog=r;const s=()=>{setOpen(!0)};return e.addEventListener("paragraph-clicked",s),()=>{e&&e.removeEventListener("paragraph-clicked",s)}}},[t]),n.jsx("div",{children:t?n.jsx("hyperlink-element",{id:"hyperlink-element",ref:a}):n.jsx("p",{children:"Loading data..."})})};export{x as default};
