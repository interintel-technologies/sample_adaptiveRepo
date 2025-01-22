import {html, css, LitElement} from 'lit-element';
import {ThemeMixin} from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';
import {Navbar5Styles} from './navbar-5-css';

class NavBar5 extends ThemeMixin(LitElement) {
  static get styles() {
    return [
      super.styles,
      Navbar5Styles,
      css`
        :host{
          display: block;
        }
      `];
  }

  static get is() {return 'navbar-5';}

  init(pElement, loader) {
    super.init(pElement, loader);
  }

  search() {
    const searchInput = this.shadowRoot.querySelector('input');
    const searchTerm = searchInput.value;

    const searchEvent = new customEvent('search', {
        details: searchTerm,
        bubble: true,
        composed: true
    });

    this.dispatchEvent(searchEvent);
  }

  render() {
    return html`
    <header class="is-fullwidth">
        <div class="py-2 px-6 top-nav is-flex is-justify-content-space-between is-align-items-center">
            <div class="is-align-items-center nav-location is-flex">
                <span class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                </span>
                <span class="location">
                    <span class="store">Store NikoBizz - </span>Nairobi Branch
                </span>
            </div>
            <div class="is-align-items-center nav-profile is-flex">
                <span class="profile">
                   |&nbsp; Kipruto
                </span>
                <span class="icon">
                    <i class="fa-solid fa-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="py-2 px-6 bottom-nav is-flex is-justify-content-space-between is-align-items-center">
            <div class="branding has-text-weight-bold">
                <img src="https://www.interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png" width="112" height="28">
            </div>
            <div class="field has-addons">
                <div class="control has-icons-left" style="width: 90%">
                    <input class="input" type="search" placeholder="Search" id="searchInput">
                    <span class="icon is-small is-left" id="searchBar">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div class="control">
                    <a class="button is-link" @click=${this.search}>
                    Search
                    </a>
                </div>
            </div>
            <div class="cart-container is-flex is-align-items-center">
                <!-- <div class="cart-left" style="border-right: 1px solid #CCC">
                    <span class="icon mx-3" >
                        <i class="fas fa-heart px-3"></i>
                    </span>
                </div>
                <div class="cart-right">
                    <div class="is-flex is-align-items-center">
                        <span class="icon mx-3">
                            <i class="fas fa-shopping-bag px-3"></i>
                        </span>
                        <div class="cart-content">
                            <p class="title is-4 is-size-6">Shopping Cart</p>
                            <p class="subtitle is-6">Ksh 7,258.00</p>
                        </div>
                    </div>
                </div> -->
            <div>
        </div>
    </header>
    `;
  }
}
customElements.define(NavBar5.is, NavBar5);
