import{i as n,h as l,r as p,g as m,k as i,a as o,j as a}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const v=n`
  #product-meta-view {
    background-color: var(--card-background-color);
  }
  li {
    cursor: pointer;
  }
  li > a {
    pointer-events: none;
  }
  .hero-body {
    padding: 0px !important;
  }
  .hero-body p {
    color: var(--grey-darker);
  }
`;class s extends l{static get styles(){return[p(m),v,n`
        :host {
          display: block;
        }
      `]}static get properties(){return{content:Object}}constructor(){super(),this.content=this.renderContent("")}updated(e){(e.has("e")||e.has("cols"))&&(this.content=this.renderContent("Description"))}onTabClickHandler(e,r){const c=this.shadowRoot.querySelectorAll("li"),d=e.target;c.forEach(u=>u.classList.remove("is-active")),d.classList.add("is-active"),this.content=this.renderContent(r)}renderDescriptionContent(){return i`
      <p>
        Ex qui ad pariatur ad voluptate. Id ullamco eiusmod incididunt ea est
        tempor ad occaecat ex amet est. Id exercitation laborum ut do aliquip
        mollit cillum id eiusmod incididunt.
      </p>
    `}renderShippingRefundsContent(){return i`
      <p>
        Dolor do aliquip et do culpa cillum enim ea. Pariatur ea elit veniam ut
        voluptate mollit officia pariatur. Eiusmod est officia non nulla
        consectetur qui occaecat ex nostrud incididunt sint labore commodo esse.
        Officia fugiat quis velit irure deserunt. Esse nisi tempor minim labore
        exercitation. Ullamco dolore aliquip eu pariatur nulla proident.
        Pariatur esse sint excepteur id do aliquip duis voluptate tempor ullamco
        aliqua adipisicing reprehenderit sit.
      </p>
    `}renderProductReviews(){return i`
      <p>
        Fugiat est cupidatat enim ipsum in ut cupidatat proident. Nisi nulla
        velit nisi ea dolor et et laborum occaecat officia laboris est. Mollit
        magna ipsum amet Lorem aliquip est nostrud.
      </p>
    `}renderContent(e){switch(e){case"Description":return this.renderDescriptionContent();case"Shipping / Refunds":return this.renderShippingRefundsContent();case"Product Reviews":return this.renderProductReviews();default:return i``}}static get is(){return"product-meta-view"}render(){return i`
      <div id="product-meta-view" class="column">
        <div class="hero-body">
          <div class="tabs is-large is-centered is-fullwidth">
            <ul>
              <li
                class="is-active"
                @click=${e=>this.onTabClickHandler(e,"Description")}
              >
                <a>Description</a>
              </li>
              <li
                @click=${e=>this.onTabClickHandler(e,"Shipping / Refunds")}
              >
                <a>Shipping / Refunds</a>
              </li>
              <li @click=${e=>this.onTabClickHandler(e,"Product Reviews")}>
                <a>Product Reviews</a>
              </li>
            </ul>
          </div>
          <div class="content"><p>${this.content}</p></div>
        </div>
      </div>
    `}}customElements.define(s.is,s);const f=({element:t})=>{const e=o.useRef(null);return o.useEffect(()=>{const r=e.current;r&&t&&(r.e=t)},[t]),a.jsx("div",{children:t?a.jsx("product-meta-view",{id:"product-meta-view",ref:e}):a.jsx("p",{children:"Loading data..."})})},g=h(f);export{g as default};
