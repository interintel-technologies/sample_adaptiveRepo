import { html, css, unsafeCSS } from 'lit-element';
import { ManualSlideshowBase } from '../../base/elements/manual-slideshow';
import { ManualSlideShowStyles } from './manual-slideshow-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */

class ManualSlideshow extends ManualSlideshowBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      ManualSlideShowStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  constructor() {
    super();
    this.slideIndex = 1;
    this.data = [];
    this.rows = [];
    this.e = null;
  }

  static get properties() {
    return {
      slideIndex: { type: Number },
      data: { type: Array },
      e: { type: Object },
      rows: { type: Array }
    };
  }

  static get is() {
    return 'manual-slideshow';
  }

  render() {
    return html`
      <!-- Slideshow container -->
      <div class="slideshow-container">
        ${this.e ? html`
          <h1 style="align-self:flex-start;">${this.e.name}</h1>
          <h4 style="align-self:flex-start;">${this.e.details.sub_title}</h4>
        ` : html`<p>Loading...</p>`}
  
        <!-- Full-width images with number and caption text -->
        <div class="slides">
          ${this.rows.map((slide, index) => html` 
            <div class="slide fade">
              <div class="numbertext">${index+1}/${this.rows.length}</div>
              <h3 class="title">${slide[1]}</h3>
              <img class="image" src="/media/${slide[3]}" alt="${slide[1]}"/> 
              <div class="captions text">
                ${this.getCaptions(slide[2]).map(caption => html`
                  <div class="caption">
                    <h3 class="caption-title">${caption.title}</h3>
                    <h3 class="caption-desc">${caption.desc}</h3>
                  </div>
                `)}
              </div>
            </div>
          `)}
        </div>
  
        <!-- The dots/circles -->
        <div class="dots-container">
          ${this.rows.map((slide, index) => html`
            <span class="dot" @click="${this.currentSlide}" currentSlide="${index+1}"></span>
          `)}
        </div>
  
        <div class="navigator">
          <div class="prev">
            <iron-icon class="iron-icon" style="width:28px !important; height:28px !important;" icon="chevron-left" move="-1" @click=${this.moveSlide}></iron-icon>
          </div>
          <div class="next">
            <iron-icon class="iron-icon" style="width:28px !important; height:28px !important;" icon="chevron-right" move="1" @click=${this.moveSlide}></iron-icon>
          </div>
        </div>
      </div>       
    `;
  }
  

  getCaptions(content) {
    const captions = [];
    const breakTextSeparator = text => text.split("<br/>");

    const textExtractor = (text) => {
      const title = text.match(/<b>(.*?)<\/b>/) ? text.match(/<b>(.*?)<\/b>/)[1] : '';
      let desc = text.match(/:(.*)/) ? text.match(/:(.*)/)[1] : '';

      if (desc[0] === " ") {
        desc = desc.substr(1);
      }

      return { title, desc };
    };

    if (content.includes("<br/>") || content.includes("<b>")) {
      return breakTextSeparator(content).map(item => textExtractor(item));
    } else {
      return [{ desc: content }];
    }
  }

  moveSlide(e) {
    const moveValue = parseInt(e.target.getAttribute("move"));
    this.showSlides(this.slideIndex += moveValue);
  }

  currentSlide(e) {
    const currentSlideValue = parseInt(e.target.getAttribute("currentSlide"));
    this.showSlides(this.slideIndex = currentSlideValue);
  }

  showSlides(n) {
    const slides = this.shadowRoot.querySelectorAll(".slide");
    const captions = this.shadowRoot.querySelectorAll(".text");
    const dots = this.shadowRoot.querySelectorAll(".dot");
    console.log("slideshow ",slides);

    if (n > slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    captions.forEach(caption => caption.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[this.slideIndex - 1].style.display = "flex";
    captions[this.slideIndex - 1].style.display = "flex";
    dots[this.slideIndex - 1].classList.add("active");
  }

  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('rows')) {
      console.log("this rows ",this.rows);
      
      this.showSlides(this.slideIndex);
    }
  }
}

customElements.define(ManualSlideshow.is, ManualSlideshow);
