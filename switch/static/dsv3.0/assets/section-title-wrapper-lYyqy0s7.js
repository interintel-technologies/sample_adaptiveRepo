import{i as a,h as s,r as l,g as c,k as i,a as n,j as r}from"./index-C2PWchud.js";import{w as o}from"./datasource-mixin-DMQBE4lo.js";const p=a`
  .c-title-container {
    max-width: 630px;
    margin-right: auto;
    margin-bottom: 25px;
    margin-left: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    text-align: center;
  }
  .ii__title {
    margin-top: 0px;
    font-size: 36px;
    line-height: 52px;
    font-weight: 600;
    letter-spacing: 0.2px;
    font-family:var(--family-sans-serif);
    text-transform:capitalize;
  }
  .ii__paragraph {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 0.15px;
 
    font-family:var(--family-sans-serif);

  }
  .underline {
    height: 9px;
    width: 60px;
    border-radius: 20px;
    border-width: 0px;
    background-color:var(--primary);
    margin-right:5px;
    margin-left:5px;
  }
  .hr{
    display:inline-flex;
    justify-content:center;
  }
  hr{
    margin-top:0 !important;
  }
`;class x extends s{static get styles(){return[l(c),p]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e={}}render(){return i`
      <div class="c-title-container" style="margin-top: 25px; padding: 0 10px;">
      <h3 class="ii__title is-centered">${this.e.name}</h3>
      ${this.e[4]!=""?i`
          <p class="ii__paragraph">
            ${this.e.defaultValue}
          </p>
      `:i`

      `}
        <div class="hr">
          <hr class="underline" />
          <hr class="underline" />
        </div>
      </div>
    `}}customElements.define("section-title",x);const f=({element:t})=>{const e=n.useRef(null);return n.useEffect(()=>{e.current&&t&&(e.current.e=t)},[t]),r.jsx("div",{children:t?r.jsx("section-title",{id:"section-title",ref:e}):r.jsx("p",{children:"Loading data..."})})},d=o(f);export{d as default};
