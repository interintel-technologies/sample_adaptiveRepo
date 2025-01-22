
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import { CardTypeHeaderStyles } from "./card-type-header-css";
import { DatalistHeaderStyles } from '../../../../datalist-header-css';
import globalStyles from '../../../../../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class CardTypeHeader extends LitElement{
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			DatalistHeaderStyles,
			CardTypeHeaderStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			title: String,
		};
	}

	static get is() {
		return 'card-type-header';
	}

	render() {
		return html`
			<div class="table-header-buttons content" style="margin-bottom: 15px;">
				<div class="heading">
					<h6>${this.title}</h6>
				</div>
				<button id ="pdf-btn" @tap="${this.generatePDF}" class="button is-primary is-size-7 is-rounded">Export PDF</button>
				<button id ="csv-btn" @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
			</div>
		`;
	}
}

customElements.define(CardTypeHeader.is, CardTypeHeader);
