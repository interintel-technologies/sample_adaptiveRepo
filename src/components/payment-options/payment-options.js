import {html,css,unsafeCSS} from 'lit-element';
import {PaymentOptionsBase} from '../../base/elements/payment-options';
import {PaymentOptionsStyles} from './payment-options-css';
import globalStyles from '../../App.css?raw'

class PaymentOptions extends PaymentOptionsBase {
  static get styles() {
    return [
        unsafeCSS(globalStyles),
        PaymentOptionsStyles,
        css`
            :host {
            display: block;
            }
        `
    ];
  }

  getValue() {
    const method = this.shadowRoot.querySelector('input[name="method"]:checked').value;
    const select = this.shadowRoot.querySelector('#'+method);
    // find selected payment method
    // find selection option in the method
    return select.value;
  }

  constructor(){
    super();
    this.paymentMethods=[];
    this.rows = [];
    this.cols = [];
    this.e = null
  }

  
  static get properties() {
        return {
            paymentMethods    : Array,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        };
    }


    updated(changedProperties) {
      if (changedProperties.has('e') || changedProperties.has('cols')) {
        this.paymentMethods = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        console.log(this.paymentMethods)
        }
  }



  render() {
    return html`
      <div class="content">
        <div class="column">
          <div class="field">
            <div class="control">
              ${this.paymentMethods.map((paymentMethod, methodIndex) => html`
                <div class="is-inline">
                  <span class="icon">
                    <i><adaptive-ui-icon icon="mipayicon:mipayicon"></adaptive-ui-icon></i>
                  </span>
                  <label class="checkcontent">${paymentMethod.name}
                    <input type="radio" name="method" value="method-${methodIndex}">
                    <span class="checkmark"></span>
                      <div class="select is-fullwidth">
                        <select id="method-${methodIndex}">
                          ${paymentMethod.options.map((option) => html`
                          <option value="${option.id}">${option.record}</option>
                          </div>
                          `)}
                        </select>
                      </div>
                    </span>
                  </label>
                </div>
              `)}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(PaymentOptions.is, PaymentOptions);