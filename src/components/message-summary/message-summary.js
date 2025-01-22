import { html, css, unsafeCSS } from "lit-element";
import { MessageSummaryBase } from "../../base/elements/message-summary";
import { MessageSummaryStyles } from "./message-summary-css";
import globalStyles from '../../App.css?raw'

class MessageSummary extends MessageSummaryBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      MessageSummaryStyles,
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
}

static get properties() {
    return {
        rows: { type: Array },
        e: { type: Object },
        cols: { type: Array },
    };
}

updated(changedProperties) {
  if (changedProperties.has('e')) {
    console.log("message summary is ",this.e);
    
  }
}



  createMessagePreviewBlock() {
    const mainObject = JSON.parse(this.e.defaultValue);
    const messageText = mainObject.message.text;

    return html`
      <div class="block">
        <h3>Message Preview</h3>
        <p>${messageText}</p>
      </div>
    `;
  }

  createScheduleBlock() {
    const mainObject = JSON.parse(this.e.defaultValue);
    const date = mainObject.message["scheduled_date"];
    const time = mainObject.message["scheduled_time"];

    return html`
      <div class="block">
        <h3>Schedule</h3>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
      </div>
    `;
  }

  createFloatUsageBlock() {
    const mainObject = JSON.parse(this.e.defaultValue);
    const objKey = Object.keys(mainObject).find((key) => key !== "message");
    const network = objKey;
    const receipts = mainObject[objKey]["recipient_count"];
    const alias = mainObject[objKey]["alias"];

    return html`
      <div class="block">
        <h3>Float Usage</h3>
        <p>Network: ${network}</p>
        <p>Recipients: ${receipts}</p>
        <p>Alias: ${alias}</p>
      </div>
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    let phoneMessage = this.shadowRoot.querySelector("#phoneText");
    // console.log("PHONE MESSAAGE",phoneMessage.innerText);

    let mainObject = JSON.parse(this.e.defaultValue);

    if (mainObject.hasOwnProperty("message")) {
      let messageObj = mainObject["message"]; //message object
      let textValue = messageObj["text"];

      if (textValue != null || textValue != undefined) {
        phoneMessage.innerText = textValue;
      } else {
        textValue = messageObj["Text"];
        phoneMessage.innerText = textValue;
      }
    } else if (mainObject.hasOwnProperty("Message")) {
      let messageObj = mainObject["Message"]; //message object
      let textValue = messageObj["text"];

      if (textValue != null || textValue != undefined) {
        phoneMessage.innerText = textValue;
      } else {
        textValue = messageObj["Text"];
        phoneMessage.innerText = textValue;
      }
    }
  }

  getText(groupTitle, subTitle) {
    if (subTitle === "text" || subTitle === "Text") {
      //  phoneMessage.innerText =  this._getSubtitleValue(groupTitle,subTitle);

      return subTitle;
    } else {
      return subTitle;
    }
  }

  getGroupTitles(mainObject) {
    return Object.keys(mainObject);
  }

  getGroupTitles(mainObject) {
    return Object.keys(mainObject);
  }

  _getSubGroupTitles(objectKeyTitle) {
    let obj = JSON.parse(this.e.defaultValue);
    let subtilesObject = obj[objectKeyTitle]; // we get an object
    let subTitles = Object.keys(subtilesObject);

    return subTitles;
  }

  _getSubtitleValue(objectKeyTitle, subTitleKey) {
    let obj = JSON.parse(this.e.defaultValue);
    let subtilesObject = obj[objectKeyTitle]; // we get an object
    let subTitlesValue = subtilesObject[subTitleKey]; // we get the value

    return subTitlesValue;
  }

  toTitleCase(string) {
    if (!string) return "";
    string = string.toString();
    string = string.toLowerCase().split("_");
    let newString = [];
    for (let i = 0; i < string.length; i++) {
      newString[i] = string[i].substr(0, 1).toUpperCase() + string[i].substr(1);
    }
    return newString.join(" ");
  }

  getMessageText() {
    let mainObject = JSON.parse(this.e.defaultValue);
    let messageObj = mainObject["message"]; //message object
    let textValue = messageObj["text"];
    "".startsWith("scheduled");

    return textValue;
  }

  static get is() {
    return "message-summary";
  }

  render() {
    return html`
      <style>
        .message-container {
          width: 36%;
          min-height: 400px;
          position: relative;
          margin-left: 8%;
        }
        .image-cont {
          width: 100%;
          height: 100%;
          align-items: center;
          display: flex;
          position: absolute;

          /* The image used */
          background-image: url("src/themes/dsv1.0/img/isometic/iphone potrait.png");
          background-position: 0px;
          background-size: contain;
          background-repeat: no-repeat;
        }
      </style>
      <section>
        <div class="columns has-text-weight-bold is-size-6 content card p-6">
          <div class="message-container">
            <div class="image-cont" style="width:100%;"></div>
            <div class="text">
              <p id="phoneText" class="text-message">Your Message Comes Here</p>
            </div>
          </div>
          <div class="content">
            ${this.getGroupTitles(JSON.parse(this.e.defaultValue)).map(
              (groupTitle, index, array) => html`
                <div class="group-title">
                  <h3>${this.toTitleCase(groupTitle)}</h3>
                </div>
                ${this._getSubGroupTitles(groupTitle).includes("text")
                  ? html`
                      <div class="block">
                        <div class="column">
                          <h4>Text</h4>
                          <p>${this.getMessageText()}</p>
                          <h4 style="margin-top : 1.5rem;">
                            Scheduled Date & Time
                          </h4>
                          <p>
                            ${this._getSubtitleValue(
                              groupTitle,
                              "scheduled_date"
                            )}
                            At
                            ${this._getSubtitleValue(
                              groupTitle,
                              "scheduled_time"
                            )}
                          </p>
                        </div>
                      </div>
                    `
                  : html`
                      <div class="block is-flex">
                        ${this._getSubGroupTitles(groupTitle)
                          .filter(
                            (subTitle) =>
                              subTitle !== "text" &&
                              !subTitle.startsWith("scheduled")
                          )
                          .map(
                            (subTitle) => html`
                              <div class="column">
                                <h4>
                                  ${this.toTitleCase(
                                    this.getText(groupTitle, subTitle)
                                  )}
                                </h4>
                                <p>
                                  ${this._getSubtitleValue(
                                    groupTitle,
                                    subTitle
                                  )}
                                </p>
                              </div>
                            `
                          )}
                      </div>
                    `}
                ${index !== array.length - 1 ? html`<hr />` : html``}
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define(MessageSummary.is, MessageSummary);
