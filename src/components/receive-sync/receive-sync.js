import {html,css, unsafeCSS} from 'lit-element';
import { ReceiveSyncStyles } from './receive-sync-css';
import { ReceiveSyncBase } from '../../base/elements/receive-sync';
import globalStyles from '../../App.css?raw';

class ReceiveSync extends ReceiveSyncBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      ReceiveSyncStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  render() {
    return html`
 
<div class="field">
<article class="message is-primary">
  <div class="message-header">
    <p>${this.name}</p>
  </div>
  <div class="message-body">
   ${this.text}
  </div>
</article>
</div>

        `;
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  onMqttMessage(message) {
    super.onMqttMessage(message);

    var self = this;
    console.log('on-mqtt-message');
    /*
        var payload = JSON.parse(message.payloadString);
        console.info(payload);
        self.$.datasource._parsePayload(payload);
        */
  }
}
window.customElements.define(ReceiveSync.is, ReceiveSync);
