import {html, css, unsafeCSS} from 'lit-element';
import {NavbarBase} from '../../base/elements/navbar-base';
import {NavbarTwelveStyles} from './navbar-12-css';
import globalStyles from '../../App.css?raw';

class Navbar12 extends NavbarBase {
  static get styles(){
    return [
      unsafeCSS(globalStyles),
      NavbarTwelveStyles,
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
          <div class="block">
            <nav class="navbar is-dark">
              <div class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                  </a>
                </div>
                <div class="navbar-end">
                  <a class="navbar-link">
                    <figure class="image is-32x32">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                    </figure>
                  </a>
                  <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>


     `;
  }


  static get is() {return 'navbar-12';}
}
customElements.define(Navbar12.is, Navbar12);
