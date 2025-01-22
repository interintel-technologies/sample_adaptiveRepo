import { RadioGroupBase } from '../../base/elements/radio-group';
import { css, html,unsafeCSS } from 'lit-element';
import { RadioGroupStyles } from './radio-group-css';
import globalStyles from '../../App.css?raw'
class RadioGroup extends RadioGroupBase {

    static get styles () {
        return [unsafeCSS(globalStyles),RadioGroupStyles]
    }

    static get properties() {
        return {
            radios:Array
        };
    }

    constructor() {
        super();
        this.radios = [];
    }

    firstUpdated() {
       
        this.loader.then(()=>{
            this.radios=[...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
            
        });

        this.checkSelectedRadio();
    }

    checkSelectedRadio() {
        this.radios.map(radio=>{
            if(radio.selected){
                this.shadowRoot.querySelector(`#${radio.id}RadioBtn`).checked = true;
            } 
        })
    }

    static get is() {
        return "radio-group";
    }

    render() {
        return html`
            <div class="content">
                <div class="column">
                    <h3 class="label">${this.e.name}</h3>
                    <div class="column">
                        ${
                            this.radios.map(radio => html`
                                <label for="${radio.id}RadioBtn" class="card is-flex">
                                    <input id="${radio.id}RadioBtn" type="radio" name="radio-btn" value=${radio.id}>
                                    <div class="column text-clm">
                                        <h3 class="title is-6">${radio.label}</h3>
                                        <p>${radio.description}</p>
                                    </div>
                                </label>
                            `)
                        }
                    </div>

                </div>
            </div>
        `;
    } 
}

customElements.define(RadioGroup.is,RadioGroup);