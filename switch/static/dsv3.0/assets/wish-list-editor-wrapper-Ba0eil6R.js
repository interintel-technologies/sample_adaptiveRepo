import{i as n,r as a,g as l,k as s,h as c,a as e,j as o}from"./index-C2PWchud.js";import{E as d}from"./ecommerce-mixin-BZ3_9d38.js";import"./SectionTemplate-Drou2IoY.js";const u=n`
  .columns {
    margin: 0 !important;
    border-bottom: 1px solid #ccc;
  }
  .button {
    background-color: var(--primary);
    padding: 20px 35px;
    border: none;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .button:hover {
    background-color: var(--link);
    border: none !important;
  }
  .button:active {
    transform: scale(1.05);
  }
  .button h6 {
    color: white !important;
    margin: 0 !important;
  }
  adaptive-ui-icon {
    fill: black;
    margin: auto;
    cursor: pointer;
  }
  adaptive-ui-icon:hover {
    fill: red;
  }
  @media screen and (max-width: 770px) {
    .hdr {
      display: none;
    }
    .button {
      width: 100%;
    }
    .is-6 {
      flex-wrap: wrap;
    }
    figure {
      margin: auto !important;
    }
  }
`;class r extends d(c){static get styles(){return[a(l),u,n`
        :host {
          display: block;
        }
      `]}onRemoveProductBtnClickHandler(t){this.removeItemFromWishlist(t)}onAddToCartBtnClickHandler(t){this.addItemToCart(t),this.removeItemFromWishlist(t.id)}formatDate(t){return new Date(t).toLocaleDateString()}static get is(){return"wish-list-editor"}render(){return s`
      <div class="column content">
        <div class="columns hdr" style="margin: 0;">
          <div class="column is-6">
            <h4 style="text-align: center;">Product</h4>
          </div>
          <div class="column is-2">
            <h4 style="text-align: center;">Stock Status</h4>
          </div>
          <div class="column is-2">
            <h4 style="text-align: center;">Added on</h4>
          </div>
          <div class="column is-2"></div>
        </div>
        ${this.wishlist.length>0?this.wishlist.map(t=>s`
                <div class="columns bdy" style="margin: 0;">
                  <div class="column is-6 is-flex">
                    <figure class="image is-128x128">
                      <img src="${t.image}" alt="${t.name}Image" />
                    </figure>
                    <div class="column">
                      <h5>${t.name}</h5>
                      <h6>${this.formatToKenyaShillings(t.price)}</h6>
                      <button
                        class="button"
                        title="Add to Cart"
                        type="button"
                        @click=${()=>this.onAddToCartBtnClickHandler(t)}
                      >
                        <h6>Add to Cart</h6>
                      </button>
                    </div>
                  </div>
                  <div class="column is-2">
                    <h5 style="text-align: center;">
                      ${t.stockQuantity?"In ":"Out of "}Stock
                    </h5>
                  </div>
                  <div class="column is-2">
                    <h4 style="text-align: center;">
                      ${this.formatDate(t.addedOn)}
                    </h4>
                  </div>
                  <div class="column is-2">
                    <adaptive-ui-icon
                      title="Remove ${t.name}"
                      icon="close"
                      @click=${()=>this.onRemoveProductBtnClickHandler(t.id)}
                    ></adaptive-ui-icon>
                  </div>
                </div>
              `):s`<h3>Wishlist is empty</h3>`}
      </div>
    `}}customElements.define(r.is,r);const p=({element:i})=>{const t=e.useRef(null);return e.useEffect(()=>{t.current&&i&&(t.current.e=i)},[i]),o.jsx("div",{children:i?o.jsx("wish-list-editor",{id:"wish-list-editor",ref:t}):o.jsx("p",{children:"Loading data..."})})};export{p as default};
