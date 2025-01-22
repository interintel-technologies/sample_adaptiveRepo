
import { css, html,unsafeCSS } from 'lit-element';
import { SectionPElementBase } from '../../base/elements/section-pelement';
import { SectionElementStyles } from './section-element-css';
import BizzPng4 from '../../../images/web/nikobizz4.png';
import globalStyles from '../../App.css?raw'
export class SectionElement extends SectionPElementBase {
    static get styles () {
        return [unsafeCSS(globalStyles),SectionElementStyles]
    }

    getColumnsFlexDirection() {
        if(this.e){
            switch(this.e.details.imagePosition) {
                case "top":
                    return "column";
                case "right":
                    return "row-reverse";
                case "bottom":
                    return "column-reverse";
                case "left":
                    return "row";
                default:
                    return "row";
            }
        }
      
    }

    static get is () {
        return "section-element";
    }

    render () {
        return html`
            <section class="section-body">
                <div class="inner-section columns m-0" style="flex-direction: ${this.getColumnsFlexDirection()}">
                    <div id="imgCol" class="column is-6-desktop is-12-mobile  px-4 is-flex">
                    ${this.e && this.e.details.image?html`
                        <img class="image" src="${this.e &&  this.e.details.image}"/>
                    `:html`
                        <img class="image" src="${BizzPng4}"/>
                    `}
                        
                        
                    </div>
                    <div id="textCol" class="column is-8-desktop is-12-mobile content">
                        <h2 class="main-heading2 ${(this.e && this.e.details.imagePosition === "top") || (this.e && this.e.details.imagePosition === "bottom") ? "has-text-centered" : ""}">${this.e && this.e.name} <span> ${this.e && this.e.defaultValue} </span> </h2>

                        ${this.e &&  this.e.details.points?html`
                        <ul class="ml-4" style="list-style: ${this.e.details.listStyle}">
                                ${this.e && 
                                    this.e.details.points.map(point => html`
                                        <li>
                                            <h6>${point.title}</h6>
                                            <p>${point.description}</p>
                                        </li>
                                    `) 
                                }
                            </ul>
                       `:html`
                            <p>${this.e && this.e.details.description}</p>
                       `}
                       
                        ${this.e && 
                            this.e.details.link ? html`
                                <a href="${this.e && this.e.details.link.path}" class="button is-link px-6">${this.e && this.e.details.link.label}</a>
                            ` : ""
                        }
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define(SectionElement.is,SectionElement)