import{i,r as n,g as c,k as l,a as r,j as e}from"./index-C2PWchud.js";import{B as u}from"./base-element-5lxvCIHt.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const d=i`
    .columns {
        background-color:var(--primary);
    }
    .subtitle {
        text-align:center;
        color:white;
        opacity:0;
        transform:translateY(50%);
    }
    .subtitle-appear-animation {
        opacity:1;
        transform:translateY(0px);
        transition:1.2s all ease-in-out;
    }
`;class a extends u{static get styles(){return[n(c),d,i`
        :host {
          display: block;
        }
      `]}constructor(){super()}updated(){this.loadAppear()}loadAppear(){setTimeout(()=>this.animateSubtitle(),300)}animateSubtitle(){this.shadowRoot.querySelector(".subtitle").classList.add("subtitle-appear-animation")}static get is(){return"section-front-2"}render(){return l`
      <section class="hero columns">
        <div class="hero-body">
          <p class="subtitle is-5" style="color: white !important;">${this.e&&this.e.defaultValue}</p>
        </div>
      </section>
    `}}customElements.define(a.is,a);const m=({element:t})=>{const s=r.useRef(null);return r.useEffect(()=>{const o=s.current;o&&t&&(o.e=t)},[t]),e.jsx("div",{children:t?e.jsx("section-front-2",{id:"section-front-2",ref:s}):e.jsx("p",{children:"Loading data..."})})},x=p(m);export{x as default};
