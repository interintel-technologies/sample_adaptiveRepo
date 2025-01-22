import {html, css} from 'lit-element';
import 'fa-icons';
import {ChartMixinStyles} from '../../styles/chart-mixin-styles-css';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/


export const ChartStyleMixin = (BaseClass) => class extends BaseClass {
    static get styles() {
        return [
          ChartMixinStyles,
            css`
                :host {
                display: block;
                }
            `
        ];
    }
    render() {
        return html`
          <script src="https://d3js.org/d3.v6.min.js"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">      
          <div class="chart-container">
            <div id="chart" class="card is-flex content"></div>
          </div>
        `;
    }

  static get properties() {
    return {
      'icon': Boolean,
      'rounded': Boolean,
      'large': Boolean,
      'size': String,
      'color': String // 32,36,46
    };
  }

  constructor() {
    super();
    this.icon = false;
    this.rounded = false;
    this.large = false;
    this.size = 32;
    this.color = '#0040bf';
    this.type = '';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if(this.chartSummaryDetails) {
      this.shadowRoot.querySelector(".card").setAttribute("style", "box-shadow: none");
    }
  }

  _onAction(evt) {
    switch (this.action) {
    case ACTION_SERVICE_CALL:
      this.pl._dialog(this.e.service, this.params);
      break;
    case ACTION_LINK_WINDOW:

      break;
    case ACTION_SUBMIT:
    default:
      this.pl.submitForm();
    }
  }
};
