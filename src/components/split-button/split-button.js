import {html, css, unsafeCSS} from 'lit-element';

import { SplitButtonStyles } from './split-button-css';
import { SplitButtonBase } from '../../base/elements/split-button';
import globalStyles from '../../App.css?raw';


class SplitButton extends SplitButtonBase {

    static get styles() {
        return [
            unsafeCSS(globalStyles), 
            SplitButtonStyles,
            css`
                :host {
                display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            activeOption:"String",
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        };
    }

    constructor() {
        super();
        this.activeOption = "";
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
			this.activeOption = this.e.details.options[0];
        this.value = this.activeOption;
        }}



    onActiveOptionBtnClickHandler() {
        // this.pl.submitForm();
    }

    onDropDownClickHandler () {
        const dropdown = this.shadowRoot.querySelector(".dropdown");
        dropdown.classList.add("is-active");
    }

    onDropDownItemClickHandler(option) {
        const dropdown = this.shadowRoot.querySelector(".dropdown");
        dropdown.classList.remove("is-active");
        this.activeOption=option;
        this.value = option;
    }
    
    static get is() {return 'split-button';}

    renderDefault() {
        return html`
            <div class="content">
                <div class="hero-body is-flex">
                    <div class="button active-option" @click=${()=>this.onActiveOptionBtnClickHandler()} title="${this.activeOption}">
                        ${this.activeOption}
                    </div>
                    <div class="dropdown is-up" >
                        <div class="dropdown-trigger">
                            <button class="button options-btn" @click=${()=>this.onDropDownClickHandler()} aria-haspopup="true" aria-controls="dropdown-menu7">
                                <span class="icon is-small" >
                                    <fa-icon class="fas fa-angle-up" style="fill: white;" aria-hidden="true"></fa-icon>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu7" role="menu">
                            <div class="dropdown-content">
                            ${
                                this.e.details.options.map(option=>html`
                                    <div class="dropdown-item" @click=${()=>this.onDropDownItemClickHandler(option)}>
                                        <h4>${option}</h4>
                                    </div>  
                                `)
                            }
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        `;
    }

}
customElements.define(SplitButton.is, SplitButton);
