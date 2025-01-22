import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { AboutSectionStyles } from './about-section-css';
import globalStyles from '../../App.css?raw';

class AboutSection extends LitElement {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      AboutSectionStyles,
      css`
        :host {
          display: block;
        }

        .animate1-appear, .animate2-appear, .animate3-appear {
          /* Add your animation styles here */
        }
      `
    ];
  }

  static get properties() {
    return {
      e: { type: Object }
    };
  }

  constructor() {
    super();
    this.e = null;
    this.observer = null; // IntersectionObserver instance
  }



  
  updated(changedProperties) {
    if (changedProperties.has('e')) {       
    this.colorTitle();
    this.setupObserver();
    }
}

  setupObserver() {
    const options = {
      root: null, // relative to the viewport
      threshold: 0.2 // when 20% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.scrollAppear();
        }
      });
    }, options);

    const contentContainer = this.shadowRoot.querySelector('.about-section');
    if (contentContainer) {
      this.observer.observe(contentContainer);
    }
  }

  colorTitle() {
    const name = this.shadowRoot.querySelector('#aboutTitle').innerText;
    const aboutTitleElement = this.shadowRoot.querySelector('#aboutTitle');
    const n = name.split(" ");
    const lastname = n[n.length - 1];
    const newName = name.replace(lastname, "");
    const style = `<span style="color: var(--app-secondary-color)">${lastname}</span>`;

    aboutTitleElement.innerHTML = newName + style;
  }

  scrollAppear() {
    const square1 = this.shadowRoot.getElementById('square1');
    const square2 = this.shadowRoot.getElementById('square2');
    const column2 = this.shadowRoot.getElementById('column2');

    if (square1 && square2 && column2) {
      square1.classList.add('animate1-appear');
      square2.classList.add('animate2-appear');
      column2.classList.add('animate3-appear');
    }
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect(); // Clean up the observer
    }
    super.disconnectedCallback();
  }

  static get is() {
    return 'about-section';
  }

  render() {
    return html`
      <div class="content">
        <section class="about-section section">
          <div class="container">
            <div class="columns">
              <div class="column">
                <div class="about-img-cont parallax" data-speed="30">
                  <div id="square1" class="dec-bg animate1"></div>
                  <div id="square2" class="dec-img_fg animate2">
                    <img src="${this.e && this.e.details.image}" alt="${this.e && this.e.name}">
                  </div>
                </div>
              </div>
              <div id="column2" class="column">
                <div class="about-cont is-flex">
                  <div>
                    <h1 id="aboutTitle" class="about-title">${this.e.name}</h1>
                    <p class="about-subtitle">${this.e.defaultValue}</p>
                    <p class="cont">${this.e.details.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define(AboutSection.is, AboutSection);
