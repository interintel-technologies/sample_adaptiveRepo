import { html, css, unsafeCSS, LitElement } from 'lit-element';
import 'fa-icons';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import { PinPadInputBase } from '../../base/elements/pinpad-input';
import { PinpadInputStyles } from './pinpad-input-css';
import { InputDefaultStyles } from '../../styles/input-shared-default';
import { InputLabelAnimationtStyles } from '../../styles/input-label-animation';


class PinPadInput extends PinPadInputBase {
  static get styles() {
    return [

      PinpadInputStyles,
      InputDefaultStyles,
      InputLabelAnimationtStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      e: { type: Object },
      pinArr: { type: Array },
      iskeyboardVisible: { type: Boolean },
      keyBoard: { type: Object },
    };
  }

  constructor() {
    super();
    this.e = null;
    this.pinArr = [];
    this.iskeyboardVisible = false;
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      console.log("pin pad props: ", this.e);
      
      this.keyBoard = this.shadowRoot.querySelector('.pinpad-dropdown');
      this.disableKey();

      document.addEventListener('click', (event) => {
        const path = event.composedPath();

        if (path[0].id === 'input' || path[0].className.includes('pin-btn')) {
          return;
        }

        if (!path[0].id || path[0].className !== 'column is-4' || path[0].className !== 'pin-btn' || path[0].className !== 'key-num' || path[0].tagName !== 'svg') {
          this.close();
        }
      });

      const input = this.shadowRoot.querySelector('#input');
      if (this.e.max != null) {
        input.setAttribute('maxlength', this.e.max);
      }
      if (this.e.min != null) {
        input.setAttribute('minlength', this.e.min);
      }
      this.shadowRoot.querySelector('#require').style.display = this.required ? 'flex' : 'none';
    }
  }

  invalid(validation) {
    const input = this.shadowRoot.querySelector('.label-animation');
    input.classList.remove('is-success');
    input.classList.add('is-danger');
    this.shadowRoot.querySelector('#count').style.color = 'rgb(255, 56, 96)';
    this.shadowRoot.querySelector('#warning-text').style.display = 'block';
    this.shadowRoot.querySelector('#warning-text').innerText = validation.validationMessage;
  }

  valid(validation) {
    const input = this.shadowRoot.querySelector('.label-animation');
    input.classList.remove('is-danger');
    input.classList.add('is-success');
    this.shadowRoot.querySelector('#count').style.color = 'rgb(35, 209, 96)';
    this.shadowRoot.querySelector('#warning-text').style.display = 'none';
  }

  getValue() {
    return this.shadowRoot.querySelector('#input').value;
  }

  pinBtn(e) {
    const value = e.target.textContent.trim();
    if (this.pinArr.length >= this.e.max) return;

    this.pinArr.push(value);
    const str = this.pinArr.join('');
    this.shadowRoot.querySelector('.label-animation').value = str;
    this.count();
  }

  btnDelete() {
    this.pinArr.pop();
    const str = this.pinArr.join('');
    this.shadowRoot.querySelector('.label-animation').value = str;
    this.count();
  }

  openDropDown() {
    this.keyBoard.classList.add('is-block');
    if (this.keyBoard.classList.contains('is-block')) {
      this.iskeyboardVisible = true;
      this.stickyLabel();
    }
  }

  submit() {
    this.close();
    this.pl.submitForm();
  }

  close() {
    if (this.iskeyboardVisible) {
      this.keyBoard.classList.remove('is-block');
      this.iskeyboardVisible = false;
      this.stickyLabel2();
    }
  }

  disableKey() {
    const input = this.shadowRoot.querySelector('#input');
    input.onkeydown = function () {
      return false;
    }
  }

  reveal() {
    const input = this.shadowRoot.querySelector('#input');
    const type = input.type;
    if (type === 'password') {
      input.type = 'text';
      this.shadowRoot.querySelector('#eye').icon = 'icons:visibility-off';
    } else if (type === 'text') {
      input.type = 'password';
      this.shadowRoot.querySelector('#eye').icon = 'icons:visibility';
    }
  }

  stickyLabel() {
    const label = this.shadowRoot.querySelector('#label');
    const input = this.shadowRoot.querySelector('#input');
    if (input.value === "" && this.shadowRoot.activeElement.id === "input") {
      label.style.top = '-65px';
      label.style.left = '0';
      label.style.fontSize = '12px';
      label.style.fontWeight = '700';
    }
  }

  stickyLabel2() {
    const label = this.shadowRoot.querySelector('#label');
    const input = this.shadowRoot.querySelector('#input');
    if (input.value === "") {
      label.style.top = '-35px';
      label.style.left = '25px';
      label.style.fontSize = '14px';
      label.style.fontWeight = 'normal';
    }
  }

  count() {
    if (this.e.max != null) {
      const content = this.shadowRoot.querySelector('#input').value.length;
      this.shadowRoot.querySelector('#count').textContent = content + '/' + this.e.max;
      this.shadowRoot.querySelector('#count').style.color = content === this.e.max ? 'rgb(35, 209, 96)' : '#cecece';
    }
  }

  render() {
    return html`
      <div class="column" style="position:relative;">
        <div class="field">
          <div class="control has-icons-right input-mixin input-effect">
            <input class="label-animation" id="input" @focusin=${this.openDropDown} required=${this.required} 
              minlength=${this.e && this.e.min} maxlength=${this.e && this.e.max} 
              @keyup="${this.count}" type="password" placeholder="">
            <label id="label">${this.e && this.e.name}</label>
            <span id="danger-icon" class="icon is-small is-right">
              <fa-icon class="fas fa-exclamation-triangle icon" size="1em" color="#ff3860"></fa-icon>
            </span>
            <span id="check-icon" class="icon is-small is-right">
              <fa-icon class="fas fa-check" size="1em" color="#23d160"></fa-icon>
            </span>
            <span class="focus-bg"></span>
          </div>
          <div class="message-block">
            <p class="help" id="warning-text" style="color:#ff3860;">${this.e ? this.e.name + ' required' : ''}</p>
            <p id ="count" class="input-counter">0/${this.e ? this.e.max : ''}</p>
          </div>
        </div>

        <div class="pinpad-dropdown">
          <div class="columns is-multiline is-mobile">
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">1</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">2</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">3</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">4</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">5</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">6</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">7</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">8</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">9</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.btnDelete}>
                <iron-icon icon="icons:backspace"></iron-icon>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">0</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.reveal}>
                <iron-icon id="eye" icon="icons:visibility"></iron-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('pin-pad-input', PinPadInput);
