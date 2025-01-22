import {html, css, unsafeCSS, LitElement} from 'lit-element';
import { InfoCta3Styles } from './info-cta-3-css';
import globalStyles from '../../App.css?raw';
import { InputDefaultStyles } from '../../styles/input-shared-default';
import { InputLabelAnimationtStyles } from '../../styles/input-label-animation';

class InfoCta3 extends LitElement{

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            InfoCta3Styles,
            InputDefaultStyles,
            InputLabelAnimationtStyles,
            css`
                :host {
                display: block;
                }
            `
        ];
      }

      static get properties() {
        return {
          e: { type: Object }
        };
      }
    
      constructor() {
        super();
        this.e = {};
      }

    static get is(){
        return 'info-cta-3'
    }

    updated(changedProperties) {
        if (changedProperties.has('e')) {
            const self = this;
     
            window.addEventListener('scroll',()=>{
                self.scrollAppear();
            });
        }
      }


    scrollAppear(){
        const self = this;
        let contentContainer = self.shadowRoot.getElementById('animate1');
        let screenShotContainer = self.shadowRoot.getElementById('animate2');

        let contentStartPosition = contentContainer.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if(contentStartPosition < screenPosition){
            contentContainer.classList.add('animate1-appear');
            screenShotContainer.classList.add('animate2-appear');
        }
        
    }

    render(){
        return html`
            <div class="hero is-halfheight">
                <div class="columns">
                        <div id="animate2" class="column screen-shot">
                            <img src="${this.e.details.screen_shot}" />
                        </div>
                        <div id="animate1" class="column is-flex content-container content">
                            <h3>${this.e.name}</h3>
                            <h6>${this.e.defaultValue}</h6>
                            <div class="stores is-flex">
                                <a href="${this.e.details.google_play}"><img src="src/themes/dsv1.0/img/isometic/google-play-badge.svg" class="badge" alt="App Store"/></a>
                                <a href="${this.e.details.app_store}"><img src="src/themes/dsv1.0/img/isometic/app-store-badge.svg"  class="badge" alt="Google Play"/></a>
                            </div>
                        </div>
                    </div>
            </div>
        `;
    }
}

customElements.define(InfoCta3.is, InfoCta3)