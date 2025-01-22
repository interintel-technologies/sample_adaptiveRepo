import { html, css, LitElement, unsafeCSS } from 'lit';
import { FlexiRadioButtonsStyle } from './flexi-radio-buttons-css'; 
import { FlexiRadioButtonsBase } from '../../base/elements/flexi-radio-buttons'; 
import globalStyles from '../../App.css?raw';

class FlexiRadioButtons extends FlexiRadioButtonsBase {
    static get properties() {
        return {
            e: { type: Object }, 
        };
    }

  
    constructor() {
    super();
    this.value = '';
    this.e = null // Initialize with default structure
  }

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      FlexiRadioButtonsStyle,
    ];
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  static get is() {
    return 'flexi-radio-buttons';
  }

  firstUpdated() {
    console.log('Component first updated with details:', this.e.details);
    // Handle initial setup
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      console.log('Component updated with new details:', this.e.details);
      // Handle updates when `e` changes
    }
  }

  render() {
    if (!this.e.details) {
      return html`<p>Details not provided.</p>`; 
    }

    return html`
      <div class="flexi-container ${this.e && this.e.details.orientation}">
        <form class="control">
          ${this.e && this.e.details.options.map(option => html`
            <div class="form-group ${this.e.details.type}">
              <input 
                type="${this.e.details.type}" 
                name="flexi-radio-buttons" 
                id="${option.value}" 
                value="${option.value}" 
                ?checked="${this.value === option.value}" 
                @change="${this.handleChange}">
              <label for="${option.value}">${option.label}</label>
            </div>
          `)}
        </form>
      </div>
    `;
  }
}

customElements.define(FlexiRadioButtons.is, FlexiRadioButtons);
