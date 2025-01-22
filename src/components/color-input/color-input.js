
import {html, css, unsafeCSS} from 'lit-element';
import '@polymer/paper-swatch-picker';
import {ColorInputBase} from '../../base/elements/color-input';
import globalStyles from '../../App.css?raw';



class ColorInput extends ColorInputBase {
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			css`
				:host {
					display: block;
				}
			`
		]
	}

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
      
    }
  }


	getInput() {
		return this.shadowRoot.querySelector('#input');
	}

	getValue() {
		//   return this.selectedColor;
		return this.getInput().color;
	}

	valid(validation) {}
	invalid(validation) {}
	
	render() {
		return html`
			<div class="content">
				<h4>${this.e.name}: </h4>
				<paper-swatch-picker id="input" color="${this.value}"></paper-swatch-picker>
			</div>
		`;
	}
}

customElements.define(ColorInput.is, ColorInput);
