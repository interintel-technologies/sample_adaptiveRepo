import { html, css, LitElement,unsafeCSS } from 'lit-element';
import { ConfirmDialogStyles } from './confirm-dialog-css';
import globalStyles from '../../App.css?raw';

class ConfirmDialog extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      ConfirmDialogStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      message:  String,
      title: String,
      header:String,
      confirmButtonText: String,
      cancelButtonText: String,
      actions:Array,
      params: {type: Object, value: {}},
      buttons: Array,
      isOpen: Boolean
    };
  }

  constructor({title="", message="", buttons=[]}={}) {
    super();
    this.confirmButtonText = 'Confirm';
    this.cancelButtonText = 'Cancel';
    this.actions =[];
    this.message = message;
    this.title = title;
    this.buttons = buttons

    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.isOpen = true;
    document.body.appendChild(this)
  }

  static get is(){
    return 'confirm-dialog';
  }

  // firstUpdated(){
  //   this.actions=this.e.details.actions;     
  // }

  actionClickHandler(service){
    if(service.toLowerCase() === "form") {
      this.pl.submitForm();
    }
    else {
      // this.closeSectionPage();
    }
  }

  renderButton(button) {
    return html`
      <button class="button is-${button.color}" @click="${button.callback}">
        ${button.label}
      </button>
    `;
  }

  renderButtons() {
    return html`
      <div class="buttons">
        ${this.buttons.map((button) => this.renderButton(button))}
      </div>
    `;
  }

  render() {
    return html`
      <div class="modal ${this.isOpen ? 'is-active' : ''}">
        <div class="modal-background" @click="${this.closeModal}"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            ${this.title == "warning" ? html`
            <span class="icon icon-danger">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </span>
            ` : html`
            <span class="icon icon-success">
              <i class="fa-solid fa-circle-check"></i>
            </span>
            `}
            <p class="modal-card-title">${this.title}</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <p>${this.message}</p>
          </section>
          <footer class="modal-card-foot">
            ${this.renderButtons()}
          </footer>
        </div>
      </div>
    `;
  }
}

customElements.define(ConfirmDialog.is, ConfirmDialog);

export default ConfirmDialog;