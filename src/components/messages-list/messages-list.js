import { html, css,unsafeCSS, LitElement} from "lit-element";
import { MessagesListStyles } from "./messages-list-css";
import globalStyles from '../../App.css?raw';

class MessagesList extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      MessagesListStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  
  constructor() {
    super();
    this.searchText = '';
    this.rows = [];
    this.cols = [];
    this.e = null;
    this.messages = [];
}

static get properties() {
    return {
        rows: { type: Array },
        e: { type: Object },
        cols: { type: Array },
        messages: Array,
    };
}


  // firstUpdated() {
  //   this.loader.then(() => {
  //     this.messages = this.rows;
  //   });
  // }

  
  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('rows')) {
      this.messages = this.rows;
    }
}

  getIndexByColumnLabel(columnLabel) {
    return this.cols.findIndex((col) => col.label === columnLabel);
  }

  static get is() {
    return "messages-list";
  }

  render() {
    return html`
      <div class="column card">
        <div class="content">
          <div class="hdr is-flex">
            <h3>Messages (${this.messages.length})</h3>
            <a
              href="${this.e.details.seeAllLink}"
              target="_blank"
              class="button"
              >See All</a
            >
          </div>
          <ul class="column" style="margin-left: 0px;">
            ${this.messages
              .filter((m, index) => index < 4)
              .map(
                (message) => html`
                  <li class="media">
                    <figure
                      class="media-left"
                      style="margin: 5px 10px 5px 5px;"
                    >
                      <span class="image is-64x64">
                        <img
                          class="is-rounded"
                          alt="${message[
                            this.getIndexByColumnLabel("sender")
                          ]}-image"
                          src="${message[this.getIndexByColumnLabel("image")]}"
                        />
                      </span>
                    </figure>
                    <div class="media-content">
                      <p>
                        <strong
                          >${message[
                            this.getIndexByColumnLabel("sender")
                          ]}</strong
                        >
                        <br />
                        ${message[this.getIndexByColumnLabel("message")]}
                      </p>
                    </div>
                  </li>
                `
              )}
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define(MessagesList.is, MessagesList);
