import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { AdsBasicStyles } from './ads-basic-css';
import globalStyles from '../../App.css?raw';

class AdsBasic extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            img: { type: String },
            e: { type: Object }, // Add `e` as a property
        };
    }

    constructor() {
        super();
        this.message = "";
        this.img = "";
        this.e = null; // Initialize `e` to null
    }

    updated(changedProperties) {
        if (changedProperties.has('e') && this.e) {
            this.message = this.e.details.message;
            this.img = this.e.details.image;
        }
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AdsBasicStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get is() {
        return 'ads-basic';
    }

    render() {
        return html`
            <div class="view-balance-ad column is-flex is-two-thirds">
                <div class="ad-image is-rounded">
                    <figure class="image ads-image is-48x48">
                        <img src=${this.img} alt="Placeholder image">
                    </figure>
                </div>
                <p class="pl-3">${this.message}</p>
            </div>    
        `;
    }
}

customElements.define(AdsBasic.is, AdsBasic);
