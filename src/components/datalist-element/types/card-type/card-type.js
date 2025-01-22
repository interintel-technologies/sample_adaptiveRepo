
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import '@polymer/iron-image/iron-image';
import '@polymer/paper-button/paper-button';
import './components/card-type-header/card-type-header';
import './components/card-type-footer/card-type-footer';
import { CardTypeStyles } from "./card-type-css";
import '../../../empty-view/empty-view';
import globalStyles from '../../../../App.css?raw';

export class CardType extends LitElement {
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			CardTypeStyles,
			css`
				:host {
				display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			data: {
				type: Array,
				notify: true,
			},
			pl: Object,
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
			message:String,
			gateway:String,
		};
	}

	_action(evt) {
		const dataAction = evt.currentTarget.dataLink;

		this.pl._dialog(dataAction.service, dataAction.params);
	}

	values(item) {
		const v = [];

		for (var property in item) {
			if (item.hasOwnProperty(property)) {
				// do stuff
				if (property !== 'links' && property !== 'image' && property !== 'name') {
					v.push([property, item[property]]);
				}
			}
		}
		return v;
	}

	downloads(item, details) {
		if ('download_links' in details && details['download_links'].length) {
			const v = [];

			for (var property in item) {
				if (item.hasOwnProperty(property) && details['download_links'].includes(property)) {
					v.push([property, item[property]]);
				}
			}

			return v;
		}
		return [];
	}

	static get is() {
		return 'card-type';
	}

	render() {
		return html`
			<card-type-header .title="${this.title}"></card-type-header>
			${
				this.data.length == 0 ? html`
					<empty-view message="${this.message}" gateway="${this.gateway}" ></empty-view>
				`: html`
					<div style="height: 60vh;overflow-y: scroll;">
						${
							this.data.map(item => html`
								<div class="item">
									<iron-image class="avatar" sizing="contain" src="/media/${item.image}"></iron-image>
									<div class="pad">
										<div class="primary">${item.name}</div>
										${
											this.values(item).map(vv=>html`
												<div class="secondary">
													${vv[0]}
													<span class="secondary dim">${vv[1]}</span>
												</div>
											`)
										}
										${
											this.downloads(item, this.details).map(download => html`
												<a target="_blank" class="secondary" download href="/media/${download[1]}"> Download ${download[0]}</a>
											`)
										}
										<div>
											${
												item.links.map(ll => html`
													<paper-button .dataLink=${ll} @tap="${this._action}" style="display: inline-block;">${ll.title}</paper-button>
												`)
											}
										</div>
									</div>
								</div>
							`)
						}
					</div>
					${
						this.paginate ? html`
							<card-type-footer resources="${this.resources}"
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
							</card-type-footer>
						` : ""
					} 
				`
			}
		`;
	}
}

customElements.define(CardType.is, CardType);
