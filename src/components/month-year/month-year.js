import {html, css, unsafeCSS} from 'lit-element';

import {MonthYearBase} from '../../base/elements/month-year';
import { InputDefaultStyles } from '../../styles/input-shared-default';
import { InputLabelAnimationtStyles } from '../../styles/input-label-animation';
import globalStyles from '../../App.css?raw';

class MonthYear extends MonthYearBase {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            InputDefaultStyles,
            InputLabelAnimationtStyles,
            css`
            :host {
                display: block;
            }
            `
        ];
    }

    constructor() {
        super();
        this.e = null; // Initialize 'e' as null
      }

      static get properties() {
        return {
          e: { type: Object },
        };
      }

      updated(changedProperties) {
        if (changedProperties.has('e')) {
          console.log("Updated properties:", this.e);
        }
      }

  render() {
    return html`
        <div class="column">
            <div class="input-mixin input-effect">
                <input class="label-animation" type="month" class="input is-medium" id="input"  name=${this.e.name} value=${this.value} required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max} @keyup="${this.count}">
                <label>${this.e.name}</label>
                <span class="focus-bg"></span>
            </div>
        </div>
        `;
  }
}

customElements.define(MonthYear.is, MonthYear);
