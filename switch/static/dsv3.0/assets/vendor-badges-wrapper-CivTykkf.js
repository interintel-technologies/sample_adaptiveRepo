import{i as n,h as a,r as o,g as c,k as i,a as r,j as t}from"./index-C2PWchud.js";const l=n`
    .level {
        padding 0 16px;
    }
    .level-item {
        justify-content: space-evenly;
    }
`;class d extends a{static get styles(){return[o(c),l,n`
        :host {
          display: block;
        }
      `]}static get properties(){return{vendorBadges:Array,e:{type:Object}}}constructor(){super(),this.vendorBadges=[],this.e=null}updated(e){e.has("e")&&this.e&&(this.vendorBadges=this.e.details)}static get is(){return"vendor-badges"}render(){return i`
      <div class="level">
        ${this.vendorBadges.map(e=>i`
            <div class="level-item">
            <adaptive-ui-icon icon=${e.icon||"icons:info"}></adaptive-ui-icon>
              <div class="content">
                <h5>${e.title}</h5>
                <p>${e.description}</p>
              </div>
            </div>
          `)}
      </div>
    `}}customElements.define(d.is,d);const v=({element:s})=>{const e=r.useRef(null);return r.useEffect(()=>{e.current&&s&&(e.current.e=s)},[s]),t.jsx("div",{children:s?t.jsx("vendor-badges",{id:"vendor-badges",ref:e}):t.jsx("p",{children:"Loading data..."})})};export{v as default};
