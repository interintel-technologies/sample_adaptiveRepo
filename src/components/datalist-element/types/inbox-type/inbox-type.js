
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import 'fa-icons';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import './components/inbox-type-footer/inbox-type-footer';
import './components/inbox-type-header/inbox-type-header';
import { InboxTypeStyles } from "./inbox-type-css";
import globalStyles from '../../../../App.css?raw';

export class InboxType extends LitElement {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			InboxTypeStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
		/**
		 * Contains the data which will be displayed in the table.
		 */
		data: {
			type: Array,
			notify: true,

		},
		columns: {
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
			type: Number,


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
		
		const selectable = this.details.selectable;
		const allCheckBoxes = this.shadowRoot.querySelectorAll('input[type=checkbox]');
		const allStars = this.shadowRoot.querySelectorAll('.icon.has-text-grey.pointer.visible');
		const columnsType = typeof this.columns;

		columnsType !== "Boolean" ? allStars.forEach((star)=>{star.classList.replace("visible","hidden")}) :allStars.forEach((star)=>{});

		if(selectable === undefined){
			allCheckBoxes.forEach((checkbox)=>{checkbox.style.display = "none"});
		}else{
			selectable !== true ? allCheckBoxes.forEach((checkbox)=>{checkbox.style.display = "none"}) : allCheckBoxes.forEach((checkbox)=>{checkbox.style.display = "block"});
		}
	}
	
	checkRow(index) {
		const row = this.shadowRoot.querySelector('#tr-'+index);
		const checkbox = this.shadowRoot.querySelector('#checkbox-'+index);
		const deleteAchieveSec = this.shadowRoot.querySelector('#deleteAchieveSec');
		const hideUnhideSec = this.shadowRoot.querySelector('#hideUnhideSec');
		const rowTexts = row.querySelectorAll('.normal-td');
		const checked = this.shadowRoot.querySelectorAll('input:checked');

		if (checked.length === 0) {
			// there are no checked checkboxes
			deleteAchieveSec.className = 'hide-action'
			hideUnhideSec.className = 'hide-action';
		} else {
			// there are some checked checkboxes
			deleteAchieveSec.className = 'unhide-action'
			hideUnhideSec.className = 'unhide-action';
		}

		if (checkbox.checked == true) {
			row.classList.add('active-row');
			rowTexts.forEach((text)=>{text.classList.add('active-color');});
		} else {
			row.classList.remove('active-row');
			rowTexts.forEach((text)=>{text.classList.remove('active-color');});
		}
	}

	favorite(index) {
		const span1 = this.shadowRoot.querySelector('#span-icon1-'+index);
		const span2 = this.shadowRoot.querySelector('#span-icon2-'+index);

		if (span1.classList.contains('visible')) {
			span1.classList.replace('visible', 'hidden');
			span2.classList.replace('hidden', 'visible');
		} else {
			span1.classList.replace('hidden', 'visible');
			span2.classList.replace('visible', 'hidden');
		}
	}

	deleteMessages() {
		const selectedMessages = this.shadowRoot.querySelectorAll('tr[class~="active-row"]');
		selectedMessages.forEach((message)=>{message.classList.add('hidden');});
	}

	archiveMessages() {
		const selectedMessages = this.shadowRoot.querySelectorAll('tr[class~="active-row"]');
		selectedMessages.forEach((message)=>{message.classList.add('hidden');});
	}

	overlayMessages() {
		const selectedMessages = this.shadowRoot.querySelectorAll('tr[class~="active-row"]');
		selectedMessages.forEach((message)=>{message.classList.add('overlay');});
	}

	removeOverlayMessages() {
		const overlayMessages = this.shadowRoot.querySelectorAll('tr[class~="overlay"]');
		overlayMessages.forEach((message)=>{message.classList.remove('overlay');});
	}

	_pageChanged(evt) {
		const page = evt.detail.page;
		const oldPage = this.page;
		if (oldPage !== undefined) {
			this.dispatchEvent(new CustomEvent('page-change', {
				detail: {
					oldPage: oldPage,
					page: page,
				},
			}));
		}
		this.page = page;
	}

	_sizeChanged(evt) {
		const size = evt.detail.size;
		const oldSize = this.size;

		if (oldSize !== undefined) {
			this.dispatchEvent(new CustomEvent('size-change', {
				detail: {
					oldSize: oldSize,
					size: size,
				},
			}));
		}
		this.size = size;
	}

	static get is() {
		return 'inbox-type';
	}

	render() {
		return html`
			<section class="section">
				<inbox-type-header .title="${this.title}"></inbox-type-header>
				<table class="table is-fullwidth is-hoverable"  style="background-color: #f7f6f6;">
					<thead>
						<tr >
							<th style="padding-top: 10px; padding-bottom: 10px;">
								<input  type="checkbox" name="" id=""> 
							</th>
							<th id="hideUnhideSec" class="hide-action" style="padding-top: 10px; padding-bottom: 10px; ">
								<div id="eye-icon" @click="${this.removeOverlayMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px;" class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-eye" color="#000000"></fa-icon>
								</div>
								<div id="eye-slash-icon" @click="${this.overlayMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px;" class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-eye-slash" ></fa-icon>
								</div>
							</th>
							<th id="deleteAchieveSec" class="hide-action" style="padding-top: 10px; padding-bottom: 10px;">
								<span id="icon-delete" @click="${this.deleteMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px; " class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-trash-alt" ></fa-icon>
								</span>
								<span id="icon-archive" @click="${this.archiveMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px; margin-left: -5px; " class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-archive"></fa-icon>
								</span>
							</th>
							<th></th>
							<th style="padding-top: 10px; padding-bottom: 10px;">
								<p id="icon-message" style="font-weight: bold; font-size: 16px; font-family: Montserrat; color: #2f75ec;">
									<span class="icon is-pulled-left" style="color: #000000; margin-right: 7px; margin-top: 4px;">
										<fa-icon class="fas fa-envelope" color= "#2f75ec" ></fa-icon>
									</span>
									Text Message
								</p>
							</th>
						</tr>
					</thead>
					<tbody>
						${
							this.data.map((item, itemIndex) => html`
								<tr id="tr-${itemIndex}" class="normal-tr">
									<th style="padding-top: 20px; padding-bottom: 20px;">
										<label class="checkbox">
											<input id="checkbox-${itemIndex}" class="inboxCheckBox" @click="${()=>this.checkRow(itemIndex)}" type="checkbox">
										</label>
									</th>
									<td style="padding-top: 20px; padding-bottom: 20px;">
										<span id="span-icon1-${itemIndex}" class="icon has-text-grey pointer visible" @click="${()=>this.favorite(itemIndex)}">
											<fa-icon id="fa-${itemIndex}"  class="far fa-star" style="fill: #d4d4d4;height: 17px;width: 19px;" ></fa-icon>
										</span>
										<span id="span-icon2-${itemIndex}" class="icon has-text-grey pointer hidden " @click="${()=>this.favorite(itemIndex)}">
											<fa-icon id="fa-${itemIndex}"  class="fas fa-star" style="fill: #ff8000;height: 17px;width: 19px;" ></fa-icon>
										</span>
									</td>
									<td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${item.name}</td>
									<td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${item.description}</td>
									<td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${item.id}</td>
								</tr>
							`)
						}
					</tbody>
				</table>
				${
					this.paginate ? html`
						<inbox-type-footer resources="${this.resources}"
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
						</inbox-type-footer>
					` : ""
				}
			</section>
		`;
	}
}

customElements.define(InboxType.is, InboxType);
