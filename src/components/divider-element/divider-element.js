import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { DividerElementStyles } from "./divider-element-css";
import globalStyles from '../../App.css?raw';

export class DividerElement extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DividerElementStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            e: { type: Array }
        };
    }

    constructor() {
        super();
        this.e = [];
    }

    firstUpdated() {
        // Ensure centerTitle runs after the first update
        this.updateComplete.then(() => {
            this.centerTitle();
        });
    }

    centerTitle() {
        // Query the title element and check if it exists
        const title = this.shadowRoot.querySelector(".title");

        if (title) {
            const titleWidth = title.getBoundingClientRect().width;
            const titleMarginLeft = titleWidth / 2;
            title.style.marginLeft = `${-titleMarginLeft}px`;
        } else {
            console.error("Title element not found!");
        }
    }

    static get is() {
        return "divider-element";
    }

    render() {
        return html`
            <div class="content has-text-centered">
                <h4 class="title">${this.e && this.e[0]}</h4>
            </div>
        `;
    }
}

customElements.define(DividerElement.is, DividerElement);
