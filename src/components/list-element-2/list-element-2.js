import { html, css, unsafeCSS, LitElement } from 'lit-element';
import { ListElement2Styles } from './list-element-2-css';
import globalStyles from '../../App.css?raw';

export class ListElement2 extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            ListElement2Styles
        ];
    }

    static get properties() {
        return {
            rows: { type: Array },
            e: { type: Object }
        };
    }

    static get is() {
        return 'list-element-2';
    }

    constructor() {
        super();
        this.searchText = '';
        this.rows = [];
        this.e = null;
    }

    render() {
        // Dynamically split name into parts
        const nameParts = this.e && this.e.name ? this.e.name.split(' ') : [];

        return html`
        <div class="content">
            <div class="columns">
                <div class="column is-half">
                    <div class="">
                        <div class="heading">
                            <h1>
                                ${nameParts.map((part, index) => html`
                                    <span class="${index === 1 ? 'color-primary' : ''}">
                                        ${part}
                                    </span>
                                `)}
                            </h1>
                        </div>
                        <ul class="pointsList">
                            ${
                                this.rows.map(row => html`
                                    <li class="">
                                        <p class="pl-5">${row}</p>
                                    </li>
                                `)
                            }
                        </ul>
                    </div>
                </div>
                <div class="column is-half responsive-image-holder">
                    <img class="ml-5 responsive-image" src="/static/dsv3.0/images/web/choose.png" alt="Choose Image" />
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define(ListElement2.is, ListElement2);
