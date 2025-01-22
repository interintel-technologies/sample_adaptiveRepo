import {html, css, unsafeCSS} from 'lit-element';
import {BaseElement} from '../../core/base-element';
import {HeroBannerStyles} from './hero-banner-css'
import globalStyles from '../../App.css?raw';

class HeroBanner extends BaseElement{
    static get styles() {
        return [
          unsafeCSS(globalStyles),
          HeroBannerStyles,
          css`
            :host {
              display: block;
            }
          `
        ];
      }

      constructor() {
        super();
        this.e = {};
        this.image = "";
      }

      static get properties() {
        return {
          image: String,
          e: { type: Object }
        };
      }
      
      
    render(){
      return html`
        <style>
.parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: 0px 3px 6px #00000029;
    filter: blur(7px);
}
        </style>
        <div class="hero-container" style="margin-top: ${this.e.details.margin_top}">
          <div class="parallax" ></div>
            <div class="container">
              <div class="column">
                <h1 class="c-title-xl">${this.e.name}</h1>
                <p class="c-paragraph">${this.e.defaultValue}</p>
                <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
              </div>
            </div>
          </div>
        </div>
      `
    }

    static get is(){
        return `hero-banner`;
    }
}

customElements.define(HeroBanner.is, HeroBanner)