import {html, css, unsafeCSS} from 'lit-element';
import {JumboTronStyles} from './jumbotron-1-css'
import globalStyles from '../../App.css?raw';
import { JumbotronBase } from '../../base/elements/jumbotron-base';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Jumbotron1 extends JumbotronBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      JumboTronStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  render() {
    return html`   
    <section id="nav-section" class="hero">
      <div class="hero-body">
        <div id="nav-title">NAVIGATION</div>
        <div id="page-title">System-wide elements, Navigation<br /> &amp; Step-Menus</div>
      </div>
    </section>
     `;
  }


  static get is() {return 'jumbotron-1';}
}
customElements.define(Jumbotron1.is, Jumbotron1);
