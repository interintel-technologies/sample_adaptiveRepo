import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { EmailSummaryStyles } from "./email-summary-css";
import globalStyles from '../../App.css?raw';

class EmailSummary extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            EmailSummaryStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            e: { type: Object }
        };
    }

    constructor() {
        super();
        this.e = { defaultValue: '{}' }; // Initialize `e` with a default value to avoid JSON parsing errors
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        let phoneMessage = this.shadowRoot.querySelector("#phoneText");
        let mainObject = JSON.parse(this.e.defaultValue);

        if (mainObject.hasOwnProperty('message')) {
            let messageObj = mainObject['message'];
            let textValue = messageObj['text'] || messageObj['Text'];
            if (textValue) {
                phoneMessage.innerText = textValue;
            }
        } else if (mainObject.hasOwnProperty('Message')) {
            let messageObj = mainObject['Message'];
            let textValue = messageObj['text'] || messageObj['Text'];
            if (textValue) {
                phoneMessage.innerText = textValue;
            }
        }
    }

    getText(groupTitle, subTitle) {
        if (subTitle === 'text' || subTitle === 'Text') {
            return subTitle;
        }
        return subTitle;
    }

    getGroupTitles(mainObject) {
        return Object.keys(mainObject);
    }

    _getSubGroupTitles(objectKeyTitle) {
        let obj = JSON.parse(this.e.defaultValue);
        let subtilesObject = obj[objectKeyTitle];
        let subTitles = Object.keys(subtilesObject);

        return subTitles;
    }

    _getSubtitleValue(objectKeyTitle, subTitleKey) {
        let obj = JSON.parse(this.e.defaultValue);
        let subtilesObject = obj[objectKeyTitle];
        let subTitlesValue = subtilesObject[subTitleKey];

        return subTitlesValue;
    }

    render() {
        return html`
            <section>
                <div class="columns content">
                    <div class="image-container">
                        <div class="screen-shot"></div>
                        <div class="text">
                            <h6 id="phoneText" class="text-message">Your Message Comes Here</h6>
                        </div>
                    </div>
                    <div class="content-2">
                        ${
                            this.getGroupTitles(JSON.parse(this.e.defaultValue)).map((groupTitle, groupIndex) => html`
                                <div class="group-title">
                                    <h1>${groupTitle}</h1>
                                </div>
                                <div class="group">
                                    ${
                                        this._getSubGroupTitles(groupTitle).map((subTitle) => html`
                                            <div class="column">
                                                <h6 class="summary-p ">${this.getText(groupTitle, subTitle)}</h6>
                                                <h6 class="summary-info">${this._getSubtitleValue(groupTitle, subTitle)}</h6>
                                            </div>
                                        `)
                                    }
                                </div>
                            `)
                        }
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define("email-summary", EmailSummary);
