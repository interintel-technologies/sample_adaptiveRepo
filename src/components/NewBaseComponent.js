import { LitElement, html, css } from 'lit-element';

class NewBaseComponent extends LitElement {
  static get properties() {
    return {
      e: { type: Object },
      rows: { type: Array },
      cols: { type: Array },
    };
  }

  constructor() {
    super();
    this.e = null;
    this.rows = [];
    this.cols = [];
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      this.onEChange();
    }
    if (changedProperties.has('rows')) {
      this.onRowsChange();
    }
    if (changedProperties.has('cols')) {
      this.onColsChange();
    }
  }

  onEChange() {
    // Implement logic to handle changes to the 'e' property
    console.log('e property changed:', this.e);
  }

  onRowsChange() {
    // Implement logic to handle changes to the 'rows' property
    console.log('rows property changed:', this.rows);
  }

  onColsChange() {
    // Implement logic to handle changes to the 'cols' property
    console.log('cols property changed:', this.cols);
  }
}

export default NewBaseComponent;
