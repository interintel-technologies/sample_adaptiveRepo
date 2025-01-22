import {MultilineChartBase} from '../../base/elements/multiline-chart';
import {html, css, unsafeCSS} from 'lit-element';
import {MultiLineChartStyles} from './multiline-chart-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MultilineChart extends MultilineChartBase {
  static get styles(){
    return[
      unsafeCSS(globalStyles),
      MultiLineChartStyles,
      css`
      :host{
        display: block;
      }
      `
    ]
  }
  constructor() {
    super();
    this.rows = [];
    this.cols = [];
    this.e = null;
  }

  static get properties() {
    return {
        rows: { type: Array },
        e: { type: Object },
        cols: { type: Array },
    };
}

updated(changedProperties) {
  if (changedProperties.has('e') || changedProperties.has('cols')) {
      console.log("Updated properties:", this.cols, this.rows, this.e);
  }
}


  render() {
    if (this.rows===undefined || this.q===undefined) {
      return html``;
    }

    return html`
   <div class="column">
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <label class="form-label">${this.e.name}</label>
   <div class="select is-fullwidth">
  <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
    ${this._computeItems(this.rows, this.q).map((data) => html`<option value="${data[0]}">${this._dataJoined(data)}</option>`)}
  </select>
</div>
  </div>
  </div>`;
  }
}

customElements.define(MultilineChart.is, MultilineChart);
