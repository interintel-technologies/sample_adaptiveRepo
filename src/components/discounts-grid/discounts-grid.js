import {css, html, LitElement, unsafeCSS} from 'lit-element';
import { transition, slide, fade } from 'lit-transition';
import { DiscountsGridStyles } from './discounts-grid-css';
import globalStyles from '../../App.css?raw';

const animation = {
    mode: "both",
    opacity: 0.0,
};

class DiscountsGrid extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DiscountsGridStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            slides: Array,
            slideIndex: Number,
            discounts: Array,
            firstLoad: Boolean,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();

        this.slides = [];
        this.slideIndex = 0;
        this.discounts = [];
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    // firstUpdated() {
    //     this.firstLoad = true;

    //     this.loader.then(() => {
    //         this.discounts = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
    //         this.slides = [...this.renderSlides()];
    //     });
    // }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
    
            this.discounts = [...this.rows.map(row => 
                Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue]))
            )];
        
            this.slides = [...this.renderSlides()];
        }
    }
    
    

    renderSlides() {
        let tempSlide = [];
        let tempSlides = [];
                
        this.discounts.forEach((discount, index, array) => {
            tempSlide.push(discount);
            if ((index + 1) % 3 === 0) {
                tempSlides = [...tempSlides, tempSlide];
                tempSlide = [];
            } else if (index === array.length - 1) {
                tempSlides = [...tempSlides, tempSlide];
            }
        });
    
        console.log("Generated slides:", tempSlides);
    
        return tempSlides.map(slide => html`
            <div class="grid" style="margin: 0;">
                ${slide.map(discount => html`
                    <div class="grid-item" title="${discount.name}">
                        <div class="content">
                            <img src="${discount.image}" alt="${discount.name}Image"/>
                            <h5>${discount.text}</h5>
                            <h6>Shop ${discount.name}</h6>
                        </div>
                    </div>
                `)}
            </div>
        `);
    }
    

    showSlide(index) {
        // transition direction
        this.firstLoad = false;
        if(index > this.slideIndex) {
            animation.right = false;
            animation.left = true;
        }
        if(index < this.slideIndex) {
            animation.right = true;
            animation.left = false;
        }
        if(index > this.slides.length-1) {
            this.slideIndex = 0;    
        }
        else if(index < 0) {
            this.slideIndex = this.slides.length-1;
        }
        else {
            this.slideIndex = index;
        }

        const dots = this.shadowRoot.querySelectorAll(".dot");
        const activeDot = this.shadowRoot.querySelector("#dot"+this.slideIndex);

        if(activeDot) {
            dots.forEach(dot => dot.classList.remove("active"));
            activeDot.classList.add("active");
        }
    }

    static get is() {
        return "discounts-grid";
    }

    render() {
        return html`
            <div id="discountsGrid" class="column content">
                <div class="hero-body">
                    ${this.slides.length > 0 ? this.slides[this.slideIndex] : html``}
                    ${
                        this.slides.length > 1 ? html`
                            <div id="next" class="nav" @click=${() => this.showSlide(this.slideIndex+1)}>
                            next    
                            <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
                            </div>
                            <div id="prev" class="nav" @click=${() => this.showSlide(this.slideIndex-1)}>
                                <adaptive-ui-icon  icon="chevron-left"></adaptive-ui-icon>
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

customElements.define(DiscountsGrid.is, DiscountsGrid);