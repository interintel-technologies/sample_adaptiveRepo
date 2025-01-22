import { html, css, unsafeCSS } from 'lit-element';
import '@polymer/paper-card/paper-card';
import '../empty-view/empty-view';
import { PriceCardsStyles } from './price-cards-css';
import { PriceCardsBase } from '../../base/elements/price-cards';
import globalStyles from '../../App.css?raw';

class PriceCards extends PriceCardsBase {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            PriceCardsStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.rows = [];
        this.cols = [];
    }

    static get is() {
        return 'price-cards';
    }

    render() {
        return html`
            <div class="price-content">
                <div class="columns is-multiline">
                    ${this.e && this.e.details.map((item, index) => html`
                        <div class="column is-flex">
                            <div class="card content">
                                <div class="block" style="margin:0;">
                                    <p>${item.count}</p>
                                </div>
                                <div class="block" style="margin:0;">
                                    <h5>${item.name}</h5>
                                </div>
                                <hr>
                                <div class="block" style="margin:0;">
                                    ${
                                        item.description.split(" .").map(desc => html`
                                            <div class="level is-flex">
                                                <fa-icon class="far fa-check-circle check-icon" style="fill: var(--app-default-color)"></fa-icon>
                                                <p>${desc}</p>
                                            </div>
                                        `)
                                    }
                                </div>
                            </div>
                        </div>
                    `)}
                </div>
                <p id="warning-text" style="color:#ff3860;">${this.e && this.e.name} required</p>
            </div>
        `;
    }
}

customElements.define(PriceCards.is, PriceCards);
