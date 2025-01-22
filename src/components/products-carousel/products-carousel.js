import { html, css,unsafeCSS } from "lit-element";
import { ProductsCarouselStyles } from "./products-carousel-css";
import { ProductsCarouselBase } from "../../base/elements/products-carousel";
import globalStyles from '../../App.css?raw'
class ProductsCarousel extends ProductsCarouselBase {
  static get styles() {
    return [unsafeCSS(globalStyles),ProductsCarouselStyles
    ];
  }

  static get properties() {
    return {
      slides: Array,
      slideIndex: Number,
      currentSlide: Array,
      autoplay: Boolean,
    };
  }
  constructor() {
    super();
    this.slides = [];
    this.slideIndex = 0;
    this.currentSlide = [];
    this.autoplay = true;
  }

  firstUpdated() {
    this.loader.then(() => {
      this.slides = this.rows;
      this.currentSlide = this.slides[this.slideIndex];
      this.autoplaySlides();
    });
  }

  animateDot(index) {
    const dots = this.shadowRoot.querySelectorAll(".dot");
    if (dots.length > 0) {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }
  }

  animateImage(animationType) {
    const image = this.shadowRoot.querySelector(".image");
    image.classList.add(animationType);
    setTimeout(() => {
      image.classList.remove(animationType);
      this.currentSlide = this.slides[this.slideIndex];
    }, 300);
  }

  animateSlide(direction) {
    this.animateImage("slide-out-" + direction);
    setTimeout(() => {
      this.animateImage("slide-in-" + direction);
    }, 300);

    this.animateDot(this.slideIndex);
  }

  moveSlide(step) {
    this.slideIndex = this.slideIndex + step;

    if (this.slideIndex === this.slides.length) {
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }

    const animationDirection = step > 0 ? "right" : "left";
    this.animateSlide(animationDirection);
  }

  showSlide(index) {
    let animationDirection;

    if (index > this.slideIndex) {
      animationDirection = "right";
    } else if (index < this.slideIndex) {
      animationDirection = "left";
    } else if (index === this.slideIndex) {
      //same position
      animationDirection = null;
    }
    this.slideIndex = index;
    this.autoplay = false;

    if (animationDirection) {
      this.animateSlide(animationDirection);
    }
  }

  autoplaySlides() {
    if (this.autoplay) {
      setTimeout(() => {
        this.moveSlide(1);
        this.autoplaySlides();
      }, 4000);
    } else {
      this.autoplay = true;
      this.autoplaySlides();
    }
  }

  onClickImage(id) {
    this.pl._dialog(this.e.service, { id: id });
  }

  static get is() {
    return "products-carousel";
  }

  render() {
    return html`
      <section class="section is-medium" style="padding:0 16px;">
        <div class="img-cont is-flex">
          <img
            src="/media/${this.currentSlide[1]}"
            class="image"
            @click=${() => this.onClickImage(this.currentSlide[0])}
          />
        </div>
        <div class="navigation is-flex">
          <div class="dots-container is-flex">
            ${this.slides.map(
              (slide, index) => html`
                <span
                  class="dot ${index === 0 ? "active" : ""}"
                  @click=${() => this.showSlide(index)}
                ></span>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define(ProductsCarousel.is, ProductsCarousel);
