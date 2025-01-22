import {html, css, unsafeCSS} from 'lit-element';
import {HeroElement3Styles} from './hero-element-3-css';
import { BaseElement } from '../../core/base-element';
import globalStyles from '../../App.css?raw';

class HeroElement3 extends BaseElement {

    static get is() {
        return `hero-element-3`;
    }

      updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('cols')) {
            const parallax  = this.shadowRoot.querySelector(".parallax");
            parallax.style.backgroundImage = `url(${this.e.details.bg_image})`;
            }
    }

    // firstUpdated(changedProperties) {
    //     super.firstUpdated(changedProperties);
    // }

    topText(text) {
        const words = text.split(" ");
        return words.slice(0, 3).join(" ");
    }
    
    midText(text) {
        const words = text.split(" ");
        return words.slice(3).join(" ");
    }
    

    static get styles() {
        return [
          unsafeCSS(globalStyles),
          HeroElement3Styles,
          css`
            :host {
              display: block;
            }
          `
        ];
    }

    render() {
        return html`
            <style>
                .parallax {
                    /* Create the parallax scrolling effect */
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    /* Ensure the parallax effect is contained within its container */
                    position: relative;
                    width: 100%;
                    height: 100%; /* Adjust height based on the container */
                    opacity: 0.68;
                    filter: blur(7px);
                    box-shadow: 0px 3px 6px #00000029;
                }
            </style>

            ${this.e && this.e.details.hide_filter ? html`` : html`
                <style>
                    .parallax {
                        opacity: 0.68;
                        filter: blur(7px);
                    }
                </style>
            `}

            <div class="hero-container" style="margin-top: ${this.e && this.e.details.margin_top}">
                <div class="parallax"></div>
                <div class="container">
                    <div class="column">
                        <h1 class="c-title-xl">${this.topText(this.e && this.e.name)}</h1>
                        <h1 class="mid-text">${this.midText(this.e && this.e.name)}</h1>
                        <p class="c-paragraph">${this.e && this.e.defaultValue}</p>
                        <a 
  href="${this.e && this.e.details.path}" 
  class="button str-btn" 
  style="background-color: var(--app-secondary-color)"
>
  ${this.e && this.e.details.button_title}
</a>
                    </div>
                </div>
            </div>
        `;
    }

  
}

customElements.define(HeroElement3.is, HeroElement3);
