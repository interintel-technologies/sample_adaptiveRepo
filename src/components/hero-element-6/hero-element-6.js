
    import {html, css, unsafeCSS} from 'lit-element';
    import {HeroElement6Styles} from './hero-element-6-css';
    import globalStyles from '../../App.css?raw';
import { HeroElement6Base } from '../../base/elements/hero-element-6';

    class HeroElement6 extends HeroElement6Base{
        static get styles(){
            return [
                unsafeCSS(globalStyles),
                HeroElement6Styles,
                css ` 
                :host{
                    disply: block;
                }
                `
            ]
        }

        render(){
            return html`
            <div class="text-container">
                <div class="content">
                    <div class="heading title-container">
                        <h1 class="title">Creative people share amaizing photos</h1>
                    </div>

                    <div class="button-container">
                        <a href="/" class="button is-rounded is-danger has-text-weight-bold">Explore now</a>
                    </div>
                </div>
            </div>
            <div class="hero-container">
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-wallpapers-15.jpg" alt="img-1"/>
                </div>
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://i.ytimg.com/vi/goQMXfiS-dA/maxresdefault.jpg" alt="img-2"/>
                </div>
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://i.ytimg.com/vi/cwWb3XTrqnU/maxresdefault.jpg" alt="img-3"/>
                </div>
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://i.ytimg.com/vi/tFx6wt_gI3A/maxresdefault.jpg" alt="img-4"/>
                </div>
            </div>
            `
        }
    }

    customElements.define(HeroElement6.is, HeroElement6);
    
    