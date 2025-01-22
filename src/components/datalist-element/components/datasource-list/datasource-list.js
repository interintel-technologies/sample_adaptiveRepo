
import {LitElement, html, css, unsafeCSS} from 'lit-element';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-image/iron-image';
import '../datasource-table-head/datasource-table-head';
import './../datasource-table-actions/datasource-table-actions';
import './../datasource-table-footer/datasource-table-footer';
import { DatasourceListStyles } from "./datasource-list-css";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
// import globalStyles from '../../App.css?raw';
import globalStyles from '../../../../App.css?raw';

export class DataSourceList extends LitElement{
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			DatasourceListStyles,
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
			q: {type: String, value: '', notify: true},
			cols: {type: Array, value: []},
			columns: {
				type: Array,
				// value: () => [],
				// notify: true,
			},
			// todo 3 sets of same columns, can be reduced

			/**
			 * If true, the pagination will be activated.
			 */
			paginate: {
				type: Boolean,
				value: false,
			},
			/**
			 * The current page.
			 */
			page: {
				type: Number,
				// notify: true,
				// observer: '_pageChanged',
			},
			/**
			 * The current size.
			 */
			size: {
				type: Number,
				// notify: true,
				// observer: '_sizeChanged',

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
			// types
			type: {
				type: String,
				value: 'table',
			},
			details: Object,
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
				// value: () => [],
				// notify: true,
			},
			title : String,
			searchText: String,
			selectType:{type:String},
			selectedRadio: String,
			message:String,
			gateway:String,
			alert:Boolean,
			sortAscending:{type:Boolean}

		};
	}

	constructor() {
		super();

		this.columns = [];
		this.cols = [];
		this.data = [];
		this.selected = [];
		this.selectedRadio = '';
		this.availableSize = [10, 50, 100, 500];
		this.title = "";
		this.sortAscending = true;


	}

	firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);
		this._loadTypeModule();
	}

	updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('data')) {
		this.title = this.e.name ; 
            
		}}

	_searchReset(evt) {
		this.shadowRoot.querySelector('#q').value = "";
	}

	_loadTypeModule(){
		import(`../../types/${this.type}-type/${this.type}-type.js`)
			.then(module =>{})
			.catch(err =>{
				//TO_DO incase import fail import table and display
				console.warn("ERROR IS.."+err);
			});
	}

	searchFields(columns) {
		return columns.filter(function(item) {
			return item.filter;
		});
	}

	_handleSort(evt) {
		// console.log(evt);
	}

	_handleInputChange(evt) {
		this.dispatchEvent(new CustomEvent('dropdown-filter', {
			detail: {
				path: evt.detail.path,
				value: evt.detail.value,
				header:evt.detail.header,
			}
		}));
	}


	_searchFieldsExist(columns) {
		return columns.filter(function(item) {
		return item.filter;
		}).length > 0;
	}

	_action(evt) {
		const dataAction = evt.currentTarget.dataLink;

		this.pl._dialog(dataAction.service, dataAction.params);
	}

	_doService(evt){
		const self = this;
		
		self.pl._dialog(evt.detail.service, self.params);
	}
	
	_alert (e) {
		this.dispatchEvent(new CustomEvent('alert', {
			detail: {
				alert: e.detail.alert
			},
		}));
	}

	_exportType(evt){
		const type = evt.detail.type;
		this.dispatchEvent(new CustomEvent('export',{
			detail:{
				type:type,
			},
		}));
	}

	_refresh(evt){
		const type = evt.detail.type;
		this.dispatchEvent(new CustomEvent('refresh',{
			detail:{
				type: type,
			},
		}));
	}
	_pageChanged(evt) {
		const page = evt.detail.page;
		const oldPage = evt.detail.oldPage;
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
		const oldSize = evt.detail.size;

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

	_extractData(rowData, columnProperty) {
		if (columnProperty) {
			// TODO this is support for accessing sub-property paths like man.head.nose, not needed
			const splittedProperties = columnProperty.split('.');
			if (splittedProperties.length > 1) {
				return splittedProperties.reduce((prevRow, property) => {
					if (typeof prevRow === 'string' && rowData[prevRow] && rowData[prevRow][property]) {
						return rowData[prevRow][property];
					}

					return prevRow[property] || '';
				});
			}
			return rowData[columnProperty];
		}
		return null;
	}

	_delete(e) {
		this.dispatchEvent(new CustomEvent('delete', {
		detail: {
			delete_ids: e.detail.delete_ids
		},
		}));
	}

	_handleSelectionChanged(event) {
		this.dispatchEvent(new CustomEvent('selection-changed', {
			detail: {selected :event.detail.selected },
		}));
	}

	_selectChange(event) {
		let localTarget;
		if (event.type && event.type === 'change') {
			localTarget = Polymer.dom(event).localTarget;
		} else {
			localTarget = event;
		}

		const tr = Polymer.dom(localTarget).parentNode.parentNode;
		const rowData = localTarget.rowData;
		const rowId = localTarget.rowIndex;

		if (localTarget.checked) {
			this.push('selected', rowData['id']);
			tr.classList.add('selected');
		} else {
			this.splice('selected', this.selectedRows.indexOf(rowData['id']), 1);
			tr.classList.remove('selected');
		};
	}

	_search(evt) {
		const filter = evt.detail.value;
		const column = evt.detail.column;
		const columns = evt.detail.searchFields;

		this.dispatchEvent(new CustomEvent('search', {
			detail: {
				column: column,
				searchFields: columns,
				value: filter,
			},
		}));
	}

	_filter_date_range(event) {
		const start_date = event.detail.start_date;
		const end_date = event.detail.end_date;
		const column = event.detail.column;
		const columnValue = event.detail.columnValue;

		this.dispatchEvent(new CustomEvent('filter-date-range', {
			detail: {
				column:column,
				start_date: start_date,
				end_date:end_date,
				columnValue:columnValue
			},
		}));
	}

	_clearSearch(event){
		this.dispatchEvent(new CustomEvent('clear-search', {
			detail: {
				searchFields: event.detail.searchFields,
			},
		}));
	}

	 	createCustomElement(type){
		if(type === 'table'){
			return html`
		
				
				
			`;
		}
		if(type === 'table2'){
			return html`
				<table2-type
					.data=${this.data}
					.details=${this.details}
					.columns=${this.columns}
					.paginate=${this.paginate}
					.page=${this.page}
					.size=${this.size}
					.oldpage=${this.oldPage}
					.totalElements=${this.totalElements} 
					.totalPages=${this.totalPages}
					.availableSize=${this.availableSize}
					.selectable=${this.selectable} 
					.selected=${this.selected}
					.title=${this.title}
					.pl=${this.pl}
					.q=${this.q}
					.selectType=${this.selectType}
					.selectedRadio=${this.selectedRadio}
					.searchText=${this.searchText}
					.message=${this.message}
					.gateway=${this.gateway}
					@search="${this._search}"
					@clear-search="${this._clearSearch}"
					@page-change="${this._pageChanged}"
					@export="${this._exportType}"
					@size-change="${this._sizeChanged}"
					@dropdown-filter="${this._handleInputChange}"
					@selection-changed="${this._handleSelectionChanged}"
					@filter-date-range = "${this._filter_date_range}"
					@refresh="${this._refresh}"
					.state="${this.state}"
					>
				</table2-type>
			`;
		}
		if(type  === 'card'){
			return html`
				<card-type
					.data=${this.data}
					.details=${this.details}
					.columns=${this.columns}
					.paginate=${this.paginate}
					.page=${this.page}
					.size=${this.size}
					.oldpage=${this.oldPage}
					.totalElements=${this.totalElements} 
					.totalPages=${this.totalPages}
					.availableSize=${this.availableSize}
					.selectable=${this.selectable} 
					.selected=${this.selected}
					.title=${this.title}
					.pl=${this.pl}
					.message=${this.message}
					.gateway=${this.gateway}
				></card-type>
			`;
		}
		if(type  === 'inbox'){
			return html`
				<inbox-type
					.data=${this.data}
					.details=${this.details}
					.columns=${this.columns}
					.paginate=${this.paginate}
					.page=${this.page}
					.size=${this.size}
					.oldpage=${this.oldPage}
					.totalElements=${this.totalElements} 
					.totalPages=${this.totalPages}
					.availableSize=${this.availableSize}
					.selectable=${this.selectable} 
					.selected=${this.selected}
					.title=${this.title}>
				</inbox-type>`;
		}
		if(type  === 'staffprofile'){
			return html`
				<staffprofile-type
					.data=${this.data}
					.details=${this.details}
					.columns=${this.columns}
					.paginate=${this.paginate}
					.page=${this.page}
					.size=${this.size}
					.oldpage=${this.oldPage}
					.totalElements=${this.totalElements} 
					.totalPages=${this.totalPages}
					.availableSize=${this.availableSize}
					.selectable=${this.selectable} 
					.selected=${this.selected}
					.title=${this.title}
					@do-service="${this._doService}">
				</staffprofile-type>
			`;
		}
		if(type  === 'contact'){
			return html`
				<contact-type
					.data=${this.data}
					.details=${this.details}
					.columns=${this.columns}
					.paginate=${this.paginate}
					.page=${this.page}
					.size=${this.size}
					.oldpage=${this.oldPage}
					.totalElements=${this.totalElements} 
					.totalPages=${this.totalPages}
					.availableSize=${this.availableSize}
					.selectable=${this.selectable} 
					.selected=${this.selected}
					.title=${this.title}>
				</contact-type>
			`;
		}
		if(type === "product") {
			return html`
				<product-type
					.data=${this.data}
					.details=${this.details}
					.columns=${this.columns}
					.paginate=${this.paginate}
					.page=${this.page}
					.size=${this.size}
					.oldpage=${this.oldPage}
					.totalElements=${this.totalElements} 
					.totalPages=${this.totalPages}
					.availableSize=${this.availableSize}
					.selectable=${this.selectable} 
					.selected=${this.selected}
					.title=${this.title}
					.pl=${this.pl}
					.q=${this.q}
					.selectType=${this.selectType}
					.selectedRadio=${this.selectedRadio}
					.searchText=${this.searchText}
					.message=${this.message}
					.gateway=${this.gateway}
					.alert=${this.alert}
					@alert=${this._alert}
					@search="${this._search}"
					@clear-search="${this._clearSearch}"
					@page-change="${this._pageChanged}"
					@export="${this._exportType}"
					@delete="${this._delete}"
					@size-change="${this._sizeChanged}"
					@dropdown-filter="${this._handleInputChange}"
					@selection-changed="${this._handleSelectionChanged}"
					@filter-date-range="${this._filter_date_range}"
					@refresh="${this._refresh}"
				>
				</product-type>
			`;
		}
	}

	static get is() {
		return 'datasource-list';
	}

	render() {
		return html`${this.createCustomElement(this.type)}`;
	}
}

customElements.define(DataSourceList.is, DataSourceList);
