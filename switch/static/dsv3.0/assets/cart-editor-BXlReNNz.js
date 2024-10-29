import{i as c,S as d,r as u,g as p,k as a}from"./index-C2PWchud.js";import{E as h,e as r}from"./ecommerce-mixin-BZ3_9d38.js";import"./date-D9zgt7Gf.js";const m=c`

    .cart-btns .cont-btn{
        font-family:var(--family-sans-serif) !important;
        color:var(--link) !important;
        background-color:var(--body-background-color);
        border:1px solid var(--primary) !important;
    }
    .cart-btns .proceed-btn{
        font-family:var(--family-sans-serif) !important;
        color:var(--primary--color-invert) !important;
        background-color:var(--primary);
    }
    .cart-btns .proceed-btn h6{
        color:var(--white);
    }
    #couponColumn .button{
        font-family:var(--family-sans-serif) !important;
        color:var(--primary--color-invert) !important;
        background-color:var(--link);
    }
    .buttons {
        border-radius: 0 !important;
        flex-wrap: nowrap;
    }
    .qty-btn {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        width: 100%;
        pointer-events: none; 
        color: var(--link--invert-color);
        background-color:transparent;
        min-width:50px;
        
    }
    .qty-btn h5{
        font-weight:400 !important;
        font-family:var(--family-sans-serif);
    }
    .qty-btn > .icon {
        pointer-events: none !important;
    }
    .remove-btn, .add-btn {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        cursor: pointer;
        background-color:var(--md-sys-color-secondaryContainer);
      border-radius:50% !important;
      width:45px;
      height:45px;
    }
    .remove-btn adaptive-ui-icon .icon,  .add-btn adaptive-ui-icon .icon{
        width: 24px !important;
        height: 24px !important;
        color:var(--primary);
    }
    .circular{
        width:50px;
        height:50px;
        background-color:var(--md-sys-color-secondaryContainer);
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        display: flex;
        border: 2px solid transparent;
        box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--md-sys-color-secondaryContainer); 
    }
    .circular h4{
        margin-bottom:0 !important;
        font-weight:400;
        font-size: 20px !important; 
        display: block !important;

    }
    .image {
        display: flex;
        margin: 0 !important;
        background-color:transparent;
        border-radius: 6px  6px 6px 6px;
    }
    img {
        object-fit: contain;
    }
    .product-column {
        display: flex;
        align-items: center;
    }
    .title{
        color:var(--primary);
        font-weight:400 !important;
        line-height:20px;
        letter-spacing:.5px;
        font-size:14px !important;
        margin-bottom:.5rem !important;
    }
    .hdr{
        margin: 0px;
        /* border:1px solid rgb(183, 181, 181); */
        background-color:var(--md-sys-color-surfaceBright);
    }   
    .hdr h5, .product h5 {
        margin-bottom: 0 !important;
        color:var(--link-color-invert) !important;
        font-weight:400;
        font-size:14px !important;
    }
    .buttons-input {
        display: flex;
    }
    .num-input {
        display: none !important;
    }
    .quantity-selector.number-input > .num-input {
        display: flex !important;
    }
    .quantity-selector.number-input > .buttons-input {
        display: none;
    }
    .qty-total{
        flex-direction: column!important;
        justify-content: center;
        align-items: flex-start
    }
    ul {
        list-style: none;
        max-height: 55vh;
        overflow-y: auto;
        margin-left: 0 !important;
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        border-bottom: 1px solid var(--md-sys-color-outlineVariant);
    }
    .product {
        border-bottom: 0.5px solid var(--md-sys-color-outlineVariant);
    }
    .columns:not(:last-child){
        margin-bottom:0 !important;
    }
    .cart-btns {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        padding-left: 4%;
        padding-right: 2%;
    }
    #total {
        text-align: end;
        padding-right: 2%;
    }
    #total span{
        color:var(--link);
    }
    .label {
        display: none;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    .price-cont{
        width: 100%;
        position: relative;
        margin: 20px 0;
    }
    .price-cont .cont{
        position: relative;
        right: 0;
    }   
    .cont h5{
        font-weight:400 !important;
        font-size:16px !important;
        color:var(--md-sys-color-outline);
    }
    @media screen and (max-width: 770px) {
        #cartEditor{
            margin-top:5%;
        }
        ul{
            list-style:none !important;
            border-top:1px solid rgb(183, 181, 181) !important;
            padding-top:3%;
        }
        .hdr {
            display: none;
        }
        #addToCartBtn {
            width: 100%;
        }
        /* .cart-btns {
            justify-content: center;
        }
        .cart-btns > .btn {
            margin-left: 0 !important;
            margin-bottom: 20px;
        } */
        #total {
            text-align: center;
        }
        .product-column {
            justify-content: space-between;
        }
        .label {
            display: block;
        }
        .qty-total{
            flex-direction:row !important;
        }
    }
`,y=class extends h(d){static get properties(){return{value:Object,loader:Promise}}constructor(){super(),this.value=void 0}getValue(){return this.cart.map(e=>{if(this.e.details.type==="supply-order"){const t=this.shadowRoot.querySelector(`#dateInput${e.id}`).value;return{id:e.id,quantity:e.quantity,expiry_date:t}}return{id:e.id,quantity:e.quantity,params:this.e.details.dispatch_return}})}getName(){return this.e.formName.split("=")[0]}validate(){if(this.e.details.type==="supply-order"){let e=!0;return this.getValue().forEach(t=>{const i=()=>t.expiry_date?new Date().getTime()>new Date(t.expiry_date+"T00:00").getTime():!0;(!t.expiry_date||i())&&(e=!1)}),e?new this.Validation(!0,"valid"):new this.Validation(!1,"Invalid")}return new this.Validation(!0,"valid")}dscDataName(){return this.e.defaultValue}toTitleCase(e){if(!e)return"";e=e.toString(),e=e.toLowerCase().split(" ");let t=[];for(let i=0;i<e.length;i++)t[i]=e[i].substr(0,1).toUpperCase()+e[i].substr(1);return t.join(" ")}init(e,t){super.init(e,t),this.required=this.e.required||e.min&&e.min>0,this.title=this.toTitleCase(e.name),this.icon=e.icon,this.params=this.pl.paramsCopy(),this.sectionSize=e.sectionSize,this.loader=this.loadData()}};class l extends y{static get styles(){return[u(p),m,c`
                :host {
                    display: block;
                }
            `]}static get properties(){return{cart:Array,total:Number,subtotal:Number,discount:Number,appliedCoupon:String,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.cart=[],this.total=0,this.subtotal=0,this.discount=0,this.appliedCoupon="",this.per=0,this.couponDetailsList=[{code:"SAVE10",discountPercentage:10},{code:"SUMMER20",discountPercentage:20}],this.e=null,this.rows=[],this.cols=[]}loadCartFromStore(){const t=r.getState();this.cart=t.ecCommerce.cart,console.log("syyaye is ",this.cart)}updated(t){(t.has("e")||t.has("cols"))&&(console.log("this, is e ",this.e),this.type=this.e.details.type,this.e.variableType.toLowerCase()!=="purchase order editor"&&(console.log("fetching cart"),this.fetchCart(),this.loadCartFromStore()),t.forEach((i,o)=>{o==="cart"&&(this.total=this.cart.reduce((n,s)=>n+s.total,0),this.subtotal=this.cart.reduce((n,s)=>n+s.subtotal,0),this.discount=this.cart.reduce((n,s)=>n+s.discount,0))}))}updateCart(t,i){console.log("id is and quantity",t,i);const o=this.isCartItemSynced(t)?"cart_item_id":"product_item_id";if(this.e.variableType==="purchase order editor")this.dispatchEvent(new CustomEvent("cartUpdated",{bubbles:!0,composed:!0,detail:{[o]:t,quantity:i}}));else{this.updateCartItemQuantity(t,i,"cart");const n=r.getState();this.cart=n.ecCommerce.cart,this.requestUpdate()}}discountPercentage(t,i){const o=t/i*100;return this.per=Math.round(o),this.per}onRemoveItemFromCartClickHandler(t){this.updateCart(t,0);const i=r.getState();this.cart=i.ecCommerce.cart,this.requestUpdate()}onRemoveOneClickHandler(t){const i=this.getCartItemQuantity(t)-1;if(!(i<1)){this.updateCart(t,i);const o=r.getState();this.cart=o.ecCommerce.cart,this.requestUpdate()}}onAddOneClickHandler(t){const i=this.getCartItemQuantity(t)+1;this.updateCart(t,i)}onSetQuantityBtnClickHandler(t){const i=parseInt(this.shadowRoot.querySelector("#input"+t).value);this.updateCart(t,i)}valid(t){this.cart.forEach(i=>{this.shadowRoot.querySelector(`#dateInput${i.id}`).setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""}))})}invalid(t){this.getValue().forEach(i=>{const o=()=>i.expiry_date?new Date().getTime()>new Date(i.expiry_date+"T00:00").getTime():!0;this.shadowRoot.querySelector(`#dateInput${i.id}`).setAttribute("validation",JSON.stringify({isValid:!(!i.expiry_date||o()),validationMessage:i.expiry_date?o()?"Product Expired":"":"Field is empty"}))})}onUpdateCartBtnClickHandler(){this.cart.forEach(t=>{const i=parseInt(this.shadowRoot.querySelector(`#input${t.id}`).value);this.updateCart(t.id,i)})}onApplyBtnClickHandler(){const t=this.appliedCoupon;if(!t){console.log("No coupon code provided");return}this.fetchCouponDetails(t).then(i=>{if(i.isValid){const o=this.calculateDiscount(i,this.subtotal);this.discount=o,this.total=this.subtotal-o}else console.log("Invalid coupon code")}).catch(i=>{console.error("Error applying coupon:",i)})}onCouponInputHandler(t){this.appliedCoupon=t}fetchCouponDetails(t){const i=this.couponDetailsList.find(o=>o.code===t);return i?new Promise(o=>{setTimeout(()=>{o({isValid:!0,discountPercentage:i.discountPercentage})},1e3)}):Promise.resolve({isValid:!1})}calculateDiscount(t,i){const o=t.discountPercentage;return i*o/100}getProductIndexById(t){return this.cart.findIndex(i=>i.id===t)}onChangeQuantitySelectorBtnCLickHandler(t){this.shadowRoot.querySelector("#quantitySelector"+t).classList.toggle("number-input"),this.shadowRoot.querySelector("#input"+t).value=this.isItemInCart(t)?this.getCartItemQuantity(t):0}onContinueShoppingBtnClickHandler(){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.details.continue_shopping_service,params:{child:1,cart:this.cart}},bubbles:!0,composed:!0}))}onProceedToCheckoutBtnClickHandler(){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.details.checkout_service,params:{child:1,cart:this.cart}},bubbles:!0,composed:!0}))}_processInitials(t){const i=t.trim().split(/\s+/).filter(Boolean);return i.length>0?i[0][0].toUpperCase():""}static get is(){return"cart-editor"}render(){return a`
            <div class="content" id="cartEditor">
                <h6 class="title">${this.e?this.e.name:""}</h6>
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
                ${this.cart.length>0?this.cart.map(t=>a`
                        <li class="columns product py-1" style="margin: 0;">
                            <div class="column is-4" style="justify-content: flex-start;">
                                <div class="product-column" style="margin-left:30px">
                                    ${t.image?a`

                                        <figure class="image is-64x64">

                                        <img src="${"/media/"+t.image}"  alt="${t.name}">
                                        </figure>
                                    `:a`
                                    <div class="circular">
                                        <h4>${this._processInitials(t.name)}</h4>
                                    </div>
                                    `}
                                    
                                    <h5 style=" margin-left: 20px">${t.name}</h5>
                                </div>
                                ${this.type==="supply-order"?a`
                                        <date-input id="dateInput${t.id}" style="width: 100%;" .name=${"Pick expiry date"}></date-input>
                                    `:""}
                            </div>
                            <div class="column is-3 product-column">
                                <div id="quantitySelector${t.id}" class="quantity-selector">
                                    <div class="buttons has-addons buttons-input m-0">
                                        <button id="removeBtn${t.id}" class="button ${this.isCartLoading?"is-loading":""} remove-btn" title="Remove 1" ?disabled=${t.quantity<=0}
                                            @click=${()=>this.onRemoveOneClickHandler(t.id)}
                                        >
                                        <adaptive-ui-icon title="Remove ${t.name}" dataColor="var(--primary)" height="24px" icon="MdOutlineRemove"></adaptive-ui-icon>
                                        </button>
                                        <button class="button ${this.isCartLoading?"is-loading":""} qty-btn"><h5>${t.quantity}</h5></button>
                                        <button id="addBtn${t.id}" class="button ${this.isCartLoading?"is-loading":""} add-btn " title="Add 1" ?disabled=${t.stockQuantity&&t.quantity>=t.stockQuantity}
                                            @click=${()=>this.onAddOneClickHandler(t.id)}
                                        >
                                        <adaptive-ui-icon title="Add ${t.name}" dataColor="var(--primary)" icon="MdAdd"></adaptive-ui-icon>

                                        </button>
                                    </div>
                                    <div class="field has-addons num-input">
                                        <div class="control">
                                            <input id="input${t.id}" class="input" type="number" placeholder="Quantity" value=${this.getCartItemQuantity(t.id)} ?disabled=${this.isCartLoading}>
                                        </div>
                                        <div class="control">
                                            <a class="button is-link ${this.isCartLoading?"is-loading":""}" @click=${()=>this.onSetQuantityBtnClickHandler(t.id)} title="Update Quantity">
                                                <div class="icon is-small">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span class="icon is-clickable ${this.isCartLoading?"is-loading":""} ml-3" title="Change Input" @click=${()=>this.onChangeQuantitySelectorBtnCLickHandler(t.id)}>
                                    <i class="fa-solid fa-arrow-right-arrow-left fa-beat"></i>
                                </span>
                            </div>
                            <div class="column is-2 product-column">
                                <h5 class="label">Price: </h5>
                                <h5 style="text-align: center;">${this.formatToKenyaShillings(t.price)}</h5>
                            </div>
                            <div style="text-align: center;" class="column is-2 product-column qty-total">
                                <h5 class="label">Total: </h5>
                                <h5 id="total${t.id}" style="text-align: center;">${this.formatToKenyaShillings(t.price*t.quantity)}</h5>
                                ${t.discount>0?a`
                                    <p class="is-size-7 has-text-weight-bold mt-2 has-text-success">
                                        ${this.discountPercentage(t.discount,t.total)}% OFF Applied
                                    </p>
                                `:""}
                            </div>
                            <div style="text-align: center;" class="column is-1 product-column">
                                <h5 class="label">Remove: </h5>
                                <span class="icon has-text-primary is-clickable">
                                    <adaptive-ui-icon title="Remove ${t.name}" icon="delete" @click=${()=>this.onRemoveItemFromCartClickHandler(t.id)}></adaptive-ui-icon>
                                </span>
                            </div>
                        </li>
                    `):a`<h3 class="mt-3">Cart is empty</h3>`}
            </ul>
            
                <div class="price-cont columns">
                    <div class="column">
                        <!-- <h5 class="is-size-6">Do you have a cupon?</h5>
                        <div class="field is-grouped">
                            <p class="control">
                                <input class="input" type="text" placeholder="Enter Cupon Code" @input=${t=>this.onCouponInputHandler(t.target.value)}>
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
                    ${this.e.details.continue_shopping_service?a`
                        <button class="button btn cont-btn mr-2" type="button" title="Continue Shopping" @click=${()=>this.onContinueShoppingBtnClickHandler()}>
                            <h6>Continue Shopping</h6>
                        </button>
                    `:""}
                    ${this.e.details.checkout_service?a`
                        <button class="button btn proceed-btn" type="button" title="Proceed to Checkout" @click=${()=>this.onProceedToCheckoutBtnClickHandler()}>
                            <h6>Proceed to Checkout</h6>
                        </button>
                    `:""}
                </div>
            </div>
        `}}customElements.define(l.is,l);
