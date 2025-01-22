import {html,css, LitElement, unsafeCSS} from 'lit-element';
import { SocialMediaPointsStyles } from './social-media-points-css';
import { InputDefaultStyles } from '../file-input/input-shared-default';
import { InputLabelAnimationtStyles } from '../file-input/input-label-animation';
import InstagramSvg from '../../img/isometic/instagram.svg';
import TwitterSvg from '../../img/isometic/twitter.svg';
import FacebookSvg from '../../img/isometic/facebook.svg';
import WhatsappSvg from '../../img/isometic/sms.png';
import globalStyles from '../../App.css?raw';

class SocialMediaPoints extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles), 
            SocialMediaPointsStyles,
            InputDefaultStyles,
            InputLabelAnimationtStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            socialMediaPointsToEdit: Object,
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        }
    }

    constructor() {
        super();
        this.socialMediaPointsToEdit = {};
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label === columnLabel); 
    }

    getSocialMediaIconUrl(type) {
        switch(type) {
            case "Instagram" :
                return `${InstagramSvg}`;
            case "Facebook" :
                return `${FacebookSvg}`;
            case "Twitter" :
                return `${TwitterSvg}`;
            case "SMS/WhatsApp" :
                return `${WhatsappSvg}`;
            default :
                return "";
        }
    }

    showModal() {
        const modal = this.shadowRoot.querySelector(".modal");
        modal.classList.add("is-active");
    }

    hideModal() {
        const modal = this.shadowRoot.querySelector(".modal");
        modal.classList.remove("is-active");
    }

    onEditTextClickHandler(type, points) {
        this.socialMediaPointsToEdit = {
            type: type,
            points: points
        };
        this.showModal();
    }

    onToggleChangeHandler(e,type) {
        const toggleValue = e.target.checked ? true : false;

        const payload = {
            type: type,
            toggle: toggleValue
        };

        this.dispatchEvent(new CustomEvent('service-call', { 
            detail: { service: 'toggle', params: payload },
            bubbles: true,
            composed: true 
        }));

        // this.pl._dialog("toggle", payload);
    }

    onSaveBtnClickHandler() {

        this.dispatchEvent(new CustomEvent('service-call', { 
            detail: { service: 'edit-points', params: this.socialMediaPointsToEdit },
            bubbles: true,
            composed: true 
        }));

        // this.pl._dialog("edit-points", this.socialMediaPointsToEdit);
    }

    static get is() {
        return "social-media-points";
    }

    render() {
        return html`
            <div class="content">
                <div class="column">
                    <ul class="column">
                        ${
                            this.rows.map(row => {
                            const type = row[this.getIndexByColumnLabel("type")];
                            const points = row[this.getIndexByColumnLabel("points")];
                            const toggle = row[this.getIndexByColumnLabel("toggle")];

                            return html`
                                <li class="columns">
                                    <div class="column is-2">
                                        <img alt="${type}" src="${this.getSocialMediaIconUrl(type)}" />
                                    </div>
                                    <div class="column is-7">
                                        <div class="content is-flex">
                                            <h4>${type !== "SMS/WhatsApp" ? "Share and Follow us on": "Referrals to your friends."} ${type}</h4>
                                            <p>
                                                Reward customers ${points} FREE points once they have successfully shared and
                                                followed on ${type}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="column is-2">
                                        <label class="switch">
                                            ${
                                                toggle ? html`
                                                    <input type="checkbox" checked @change=${e => this.onToggleChangeHandler(e,type)}>
                                                `: html`
                                                    <input type="checkbox" @change=${e => this.onToggleChangeHandler(e,type)}>
                                                `
                                            }
                                            <span class="slider round"></span>
                                        </label>
                                        <h4 class="edit" @click=${() => this.onEditTextClickHandler(type, points)}>Edit</h4>
                                    </div>
                                </li>
                                `
                            })
                        }
                    </ul>
                </div>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div class="is-flex">
                            <h4 class="modal-title subtitle is-6">Edit points earned when shared to ${this.socialMediaPointsToEdit.type}</h4>
                            <adaptive-ui-icon icon="close" title="Close" class="close-icon" @click=${() => this.hideModal()}></adaptive-ui-icon>
                        </div>
                        <div class="control has-icons-right input-mixin input-effect">
                            <input id="input" class="label-animation" type="number" 
                                @input=${e => this.socialMediaPointsToEdit.points = e.target.value}
                                value=${this.socialMediaPointsToEdit.points}
                            >
                        </div>
                        <div class="is-flex" style="justify-content: flex-end;">
                            <button class="button" title="Save" type="button" @click=${() => this.onSaveBtnClickHandler()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(SocialMediaPoints.is, SocialMediaPoints);
