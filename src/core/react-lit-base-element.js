import { html, css, LitElement } from 'lit';

export class ReactLitBaseElement extends LitElement {
  static get properties() {
    return {
      e: { type: Object },
      rows: { type: Array }, 
      cols: { type: Array }
    };
  }

  constructor() {
    super();
    this.e = null; // Initialize with default structure
    this.rows = [];
    this.cols = [];
  }

  // Lifecycle method called after the component is first updated
  firstUpdated() {
    console.log('Component first updated with details:', this.e);
    // Perform initial setup if necessary
  }

  // Lifecycle method called when component properties change
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('e')) {
      console.log('Component updated with new details:', this.e);
      // Perform any updates needed when `e` changes
    }
  }

  render() {
    if (!this.e) {
      return html`<p>E not provided.</p>`; 
    }
    // Default rendering logic or provide abstract method to be implemented by subclasses
    return html``;
  }
}
