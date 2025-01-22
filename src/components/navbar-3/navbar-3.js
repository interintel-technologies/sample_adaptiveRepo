import {html, css, unsafeCSS} from 'lit-element';
import {NavbarThreeStyles} from './navbar-3-css';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
import globalStyles from '../../App.css?raw'
import { NavbarBase } from '../../base/elements/navbar-base';
class Navbar3 extends NavbarBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NavbarThreeStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  
  static get properties() {
    return {
      group: { type: Array },
      hide: { type: Array },
      pageGroups: { type: Array },
      _pageGroup:{type:String},
      logo:{type:String},
      gateway:{type:String}

    };
  }

  constructor() {
    super();
    this.group = [];
    this.gateway = {};
    this.hide = [];
    this.pageGroups = [];
    this.prevScrollPos = 0;
	this.drawerOpen = false;
  this._pageGroup = '',
  this.logo = ''
	
  }

  render() {
    return html`

    <div class="bind-box has-background-dark">
          <div class="block">
            <nav class="level has-text-white">
            <p id="site-name" class="level-item has-text-centered has-text-weight-semibold">
              <a class="link">${this.gateway.name}</a>
            </p>
            ${this.pageGroups.map((pageGroup, pageGroupIndex) => html`
            <p class="level-item has-text-centered">
            <a href="${window.location.pathname+ window.location.search}#/${pageGroup._title.replace(/ /g, '-').toLowerCase()}/${pageGroup._tabs[0]._title.replace(/ /g, '-').toLowerCase()}/" 
            class="link is-info ${pageGroupIndex==this._pageGroup ?'is-active':''}" >
                ${pageGroup._title}
            </a>
            </p>
            `)}
          </nav>
        </div>
      </div>



     `;
  }


  static get is() {return 'navbar-3';}
}
customElements.define(Navbar3.is, Navbar3);
