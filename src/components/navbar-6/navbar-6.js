import {html, css, unsafeCSS} from 'lit-element';
import { NavbarBase } from '../../base/elements/navbar-base';
import {NavbarSixStyles} from './navbar-6-css';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
import globalStyles from '../../App.css?raw'

class Navbar6 extends NavbarBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NavbarSixStyles,
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
      logo:{type:String}
    };
  }

  constructor() {
    super();
    this.group = [];
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
              <nav class="navbar has-background-dark">
                <div class="navbar-brand">
                  <a class="navbar-item" href="#">
                    <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                  </a>
                  <a role="button" class="navbar-burger is-active flexthis" aria-label="menu" aria-expanded="false" >
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu is-active">
                  <div class="navbar-end">
                  ${this.pageGroups.map((pageGroup, pageGroupIndex) => html`
                  <a href="${window.location.pathname+ window.location.search}#/${pageGroup._title.replace(/ /g, '-').toLowerCase()}/${pageGroup._tabs[0]._title.replace(/ /g, '-').toLowerCase()}/" 
                  class="navbar-item ${pageGroupIndex==this._pageGroup ?'is-purple':''}" >
                      ${pageGroup._title}
                  </a>`)}
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `;
  }


  static get is() {return 'navbar-6';}
}
customElements.define(Navbar6.is, Navbar6);
