import { LitElement, html, css, unsafeCSS } from 'lit';
import './rte.js'; // Ensure this file exports RichTextEditor globally
import './pell.js';
import './plugins/all_plugins.js';
import { richTextEditorStyles } from './rich-text-editor-css.js';
import globalStyles from '../../App.css?raw';

class RichTextEditorComponent extends LitElement {
  static get styles() {
    return [unsafeCSS(globalStyles), richTextEditorStyles];
  }

  static get properties() {
    return {
      initialContent: { type: String },
      maxHTMLLength: { type: Number },
      initialConfig: { type: Object },
      e: { type: Object }
    };
  }

  constructor() {
    super();
    this.initialContent = '';
    this.maxHTMLLength = 1;
    this.initialConfig = {};
    this.e = null;
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
     
    }
  }

  firstUpdated() {
    // Load external scripts if necessary
    import('./rte');
    import('./pell');
    // import('./rte_theme_default.css');
    import('./plugins/all_plugins.js');

    const editorContainer = this.shadowRoot.getElementById('editor-container');

    // Initialize the RichTextEditor with maxHTMLLength option
    this.editor = new RichTextEditor(editorContainer, {
      // Configuration goes here
    });
  }

  render() {
    return html`
      <div id="editor-container" required="${this.e.required}" data-name="${this.e.formName || ''}"></div>
    `;
  }
}

customElements.define('rich-text-editor', RichTextEditorComponent);
