import {html,css,unsafeCSS} from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import {BarcodeScannerBase} from '../../elements/base/barcode-scanner';
import {BarcodeScannerStyles} from './barcode-scanner-css';
import globalStyles from '../../App.css?raw';

class BarcodeScanner extends BarcodeScannerBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      BarcodeScannerStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }


  constructor() {
    super();
    this.e=null;

  }

  static get properties() {
    return {
      e:Object
    };
  }

  invalid(validation) {
    let control = '.control';
    if (this.pageType.template==='payments') {
      control = '.control-material';
    }

    this.shadowRoot.querySelector(control).classList.add('required');
    this.shadowRoot.querySelector(control).classList.add('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display='flex';

    if (validation)
    {this.shadowRoot.querySelector('.validation-info').textContent= validation;}
  }

  valid(validation) {
    let control = '.control';
    if (this.pageType.template==='payments') {
      control = '.control-material';
    }
    this.shadowRoot.querySelector(control).classList.remove('required');
    this.shadowRoot.querySelector(control).classList.remove('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display='none';

    // Revert general text content
    this.shadowRoot.querySelector('.validation-info').textContent= 'Required';
  }
  getInput() {
    return this.shadowRoot.querySelector('#input');
  }
  getValue() {
    return this.shadowRoot.querySelector('#input').value;
  }


  updated(changedProperties) {
    super.updated(changedProperties);
    this.type = 'text';
    if (this.e.max != null) {
      this.shadowRoot.querySelector('#input').setAttribute('maxlength', this.e.max);
    }
    if (this.e.min != null) {
      this.shadowRoot.querySelector('#input').setAttribute('minlength', this.e.min);
    }
    if (this.required=== true) {
      this.shadowRoot.querySelector('#require').style.display='unset';
    } else {
      this.shadowRoot.querySelector('#require').style.display='none';
    }
  }

  count() {
    if (this.e.max != null) {
      var content = this.shadowRoot.querySelector('#input').value.length;
      this.shadowRoot.querySelector('#count').textContent = content + '/' + this.e.max;
      if (this.shadowRoot.querySelector('#input').value.length == this.e.max) {
        this.shadowRoot.querySelector('#count').style.color = '#FF7273';
      } else {
        this.shadowRoot.querySelector('#count').style.color = '#cecece';
      }
    }
  }

  render() {
    return html`
        <div class="column">
        <div class="field" style="margin-top: 0px">
            ${window.template!=='payments'? html`
                                
                <label class="form-label"><span><iron-icon icon=${this.e.icon||'icons:input'}></iron-icon></span>${this.e.name}<span id="require" class="icon is-small is-right">*</span></label>
                <div class="control  has-icons-left has-icons-right">

                    <input class="input is-medium"  
                            id="input" 
                            name=${this.e.name} 
                            type="text"
                            value=${this.value} 
                            placeholder=${this.e.name} 
                            ?required=${this.required}   
                            @keyup="${this.count}"  >
                    
                    <small class="validation-info error" style="display: none;">Required</small>
                    <p id ="count" class="input-counter">${this.e.max}</p>

                </div>            
                            `
                : html`
                <div class="control-material is-primary">    
                <input class="material-input"            
                        id="input" 
                        name=${this.e.name} 
                        type="text"
                        value=${this.value} 
                        ?required=${this.required}   
                        @keyup="${this.count}"  >
                <span class="material-highlight"></span>
                <span class="bar"></span>
                    <small class="validation-info error" style="display: none;">Required</small>
                <p id ="count" class="input-counter">${this.e.max}</p>
                <label><span><iron-icon icon=${this.e.icon||'icons:input'}></iron-icon></span>${this.e.name} <span id="require" class="icon is-small is-right">*</span></label>
            </div>
                        `
            }     
        </div>
        </div>
 
        `;
    }
}

window.customElements.define(BarcodeScanner.is, BarcodeScanner);
