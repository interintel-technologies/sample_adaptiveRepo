import {LitElement, css, html} from 'lit-element';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';
import { NumberPadInputStyles } from './number-pad-css';
import { InputMixin } from '../../../../themes/dsv2.0/components/mixins/InputMixin';
import { SectionPElementBase } from '../../../../elements/base/section-pelement';

class NumberPad extends ThemeMixin(LitElement) {
    static get properties() {
        return {
            KeysArray:Array,
            input: Number,
            service: String
        }
    }

    constructor() {
        super();
        this.KeysArray=[1,2,3,4,5,6,7,8,9,'.',0];
        this.input = ""
    }

    static get styles() {
        return [
            super.styles,
            NumberPadInputStyles,
            css`
                :host{
                    display:block;
                }
            `,
        ];
    }

    firstUpdated(){
        const inputField=this.shadowRoot.querySelectorAll(".input");
        inputField.forEach(inp=>{
            inp.addEventListener('focus',()=>{
                const activeInputId=inp.attributes.id.value;
                localStorage.setItem('activeInputId',activeInputId);
            });
        }); 
    }

    onButtonClickHandler(event, num){
        if(event == "input") {
            this.input = this.input + num;
        } else if(event === "delete") {
            if(this.input.length !== 0) {
                const tempInput = this.input;
                this.input = tempInput.slice(0, tempInput.length - 1);
            }
        }

        this.dispatchEvent(new CustomEvent('number-pad-' + (event === this.service ? "service" : "input"), {
            bubbles: true,
            composed: true,
            detail: this.input
        }));
    }


    static get is(){
        return 'number-pad';
    }

    render() {
        return html`
            <div class="content">         
                <div class="columns is-mobile is-multiline mainDiv">
                    <div class="column is-12">
                        <div class="columns is-multiline is-mobile numrow">
                            
                            ${this.KeysArray.map(numKey=>html`
                                <div class="column is-4 ">
                                    <div class="numBtn py-1 px-1" id="${numKey}" title="${numKey}" role="button" @click=${() => this.onButtonClickHandler("input",numKey)}>
                                        <h5>${numKey}</h5>
                                    </div>
                                </div>
                            `)
                            }
                            <div class="column is-4 ">
                                <div class="numBtn py-1 px-1" id="backspace" title="backspace"  role="button" @click=${() => this.onButtonClickHandler("delete")}>
                                    <span class="icon">
                                        <i class="fas fa-backspace"></i>
                                    </span>
                                </div>
                            </div>
                            
                            <div class="column pt-3 mt-0 is-12 has-text-centered">
                                ${
                                    this.service ? html`
                                        <div class="resetBtn mb-3" title="Reset" role="button" @click=${() => this.onButtonClickHandler(this.service)}>
                                            <h5 class="pt-1">${this.service}</h5>
                                        </div>  
                                    ` : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define(NumberPad.is, NumberPad);