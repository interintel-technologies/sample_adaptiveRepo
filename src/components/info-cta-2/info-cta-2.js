import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { InfoCta3Styles } from './info-cta-2-css';
import globalStyles from '../../App.css?raw';

class InfoCta2 extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            InfoCta3Styles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get is() {
        return 'info-cta-2';
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

    render() {
        const nameParts = this.e && this.e.name ? this.e.name.split(' ') : [];
        return html`
            <div class="hero is-halfheight info-cta">
                <div class="columns is-mobile is-multiline">
                    <div id="animate2" class="column screen-shot">
                        <img src="${this.e && this.e.details?.screen_shot}" alt="Screenshot" />
                    </div>
                    <div id="animate1" class="column is-12-mobile content-container content">
                        <h3>${nameParts.map((part, index) => html`
                                    <span class="${index === 0 ? 'color-primary' : ''}">
                                        ${part}
                                    </span>
                                `)}</h3>
                        <h6>${this.e && this.e.defaultValue}</h6>
                        <div class="stores">
                            <div class="stores_title">
                                <h5>Download On</h5>
                            </div>
                            <a class="button mb-5" href="${this.e && this.e.details.google_play}" target="_blank" rel="noopener noreferrer">
                                <img src='https://i.postimg.cc/L68yqnG1/playstore-removebg-preview-1.png' class="badge" alt="Google Play Store"/>
                                <span>Google Play</span>
                            </a>
                            <div class="or_div">
                                <span>OR</span>
                            </div>
                            <a class="button mt-5" href="${this.e && this.e.details.app_store}" target="_blank" rel="noopener noreferrer">
                                <img src='https://i.postimg.cc/h4XWJD6h/apple-logo-removebg-preview-1.png' class="badge" alt="App Store"/>
                                <span>App Store</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(InfoCta2.is, InfoCta2);
