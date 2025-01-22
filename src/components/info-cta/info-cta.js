import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { InfoCtaStyles } from './info-cta-css';
import globalStyles from '../../App.css?raw';


class InfoCta extends LitElement {
  static get properties() {
    return {
      e: { type: Object }
    };
  }

  constructor() {
    super();
    this.e = {};
  }

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      InfoCtaStyles,
    ];
  }

  render() {
    return html`
      ${Object.keys(this.e).length > 0 ? html`
        <div class="content">
          <div class="main-container is-flex" data-aos="fade-right">
            <div class="mipay-info-cta"></div>
            <div class="container">
              <div class="columns">
                <div id="animate2" class="column screen-shot">
                  <img src="/static/dsv3.0/images/web/nena_splash_2.png" />
                </div>
                <div id="animate1" class="column is-flex content-container">
                  <div class="heading">
                    <h1 class="title">${this.e.name}</h1>
                  </div>
                  <p>${this.e.defaultValue}</p>
                  <div class="info-btn">
                    <a href="${this.e.details.path}" target="_blank" class="button btn">${this.e.details.button_title}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ` : html`
        <p>Loading data...</p>
      `}
    `;
  }
}

customElements.define('info-cta', InfoCta);
