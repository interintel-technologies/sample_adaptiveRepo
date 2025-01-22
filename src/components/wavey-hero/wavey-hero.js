import {html,css, LitElement, unsafeCSS} from 'lit-element';
import { WaveyHeroElementStyles } from './wavey-hero-css';
import globalStyles from '../../App.css?raw';
class WaveyHeroElement extends LitElement{

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            WaveyHeroElementStyles,
            css`
                /* :host {
                display: block;
                } */
            `
        ];
    }

    
  static get properties() {
    return {
      e: { type: Object },
      hasBlob:Boolean
    };
  }

  constructor() {
    super();
    this.e = null;
    this.hasBlob=true;
  }

    
  updated(changedProperties) {
    if (changedProperties.has('e')) {
      const hasBlob=this.e.details.blob;
      console.log(hasBlob)
      if(!hasBlob){
        this.hasBlob=false;
      }
    }
  }

    static get is(){
        return 'wavey-hero';
    }

    render(){
        return html`
            <div class="wave-container">
                <div class="columns is-vcentered">
                    <div class="column is-half">
                        <div class="content hero-titles">
                          
                            <h2 class="hero-subtitle">${this.e.defaultValue}</h2>
                            ${this.e.details.button?html`
                                <a class="button hero-button mt-2" href="${this.e.details.path}"> ${this.e.details.button} </a>
                            `:html`
                            `}
                            <h1 class="hero-title">${this.e.name}</h1>
                            
                        </div>
                    </div>
                    <div id="imgCol" class="column is-half">
                        <img src="${this.e.details.image}" alt="Your Image" class="image">
                    </div>
                </div>
            </div>
           ${this.hasBlob?html`
                 <svg id="visual" viewBox="0 0 1280 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 89L35.5 119.8C71 150.7 142 212.3 213.2 246.7C284.3 281 355.7 288 426.8 282.8C498 277.7 569 260.3 640 224.8C711 189.3 782 135.7 853.2 114.5C924.3 93.3 995.7 104.7 1066.8 126C1138 147.3 1209 178.7 1244.5 194.3L1280 210L1280 0L1244.5 0C1209 0 1138 0 1066.8 0C995.7 0 924.3 0 853.2 0C782 0 711 0 640 0C569 0 498 0 426.8 0C355.7 0 284.3 0 213.2 0C142 0 71 0 35.5 0L0 0Z" fill="var(--md-sys-color-primaryContainer)" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
            `:html``}
           
           
        `
    }
}

customElements.define(WaveyHeroElement.is, WaveyHeroElement)