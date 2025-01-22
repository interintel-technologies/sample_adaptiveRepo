
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import { DastasourceTable2FooterStyles } from './datasource-table2-footer-css';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
import globalStyles from '../../../../App.css?raw';
import { DatalistFooterStyles } from '../../datalist-footer-css';

export class DatasourceTable2Footer extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DatalistFooterStyles,
            DastasourceTable2FooterStyles,
            css`
                :host {
                display: block;
                }
            `
        ];
    }

    constructor() {
        super();
        this.availableSize = [];
        this.size = 50;
    }

    static get is() {
        return 'datasource-table2-footer';
    }

    static get properties() {
        return {
            footerPosition: String,
            size: {
                type: Number,
            },
            page: {
                type: Number,
            },
            totalElements: {
                type: Number,
            },
            totalPages: {
                type: Number,
            },
            availableSize: Array,
        };
    }

    _dropdownReveal(){
        const drp = this.shadowRoot.querySelector('.p-dropdown');
        switch (drp.style.display) {
            case 'block':
                drp.style.display = 'none';
                break;
            default:
                drp.style.display = 'block';
            break;
        }
    }

    _computeCurrentSize(page, size) {
        return (page-1) * size + 1;
    }

    _computeCurrentMaxSize(page, size, totalElements) {
        const maxSize = size * (page );
        return maxSize > totalElements ? totalElements : maxSize;
    }

    _nextPage() {
        if (this.page < this.totalPages) {
            this.page = this.page + 1;
        }
        this.dispatchEvent(new CustomEvent('n-page', {
            detail: {
                page: this.page,
            },
        }));
    }

    _prevPage() {
        if (this.page-1 > 0) {
            this.page = this.page - 1;
        }
        this.dispatchEvent(new CustomEvent('p-page', {
            detail: {
                page: this.page,
            },
        }));
    }

    _nextButtonEnabled(page, totalPages) {
        return page < totalPages;
    }

    _prevButtonEnabled(page) {
        return page > 1;
    }

    _newSizeIsSelected(event) {
        event.preventDefault();
        let  newSize = event.target.getAttribute("data-name")
        // const newSize = size;
        if (newSize) {
            if (this.oldPage !== null && this.oldPage !== undefined) {
                this.page = 1;
            }
            this.size = newSize;
            this.dispatchEvent(new CustomEvent('size-change', {
                detail: {
                    size: newSize,
                },
            }));
        }
    }

    _computePosition(position) {
        if (position === 'right') {
            return 'end-justified';
        }
        return '';
    }

    render() {
        return html` 
            <div class="wrapper is-flex">
                <div class="size">
                    <div class="perpage-dropdown">
                        <div class="p-display">
                            ${
                                this.availableSize.length ? html`
                                    <p class="per is-capitalized is-size-7" @click=${this._dropdownReveal}>Per Page ${this.size}</p>
                                    <div class="p-dropdown">
                                        <ul>
                                            ${
                                                this.availableSize.map((size) => html`
                                                    <li class="${size == this.size?"active-list":""}">
                                                        <a href="$1" class="is-size-7" data-name="${size}" @click="${this._newSizeIsSelected}">${size}</a>
                                                    </li>
                                                `)
                                            }
                                        </ul>
                                    </div>
                                ` : html`<p class="is-capitalized is-size-7">Per Page ${this.size}</p>`
                            }
                        </div>
                    </div>
                </div>
                <div class="range">
                    <div class="is-flex">
                        <div class="pagination-range">
                        <p class="is-size-7">${this._computeCurrentSize(this.page, this.size)} - ${this._computeCurrentMaxSize(this.page, this.size, this.totalElements)} of ${this.totalElements}</p>
                        </div>
                        <div class="is-flex pagination-buttons">
                            ${this._prevButtonEnabled(this.page)? html`<div class="left-btn btn" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}"></div>`:html`<div></div>`}
                            ${this._nextButtonEnabled(this.page, this.totalPages)? html`<div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page, this.totalPages)}"></div>` : html`<div></div>`  } 
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(DatasourceTable2Footer.is, DatasourceTable2Footer);
