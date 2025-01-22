import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { DiscountHeroStyles } from './discount-hero-css';
import globalStyles from '../../App.css?raw';

class DiscountHero extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DiscountHeroStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            discount: { type: Object },
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.slides = [];
        this.slideIndex = 0;
        this.autoPlayInterval = 10000;
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            console.log("Updated: rows or cols changed");
            console.log("this.rows:", this.rows);
            console.log("this.cols:", this.cols);
            
            this.discount = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));
            console.log("this.discount", this.discount);
            
            // Update the h1 text with a requestAnimationFrame to ensure the element is available
            requestAnimationFrame(() => {
                const h1 = this.shadowRoot.querySelector("h1");
                if (h1) {
                    h1.innerHTML = this.discount.text;
                }
            });
        }
    }

    static get is() {
        return "discount-hero";
    }

    render() {
        return html`
            <div id="discountHero" class="content">
                ${
                    this.discount ? html`
                        <div class="hero-body columns" style="margin: 0;">
                            <div class="column is-7">
                                <img src="${this.discount.image}" alt="discountImage">
                            </div>
                            <div class="column is-5">
                                <h1>${this.discount.text || ''}</h1>
                                <a href="${this.discount.buttonLink}" title="${this.discount.buttonLabel}" class="button is-primary">
                                    ${this.discount.buttonLabel}
                                </a>
                            </div>
                        </div>
                    ` : html``
                }
            </div>
        `;
    }

}

customElements.define(DiscountHero.is, DiscountHero);
