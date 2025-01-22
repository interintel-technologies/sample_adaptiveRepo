import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { DownloadButtonStyles } from './download-button-css';
import globalStyles from '../../App.css?raw';

class DownloadButton extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DownloadButtonStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            e: { type: Object }, // Add `e` as a property
        };
    }

    constructor() {
        super();
        this.e = null; // Initialize `e` to null
    }

    onDownloadBtnClickHandler() {
        if (!this.e || !this.e.details) {
            console.error("Download URL is missing.");
            return;
        }

        const a = document.createElement("a");
        const url = this.e.details.downloadUrl;
        a.href = url;
        a.download = url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    render() {
        return html`
            <div class="content">
                <button class="button is-primary" @click=${this.onDownloadBtnClickHandler}>
                ${this.e.name}
                    <adaptive-ui-icon icon="icon:mdDownload" />
                </button>
            </div>
        `;
    }
}

customElements.define('download-button', DownloadButton);
