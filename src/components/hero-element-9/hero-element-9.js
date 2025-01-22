
import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { HeroElement9Styles } from './hero-element-9-css';
import globalStyles from '../../App.css?raw';

export class HeroElement9 extends LitElement {
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            HeroElement9Styles,
            css`
                :host{
                    disply: block;
                }
            `
        ]
    }

    constructor() {
        super();
        this.e = null;
    }

    static get properties() {
        return {
            e: { type: Object },
        };
    }

    updated(changedProperties) {
        if (changedProperties.has('e')) {
            window.addEventListener('scroll',()=>this.scrollAppear())

        }
    }


    // firstUpdated() {
    //     this.colorTitle();
    //     this.loader.then(()=>{
    //         window.addEventListener('scroll',()=>this.scrollAppear())
    //     })
    // }

    scrollAppear(){
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

    colorTitle(){
        const title = this.shadowRoot.querySelector('.title');
        const titleText = title.innerText;
        const n = titleText.split(" ");
        const lastname =  n[n.length - 1];
        const newName = titleText.replace(lastname,"");
        const style = `<span style="color: var(--app-secondary-color)">${lastname}</span>`

        title.innerHTML = newName+ style; 
    }

    static get is () {
        return "hero-element-9";
    }

    render () {
        return html`
            <section class="hero is-fullheight">
                <div class="hero-body columns">
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e.name}
                        </p>
                        <hr class="underline">
                        <p class="subtitle is-4">${this.e.defaultValue}</p>
                        <p class="subtitle is-5">${this.e.details.paragraph}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                </div>
            </section>
        `
    }
}
customElements.define(HeroElement9.is,HeroElement9)