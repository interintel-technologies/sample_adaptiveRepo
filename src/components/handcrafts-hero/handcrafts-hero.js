import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { HandcraftsHeroStyles } from './handcrafts-hero-css';
import globalStyles from '../../App.css?raw';

class HandcraftsHero extends LitElement {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            HandcraftsHeroStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            image: { type: String },
            link: { type: String },
            e: { type: Object },
            rows: { type: Array },
            cols: { type: Array }
        };
    }

    constructor() {
        super();
        this.image = "";
        this.link = "";
        this.rows = [];
        this.cols = [];
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has('rows') || changedProperties.has('cols')) {
        
                const data = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));

                this.image = data.image // Default to empty string if undefined
                this.link = data.link   // Default to empty string if undefined
           
        }
    }

    static get is() {
        return "handcrafts-hero";
    }

    render() {
        return html`
            <div class="hero is-large" style="background-image: url('${this.image}')">
                <div class="hero-body">
                    <a class="button is-primary" href="${this.link}">
                        <h6>Shop Now</h6>
                        <adaptive-ui-icon icon="arrow-forward"></adaptive-ui-icon>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define(HandcraftsHero.is, HandcraftsHero);
