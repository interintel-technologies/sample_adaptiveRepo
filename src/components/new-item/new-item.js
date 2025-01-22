import { html,css,  LitElement, unsafeCSS } from 'lit-element';
import { NewItemStyles } from './new-item-css';
import globalStyles from '../../App.css?raw'

export class NewItem extends LitElement{

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            NewItemStyles,
            css`
            :host {
                display: block;
            }
            `
        ];
    }

    static get properties() {
        return {
            e: { type: Object },
        };
    }

    constructor () {
        super();
        this.e = null;
    }
    
    /**
        -for the image use details
        -for title use Page input name
        -for content use default value
     */

        updated(changedProperties) {
            if (changedProperties.has('e')  )  {
              
                
              
            }}


    render() {
        return html`
            <div class="columns is-multiline is-gapless">
                <img class="column new-item-image" src="${this.e.details.shop_image}"/>
                <div class="column">
                    <div class="new-item-tag">
                        NEW
                    </div>
                    <h3 class="new-item-title">
                        ${this.e.name}          
                    </h3>
                    <p class="new-item-description">
                        ${this.e.defaultValue}
                    </p>
                    <button class="watch-now-button">
                        Watch now
                    </button>
                </div>
            </div>
        `
    };
    static get is() {
        return 'new-item';
    }
}	
customElements.define(NewItem.is,NewItem)