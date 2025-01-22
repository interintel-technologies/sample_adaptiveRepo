import {html, css} from 'lit-element';
import { NavbarBase } from '../../base/elements/navbar-base';
import {NavbarEightDarkStyles} from './navbar-8-dark-css';
import {NavbarEightDefaultStyles} from './navbar-8-default-css'
import 'fa-icons';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar8 extends NavbarBase {
  constructor(){
    super();

  }

  static get properties(){
    return {
      darkMode: {
        type: Boolean,
        reflect: true,
      },
    }
  }

  get styles() {
    console.log("dark mode")
    return [
      this.darkModeUpdator,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  render() {
    // this is dark
    return html`
  
    <div class="bind-box">
      <div class="block">
        <nav class="level">
            <div class="has-text-left">
              <p class="control">
                <span class="icon">
                <fa-icon class="fab fa-facebook-square" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-instagram" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-twitter" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-pinterest-p" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-google-plus" color="#ffffff" size="16px"></fa-icon>
                </span>
              </p>
            </div>
          <p class="level-item has-text-centered">
            <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
          </p>
          <p class="level-item has-text-centered">
            <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </p>
        </nav>
      </div>
    </div>


     `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    
  }

  darkModeUpdator(){
    this.darkMode = this.e.details.darkMode;
    if(this.darkMode){
      return NavbarEightDarkStyles
    }else{
      return NavbarEightDefaultStyles
    }
  }

  static get is() {return 'navbar-8';}
}
customElements.define(Navbar8.is, Navbar8);