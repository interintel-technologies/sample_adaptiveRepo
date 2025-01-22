import { html, css, LitElement, unsafeCSS } from 'lit-element';
import globalStyles from '../../App.css?raw';
import { HeroElement7Styles } from './hero-element-7-css';

class HeroElement7 extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      HeroElement7Styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.e = null;
  }

  static get properties() {
    return {
      e: { type: Object },
    };
  }

  static get is() {
    return `hero-element-7`;
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      // Ensure that animations trigger when `e` is updated
      this.onLoadAppear();
    }
  }

  setupObserver() {
    const options = {
      root: null, // relative to the viewport
      threshold: 0.2, // when 20% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateColumns();
        }
      });
    }, options);

    const mainColumn = this.shadowRoot.querySelector('#mainColumn');
    if (mainColumn) {
      this.observer.observe(mainColumn);
    }
  }

  animateColumns() {
    const columns = this.shadowRoot.querySelectorAll('.section');
    columns.forEach((column) => {
      column.classList.add('animate1-appear');
    });
  }

  render() {

    const heroImageSrc = this.e && this.e.details && this.e.details.hero_image_src
    

    return html`
      <style>
        .hero-img-cont {
          width: 100%;
          height: 91vh;
          border-top-left-radius: 50px;
          position: absolute;
          right: 0;
          z-index: 1;
          background-image: url("${heroImageSrc}");
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-position-x: 599px;
          background-position-y: center;
          background-size: 74%;
        }

        .hero .section {
          opacity: 0;
          transform: translateY(50px); /* Hidden by default */
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .animate1-appear {
          opacity: 1;
          transform: translateY(0); /* Visible state when animation triggers */
        }
      </style>
      <section class="hero section is-paddingless">
        <div class="hero-text-container">
          <div class="heading">
            <h1 id="title" class="title">${this.e && this.e.name}</h1>
          </div>
          <div class="hero-content parallax" data-speed="30">
            <h2
              id="subtitle"
              class="hero-subtitle has-text-weight-bold"
              >${this.e && this.e.details.subtitle}</h2
            >
            <p>${this.e && this.e.defaultValue}</p>
          </div>
          <div id="button" class="hero-cta">
            <a href=${this.e && this.e.details.path} class="btn button"
              >${this.e && this.e.details.button_title}</a
            >
          </div>
        </div>
        <div class="parallax-cont">
          <div class="hero-img-cont" id="01">
            <div class="overlay"></div>
          </div>
        </div>
      </section>
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Set up the observer for intersection-based animations
    this.setupObserver();

    // Trigger the on-load animations after the first render
    this.onLoadAppear();
  }

  onLoadAppear() {
    const self = this;

    const title = self.shadowRoot.querySelector('#title');
    const subtitle = self.shadowRoot.querySelector('#subtitle');
    const button = self.shadowRoot.querySelector('#button');

    setTimeout(() => {
      title.classList.add('animate1-appear');
      subtitle.classList.add('animate1-appear');
      button.classList.add('animate1-appear');
    }, 700);
  }
}

customElements.define(HeroElement7.is, HeroElement7);
