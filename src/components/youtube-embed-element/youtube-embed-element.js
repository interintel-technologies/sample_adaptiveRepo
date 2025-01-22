import { html, css, LitElement } from "lit-element";
import { YouTubeEmbedElementStyles } from "./youtube-embed-element-css";

class YouTubeEmbedElement extends LitElement {
  static get styles() {
    return [
      
      YouTubeEmbedElementStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get is() {
    return "youtube-embed-element";
  }

  render() {
    return html`
      <div class="column content">
        <div class="hero-body columns is-4 is-variable">
          <div class="column is-6">
            <iframe
              id="player"
              type="text/html"
              width="640"
              height="590"
              src="http://www.youtube.com/embed/${this.e.details
                .videoId}?enablejsapi=1&origin=http://example.com"
              frameborder="0"
            >
            </iframe>
          </div>
          <div class="column is-6">
            <h3>${this.e.name}</h3>
            <hr class="underline" />
            <p>${this.e.defaultValue}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(YouTubeEmbedElement.is, YouTubeEmbedElement);
