import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { FooterElement2Styles } from './footer-element-2-css';
import globalStyles from '../../App.css?raw';
import 'fa-icons'

class FooterElement2 extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      FooterElement2Styles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      e: { type: Object },
      rows: { type: Array },
      cols: { type: Array },
      isLoaded: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.e = null;
    this.rows = [];
    this.cols = [];
    this.isLoaded = false;
  }

  checkLink(e) {
    const link = e.target.getAttribute("href");
    if (!link) {
      e.preventDefault();
    }
  }

  _getCurrentYear() {
    return new Date().getFullYear();
  }

  _getHref(text) {
    if (text.includes("|")) {
      const [ , link] = text.split('|');
      return link;
    }
    return "";
  }

  _getLinkTitle(text) {
    if (text.includes("|")) {
      const [title] = text.split('|');
      return title;
    }
    return text;
  }

  static get is() {
    return 'footer-element-2';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const body = document.querySelector('body');
    const footer = this.shadowRoot.querySelector('.ii__footer');
    const viewportWidth = window.innerWidth;

    if (viewportWidth > 768) {
      this.scrollAdjuster();
    }

    body.addEventListener("scroll", () => this.scrollObserver());
    footer.addEventListener("scroll", () => this.scrollObserver());

  }

  scrollAdjuster() {
    const body = document.querySelector('.page');
    const footer = this.shadowRoot.querySelector('.ii__footer');
    const footerLength = footer.clientHeight;
    this.footerLength = footerLength;
    body.classList.remove('p-3');
    body.style.padding = `.75em .75em ${footerLength}px .75em`;
  }

  scrollObserver() {
    const footer = this.shadowRoot.querySelector('.ii__footer');
    const viewportWidth = window.innerWidth;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && viewportWidth > 768) {
          footer.classList.add('fixed');
          footer.style.display = 'block';
        }
      });
    });
    observer.observe(footer);
  }

  render() {
    return html`
    <footer class="landing-footer ii__footer">
    <div class="ii__container wa__container">
        <div class="ii-footer-flexcontainer columns">
            <div class="column is-2-desktop is-2-tablet">
                <div class="ii__footer-branding">
                    <a href="#"><img src="${this.e && this.e.details.logo_path}" alt="footer branding"/></a>
                </div>
               
            </div>
            <div class="column">
                <div class="ii-footerfexrow">
                  <div class="ii-footer-col">
                    <div id="location-div">
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e && this.e.details.location}</p>
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e && this.e.details.address}</p>
                    <div id="contacts-div" class="pt-5">
                      ${this.e && this.e.details.links.map((slide) => html`
                        ${slide.title == "Contacts" ? html`
                          
                                  ${slide.links.map((link) => html`
                                  <a class="ii__footer-col-contact" rel="noopener" href="${this._getHref(link)}" @click="${this.checkLink}" target="_blank">
                                  
                                      <!-- <fa-icon class="fab fa-${this._getLinkTitle(link)}" color= "var(--app-secondary-color)" size="20px" style="" ></fa-icon>    -->
                                      ${this._getLinkTitle(link.toLowerCase())}
                                  </a>
                                  `)}   
                          `:html``}
                        `)}
                    </div> 
                  </div>
                    
                  </div>
                ${this.e && this.e.details.links.map((slide) => html`
                    <div class="ii-footer-col">
                            <!-- <h3 class="ii__footer-col-title is-capitalized">${slide.title}</h3> -->
                            ${slide.title == "Socials" ? html`

                                ${slide.links.map((link) => html`
                                <a class="ii__footer-col-link" rel="noopener" href="${this._getHref(link)}" @click="${this.checkLink}" target="_blank">
                                
                                    <!-- <fa-icon class="fab fa-${this._getLinkTitle(link)}" color= "var(--app-secondary-color)" size="20px" style="" ></fa-icon>    -->
                                     ${this._getLinkTitle(link.toLowerCase())}
                                </a>
                                `)}                                
                            `:slide.title != "Contacts"? html`
                                ${slide && slide.links && slide.links.map((link) => html`
                                <a id="link-${link}" href="${this._getHref(link)}" @click="${this.checkLink}" target="_blank" class="ii__footer-col-link">${this._getLinkTitle(link)}</a>
                                `)}
                            
                            `:html``}
                    </div>
                `)}
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="columns">
                <div class="column is-full footer-copyright">
                    <p class="ii__paragraph ">${this.e && this.e.name} Copyright &copy; ${this._getCurrentYear()}. All rights reserved</p>
                </div>
                <div class="column">
                    <div class="ii-footerfexrow">
                        <div class="ii-footer-col-sm">
                            <a href="#" class="footer-icon">
                                <fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>
                            </a>
                        </div>
                        <div class="ii-footer-col-sm"></div>
                        <div class="ii-footer-col-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    `
  }
}

customElements.define(FooterElement2.is, FooterElement2);
