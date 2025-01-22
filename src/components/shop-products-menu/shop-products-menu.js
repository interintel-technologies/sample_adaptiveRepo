import {html, css} from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

import {
  ShopProductsMenuBase} from '../../../../../elements/base/shop-products-menu';
import {ShopProductsMenuStyles} from './shop-products-menu-css';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ShopProductsMenu extends ShopProductsMenuBase {
  renderDefault() {
    return html`           

        <div class="section">
            <!-- Container -->
            <div class="container">
	            <header>
		            <div class="cd-dropdown-wrapper">
			            <a class="cd-dropdown-trigger" @click="${this.close_menu}">
			                <span style="border-radius: 5px;border: 1px solid white; padding: 8px;" >
			                    <span>CATEGORIES</span>
			                </span>
			            </a>
                        <nav class="cd-dropdown">
                            <h2>BROWSE CATEGORIES</h2>
                            <a class="cd-close" @click="${this.close_menu}">Close</a>
                            <ul class="cd-dropdown-content">
                                ${this.currentData.map((item, index) => html` 
                                    <li class="has-children">   
                                        <a @click="${() => this.move_out(index)}" id="item_${index}" >
                                            <iron-icon icon="icons:shopping-cart"></iron-icon>${item.name}
                                        </a>
                                        <ul id="sub_item_${index}" class="cd-secondary-dropdown is-hidden fade-out">
                                            <li class="go-back" @click="${() => this.go_back(index)}"><a>Menu</a></li>
                                            <li class="see-all">All ${item.name}</a></li>
                                            <li class="has-children">
                                                <a >${item.name}</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back"><a href="">${item.name}</a></li>
                                                    ${item.value.map((sub) => html`
                                                        <li><a  .dataLink="${sub.href[0]}"  @click="${this._followLink}">${sub.name}</a></li>
                                                    `)}
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>    
                                `)}
                            </ul>
                        </nav> 
                    </div>    
	            </header>
	        </div>
	    </div>`;
  }

  constructor() {
    super();
  }

  move_out(index) {
    if (this.menu_open && window.matchMedia('screen and (max-width: 768px)').matches) {
      // console.log("close");
      this.qs('#sub_item_' + index).classList.remove('is-hidden');
      this.qs('.cd-dropdown-content').classList.add('move-out');
    }
  }

  go_back(index) {
    if (this.menu_open && window.matchMedia('screen and (max-width: 768px)').matches) {
      // console.log("back");
      this.qs('#sub_item_' + index).classList.add('is-hidden');
      this.qs('.cd-dropdown-content').classList.remove('move-out');
    }
  }

  close_menu() {
    if (this.menu_open) {
      this.menu_open = false;
      // console.log("close");
      this.qs('.cd-dropdown-trigger').classList.remove('dropdown-is-active');
      this.qs('.cd-dropdown').classList.remove('dropdown-is-active');
    } else {
      this.menu_open = true;
      // console.log("open");
      this.qs('.cd-dropdown-trigger').classList.add('dropdown-is-active');
      this.qs('.cd-dropdown').classList.add('dropdown-is-active');
    }
  }
}

customElements.define(ShopProductsMenu.is, ShopProductsMenu);
