import { html, css, unsafeCSS, LitElement } from 'lit-element';
import { WishlistButtonStyles } from './wishlist-button-css';
import { WishlistButtonBase } from '../../base/elements/wishlist-button';
import globalStyles from '../../App.css?raw';

class WishlistButton extends WishlistButtonBase {

    static get properties() {
        return {
            total: Number
        };
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            WishlistButtonStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    constructor () {
        super();
        this.total = 0;
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('wishlist')) {
            this.total = 0;
            this.wishlist.forEach(wishlistItem => {
                this.total += wishlistItem.price * wishlistItem.quantity;
            });
        }
    }

    firstUpdated() {
        window.addEventListener("click", e => this.closeWishlistDropdownOnOutsideClick(e));
    }

    onWishlistClickHandler() {
        const dropdown = this.shadowRoot.querySelector("#wishlist-dropdown");

		dropdown.classList.toggle("is-active");
    }

    closeWishlistDropdownOnOutsideClick(e) {
		const dropdown = this.shadowRoot.querySelector("#wishlist-dropdown");
		const foundObject=e.composedPath().find(o=>o.id === "wishlist-dropdown");
		const foundClass=Object.values(dropdown.classList).find(c=>c === "is-active");

		if(foundObject === undefined && foundClass ==="is-active"){
			dropdown.classList.remove('is-active');
		}
	}

    static get is() {
        return 'wishlist-button';
    }

    render() {
        return html`
            <div class="content">
                <div class="cont">
                    <div id="wishlist-dropdown" class="dropdown content">
                        <div class="dropdown-trigger" @click=${()=>this.onWishlistClickHandler()}>
                            <fa-icon class="far fa-heart fa-7x" title="Wishlist"></fa-icon>
                        </div>
                        <div class="dropdown-menu" id="wishlist-dropdown-menu" role="menu">
                            <div id="wishlist-dropdown-content" class="dropdown-content">
                                <div class="dropdown-item wishlist" style="padding: 5px;">
                                    ${
                                        this.wishlist.length > 0 ? this.wishlist.map(wishlistItem => html`
                                            <div class="columns wishlist-item">
                                                <div class="column is-3">
                                                    <figure class="image is-48x48">
                                                        <img src="${wishlistItem.image}" alt="Image"/>
                                                    </figure>
                                                </div>
                                                <div class="column is-8">
                                                    <h5>${wishlistItem.name}</h5>
                                                    <div class="is-flex">
                                                        <p>${wishlistItem.quantity} X ${this.formatToKenyaShillings(wishlistItem.price)}</p>
                                                    </div>
                                                </div>
                                                <div class="column is-1" style="padding: 0; padding-top: 0.75rem;">
                                                    <adaptive-ui-icon class="close-icon" title="Remove ${wishlistItem.name}" icon="close" 
                                                        @click=${()=>this.removeItemFromWishlist(wishlistItem.id)}>
                                                    </adaptive-ui-icon>
                                                </div>
                                            </div>
                                        `) : html`<h5>No items in Wishlist</h5>`
                                    }
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
        `;
    }
}

customElements.define(WishlistButton.is, WishlistButton);
