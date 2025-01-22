import {LitElement, html,css} from 'lit-element';
import './simulator-preview';

import {
  CONNECTION_END,
  CONNECTION_BEG, CONNECTION_CON,
} from './simulator-preview';
import {Logger} from '../../../../../core/logger';
import {PhoneStyles} from './phone-css';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Nexus4 extends LitElement {
  constructor(props) {
    super(props);
    this.isLoading = false;
    this.state = 0;
    this.ussdString = '';
    // generate a random string of X chars
    this.session = '';
    this.sessionState = CONNECTION_BEG;
  }

  static get styles() {
    return [
      PhoneStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      session: String,
      msisdn: String,
      serviceCode: String,
      ussdString: String,
      sessionState: String,
      isLoading: Boolean,
      dialed: Boolean,
    };
  }

  render() {
    return html`
    <div> ${this.isLoading ? html`Loading ...` : html``} </div>

        <div class="nexus">
	<div class="speaker"></div>
	<div class="screen">
		<div class="phone-infos">
			<span>03.15</span>
			<span class="battery"></span>
			<span class="gsm">
				<b class="signal1"></b>
				<b class="signal2"></b>
				<b class="signal3"></b>
				<b class="signal4"></b>
			</span>
		</div>
		<ul class="phone-tabs">
			<li class="current">
				<a class="getphone" @click=${this.currentTab} data-t='phone'><i class="icon phone"></i></a>
			</li>
			<li>
				<a class="getclock" @click=${this.currentTab} data-t='clock'><i class="icon clock"></i></a>
			</li>
			<li>
				<a class="getpeoples" @click=${this.currentTab} data-t='people'><i class="icon peoples"></i></a>
			</li>
		</ul>
		<div class="phone-tab-contents">
			<div class="tab phone current">
				<div class="number-area">
					<span id="code" class="numbers"></span>
					<a class="delete-btn" @click=${this.delete}>
					<i class="icon close">x</i>
					</a>
				</div>
				<div class="numbers-container">
					<span @click=${this.pusher} data-v=1 >1<em class="brd">o o</em></span>
					<span @click=${this.pusher} data-v=2>2<em>ABC</em></span>
					<span @click=${this.pusher} data-v=3>3<em>DEF</em></span>
					<span @click=${this.pusher} data-v=4>4<em>GHI</em></span>
					<span @click=${this.pusher} data-v=5>5<em>JKL</em></span>
					<span @click=${this.pusher} data-v=6>6<em>MNO</em></span>
					<span @click=${this.pusher} data-v=7>7<em>PQRS</em></span>
					<span @click=${this.pusher} data-v=8>8<em>TUV</em></span>
					<span @click=${this.pusher} data-v=9>9<em>WXYZ</em></span>
					<span class="fff" @click=${this.pusher} data-v=*>*</span>
					<span @click=${this.pusher} data-v=0>0<em>+</em></span>
					<span class="fff" @click=${this.pusher} data-v=#>#</span>
				</div>
				<div class="call-btn" @click=${this._callCode}>
					<i class="icon phone"></i>
				</div>
			</div>
			<div class="tab clock">
				<p>History</p>
				<p>Under Development</p>
			</div>
			<div class="tab peoples">
				<p>Contacts</p>
				<p>Under Development</p>
			</div>
		</div>
		<ul class="main-btns">
			<li><a><i class="icon back"><</i></a></li>
			<li><a><i class="icon home"></i></a></li>
			<li><a><i class="icon windows"></i></a></li>
		</ul>

    <ussd-simulator-preview ?active=${this.dialed}
            id="preview"
            @submit=${this.handleSubmit} 
            @cancel=${this.handleCancel}></ussd-simulator-preview>
	</div>
        
</div>
    `;
  }

  /*	Pusher	*/
  pusher(evt) {
    var num = evt.currentTarget.dataset['v'];
    const display = this.shadowRoot.querySelector('.number-area .numbers');
    display.innerHTML += '' + num + '';
  }

  /*	Delete */
  delete(evt) {
    const display = this.shadowRoot.querySelector('.number-area .numbers');
    var numbers = display.textContent;
    var numbers2 = numbers.length;

    display.innerHTML = numbers.substr(0, numbers2 - 1);
  }

  makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  _callCode() {
    var code = this.shadowRoot.querySelector('#code');
    const codeV = code.textContent;

    // remove * at begining
    // TODO deprecated, left for reference
    // if (codeV.startsWith('*'))
    // {codeV = codeV.slice(0, 0) + codeV.slice(1, codeV.length);}

    // remove # at end
    // TODO deprecated, left for reference
    // if (codeV.endsWith('#')) {
    //   codeV = codeV.slice(0, codeV.length - 1)
    //     + codeV.slice(codeV.length, codeV.length);
    // }

    this.serviceCode = codeV;

    // generate session id
    this.session = `EM${this.makeid(8)}`;

    this.makeRequest().then(preview => {
      this.state = 2;
      this.dialed = true;
      return this.updateComplete.then(() => {
        this.displayMenu(
          preview['PAGE_STRING'],
          preview['MNO_RESPONSE_SESSION_STATE']
        );
      });
    });
  }

  makeRequest() {
    var params = {
      'MSISDN': this.msisdn,
      'accessPoint': this.serviceCode,
      'sessionID': this.session,
      'input': this.ussdString,
      'sessionState': this.sessionState,
    };
    this.isLoading = true;
    return this.el.makeRequest(params);
  }

  handleSubmit(event) {
    const selection = event.detail['selection'];

    if (this.ussdString) {
      this.ussdString += ('*' + selection);
    } else {
      this.ussdString = selection;
    }

    this.makeRequest().then(preview => {
      this.displayMenu(
        preview['PAGE_STRING'],
        preview['MNO_RESPONSE_SESSION_STATE']
      );
    });
  }

  handleCancel(evt) {
    this.dialed = false;
    // clear preview for next dial
    this.updatePreview('');
  }

  updatePreview(message) {
    const prvw = this.shadowRoot.querySelector('#preview');
    prvw.updateDisplay(message);
  }

  displayMenu(string, sessionState) {
    this.isLoading = false;
    if (sessionState == CONNECTION_END) {
      const prvw = this.shadowRoot.querySelector('#preview');
      this.sessionState = CONNECTION_END;
      prvw.setState(this.sessionState);
    } else if (sessionState == CONNECTION_BEG) {
      this.sessionState = CONNECTION_BEG;
    } else if (sessionState == CONNECTION_CON) {
      this.sessionState = CONNECTION_CON;
    } else {
      Logger.i.warn('Unknown USSD startsWith');
    }
    // Logger.i.debug(string);
    this.updatePreview(string);
  }


  /*	Current Tab 	*/
  currentTab(evt) {
    var els = this.shadowRoot.querySelectorAll('.phone-tabs li');
    for (let i = 0; i < els.length; ++i) {
      const el = els[i];
      el.classList.remove('current');
    }
    const link = evt.currentTarget;
    // console.log(link);
    link.parentElement.classList.add('current');

    /*	Simple Tab 	*/
    var tabContents = this.shadowRoot.querySelector('.phone-tab-contents');
    var tab = evt.currentTarget.dataset['t'];

    if (tab == 'phone') {
      tabContents.classList.remove('getpeoples');
      tabContents.classList.remove('getclock');
    } else if (tab == 'clock') {
      tabContents.classList.remove('getpeoples');
      tabContents.classList.add('getclock');
    } else if (tab == 'people') {
      tabContents.classList.remove('getclock');
      tabContents.classList.add('getpeoples');
    }
  }
}

customElements.define('nexus-4', Nexus4);
