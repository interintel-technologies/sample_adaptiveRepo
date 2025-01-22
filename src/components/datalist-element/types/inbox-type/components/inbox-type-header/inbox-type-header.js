
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import { InboxTypeHeaderStyles } from "./inbox-type-header-css";
import { DatalistHeaderStyles } from '../../../../datalist-header-css';
import globalStyles from '../../../../../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class InboxTypeHeader extends LitElement {
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			DatalistHeaderStyles,
			InboxTypeHeaderStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			title: String
		};
	}
	
	static get is() {
		return 'inbox-type-header';
	}
	
	render() {
		return html`
			<div class="table-header-buttons" style="margin-bottom: 15px;">
				<div class="heading">
					<h1 class="title is-size-6">${this.title}</h1>
				</div>
				<button @tap="${this.generatePDF}" class="button is-primary is-size-7 is-rounded">Export PDF</button>
				<button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
			</div>
		`;
		}
}


customElements.define(InboxTypeHeader.is, InboxTypeHeader);
