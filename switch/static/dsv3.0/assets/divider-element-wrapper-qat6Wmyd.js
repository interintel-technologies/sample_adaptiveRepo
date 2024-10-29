import{i as o,h as l,r as d,g as c,k as u,a as s,j as r}from"./index-C2PWchud.js";const p=o`
    .content {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    .content::before, .content::after {
        content: '';
        flex: 1 1 auto; 
        border-bottom: solid 1px var(--link);
    }
    h4 {
        flex: 0 1 auto;
        padding: 0 15px 0 15px;
        margin: 0 !important;
    }
`;class n extends l{static get styles(){return[d(c),p,o`
                :host {
                    display: block;
                }
            `]}static get properties(){return{e:{type:Array}}}constructor(){super(),this.e=[]}firstUpdated(){this.updateComplete.then(()=>{this.centerTitle()})}centerTitle(){const e=this.shadowRoot.querySelector(".title");if(e){const a=e.getBoundingClientRect().width/2;e.style.marginLeft=`${-a}px`}else console.error("Title element not found!")}static get is(){return"divider-element"}render(){return u`
            <div class="content has-text-centered">
                <h4 class="title">${this.e&&this.e[0]}</h4>
            </div>
        `}}customElements.define(n.is,n);const h=({element:t})=>{const e=s.useRef(null);return s.useEffect(()=>{if(e.current&&t){const i=e.current;i.e=t,i.name=t[0],i.submit_name=t[4],i.max=t[3],i.min=t[2],i.required=t[9]}},[t]),r.jsx(r.Fragment,{children:t&&r.jsx("divider-element",{id:"divider-element",ref:e})})};export{h as default};
