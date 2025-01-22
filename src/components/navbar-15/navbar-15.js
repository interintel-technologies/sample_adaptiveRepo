import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { NavbarFiteenStyles } from './navbar-15-css';
import globalStyles from '../../App.css?raw';

class Navbar15 extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NavbarFiteenStyles,
      css`
        .drawer {
          position: absolute;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 1000;
          display: none;
          background: var(--paper);
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
        }

        .drawer.open {
          transform: translateX(0);
        }

        .drawer-content {
          padding: 20px;
        }

        @media (max-width: 1023px) {
          .drawer {
            display: block;
          }
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
      drawerOpen: { type: Boolean },
      e:{type:Object}
    };
  }

  constructor() {
    super();
    this.group = [];
    this.hide = [];
    this.pageGroups = [];
    this._pageGroup = '';
    this.logo = '';
    this.drawerOpen = false;
    this.prevScrollPos = 0;
    this.e = null
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      
      this.group = this.e && this.e.details.group;
      this.hide = this.e && this.e.details.hide;
      
      const scr = document.querySelector('.page');
      if (scr) {
        scr.addEventListener('scroll', this.handleScroll.bind(this));
      }
  
   
  
    }
  }
  // firstUpdated() {
  // }

  handleScroll() {
    const navbar = this.shadowRoot.querySelector('.ii__main-header');
    const pageElement = this.querySelector('.page');

    if (pageElement) {
      const currentScrollPos = pageElement.scrollTop;

      if (currentScrollPos > 850) {
        if (currentScrollPos < this.prevScrollPos) {
          navbar.classList.remove('slideUp');
          navbar.classList.add('slideDown');
        } else {
          navbar.classList.add('slideUp');
          navbar.classList.remove('slideDown');
        }
      } else {
        navbar.classList.remove('slideUp');
        navbar.classList.add('slideDown');
      }

      this.prevScrollPos = currentScrollPos;
    }
  }

  reloadPage() {
    window.location.reload();
  }

  redirectPage() {
    window.location.href = '/';
  }

  handleDrawerToggle() {
    this.drawerOpen = !this.drawerOpen;
    this.requestUpdate();
  }

  addBlock() {
    this.handleDrawerToggle();
    this.dispatchEvent(new CustomEvent('toggle-drawer', { bubbles: true, composed: true }));
  }

  scrollToSection(event) {
    let targetElement = event.target;
    let selectedPageGroup = targetElement.getAttribute('pageGroup');
    let selectedPage = targetElement.getAttribute('page');

    if (this._pageGroup === selectedPageGroup) {
      let menuId = targetElement.getAttribute('data-name');
      const mainContent = document.querySelector('.main-content');
      
      if (mainContent) {
        const selectedElement = mainContent.querySelector(`#${menuId}`);
        selectedElement ? selectedElement.scrollIntoView({ behavior: 'smooth' }) : console.error(`Element with ID ${menuId} not found.`);
      }
    } else {
      window.location.hash = `#/${selectedPageGroup}/${selectedPage}`;
    }
  }

  showDropDown() {
    const dropDown = this.shadowRoot.querySelector('.navbar-dropdown');
    dropDown?.classList.toggle('show');
  }

  render() {
    return html`
      <div class="content">
        <div id="section11" class="bind-box">
          <header class="ii__main-header">
            <div class="ii__container-main">
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
                  ${this.e && this.e.details['logo']!== undefined ? html`<img class="logo-img" src="${this.e.details['logo']}" >` : html`
                <img class="logo-img" src="/media/${this.logo}"  >`}  
                  
                  </a>
                  <a
                    role="button"
                    class="navbar-burger burger"
                    @click=${this.addBlock}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                  >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-end">
                    ${this.e && this.e.details.groupTitle ? html`
                      <div class="navbar-item has-dropdown is-hoverable" @click=${this.showDropDown}>
                        <a class="navbar-link navbar-item ">${this.e.details.groupTitle}</a>
                        <div class="navbar-dropdown is-boxed">
                       
                          ${this.pageGroups.map((pageGroup, pageGroupIndex) => html`
                            ${(this.group && this.group.includes(pageGroup._title)) || (this.hide && this.hide.includes(pageGroup._title)) ? html`
                             
                                    <a 
                                      pageGroup="${pageGroup._title.replace(/ /g, '-').toLowerCase()}" 
                                      class="navbar-item li-page"
                                      @click="${this.scrollToSection}"  
                                      data-name="${pageGroup._tabs[0]._title.replace(/ /g, '-').toLowerCase()}"
                                      page="${pageGroup._tabs[0]._title.replace(/ /g, '-').toLowerCase()}">
                                      ${pageGroup._title}
                                    </a>
                               
                              </div>` : ''}
                          `)}
                       
                      </div>
                      
                      </div>
                    ` : ''}
                    ${this.pageGroups.map((pageGroup) => html`
                      ${this.group && this.group.includes(pageGroup._title) ? '' : html`
                        ${this.hide && this.hide.includes(pageGroup._title) ? '' : html`
                          ${pageGroup._tabs.map((menu, menuIndex) => html`
                            ${this.hide &&  this.hide.includes(menu._title) ? '' : html`
                              <a tabindex="${menuIndex + 1}"
                                class="${['Sign Up', 'Sign up', 'Register', 'Donate to Support'].includes(menu._title) ? 'signup-btn' : 'navbar-item nav__item is-capitalized'}"
                                @click="${this.scrollToSection}"
                                data-name="${menu._title.replace(/ /g, '-').toLowerCase()}"
                                pageGroup="${pageGroup._title.replace(/ /g, '-').toLowerCase()}"
                                page="${menu._title.replace(/ /g, '-').toLowerCase()}">
                                ${menu._title}
                              </a>
                            `}
                          `)}
                        `}
                      `}
                    `)}
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </div>
    `;
  }
}

customElements.define('navbar-15', Navbar15);
