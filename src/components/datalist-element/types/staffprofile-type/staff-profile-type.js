
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import 'fa-icons';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import './components/staff-profile-type-footer/staff-profile-type-footer.js';
import './components/staff-profile-type-header/staff-profile-type-header.js';
import { StaffProfileTypeStyles } from "./staff-profile-type-css.js";
import globalStyles from '../../../../App.css?raw';

export class StaffProfileType extends LitElement {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			StaffProfileTypeStyles,
			css`
				:host {
				display: block;
				}
			`
		];
	}

	static get is() {
		return 'staffprofile-type';
	}

	static get properties() {
		return {
			/**
			 * Contains the data which will be displayed in the table.
			 */
			data: {
				type: Array,
				notify: true
			},
			details: Object,
			paginate: {
				type: Boolean,
				value: false,
			},
			page: {
				type: Number,
			},
			size: {
				type: Number
			},
			/**
			 * The number of the previous page
			 */
			oldPage: {
				type: Number,
				notify: true,
			},
			/**
			 * The total of elements have to be provided in case of pagination, it is mandatory.
			 */
			totalElements: Number,
			/**
			 * The total of pages have to be provided in case of pagination, it is mandatory.
			 * It is used to compute the footer.
			 */
			totalPages: Number,
			/**
			 * The available size in case of pagination.
			 */
			availableSize: Array,
			/**
			 * If true, the rows may be selectable.
			 */
			selectable: {
				type: Boolean,
				value: false,
			},
			/**
			 * Contains the positions of selected columns.
			 * Can contain a specific data if selectableDataKey is setted.
			 */
			selected: {
				type: Array,
			},
			title: String,
		};
	}

	firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);

		const allsideActions = this.shadowRoot.querySelectorAll('.side-action');
		const allDropdowns = this.shadowRoot.querySelectorAll('.arrow-down');
		const statuses = this.shadowRoot.querySelectorAll('a[class~="button"]');
		
		allsideActions.forEach((icon)=>{icon.classList.add("hidden")});
		allDropdowns.forEach((dropdown)=>{dropdown.classList.add("hidden")});
		statuses.forEach((status)=>{
			if ( status.innerHTML !== 'Active') {// do nothing since by default is active
			} else {status.classList.replace('active', 'suspended');}
		});
	}

	doService(evt) {
		if(this.details.service){
			this.dispatchEvent(new CustomEvent('do-service', {
				detail: {
					service: this.details.service,
				},
			}));
		}
	}

	checkRow(index) {
		const row = this.shadowRoot.querySelector('#tr-'+index);
		const checkbox = this.shadowRoot.querySelector('#checkbox-'+index);

		if (checkbox.checked == true) {
			row.classList.add('active-row');
		} else {
			row.classList.remove('active-row');
		}
	}

	render() {
		return html`
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
			<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
			<section class="section">
				<staffprofile-type-header ></staffprofile-type-header>
				<div class="staff-profile">
					<div class="columns staff-header">
						<div class="column">
							<div class="staffTitle">
								<h3 class="has-text-weight-bold">${this.title}</h3>
							</div>
						</div>
						${
							this.details.addType ? html`
								<div class="column">
									<div class="staffTitle is-pulled-right">
										<p @click="${this.doService}" class="has-text-weight-bold" color="var(--app-primary-color)">
											<span class="icon" style="color: #000;">
												<fa-icon class="fas fa-user-plus fa-flip-horizontal" color="var(--app-primary-color)"></fa-icon>
											</span>
											Add ${this.details.addType}
										</p>
									</div>
								</div>
							` : ""
						}
					</div>
					<div class="staff-table">
						<table class="table is-fullwidth is-hoverable">
							<thead>
								<tr>
									${
										this.columns.map(column => html`
											<th>
												<p class="has-text-weight-bold is-capitalized">
													<datasource-staffprofile-head
														.column="${column}"
														sort-direction$="[[column.sortDirection]]"
														@input-change-th-content="${this._handleInputChange}"
														sorted$="[[column.sorted]]"
														sortable$="[[column.sortable]]"
														@sort-th-content="${this._handleSort}">
													</datasource-staffprofile-head>
												</p>
											</th>
										`)
									}
									<th></th>
								</tr>
							</thead>
							<tbody>
								${
									this.data.map((item, itemIndex) => html`
										<tr>
											${
												this.details.selectable !== true ? html`
													<td>
														<span class="normal-td" style="font-weight: normal;">${item.index}</span>
													</td>
												` : html`
													<td>
														<label class="checkbox">
														<input id="checkbox-${itemIndex}" @click="${()=>this.checkRow(itemIndex)}" type="checkbox">
														</label>
													</td>
												`
											}
											<td>
												<span class= "normal-td" >${item.name}</span>
											</td>
											<td> 
												<a id="status-${itemIndex}"  class="button is-small  is-rounded active">${item.description}</a>
											</td>
											<td>
												<span class= "normal-td">${item['Contact Count']}</span>
											</td>
											${
												this.details.selectable !== true ? "" : html`
													<td class="side-action">  
														<span class="icon is-pulled-right pointer">
														<fa-icon class="fas fa-ellipsis-v" color="#6c7a89"></fa-icon>
														</span>
													</td>
												`
											}
										</tr>
									`)
								}
							</tbody>
						</table>
					</div>
				</div>
				${
					this.paginate ? html`
						<staffprofile-type-footer 
							resources="${this.resources}"
							language="${this.language}"
							footer-position="${this.footerPosition}"
							.availableSize="${this.availableSize}"
							.totalPages="${this.totalPages}"
							.totalElements="${this.totalElements}"
							.oldPage="${this.oldPage}"
							size="${this.size}"
							page="${this.page}"
							@size-change="${this._sizeChanged}"
							@p-page="${this._pageChanged}"
							@n-page="${this._pageChanged}">
						</staffprofile-type-footer>
					` : ""
				}
			</section>
		`;
	}
}

customElements.define(StaffProfileType.is, StaffProfileType);
