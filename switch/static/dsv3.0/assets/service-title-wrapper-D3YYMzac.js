import{i as a,r as c,g as o,k as n,a as r,j as e}from"./index-C2PWchud.js";import{S as p}from"./section-pelement-dsc-WXP1kFbN.js";import{w as d}from"./datasource-mixin-DMQBE4lo.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const m=a`
div p.title{
    margin-bottom: 15px!important;
}
div p.title, div p.subtitle{
    color: var(--link)
}

div.cont{
    margin-bottom: 25px;
}
`;class l extends p{static get styles(){return[c(o),m]}static get is(){return"service-title"}render(){return n`
            <div class="cont is-full-width">
                <p class="title is-3 is-spaced is-link">${this.e.name}</p>
                <p class="subtitle is-5 is-primary">${this.e.defaultValue}</p>
            </div>
        `}}customElements.define(l.is,l);const u=({element:t})=>{const i=r.useRef(null);return r.useEffect(()=>{const s=i.current;s&&t&&(s.e=t)},[t]),e.jsx("div",{children:t?e.jsx("service-title",{id:"service-title",ref:i}):e.jsx("p",{children:"Loading data..."})})},T=d(u);export{T as default};
