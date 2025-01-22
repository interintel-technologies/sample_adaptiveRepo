import { css, html,unsafeCSS } from "lit-element";
import { QuoteElelementStyles } from "./quote-element-css";
import { SectionPElementDsc } from "../../elements/base/section-pelement-dsc";
import globalStyles from '../../App.css?raw'
class QuoteElelement extends SectionPElementDsc {
  static get styles() {
    return [unsafeCSS(globalStyles),QuoteElelementStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  firstUpdated() {
    const testimonials = this.shadowRoot.querySelector(".columns");
    let current = 0;

    setInterval(() => {
      current = (current + 1) % testimonials.children.length;
      testimonials.style.transform = `translateX(-${current * 75}%)`;
    }, 3000);
  }

  static get is() {
    return `quote-element`;
  }

  render() {
    return html`
      <section class="section quotes-section">
        <div class="container quote-wrapper">
          <h2 class="title is-2 has-text-centered mb-6">${this.e.name}</h2>
          <span id="right-arrow" class="icon arrow left">
            <i class="fa-solid fa-quote-left"></i>
          </span>
          <span id="left-arrow icon" class="icon arrow right">
            <i class="fa-solid fa-quote-right"></i>
          </span>
          <div class="wrap">
            <div class="columns is-mobile">
              ${this.e.details.quotes.map(
                (quote) => html`
                  <!-- <ul id="testim-dots" class="dots">
                <li class="dot active"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
              </ul> -->
                  <div class="column is-half is-offset-one-quarter">
                    <div class="quotes-container">
                      <div class="quotes">
                        <p class="quote mb-5">${quote.quote}</p>
                        <p class="author has-text-weight-bold">
                          - ${quote.author}
                        </p>
                        <p class="author-title is-size-7">
                          ${quote.authorTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define(QuoteElelement.is, QuoteElelement);
