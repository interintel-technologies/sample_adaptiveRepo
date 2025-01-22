
import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { HeroElement12Styles } from './hero-element-12-css';
import globalStyles from '../../App.css?raw';

export class HeroElement12 extends LitElement {
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            HeroElement12Styles,
            css`
                :host{
                    disply: block;
                }
            `
        ]
    }

    
    static get properties(){
        return {
            e: { type: Object }
        }
    }

    constructor() {
        super();
        this.e = null;      
    }

    // firstUpdated() {
    //     window.addEventListener('scroll',()=>this.scrollToAppear())
    
    // }

    updated(changedProperties) {
        if (changedProperties.has('e')) {
            window.addEventListener('scroll',()=>this.scrollToAppear())

        }
    }

    scrollToAppear(){
      const hero = this.shadowRoot.querySelector(".hero");
      const heroStartPosition = hero.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 2 ;

      if(heroStartPosition < screenPosition){
          this.animateColumns();
      }
    }

    animateColumns() {
        const imageColumn = this.shadowRoot.querySelector("#image-column");
        const textColumn = this.shadowRoot.querySelector("#text-column");
        imageColumn.classList.add("column-appear-animation");
        textColumn.classList.add("column-appear-animation");
    }

    static get is () {
        return "hero-element-12";
    }

    render () {
        return html`
            <section class="hero is-halfheight">
                <div id="hero-bdy" class="hero-body columns">
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e.name}
                        </p>
                        <p class="subtitle" style="margin-top:0;">
                            ${this.e.defaultValue}
                        </p>
                        ${Object.keys(this.e.details).includes("button_title") ? html`
                            <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>   
                            ` : html``
                        }
                    </div>
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                </div>
            </section>
        `
    }
}
customElements.define(HeroElement12.is,HeroElement12)