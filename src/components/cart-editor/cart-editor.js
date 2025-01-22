
import { html, css, unsafeCSS } from 'lit-element';
import { CartEditorStyles } from './cart-editor-css';
import { CartEditorBase } from '../../base/elements/cart-editor.js';
import "../date/date.js";
import globalStyles from '../../App.css?raw';
import { eCommerceStore } from '../../slices/eCommerceSlice.js';

class CartEditor extends CartEditorBase {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            CartEditorStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            cart            : Array,
            total           : Number,
            subtotal        : Number,
            discount        : Number,
            appliedCoupon   : String,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();

        this.cart           = [];
        this.total          = 0;
        this.subtotal       = 0;
        this.discount       = 0;
        this.appliedCoupon  = '';
        this.per            = 0;
        this.couponDetailsList = [
            { code: 'SAVE10', discountPercentage: 10 },
            { code: 'SUMMER20', discountPercentage: 20 },
        ];
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    // firstUpdated() {


    //         this.type = this.e.details.type;

    //         if(this.e.variableType.toLowerCase() !== "purchase order editor") {
    //             this.fetchCart();
    //         }
      
        
    // }

    loadCartFromStore() {
        const state = eCommerceStore.getState();
        this.cart = state.ecCommerce.cart
        console.log("syyaye is ",this.cart);
        
       
    }


    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('cols')) {            
            console.log("this, is e ",this.e);
            
            this.type = this.e.details.type;

            if(this.e.variableType.toLowerCase() !== "purchase order editor") {
                console.log("fetching cart");
                
                this.fetchCart();
               this.loadCartFromStore()

            }

            changedProperties.forEach((oldValue, propName) => {
                if (propName === "cart") {
                    this.total = this.cart.reduce((total, cartItem) => total + cartItem.total, 0);
                    this.subtotal = this.cart.reduce((subtotal, cartItem) => subtotal + cartItem.subtotal, 0);
                    this.discount = this.cart.reduce((discount, cartItem) => discount + cartItem.discount, 0);
                }
            });
        }
    }

    updateCart(id, quantity) {
        console.log("id is and quantity",id,quantity);
        
        const itemKey = this.isCartItemSynced(id) ? "cart_item_id" : "product_item_id";
        if(this.e.variableType === "purchase order editor") {
            // because purchase order reuses this element
            this.dispatchEvent(new CustomEvent(`cartUpdated`, {
                bubbles: true,
                composed: true,
                detail: { [itemKey]: id, quantity: quantity }
            }));
        }
        else {
            this.updateCartItemQuantity(id, quantity, "cart");
            const state = eCommerceStore.getState();
            this.cart = state.ecCommerce.cart;
            this.requestUpdate(); 
        }
    }

    discountPercentage(discountAmount, originalPrice) {
        const discountPercentage = (discountAmount / originalPrice) * 100;
        this.per = Math.round(discountPercentage);
        return this.per;
    }

    onRemoveItemFromCartClickHandler(id) {   
        this.updateCart(id, 0);
        const state = eCommerceStore.getState();
        this.cart = state.ecCommerce.cart;
        this.requestUpdate(); 
    }

    onRemoveOneClickHandler(id) {
        const quantity = this.getCartItemQuantity(id) - 1;

        if(quantity<1){
            const title = 'Remove item from Cart';
            const content = 'Are you sure you want to remove item from cart?';
            const actions = [{id:1, label: 'Yes', color: 'green', callback: () => this.updateCart(id, 0)}, {id:2, label: 'No', color: 'red'}];
            // PopUp.showConfirmBox(title, content, actions,actionId=>{
            //     if(actionId === 1){
            //         this.updateCart(id, quantity);
            //     }
            // });
        }else{
            this.updateCart(id, quantity);
            const state = eCommerceStore.getState();
            this.cart = state.ecCommerce.cart;
            this.requestUpdate(); 
        }
    }

    onAddOneClickHandler(id) {
        const quantity = this.getCartItemQuantity(id) + 1;
        this.updateCart(id, quantity);
    }

    onSetQuantityBtnClickHandler(id) {
        const quantity = parseInt(this.shadowRoot.querySelector("#input" + id).value);
        this.updateCart(id, quantity);
    }

    valid(validation) {
        this.cart.forEach(cartItem => {
            this.shadowRoot.querySelector(`#dateInput${cartItem.id}`).setAttribute("validation", JSON.stringify({
                isValid: true,
                validationMessage: ""
            }));
        });
    }
    
    invalid(validation) {
        this.getValue().forEach(item => {
            const isItemExpired = () => {
                return item["expiry_date"] ? (new Date().getTime() > new Date(item["expiry_date"] + "T00:00").getTime() ? true : false) : true
            };

            this.shadowRoot.querySelector(`#dateInput${item.id}`).setAttribute("validation", JSON.stringify({
                isValid: (!item["expiry_date"] || isItemExpired()) ? false : true,
                validationMessage: item["expiry_date"] ? (isItemExpired() ? "Product Expired" : "") : "Field is empty"
            }));
        });
    }

    onUpdateCartBtnClickHandler() {
        this.cart.forEach(cartItem => {
            const newQuantity = parseInt(this.shadowRoot.querySelector(`#input${cartItem.id}`).value);
            this.updateCart(cartItem.id, newQuantity);
        });
    }

    onApplyBtnClickHandler() {
        const couponCode = this.appliedCoupon;
    
        if (!couponCode) {
            console.log("No coupon code provided");
            return;
        }
    
        this.fetchCouponDetails(couponCode)
            .then(couponDetails => {
                if (couponDetails.isValid) {
                    const discountAmount = this.calculateDiscount(couponDetails, this.subtotal);
                    this.discount = discountAmount;
                    this.total = this.subtotal - discountAmount;
                } else {
                    console.log("Invalid coupon code");
                }
            })
            .catch(error => {
                console.error("Error applying coupon:", error);
            });
    }

    onCouponInputHandler(coupon) {
        this.appliedCoupon = coupon;
    }

    fetchCouponDetails(couponCode) {
        const couponDetails = this.couponDetailsList.find(coupon => coupon.code === couponCode);
    
        if (couponDetails) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        isValid: true,
                        discountPercentage: couponDetails.discountPercentage,
                    });
                }, 1000);
            });
        } else {
            return Promise.resolve({ isValid: false });
        }
    }

    calculateDiscount(couponDetails, subtotal) {
        const discountPercentage = couponDetails.discountPercentage;
        return (subtotal * discountPercentage) / 100;
    }

    getProductIndexById(id) {
        return this.cart.findIndex(cartItem => cartItem.id === id);
    }

    onChangeQuantitySelectorBtnCLickHandler(id) {
        this.shadowRoot.querySelector("#quantitySelector"+id).classList.toggle("number-input");
        this.shadowRoot.querySelector("#input" + id).value = this.isItemInCart(id) ? this.getCartItemQuantity(id): 0;
    }

    onContinueShoppingBtnClickHandler() {
        this.dispatchEvent(new CustomEvent('service-call', { 
            detail: { service: this.e.details["continue_shopping_service"], params: {child:1,cart:this.cart} },
            bubbles: true,
            composed: true 
        }));

        // this.pl._dialog(this.e.details["continue_shopping_service"], this.cart);
    }

    onProceedToCheckoutBtnClickHandler() {

        this.dispatchEvent(new CustomEvent('service-call', { 
            detail: { service: this.e.details["checkout_service"], params: {child:1,cart:this.cart} },
            bubbles: true,
            composed: true 
        }));

        // this.pl._dialog(this.e.details["checkout_service"], this.cart);
    }

    _processInitials(name){
        const words = name.trim().split(/\s+/).filter(Boolean);
      
        // Extract the first letter of each word and combine them into initials
        const initials = words.length > 0 ? words[0][0].toUpperCase() : '';
      
        return initials;
      }
      

    static get is() {
        return "cart-editor";
    }

    render() {
        return html`
            <div class="content" id="cartEditor">
                <h6 class="title">${this.e ? this.e.name:``}</h6>
                <div class="columns hdr mt-2">
                    <div class="column is-4">
                        <h5 style="margin-left: 30px;">Product</h5>
                    </div>
                    <div class="column is-3">
                        <h5>Quantity</h5>
                    </div>
                    <div class="column is-2">
                        <h5>Price</h5>
                    </div>
                    <div class="column is-2">
                        <h5>Total</h5>
                    </div>
                    <div style="text-align: center;" class="column is-1">
                        <h5 style="text-align: flex-end;"></h5>
                    </div>
                </div>
                <ul>
                ${
                    this.cart.length > 0 ? this.cart.map(cartItem => html`
                        <li class="columns product py-1" style="margin: 0;">
                            <div class="column is-4" style="justify-content: flex-start;">
                                <div class="product-column" style="margin-left:30px">
                                    ${cartItem.image ?html`

                                        <figure class="image is-64x64">

                                        <img src="${ "/media/" + cartItem.image}"  alt="${cartItem.name}">
                                        </figure>
                                    `:html`
                                    <div class="circular">
                                        <h4>${this._processInitials(cartItem.name)}</h4>
                                    </div>
                                    `}
                                    
                                    <h5 style=" margin-left: 20px">${cartItem.name}</h5>
                                </div>
                                ${
                                    this.type === "supply-order" ? html`
                                        <date-input id="dateInput${cartItem.id}" style="width: 100%;" .name=${"Pick expiry date"}></date-input>
                                    ` : ""
                                }
                            </div>
                            <div class="column is-3 product-column">
                                <div id="quantitySelector${cartItem.id}" class="quantity-selector">
                                    <div class="buttons has-addons buttons-input m-0">
                                        <button id="removeBtn${cartItem.id}" class="button ${this.isCartLoading ? "is-loading" : ""} remove-btn" title="Remove 1" ?disabled=${cartItem.quantity <= 0 }
                                            @click=${() => this.onRemoveOneClickHandler(cartItem.id)}
                                        >
                                        <adaptive-ui-icon title="Remove ${cartItem.name}" dataColor="var(--primary)" height="24px" icon="MdOutlineRemove"></adaptive-ui-icon>
                                        </button>
                                        <button class="button ${this.isCartLoading ? "is-loading" : ""} qty-btn"><h5>${cartItem.quantity}</h5></button>
                                        <button id="addBtn${cartItem.id}" class="button ${this.isCartLoading ? "is-loading" : ""} add-btn " title="Add 1" ?disabled=${cartItem.stockQuantity && cartItem.quantity >= cartItem.stockQuantity }
                                            @click=${() => this.onAddOneClickHandler(cartItem.id)}
                                        >
                                        <adaptive-ui-icon title="Add ${cartItem.name}" dataColor="var(--primary)" icon="MdAdd"></adaptive-ui-icon>

                                        </button>
                                    </div>
                                    <div class="field has-addons num-input">
                                        <div class="control">
                                            <input id="input${cartItem.id}" class="input" type="number" placeholder="Quantity" value=${this.getCartItemQuantity(cartItem.id)} ?disabled=${this.isCartLoading}>
                                        </div>
                                        <div class="control">
                                            <a class="button is-link ${this.isCartLoading ? "is-loading" : ""}" @click=${() => this.onSetQuantityBtnClickHandler(cartItem.id)} title="Update Quantity">
                                                <div class="icon is-small">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span class="icon is-clickable ${this.isCartLoading ? "is-loading" : ""} ml-3" title="Change Input" @click=${() => this.onChangeQuantitySelectorBtnCLickHandler(cartItem.id)}>
                                    <i class="fa-solid fa-arrow-right-arrow-left fa-beat"></i>
                                </span>
                            </div>
                            <div class="column is-2 product-column">
                                <h5 class="label">Price: </h5>
                                <h5 style="text-align: center;">${this.formatToKenyaShillings(cartItem.price)}</h5>
                            </div>
                            <div style="text-align: center;" class="column is-2 product-column qty-total">
                                <h5 class="label">Total: </h5>
                                <h5 id="total${cartItem.id}" style="text-align: center;">${this.formatToKenyaShillings(cartItem.price * cartItem.quantity)}</h5>
                                ${cartItem.discount > 0 ? html`
                                    <p class="is-size-7 has-text-weight-bold mt-2 has-text-success">
                                        ${this.discountPercentage(cartItem.discount, cartItem.total)}% OFF Applied
                                    </p>
                                ` : ''}
                            </div>
                            <div style="text-align: center;" class="column is-1 product-column">
                                <h5 class="label">Remove: </h5>
                                <span class="icon has-text-primary is-clickable">
                                    <adaptive-ui-icon title="Remove ${cartItem.name}" icon="delete" @click=${() => this.onRemoveItemFromCartClickHandler(cartItem.id)}></adaptive-ui-icon>
                                </span>
                            </div>
                        </li>
                    `) : html`<h3 class="mt-3">Cart is empty</h3>`
                }
            </ul>
            
                <div class="price-cont columns">
                    <div class="column">
                        <!-- <h5 class="is-size-6">Do you have a cupon?</h5>
                        <div class="field is-grouped">
                            <p class="control">
                                <input class="input" type="text" placeholder="Enter Cupon Code" @input=${(e) => this.onCouponInputHandler(e.target.value)}>
                            </p>
                            <p class="control">
                                <a class="button is-link" @click=${this.onApplyBtnClickHandler}>
                                Apply
                                </a>
                            </p>
                        </div> -->
                    </div>
                    <div class="cont is-two-fifths column">
                        <!-- <div class="mb-6">
                            <button class="is-fullwidth is-link button" @click=${this.onUpdateCartBtnClickHandler}>Update</button>
                        </div> -->
                        <div class="is-flex is-justify-content-space-between">
                            <h5>Subtotal</h5>
                            <h6>${this.formatToKenyaShillings(this.subtotal)}</h6>
                        </div>
                        <div class="is-flex is-justify-content-space-between">
                            <h5>Discount</h5>
                            <h6>${this.formatToKenyaShillings(this.discount)}</h6>
                        </div>
                        <div class="is-flex is-justify-content-space-between">
                            <h5>Total</h5>
                            <h6>${this.formatToKenyaShillings(this.total)}</h6>
                        </div>
                    </div>   
                </div>

                <div class="cart-btns py-2">
                    ${
                    this.e.details["continue_shopping_service"] ? html`
                        <button class="button btn cont-btn mr-2" type="button" title="Continue Shopping" @click=${()=>this.onContinueShoppingBtnClickHandler()}>
                            <h6>Continue Shopping</h6>
                        </button>
                    ` : ""
                    }
                    ${
                    this.e.details["checkout_service"] ? html`
                        <button class="button btn proceed-btn" type="button" title="Proceed to Checkout" @click=${()=>this.onProceedToCheckoutBtnClickHandler()}>
                            <h6>Proceed to Checkout</h6>
                        </button>
                    ` : ""
                    }
                </div>
            </div>
        `;
    }
}

customElements.define(CartEditor.is, CartEditor);
