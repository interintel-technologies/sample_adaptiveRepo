import { css, html, LitElement,unsafeCSS } from 'lit-element';
import { BlobElementStyles } from './float-summary-css';
import globalStyles from '../../App.css?raw';

class BlobElement extends LitElement {
  static get properties() {
    return {
      details: { type: Object }
    };
  }

  constructor() {
    super();
    this.details = {};
  }

  static get styles() {
    return [unsafeCSS(globalStyles),BlobElementStyles];
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    
    if (this.e) {
      this.e.details = this.e.details;
    }
  }

  render() {
    return html`
      <div class="content">
        <a target="_blank" href="${this.details && this.details.link?.path}" title="${this.details && this.details.link?.label}">
          <div class="blobDiv columns">
            
            <div class="column is-6 descCol">
              <div class="blob">
                <h3>${this.details && this.details.link?.title}</h3>
                <p>${this.details && this.details.link?.subtitle}</p>
              </div>
            </div>
            <div class="column is-6 circleCol">
              <div class="circle">
                <img src="https://i.postimg.cc/k5ZLTHK9/fcf475bc-7cf6-411d-9276-c98bf7a22a83-removebg-preview.png">
              </div>
            </div>
          
            <!-- <div class="inward-semicircle"></div> -->
           
          </div>
        </a>
      </div>
    `;
  }
}

if (!customElements.get('blob-element')) {
  customElements.define('blob-element', BlobElement);
}