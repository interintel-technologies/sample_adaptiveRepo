import {html} from 'lit-element';
import './phone';
import {UssdSimulatorBase} from '../../../../../elements/base/ussd-simulator';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/


class UssdSimulator extends UssdSimulatorBase {
  constructor(props) {
    super(props);
    this.msisdn = '';
    this.state = 0;
  }

  static get properties() {
    return {
      msisdn: String,
      state: Number,
    };
  }

  renderDefault() {
    let page;

    if (this.state === 0) {
      page = html`
              <input type="text" placeholder="Enter Phone" id="phone"> 
              <button @click=${this._init}>Start</button>
            `;
    } else if (this.state === 1) {
      page = html`
            <!--<ussd-simulator-display></ussd-simulator-display>-->
            <!--code dial-->
            <!--<ussd-simulator-keypad></ussd-simulator-keypad>-->
            <nexus-4 .el=${this} msisdn=${this.msisdn}></nexus-4>
            `;
    } else {
      page = html``;
    }

    return html`
        <div style="margin-top: 40px;margin-left: auto;margin-right: auto;">
        
        ${page}       
        </div>
        `;
  }

  _init() {
    // this.makeRequest();
    var phone = this.shadowRoot.querySelector('#phone');

    let msisdn = phone.value;
    if (msisdn.startsWith('+')) {
      msisdn = msisdn.substring(1);
    } else if (msisdn.startsWith('0')) {
      msisdn = '254'+msisdn.substring(1);
    }

    this.msisdn = msisdn;
    this.state = 1;
  }

  // TODO this is duplicated some other place
  // should be a util
  serialize( obj ) {
    const str = '?' + Object.keys(obj).reduce(function(a, k) {
      a.push(k + '=' + encodeURIComponent(obj[k]));
      return a;
    }, []).join('&');
    return str;
  }
}
window.customElements.define(UssdSimulator.is, UssdSimulator);
