import{h as n,r as l,g as o,i,k as c,a as s,j as r}from"./index-C2PWchud.js";class a extends n{static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}static get styles(){return[l(o),i`
                iframe {
                    width: 100%;
                    height: 100vh; 
                    border: none;
                }
            `]}static get is(){return"iframe-element"}firstUpdated(){super.firstUpdated()}connectedCallback(){super.connectedCallback(),window.addEventListener("message",function(t){console.log("Message received from iframe:",t.data)})}render(){return c`
            <iframe src="${this.e.details.url}" allowfullscreen sandbox="allow-forms allow-same-origin allow-scripts allow-forms allow-popups"></iframe>
        `}}customElements.define(a.is,a);const d=({element:e})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&(t.current.e=e,console.log("Element set in useEffect:",e))},[e]),r.jsx(r.Fragment,{children:e?r.jsx("iframe-element",{id:"iframe-element",ref:t}):r.jsx("p",{children:"Loading data..."})})};export{d as default};
