import { html, css, unsafeCSS } from 'lit-element';
import 'fa-icons';
import { Section11Styles } from './section-11-css';
import { SectionPElementDsc } from '../../base/elements/section-pelement-dsc';
import globalStyles from '../../App.css?raw';

class Section11 extends SectionPElementDsc {
  static get styles() {
    return [
      Section11Styles,
      unsafeCSS(globalStyles),
      css`
        /* Add any additional styles for animations */
        .column {
          opacity: 0;
          transform: translateY(50px); /* Hidden by default */
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .animate1-appear {
          opacity: 1;
          transform: translateY(0); /* Visible state when animation triggers */
        }
      `,
    ];
  }

  static get properties() {
    return {
      rows: { type: Array },
      e: { type: Object },
      cols: { type: Array },
    };
  }

  constructor() {
    super();
    this.rows = [];
    this.cols = [];
    this.observer = null; // IntersectionObserver instance
  }

  render() {
    return html`
      <section class="solution-area bg">
        <div class="solution-container">
          <div class="section-title">
            <h2>${this.e && this.e.name}</h2>
            <p>${this.e && this.e.details.subtitle}</p>
          </div>
          <div id="mainColumn" class="columns">
            ${this.rows.map((slide, index) => html`
              <div class="column">
                <div class="single-services-box">
                  <div class="icon">
                    ${this.checkIcon(slide[1])
                      ? html`
                        <fa-icon class="${this.getIcon(slide[1])}" color="#fff" style="height:68px; width: 72px;"></fa-icon>
                      `
                      : html`
                        <img src="${slide[3]}" alt="${slide[1]}" />
                      `}
                  </div>
                  <h3><a>${this.getTitle(slide[1])}</a></h3>
                  <p>${slide[2]}</p>
                </div>
              </div>
            `)}
          </div> <!-- main -->
        </div>
      </section>
    `;
  }

  checkIcon(dscname) {
    return dscname?.includes('|');
  }

  getIcon(dscname) {
    let [title, icon] = dscname.split('|');
    return icon;
  }

  getTitle(dscname) {
    let [title, icon] = dscname.split('|');
    return title;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.setupObserver();
  }

  setupObserver() {
    const options = {
      root: null, // relative to the viewport
      threshold: 0.2, // when 20% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateColumns();
        }
      });
    }, options);

    const mainColumn = this.shadowRoot.querySelector('#mainColumn');
    if (mainColumn) {
      this.observer.observe(mainColumn);
    }
  }

  animateColumns() {
    const columns = this.shadowRoot.querySelectorAll('.column');
    columns.forEach((column) => {
      column.classList.add('animate1-appear');
    });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect(); // Clean up the observer
    }
    super.disconnectedCallback();
  }

  static get is() {
    return 'section-11';
  }
}

customElements.define(Section11.is, Section11);
