import {html, css} from 'lit-element';
import {ImageElementBase} from '../../base/elements/image-element';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ImageElement extends ImageElementBase {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        img{
          width:100%;
        }
      `
    ];
  }

  static get properties() {
    return {
      e: { type: Object }, // Assuming 'e' is passed as a property
    };
  }

  constructor() {
    super();
    this.e = null;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('e')) {
      // You can add additional logic here if needed
    }
  }

  renderDefault() {
    const defaultImage = 'https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png';
    const fallbackImage = 'https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png'; // Replace with the actual fallback image URL

    return html`
      <figure class="image is-128x128">
        <img 
          src="${this.e?.defaultValue || defaultImage}" 
          @error=${(e) => e.target.src = fallbackImage} 
          alt="Image Element"
        >
      </figure>
    `;
  }
}

customElements.define('image-element', ImageElement);
