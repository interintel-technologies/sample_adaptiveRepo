import {html,css, unsafeCSS} from 'lit-element';
import { CountdownElementBase} from '../../base/elements/countdown-element';
import {CountdownElementStyles} from './countdown-element-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CountdownElement extends CountdownElementBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      CountdownElementStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  createRenderRoot() {return this;}

  render() {
    return html`
        
        <h3 style="text-align: center">${this.name}</h3>
        <h2 style="text-align: center">${this.timeLeft.hours} hrs : ${this.timeLeft.minutes} mins : ${this.timeLeft.seconds} s</h2>
        `;
  }

}
customElements.define(CountdownElement.is, CountdownElement);
