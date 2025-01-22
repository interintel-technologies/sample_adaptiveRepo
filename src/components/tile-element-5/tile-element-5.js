import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { TileElement5Styles } from './tile-element-5-css';
import globalStyles from '../../App.css?raw'

export class TileElement5 extends LitElement{
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            TileElement5Styles,
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
            contrast:{type:String}          
        };
    }

    updated(changedProperties) {
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            console.log("this contrast is ",this.contrast);
            

        }
    }
    
    onCardMouseOver (index) {
        const title = this.shadowRoot.querySelector("#title"+index);
        title.classList.add("active");
    }
    onCardMouseOut (index) {
        const title = this.shadowRoot.querySelector("#title"+index);
        title.classList.remove("active");
    } 

    static get is() {
        return "tile-element-5";
    }

    render () {
        return ( html`
            <div class="content">
                <div class="hero-body">
                    <div class="columns content">
                        <div class="column is-2">
                            <div class="column nav">
                                <div class="column">
                                    ${
                                        this.rows.map((tile,index)=>html`<h5 id="title${index}">${tile[1]}</h5>`)
                                    }
                                </div>
                                <div class="image-container is-flex">
                                    <img src="${this.e.details.image}"/> 
                                </div>                     
                            </div>
                        </div>
                        <div class="column is-9">
                            ${
                                this.rows.map((tile,index)=>html`
                                    <div class="card" 
                                        @mouseover=${()=>this.onCardMouseOver(index)}
                                        @mouseout=${()=>this.onCardMouseOut(index)}
                                    >
                                        <div class="card-content">
                                            <h4>${tile[1]}</h4>
                                            <p>${tile[2]}</p>
                                        </div>
                                    </div>
                                `)
                            }
                        </div>
                    </div>                
                </div>
            </div>
        `);
    }
}

customElements.define(TileElement5.is,TileElement5);