import{i as o,h as p,r as h,g as f,k as a,a as l,j as r}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const u=o`
    .card-header {
        box-shadow: none;
    }
    .card-header-title {
        margin: 0 !important;
    }
`;class c extends p{static get styles(){return[h(f),u,o`
        :host {
          display: block;
        }
      `]}static get properties(){return{profile:{type:Object},appointment:{type:Object},rows:{type:Array},e:{type:Object},cols:{type:Array},lines:{type:Array}}}constructor(){super(),this.profile={},this.appointment={},this.rows=[],this.cols=[],this.lines=[],this.e=null}updated(e){(e.has("e")||e.has("lines")||e.has("cols"))&&(console.log("Updated properties detected:",e),this.lines.length>0?(this.profile=this.lines[0],this.appointment=Object.fromEntries(this.rows[0].map((t,s)=>[this.cols[s].label,t]))):console.warn("Lines array is empty."))}static get is(){return"next-client"}render(){return a`
      <div class="content">
        <div class="column content">
          <div class="card">
            <div class="card-header">
              <h4 class="card-header-title">Next Client</h4>
            </div>
            <div class="card-content">
              <div class="media">
                <figure class="media-left">
                  <p class="image">
                    <img src="/media/${this.profile.image}" alt="${this.profile.name}">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="block">
                    <h4>${this.profile.name}</h4>
                    <p>${this.profile.age} years, ${this.profile.gender}</p>
                  </div>
                </div>
              </div>
              ${Object.entries(this.appointment).map(([e,t])=>a`
                  <div class="block">
                    <h4>${e}</h4>
                    <p>${t}</p>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define(c.is,c);const v=n=>{const{element:e,rows:t,lines:s,cols:d}=n,i=l.useRef(null);return l.useEffect(()=>{i.current&&(e&&(i.current.e=e),t&&(i.current.rows=t),s&&(i.current.lines=s),s&&(i.current.cols=d))},[e,t,s]),r.jsx("div",{children:e?r.jsx("next-client",{id:"next-client",ref:i}):r.jsx("p",{children:"Loading data..."})})},g=m(v);export{g as default};
