import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { AdsCarouselStyles } from './ads-carousel-css'; // Import your custom styles
import globalStyles from '../../App.css?raw';

class AdsCarousel extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AdsCarouselStyles,
            css`
                :host {
                    display: block;
                    overflow: hidden;
                    position: relative;
                }
                
                .carousel-wrapper {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                }
                
                .carousel-item {
                    flex: 0 0 100%; /* Each slide takes full width of the container */
                    box-sizing: border-box;
                }
                
                .dots-container {
                    text-align: center;
                    margin-top: 10px;
                }
                
                
                
                .nav {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 24px;
                    color: #fff;
                    padding: 10px;
                }
                
                #next {
                    right: 10px;
                }
                
                #prev {
                    left: 10px;
                }
            `
        ];
    }

    static get properties() {
        return {
            slides: { type: Array },
            slideIndex: { type: Number },
            autoPlayInterval: { type: Number },
            e: { type: Object },
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.slides = [];
        this.slideIndex = 0;
        this.autoPlayInterval = 10000;
        this.e = null;
        this.rows = [];
        this.cols = [];
    }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            console.log("Updated: rows or cols changed");
            console.log("this.rows:", this.rows);
            console.log("this.cols:", this.cols);
            
            if (this.e && this.e.details) {
                this.autoPlayInterval = this.e.details.autoPlayInterval || this.autoPlayInterval;
            }
            
            this.slides = [...this.renderSlides()];
            this.showSlide(0);
        }
    }

    onNavBtnClickHandler(index) {
        clearTimeout(this.loopId);
        this.showSlide(index);
        this.startAutoPlay();
    }

    showSlide(index) {
        if (index >= this.slides.length) {
            this.slideIndex = 0;
        } else if (index < 0) {
            this.slideIndex = this.slides.length - 1;
        } else {
            this.slideIndex = index;
        }

        this.requestUpdate();

        const dots = this.shadowRoot.querySelectorAll(".dot");
        const activeDot = this.shadowRoot.querySelector("#dot" + this.slideIndex);

        if (activeDot) {
            dots.forEach(dot => dot.classList.remove("active"));
            activeDot.classList.add("active");
        }

        const carouselWrapper = this.shadowRoot.querySelector(".carousel-wrapper");
        if (carouselWrapper) {
            carouselWrapper.style.transform = `translateX(-${this.slideIndex * 100}%)`;
        }

        this.loopId = setTimeout(() => this.showSlide(this.slideIndex + 1), this.autoPlayInterval);
    }

    getEntries(text) {
        return text.split('|');
    }

    renderSlides() {
        return this.rows.map(row => html`
            <div class="carousel-item">
                <div class="column ads-title content is-flex is-justify-content-center">
                    <h3>${this.getEntries(row[1])[0]}</h3>
                    <h4>${this.getEntries(row[1])[1]}</h4>
                </div>
                <div class="column">
                    <img src="/media/${row[2]}" alt="${this.getEntries(row[1])[0]} Image"/>
                </div>
            </div>
        `);
    }

    connectedCallback() {
        super.connectedCallback();
        this.startAutoPlay();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopAutoPlay();
    }

    startAutoPlay() {
        this.loopId = setInterval(() => this.showSlide(this.slideIndex + 1), this.autoPlayInterval);
    }

    stopAutoPlay() {
        if (this.loopId) {
            clearInterval(this.loopId);
            this.loopId = null;
        }
    }

    static get is() {
        return "ads-carousel";
    }

    render() {
        return html`
            <div class="content">
                <div id="serviceCarousel" class="column">
                    <div class="carousel-wrapper">
                        ${this.slides}
                    </div>
                    <div class="dots-container">
                        ${this.slides.map((_, index) => html`
                            <span class="dot ${index === this.slideIndex ? 'active' : ''}" @click="${() => this.onNavBtnClickHandler(index)}"></span>
                        `)}
                    </div>
                    <div id="next" class="nav" @click="${() => this.onNavBtnClickHandler(this.slideIndex + 1)}">
                        <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
                    </div>
                    <div id="prev" class="nav" @click="${() => this.onNavBtnClickHandler(this.slideIndex - 1)}">
                        <adaptive-ui-icon icon="chevron-left"></adaptive-ui-icon>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(AdsCarousel.is, AdsCarousel);
