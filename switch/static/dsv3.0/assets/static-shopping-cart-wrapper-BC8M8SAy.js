import{i as u,S as l,r as d,g as h,k as n,a as c,j as r}from"./index-C2PWchud.js";import"./paper-icon-button-B3AFeDyC.js";import{u as p}from"./utils-mixin-D5aAiqNi.js";import"./polymer-legacy-CVdXdTHq.js";import"./iron-icon-Ci-yo7Ra.js";import"./iron-flex-layout-C17s8gyg.js";import"./default-theme-ChQ485_s.js";import"./paper-ripple-CP-IWaVj.js";import"./paper-ripple-behavior-Bi9iYOcF.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const I=u`

`,m=class extends p(l){static get is(){return"static-shopping-cart"}constructor(){super(),this.cartItems=[];var e=localStorage.getItem("shop-cart");e?this.cartItems=JSON.parse(e):localStorage.setItem("shop-cart","[]")}static get properties(){return{icon:String,target:String,data_name:String,service:String,params:{type:Object,value:{}},color:String,sums:Object,loading:{type:Boolean,value:!1},title:String,cartItems:{type:Array}}}static get observers(){return["_computeQuantity(cartItems.*)"]}getName(){return this.e.formName}getValue(){return this.cartItems?this.cartItems.map(t=>t.item.id+"|"+t.quantity).join(","):""}validate(){return!0}valid(){return!0}static get behaviors(){return[]}_computeTotal(e,t){return e*t}_computeTotals(){return this.cartItems?this.cartItems.reduce(function(e,t,s,a){return e+t.quantity*t.item.price},0):0}_computeQuantity(){if(!this.cartItems)return 0;this.pl.bind=this.cartItems.reduce(function(e,t,s,a){return e+t.quantity},0)}_findCartItem(e){var t=this.cartItems.filter(function(s){return s.item.id===parseInt(e)});if(t.length)return t[0]}_changeQuantity(e){const t=this.shadowRoot.querySelector("#chart_item_"+e).value,s=this._findCartItem(e),a=this.cartItems.indexOf(s);this.cartItems[a].quantity=t,this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems)),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_incrementQuantity(e){const t=e.currentTarget.dataset.product,s=this._findCartItem(t),a=this.cartItems.indexOf(s);this.cartItems[a].quantity=s.quantity+1,this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems)),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_decrementQuantity(e){const t=e.currentTarget.dataset.product,s=this._findCartItem(t),a=this.cartItems.indexOf(s);s.quantity>1&&(this.cartItems[a].quantity=s.quantity-1,this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_removeCartItem(e){const t=e.currentTarget.cartItem,s=this._findCartItem(t);var a=this.cartItems.indexOf(s);a>-1&&(this.cartItems.splice(a,1),this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_removeAllCartItems(){this.cartItems!==0&&(this.cartItems=[],localStorage.removeItem("shop-cart")),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}firstUpdated(e){super.firstUpdated(e)}_submit(){this.dispatchEvent(new CustomEvent("submit-form",{detail:{action:this.action},bubbles:!0,composed:!0}))}init(e,t){super.init(e,t);var s=this;s.title=m.toTitleCase(e.name),s.icon=e.icon}};class o extends m{static get styles(){return[d(h),I,u`
        :host {
          display: block;
        }
      `]}render(){return n`
    
 <div class="shop-wrapper is-mobile-mode">
<div class="section" >
                <!-- Container -->
                <div class="container" >
                    <!-- Cart page -->
                    <div class="columns account-header">
                        <div class="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div class="account-title">
                                <h2>MY CART</h2>                  
                            </div>
                            <!-- Total and checkout -->
                            <div class="cart-summary">
                                <span class="cart-total">
                                    KES ${this._computeTotals(this.cartItems)} <small>${this.cartItems.length} <span>items in cart</span></small>
                                       <span>
                                 <a class="button is-danger is-outlined" @click=${()=>this._removeAllCartItems()} ><span>Clear</span><span><iron-icon icon="icons:delete"></iron-icon></span></a> </span>
                                </span>
                              
                                <button class="button feather-button is-bold primary-button raised" @click=${this._submit}>
                                    CHECKOUT
                                </button>
                            </div>
        
                            <!-- Cart Layout -->
                            <div class="columns is-account-grid is-multiline">
                                            ${this.cartItems.map((t,s)=>n`
                                <!-- Product list -->
                                <div class="column is-12">
                                    <!-- Product -->
                                    <div class="flat-card is-auto cart-card">
                                        <ul class="cart-content">
                                            <li>
                                                <img src="/media/${t.item.image}" alt=${t.item.name}>
                                                <span class="product-info">
                                                    <span>${t.item.name}</span>
                                                    <span>${t.item.kind}</span>
                                                </span>
                                                <span class="product-price">
                                                    <span>Price</span>
                                                    <span>${t.item.currency_code} ${t.item.price}</span>
                                                </span>
        
                                                <span class="product-quantity">
                                                    <span>Qty</span>
                                                    <span class="control">
                                                        <input id="chart_item_${t.item.id}" class="input" type="number" min="1" step="1" value="${t.quantity}" @change=${()=>this._changeQuantity(t.item.id)}>
                                                    </span>
                                                </span>
        
                                                <span class="action">
                                                    <span class="action-link is-like has-simple-popover" data-content="Add to Wishlist" data-placement="top">
                                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart feather-icons"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
                                                    </span>
                                                    <span class="action-link is-remove has-simple-popover" 
                                                        data-content="Remove from Cart" 
                                                        data-placement="top">
                                                        <a @click="${this._removeCartItem}" .cartItem="${t.item.id}">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x feather-icons"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                        </a>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                       `)}
                            </div>
                            <!-- /Cart Layout -->
                        </div>
                    </div>
                    <!-- /Cart page -->
        
              
                </div>
                <!-- /Container -->
            </div>
            
</div>
        
    `}constructor(){super()}valid(t){}invalid(t){}_changeQuantity(t){const s=this.shadowRoot.querySelector("#chart_item_"+t).value,a=this._findCartItem(t),i=this.cartItems.indexOf(a);this.cartItems[i].quantity=s,this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems)),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_incrementQuantity(t){console.log("_incrementQuantity");const s=t.currentTarget.dataset.product,a=this._findCartItem(s),i=this.cartItems.indexOf(a);this.cartItems[i].quantity=a.quantity+1,this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems)),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_decrementQuantity(t){console.log("_decrementQuantity");const s=t.currentTarget.dataset.product,a=this._findCartItem(s),i=this.cartItems.indexOf(a);a.quantity>1&&(this.cartItems[i].quantity=a.quantity-1,this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_removeCartItem(t){const s=t.currentTarget.cartItem,a=this._findCartItem(s);var i=this.cartItems.indexOf(a);i>-1&&(this.cartItems.splice(i,1),this.cartItems=[...this.cartItems],localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))),this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}}customElements.define(o.is,o);const w=({element:e})=>{const t=c.useRef(null);return c.useEffect(()=>{if(t.current&&e){const s=t.current;s.e=e}},[e]),r.jsx(r.Fragment,{children:e&&r.jsx("static-shopping-cart",{id:"static-shopping-cart",ref:t})})};export{w as default};
