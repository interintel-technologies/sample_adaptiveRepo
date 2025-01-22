import { css, html, LitElement, unsafeCSS } from "lit-element";
import { HeroElementStyles } from './hero-element-css';
import globalStyles from '../../App.css?raw';

class HeroElement extends LitElement {
  static get properties() {
    return {
      image: String,
      e: { type: Object }
    };
  }

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      HeroElementStyles,
    ];
  }

  constructor() {
    super();
    this.e = {};
    this.image = "";
  }

  firstUpdated() {
    this.updateCardBackground(); // Initial check
  }

  updateCardBackground = () => {
    const surfaceColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-surfaceContainerLowest').trim();
    const card = this.shadowRoot.querySelector('.card');
  
    if (!card) return;
  
    if (surfaceColor === '#ffffff' || surfaceColor === 'rgb(255, 255, 255)') {
      card.classList.add('light-background');
      card.classList.remove('dark-background');
    } else {
      card.classList.add('dark-background');
      card.classList.remove('light-background');
    }
  };
  

  render() {
    return html`
        <div class="content">
        <section class="hero is-fullheight is-justify-content-center" style="background: url(${this.e.details?.backgroundImage || ''}) lightgray 50% / cover no-repeat;">
          <div class="card content p-3">
            <div class="card-content">
              <h1 class="main-heading">${this.e.name}</h1>
              <p class="mt-0 mb-2">${this.e.defaultValue}</p>
              ${this.e.details?.link ? html`
                <a href="${this.e.details.link.path}" class="button is-link ">${this.e.details.link.label}</a>
              ` : ""}
            </div>
          </div>
        </section>
        </div>
  
    `;
  }
}

customElements.define('hero-element', HeroElement);
