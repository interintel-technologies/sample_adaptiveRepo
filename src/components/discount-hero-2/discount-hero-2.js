import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { DiscountHero2Styles } from './discount-hero-2-css';
import globalStyles from '../../App.css?raw';

class DiscountHero2 extends LitElement {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DiscountHero2Styles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            image: String,
            link: String,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.image = "";
        this.link = "";
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    // firstUpdated() {
    //     this.loader.then(() => {
    //         const data = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));

    //         this.image = data.image;
    //         this.link = data.link;
    //     });
    // }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {            
            const data = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));

            this.image = data.image;
            this.link = data.link;

        }
    }

    static get is() {
        return "discount-hero-2";
    }

    render() {
        return html`
            <div class="hero is-halfheight" style="background-image: url('${this.image}')">
                <div class="hero-body">
                    <a class="button is-info is-rounded" href="${this.link}">
                        <h6>Visit us</h6>
                        <span class="icon is-small">
                            <adaptive-ui-icon icon="arrow-forward"></adaptive-ui-icon>
                        </span>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define(DiscountHero2.is, DiscountHero2);