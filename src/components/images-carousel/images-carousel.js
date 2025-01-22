import { html, css, LitElement } from 'lit-element';
import { ImagesCarouselStyles } from './images-carousel-css';

class ImagesCarousel extends LitElement {

  static get styles() {
    return [
      ImagesCarouselStyles,
      css`
        :host {
          display: block;
        }
        .carousel {
          display: grid;
          gap: 10px;
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dots-container {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .dot {
          width: 10px;
          height: 10px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
        }
        .dot.active {
          background-color: #717171;
        }
        @media (min-width: 1024px) {
          .carousel {
            grid-template-columns: repeat(4, 1fr); /* Maximum 4 columns per slide on desktop */
          }
        }
        @media (max-width: 1023px) {
          .carousel {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive columns */
          }
        }
      `
    ];
  }

  static get properties() {
    return {
      e: { type: Object },
      rows: { type: Array },
      cols: { type: Array },
      images: { type: Array },
      slides: { type: Array },
      currentSlideIndex: { type: Number },
      noOfImagesInSlide: { type: Number }
    };
  }

  constructor() {
    super();
    this.images = [];
    this.slides = [];
    this.currentSlideIndex = 0;
    this.noOfImagesInSlide = 4; // Default to 4 images per slide
  }

  firstUpdated() {
    this.noOfImagesInSlide = this.e?.details?.noOfImagesInSlide || this.noOfImagesInSlide;
    this.prepareImagesAndSlides();
  }

  updated(changedProperties) {
    if (changedProperties.has('rows') || changedProperties.has('cols') || changedProperties.has('e')) {
      this.prepareImagesAndSlides();
    }

    if (changedProperties.has('currentSlideIndex')) {
      const previousSlideIndex = changedProperties.get('currentSlideIndex');
      this.showSlide(previousSlideIndex);
    }
  }

  prepareImagesAndSlides() {
    if (this.rows && this.cols) {
      this.images = this.rows.map(row =>
        Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue]))
      );
      this.slides = this.renderSlides();
    }
  }

  renderSlides() {
    const slides = [];
    let slide = [];

    this.images.forEach((image, index, array) => {
      slide.push(image);
      if ((index + 1) % this.noOfImagesInSlide === 0 || index === array.length - 1) {
        slides.push([...slide]);
        slide = [];
      }
    });

    return slides.map(slide => html`
      <div class="carousel">
        ${slide.map(image => html`
          <div class="carousel-item">
            <figure class="image is-4by3">
              <img src="${image.url}" alt="${image.title}"/>
            </figure>
            <h3>${image.title}</h3>
            <h5>${image.subtitle}</h5>
            <p>${image.description}</p>
          </div>
        `)}
      </div>
    `);
  }

  showSlide(previousSlideIndex) {
    const carousel = this.shadowRoot.querySelector('.carousel');
    const direction = previousSlideIndex > this.currentSlideIndex ? 'left' : 'right';

    if (direction === 'left') {
      carousel.style.transform = 'translateX(-100%)';
    } else {
      carousel.style.transform = 'translateX(100%)';
    }

    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(0)';
      carousel.style.transition = 'transform 0.5s ease-in-out';
    }, 500);
  }

  render() {
    return html`
    <div class="columns">

      <div class="column content">
        ${this.slides[this.currentSlideIndex]}
        ${this.slides.length > 1 ? html`
          <div class="dots-container">
            ${this.slides.map((slide, index) => html`
              <span id="dot${index}" class="dot ${index === this.currentSlideIndex ? "active" : ""}" @click="${() => this.currentSlideIndex = index}"></span>
            `)}
          </div>
        ` : ""}
      </div>
      </div>

    `;
  }
}

customElements.define('images-carousel', ImagesCarousel);
