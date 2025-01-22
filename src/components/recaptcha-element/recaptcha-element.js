import { css, html, LitElement,unsafeCSS } from 'lit-element';
import { RecaptchaElementBase } from '../../base/elements/recaptcha-element';

class RecaptchaElement extends RecaptchaElementBase {
  static get styles() {
    return [
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

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      this.initRecaptcha();
    }
  }

  initRecaptcha() {
    if (this.e && this.e.defaultValue) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${this.e.defaultValue}`;
      document.head.appendChild(script);
      script.onload = () => {
        // Further reCAPTCHA initialization if needed
      };
      script.onerror = () => {
        console.error("Failed to load reCAPTCHA script");
      };
    } else {
      console.error("reCAPTCHA key (defaultValue) not provided");
    }
  }

  render() {
    return html``;
  }
}

customElements.define('recaptcha-element', RecaptchaElement);
