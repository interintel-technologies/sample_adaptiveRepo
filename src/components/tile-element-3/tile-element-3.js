import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { TileElement3Styles } from './tile-element-3-css';
import globalStyles from '../../App.css?raw'

export class TileElement3 extends LitElement {

    static get styles() {
        return [
            css`
            `,
            unsafeCSS(globalStyles),
            TileElement3Styles
         
        ];
      }

      static get properties() {
        return {
            initialsArray:Array,
            rows:Array,
            themeBackgroundColor: { type: String }
        };
       }

    render () {
        return ( html`
            <div class="content">
                <div class="columns is-mobile is-multiline">
                    ${
                       this.rows && this.rows.map(tile=>html`
                            <div class="tile-container column tile is-flex is-one-quarter-desktop is-half-mobile animate-appear my-2">
                                <img class="image" src="/media/${tile[3]}" />
                                <h3 class="tile-title is-6">${tile[1]}</h3>
                                <p class="tile-subtitle is-6">${tile[2]}</p>
                            </div>
                        `)
                    }
                </div>
            </div>
        `);
    }
}

customElements.define('tile-element-3',TileElement3);