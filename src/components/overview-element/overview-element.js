import {html,css, unsafeCSS} from 'lit-element';
import {OverviewElementStyles} from './overview-element-css';
import { BaseElement } from '../../core/base-element';
import globalStyles from '../../App.css?raw';

class OverviewElement extends BaseElement{
    static get is(){
        return 'overview-element'
    }

    static get styles() {
        return [
          unsafeCSS(globalStyles),
        OverviewElementStyles,
          css`
            :host {
              display: block;
            }
          `
        ];
      }
    render(){
        return html`

        <div class="container mipay-overview">
            <div class="columns">
                <div class="column">this is the left side</div>
                <div class="column">
                    <div class="heading">
                        <h1 class="title">this is the title area</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae. Ut qui nostrum blanditiis laboriosam eligendi non dolore sapiente.</p>
                    <a href="$1" class="button is-link px-6">Get started</a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define(OverviewElement.is, OverviewElement)