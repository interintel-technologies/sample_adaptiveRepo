import {html, css, unsafeCSS, LitElement} from 'lit-element';
import { ListElement5Styles } from './list-element-5-css';
import globalStyles from '../../App.css?raw';

export class ListElement5 extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            ListElement5Styles
        ];
    }

    constructor() {
        super();
        this.searchText = '';
        this.rows = [];
        this.cols = [];
        this.e = null;
    }

    static get properties() {
        return {
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        };
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col => col.label === columnLabel); 
    }

    formatPrice(value) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(value);
    }

    // updated(changedProperties) {
    //     if (changedProperties.has('e') || changedProperties.has('cols')) {
    //         console.log("Updated properties:", this.cols, this.rows, this.e);
    //     }
    // }

    static get is() {
        return 'list-element-5';
    }

    onBtnClickHandler(service, id) {
      this._dialog(service,id)
    }

    render() {
        return html`
        <div class="">
                <div class="card">
                <div class="columns is-flex px-2" style="justify-content: space-between">
                <div class="column is-three-quarters">
                    <h6 class="card-header-title">${this.e?.name || ''}</h6>
                    <p @click=${() => this.onBtnClickHandler(this.e.details.populate)} class="card-header-subtitle">Click to populate</p>
                </div>
                <div class="column is-one-quarter has-text-right">
                    ${this.rows.length > 0 ? html`
                        <a target="_blank" href="${this.e?.details?.link?.path || '#'}" title="${this.e?.details?.link?.label || ''}" class="card-header-link">View all</a>
                    ` : ''}
                </div>
            </div>
            
                    <div class="card-content">
                    ${this.rows.map(row => html`
                        <article id="${row[this.getIndexByColumnLabel("id")]}" class="media">
                            <!-- <div class="media-left">
                                <div class="round-background"></div>
                            </div> -->
                            <div class="media-content is-flex">
                                <div>
                                    <h5>${row[this.getIndexByColumnLabel("label")]}</h5>
                                    <small>${row[this.getIndexByColumnLabel("date")]}</small>
                                </div>
                                <div class="right-align">
                                    <a @click=${() => this.onBtnClickHandler(this.e.details.view, row[this.getIndexByColumnLabel("id")])}>
                                        KES ${row[this.getIndexByColumnLabel("value")]}
                                    </a>      
                                </div>
                            </div>
                        </article>
                    `)}
                    </div>
                </div>    
        </div>
        `;
    }
}

customElements.define(ListElement5.is, ListElement5);
