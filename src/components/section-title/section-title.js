import { html, css, LitElement, unsafeCSS } from "lit-element";
import globalStyles from '../../App.css?raw'
import { SectionTitleStyles } from "./section-title-css";
import { SectionPElementBase } from "../../base/elements/section-pelement";
class SectionTitle extends SectionPElementBase {

  static get styles() {
    return [unsafeCSS(globalStyles),
      SectionTitleStyles
     
    ];
  }

  static get properties() {
		return {
			e: { type: Object }
		};
	}

  constructor() {
		super();
		this.e={}
	}


  render() {

    return html`
      <div class="c-title-container" style="margin-top: 25px; padding: 0 10px;">
      <h3 class="ii__title is-centered">${this.e.name}</h3>
      ${this.e[4]!=''?html`
          <p class="ii__paragraph">
            ${this.e.defaultValue}
          </p>
      `:html`

      `}
        <div class="hr">
          <hr class="underline" />
          <hr class="underline" />
        </div>
      </div>
    `;
  }
}
customElements.define('section-title', SectionTitle);
