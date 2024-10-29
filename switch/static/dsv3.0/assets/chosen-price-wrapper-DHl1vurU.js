import{i as a,h as n,r as o,g as c,k as l,a as r,j as s}from"./index-C2PWchud.js";const h=a`
    .content h3, .content p {
        text-align: center !important;
    }
    hr {
        width: 80%;
        margin: 1.5rem auto;
    }
`;class i extends n{static get properties(){return{e:{type:Object},details:{type:Object}}}constructor(){super(),this.e=null,this.details={}}static get styles(){return[o(c),h,a`
        :host {
          display: block;
        }
      `]}updated(t){t.has("e")&&this.e&&(console.log("details is ",this.e),this.details=this.e.details)}static get is(){return"chosen-price"}render(){return l`
      <div class="hero-body content has-background-primary-light">
        <h3>You've Chosen:</h3>
        <h3>
          <strong>${this.details?this.details.label:"No label available"}</strong>
        </h3>
        <hr />
        <p>
          <strong>Price: ${this.details?this.details.price:"No price available"}</strong>
        </p>
      </div>
    `}}customElements.define(i.is,i);const p=({element:e})=>{const t=r.useRef(null);return r.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),s.jsx(s.Fragment,{children:e?s.jsx("chosen-price",{id:"chosen-price",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{p as default};
