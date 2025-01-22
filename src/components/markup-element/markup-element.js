import { html, css, unsafeCSS } from "lit-element";
import { MarkupElementBase } from "../../base/elements/markup-element";
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MarkupElement extends MarkupElementBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      this.shadowRoot.querySelector("#content").innerHTML = unescape(this.e.defaultValue);

    }}

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);

  //   this.shadowRoot.querySelector("#content").innerHTML = unescape(this.markup);
  // }

  render() {
    return html` <div id="content"></div> `;
  }
}

customElements.define(MarkupElement.is, MarkupElement);
