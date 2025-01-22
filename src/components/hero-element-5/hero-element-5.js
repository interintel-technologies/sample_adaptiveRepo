
    import {html, css, unsafeCSS} from 'lit-element';
    import globalStyles from '../../App.css?raw';
    import {HeroElement5Styles} from './hero-element-5-css';
import { HeroElement5Base } from '../../base/elements/hero-element-5';
import 'fa-icons'
    class HeroElement5 extends HeroElement5Base{
        static get styles(){
            return [
                unsafeCSS(globalStyles),
                HeroElement5Styles,
                css` 
                :host{
                    disply: block;
                }
                `
            ]
        }

        render(){
            return html`
            <div class=" header">
                <p class="ui-header is-size-3">Feel the Excellence With a New UI Pack</p>
                <p class="ui-paragraph">
                    An approximate structure of marketing research is demanding for creativity.
                    Contextual advertising, of course, directively stabilizes the cultural budget
                    for accomodation. It should be noted that the advertising action paradoxically 
                    allows a typical factor of communication. Unconventional approach, of course, distorts
                    the business plan being promoted.
                </p>
                <div class="buttons-ui">
                    <a href="/" class="buy-btn">Buy now for KES 38</a>
                    <br class="breaking"> 
                    <p class="breaking-assist"></p>
                    <a href="/" class="read-btn">Read more</a>
                </div>
                <div class="circles-ui">
                    <span class="dot-1"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <a class="previous-slide">
                <i class="fas fa-less-than"></i>
                </a>
                <a class="next-slide has-text-centered">
                <i class="fas fa-greater-than"></i>
                </a>
            </div>
            `
        }
    }

    customElements.define(HeroElement5.is, HeroElement5);
    
    