import { html, css, unsafeCSS } from 'lit';
import { LiveChatBase } from '../../base/elements/live-chat';
import 'fa-icons';
import globalStyles from '../../App.css?raw';

class LiveChat extends LiveChatBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  constructor() {
    super();
    this.e = null;
  }

  static get properties() {
    return {
      e: { type: Object }
    };
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      this.initLiveChatElement();
    }
  }

  initLiveChatElement() {
    const key = this.e.defaultValue;

    if (!key) {
      throw new Error("Key not provided. Get key from Tawk dashboard - Direct Chat Link");
    }

    if (document.getElementById('tawkId')) {
      // Prevent re-inserting the script if it already exists
      return;
    }

    const script = document.createElement("script");
    script.id = 'tawkId';
    script.async = true;
    script.src='https://embed.tawk.to/66d80c2cea492f34bc0d7f76/1i6tuv3ts';;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (!firstScriptTag || !firstScriptTag.parentNode) {
      throw new Error('DOM is unavailable');
    }

    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const script = document.getElementById('tawkId');
    if (script) {
      script.remove();
    }
  }

  render() {
    return html``; // You can add content here if needed
  }
}

customElements.define('live-chat', LiveChat);
