import { html, css, unsafeCSS } from 'lit-element';
import globalStyles from '../../App.css?raw';
import { BankInstructionsStyles } from './bank-instructions-css';
import { BankInstructionsBase } from '../../base/elements/bank-instructions';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */

class BankInstructions extends BankInstructionsBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      BankInstructionsStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  createRenderRoot() {
    return this; // Use light DOM for styling convenience
  }

  render() {
    return html`
      <style>
        .inp {
          border-radius: 6px !important;
          font-size: 14px !important;
          padding: 20px !important;
          line-height: 1;
          background-color: #fcfcfc !important;
          border: 1px solid #a3a3a4 !important;
          box-shadow: 0 0 0 transparent !important;
        }
      </style>

      <div class="column is-9 is-paddingless">
        <div class="field">
          <div class="select is-fullwidth">
            <select
              class="inp"
              @change="${this.changeBank}"
              id="input"
              style="text-indent: 20px; padding: 0px; border-radius: 4px;"
            >
              <option value="kcb">KCB BANK</option>
              <option value="equity">EQUITY BANK</option>
            </select>
          </div>
        </div>
      </div>
      <div id="kcb" class="column is-12">
        <!-- Widget -->
        <div class="flex-card light-bordered light-raised padding-10">
          <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">This is the markup content for KCB instructions</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">You can access KCB :</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text"> on Google Play Store or Apple Store</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">By dialling <span class="name"> *522# </span> on your KCB M-Banking registered phone.</span>
              </div>
            </li>
          </ol>
        </div>
        <!-- /Widget -->
      </div>
      <div id="equity" class="column is-12" style="display: none;">
        <!-- Widget -->
        <div class="flex-card light-bordered light-raised padding-10">
          <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">This is the markup content for Equity Bank instructions</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">You can access Equity :</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text"> on Google Play Store or Apple Store</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">By dialling <span class="name"> </span> on your Equitel registered phone.</span>
              </div>
            </li>
          </ol>
        </div>
        <!-- /Widget -->
      </div>
    `;
  }

  firstUpdated() {
    // Ensure the initial bank is set correctly based on the default value or initial setup
    this.changeBank(); // Trigger initial change handler to ensure the correct bank is displayed
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      // Perform any actions when property 'e' changes, if necessary
    }
  }

  static get properties() {
    return {
      e: { type: Object },
    };
  }

  constructor() {
    super();
    this.e = null;
  }

  getValue() {
    return this.querySelector('#input').value;
  }

  changeBank() {
    console.log('Change bank ', this.querySelector('#input'));

    if (this.getValue() === 'equity') {
      this.querySelector('#equity').style.display = 'unset';
      this.querySelector('#kcb').style.display = 'none';
    } else {
      this.querySelector('#equity').style.display = 'none';
      this.querySelector('#kcb').style.display = 'unset';
    }
  }

  validate() {
    if (this.e.required && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }
    return new this.Validation(true, 'valid');
  }

  valid(validation) {}

  invalid(validation) {}

  init(pElement, loader) {
    super.init(pElement, loader);
  }
}

customElements.define('bank-instructions', BankInstructions);
