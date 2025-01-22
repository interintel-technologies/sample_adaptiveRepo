
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-menu-button/paper-menu-button';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';
import { DatasourceTableActionsStyles } from './datasource-table-actions-css';
import globalStyles from '../../../../App.css?raw';


/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class DataSourceTableActions extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DatasourceTableActionsStyles,
            css`
                :host {
                    display: flex;
                }
            `
        ];
    }

    constructor() {
        super();
        this.cols = [];
    }

    // Declare properties for the element's public API
    static get properties() {
        return {
            cols: {type: Array, value: []},
            pl: Object,
            item: Object,
            rowIndex: Number
        };
    }

    connectedCallback() {
        super.connectedCallback();
    
        window.addEventListener("click", e => this.closeDropdownOnOutsideClick(e));    
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    
        window.removeEventListener("click", e => this.closeDropdownOnOutsideClick(e));    
    }
    
    onDropdownItemClickHandler(link) {
        console.log("this link test",link)
        this.pl._dialog.apply(this.pl, [link.service, link.params]);
        this.onDropdownTriggerClickHandler();
    }

    onDropdownTriggerClickHandler() {
        this.shadowRoot.querySelector(".dropdown").classList.toggle("is-active")
    }

    closeDropdownOnOutsideClick(e) {
		const openDropdown = this.shadowRoot.querySelector(".dropdown.is-active");
		if(openDropdown) {
            const foundObject=e.composedPath().find(o=>o.id === openDropdown.id);
            const foundClass=Object.values(openDropdown.classList).find(c=>c === "is-active");

            if(foundObject === undefined && foundClass ==="is-active"){
                openDropdown.classList.remove('is-active');
            }
        }
	}

    static get is() {
        return 'datasource-table-actions';
    }

    render() {
        return html`
            ${
                this.item.links ? html`
                    <div id="dropdown${this.rowIndex} content" class="dropdown is-right is-up">
                        <div class="dropdown-trigger is-clickable" title="actions" @click=${() => this.onDropdownTriggerClickHandler()}>
                            <span class="icon">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </span>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                ${
                                    this.item.links.map((link) => html`
                                        <div class="dropdown-item is-clickable" title=${link.title} @click=${() => this.onDropdownItemClickHandler(link)}>
                                            <span class="icon-text">
                                                <span class="icon mr-2">
                                                    <adaptive-ui-icon icon=${link.icon}></adaptive-ui-icon>
                                                </span>
                                                <span>${link.title}</span>
                                            </span>
                                        </div>
                                    `)
                                }
                            </div>
                        </div>
                    </div>
                ` : html``
            }
        `;
    }
}

customElements.define(DataSourceTableActions.is, DataSourceTableActions);
