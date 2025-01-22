import {html, css, unsafeCSS} from 'lit-element';
import {NavbarBase} from '../../base/elements/navbar-base';
import {NavbarElevenStyles} from './navbar-11-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar11 extends NavbarBase {

  static get styles(){
    return[
      unsafeCSS(globalStyles),
      NavbarElevenStyles, 
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
              <nav class="navbar">
                <div class="navbar-brand">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                  </a>
                </div>
                <div class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active" @click="${() => this.activePage('home')}">
                      Home
                    </a>
                    <a class="navbar-item" @click="${() => this.activePage('products')}">
                      Products
                    </a>
                    <a class="navbar-item" @click="${() => this.activePage('services')}">
                      Services
                    </a>
                    <a class="navbar-item" @click="${() => this.activePage('about-us')}">
                      About Us
                    </a>
                    <a class="navbar-item" @click="${() => this.activePage('help')}">
                      Help
                    </a>
                    <a class="navbar-item" @click="${() => this.activePage('contacts')}">
                      Contacts
                    </a>
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-small is-rounded is-primary"  @click="${() => this.activePage('buy-now')}">Buy now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `;
  }

  activePage(mainNavLink){

    const links = this.shadowRoot.querySelector('.navbar-menu').querySelectorAll('a');
    const btnClassName = 'button is-small is-rounded is-primary';

    if(mainNavLink === 'home'){
      links.forEach((link) =>link.className= 'navbar-item' );
      links[0].className = 'navbar-item is-active';
      links[6].className = btnClassName;
    }else if (mainNavLink === 'products'){
      links.forEach((link) =>link.className= 'navbar-item' );
      links[1].className = 'navbar-item is-active';
      links[6].className = btnClassName;
    }else if (mainNavLink === 'services'){
      links.forEach((link) =>link.className= 'navbar-item' );
      links[2].className = 'navbar-item is-active';
      links[6].className = btnClassName;
    }else if (mainNavLink === 'about-us'){
      links.forEach((link) =>link.className= 'navbar-item' );
      links[3].className = 'navbar-item is-active';
      links[6].className = btnClassName;
    }else if (mainNavLink === 'help'){
      links.forEach((link) =>link.className= 'navbar-item' );
      links[4].className = 'navbar-item is-active';
      links[6].className = btnClassName;
    }else if (mainNavLink === 'contacts'){
      links.forEach((link) =>link.className= 'navbar-item' );
      links[5].className = 'navbar-item is-active';
      links[6].className = btnClassName;
    }else if (mainNavLink === 'buy-now'){
      //buy-now code or method here

    }
  }


  static get is() {return 'navbar-11';}
}
customElements.define(Navbar11.is, Navbar11);
