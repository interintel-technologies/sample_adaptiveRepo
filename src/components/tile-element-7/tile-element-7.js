
import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { TileElement7Styles } from './tile-element-7-css';
import globalStyles from '../../App.css?raw'

class TileElement7 extends LitElement {

    static get styles () {
        return [
            unsafeCSS(globalStyles),
            TileElement7Styles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        }
    }

    updated(changedProperties) {
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
        }
    }


    constructor() {
        super();
        this.columns = [];
        this.rows = [];
        this.e = null; // Default structure
    }

    static get is() {
        return "tile-element-7";
    }

    render() {
        return html`
           <div class="content">
            <div class="column">
                    <div class="columns">
                        ${
                            this.rows.map((row,index) => html`
                                <div class="column is-6 is-flex ${index % 2 === 0 ? "row-reverse" : ""}">
                                    <img src="${row[3]}"  alt="${row[1]}Image"/> 
                                    <div class="content">
                                        <h3>${row[1]}</h3>
                                        <p>${row[2]}</p>
                                    </div>
                                </div>
                            `)
                        }
                    </div>
                </div>
           </div>
        `;
    }
}

customElements.define(TileElement7.is,TileElement7)