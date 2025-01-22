import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { HeroElement8Styles } from './hero-element-8-css';
import globalStyles from '../../App.css?raw';

export class HeroElement8 extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            HeroElement8Styles,
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
        this.observer = null; // IntersectionObserver instance
    }

    static get properties() {
        return {
            e: { type: Object },
        };
    }

    firstUpdated() {
        this.setupObserver();
    }

    static get is() {
        return "hero-element-8";
    }

    setupObserver() {
        const options = {
            root: null, // relative to the viewport
            threshold: 0.2, // when 20% of the element is visible
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animateColumns();
                }
            });
        }, options);

        const hero = this.shadowRoot.querySelector(".hero");
        if (hero) {
            this.observer.observe(hero);
        }
    }

    animateColumns() {
        const imageColumn = this.shadowRoot.querySelector("#image-column");
        const textColumn = this.shadowRoot.querySelector("#text-column");

        if (imageColumn && textColumn) {
            imageColumn.classList.add("column-appear-animation");
            textColumn.classList.add("column-appear-animation");
        }
    }

    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect(); // Clean up the observer when the element is removed
        }
        super.disconnectedCallback();
    }

    render() {
        return html`
            <section class="hero is-halfheight">
                <div class="hero-body columns">
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e && this.e.details.image}" />
                    </div>
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e && this.e.name}
                        </p>
                        <p class="subtitle">
                            ${this.e && this.e.defaultValue}
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define(HeroElement8.is, HeroElement8);
