import { html, css, unsafeCSS } from 'lit-element';
import { NavbarBase } from '../../base/elements/navbar-base';
import { NavbarNineStyles } from './navbar-9-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */

class Navbar9 extends NavbarBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NavbarNineStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      group: { type: Array },
      hide: { type: Array },
      pageGroups: { type: Array },
      _pageGroup: { type: String },
      logo: { type: String },
      e: { type: Object }, // Assuming 'e' is an object, add to properties
      gateway: { type: Object }, // Assuming 'e' is an object, add to properties
    
    };
  }

  constructor() {
    super();
    this.group = [];
    this.hide = [];
    this.pageGroups = [];
    this.prevScrollPos = 0;
    this.drawerOpen = false;
    this._pageGroup = '';
    this.logo = '';
    this.e = {}; // Initialize 'e' if required
    this.gateway = {}; // Initialize 'e' if required

  }

  updated(changedProperties) {
    // Check if the property 'e' has changed
    if (changedProperties.has('e')) {
    }
  }

  render() {
    return html`
      <div id="section11" class="bind-box">
        <header class="ii__main-header">
          <div class="ii__container-main">
            <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color:var(--app-default-color)">
              <div class="navbar-brand">
                <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
                  <img class="logo-img" src="/media/${this.gateway.logo}" alt="brand">
                </a>

                <a role="button" class="navbar-burger burger" @click=${this.addBlock} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                  ${this.pageGroups.map((pageGroup, pageGroupIndex) => html`
                    ${pageGroup._tabs.map((menu, menuIndex) => html`
                      ${this.hide.includes(menu._title.replace(/ /g, '-').toLowerCase()) ? html`` : html`
                        <a tabindex="${menuIndex + 1}" class="navbar-item nav__item is-capitalized"
                          @click="${this.scrollToSection}"
                          data-name="${menu._title.replace(/ /g, '-').toLowerCase()}"
                          pageGroup="${pageGroup._title.replace(/ /g, '-').toLowerCase()}"
                          page="${menu._title.replace(/ /g, '-').toLowerCase()}">
                          
                          ${menu._title}
                        </a>
                      `}
                    `)}
                  `)}
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    `;
  }

  reloadPage() {
    window.location.reload();
  }

  redirectPage() {
    window.location.href = "/";
  }

  addBlock() {
    let nav = this.shadowRoot.querySelector('.navbar-menu');
    nav.classList.toggle('is-block');
  }

  scrollToSection(event) {
    let targetElement = event.target;
    let selectedPagegroup = targetElement.getAttribute("pageGroup");
    let selectedPage = targetElement.getAttribute("page");

    if (this._pageGroup === selectedPagegroup) {
      // Scroll to the section within the same page group
      var menuId = event.target.getAttribute("data-name");
      let navHeight = this.shadowRoot.querySelector('.navbar').offsetHeight;

      const element = document.getElementById(menuId);
      const offset = navHeight;  // Height of the navbar to offset the scroll position
      if (element) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

    } else {
      // Switch page group and scroll
      window.location.hash = "#/" + selectedPagegroup + "/" + selectedPage;
    }
  }

  static get is() {
    return 'navbar-9';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }
}

customElements.define(Navbar9.is, Navbar9);
