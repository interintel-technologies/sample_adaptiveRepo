import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { TileElement6Styles } from './tile-element-6-css';
import bizzPng1 from '../../../images/web/nikobizz1.png';
import bizzPng2 from '../../../images/web/nikobizz2.png';
import bizzPng3 from '../../../images/web/nikobizz3.png';
import bizzPng4 from '../../../images/web/nikobizz4.png';
import globalStyles from '../../App.css?raw'

export class TileElement6 extends LitElement {
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            TileElement6Styles,
            css`
                :host {
                    display:block;
                }
            `]
    }

  
    static get properties() {
        return {
            images:Array,
            data:Array,
            columns: { type: Array },
            rows: { type: Array },
            e: { type: Object },          
        };
    }

  
    constructor() {
        super();
    
            this.images=[`${bizzPng1}`,`${bizzPng3}`,`${bizzPng2}`,`${bizzPng4}`,`${bizzPng4}`];
            this.data=[];
    }



    updated(changedProperties) {
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            this.data= this.notifications = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];

        }
    }

    getLink(text) {

        let linkToReturn = text;

        if (text.includes("|")) {
            let [label, link] = text.split('|');
            linkToReturn = link;
        }

        return linkToReturn

    }
    getTitle(text) {

        let lableToReturn = text;

        if (text.includes("|")) {
            let [label, link] = text.split('|');
            lableToReturn = label;
        }

        return lableToReturn

    }

    static get is() {
        return "tile-element-6";
    }

    render () {
        return ( html`
            <div class="content">
                <div class="hero-body">
                    ${
                        this.rows && this.rows.map((tile,index)=>html`
                            <div class="card columns">
                                <div class="column is-3-desktop">
                                    ${this.data[index].image?html`
                                        <img class="image" src="/media/${this.data[index].image}" />
                                    `:html`
                                        <img class="image" src="${this.images[index]}" />
                                    `}   
                                </div>
                                <div id="textCol" class="column content is-9-desktop" >
                                    <h4 id="title">${this.getTitle(tile[1])}</h4>
                                    <p style="margin-top: 0px;">${tile[2]}</p>
                                </div>
                            </div>
                        `)
                    }
                </div>
            </div>
        `);
    }
}

customElements.define(TileElement6.is,TileElement6);