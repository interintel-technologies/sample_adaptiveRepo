import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { HeroElement10Styles } from './hero-element-10-css';
import globalStyles from '../../App.css?raw';

class HeroElement10 extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            HeroElement10Styles,
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

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        // Add scroll event listener
        window.addEventListener('scroll', () => this.scrollAppear());
    }

    scrollAppear() {
        const hero = this.shadowRoot.querySelector('.hero');
        const heroStartPosition = hero.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 2;

        if (heroStartPosition < screenPosition) {
            this.animateItems();
        }
    }

    animateItems() {
        const titles = this.shadowRoot.querySelectorAll('.title');
        const subtitle = this.shadowRoot.querySelector('.subtitle');
        const button = this.shadowRoot.querySelector('.button');
        const itemsToAnimate = [...titles, subtitle, button];

        itemsToAnimate.forEach(item => this.animateItem(item));
    }

    animateItem(item) {
        item.classList.add('item-appear-animation');
    }

    static get is() {
        return 'hero-element-10';
    }

    render() {
        return html`
            <section class="hero is-halfheight columns">
                <div class="hero-body">
                    <h3 class="title">${this.e && this.e.name}</h3>
                    <h3 class="title is-4 mid-title" style="margin-top:0px;">${this.e && this.e.defaultValue}</h3>
                    <p class="subtitle" style="margin-top:0px;color:var(--white) !important;">${this.e && this.e.details.text}</p>
                    <a href="${this.e && this.e.details.path}" class="button str-btn">${this.e && this.e.details.button_title}</a>
                </div>
            </section>
        `;
    }
}

customElements.define(HeroElement10.is, HeroElement10);
