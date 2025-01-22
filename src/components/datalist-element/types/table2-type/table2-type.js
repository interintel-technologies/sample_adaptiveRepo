import {LitElement, html,css, unsafeCSS} from 'lit-element';
import '../../components/datasource-table-head/datasource-table-head';
import '../../components/datasource-table-actions/datasource-table-actions';
import '../../components/datasource-table2-footer/datasource-table2-footer';

import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';

import '@polymer/iron-image/iron-image';
import '../table2-type/components/table2-type-header/table2-type-header';
import '../../../empty-view/empty-view';
import { Table2ResponsiveStyles } from './components/styles/table2-responsive-styles';
import { Table2TypeStyles } from './table2-type-css';
import globalStyles from '../../../../App.css?raw';

export class Table2Type  extends LitElement {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			Table2ResponsiveStyles,
			Table2TypeStyles,
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
			activeTab:Number
		};
	}

	_handleSort(evt) {
		console.log(evt);
	}

	constructor(){
		super();
		this.activeTab=0;
	}

	// firstUpdated(changedProperties) {
	// 	super.firstUpdated(changedProperties);
    //     console.log(this.pl);
	// 	console.log(this.page._page._pageJson[1]["Page One"][0].submit);
    // }
	
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
	
	getRadioChecked(event){
		const rowData = event.target.getAttribute('rowData');
		const rowIndex = event.target.getAttribute('rowIndex');
		const rowValue = event.target.getAttribute('rowValue');

		let rowDataId = rowValue;

		if(rowDataId === undefined){
			rowDataId = rowIndex;
			
			this.selectedRadio = rowDataId;
			this.dispatchEvent(new CustomEvent('selection-changed', {
				detail: {selected :this.selectedRadio },
			}));
		}else{
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

		if(this.selected == undefined){
			this.selected = [];
		}

		if(rowValue === undefined){
			rowValue = rowIndex;
			if(this.selected.includes(rowIndex)){
				this.selected = this.selected.filter(value => value !=rowIndex);
				this.dispatchEvent(new CustomEvent('selection-changed', {
					detail: {selected :this.selected.toString() },
				}));
			} else {
				this.selected.push(rowValue);
				// console.log("added..",rowDataId, 'array is,,', this.selected);
				this.dispatchEvent(new CustomEvent('selection-changed', {
					detail: {selected :this.selected.toString() },
				}));
			}
		} else {
			if(this.selected.includes(rowValue)){
				this.selected = this.selected.filter(value => value !=rowValue);
				this.dispatchEvent(new CustomEvent('selection-changed', {
					detail: {selected :this.selected.toString() },
				}));
			} else {
				this.selected.push(rowValue);
					this.dispatchEvent(new CustomEvent('selection-changed', {
						detail: {selected :this.selected.toString() },
					})
				);

			}
		}
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

	_handleInputChange(evt) {
		this.dispatchEvent(new CustomEvent('dropdown-filter', {
			detail: {path: evt.detail.column.propertyPath,
				value: evt.detail.value},
			})
		);
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
	_clearSearch(event){
		const columns = event.detail.searchFields;

		this.dispatchEvent(new CustomEvent('clear-search', {
			detail: {
				searchFields:columns,
			},
		}));
	}

	// firstUpdated(){
	// 	this.isColorBright((255,0,0));
		
	// }

	renderColumn(paperDatatableApiColumn, valueFromRowData, p, rowData, rowIndex) {
		console.log(this.activeTab)
		if (paperDatatableApiColumn.actions) {
			return html`
				<datasource-table-actions
					.rowIndex=${rowIndex}
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
					` : html`
						<div style="display:flex;">
							<paper-checkbox
								@click="${this.getCheckedRow}"
								rowData=${rowData}
								rowIndex=${rowIndex}
								.rowData=${rowData}
								.rowIndex=${rowIndex}
								rowValue=${valueFromRowData}
							></paper-checkbox>
							<div>
								${valueFromRowData}
							</div>
						</div>
					`
				}
			`;
		} else {
			try {
				const vs = [];
				let columnValue = valueFromRowData;
				let dJson;
				let objectCount = 0;

				if(typeof columnValue == 'object'){
					dJson=columnValue;
				} else {
					dJson = JSON.parse(columnValue);
					if (typeof dJson != 'object') {throw 'Not Object JSON';}
				}


				for (var property in dJson) {
					let objectPadding = 0;
					const objectRender = objectToRender => {
						const nestedId = "nested"+objectCount+property+rowIndex;
						objectPadding = objectPadding+4;
						objectCount = objectCount +1;

						const onNestedClickHandler = (id,e) => {
							const nestedDiv = this.shadowRoot.querySelector(`#${id}`);
							const showMore = e.target;
							
							nestedDiv.classList.toggle("appear");
							showMore.title = showMore.title === "Show More" ? "Hide More" : "Show More";
							showMore.classList.toggle("selected");
						};
						
						return html`
							<span>
								${
									(typeof objectToRender === "object") ? html` 
										<span title="Show More" class="show-more" @click=${e=>onNestedClickHandler(nestedId,e)}>...</span>
										<div id=${nestedId} class="column nested disappear" style="margin-top:0.1px; padding-left:${objectPadding}px;">
											${
												Object.keys(objectToRender).map(item =>{
													return html`
														<div style="margin-top:0.1px;">
															<strong>${item}: </strong>
															<span>${objectRender(objectToRender[item])}</span>
														</div>
													`
												})
											}
										</div>
									` : objectToRender
								}
							</span>
						`};

					vs.push(html`
						<div style="margin-top:0.1px;">
							<strong>${property}: </strong>
							<span>${objectRender(dJson[property])}</span>
						</div>
					`);
					// }
				}
				return html`${vs.map(v=> html` ${v}<br>`)}`;
			} catch (e) {
				switch (paperDatatableApiColumn.type) {
					case 'boolean':
						return html`
							${
								String(valueFromRowData).toLowerCase() == 'false' ? html`
									<iron-icon icon="icons:close"></iron-icon>
								` : html`
									<iron-icon icon="icons:check"></iron-icon>
								`
							}
						`;
					case 'file':
						return html`
							
								<a download href="${valueFromRowData}">File</a>
							
							` 
					default:
						if(Object.keys(this.state).includes(paperDatatableApiColumn.property)){
							if(Object.keys(this.state[paperDatatableApiColumn.property]).includes(valueFromRowData)){
								const color=this.state[paperDatatableApiColumn.property][valueFromRowData];
									return html`
										<span style="background-color:${color}; padding:10px; color:${this.isColorBright(color)?`var(--link--color-invert)`:`var(--grey-darker)`}; border-radius:15px 15px 15px 15px;">
											${valueFromRowData}
										</span>
									`	
							}
							else {
								
								return valueFromRowData.toString().match(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/) ? html`
								<img src="${valueFromRowData}" class="image"/> 
							` : html`${valueFromRowData}`;
							}
							
								
						}else{
							return valueFromRowData.toString().match(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/) ? html`
							<img src="${valueFromRowData}" class="image"/> 
						` : html`${valueFromRowData}`;	
						}		
					
				}
			}
		}
	}

	static get is() {
		return 'table2-type';
	}

	render() { 	
		return html`
			<table2-type-header 
				.title="${this.title}"
				.columns="${this.columns}"
				.searchText="${this.searchText}"
				@export-type="${this._exportType}"
				@_search="${this._search}"
				@_clearSearch="${this._clearSearch}"
				@refresh="${this.refresh}"
			>
			</table2-type-header>
			<div class="table-container">
				<table class="dt-table table-responsive-vertical" cellspacing="0">
					<thead>
						<tr>
							${
								this.columns.map((column) => html`
									<th scope="col">
										<datasource-table-head
											.column="${column}"
											sort-direction$="[[column.sortDirection]]"
											@input-change-th-content="${this._handleInputChange}"
											sorted$="[[column.sorted]]"
											sortable$="[[column.sortable]]"
											@filter-date-range = "${this._filter_date_range}"
											@sort-th-content="${this._handleSort}">
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
									
									this.columns.map((column, columnIndex) =>html`
											<td data-label= ${column}>${ this.renderColumn(column, row[column.property], columnIndex, row, rowIndex)}</td>
										`
									)
								}
								</tr>
						`)}
								
					</tbody>
				</table>
			</div>
			${
				this.data.length == 0 ? html`<empty-view message="${this.message}" gateway="${this.gateway}" ></empty-view>` : html`
					${
						this.paginate ? html`
							<datasource-table2-footer resources="${this.resources}"
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
							</datasource-table2-footer>
						` : ""
					}
				`
			}
		`;
	}
}

customElements.define(Table2Type.is, Table2Type);
