import {html, css, unsafeCSS} from 'lit-element';
import {NavbarBase} from '../../base/elements/navbar-base';
import {NavbarThirteenStyles} from './navbar-13-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar13 extends NavbarBase {
  static get styles(){
    return [
      unsafeCSS(globalStyles),
      NavbarThirteenStyles,
      css`
      :host{
        display: block;
      }
      `
    ]
  }

  render() {
    return html`

    <div class="bind-box">
        <nav class="navbar">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
              </a>
            </div>
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>

              <a class="navbar-item">
                About
              </a>

              <a class="navbar-item">
                Portfolio
              </a>

              <a class="navbar-item">
                Blog
              </a>

              <a class="navbar-item">
                Contacts
              </a>
            </div>
            <div class="navbar-end">
              <div class="field">
                <p class="control">
                    <span class="icon">
                      <i class="fab fa-facebook"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-instagram"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-pinterest-p"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-google-plus"></i>
                    </span>
                  <a role="button" class="navbar- flexthis" aria-label="menu" aria-expanded="false" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </p>
              </div>
            </div>
          </nav>
        </div>

     `;
  }


  static get is() {return 'navbar-13';}
}
customElements.define(Navbar13.is, Navbar13);
