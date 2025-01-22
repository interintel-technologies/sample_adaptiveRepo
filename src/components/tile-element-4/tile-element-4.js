import {html, css, LitElement, unsafeCSS} from 'lit-element';
import { TileElement4Styles } from './tile-element-4-css';
import globalStyles from '../../App.css?raw'

class TileElement4 extends LitElement{

     static get styles(){
          return [
               unsafeCSS(globalStyles),
               TileElement4Styles, 
               css`
               :host{
                    display:block;
               }`
          ];
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
  
      updated(changedProperties) {
          if (
              changedProperties.has('columns') ||
              changedProperties.has('rows') ||
              changedProperties.has('e')
          ) {
            
  
          }
      }


     static get is() {return 'tile-element-4';}

     render(){
          return html`
               <div class="content">
                    <section class="hero-body">
                         <div class="columns is-multiline">
                              ${
                                   this.rows.map(tile=>html`
                                        <div class="column is-4">
                                             <div class="content is-flex">
                                                  <div class="image-container is-flex">
                                                       <img class="image" src="/media/${tile[3]}"/>
                                                  </div>
                                                  <h4>${tile[1]}</h4>
                                                  <hr >
                                                  <p >${tile[2]}</p>
                                             </div>
                                        </div>
                                   `)
                              }
                         </div>
                    </section>
               </div>
               
          `
     }
}
customElements.define(TileElement4.is, TileElement4);
