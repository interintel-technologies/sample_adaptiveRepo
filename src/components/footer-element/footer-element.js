import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { FooterElementStyles } from './footer-element-css';
import globalStyles from '../../App.css?raw';
import 'fa-icons'
class FooterElement extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      FooterElementStyles,
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
    };
  }

  constructor() {
    super();
    this.e = null; // Initialize with default structure

  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('e')) {
      
      const body = document.querySelector('.page');
      const footer = this.shadowRoot.querySelector('.ii__footer');

      const viewportWidth = window.innerWidth;

      if (viewportWidth > 768) {
        this.scrollAdjuster();
      }

      body.addEventListener("scroll", () => this.scrollObserver());
      footer.addEventListener("scroll", () => this.scrollObserver());
    }
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
    const body = document.querySelector('.page');
    const viewportWidth = window.innerWidth;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (viewportWidth > 768) {
            footer.classList.add('fixed');
            footer.style.display = 'block';
          }
        }
      });
    });
    observer.observe(footer);
  }

  checkLink(e) {
    const link = e.target.getAttribute("href");
    if (link === "") {
      e.preventDefault();
    }
  }

  _getCurrentYear() {
    return new Date().getFullYear();
  }

  _getHref(text) {
    if (text.includes("|")) {
      let [title, link] = text.split('|');
      return link;
    }
    return "";
  }

  _getLinkTitle(text) {
    if (text.includes("|")) {
      let [title, link] = text.split('|');
      return title;
    }
    return text;
  }

  render() {
    return html`
      <footer class="landing-footer ii__footer has-background-primary">
        <div class="ii__container wa__container">
          <div class="ii-footer-flexcontainer columns">
            <div class="column">
              <div class="ii__footer-branding">
                <a href="#"><img src="${this.e?.details?.logo_path}" alt="footer branding"/></a>
              </div>
              <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e?.details?.location || ''}</p>
              <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e?.details?.address || ''}</p>
            </div>
            <div class="column">
              <div class="ii-footerfexrow">
                ${this.e?.details?.links.map((slide) => html`
                  <div class="ii-footer-col">
                    <h3 class="ii__footer-col-title is-capitalized">${slide.title}</h3>
                    ${slide.title === "Socials" ? html`
                      ${slide.links.map((link) => html`
                        <a class="ii__footer-col-link" rel="noopener" href="${this._getHref(link)}" @click="${this.checkLink}" target="_blank">
                          <span class="icon">
                            <i class="fa-brands fa-${this._getLinkTitle(link)}"></i>
                          </span>
                        </a>
                      `)}
                    ` : html`
                      ${slide.links.map((link) => html`
                        <a id="link-${link}" href="${this._getHref(link)}" @click="${this.checkLink}" target="_blank" class="ii__footer-col-link">${this._getLinkTitle(link)}</a>
                      `)}
                    `}
                  </div>
                `)}
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="columns">
              <div class="column">
                <p class="ii__paragraph is-size-7 footer-rights">${this.e?.name} Copyright &copy; ${this._getCurrentYear()}. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
