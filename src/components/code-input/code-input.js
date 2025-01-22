import {css, html, unsafeCSS} from 'lit-element';
import { CodeInputStyles } from './code-input-css';
import { CodeInputBase } from '../../base/elements/code-input';
import globalStyles from '../../App.css?raw';

class CodeInput extends CodeInputBase {
    static get properties() {
        return {
                codeLength:Number,
                e: { type: Object }, // Add `e` as a property

        }
    }

    constructor() {
        super();
        this.codeLength=4;
        this.e = null; // Initialize `e` to null

    }

    updated(changedProperties) {
        if (changedProperties.has('e')) {            
          this.e.details.codeLength?this.codeLength=this.e.details.codeLength:this.codeLength;
     
        }
      }

 
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            CodeInputStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }


    handleInput(e, index) {
        const inputs = this.shadowRoot.querySelectorAll('.input');
        const input = inputs[index];
        if (input.value.length === 1 && index + 1 < inputs.length) {
          inputs[index + 1].focus();
        }
    }

    handleKeydown(e, index) {
        const inputs = this.shadowRoot.querySelectorAll('.input');
    
        switch (e.keyCode) {
          case 37: // left arrow
            if (index > 0) {
              e.preventDefault();
              inputs[index - 1].focus();
              inputs[index - 1].select();
            }
            break;
          case 39: // right arrow
            if (index + 1 < inputs.length) {
              e.preventDefault();
              inputs[index + 1].focus();
              inputs[index + 1].select();
            }
            break;
          case 8: // backspace
            const input=inputs[index];
            if (input.value === '' && index !== 0) {
              for (let pos = index; pos < inputs.length - 1; pos++) {
                inputs[pos].value = inputs[pos + 1].value;
              }
              inputs[index - 1].value = '';
              inputs[index - 1].focus();
            }
            break;
          case 46: // delete
            if (index !== inputs.length - 1) {
              for (let pos = index; pos < inputs.length - 1; pos++) {
                inputs[pos].value = inputs[pos + 1].value;
              }
              inputs[inputs.length - 1].value = '';
              input.select();
              e.preventDefault();
            }
            break;
        }
    }
    

    static get is(){
        return "code-input";
    }

    resendOtp(service){
    this.dispatchEvent(new CustomEvent('service-call', {
        detail: {  service },
        bubbles: true,
        composed: true
    }));
    }

    render() {
        return html`
            <div class="content py-2">
                <p class="m-0">${this.e.name}</p>
                <br>
                <div class="digits my-4">
                    ${Array.from({ length: this.codeLength }, (_, i) => html`
                        <input class="input" 
                        type="text" 
                        required="${this.e.required}" 
                        maxlength="1" 
                        @input="${(e) => this.handleInput(e, i)}"
                        @keydown="${(e) => this.handleKeydown(e, i)}">
                    `)}
                </div>
                <p class="resend">Didn't get code? <span >Resend</span></p>
                <input class="otp-input" type="hidden" value="" name="otp">
            </div>
        `;
    }

}

customElements.define(CodeInput.is, CodeInput);