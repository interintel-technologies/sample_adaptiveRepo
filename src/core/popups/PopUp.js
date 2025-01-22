
import { PopUpStyles } from './PopUp-css';
import { LitElement, html } from 'lit-element';
export const BANNER_EVENT_NAME = "banner-event";
export const STATUS_DIALOG_EVENT_NAME = "status-dialog-event";
export const CONFIRM_BOX_ACTION_CLICKED_EVENT_NAME = "confirm-box-action-clicked-event";

/**
 * @typedef Banner
 * @property {string} message
 * @property {string} [type="up"] - up || down
 * @property {string} position 
 * @property {boolean} cancelable=true
 * @property {number} duration
 */
/**
 * @typedef ConfirmBoxAction
 * @property {string} id
 * @property {string} label
 * @property {string} color - use any of the CSS classes here https://bulma.io/documentation/helpers/color-helpers/#background-color
 */

/**
 * This callback is called when an action is clicked. Has the action id as a parameter
 * @callback ConfirmBoxActionClickListener
 * @param {ConfirmBoxAction} action.id
 */

export class PopUp extends LitElement {
    static get styles() {
        return {
            PopUpStyles
        };
    }

    static addEventListeners() {
        this.#appendPopUpHolders();
        window.addEventListener(BANNER_EVENT_NAME, e => this.#bannerEventListener(e));
        window.addEventListener(STATUS_DIALOG_EVENT_NAME, e => this.#statusDialogEventListener(e));
    }

    static removeEventListeners() {
        window.removeEventListener(BANNER_EVENT_NAME, e => this.#bannerEventListener(e));
        window.removeEventListener(STATUS_DIALOG_EVENT_NAME, e => this.#statusDialogEventListener(e));
    }
    
    static #bannerEventListener(e) {
        import("./banner-element/banner-element.js");
        const banner = e.detail;
        const topBannerStack = document.querySelector(".top-banner-stack");
        const bottomBannerStack = document.querySelector(".bottom-banner-stack");

        const bannerElement = document.createElement("banner-element");
        bannerElement.setAttribute("banner", JSON.stringify(banner));
        switch(banner.position) {
            case "top":
                topBannerStack.appendChild(bannerElement);
            break;
            case "bottom":
                bottomBannerStack.appendChild(bannerElement);
            break;
            default:
                topBannerStack.appendChild(bannerElement);
            break;
        }
    };

    static #statusDialogEventListener(e) {
        const statusDialog = document.body.querySelector("status-dialog");
        const title = e.detail.title; 
        const type = e.detail.type;
        const status = {title, type};
        if(!statusDialog) {
            import("./status-dialog/status-dialog.js").then(() => {
                const statusDialog = document.createElement("status-dialog");
                document.body.append(statusDialog);
                statusDialog.setAttribute("status", JSON.stringify(status));
            });
        }else {
            statusDialog.setAttribute("status", JSON.stringify(status));
        }
    }

    static #appendPopUpHolders() {
        this.#appendBannerHolders();
    }

    static #appendBannerHolders() {
        const topBanner = document.createElement("div");
        topBanner.className="top-banner-stack";
        topBanner.setAttribute("style", "position: fixed; top: 0; width: 100vw; z-index:10;");

        const bottomBanner = document.createElement("div");
        bottomBanner.className="bottom-banner-stack";
        bottomBanner.setAttribute("style", "position: fixed; bottom: 0; width: 100vw; z-index:10;");

        document.body.append(topBanner, bottomBanner);
    }

    /**
     * Push a banner to the banner stack
     * @param {Banner} banner 
     */
    static pushBanner(banner) {
        window.dispatchEvent(new CustomEvent(BANNER_EVENT_NAME, {
            bubbles: true,
            composed: true,
            detail: banner
        }));
    }

    /**
     * 
     * @param {String} type 
     * @param {String} title 
     */
    static showStatusDialog(type, title) {
        window.dispatchEvent(new CustomEvent(STATUS_DIALOG_EVENT_NAME, {
            bubbles: true,
            composed: true,
            detail: {type, title}
        }));
    }

    /**
     * 
     * @param {string} title 
     * @param {string} subtitle 
     * @param {ConfirmBoxAction[]} actions 
     * @param {ConfirmBoxActionClickListener} onActionClickListener 
     */
    static showConfirmBox(title, subtitle, actions, onActionClickListener) {
        import("./confirm-box/confirm-box.js").then(() => {
            const confirmBox = document.createElement("confirm-box");
            confirmBox.setAttribute("title", JSON.stringify(title));
            confirmBox.setAttribute("subtitle", JSON.stringify(subtitle));
            confirmBox.setAttribute("actions", JSON.stringify(actions));
            confirmBox.addEventListener(CONFIRM_BOX_ACTION_CLICKED_EVENT_NAME, e => onActionClickListener(e.detail));
            document.body.append(confirmBox);
        });
    }
}