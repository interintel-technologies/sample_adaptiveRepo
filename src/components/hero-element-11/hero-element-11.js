import { html, css, LitElement, unsafeCSS } from 'lit-element';
import {HeroElement11Styles} from './hero-element-11-css'
import globalStyles from '../../App.css?raw';

class HeroElement11 extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            HeroElement11Styles,
            css`
                :host {
                display: block;
                }
            `
        ];
    }

    static get properties(){
        return {
            slideIndex: Number,
            autoplay:Boolean,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        }
    }

    constructor() {
        super();
        this.e = null;
        this.rows = [];
        this.cols = [];
        this.slideIndex = 1;
        this.autoplay = true;        
    }

    updated(changedProperties) {
        if (changedProperties.has('e')) {
            this.showSlides(this.slideIndex);
        }
    }

    showColumns(){
        const columns = this.shadowRoot.querySelectorAll(".column");    

        setTimeout(()=>{
            columns.forEach(column=>column.classList.add("column-appear-animation"));
        },700);
    }
    
    showSlides(n) {
        const slides = this.shadowRoot.querySelectorAll(".slide");
        const dots = this.shadowRoot.querySelectorAll(".dot");

        if (n > slides.length) {this.slideIndex = 1};   
        if (n < 1) {this.slideIndex = slides.length};

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[this.slideIndex-1].style.display = "flex";
        
        dots[this.slideIndex-1].className += " active";

        //autoplay
        if(this.autoplay) {
            setTimeout(()=>this.showSlides(this.slideIndex+=1),5000);
        }
        else {
            //starts a new autoplay infinite loop
            this.autoplay = true;
        }
    }

    showCurrentSlide(e){
        let currentSlideValue = parseInt(e.target.getAttribute("currentSlide"));

        // this stops the previous infinite loop for autoplay to prevent overlapping 
        this.autoplay = false;
        this.showSlides(this.slideIndex = currentSlideValue);
    }

    static get is(){
        return `hero-element-11`;
    }
    
    render(){
        return html`
            <section class="hero is-fullheight">
                <div class="hero-body columns" style="align-items:flex-start;">
                    <div id="textContainer" class="column">
                        <h1 class="title has-text-white">${this.e.name} </h1>
                        <p class="subtitle has-text-white">${this.e.details.text}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                    <div id="imageContainer" class="column">
                        ${
                            this.rows.map(slide => html`
                                <div class="slide">
                                    <img class="slide-image" src="/media/${slide[3]}" alt="image slide"/>
                                    <p class="subtitle-6 has-text-white p-padding">${slide[2]}</p>
                                </div>
                            `)
                        }
                        <div class="dots-container">
                            ${this.rows.map((slide, index) => html`
                                <span class="dot" @click="${this.showCurrentSlide}" currentSlide="${index+1}"></span>
                            `)}
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}

customElements.define(HeroElement11.is, HeroElement11)