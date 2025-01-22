import {html, css, unsafeCSS} from 'lit-element';
import {NavbarFiveStyles} from './navbar-5-css';
import globalStyles from '../../App.css?raw'
import { NavbarBase } from '../../base/elements/navbar-base';

class Navbar5 extends NavbarBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NavbarFiveStyles,
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
      gateway: { type: Object }, // Assuming 'e' is an object, add to properties

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
  this.gateway = {}; // Initialize 'e' if required

	
  }

  updated(changedProperties) {
    // Check if the property 'e' has changed
    if (changedProperties.has('e')) {
    }
  }

  render() {
    return html`

    <div class="bind-box is-paddingless">
          <div class="block bind-box-4block-left">
              <div class="columns">
                <div class="column is-half">
                  <nav class="navbar">
                    <div class="navbar-brand">
                      <a class="navbar-item" href="#">
                        <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                      </a>
                      <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="column has-background-dark">
                  <div class="navbar-menu is-active is-size-7 is-uppercase has-text-white">
                    <div class="navbar-end block">
                      <a class="navbar-item has-text-weight-semibold">
                        Sign Up
                      </a>
                      <a class="navbar-item">
                        Sign In
                      </a>
                      <div class="bind-box-4block-right"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>


     `;
  }


  static get is() {return 'navbar-5';}
}
customElements.define(Navbar5.is, Navbar5);
