import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { TileElement2Styles } from './tile-element-2-css';
import globalStyles from '../../App.css?raw';

export class TileElement2 extends LitElement {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      TileElement2Styles,
      css`
        :host {
          display: block;
        }

        .ii__paragraph {
          position: relative;
        }

        .read_more, .show_less {
          cursor: pointer;
          color: blue;
          text-decoration: underline;
        }
      `
    ];
  }

  static get is() {
    return 'tile-element-2';
  }

  static get properties() {
    return {
      images: { type: Array },
      data: { type: Array },
      columns: { type: Array },
      rows: { type: Array },
      e: { type: Object },
    };
  }

  constructor() {
    super();
    this.rows = [];
    this.columns = [];
    this.e = { details: { center_image: '' } };
    this.observer = null; // IntersectionObserver instance
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.setupObserver();
    this.updateReadMore();
  }

  setupObserver() {
    const options = {
      root: null, // relative to the viewport
      threshold: 0.2, // when 20% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateTiles();
        }
      });
    }, options);

    const serviceElement = this.shadowRoot.querySelector('#service');
    if (serviceElement) {
      this.observer.observe(serviceElement);
    }
  }

  updateReadMore() {
    const paragraphs = this.shadowRoot.querySelectorAll('.ii__paragraph');
    paragraphs.forEach(paragraph => {
      let productLink = paragraph.getAttribute('data-name');
      if (paragraph.innerText.length > 240) {
        this.addReadMore(paragraph, productLink);
      }
    });
  }

  animateTiles() {
    const tiles = this.shadowRoot.querySelectorAll('.ii__tile');
    tiles.forEach(tile => {
      tile.classList.add('animate1-appear');
    });
  }

  addReadMore(paragraph, productLink) {
    const excessText = paragraph.innerText.substr(240);
    const splitText = paragraph.innerText.slice(0, 240);
    paragraph.innerText = splitText;
    
    const moreNode = document.createElement('span');
    moreNode.className = 'read_more';
    moreNode.innerText = '...Read more';
    paragraph.appendChild(moreNode);

    const lessNode = document.createElement('span');
    lessNode.className = 'show_less';
    lessNode.innerText = '...Show less';

    moreNode.addEventListener('click', () => {
      paragraph.innerText = splitText + excessText;
      paragraph.appendChild(lessNode);
    });

    lessNode.addEventListener('click', () => {
      paragraph.innerText = splitText;
      paragraph.appendChild(moreNode);
    });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect(); // Clean up the observer
    }
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="content">
        <div class="columns" id="service">
          <div class="column">
            ${this.rows.map((slide, index) => index % 2 === 0 ? html`
              <div class="ii__tile row-reverse">
                <div class="ii__tile-head">
                  <img src="/media/${slide[3]}" alt="${slide[1]} image"/> 
                </div>
                <div class="ii__tile-body">
                  <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold">
                    ${slide[1]}
                  </h3>
                  <p class="ii__paragraph">${slide[2]}</p>
                </div>
              </div>
            ` : '')}
          </div>
          <div class="column image-column">
            <img id="center-image" src="${this.e.details.center_image}"/>
          </div>
          <div class="column">
            ${this.rows.map((slide, index) => index % 2 !== 0 ? html`
              <div class="ii__tile">
                <div class="ii__tile-head">
                  <img src="/media/${slide[3]}" alt="${slide[1]} image"/> 
                </div>
                <div class="ii__tile-body">
                  <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold">
                    ${slide[1]}
                  </h3>
                  <p class="ii__paragraph">${slide[2]}</p>
                </div>
              </div>
            ` : '')}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(TileElement2.is, TileElement2);
