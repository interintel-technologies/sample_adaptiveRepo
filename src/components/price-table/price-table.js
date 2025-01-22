import { html, css, unsafeCSS } from 'lit-element';
import { PriceTableStyles } from './price-table-css';
import { PriceTableBase } from '../../base/elements/price-table';
import globalStyles from '../../App.css?raw';

class PriceTable extends PriceTableBase {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            PriceTableStyles,
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

    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('cols')) {
            const self = this;

            const columns = this.shadowRoot.querySelectorAll(".column-group-0");

            window.addEventListener("scroll", () => {
                self.scrollAppear();
            });
        }
    }

    getGroupTitles(detailsObject) {
        return Object.keys(detailsObject);
    }

    _getData(key) {
        return this.e.details[key];
    }

    _computeData(index) {
        return this.data[index];
    }

    _rowsOrColumns(cData) {
        if (cData === undefined) {
            return;
        }
        return cData.length;
    }

    getTitle(text) {
        let [title, subtitle] = text.split("|");
        return title;
    }

    getSubTitle(text) {
        let [title, subtitle] = text.split("|");
        return subtitle;
    }

    scrollAppear() {
        const self = this;

        let contentContainer = self.shadowRoot.querySelector(".price-content");
        let contentStartPosition = contentContainer.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 2;

        if (contentStartPosition < screenPosition) {
            contentContainer.classList.add("animate1-appear");
        }
    }

    onLoadData(dsc) {
        super.onLoadData(dsc);
    }

    renderDefault() {
        return html`
            <div class="price-content">
                ${this.e.details && this.getGroupTitles(this.e.details).map(
                    (group, index) => html`
                        <div class="row">
                            <div class="col-md-12 group-summary">
                                <p class="title is-3">${this.getTitle(group)}</p>
                                <p class="subtitle is-5">${this.getSubTitle(group)}</p>
                            </div>
                        </div>

                        <div class="columns is-multiline container-group-${index}">
                            ${this._getData(group).map(
                                (item, index) => html`
                                    <div class="column card is-flex">
                                        <div class="block item-index" style="padding: 0;">
                                            ${index + 1}
                                        </div>
                                        <div class="block" style="margin:0;">
                                            <h2 class="title is-6">${item.name}</h2>
                                        </div>
                                        <div class="block" style="margin:0;">
                                            <p class="subtitle is-5">${item.description}</p>
                                        </div>
                                        <div class="block" style="margin:0;">
                                            <p class="title is-6">${item.count}</p>
                                        </div>
                                        <a
                                            href="${item.kind}"
                                            target="_blank"
                                            class="button"
                                            service="${item.kind}"
                                            @click="${this.launchService}"
                                        >
                                            <p class="subtitle is-4">BUY</p>
                                        </a>
                                    </div>
                                `
                            )}
                        </div>
                    `
                )}
            </div>
        `;
    }
}

customElements.define(PriceTable.is, PriceTable);
