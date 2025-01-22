import {html, css, unsafeCSS} from 'lit-element';
import {NavbarBase} from '../../base/elements/navbar-base';
import {NavbarTenStyles} from './navbar-10-css';
import globalStyles from '../../App.css?raw';
import 'fa-icons';

class Navbar10 extends NavbarBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NavbarTenStyles,
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
      _pageGroup:{type:String},
      logo:{type:String}
    };
  }

  constructor() {
    super();
    this.group = [];
    this.hide = [];
    this.pageGroups = [];
    this.prevScrollPos = 0;
	this.drawerOpen = false;
  this._pageGroup = '',
  this.logo = ''
	
  }


  updated(changedProperties) {
    if (changedProperties.has('e')) {
   
        
    }
}
  visibleMenuTitles(pageGroup, pageGroupIndex) {
    console.log("page group is ",pageGroup);
    
    return pageGroup.pages.map((menu, menuIndex) => {
      let firstVisibleMenuIndex = 0;
      if (this.e && this.e.details && !this.e.details.hide.includes(menu.title)) {
        firstVisibleMenuIndex += 1;
        return html`
          <a tabindex="${menuIndex + 1}" class="${menu._title === "Log In" ? "login-btn" : "navbar-item nav__item is-capitalized"}"
            @click="${this.scrollToSection}"
            style=${(pageGroupIndex === 1) && (firstVisibleMenuIndex === 1) ? "margin-left:auto;" : ""}
            data-name="${menu._title.replace(/ /g, '-').toLowerCase()}" pageGroup="${pageGroupIndex}" page="${menuIndex}" 
          >
            ${menu._title}
          </a>            
        `;
      } else {
        return html``;
      }
    });
  }

  render() {
    return html`
      <div id="section11" class="bind-box">
        <header class="ii__main-header">
          <div class="ii__container-main">
            <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color:white">
              <div class="navbar-brand">
                <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
                  <img class="logo-img" src="/media/${this.gateway?.logo}" alt="brand">
                </a>
                <a role="button" class="navbar-burger burger" @click=${this.addBlock} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                  ${this.pageGroups?.map((pageGroup, pageGroupIndex) => this.visibleMenuTitles(pageGroup, pageGroupIndex))} 
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
    let selectedPagegroup = event.target.getAttribute("pageGroup");
    let selectedPage = event.target.getAttribute("page");

    if (this._pageGroup == selectedPagegroup) {  
      var menuId = event.target.getAttribute("data-name");
      let navHeight = this.shadowRoot.querySelector('.navbar').offsetHeight;
      const element = document.getElementById(menuId);
      const offset = navHeight;
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
      window.location.hash = "#/" + selectedPagegroup + "/" + selectedPage;
    }
  }

  static get is() {
    return 'navbar-10';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }
}
customElements.define(Navbar10.is, Navbar10);
