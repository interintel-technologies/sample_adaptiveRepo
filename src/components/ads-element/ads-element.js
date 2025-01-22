import { css, html, LitElement,unsafeCSS } from 'lit-element';
import { AdsElementCss } from './ads-element-css';
import globalStyles from '../../App.css?raw';

class AdsElement extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AdsElementCss,
            css`
                :host {
                    display: block;
                    overflow: hidden;
                    position: relative;
                }
                
            `
        ];
    }

    static get properties() {
        return {
            ads: { type: Array },
            slideIndex: { type: Number },
            autoPlayInterval: { type: Number },
            e: { type: Object },
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.ads = [];
        this.slideIndex = 0;
        this.autoPlayInterval = 10000;
        this.e = null;
        this.rows = [];
        this.cols = [];
    }

    firstUpdated() {

        if (this.e && this.e.details.enabled) {
            this.autoPlayInterval = this.e.details.autoPlayInterval || this.autoPlayInterval;
            this.ads = this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])));
            this.showSlide(0);
        }
    }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            if (this.e && this.e.details) {
                this.autoPlayInterval = this.e.details.autoPlayInterval || this.autoPlayInterval;
            }
            
            this.slides = [...this.renderSlides()];
            this.showSlide(0);
        }
    }

    showSlide(index) {
        if (index >= this.ads.length) {
            this.slideIndex = 0;
        } else if (index < 0) {
            this.slideIndex = this.ads.length - 1;
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

        clearTimeout(this.loopId);
        this.loopId = setTimeout(() => this.showSlide(this.slideIndex + 1), this.autoPlayInterval);
    }

    onNavBtnClickHandler(index) {
        clearTimeout(this.loopId);
        this.showSlide(index);
    }

    static get is() {
        return 'ads-element';
    }

    render() {
        return html`
            <div class="carousel-wrapper" style="transform: translateX(-${this.slideIndex * 100}%);">
                ${this.ads.map((slide, index) => html`
                    <div class="carousel-item" id="slide-${slide.id}">
                        <div class="columns">
                            <div class="column is-4-desktop is-full-mobile imgCol">
                                <img src="${slide.image}" alt="${slide.paragraph}">
                            </div>
                            <div class="column is-8-desktop is-full-mobile parCol">
                                <h4>${slide.paragraph}</h4>
                            </div>
                        </div>
                    </div>
                `)}
            </div>
            <div class="dots-container">
                ${this.ads.map((_, index) => html`
                    <span id="dot${index}" class="dot ${index === this.slideIndex ? 'active' : ''}" @click="${() => this.onNavBtnClickHandler(index)}"></span>
                `)}
            </div>
            <div id="next" class="nav" @click=${() => this.onNavBtnClickHandler(this.slideIndex + 1)}>
                <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
            </div>
            <div id="prev" class="nav" @click=${() => this.onNavBtnClickHandler(this.slideIndex - 1)}>
                <adaptive-ui-icon icon="chevron-left"></adaptive-ui-icon>
            </div>
        `;
    }

}

customElements.define(AdsElement.is, AdsElement);
