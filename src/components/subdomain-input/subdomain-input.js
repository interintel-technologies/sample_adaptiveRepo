import {html, css,unsafeCSS} from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import {SubdomainInputBase} from '../../elements/base/subdomain-input';
import {SubdomainInputStyles} from './subdomain-input-css';
import globalStyles from '../../App.css?raw';

class SubdomainInput extends SubdomainInputBase {

  static get styles() {
    return [
    unsafeCSS(globalStyles),
      SubdomainInputStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      defaultValue: String,
      domain:String,
      e: { type: Object }
    }
  }

   static get is(){
    return 'subdomain-input';
   }

  constructor() {
    super();
    this.defaultValue = "";
    this.domain = "domain";
    this.e = null;
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      this.defaultValue = this.e.details.defaultValue ? this.e.details.defaultValue : "";
      this.domain = this.e.details.domain ? this.e.details.domain : "domain"; 
      this.value = this.defaultValue;
    }
 
  }

  onSubdomainInputHandler(subdomain) {
    // this.updateParams('q', subdomain);
    const warningText = this.shadowRoot.querySelector('#warning-text');

    if(this.rows.length === 0) {
      warningText.style.display = "none";
      this.shadowRoot.querySelector(".content").forEach(element => {
        element.style.background = "rgba(35, 209, 96, 0.49)";
        this.value = subdomain;
      });
    }
    else {
      warningText.style.display = "block";
      warningText.innerText = "Error. Subdomain already available.";
      this.shadowRoot.querySelector(".content").forEach(element => {
        element.style.background = "rgba(255, 56, 96, 0.46)";
        this.value = undefined;
      });
    }
  }

  valid(validation) {
    const warningText = this.shadowRoot.querySelector('#warning-text');
    const cont = this.shadowRoot.querySelector('.cont');

    warningText.style.display = "none";
    cont.classList.remove("cont-danger");
    cont.classList.add("cont-success");

    setTimeout(()=>{
      cont.classList.remove("cont-success");
    }, 3000);
  }

  invalid() {
    const warningText = this.shadowRoot.querySelector('#warning-text');
    const cont = this.shadowRoot.querySelector('.cont');

    warningText.style.display = "block";
    cont.classList.add("cont-danger");
  }

  render() {
    return html`
      <section class="column">
        <div class="cont is-flex">
          <div class="content is-flex"><h4>https://</h4></div>
          <input class="input" type="text" name="description" @input=${e => this.onSubdomainInputHandler(e.target.value)} value=${this.defaultValue}>
          <label>${this.e.name}</label>
          <div class="content is-flex"><h4>.${this.domain}.com</h4></div>
        </div>
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </section>
    `;
  }
}

customElements.define(SubdomainInput.is, SubdomainInput);
