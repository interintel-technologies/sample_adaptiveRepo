import{i as l,h as c,r as d,g as p,k as i,a as n,j as a}from"./index-C2PWchud.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";const m=l`
  .column.content {
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
  .hdr {
    padding: 24px 24px 8px 10px;
    justify-content: space-between;
    align-items: center;
  }
  .button {
    height: 40px !important;
    box-shadow: none !important;
    border-radius: 100px;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    background-color: var(--primary) !important;
    color: white !important;
  }
  .button:hover {
    background-color: var(--link) !important;
    color: white !important;
  }
  .button:active {
    transform: scale(0.95);
    color: white !important;
  }
`;class o extends c{static get styles(){return[d(p),m,l`
        :host {
          display: block;
        }
      `]}constructor(){super(),this.searchText="",this.rows=[],this.cols=[],this.e=null,this.messages=[]}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array},messages:Array}}updated(s){(s.has("e")||s.has("rows"))&&(this.messages=this.rows)}getIndexByColumnLabel(s){return this.cols.findIndex(e=>e.label===s)}static get is(){return"messages-list"}render(){return i`
      <div class="column card">
        <div class="content">
          <div class="hdr is-flex">
            <h3>Messages (${this.messages.length})</h3>
            <a
              href="${this.e.details.seeAllLink}"
              target="_blank"
              class="button"
              >See All</a
            >
          </div>
          <ul class="column" style="margin-left: 0px;">
            ${this.messages.filter((s,e)=>e<4).map(s=>i`
                  <li class="media">
                    <figure
                      class="media-left"
                      style="margin: 5px 10px 5px 5px;"
                    >
                      <span class="image is-64x64">
                        <img
                          class="is-rounded"
                          alt="${s[this.getIndexByColumnLabel("sender")]}-image"
                          src="${s[this.getIndexByColumnLabel("image")]}"
                        />
                      </span>
                    </figure>
                    <div class="media-content">
                      <p>
                        <strong
                          >${s[this.getIndexByColumnLabel("sender")]}</strong
                        >
                        <br />
                        ${s[this.getIndexByColumnLabel("message")]}
                      </p>
                    </div>
                  </li>
                `)}
          </ul>
        </div>
      </div>
    `}}customElements.define(o.is,o);const g=({element:t,rows:s,cols:e})=>{const r=n.useRef(null);return n.useEffect(()=>{r.current&&t&&(r.current.e=t,r.current.rows=s,r.current.cols=e)},[t,s,e]),a.jsx(a.Fragment,{children:t?a.jsx("messages-list",{id:"messages-list",ref:r}):a.jsx("p",{children:"Loading data..."})})},b=u(g);export{b as default};
