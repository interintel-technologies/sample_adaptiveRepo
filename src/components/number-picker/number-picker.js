import {css, html, LitElement, unsafeCSS} from 'lit-element';
import globalStyles from '../../App.css?raw'
import { NumberPickerStyles } from './number-picker-css';

class NumberPicker extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            NumberPickerStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            amounts: Array,
            e: { type: Object },
        }
    }

    constructor() {
        super();
        this.amounts = [];
    }

    updated(changedProperties) {
        if (changedProperties.has('e')) {
            this.amounts = this.e?.details?.amounts;
        }
    }


    firstUpdated(){
        this.amounts = this.e.details.amounts;
        
    }

    onClickHandler(amount,index){
        
        const amounts=this.shadowRoot.querySelectorAll(".amount");
        const selectedAmount=this.shadowRoot.querySelector("#amount" + index);
        amounts.forEach(amt=>amt.classList.remove("selected"));
        selectedAmount.classList.add("selected");

        this.dispatchEvent(new CustomEvent('numberPicker',{
            bubbles: true,
            composed: true,
            detail: amount
        }));   
    }

    static get is(){
        return 'number-picker';
    }

    render() {
        return html`
            <div class="content">
                <label class="label">${this.e?.name}</label>
                <div class="columns is-mobile is-multiline" id="mainCol">
                    ${
                        this.amounts.map((amount,index)=>html`
                        <div class="column is-one-fifth-desktop  is-one-third-tablet is-half-mobile p-1">
                            <div class="amount" id="amount${index}" @click=${()=>this.onClickHandler(amount,index)}>
                                <h5>${amount}</h5>
                            </div>
                        </div>
                        `)
                    }
                </div>
                
            </div>
        `;
    }

}

customElements.define(NumberPicker.is, NumberPicker);