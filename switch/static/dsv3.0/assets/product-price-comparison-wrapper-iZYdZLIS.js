import{i as l,h as u,r as p,g as d,k as s,a as e,j as c}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const h=l`
    .columns {
        margin: 0!important;
    }
    ul {
        margin: 0!important;
        max-height:50vh;
        overflow-y: auto;
        list-style: none;
    }
    li {
        border-bottom: 1px solid black;
    }
    li > .column {
        margin: auto;
    }
    .stock {
        padding: 0.75rem 0 !important;
    }
    h4 {
        margin: 0!important;
    }
    .pill {
        border-radius: 200px;
        background-color: #ccc;
    }
    .pill > h4 {
        font-style: italic;
        padding: 7px;
    }
    .button {
        box-shadow: none !important;
        background-color: var(--app-default-color) !important;
        color: white !important;
        border-radius:100px;
        padding: 2px 30px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        transform: scale(1.05);
        background-color: var(--app-secondary-color) !important;
    }
    .button:active {
        transform: scale(0.95);
    }
    .button > h4 {
        color: white !important;
    }
`;class n extends u{static get styles(){return[p(d),h,l`
        :host {
          display: block;
        }
      `]}static get properties(){return{product:Object,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.product={},this.rows=[],this.cols=[]}updated(t){(t.has("e")||t.has("rows")||t.has("cols"))&&(this.product=Object.fromEntries(this.rows[0].map((r,i)=>[this.cols[i].label,r])))}formatPrice(t){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(t)}static get is(){return"product-price-comparison"}render(){return s`
      <div class="column content">
        <div class="columns hero-body">
          <div class="column is-5">
            <figure class="large-image image is-5by4">
              <img
                src="/media/${this.product.image}"
                alt="${this.product.name}-product-image"
              />
            </figure>
          </div>
          <div class="column is-7">
            <h2>${this.product.name}</h2>
            <h3>Price Comparison</h3>
            <ul>
              ${this.product.vendors?this.product.vendors.map(t=>s`
                      <li class="columns">
                        <div class="column is-1">
                          <adaptive-ui-icon
                            icon=${t.icon}
                          ></adaptive-ui-icon>
                        </div>
                        <div class="column is-3">
                          <h4>${t.name}</h4>
                        </div>
                        <div class="column is-4">
                          <h4>${this.formatPrice(t.price)}</h4>
                        </div>
                        <div class="column is-2 stock">
                          ${t.isInStock?"":s`
                                <div class="pill">
                                  <h4>Out of Stock</h4>
                                </div>
                              `}
                        </div>
                        <div class="column is-2">
                          <button class="button" ?disabled=${!t.isInStock}>
                            <h4>Buy</h4>
                          </button>
                        </div>
                      </li>
                    `):""}
            </ul>
          </div>
        </div>
      </div>
    `}}customElements.define(n.is,n);const b=a=>{const{element:t,rows:r,cols:i}=a,o=e.useRef(null);return e.useEffect(()=>{o.current&&t&&(o.current.e=t,o.current.rows=r,o.current.cols=i)},[t,r,i]),c.jsx("div",{children:t?c.jsx("product-price-comparison",{id:"product-price-comparison",ref:o}):c.jsx("p",{children:"Loading data..."})})},g=m(b);export{g as default};
