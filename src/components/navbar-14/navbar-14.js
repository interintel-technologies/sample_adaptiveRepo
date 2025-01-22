import { html, css, LitElement, unsafeCSS } from 'lit-element';
import globalStyles from '../../App.css?raw'
import { NavbarFourteenStyles } from './navbar-14-css';


class Navbar14 extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NavbarFourteenStyles,
		
		css`
		.drawer {
			position: absolute;
			top: 0;
			left: 0; /* Slide from the left */
			width: 250px; /* Adjust the width as needed */
			height: 100%;
			transform: translateX(-100%); /* Slide out to the left */
			transition: transform 0.3s ease;
			z-index: 1000;
			display: none; /* Hide by default */
      background: var(--paper);
      /* M3/Elevation Light/1 */
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);


      
		  }
		  
		  .drawer.open {
			transform: translateX(0); /* Slide in from the left */
		  }
		  
		  .drawer-content {
			padding: 20px;
		  }
		  
		  /* Show drawer only on small devices */
		  @media (max-width: 1023px) {
			.drawer {
			  display: block; /* Show on small devices */
			}
		  }
		  
		`,
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

  firstUpdated() {
    this.group = this.e.details.group || [];
    this.hide = this.e.details.hide || [];

    const scr = document.querySelector('.page');
    if (scr) {
      scr.addEventListener('scroll', () => this.handleScroll());
    }

  }

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
    this.requestUpdate(); // Trigger an update to reflect the change in the drawer state
  }
  addBlock() {
    this.handleDrawerToggle(); // Optional: if you want to keep some internal drawer state
    const event = new CustomEvent('toggle-drawer', { detail: {}, bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  scrollToSection(event) {
    let targetElement = event.target;
    
    let selectedPagegroup = event.target.getAttribute('pageGroup');
    let selectedPage = event.target.getAttribute('page');

    
	



    if (this._pageGroup === selectedPagegroup) {
      
      let menuId = event.target.getAttribute('data-name');

      
      let navHeight = this.shadowRoot.querySelector('.navbar').offsetHeight;

      const main_content = document.querySelector('.main-content');
	
	  if (main_content) {
        const selectedElement = main_content.querySelector(`#${menuId}`);

        if (selectedElement) {
          selectedElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Element with ID ${menuId} not found.`);
        }
      } else {
        console.error('Main content element not found.');
      }

    } else {
      window.location.hash = `#/${selectedPagegroup}/${selectedPage}`;
    }
  }

  showDropDown() {
    const dropDown = this.shadowRoot.querySelector('.navbar-dropdown');
    if (dropDown) {
      dropDown.classList.toggle('show');
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

  static get is() {
    return 'navbar-14';
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
                    <img src=${`/media/${this.logo}`} />
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
                    ${this.e.details.groupTitle
                      ? html`
                          <div class="navbar-item has-dropdown is-hoverable" @click=${() => this.showDropDown()}>
                            <a class="navbar-link is-size-6">${this.e.details.groupTitle}</a>
                            <div class="navbar-dropdown">
                              <h3 class="mb-2">${this.e.details.groupTitle}</h3>
                              <div class="columns is-multiline is-mobile mt-3" style="gap:.75rem">
                                ${this.pageGroups && this.pageGroups.length
                                  ? this.pageGroups.map((pageGroup, pageGroupIndex) => html`
                                      ${this.group.includes(pageGroup._title)
                                        ? html`
                                            ${this.hide.includes(pageGroup._title)
                                              ? ''
                                              : html`
                                                  <div class="column is-5-desktop is-5-tablet is-5-mobile serviceCol">
                                                    <div class="columns is-mobile is-multiline">
                                                      <div class="column is-2 iconCol">
                                                        <span class="icon">
                                                          <adaptive-ui-icon icon=${pageGroup.icon}></adaptive-ui-icon>
                                                        </span>
                                                      </div>
                                                      <div class="column is-6 infoCol">
                                                        <a href="${window.location.pathname + window.location.search}#/${pageGroup._title.replace(/ /g, '-').toLowerCase()}/0/"
                                                          pageGroup="${pageGroup._title.replace(/ /g, '-').toLowerCase()}" class="navbar-item li-page">
                                                          ${pageGroup._title}
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                `}
                                          `
                                        : ''}
                                    `)
                                  : ''}
                              </div>
                            </div>
                          </div>
                        `
                      : ''}
                    ${this.pageGroups && this.pageGroups.length
                      ? this.pageGroups.map((pageGroup, pageGroupIndex) => html`
                          ${this.group.includes(pageGroup._title.replace(/ /g, '-').toLowerCase())
                            ? ''
                            : html`
                                ${this.hide.includes(pageGroup._title.replace(/ /g, '-').toLowerCase())
                                  ? ''
                                  : html`
							
                                      ${pageGroup._tabs.map((menu, menuIndex) => html`
                                        ${this.hide.includes(menu._title.replace(/ /g, '-').toLowerCase())
                                          ? ''
                                          : html`
                                              <a tabindex="${menuIndex + 1}"
                                                class="${['Sign Up', 'Sign up', 'Register', 'Donate to Support'].includes(menu._title)
                                                  ? 'signup-btn'
                                                  : 'navbar-item nav__item is-capitalized'}"
                                                @click="${(event) => this.scrollToSection(event)}"
                                                data-name="${menu._title.replace(/ /g, '-').toLowerCase()}"
                                                pageGroup="${pageGroup._title.replace(/ /g, '-').toLowerCase()}"
                                                page="${menu._title.replace(/ /g, '-').toLowerCase()}">
                                                ${menu._title}
                                              </a>
                                            `}
                                      `)}
                                    `}
                              `}
                        `)
                      : ''}
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

customElements.define(Navbar14.is, Navbar14);