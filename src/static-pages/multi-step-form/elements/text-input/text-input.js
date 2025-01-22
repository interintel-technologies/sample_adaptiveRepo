
// import { TextInputBase } from '../../../../elements/base/text-input';
import { LitElement,html } from 'lit-element';
import { InputMixin } from '../../../../themes/dsv2.0/components/mixins/InputMixin';


class TextInput extends InputMixin(LitElement) {
    static get is(){
        return 'text-input';
    }

    render(){
        return html`
        <div class="field">
            <p class="control">
            <input class="input" type="text" />
            </p>
        </div>
        `;
    
    }

}

customElements.define(TextInput.is, TextInput);
