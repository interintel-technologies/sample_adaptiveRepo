import{i as d,r as c,g as p,k as a}from"./index-C2PWchud.js";import{B as h}from"./base-element-5lxvCIHt.js";import{E as u}from"./ecommerce-mixin-BZ3_9d38.js";const m=d`
    .cont {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .far {
        color: black;
        transform: translateY(3px);
        cursor: pointer;
    }
    .far:hover {
        color: var(--link);
    }
    .columns {
        margin: 0 !important;
    }
    .close-icon {
        cursor: pointer;
    }
    .close-icon:hover {
        fill: var(--link);
        transform: scale(1.05);
    }
    .button {
        background-color: var(--primary);
        width: 100%;
        border: none !important;
        border-radius: 0 !important;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        transform: scale(1.05);
    }
    .button:active, .close-icon:active {
        transform: scale(0.95);
    }
    .button > h6 {
        color: white !important;
        margin: 0 !important;
    }
    .button > adaptive-ui-icon {
        fill: white;
        margin-left: 10px;
    }
    .wishlist {
        max-height: 170px;
        overflow-y: auto;
    }
    #wishlist-dropdown-menu {
        transform: translateX(-90%);
    }
    .dropdown-content {
        width: max-content;
        padding: 0 5px;
    }
    .image {
        border: 1px solid var(--link);
        margin: auto !important;
    }
    .image img {
        height: 100% !important;
    }
    @media screen and (max-width: 500px) {
        #wishlist-dropdown-menu {
            left: -150px !important;
        }
        .columns {
            flex-wrap: nowrap !important;
        }
    }
`,l=class extends u(h){static get properties(){return{icon:String,title:String,service:String,defaultValue:String,navbar7Pl:Object,navbar7Service:String,navbar7DefaultValue:String}}constructor(){super()}firstUpdated(s){super.firstUpdated(s)}init(s,i){super.init(s,i);var t=this;t.service=s.service,t.params=i.pl.paramsCopy(),t.title=l.toTitleCase(s.name);const e=document.querySelector("adaptive-ui").getAttribute("path");window.paths||(window.paths={});const o=`/${e}/${s.details.path}/`;t.navigateTo=o,t.loadCartPage()}};class r extends l{static get properties(){return{total:Number}}static get styles(){return[c(p),m,d`
                :host {
                    display: block;
                }
            `]}constructor(){super(),this.total=0}updated(i){super.updated(i),i.has("wishlist")&&(this.total=0,this.wishlist.forEach(t=>{this.total+=t.price*t.quantity}))}firstUpdated(){window.addEventListener("click",i=>this.closeWishlistDropdownOnOutsideClick(i))}onWishlistClickHandler(){this.shadowRoot.querySelector("#wishlist-dropdown").classList.toggle("is-active")}closeWishlistDropdownOnOutsideClick(i){const t=this.shadowRoot.querySelector("#wishlist-dropdown"),n=i.composedPath().find(o=>o.id==="wishlist-dropdown"),e=Object.values(t.classList).find(o=>o==="is-active");n===void 0&&e==="is-active"&&t.classList.remove("is-active")}static get is(){return"wishlist-button"}render(){return a`
            <div class="content">
                <div class="cont">
                    <div id="wishlist-dropdown" class="dropdown content">
                        <div class="dropdown-trigger" @click=${()=>this.onWishlistClickHandler()}>
                            <fa-icon class="far fa-heart fa-7x" title="Wishlist"></fa-icon>
                        </div>
                        <div class="dropdown-menu" id="wishlist-dropdown-menu" role="menu">
                            <div id="wishlist-dropdown-content" class="dropdown-content">
                                <div class="dropdown-item wishlist" style="padding: 5px;">
                                    ${this.wishlist.length>0?this.wishlist.map(i=>a`
                                            <div class="columns wishlist-item">
                                                <div class="column is-3">
                                                    <figure class="image is-48x48">
                                                        <img src="${i.image}" alt="Image"/>
                                                    </figure>
                                                </div>
                                                <div class="column is-8">
                                                    <h5>${i.name}</h5>
                                                    <div class="is-flex">
                                                        <p>${i.quantity} X ${this.formatToKenyaShillings(i.price)}</p>
                                                    </div>
                                                </div>
                                                <div class="column is-1" style="padding: 0; padding-top: 0.75rem;">
                                                    <adaptive-ui-icon class="close-icon" title="Remove ${i.name}" icon="close" 
                                                        @click=${()=>this.removeItemFromWishlist(i.id)}>
                                                    </adaptive-ui-icon>
                                                </div>
                                            </div>
                                        `):a`<h5>No items in Wishlist</h5>`}
                                </div>
                                <hr class="dropdown-divider">
                                    <div class="is-flex" style="justify-content: space-between; padding: 0 1rem;">
                                        <h5>Total</h5>
                                        <h5>${this.formatToKenyaShillings(this.total)}</h5>
                                    </div>
                                <div class="dropdown-item is-flex">
                                    <button class="button" type="button" title="View wishlist">
                                        <h6>VIEW MY WISHLIST</h6>
                                        <adaptive-ui-icon icon="arrow-forward"></adaptive-ui-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(r.is,r);
