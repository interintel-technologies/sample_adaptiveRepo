import {html, css,unsafeCSS} from 'lit-element';
import { ShareLinkStyles } from './share-link-css';
import { SectionPElementDsc } from '../../base/elements/section-pelement-dsc';
import globalStyles from '../../App.css?raw'
class ShareLink extends SectionPElementDsc{

    static get styles() {
        return [unsafeCSS(globalStyles),ShareLinkStyles];
    }

    showModal() {
        const modal = this.shadowRoot.querySelector(".modal");
        modal.classList.add("is-active");
    }

    hideModal() {
        const modal = this.shadowRoot.querySelector(".modal");
        modal.classList.remove("is-active");
    }
    
    onShareBtnClickHandler() {
        this.showModal();
    }

    createSocialMediaButtons() {
        return [
            {
                label:"Facebook",
                icon: html`
                    <img alt="Facebook" src="src/themes/dsv1.0/img/isometic/facebook.svg" />
                `,
                link: "https://www.facebook.com/sharer/sharer.php?u="
            },
            {
                label: "Twitter",
                icon: html`
                    <img alt="Twitter" src="src/themes/dsv1.0/img/isometic/twitter.svg" />
                `,
                link: "https://twitter.com/intent/tweet?text="
            },
            {
                label: "Mail",
                icon: html`
                    <adaptive-ui-icon class="mail-icon" icon="icons:mail"></adaptive-ui-icon>
                `,
                link: "mailto:?body="
            }
        ];
    }

    copyToClipBoard() {
        navigator.clipboard.writeText(this.e.details.link);
        const tooltip = this.shadowRoot.querySelector(".tooltip");
        tooltip.classList.add("show-tooltip");

        setTimeout(()=>tooltip.classList.remove("show-tooltip"),1500)
    }

    static get is() {
        return 'share-link';
    }

    render(){
        return html`
            <div class="content">
                <div class="column">
                    <div class="content is-flex">
                        <h4>${this.e.name}</h4>
                        <span class="circle is-flex" @click=${()=>this.onShareBtnClickHandler()}>
                            <adaptive-ui-icon class="link-icon" icon="link"></adaptive-ui-icon>
                        </span>
                        <h5>Share Link</h5>
                    </div>
                </div>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content content">
                        <div class="is-flex" style="justify-content: flex-end;">
                            <adaptive-ui-icon icon="close" title="Close" class="close-icon" @click=${() => this.hideModal()}></adaptive-ui-icon>
                        </div>
                        <div class="columns is-mobile">
                            ${
                                this.createSocialMediaButtons().map(socialMedia => html`
                                    <div class="column">
                                        <a target="_blank" class="is-flex" href="${socialMedia.link}${this.e.details.link}">
                                            ${socialMedia.icon}
                                        </a>
                                        <h5>${socialMedia.label}</h5>
                                    </div>
                                `)
                            }
                        </div>
                        <div class="is-flex link">
                            <h5 class="link-text">${this.e.details.link}</h5>
                            <span title="Copy Link" class="is-flex copy" @click=${() => this.copyToClipBoard()}>
                                <adaptive-ui-icon class="copy-icon" icon="content-copy"></adaptive-ui-icon>
                                <h5 class="copy-text" title="Save">Copy</h5>
                                <span class="tooltip">Copied !</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define(ShareLink.is, ShareLink);
