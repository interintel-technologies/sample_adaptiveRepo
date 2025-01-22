import { html, css,unsafeCSS } from "lit-element";
import { ProductsGrid2Base } from '../../base/elements/products-grid-2';
import { ProductsGrid2Styles } from './products-grid-2-css';
import '../cart-editor/cart-editor.js';
import globalStyles from '../../App.css?raw'
class ProductsGrid2 extends ProductsGrid2Base {
  static get styles() {
    return [unsafeCSS(globalStyles),ProductsGrid2Styles];
  }

  static get properties() {
    return {
      products: Array,
      rows: Array,
      cols: Array,

      e:Object,
      filters: Array,
      activeFilters: Object,
      pages: Array,
      activePage: Number,
      isLoading: Boolean,
      view: String
    };
  }

  constructor() {
    super();
    this.rows = []
    this.cols = []

    this.e = null
    this.products = [];
    this.filters = [];
    this.activeFilters = {}
    this.activePage = 1;
    this.isLoading = true;
    this.view='grid';
  }

  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('rows')) {
      this.isLoading = this.isDscLoading
      this.fetchCart()
      this.onLoadData();
      }
}

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);

  //   this.loader.then(() => {
  //     this.isLoading = false;
  //     this.onLoadData();
  //   });
  // }

  // updated(changedProperties) {
  //   super.updated(changedProperties);
  //   changedProperties.forEach((oldValue, propName) => {
  //     if(propName === "rows" && oldValue) {
  //       this.onLoadData()
  //     }
  //   });
  // }

  selectView(view){
    this.view = view;
  }

  onLoadData() {
    this.products = [
      ...this.rows.map((row) =>
        Object.fromEntries(
          row.map((rowValue, index) => {
            if(this.cols[index].label === "id") {
              const variantColIndex = this.cols.findIndex(col => col.label === "product_item_variant_id");
              return variantColIndex ? [this.cols[index].label, rowValue + "|" + row[variantColIndex]] : [this.cols[index].label, rowValue];
            }
            return [this.cols[index].label, rowValue];
          })
        )
      ),
    ];

    this.filters = this.cols.filter(col => col["list_filters"]).map(col => ({
      label: col.label,
      items: ["All", ...col["list_filters"]]
    }));

    const tempPages = [];
    for(let i = 0; i < this.totalPages; i++) {
      tempPages.push(parseInt(i) + 1);
    }
    this.pages = tempPages;
  }

  movePage(e) {
    const moveValue = parseInt(e.target.getAttribute("move"));
    const nextPage = this.page + moveValue;

    if (nextPage >= this.totalPages) {
      this.page = 1;
    }
    else if (nextPage < 1) {
      this.page = this.totalPages;
    }
    else {
      this.page = nextPage;
    };
    this.activePage = this.page;
    this.updateParams("page", this.page);
  }

  showPage(page) {
    this.page = page;
    this.updateParams("page", this.page);
  }

  onFilterItemClickHandler(filterLabel, filterItem) {
    this.activeFilters = {...this.activeFilters, [filterLabel]: filterItem};

    this.updateParams(this.cols.find(col => col.label === filterLabel).value, filterItem === "All" ? "" : filterItem);
  }

  //displays quantity if the item is in cart
  displayUnit(id) {
    if (this.isItemInCart(id)) {
      const quantity = this.getCartItemQuantity(id);
      return quantity;
    }
  }

  _getPath(product) {
    let productViewObject = JSON.parse(product["Product View"]);
    let path = productViewObject["path"];
    // console.log(path);
    return path;
  }

  _getPathLink(path) {
    return window.location.href + path;
  }

  _getProductLink(product) {
    let productViewObject = JSON.parse(product["Product View"]);
    let path = productViewObject["path"];
    let params = "";

    // for(const [key,value] of Object.entries(productViewObject['params'])){
    // //    path += "?" + key + "=" + product[value] + "/"
    // path += "?" + key + "=" + product[value]

    // }
    for (const [key, value] of Object.entries(productViewObject["params"])) {
      //    path += "?" + key + "=" + product[value] + "/"
      params = "?" + key + "=" + this._extractProductIdAnVariant(product[value])[0];
    }

    // console.log("path>>",path);

    return params;
  }

  onSearchInputHandler(e){
    const searchValue = e.target.value;

    this.deleteParamKeys("q", false);
    this.updateParams("q", searchValue);
  }

  onShoppingCartClickBtn(product){
    if (!this.isItemInCart(product.id)){
        this.addProductToCart(product);  
      }
    else{
        this.updateCart(product.id, 0); 
    }
  }

  static get is() {
    return "products-grid-2";
  }

  render() {
    return html`
      <div class="content">
        ${
          this.isLoading ? html`
            <div class="icon is-large has-text-centered mt-6" style="width: 100%;">
             loading products data
            </div>
          ` : html`
            <div class="field has-addons">
              <div class="control has-icons-left">
                <input class="input" type="search" placeholder="Search item by name" @input=${e => this.onSearchInputHandler(e)}>
                <span class="icon is-small is-left " style="height:100% !important">
                <adaptive-ui-icon icon="MdOutlineSearch" title="Search"></adaptive-ui-icon>
                </span>
              </div>
            </div>
            <div class="sortCol columns is-mobile py-1">
              <div class="column is-10">
                <h6> Sort By:</h6>
              </div>
              <div class="column is-1 sortBtns">
                <span id="gridBtn" title="grid" class="icon is-medium ${this.view==='grid'?`selected`:``}" @click=${()=>this.selectView('grid')}>
                <adaptive-ui-icon icon="MdGridOn" title="Search"></adaptive-ui-icon>

                </span>
                <span id="listBtn" title="list" class="icon is-medium ${this.view==='list'?`selected`:``}" @click=${()=>this.selectView('list')}>
                <adaptive-ui-icon icon="MdFormatListBulleted" title="Search"></adaptive-ui-icon>

                </span>
              </div>
            </div>
            <div class="columns m-0">
              
              <div id="filterPanel" class="column is-2 is-${this.filters.length > 0 ? (this.filters[0].items.length > 1 ? "" : "hidden") : "hidden"}">
                <h5 class="has-text-centered">Filters</h5>
                ${
                  this.filters.map(filter => filter.items.length > 1 ? html`
                    <div class="block">
                      <h6>${ProductsGrid2Base.toTitleCase(filter.label)}</h6>
                      <div class="tabs is-toggle is-fullwidth">
                        <ul>
                          ${
                            filter.items.map((filterItem, index) => html`
                              <li class="tab ${filterItem === this.activeFilters[filter.label] || (!this.activeFilters[filter.label] && filterItem === "All")? "active" : ""}" @click=${() => this.onFilterItemClickHandler(filter.label, filterItem)}>
                                <div class="tab-item">
                                  <p>${filterItem}</p>
                                </div>
                              </li>
                            `
                          )}
                        </ul>
                      </div>
                    </div>
                  ` : "")
                }
             
              </div>
                
                ${
                  this.products.length > 0 ? html`
                    <div class="column slides-container is-${this.filters.length > 0 ? (this.filters[0].items.length > 1 ? "7" : "7") : "12"}">
                      <div class="columns is-multiline is-mobile slide m-0 products">
                        ${
                          this.view === 'grid' ? this.products.map(product => html`
                            <div class="column my-2 is-one-quarter-desktop is-5-mobile thisCol" title="${product.name}" id="thisCol${product.id}">
                             
                                <div class="card">
                                  <div class="card-image">
                                    <div class="overlay image is-4by3">
                                      <span class="icon" id="cartBtn" title="Add to Cart" @click=${()=>this.onShoppingCartClickBtn(product)}>											
                                        						<adaptive-ui-icon icon="MdShoppingCart" title="cart"></adaptive-ui-icon>
                                      </span>
                                     
                                      <a href="${window.location.origin + this._getPath(product) + this._getProductLink(product)}" target="_blank">		
                                        <span class="icon" id="viewBtn" title="View Product">					   
                                                                                                <adaptive-ui-icon icon="MdInfoOutline " title="Info"></adaptive-ui-icon>
 
                                        </span> 
                                      </a>    
                                    </div>
                                  
                                    <figure class="image">
                                      <img src="${(product.image && product.image !== null) ? "/media/" + product.image : "http://via.placeholder.com/360x360"}" alt="${product.name} Image"/>
                                    </figure>
                                  </div>
                                  <hr>
                                  <div class="card-content">
                                    <h6>${product.name}</h6>
                                    <p>${this.formatToKenyaShillings(product.price)}</p>
                                  </div>
                                </div>
                              
                            </div>
                          `)  : this.products.map(product => html`
                              <div class="column my-2 is-full-desktop is-full-tablet is-full-mobile listView" id="thisCol${product.id}">
                                <div class="columns is-multiline is-mobile listCol">
                                  <div class="column is-2-desktop is-3-tablet is-5-mobile">
                                    <figure class="image p-1">
                                       <img src="${(product.image && product.image !== null) ? "/media/" + product.image : "http://via.placeholder.com/640x360"}" alt="${product.name} Image"/>
                                    </figure>
                                  </div>
                                  <div class="column is-3-desktop is-2-tablet is-5-mobile">
                                    <h6>${product.name}</h6>
                                  </div>
                                  <div class="column is-2-desktop is-2-tablet is-5-mobile">
                                    <p>${this.formatToKenyaShillings(product.price)}</p>
                                  </div>
                                  <!-- <div class="column is-2-desktop is-3-tablet is-5-mobile">
                                    <div id="quantityField-${this._extractProductIdAnVariant(product.id)[0]}" class="quantityField ${this.isItemInCart(product.id) ? "" : "is-hidden"} is-mobile columns">
                                      <div class="column is-4">
                                        <span class="icon is-small" id="minusBtn" title="reduce quantity" @click=${()=>this.decrementQuantity(this._extractProductIdAnVariant(product.id)[0])}>											
                                          <i class="fas fa-minus"></i>
                                        </span>
                                      </div>
                                      <div class="column is-4 quantity pt-5">
                                        <h6>${this.getCartItemQuantity(this._extractProductIdAnVariant(product.id)[0])}</h6>
                                      </div>
                                      <div class="column is-4">
                                        <span class="icon is-small" id="plusBtn"  title="increase quantity"  @click=${()=>this.incrementQuantity(this._extractProductIdAnVariant(product.id)[0])}>
                                          <i class="fas fa-plus"></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div> -->
                                  <div class="column is-1-desktop is-1-tablet cartCol is-2-mobile">
                                    <span title="Add to Cart" class="icon is-small"  id="cartBtn" @click=${()=>this.onShoppingCartClickBtn(product)}>											
                                      						<adaptive-ui-icon icon="MdShoppingCart" title="cart"></adaptive-ui-icon>
                                    </span>
                                  </div>
                                   <div class="column is-1-desktop is-1-tablet cartCol is-2-mobile">
                                      <a href="${window.location.origin + this._getPath(product) + this._getProductLink(product)}" target="_blank">		
                                        <span class="icon is-small" id="viewBtn" title="View Product">					   
                                                                                                <adaptive-ui-icon icon="MdInfoOutline " title="Info"></adaptive-ui-icon>
 
                                        </span> 
                                      </a>   
                                  </div>
                                </div>
                              </div>
                            `)
                        }
                      </div>
                      <div class="level mt-6">
                        ${
                          this.pages.length > 0 ? html`
                            <div class="dots-container">
                              ${
                                this.pages.map(page => html`
                                  <span class="dot ${page === this.activePage ? "active" : ""}" @click=${() => this.showPage(page)}>${page}</span>
                                `)
                              }
                            </div>
                            <div class="navigator">
                              <div class="prev" title="Previous">
                                <span class="icon">
                                  <adaptive-ui-icon icon="icons:chevron-left" move="-1" @click=${e => this.movePage(e)}></adaptive-ui-icon>
                                </span>
                              </div>
                              <div class="next" title="Next">
                                <span class="icon">
                                  <adaptive-ui-icon icon="icons:chevron-right" move="1" @click=${e => this.movePage(e)}></adaptive-ui-icon>
                                </span>
                              </div>
                            </div>
                          ` : ""
                        }
                      </div>
                    </div>
                  ` : html`
                    <div class="column">
                        <h3 class="mt-4">No products to view</h3>
                    </div>
                  
                  `
                }
            </div>
          `
        }
      </div>
    `;
  }
}

customElements.define(ProductsGrid2.is, ProductsGrid2);
