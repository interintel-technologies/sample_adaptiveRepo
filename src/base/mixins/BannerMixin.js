
export const BANNER_EVENT_NAME = "banner-event"

/**
 * @typedef Banner
 * @property {string} message
 * @property {string} [type="up"] - up || down
 * @property {string} position 
 * @property {boolean} cancelable=true
 * @property {number} duration
 */

/** @type {Banner} */
const Banner =  {
    message: "",
    type: "up",
    position: "",
    cancelable: true,
    duration: 1000
};

class PopUp {

    static componentEventListeners() {
        window.addEventListener(BANNER_EVENT_NAME)
    }

    /**
     * Push a banner to the banner stack
     * @param {Banner} banner 
     */
    static pushBanner(banner) {
        this.dispatchEvent(new CustomEvent(BANNER_EVENT_NAME, {
            bubbles: true,
            composed: true,
            detail: banner
        }));
    }
}