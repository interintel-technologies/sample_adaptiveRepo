import {html, css, unsafeCSS} from 'lit-element';
import {HeroElement2Styles} from './hero-element-2-css'
import globalStyles from '../../App.css?raw';
import { BaseElement } from '../../core/base-element';

class HeroElement2 extends BaseElement{

    static get styles() {
        return [
          unsafeCSS(globalStyles),
          HeroElement2Styles,
          css`
            :host {
              display: block;
            }
          `
        ];
      }
    constructor(){
        super();
    }

    render(){
        return html`
       
        <div class="ii__canvas-hero">
            <canvas></canvas>
            <div class="ii__hero-container">
                <h1 class="ii__hero--text has-text-centered">Building innovative systems with easy integration</h1>
                <p class="ii__paragraph has-text-centered">
                        amet consectetur adipisicing elit. Veniam rem quisquam impedit
                </p>

                <div class="ii__hero--footer-button">
                    <a href="#services" class="ii__button ii__button--ctaviolet u-mr14 wa_inline-block is-">Learn More</a>
                </div>
                <!-- <div class="scroll"> -->
                <p class="has-text-centered has-text-weight-bold" style="margin-top: 100px; margin-left: 45px;">SCROLL</p>
                <div class="scroll-indicator fa fa-chevron-down"></div>
                <!-- </div> -->
            </div>
        </div>
        `
    }

    static get is(){
        return `hero-element-2`;
    }
}
 
customElements.define(HeroElement2.is, HeroElement2)