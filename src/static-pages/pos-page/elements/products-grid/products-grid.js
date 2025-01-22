
import { html, css, LitElement } from "lit-element";
import { ProductsGridStyles } from './products-grid-css';
import { STATIC_POS_PRODUCT_VARIANTS_SERVICE, STATIC_POS_PRODUCT_CATEGORIES_SERVICE } from '../../POSPageMixin';
import { PopUp } from "../../../../themes/dsv2.0/components/popups/PopUp";
import { POSPageMixin } from "../../POSPageMixin";
import { ECommerceMixin } from "../../../../core/mixins/ecommerce-mixin";
import { ThemeMixin } from "../../../../themes/dsv2.0/components/mixins/ThemeMixin";

class ProductsGrid extends POSPageMixin(ThemeMixin(ECommerceMixin(LitElement))) {
  static get styles() {
    return [
      super.styles,
      ProductsGridStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      products: Array,
      pages: Array,
      activePage: Number,
      categories: Array,
      selectedCategory: String,
      selectedSubCategory: String,
      view: String,
      areCategoriesLoading: Boolean,
      areProductsLoading: Boolean
    };
  }

  constructor() {
    super();

    this.products = [];
    this.pages = [];
    this.categories = {"All": [], "Electronics": ["Phones", "Laptops", "Chargers"], "Drinks": ["Fresh Juice", "Soda", "Milk", "Beer"]};
    this.selectedCategory = "All";
    this.selectedSubCategory = "All";
    this.view = 'grid';
    this.areCategoriesLoading = false;
    this.areProductsLoading = false;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.areCategoriesLoading = true;
    this.areProductsLoading = true;

    //categories get request
    this.posAPIRequest(STATIC_POS_PRODUCT_CATEGORIES_SERVICE, null).then(response => {
      this.areCategoriesLoading = false;
      this.categories = Object.fromEntries(response.categories.map(category => [category.name, category.shop_product_type.map(subCategory => subCategory.name)]));
    }).catch(err => {
      this.areCategoriesLoading = false;
      console.log(err);
      this.categories={"All": [], "Electronics": ["Phones", "Laptops", "Chargers"], "Drinks": ["Fresh Juice", "Soda", "Milk", "Beer"]};
    });

    //products get request
    this.posAPIRequest(STATIC_POS_PRODUCT_VARIANTS_SERVICE, "GET", null).then(response => {
      this.areProductsLoading = false;
      this.products = response.product_variants.map(productVariant => {
        const productItem = productVariant.product_item;
        return {
          "id": productItem.product_item_id + "|" + productVariant.product_variant_id,
          "name": productItem.name,
          "image": productItem.default_image,
          "description": productItem.description,
          "price": productItem.unit_cost,
          "quantity": null,
        }
      });
    }).catch(err => {
      this.areProductsLoading = false;
      console.log(err);
      this.products = [
        {
          "id": "100318|undefined",
          "name": "Lemonade",
          "image": "",
          "description": "Lemonade 200ml",
          "price": "240.00",
          "quantity": null
        },
        {
          "id": "100317|undefined",
          "name": "Nikom",
          "image": "",
          "description": "Juice",
          "price": "150.00",
          "quantity": null
        },
        {
          "id": "100313|undefined",
          "name": "tests",
          "image": "",
          "description": "tests",
          "price": "123.00",
          "quantity": null
        },
        {
          "id": "100311|undefined",
          "name": "Mango Fruit Juice",
          "image": "",
          "description": "fruit",
          "price": "140.00",
          "quantity": null
        },
        {
          "id": "100306|undefined",
          "name": "Sufuria",
          "image": "crm_productitem_imagepath/download_2.jfif",
          "description": "Sufuria",
          "price": "200.00",
          "quantity": null
        },
        {
          "id": "100305|undefined",
          "name": "Minute Maid",
          "image": "crm_productitem_imagepath/images.jfif",
          "description": "Minute maid",
          "price": "122.00",
          "quantity": null
        },
        {
          "id": "100295|undefined",
          "name": "Fay facial tissue 50 Pkts (50 Pkts= 1 Carton",
          "image": "crm_productitem_imagepath/tiss.png",
          "description": "Fay facial tissue 50 Pkts (50 Pkts= 1 Carton",
          "price": "2500.00",
          "quantity": null
        },
        {
          "id": "100298|undefined",
          "name": "Cosy singles wrap 40's (40pcs =1 bale)",
          "image": "crm_productitem_imagepath/cosy-singles.jpeg",
          "description": "Cosy singles wrap 40's (40pcs =1 bale)",
          "price": "1670.00",
          "quantity": null
        }
    ]
    });
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

  onCategoryTabClickHandler(category) {
    this.selectedCategory = category;
    this.selectedSubCategory = "All"; // reset sub category
    // this.fetchProductsByCategory(category);
  }

  onSubCategoryTabClickHandler(subCategory) {
    this.selectedSubCategory = subCategory;
    // this.fetchProductsBySubCategory(subCategory);
  }

  onSearchKeyUp(e){
    const searchValue = e.detail;
    this.deleteParamKeys("q", false);
    this.updateParams("q", searchValue);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('search', e => this.onSearchKeyUp(e));

  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('search',e => this.onSearchKeyUp(e));
  
  }

  selectView(view){
    this.view = view;
  }

  onShoppingCartClickBtn(product){
    if (!this.isItemInCart(product.id)){
        this.addProductToCart(product);
      }
    else{
      const title = 'Remove item from Cart';
      const subtitle = 'Are you sure you want to remove item from cart?';
      const actions = [{ id: 1, label: 'Yes', color: 'has-background-success'}, { id: 2, label: 'No', color: 'has-background-danger'}];
      PopUp.showConfirmBox(title, subtitle, actions, actionId => {
        if(actionId === 1) {
          this.updateCart(product.id, 0);
        }
      });
    }
  }

  decrementQuantity(id){
    const productId = this._extractProductIdAnVariant(id)[0];
		const quantity = this.getCartItemQuantity(productId) - 1;
    this.updateCartItemQuantity(id, quantity, "product");

		const item=this.getCartItem(id);
		item.total=item.price*quantity;

    if(quantity<1){
      const productId = this._extractProductIdAnVariant(id)[0];
      const title = 'Remove item from Cart';
      const subtitle = 'Are you sure you want to remove item from cart?';
      const actions = [{ id: 1, label: 'Yes', color: 'green'}, { id: 2, label: 'No', color: 'red'}];
      PopUp.showConfirmBox(title, subtitle, actions, actionId => {
        if(actionId === 1) {
          this.updateCart(productId, 0);
        }
      });
    }
	}

  incrementQuantity(id){
		const quantity = this.getCartItemQuantity(id) + 1;
    this.updateCartItemQuantity(id, quantity, "product");	
		const item=this.getCartItem(id);
		item.total=item.price*quantity;
	}

  static get is() {
    return "products-grid";
  }

  render() {
    return html`
      <div class="column content">
        ${
          this.areCategoriesLoading ? html`
            <div class="is-flex spinTabContainer">
              <span class="icon">
                <i class="fa-solid fa-2xl fa-spinner fa-spin"></i>
              </span>
            </div>
          ` : Object.keys(this.categories).length > 1 ? html`
            <div class="tabs" id="tabs-1">
              <ul class="m-0">
                ${
                  Object.keys(this.categories).map(category => html`
                    <li class="${category === this.selectedCategory ? "is-active" : ""}" @click=${() => this.onCategoryTabClickHandler(category)}>
                      <a class="category-btn button is-rounded mx-4 mb-2 mx-4 px-5">${category}</a>
                    </li>
                  `
                )}
              </ul>
            </div>
            ${
              this.categories[this.selectedCategory].length > 0 ? html`
                <div class="tabs" id="tabs-2">
                  <ul class="m-0">
                    ${
                      this.categories[this.selectedCategory].map(subCategory => html`
                        <li class="${subCategory === this.selectedSubCategory ? "is-active" : ""}" @click=${() => this.onSubCategoryTabClickHandler(subCategory)}>
                          <a class="button mx-4 mb-2 mx-4 px-4">${subCategory}</a>
                        </li>
                      `
                    )}
                  </ul>
                </div>
              ` : ""
            }
          ` : ""
        }
        <div class="sortCol columns is-mobile">
          <div class="column is-10">
            <h6> Sort By:</h6>
          </div>
          <div class="column is-2 sortBtns">
            <span id="gridBtn" class="icon is-medium ${this.view==='grid'?`selected`:``}" @click=${()=>this.selectView('grid')}>
              <i class="fa fa-th"></i>
            </span>
            <span id="listBtn" class="icon is-medium ${this.view==='list'?`selected`:``}" @click=${()=>this.selectView('list')}>
              <i class="fa fa-list"></i>
            </span>
          </div>
        </div>
        ${
          this.areProductsLoading? html`
            <div class="is-flex spinContainer">
              <span class="icon">
                <i class="fa-solid fa-2xl fa-spinner fa-spin"></i>
              </span>
            </div>
          ` : this.products.length > 0 ? html`
            <div class="column p-0">
              <div class="columns is-multiline is-mobile m-0">
                ${
                  this.view === 'grid' ? this.products.map(product => html`
                    <div class="column my-2 is-one-quarter-desktop is-half-mobile" title="Add to cart" id="thisCol${product.id}">
                      <div class="card is-clickable" @dblclick=${() => this.addProductToCart(product)}>
                        <div class="card-image">
                          <figure class="image p-1">
                            <img src="https://cdnprod.mafretailproxy.com/sys-master-root/hcf/hfb/17556948811806/68998_main.jpg_1700Wx1700H?im=Resize=400" alt="${product.name} Image"/>
                          </figure>
                        </div>
                        <div class="card-content">
                          <h6>${product.name}</h6>
                          <p>${this.formatToKenyaShillings(product.price)}</p>
                        </div>
                      </div>
                    </div>
                  `
                ) : this.products.map(product => html`
                  <div class="column my-2 is-full-desktop is-full-tablet is-full-mobile" title="Add to cart" id="thisCol${product.id}">
                    <div class="columns is-multiline is-mobile listCol">
                      <div class="column is-2-desktop is-3-tablet is-6-mobile">
                        <figure class="image p-1">
                          <img src="https://cdnprod.mafretailproxy.com/sys-master-root/hcf/hfb/17556948811806/68998_main.jpg_1700Wx1700H?im=Resize=400" alt="${product.name} Image"/>
                        </figure>
                      </div>
                      <div class="column is-3-desktop is-2-tablet is-6-mobile">
                        <h6>${product.name}</h6>
                      </div>
                      <div class="column is-2-desktop is-2-tablet is-12-mobile">
                        <p>${this.formatToKenyaShillings(product.price)}</p>
                      </div>
                      <div class="column is-2-desktop is-3-tablet is-5-mobile">
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
                      </div>
                      <div class="column is-2-desktop is-1-tablet cartCol is-7-mobile">
                        <span class="icon is-small ${this.isItemInCart(product.id) ? "is-hidden" : ""}" id="cartBtn" @click=${()=>this.onShoppingCartClickBtn(product)}>											
                          <i class="fas fa-shopping-cart"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                `)
              }
              </div>
              <div class="nav is-flex mt-6 is-justify-content-center" >
                ${
                  this.pages.length > 1 ? html`
                    <div class="prev is-clickable" title="Previous">
                      <span class="icon">
                        <adaptive-ui-icon icon="icons:chevron-left" move="-1" @click=${e => this.movePage(e)}></adaptive-ui-icon>
                      </span>
                    </div>
                    ${
                      this.pages.map(page => html`
                        <span class="px-2 mx-2 is-clickable ${page === this.activePage ? "is-active" : ""}" @click=${() => this.showPage(page)}>${page}</span>
                      `)
                    }
                    <div class="next is-clickable" title="Next">
                      <span class="icon">
                        <adaptive-ui-icon icon="icons:chevron-right" move="1" @click=${e => this.movePage(e)}></adaptive-ui-icon>
                      </span>
                    </div>
                  ` : ""
                }
              </div>
            </div>
          ` : html`<h3 class="mt-4">No products to view</h3>`
        }
      </div>
    `;
  }
}

customElements.define(ProductsGrid.is, ProductsGrid);
