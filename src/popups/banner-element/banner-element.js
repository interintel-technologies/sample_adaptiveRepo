import { LitElement, html, css } from 'lit-element';
import { ThemeMixin } from '../../mixins/ThemeMixin';

import { BannerElementStyles } from './banner-element-css';

/**
 * @typedef Banner
 * @property {string} message
 * @property {string} type 
 * @property {string} position - up || down
 * @property {boolean} cancelable=true
 * @property {number} duration
 */

/** @type {Banner} */
export const BANNER =  {
    message: "Success",
    type: "success",
    position: "top",
    cancelable: true,
    duration: 1000
};

class BannerElement extends ThemeMixin(LitElement) {
    static get properties() {
        return {
            banner: Object
        };
    } 

    constructor() {
        super();
        this.banner = BANNER;
    }

    static get styles() {
        return [
            super.styles,
            BannerElementStyles,
            css`
                :root {
                    display: block;
                }
            `
        ];
    }

    firstUpdated() {
        this.banner = JSON.parse(this.banner);
        if(this.banner.duration !== "forever") {
            setTimeout(() => {
                this.shadowRoot.querySelector(".banner").classList.add("animate__fadeOut");
                this.remove();
            }, this.banner.duration);
        } 
    }

    popBanner() {
        this.remove();
    }

    static get is() {
        return "banner-element";
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            <div class="banner animate__animated animate__slideIn${this.banner.position === "top" ? "Down mb-1" : "Up mt-1"} content ${this.banner.type}">
                <div class="columns is-mobile is-centered">
                    <div class="column is-three-quarters has-text-centered" style="width: 98%;">
                        <h5 class="m-0" style="color: white;">${this.banner.message}</h5>
                    </div>
                    <div class="column is-one-quarter has-text-right ${this.banner.cancelable ? "" : "is-hidden"}" title="Remove" style="width: 2%;">
                        <span class="icon cancel" @click=${() => this.popBanner()}>
                            <i class="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(BannerElement.is, BannerElement);