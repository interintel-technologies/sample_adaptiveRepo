
import {html, css,unsafeCSS} from 'lit-element';
import { SectionPElementDsc } from '../../base/elements/section-pelement-dsc';
import {ServiceTitleStyles} from './service-title-css.js';
import globalStyles from '../../App.css?raw'
class ServiceTitle extends SectionPElementDsc {

    static get styles () {
        return [unsafeCSS(globalStyles),ServiceTitleStyles];
    }

    

    static get is() {
        return "service-title";
    }

    render(){
        return html`
            <div class="cont is-full-width">
                <p class="title is-3 is-spaced is-link">${this.e.name}</p>
                <p class="subtitle is-5 is-primary">${this.e.defaultValue}</p>
            </div>
        `;
    }
}


customElements.define(ServiceTitle.is, ServiceTitle);