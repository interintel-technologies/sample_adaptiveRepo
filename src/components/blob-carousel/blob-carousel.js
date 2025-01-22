import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { BlobCarouselCss } from './blob-carousel-css';
import globalStyles from '../../App.css?raw';

class BlobCarousel extends LitElement {
    static get properties() {
        return {
            rows: { type: Array },
            cols: { type: Array },
            boxes: { type: Array },
            slideIndex: { type: Number },
            totalSlides: { type: Number },
        };
    }

    constructor() {
        super();
        this.slideIndex = 1;
        this.boxes = [];
        this.rows = [];
        this.cols = [];
        this.totalSlides = 0;
        this.initialLoad = true; // Flag to track initial load
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            BlobCarouselCss,
        ];
    }

    firstUpdated() {
        window.addEventListener('resize', this.updateTotalSlides.bind(this));
        this.updateTotalSlides(); // Ensure initial update
    }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            this.boxes = this.rows.map(row =>
                Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue]))
            );
            this.updateTotalSlides();
            
            if (this.totalSlides > 0) {
                this.showSlides(this.slideIndex, 'none');
            }
        }
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex + n);
    }

    currentSlide(n) {
        if (n === this.slideIndex) {
            return; // No effect if clicking on the same dot
        }
        const direction = n > this.slideIndex ? 'left' : 'right';
        this.showSlides(n, direction);
    }

    showSlides(n, direction = 'left') {
        // Ensure the elements are available before accessing them
        const slides = this.shadowRoot.querySelectorAll('.mySlides');
        const dots = this.shadowRoot.querySelectorAll('.dot');

        if (!slides.length || !dots.length) {
            console.warn('Slides or dots not found');
            return;
        }

        if (n > slides.length) { this.slideIndex = 1; }
        if (n < 1) { this.slideIndex = slides.length; }

        slides.forEach((slide) => {
            slide.classList.remove('slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');
            slide.style.display = 'none';
        });
        dots.forEach(dot => dot.classList.remove('active'));

        const prevIndex = this.slideIndex;
        this.slideIndex = n;

        if (!this.initialLoad) {
            const slideClassIn = direction === 'left' ? 'slide-in-right' : 'slide-in-left';
            const slideClassOut = direction === 'left' ? 'slide-out-left' : 'slide-out-right';

            slides[this.slideIndex - 1].style.display = 'block';
            slides[this.slideIndex - 1].classList.add(slideClassIn);
        } else {
            slides[this.slideIndex - 1].style.display = 'block';
            slides[this.slideIndex - 1].classList.remove('slide-in-left', 'slide-out-right'); // Ensure all animation classes are removed
        }

        dots[this.slideIndex - 1].classList.add('active');

        this.initialLoad = false; // Update initial load flag after first load
    }

    updateTotalSlides() {
        const width = window.innerWidth;
        const itemsPerSlide = width >= 1024 ? 3 : 1; // 3 items per slide on desktop, 1 item per slide on mobile/tablet
        this.totalSlides = Math.ceil(this.boxes.length / itemsPerSlide);
        
        // Ensure to show the correct initial slide after update
        this.showSlides(this.slideIndex);
    }

    static get is() {
        return 'blob-carousel';
    }

    render() {
        const width = window.innerWidth;
        const itemsPerSlide = width >= 1024 ? 3 : 1; // 3 items per slide on desktop, 1 item per slide on mobile/tablet

        return html`
            <div class="slideshow-container content">
                ${Array.from({ length: this.totalSlides }).map((_, slideIndex) => html`
                    <div class="mySlides slide">
                        <div class="columns is-mobile">
                            ${this.boxes.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((slide, index) => html`
                                <div class="column is-4-desktop is-12-tablet is-12-mobile parentCol">
                                    <div class="boxCols columns is-multiline">
                                        <div class="column is-12 svgCol">
                                            <div class="circle">
                                                <i class="${slide.icon}"></i>
                                            </div>
                                        </div>
                                        <div class="inward-semicircle"></div>
                                        <div class="column is-12 parCol px-0 mt-5 ${slide.id === 1 ? 'primaryBg' : ''}">
                                            <div class="description px-4">
                                                <h3>${slide.name}</h3>
                                                <p>${slide.description}</p>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
            <br>
            <div style="text-align:center">
                ${Array.from({ length: this.totalSlides }).map((_, index) => html`
                    <span class="dot ${index + 1 === this.slideIndex ? 'active' : ''}" @click="${() => this.currentSlide(index + 1)}"></span>
                `)}
            </div>
        `;
    }
}

customElements.define(BlobCarousel.is, BlobCarousel);

export default BlobCarousel;
