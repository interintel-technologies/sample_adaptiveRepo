
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import { StaffProfileTypeHeaderStyles } from "./staff-profile-type-header-css";
import { DatalistHeaderStyles } from '../../../../datalist-header-css';
import globalStyles from '../../../../../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class StaffProfileHeader extends LitElement {
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			StaffProfileTypeHeaderStyles,
			DatalistHeaderStyles,
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
		}
	}

	static get is() {
		return 'staffprofile-type-header';
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

customElements.define(StaffProfileHeader.is, StaffProfileHeader);
