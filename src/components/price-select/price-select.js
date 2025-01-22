import {html, css,unsafeCSS} from 'lit-element';
import {PriceSelectBase} from '../../base/elements/price-select';
import {PriceSelectStyles} from './price-select-css'
import globalStyles from '../../App.css?raw';

class PriceSelect extends PriceSelectBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      PriceSelectStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  getValue() {
    return this.selected;
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
  }

  check(num) {
    if (this.dropdownValue!== null && this.dropdownValue=== num) {
      return true;
    } else {
      return false;
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

  render() {
    return html`

   <div class="column">
    <div class="field" style="margin-top: 0px; margin-bottom: 0px;">
      <div  class="header-pricing is-wavy">
        <div class="columns is-vcentered">
            <div class="column is-12">
                <div class="columns is-vcentered">
                    ${this.rows.map((data, index) => html`
                        <div class="column is-3">
                            <!-- Pricing table -->
                            <div class="flex-card header-pricing-card ${this.colorType[index]} hover-inset">
                                <h3 class="plan-name">${data[2]}</h3>
                                <label   class="container">${data[3]}
                                <input id="check_${data[0]}"  type="radio" name="radio" @click="${() =>this.setSelected(data[0])}" ?checked=${this.check(data[0])}><span class="checkmark"></span>
                                </label>
                            </div>
                            <!-- /Pricing table -->
                        </div>    
                    
                    `)}
                
                    
                </div>

            </div>
        </div>       
    </div>
    </div>
  </div>`;
  }

}

customElements.define(PriceSelect.is, PriceSelect);
