
import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { HeroElement14Styles } from './hero-element-14-css';
import globalStyles from '../../App.css?raw';

export class HeroElement14 extends LitElement {
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            HeroElement14Styles,
            css`
                :host{
                    display: block;
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

updated(changedProperties) {
    if (changedProperties.has('e')) {
        window.addEventListener('scroll',()=>this.scrollAppear())
    }
}


    scrollAppear(){
        const hero = this.shadowRoot.querySelector(".hero");
        const heroStartPosition = hero.getBoundingClientRect().top;
        const screenPosition = window.innerHeight + 20 ;

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
        return "hero-element-14";
    }

    render () {
        return html`
            <section class="hero is-halfheight">
                <div class="hero-body columns">
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                    <ul id="text-column" class="column text-column-disappear">
                        ${
                            this.e.details.points.map(point => html`
                                <li class="content">
                                    <h4>${point.title}</h4>
                                    <p>${point.description}</p>
                                </li>
                            `)
                        }
                    </ul>
                </div>
            </section>
        `
    }
}
customElements.define(HeroElement14.is,HeroElement14)