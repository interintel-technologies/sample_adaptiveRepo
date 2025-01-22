import { css, html,unsafeCSS } from "lit-element";
import { ScrollToTopStyles } from "./scroll-to-top-css";
import { SectionPElementBase } from "../../base/elements/section-pelement";
import globalStyles from '../../App.css?raw'
class ScrollToTop extends SectionPElementBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      ScrollToTopStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  firstUpdated() {
    const ad=document.querySelector('adaptive-ui');
    const template=ad.shadowRoot.querySelector('.template');
    const templatePage=template.querySelector('service-page') || template.querySelector('landing-page');
    const page=templatePage.shadowRoot.querySelector('.page');
    console.log(page)
    const body=page.querySelector('.body') || page;
    body.addEventListener('scroll',()=>{
      this.isScrolledToBottom(body)
    })
  }

   isScrolledToBottom(body) {
    const button = this.shadowRoot.querySelector("button");
    if(body.scrollTop + body.clientHeight>= body.scrollHeight){
      button.classList.remove("hide-btn");
    }else{
      button.classList.add("hide-btn");
    }
  }
 

  onButtonClickHandler() {
    const ad=document.querySelector('adaptive-ui');
    const template=ad.shadowRoot.querySelector('.template');
    const templatePage=template.querySelector('service-page') || template.querySelector('landing-page');
    const page=templatePage.shadowRoot.querySelector('.page');
    const body=page.querySelector('.body') || page;
    body.scrollTo({ top: 0, behavior: "smooth" });
  }

  static get is() {
    return "scroll-to-top";
  }

  render() {
    return html`
      <button
        type="button"
        class="hide-btn"
        @click=${() => this.onButtonClickHandler()}
        title="Scroll To Top"
      >
        <span class="icon">
          <adaptive-ui-icon
            icon="arrow-upward"
            aria-hidden="true"
          ></adaptive-ui-icon>
        </span>
      </button>
    `;
  }
}

customElements.define(ScrollToTop.is, ScrollToTop);
