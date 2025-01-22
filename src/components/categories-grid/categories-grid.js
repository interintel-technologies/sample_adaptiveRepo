import { css, html, LitElement } from 'lit-element';
import { CategoriesGridStyles } from './categories-grid-css';
import { transition, slide, fade } from 'lit-transition';

const animation = {
    mode: "both",
    opacity: 0.0,
};

class CategoriesGrid extends LitElement {

    static get styles() {
        return [
            CategoriesGridStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            slides: { type: Array },
            slideIndex: { type: Number },
            categories: { type: Array },
            firstLoad: { type: Boolean },
            e: { type: Object }, // Assuming 'e' is passed as a property
            cols: { type: Array }, // Add 'cols' property
            rows: { type: Array }  // Add 'rows' property
        };
    }

    constructor() {
        super();
        this.slides = [];
        this.slideIndex = 0;
        this.categories = [];
        this.rows = [];
        this.cols = [];
    }

    firstUpdated() {
        this.firstLoad = true;
        console.log("Initial cols: ", this.cols);
        console.log("Initial rows: ", this.rows);
        
        if (this.cols.length && this.rows.length) {
            this.updateCategoriesAndSlides();
        }
    }

    updated(changedProperties) {
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows')
        ) {
            
            if (this.cols.length && this.rows.length) {
                this.updateCategoriesAndSlides();
            }
        }
    }

    updateCategoriesAndSlides() {
        this.categories = [...this.rows.map(row => 
            Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue]))
        )];
        this.slides = [...this.renderSlides()];
    }

    renderSlides() {
        let tempSlide = [];
        let tempSlides = [];

        this.categories.forEach((category, index, array) => {
            tempSlide.push(category);
            if ((index + 1) % 6 === 0) {
                tempSlides = [...tempSlides, tempSlide];
                tempSlide = [];
            } else if (index === array.length - 1) {
                tempSlides = [...tempSlides, tempSlide];
            }
        });

        return tempSlides.map(slide => html`
            <div class="grid" style="margin: 0;">
                ${
                    slide.map(category => html`
                        <div class="grid-item" title="${category.name}">
                            <img src="${category.image}" alt="${category.name}Image"/>
                            <h4 style="text-align:center;">${category.name}</h4>
                        </div>
                    `)
                }
            </div>
        `);
    }

    showSlide(index) {
        // transition direction
        this.firstLoad = false;
        if (index > this.slideIndex) {
            animation.right = false;
            animation.left = true;
        }
        if (index < this.slideIndex) {
            animation.right = true;
            animation.left = false;
        }
        if (index > this.slides.length - 1) {
            this.slideIndex = 0;    
        } else if (index < 0) {
            this.slideIndex = this.slides.length - 1;
        } else {
            this.slideIndex = index;
        }

        const dots = this.shadowRoot.querySelectorAll(".dot");
        const activeDot = this.shadowRoot.querySelector("#dot" + this.slideIndex);

        if (activeDot) {
            dots.forEach(dot => dot.classList.remove("active"));
            activeDot.classList.add("active");
        }
    }

    render() {
        return html`
            <div class="content">
                <div class="hero-body">
                    ${
                        this.slides.length > 0 ? html`
                            <div class="slides">
                                ${this.slides[this.slideIndex]}
                            </div>
                        ` : html``
                    }
                    ${
                        this.slides.length > 1 ? html`
                            <div id="next" class="nav" @click=${() => this.showSlide(this.slideIndex + 1)}>
                                <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
                            </div>
                            <div id="prev" class="nav" @click=${() => this.showSlide(this.slideIndex - 1)}>
                                <adaptive-ui-icon icon="chevron-left"></adaptive-ui-icon>
                            </div>
                            <div class="dots-container is-flex">
                                ${this.slides.map((slide, index) => html`
                                    <span id="dot${index}" class="dot ${index === 0 ? "active" : ""}" @click="${() => this.showSlide(index)}"></span>
                                `)} 
                            </div>
                        ` : html``
                    }
                </div>
            </div>
        `;
    }

}

customElements.define('categories-grid', CategoriesGrid);
