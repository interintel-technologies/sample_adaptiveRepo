
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import 'fa-icons';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import './components/contact-type-footer/contact-type-footer';
import './components/contact-type-header/contact-type-header';
import { ContactTypeStyles } from "./contact-type-css";
import globalStyles from '../../../../App.css?raw';

export class ContactType extends LitElement {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			ContactTypeStyles,
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

	checkRow(index) {
		const row = this.shadowRoot.querySelector('#tr-'+index);
		const checkbox = this.shadowRoot.querySelector('#checkbox-'+index);

		if (checkbox.checked == true) {
			row.classList.add('active-row');
		} else {
			row.classList.remove('active-row');
		}
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
		return 'contact-type';
	}

	render() {
		return html`
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet">
			<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
			<section class="section">
				<contact-type-header .title="${this.title}"></contact-type-header>
				<table class="table is-fullwidth is-hoverable"  style="background-color: #ececee;">
					<thead>
						<tr style="background-color: #ececee; border-bottom: 0px solid #ececee;">
							<th style=" border-bottom: 0px solid #ececee;">
								<p style="color: #1f2552; font-size: 22px; font-weight: bold; font-family: Noto Sans JP;"> Contacts </p>
							</th>
							<th style=" border-bottom: 0px solid #ececee;"></th>
							<th style=" border-bottom: 0px solid #ececee;"></th>
							<th style=" border-bottom: 0px solid #ececee;"></th>
							<th  style=" border-bottom: 0px solid #ececee;">
								<span class="icon has-text-grey list-icon" style=" background-color: white;">
									<fa-icon class="fas fa-list" style="width: 13px; height: 11px;"></fa-icon>
								</span>
								<p class="button" style="font-family: Montserrat; font-size: 12px;font-weight: 500; color: #757575;">
									Filter
									<span class="icon " style=" background-color: white; margin-left: 5px;">
										<fa-icon class="fas fa-list" style="width: 16px; height: 16px;"></fa-icon>
									</span>
								</p>
							</th>
							<th style=" border-bottom: 0px solid #ececee;">
								<p class="th-add-contact" style="float: left; color: #2f75ec; font-size: 16px; font-weight: bold;">
									<span class="icon ">
										<fa-icon class="fas fa-user-plus  add-contact-icon" color="#575bde"></fa-icon>
									</span>
									<span> Add contacts </span>
								</p>
							</th>
						</tr>
						<tr style="background-color: #ececee; ">
							<th style="padding-top: 20px; padding-bottom: 20px; " >
								<a class="is-paddingless" href="">
									<span class="icon  basic-info-icon" style="color: rgba(17, 15, 36, 0.4); background-color: white; border-radius: 3px;">
										<fa-icon class="far fa-plus-square "></fa-icon>
									</span>
								</a>
							</th>
							<th style="padding-top: 20px; padding-bottom: 20px;">
								<p class="th-basic-info" style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">BASIC INFO </p>
							</th>
							<th style="padding-top: 20px; padding-bottom: 20px;">
								<p style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">COMPANY</p> 
							</th>
							<th style="padding-top: 20px; padding-bottom: 20px;">
								<p style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">PHONE NUMBER </p>
							</th> 
							<th style="padding-top: 20px; padding-bottom: 20px;">
								<p style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">CREATED DATE </p>
							</th> 
							<th style="padding-top: 20px; padding-bottom: 20px; ">
								<p class="button" style="width: 19.9px; height: 20px; font-weight: bolder;">﹤</p> 
								<p class="button" style="width: 19.9px; height: 20px; font-weight: bolder;">﹥</p>
							</th>
						</tr>
					</thead>
					<tbody>
						${
							this.data.map((item, itemIndex) => html`
								<tr id="tr-${itemIndex}" class="normal-tr">
									<th style="padding-top: 22px; padding-bottom: 20px;">
										<label class="checkbox">
											<input id="checkbox-${itemIndex}" @click="${()=>this.checkRow(itemIndex)}" type="checkbox">
										</label>
									</th>
									<td class="" style="padding-top: 22px; padding-bottom: 9px; ">
										<span class="icon td-basic-info " style="color: #d8d8d8; margin-right: 19.1px; ">
											<fa-icon class="fas fa-circle" color ="#d4d4d4" style="width: 40.2px; height: 40px;"></fa-icon>
										</span>
										<p class="basic-info-p1 td-basic-info1" style="font-size: 12px; font-family: Montserrat; color: #757575;  font-weight: 500px;">${item.name}</p>
										<p class="basic-info-p2 td-basic-info1" style="font-size: 12px; font-family: Montserrat; color: #ccced0; font-weight: 500px;  margin-top: -3px;">${item.description}</p>
									</td>
									<td style="padding-top: 23px; padding-bottom: 22px;">
										<p style="font-size: 12px; font-family: Montserrat;color: #757575;  font-weight: 500px;">${item.id}</p>
									</td>
									<td style="padding-top: 24px; padding-bottom: 21px;">
										<p style=" font-size: 12px; font-family: Montserrat;color: #757575; font-weight: 500px; ">${item['Contact Count']}</p>
									</td>
									<td style="padding-top: 24px; padding-bottom: 21px;">
										<p style="font-size: 12px; font-family: Montserrat; color: #757575; font-weight: 500px; ">${item.index} </p>
									</td>
									<td style="padding-top: 24px; padding-bottom: 27px;">
										<p class="help sortbtn" style=" color: #bac5cb;"> •••</p>
									</td>
								</tr>
							`)
						}
						<tr id="first-row" style="background-color: #ececee; box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); border-radius: 3px; margin-bottom: 5px;">
							<th style="padding-top: 22px; padding-bottom: 20px;"></th>
							<td class="" style="padding-top: 22px; padding-bottom: 9px;">
								<p class="items-per" style=" font-size: 12px; font-weight: normal; font-family: Lato;">Items per page:</p>
								<span style="margin-left: 10px; font-size: 14px; font-weight: normal; font-family: Lato;">9</span>
								<a href="" class = "has-text-black-bis">
									<span class="icon " style=" background-color: #ececee; margin-left: 5px; ">
										<fa-icon class="fas fa-caret-down" style = "height: 18px; width: 18px;" ></fa-icon >
									</span>
								</a>
								<span class="separatore-line" style="margin-right: 20px; margin-left: 3.1px;font-size: 12px; font-weight: normal; font-family: Lato;"> |</span>
								<span class="counting-pagination" style="font-size: 12px; font-weight: normal; font-family: Lato;"> 1 -10 of 20 Items</span>
							</td>
							<td style="padding-top: 23px; padding-bottom: 22px;"></td>
							<td style="padding-top: 24px; padding-bottom: 21px;"></td>
							<td style="padding-top: 24px; padding-bottom: 21px;"></td>
							<td style="padding-top: 24px; padding-bottom: 27px;">
								<span class=" has-text-black-bis pagination-1" style=" font-size: 14px; font-family: Lato; font-weight: normal; ">
									1 of 2 pageSelector
								</span>
								<a href="" class="previuos-msg">
									<span class="icon " style=" background-color: #ececee; margin-left: 35px;">
										<fa-icon  class="fas fa-caret-left" style = "height: 18px; width: 18px;" ></fa-icon>
									</span>
								</a>
								<span class="has-text-black-bis" style=" font-size: 12px; font-family: Lato; font-weight: normal; margin-left: 20px; margin-right: 20px;">1</span>
								<a href="">
									<span class="icon " style=" background-color: #ececee; margin-left: 5px;">
										<fa-icon  class="fas fa-caret-right" style = "height: 18px; width: 18px;"></fa-icon>
									</span>
								</a>
							</td>
						</tr>
					</tbody>    			
				</table>
					${
						this.paginate ? html`
							<contact-type-footer resources="${this.resources}"
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
							</contact-type-footer>
						` : ""
					}
			</section>
		`;
	}
}
customElements.define(ContactType.is, ContactType);
