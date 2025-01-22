import { html, css,unsafeCSS } from "lit-element";
import { BaseElement } from "../../core/base-element";
import { SectionFrontStyles } from "./section-front-css";
import globalStyles from '../../App.css?raw'
export class SectionFront extends BaseElement{
  static get styles() {
    return [unsafeCSS(globalStyles),SectionFrontStyles,];
  }

  static get is() {
    return "section-front";
  }

  render() {
    return html`

        <section class="hotline-area text-center area-padding">
        <div class="container">
            <div class="row" style="justify-content: center; display: flex;">
                <div class="col-lg-12 row-items">
                    <span> ${this.e && this.e.details.description}</span>
                    <p class="pt-3"> ${this.e && this.e.details.supportmsg}</p>
                    ${this.e && this.e.details.link?html`
                      <a id="linkBtn" href="${this.e && this.e.details.link.path}" class="button mt-4 is-primary">${this.e.details.link.label}</a>
                    `:html`
                    `}
                    
                </div>
            </div>
        </div>
    </section>

    `;
  }
}

customElements.define(SectionFront.is, SectionFront);
