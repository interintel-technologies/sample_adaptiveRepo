import {css, html} from 'lit-element';
// import {Colors} from '../../styles/shared.js'
import {NavbarDefaultBase} from '../../base/elements/navbar-default';
import {NavbarDefaultStyles} from './navbar-default-css';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class NavbarDefault extends NavbarDefaultBase {
  constructor() {
    super();
    this.activeMenuGroup = 0;
  }

  static get styles(){
    return [
      unsafeCSS(globalStyles),
      NavbarDefaultStyles,
      css`
      :host{
        display: block;
      }
      `
    ]
  }
  render() {
    return html`

      <div id="section2" class="bind-box">
        <nav class="navbar">
          <div class="navbar-menu">
            <div class="navbar-start">
            ${this.menuGroups.map((menuGroup, menuGroupIndex) => html`
              <a class="navbar-item ${menuGroupIndex==this.activeMenuGroup?'is-active':''}"  
                    @click=${this._setActiveMenuGroup} 
                    data-group=${menuGroupIndex} >${menuGroup.title}</a>

            `)}
            </div>
          </div>
          <div id="site-name" class="navbar-brand has-text-weight-semibold">
            <a class="navbar-item" href="#">
              <img src="${this.gateway.logo}" width="112" height="28">
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-active">
                <a class="navbar-item">
                  Patrick Lawrence
                </a>
                <a class="navbar-link">
                  <figure class="image is-32x32">
                    <img id="user-pic" class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                  </figure>
                </a>
                <!-- <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Settings
                  </a>
                  <a class="navbar-item is-active">
                    More...
                  </a>
                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    Logout
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </nav>
        <hr class="navbar-divider" clear="all">

        <div class="block">
          <nav class="level">
          <!-- left side -->
            <div class="level-left">
              <div class="tabs">
                <ul>
                ${this.menuGroupItems(this.activeMenuGroup).map((menu) => html`
                  <li> 
                    <a 
                      class="New-products"
                      data-href="/${this.basePath}/${menu.route}/" 
                      @click=${this.shopping}>${menu.title}</a></li>
                  `)}

                </ul>
              </div>
            </div>
            <!-- right side -->
            <div class="level-right">
              <div class="level-item">
                <div class="field">
                  <p class="control">
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                    <span class="icon">
                      <i class="fas fa-heart"></i>
                    </span>
                    <span class="icon">
                      <i class="fas fa-shopping-cart"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>`;
  }

  static get styles() {
    return css`
    :host {
 
    }
    
    `;
  }

  _setActiveMenuGroup(evt) {
    this.activeMenuGroup = evt.currentTarget.dataset['group'];
  }

  menuGroupItems(index) {
    return this.menuGroups[index].items;
  }


  static get properties() {
    return {
      activeMenuGroup: Number,
    };
  }
}

customElements.define(NavbarDefault.is, NavbarDefault);
