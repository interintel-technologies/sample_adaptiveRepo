import {html, css} from 'lit-element';
import {NavbarBase} from '../../../../../elements/base/navbar-base';
import {NavbarOneStyles} from './navbar-1-css';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar1 extends NavbarBase {
  static get styles() {
    return [
      NavbarOneStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  render() {
    return html`
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item"  @click=${this.reloadPage}  style="width: 138px; top: -3px;">
            <img src="/media/${this.gateway.logo}">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
          ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
            ${pageGroup.pages.map((menu,menuIndex)=> html`
            ${menu.title == "Sign in" || menu.title ==  "Log in" || menu.title ===  "Sign up" || menu.title ==  "Register" ? html`` 
            :html`
            
            <a class="navbar-item nav__item is-capitalized has-text-weight-bold"
              @click="${this.scrollToSection}"
              data-name="${menu.id}"
              >${menu.title}</a>
            
            `}

              
            `)}
          `)}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
              ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                ${pageGroup.pages.map((menu,menuIndex)=> html`

                ${menu.title == "Sign in" || menu.title ==  "Log in" || menu.title ===  "Sign up" || menu.title ==  "Register" ? html`
                
                <a href="${window.location.pathname+ window.location.search}#/${pageGroupIndex}/${menuIndex}/" 
                class="button ${menu.title == 'Sign in'|| menu.title == 'Log in' ? 'btnless' : 'btn'} has-text-weight-bold">
                  ${menu.title == 'Sign in' || menu.title == 'Log in'? html` <strong style="color: #2F4799;">${menu.title}</strong>` : html`${menu.title}`}
          
                </a>`: html``}


                  `)}
                
                `)} 
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
     `;
  }

  reloadPage(){
    window.location.reload();
  }
  
  scrollToSection(event){

    var menuId = event.target.getAttribute("data-name");
    let navHeight = this.shadowRoot.querySelector('.navbar').offsetHeight;

    const element = document.getElementById(menuId);
    const offset = navHeight;  //height of navbar
    if(element){
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    }
    

  }

  static get is() {return 'navbar-1';}
}
customElements.define(Navbar1.is, Navbar1);
