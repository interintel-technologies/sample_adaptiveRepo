
import { html, css,unsafeCSS } from 'lit-element';
import { ProductViewStyles } from './product-view-css';
import { ProductViewBase } from '../../base/elements/product-view';
import globalStyles from '../../App.css?raw';
class ProductView extends ProductViewBase {

    static get styles() {
        return [unsafeCSS(globalStyles),ProductViewStyles
        ];
    }

    static get properties() {
        return {
            product: Object,
            showCaseImagePos: Number,
            isInStock: Boolean,
            variants: Array,
            attributes: Array,
            selectedAttributes: Array,
            validVariants: Array,
            cols: {type: Array},
            rows: {type: Array}
        };
    }

    constructor() {
        super();

        this.product = {};
        this.showCaseImagePos = 0;
        this.isInStock=true;
        this.variants=[];
        this.attributes=[];
       
        this.validVariants = [];
      
        this.selectedAttributes = [];
        this.rows = []
        this.cols = []
    }



    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('rows')) {
            console.log("changedProperties ",changedProperties);
            
            this.initializeProduct()
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        changedProperties.forEach((oldValue, propName) => {
            if(propName === "validVariants" && this.validVariants.length === 1) {
                const validVariant = this.validVariants[0];
                this.product = {...this.product, id: this._extractProductIdAnVariant(this.product.id)[0] + "|" + validVariant.product_item_variant_id, price: validVariant.product_item_variant_cost}
            }
            if(propName === "validVariants" && oldValue.length === 1) {
                const firstVariant = this.variants[0];
                this.product = {...this.product, id: "", price: firstVariant.product_item_variant_cost}
            }
        });
    }

    initializeProduct() {
        this.product = Object.fromEntries(this.rows[0].map((rowValue, index) => {
            if(this.cols[index].label === "image") {
                return ["images", [(rowValue && rowValue !== null) ? "/media/" + rowValue : "http://via.placeholder.com/640x360"]];
            }
            if(this.cols[index].label === "stockQuantity") {
                return ["stockQuantity", parseInt(rowValue)];
            }
            return [this.cols[index].label, rowValue];
        }));

        if(this.rows.length > 1) {
            this.variants = [
                ...this.rows.map((row) =>{
                    let variant={};
                    
                    row.forEach((rowValue, index) => {
                        
                        if(this.cols[index].label.startsWith("product_item_variant")){
                           
                            variant={...variant,[this.cols[index].label]:rowValue}
                        
                        }
                    });
                  
                    return variant;
                }
                ),
            ];
        }

        this.validVariants = this.variants;

        this.variants.forEach(variant=>{
         
            variant.product_item_variant_attributes.forEach(attribute=>{
           
                if(this.attributes[attribute.name]){
                    if(!this.attributes[attribute.name].includes(attribute.value)){
                        this.attributes={...this.attributes,[attribute.name]:[...this.attributes[attribute.name],attribute.value]}
                    }
                }else{
                    this.attributes={...this.attributes,[attribute.name]:[attribute.value]}
                }
            })
        });



    
        this.product={...Object.fromEntries(Object.entries(this.product).filter(([key,value])=>!key.startsWith("product_item_variant")))};

        if(this.product.stockQuantity!=null || this.product.stockQuantity>0){
            this.isInStock=true;
        }
    
        // add quantity to product
        this.product = {...this.product, quantity: this.isItemInCart(this.product.id) ? this.getCartItemQuantity(this.product.id) : 0};
    }

    onRemoveOneBtnClickHandler() {
        const quantity = this.getCartItemQuantity(this.product.id) - 1;
        this.updateCartItemQuantity(this.product.id, quantity, "product");
    }

    onAddOneBtnClickHandler() {
        const quantity = this.getCartItemQuantity(this.product.id) + 1;
        this.updateCartItemQuantity(this.product.id, quantity, "product");
    }

    onSetQuantityBtnClickHandler() {
        const quantity = parseInt(this.shadowRoot.querySelector("input").value);
        this.updateCartItemQuantity(this.product.id, quantity, "product");
    }

    onSmallImageClickHandler(index) {
        this.showCaseImagePos = index;
        
        const selectedSmallImage = this.shadowRoot.querySelector(`#image${index}`);
        const smallImages = this.shadowRoot.querySelectorAll(".small-image");

        smallImages.forEach(smallImage => smallImage.classList.remove("selected"));
        selectedSmallImage.classList.add("selected");
    }

    onHeartBtnClickHandler() {
        this.addProductToWishlist(this.product);
    }

    onAddProductToCartBtnClickHandler(evt) {
        this.addProductToCart(this.product);
    }

    onChangeQuantitySelectorBtnCLickHandler() {
        this.shadowRoot.querySelector("#quantitySelector").classList.toggle("number-input");
        this.shadowRoot.querySelector("input").value = this.isItemInCart(this.product.id) ? this.getCartItemQuantity(this.product.id): 0;
    }

    isAttributeValid(attribute) {
        return this.validVariants.filter(validVariant => validVariant.product_item_variant_attributes.filter(variantAttribute => variantAttribute.name === attribute.name && variantAttribute.value === attribute.value).length > 0).length > 0;
    }

    onAttributeClickHandler(attribute) {
        const alreadySelectedAttributeIndex = this.selectedAttributes.findIndex(selectedAttribute => selectedAttribute.name === attribute.name);
        if(alreadySelectedAttributeIndex < 0) {
            this.selectedAttributes = [...this.selectedAttributes, attribute];
        }
        else {
            const tempSelectedAttributes = [...this.selectedAttributes];

            if(JSON.stringify(this.selectedAttributes[alreadySelectedAttributeIndex]) === JSON.stringify(attribute)) {
                tempSelectedAttributes.splice(alreadySelectedAttributeIndex, 1);
            }
            else {
                tempSelectedAttributes.splice(alreadySelectedAttributeIndex, 1, attribute);
            }
            this.selectedAttributes = [...tempSelectedAttributes];
        }
        this.computeValidVariants();
    }

    computeValidVariants() {
        if(this.selectedAttributes.length > 0) {
            this.validVariants = [...this.variants.filter(variant => this.selectedAttributes.map(
                selectedAttribute => JSON.stringify(selectedAttribute)).every(
                selectedAttribute => variant.product_item_variant_attributes.map
                (variantAttribute => {
                return JSON.stringify({name: variantAttribute.name, value: variantAttribute.value});
            }).includes(selectedAttribute)))];
        }
    }

    onPackRadioChangeHandler(e){
        this.selectedAttributes = [];
        this.computeValidVariants();
    }

    isAttributeSelected(attribute) {
        return this.selectedAttributes.map(selectedAttribute => JSON.stringify(selectedAttribute)).includes(JSON.stringify(attribute));
    }

    static get is() {
        return "product-view";
    }

    render() {
        return html`
            <div class="content">
                <div id="product-view" class="column">
                    <div class="columns" style="margin: 0px;">
                        ${
                            Object.entries(this.product).length > 0 ? html`
                                <div class="column is-5">
                                    <div class="column" style="padding-top: 0;">
                                        <figure class="large-image image is-5by4">
                                            <img src="https://i.postimg.cc/FKFYKSJY/mipayscreenshot.png" alt="${this.product.name}-product-image-${this.showCaseImagePos}">
                                        </figure>
                                    </div>
                                    <div class="columns is-multiline is-flex is-mobile imgsCol" style="margin: 0px;">
                                        ${
                                            this.product.images.map((image, index) => html`
                                                <div class="column is-one-third-mobile">
                                                    <figure id="image${index}" class="small-image image is-96x96 ${index === 0 ? "selected" : ""}" @click=${() => this.onSmallImageClickHandler(index)}>
                                                        <img src=${image} alt="${this.product.name}-product-image-${index}">
                                                    </figure>
                                                </div>
                                            `)
                                        }
                                    </div>
                                </div>
                                <div class="column is-7">
                                    <div class="content">
                                        <div class="block is-flex">
                                            <div class="is-inline-flex">
                                                <h2>${this.product.name}</h2>
                                                <p class="stockStatus ${this.isInStock? "active": ""}"><span class="stockStatusSpan p-1">In Stock</span></p>
                                            </div>
                                            <div class="is-flex">
                                                <h3 id="currentPrice">${this.formatToKenyaShillings(this.product.price)}</h3>
                                            </div> 
                                            <hr>
                                            <p class="description">${this.product.description}</p>
                                            <hr>
                                            ${
                                                this.variants.length > 0 ? html`
                                                    <div class="variations">
                                                        <div class="attributes">
                                                            <div class="optionSelection">
                                                                ${
                                                                    Object.entries(this.attributes).map(([key, value]) => html`
                                                                        <label id="label-${key}">${key}</label>
                                                                        <ul class="optionList" id="optionList-${key}">
                                                                            ${
                                                                                value.map(val => {
                                                                                    const attribute = {name: key, value: val};
                                                                                    return html`
                                                                                        <li class="optionListItem p-1 is-capitalized ${this.isAttributeSelected(attribute) ? "selected" : ""}  ${this.isAttributeValid(attribute) ? "" : "disabled"}" id="option-${val}"  @click=${()=>this.onAttributeClickHandler(attribute)}><p>${val}</p></li>
                                                                                    `
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    `)
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                ` : ""
                                            }
                                            <div id="actions" class="columns">
                                                <div class="column ${!this.isItemInCart(this.product.id) ? "is-hidden" : "is-flex"}">
                                                    <div id="quantitySelector">
                                                        <div id="buttonsInput" class="buttons has-addons">
                                                            <button id="removeBtn" class="button ${this.isCartLoading? "is-loading":""}" title="Remove" @click=${() => this.onRemoveOneBtnClickHandler()}>
                                                                    <span class="icon">
                                                                        <i class="fa-solid fa-minus"></i>
                                                                    </span>
                                                            </button>
                                                            <button id="qtyBtn" class="button ${this.isCartLoading? "is-loading":""}">
                                                                ${ this.isItemInCart(this.product.id) ? this.getCartItemQuantity(this.product.id): 0}
                                                            </button>
                                                            <button id="addBtn" class="button ${this.isCartLoading? "is-loading":""}" title="Add" 
                                                                ?disabled=${this.product.stockQuantity ? ( this.getCartItemQuantity(this.product.id) >= this.product.stockQuantity ? true : false ) : false }
                                                                @click=${() => this.onAddOneBtnClickHandler()}
                                                            >
                                                                <span class="icon">
                                                                    <i class="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div id="numberInput" class="field has-addons">
                                                            <div class="control">
                                                                <input class="input" type="number" placeholder="Quantity" value=${ this.isItemInCart(this.product.id) ? this.getCartItemQuantity(this.product.id): 0}>
                                                            </div>
                                                            <div class="control">
                                                                <button class="button is-info ${this.isCartLoading? "is-loading":""}" @click=${() => this.onSetQuantityBtnClickHandler()} title="Update Quantity">
                                                                    <span class="icon is-small">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="icon is-clickable ml-4" title="Change Input" @click=${() => this.onChangeQuantitySelectorBtnCLickHandler()}>
                                                        <i class="fa-solid fa-arrow-right-arrow-left fa-beat"></i>
                                                    </div>
                                                </div>
                                                <div class="column ${this.isItemInCart(this.product.id) ? "is-hidden" : "is-flex"}">
                                                    <button id="addToCartBtn" class="button is-primary ${this.isCartLoading? "is-loading":""}" type="button" .productId ="${this.product["id"]}" 
                                                        @click=${() => this.onAddProductToCartBtnClickHandler()} title="Add to Cart" ?disabled=${(this.validVariants.length !== 1 && this.variants.length > 0)}
                                                    >
                                                        ${this.product.stockQuantity ? ( this.product.stockQuantity > 0 ? "Add to Cart" : "Out of Stock" ) : "Add to Cart"}
                                                        
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div>
                                            <p><span class="has-text-weight-bold">Category</span>: <span class="category">${this.product.category}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ` : ""
                        }
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(ProductView.is, ProductView);
