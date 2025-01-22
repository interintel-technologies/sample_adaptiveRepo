import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { HeroElement4Styles } from './hero-element-4-css';
import globalStyles from '../../App.css?raw';

class HeroElement4 extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            HeroElement4Styles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    constructor() {
        super();
        this.e = null;
    }

    static get properties() {
        return {
            e: { type: Object },
        };
    }

    updated(changedProperties) {
        if (changedProperties.has('e')) {
            window.addEventListener('scroll', () => {
                this.scrollAppear();
            });
        }
    }

    scrollAppear() {
        const contentContainer = this.shadowRoot.querySelector('.hero-container');
        const image = this.shadowRoot.getElementById('animateImage');
        const content = this.shadowRoot.getElementById('animate2');

        const contentStartPosition = contentContainer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 2;

        if (contentStartPosition < screenPosition) {
            if (image) image.classList.add('animate1-appear');
            if (content) content.classList.add('animate2-appear');
        }
    }

    render() {
        return html`
            <div class="hero-container" style="padding:0 !important">
                <div class="container" style="overflow: hidden;">
                    <div class="columns row">
                        <div class="circle2"></div>
                        <div class="column hero-column">
                            <div class="hero-iso-image">
                                <div class="circle"></div>
                                <div id="animateImage">
                                    <img src="${this.e && this.e.details.hero_image_src}" alt="${this.e && this.e.name} image" />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <h1 class="c-title-xl">${this.e && this.e.name}</h1>
                            <p class="c-paragraph">${this.e && this.e.defaultValue}</p>
                            <a 
                                href="${this.e && this.e.details.path}" 
                                class="button str-btn" 
                                style="background-color: var(--secondary);"
                            >
                                ${this.e && this.e.details.button_title}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static get is() {
        return 'hero-element-4';
    }
}

customElements.define(HeroElement4.is, HeroElement4);
