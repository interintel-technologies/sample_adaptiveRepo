
import {LitElement, html,css} from 'lit-element';
import './../../components/datasource-table-head/datasource-table-head';
import './../../components/datasource-table-actions/datasource-table-actions';
import './../../components/datasource-table-footer/datasource-table-footer';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/iron-image/iron-image';
import "./components/product-type-header/product-type-header"; 
import './../../../empty-view/empty-view';
import { ProductTypeStyles } from './product-type-styles-css';
import { TableStyles } from '../../table-type';

class ProductType  extends LitElement {

	static get styles() {
        return [
			TableStyles,
			ProductTypeStyles,
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
			pl: Object,
			details: Object,
			columns: {
				type: Array,
				// value: () => [],
				// notify: true,
			},
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
			searchText:String,
			selectType:{type:String},
			message:String,
			gateway:String,
			checkedRows:Array,
			alert:Boolean
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
        this.checkedRows = [];
    }

	updated(changedProperties) {

        if (changedProperties.has('size') ) {
	
            
		}}

		_handleSort(evt) {
			console.log(evt);
	}

	_handleSort(evt) {
		console.log(evt);
	}

	_filter_date_range(event) {
		const start_date = event.detail.start_date;
		const end_date = event.detail.end_date;
		const column = event.detail.column;
		this.dispatchEvent(new CustomEvent('filter-date-range', {
			detail: {
				column:column,
				start_date: start_date,
				end_date:end_date
			},
		}));
	}

	getRadioChecked(event){
		const rowData = event.target.getAttribute('rowData');
		const rowIndex = event.target.getAttribute('rowIndex');
		const rowValue = event.target.getAttribute('rowValue');
		let rowDataId = rowValue;

		if(rowDataId === undefined) {
			rowDataId = rowIndex;
	
			this.selectedRadio = rowDataId;
			this.dispatchEvent(new CustomEvent('selection-changed', {
				detail: {selected :this.selectedRadio },
			}));
		} else {
			this.selectedRadio = rowDataId;

			this.dispatchEvent(new CustomEvent('selection-changed', {
				detail: {selected :this.selectedRadio },
			}));
		}
	}

	getCheckedRow(e){
		const rowData = e.target.getAttribute('rowData');
		const rowIndex = e.target.getAttribute('rowIndex');
		const rowValue = e.target.getAttribute('rowValue');
		let rowDataId = rowData['id'];

		if(this.selected == undefined){
			this.selected = [];
		}

		if(rowValue === undefined){
			rowValue = rowIndex;
			//check to see if data is in array
			if(this.selected.includes(rowIndex)){
				//remove from array
				this.selected = this.selected.filter(value => value !=rowIndex);
				this.dispatchEvent(new CustomEvent('selection-changed', {
					detail: {selected :this.selected.toString() },
				}));
			} else {
				this.selected.push(rowValue);
				this.dispatchEvent(new CustomEvent('selection-changed', {
					detail: {selected :this.selected.toString() },
				}));
			}
		} else {
			if(this.selected.includes(rowValue)){
				//remove from array
				this.selected = this.selected.filter(value => value !=rowValue);
				this.dispatchEvent(new CustomEvent('selection-changed', {
					detail: {selected :this.selected.toString() },
				}));
			} else {
				this.selected.push(rowValue);
				this.dispatchEvent(new CustomEvent('selection-changed', {
				detail: {selected :this.selected.toString() },
				}));
			}
		}
		this.checkedRows = [...this.selected];
	}

	_uncheckRows() {
		this.shadowRoot.querySelectorAll("paper-checkbox").forEach(checkbox=>{
			if(checkbox.checked) {
				checkbox.checked=false;
			}
		});
		this.checkedRows = [];
		this.selected = [];
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

	refresh(evt){
		const type = evt.detail.type;
		this.dispatchEvent(new CustomEvent('refresh',{
			detail:{
				type:type,
			},
		}));
	}

	_delete(evt) {
		this.dispatchEvent(new CustomEvent('delete', {
			detail: {
				delete_ids: evt.detail.delete_ids
			},
		}));
	}

	_handleInputChange(evt) {
		// console.log(evt);

		this.dispatchEvent(new CustomEvent('dropdown-filter', {
			detail: {path: evt.detail.column.propertyPath,
				value: evt.detail.value
			},
		}));
	}

	searchFields(columns) {
		return columns.filter(function(item) {
			return item.filter;
		});
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

	_selectChange(event) {
		let localTarget;
		if (event.type && event.type === 'change') {
			localTarget = Polymer.dom(event).localTarget;
		} else {
			localTarget = event;
		}
	}

	_searchReset(evt) {
		this._clearSearch();
	}

	_search(evt) {
		const  filter = evt.detail.value;
		const  column = evt.detail.column;
		const  columns = evt.detail.searchFields;
		this.dispatchEvent(new CustomEvent('search', {
			detail: {
			column: column,
			searchFields: columns,
			value: filter,
			},
		}));
		
	}
	_clearSearch(event){
		const  columns = event.detail.searchFields;

		this.dispatchEvent(new CustomEvent('clear-search', {
			detail: {
				searchFields:columns,
			},
		}));
	}

	renderColumn(paperDatatableApiColumn, valueFromRowData, p, rowData, rowIndex) {
		if (paperDatatableApiColumn.actions) {
			return html`
				<datasource-table-actions
					.cols=${this.cols}
					.pl=${this.pl}
					.item=${rowData}>
				</datasource-table-actions>
			`;
		} else if (this.selectable && p === 0) {
			return html`
				${
					this.selectType === 'single' ? html`
						<label class="radio">
							<input type="radio" name="${rowData}" value="${rowData}" @click="${this.getRadioChecked}"
								rowData=${rowData} rowValue=${valueFromRowData} rowIndex=${rowIndex}>
							<span></span>
						</label>
						${valueFromRowData}
					`: html`
						<div style="display:flex; padding-left:15px;">
							<paper-checkbox @click="${this.getCheckedRow}" rowData=${rowData}
								rowIndex=${rowIndex} .rowData=${rowData} .rowIndex=${rowIndex} rowValue=${valueFromRowData}>
							</paper-checkbox>
						</div>
					`}
				`;
		} else {
			try {
				let columnValue = valueFromRowData;
				let dJson;

				if(typeof columnValue == 'object'){
					dJson=columnValue;
				} else {
					dJson = JSON.parse(columnValue);
					// skip boolean and number columns
					if (typeof dJson != 'object') {
						throw 'Not Object JSON';
					}
				}

				const vs = [];
				for (var property in dJson) {
					vs.push(html`<div style="margin-top:0.1px;"><strong>${property}: </strong><span>${dJson[property]}</span></div>`);
				}
				return html`
					${vs.map(v => html` ${v}<br>`)}
				`;
			} catch (e) {
				switch (paperDatatableApiColumn.type) {
					case 'boolean':
						return html`
							${String(valueFromRowData).toLowerCase() == 'false' ? html`
								<iron-icon icon="icons:close"></iron-icon>
							` : html`
								<iron-icon icon="icons:check"></iron-icon>
							`}
						`;
					default:
						return valueFromRowData.toString().match(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/) ? html`
							<img src="${valueFromRowData}" class="image"/> 
						` : html`${valueFromRowData}`;
				}
			}
		}
	}

	static get is() {
        return 'product-type';
    }

	render() {
		return html`
			<product-type-header 
				.title="${this.title}"
				.columns="${this.columns}"
				.searchText="${this.searchText}"
				.checkedRows="${this.checkedRows}"
				.alert=${this.alert}
				@alert=${this._alert}
				@export-type="${this._exportType}"
				@_search="${this._search}"
				@_clearSearch="${this._clearSearch}"
				@delete="${this._delete}"
				@uncheck-rows=${this._uncheckRows}
				@refresh="${this.refresh}">
			</product-type-header>    
			<div class="table-container">
				<table class="dt-table" cellspacing="0">
					<thead>
						<tr>
							${
								this.columns.map(column => html`
									<th scope="col">
										<datasource-table-head
											.column="${column}"
											sort-direction$="[[column.sortDirection]]"
											@input-change-th-content="${this._handleInputChange}"
											sorted$="[[column.sorted]]"
											sortable$="[[column.sortable]]"
											@filter-date-range = "${this._filter_date_range}"
											@sort-th-content="${this._handleSort}"
										>
										</datasource-table-head>
									</th>
								`)
							}
						</tr>
					</thead>
					<tbody>
						${
							this.data.map((row, rowIndex) => html`
								<tr>
									${
										this.columns.map((column, columnIndex) => html`
											<td data-label= ${column}>${ this.renderColumn(column, row[column.property], columnIndex, row, rowIndex)}</td>
										`)
									}
								</tr>
							`)}
					</tbody>
				</table>
			</div>
			${
				this.data.length == 0 ? html`
					<empty-view message="${this.message}"gateway="${this.gateway}"></empty-view>
				`: html`
					${this.paginate ? html`
						<datasource-table-footer resources="${this.resources}"
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
						</datasource-table-footer>
					`: html``
					}
				`
			}
		`;
	}
}

customElements.define(ProductType.is, ProductType);
