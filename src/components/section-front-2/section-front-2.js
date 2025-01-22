import {html, css, unsafeCSS} from 'lit-element';
import {BaseElement} from '../../core/base-element';
import {SectionFront2Styles} from './section-front-2-css';
import globalStyles from '../../App.css?raw';

export class SectionFront2 extends BaseElement  {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      SectionFront2Styles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  constructor() {
    super();
  }

  updated(){
    this.loadAppear();
  }
  
  loadAppear() {
    setTimeout(()=>this.animateSubtitle(),300);
  }

  animateSubtitle() {
    const subtitle = this.shadowRoot.querySelector(".subtitle");
    subtitle.classList.add("subtitle-appear-animation");
  }

  static get is() {
    return 'section-front-2';
  }

  render() {
    return html`
      <section class="hero columns">
        <div class="hero-body">
          <p class="subtitle is-5" style="color: white !important;">${this.e && this.e.defaultValue}</p>
        </div>
      </section>
    `;
  }
}

customElements.define(SectionFront2.is, SectionFront2);