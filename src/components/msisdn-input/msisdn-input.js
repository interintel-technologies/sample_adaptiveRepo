import {html, css, unsafeCSS} from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import {MsisdnInputBase} from '../../base/elements/msisdn-input';
import {MsisdnInputStyles} from './msisdn-input-css';
import 'fa-icons'
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/


class MsisdnInput extends MsisdnInputBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      MsisdnInputStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }


  
  render() {
    return html`
      <div class="column is-block is-marginless">
      <p class="input-label lbl" id="label">${this.e.name}</p>
        <div class="msisdn-container is-flex">
          <div class="input-left">
            <div class="country-code" @click=${this.codeList}>
              <p>+254</p>
            </div>
          </div>
          <div class="input-right">
            <div class="msisdn-input field">
              <div class="input-container control has-icons-right">
                <input pattern="[^0-9]+" @keydown=${this.filterNumericInput} type="text" id="input" name="${this.e.name}" class="form-input" required="${this.required}" aria-required="true" aria-describedby="gentle_0" minlength="${this.e.min}" maxlength="${this.e.max}" >

                <span id="danger-icon" class="icon is-small is-right">
                  <fa-icon
                    class="fas fa-exclamation-triangle icon"
                    size="1em"
                    color="#ff3860"
                  ></fa-icon>
                </span>
                <span id="check-icon" class="icon is-small is-right">
                  <fa-icon
                    class="fas fa-check"
                    size="1em"
                    color="#23d160"
                  ></fa-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p class="help" id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
        <div class="form_lists" id="code_list">
          <ul id="code">
         ${this.rows.map((row, id) => html`<li class="form__list" id="list" @click="${() => this.codeSelected(row[0])}" ?selected="${row[0] === '254'}">${row[1]} +${row[0]}</li>`)}
          </ul>
        </div>
      </div>
        `;
  }



updated(changedProperties) {
  if (changedProperties.has('e') ) {
      console.log("Updated properties:",this.e);
  }
}

  constructor() {
    super();
    this.e = null;
    this.countryCode = "+254";
  }

  static get properties(){
    return {
      e: { type: Object },
      countryCode: String,
    }
  }

  codeList(){
    const selectBubble = this.shadowRoot.getElementById('code_list');
    selectBubble.classList.toggle('is-block');
  }

  codeSelected(id){
    const codesContainer = this.shadowRoot.querySelector('.form_lists')
    // const codes = this.shadowRoot.querySelectorAll('#code li');
    const countryCode = this.shadowRoot.querySelector('.country-code p');

    countryCode.textContent = '+' + id;
    this.countryCode = countryCode.textContent
    codesContainer.classList.remove('is-block');
  }

  filterNumericInput(e) {
    const key = e.key || e.code;
    if ((e.key.length <= 1) && (!(e.metaKey || e.ctrlKey || e.altKey))) {
      if (!((key >= '0' && key <= '9') || (key === '.') || (key === ',') || (key === '-') || (key === ' '))) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
    }
  }

  getValue(e) {
    const numberInput = this.shadowRoot.querySelector('#input');
    if (numberInput.value) {
      return this.countryCode + numberInput.value;
    }
  }

  valid(Validation) {
    const lbl = this.shadowRoot.querySelector('#label');
    const input = this.shadowRoot.querySelector('.msisdn-container');
    const dangerIcon = this.shadowRoot.querySelector("#danger-icon");
    const checkIcon = this.shadowRoot.querySelector("#check-icon");
    const warningText = this.shadowRoot.querySelector("#warning-text");

    // Revert general text content
    input.classList.remove("is-danger");
    lbl.classList.remove("is-danger");
    input.classList.add("is-success");
    lbl.classList.add("is-success");
    warningText.style.display = "none";
    dangerIcon.style.visibility = "hidden";
    checkIcon.style.visibility = "visible";
  }

  invalid(validation) {
    const input = this.shadowRoot.querySelector('.msisdn-container');
    const lbl = this.shadowRoot.querySelector('#label');
    const dangerIcon = this.shadowRoot.querySelector("#danger-icon");
    const checkIcon = this.shadowRoot.querySelector("#check-icon");
    const warningText = this.shadowRoot.querySelector("#warning-text");

    warningText.style.display='block';

    input.classList.remove("is-success");
    lbl.classList.remove("is-success");
    input.classList.add("is-danger");
    lbl.classList.add("is-danger");
    dangerIcon.style.visibility = "visible";
    checkIcon.style.visibility = "hidden";

    if (validation)
    {this.shadowRoot.querySelector('#warning-text').textContent= validation;}
  }

  stickyLabel(e){
    const label = this.shadowRoot.querySelector('#label');
    // const input = this.shadowRoot.querySelector('#input');

    label.style.top = -25 + "px";
    label.style.left = -6 + "%";
    label.style.fontSize = 12 + "px";
    label.style.fontWeight= 700;
  }

  labelReset(e){
    const label = this.shadowRoot.querySelector('#label');
    const input = this.shadowRoot.querySelector('#input');

    if(input.value == ""){
      label.style.top = 8 + "px";
      label.style.left = 11 + "px";
      label.style.fontSize = "inherit";
      label.style.fontWeight= "inherit";
    }
  }
}

customElements.define(MsisdnInput.is, MsisdnInput);
