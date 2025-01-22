import {html, css, unsafeCSS, LitElement} from 'lit-element';
import { HeroElement13Styles } from '../hero-element-13/hero-element-13-css';
import globalStyles from '../../App.css?raw';

class HeroElement13 extends LitElement{

static get styles(){
    return [
        unsafeCSS(globalStyles),
       HeroElement13Styles, 
       css `:host{
           display:block;
       }`

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


render(){

    return html`
    <div class="hero-body">
        <div class="content is-flex">
            <p>${this.e.defaultValue}</p>
            <img src="${this.e.details.image}" alt="image"/>
        </div>
    </div>
    
    `
}
static get is() {return 'hero-element-13';}


}


customElements.define(HeroElement13.is, HeroElement13);
