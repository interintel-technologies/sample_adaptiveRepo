import {LitElement, html, css, unsafeCSS} from 'lit-element';
import { TileElementStyles } from "./tile-element-css";
import globalStyles from '../../App.css?raw';

export class TileElement extends LitElement {

 

  static get properties() {
    return {
      initialsArray: { type: Array },
      rows: { type: Array },
      themeBackgroundColor: { type: String },
      contrast : {type:String}
    };
  }

  constructor() {
    super();
    this.initialsArray = [];
    this.rows = [];
    this.themeBackgroundColor = '';
    this.contrast = ''
  }

  static get styles() {
    return [
      css`.tileCont {
      display: flex;
      padding: 35px 40px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      flex-shrink: 0;
      margin: 0 16px;
      border-radius: 10px;
      border: 0.4px solid rgba(0, 0, 0, 0.25);
      background: var(--paper);
      box-shadow: var(--mui-shadows-3);
    }`,
    unsafeCSS(globalStyles), TileElementStyles];
  }

  


  updated(changedProperties) {
    if (changedProperties.has('rows')) {

      this._processRows();
    }
  }

  _processRows() {
    const initialsArray = this.rows.map(row => {
      const [firstWord, secondWord] = row[1].split(" ");
      const initials = (firstWord[0] || '') + (secondWord ? secondWord[0] : '');
      return initials;
    });
    this.initialsArray = initialsArray;
  }

  firstUpdated() {
    
    const allP = this.shadowRoot.querySelectorAll(".paragraph");
    allP.forEach(p => {
      let productLink = p.getAttribute("data-name");
      if (p.innerText.length > 240) {
        this.addReadMore(p, productLink);
      }
    });
  }

  addReadMore(paragraph, productLink) {
    let excessText = paragraph.innerText.substr(240);
    let splitText = paragraph.innerText.slice(0, 240);
    paragraph.innerText = splitText;
    
    const lessTextNode = document.createTextNode("...Show less");
    const lessP = document.createElement("p");
    const lessNode = document.createElement("span");
    const textNode = document.createTextNode("...Read more");
    const moreNode = document.createElement("span");

    moreNode.className = "read_more";
    moreNode.appendChild(textNode);
    paragraph.appendChild(moreNode);

    lessNode.className = "show_less";
    lessNode.appendChild(lessTextNode);
    lessP.appendChild(lessNode);

    moreNode.addEventListener('click', () => {
      paragraph.innerText = splitText + excessText;
      paragraph.appendChild(lessP);
    });

    lessNode.addEventListener('click', () => {
      paragraph.innerText = splitText;
      paragraph.appendChild(moreNode);
    });
  }

  checkLink(text) {
    return text.includes("|");
  }

  getLink(text) {
    if (text) {
      const [, link] = text.split("|");
      return link;
    }
    return "";
  }

  getText(text) {
    if (text.includes("|")) {
      const [title] = text.split("|");
      return title;
    }
    return text;
  }

  render() {
    return html`
      <div class="content py-3">
        <div class="columns is-multiline is-mobile mainCol py-4">
          ${this.rows.map((slide, index) => html`
            <div class="column tileCont m-2 is-3-desktop is-10-mobile is-6-tablet">
              <div class="columns is-mobile">
                <div class="column is-2">
                  <span class="card-service__icon">
                    <p class="initials" style="color:${this.contrast} !important">${this.initialsArray[index]}</p>
                  </span>
                </div>
                <div class="column is-9">
                  <h3 class="card_title">${this.getText(slide[1])}</h3>
                  <p class="paragraph">${slide[2]}</p>
                  ${this.checkLink(slide[1]) ? html`
                    <span class="link-span">
                      <a class="card-service__link" href="${this.getLink(slide[1])}" target="_blank">Learn More</a>
                    </span>
                  ` : html``}
                </div>
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('tile-element', TileElement);