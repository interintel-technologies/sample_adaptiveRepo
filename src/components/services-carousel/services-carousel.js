import { html, css,unsafeCSS } from 'lit-element';
import { SectionPElementDsc } from '../../base/elements/section-pelement-dsc';
import { ServicesCarouselStyles } from './services-carousel-css';
import {transition, slide} from 'lit-transition';
import globalStyles from '../../App.css?raw'

const animation = {
    mode: "both",
    opacity: 0.0,
};

class ServicesCarousel extends SectionPElementDsc {

    static get styles() {
        return [
            unsafeCSS(globalStyles),,
            ServicesCarouselStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            slides: Array,
            slideIndex: Number,
            loopId: String,
            autoPlayTime: Number
        };
    }
    
    constructor() {
        super();
        this.slides = [];
        this.slideIndex = 0;
        this.autoPlayTime = 10000;
    }

    firstUpdated() {
        this.loader.then(()=> {
            this.slides = [...this.renderSlides()];
            this.showSlide(0);
            this.autoPlayTime = this.e.details.autoPlayTime ? this.e.details.autoPlayTime : this.autoPlayTime;
        });
    }

    onNavBtnClickHandler(index) {
        // stop previous animation loop
        clearTimeout(this.loopId);
        this.showSlide(index);
    }

    showSlide(index) {
        // transition direction
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

        //create new loop
        this.loopId = setTimeout(()=>this.showSlide(this.slideIndex+1), this.autoPlayTime);
    }
    
    getEntries(text) {
        return text.split('|');
    }

    renderSlides() {
        return this.rows.map(row => html`
            <div class="columns">
                <div class="column content is-flex">
                    <h3>${this.getEntries(row[1])[0]}</h3>
                    <h4>${this.getEntries(row[1])[1]}</h4>
                    ${
                        JSON.parse(row[2]).points.map(point => html`
                            <div class="is-flex">
                                <fa-icon class="far fa-check-square"></fa-icon>
                                <h5>${point}</h5>
                            </div>
                        `)
                    }
                    <a class="button" href="${JSON.parse(row[2]).link}" target="_blank">
                        Get Started
                        <adaptive-ui-icon icon="arrow-forward"></adaptive-ui-icon>
                    </a>
                </div>
                <div class="column">
                    <img src="/media/${row[3]}" alt="${this.getEntries(row[1])[0]}Image"/>
                </div>
            </div>
        `);
    }

    static get is() {
        return "services-carousel";
    }

    render() {
        return html`
			<div class="content">
                <div id="serviceCarousel" class="column">
                    <div class="hero-body has-background-link-light">
                        ${transition(this.slides[this.slideIndex], slide(animation))}
                        <div id="next" class="nav" @click=${() => this.onNavBtnClickHandler(this.slideIndex+1)}>
                            <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
                        </div>
                        <div id="prev" class="nav" @click=${() => this.onNavBtnClickHandler(this.slideIndex-1)}>
                            <adaptive-ui-icon  icon="chevron-left"></adaptive-ui-icon>
                        </div>
                        <div class="dots-container is-flex">
                            ${this.slides.map((slide, index) => html`
                                <span id="dot${index}" class="dot ${index === 0 ? "active" : ""}" @click="${() => this.onNavBtnClickHandler(index)}"></span>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(ServicesCarousel.is, ServicesCarousel);
