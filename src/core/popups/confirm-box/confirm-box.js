import { LitElement, html, css } from 'lit-element';
import { ConfirmBoxStyles } from './confirm-box-css';
import { CONFIRM_BOX_ACTION_CLICKED_EVENT_NAME } from '../PopUp';

class ConfirmBox extends LitElement {

  static get properties() {
    return {
      title: String,
      subtitle: String,
      actions: Array,
      closable: Boolean
    };
  }

  constructor() {
    super();
    this.title = "";
    this.subtitle = "";
    this.actions = [];
    this.closable = true;
  }

  static get styles() {
    return [
      super.styles,
      ConfirmBoxStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  closeConfirmBox() {
    this.remove();
  }

  onActionClickHandler(actionId) {
    this.dispatchEvent(new CustomEvent(CONFIRM_BOX_ACTION_CLICKED_EVENT_NAME, {
      bubbles: true,
      composed: true,
      detail: actionId
    }));
    this.closeConfirmBox();
  };

  render() {
    this.title = JSON.parse(this.title);
    this.subtitle = JSON.parse(this.subtitle);
    this.actions = JSON.parse(this.actions);
    return html`
      <div class="modal is-active">
        <div class="modal-background" @click=${() => this.closable && this.closeConfirmBox()}></div>
        <div class="modal-content">
          <div class="box">
            <h2 class="title">${this.title}</h2>
            <p>${this.subtitle}</p>
            <div class="buttons">
              ${
                this.actions.map(action => html`
                  <button class="button ${action.color}" @click=${() => this.onActionClickHandler(action.id)}>
                    ${action.label}
                  </button>
                `)
              } 
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click=${() => this.closeConfirmBox()}></button>
      </div>
    `;
  }

}

customElements.define('confirm-box', ConfirmBox);