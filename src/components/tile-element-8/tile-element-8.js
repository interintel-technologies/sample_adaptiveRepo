import { html, css, unsafeCSS, LitElement } from 'lit-element';
import { TileElement8Styles } from './tile-element-8-css';
import globalStyles from '../../App.css?raw';

class TileElement8 extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            TileElement8Styles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            tiles: { type: Array },
            columns: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        };
    }

    constructor() {
        super();
        this.tiles = [];
        this.columns = [];
        this.rows = [];
        this.e = null; // Default structure
    }

    updated(changedProperties) {
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            console.log("this.columns ",this.rows);
            
            this.tiles = [
                ...this.rows.map(row =>
                    Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue]))
                )
            ];
        }
    }

    static get is() {
        return "tile-element-8";
    }

    isImageFormat(icon) {
        const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg'];
        const extension = icon.split('.').pop().toLowerCase();
        return imageExtensions.includes(extension);
    }

    render() {
        return html`
           <div class="content">
                <div class="columns is-multiline" id="parentCol">
                    ${this.tiles.map(tile => html`
                        <div class="column is-3 px-2 py-3 my-2 tile">
                            <div class="imgBox p-3 mb-3">
                                ${this.isImageFormat(tile.icon)
                                    ? html`<img src="${tile.icon}" alt="${tile.name}" />`
                                    : html`
                                        <adaptive-ui-icon
                                            dataColor="var(--primary)"
                                            width="64px"
                                            height="64px"
                                            icon="${tile.icon || 'icons:MdInfo'}"
                                        ></adaptive-ui-icon>
                                      `
                                }
                            </div>
                            <h4>${tile.name}</h4>
                            <p>${tile.description}</p>
                        </div>
                    `)}   
                </div>
           </div>
        `;
    }
}

customElements.define(TileElement8.is, TileElement8);
