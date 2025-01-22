import {LitElement, html,css, unsafeCSS} from 'lit-element';
import './../../components/datasource-table-head/datasource-table-head';
import './../../components/datasource-table-actions/datasource-table-actions';
import './../../components/datasource-table-footer/datasource-table-footer';

import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';

import '@polymer/iron-image/iron-image';
import './components/table-type-header/table-type-header';
import '../../../empty-view/empty-view';
import { TableTypeStyles } from './table-type-css';
import globalStyles from '../../../../App.css?raw';

export class TableType  extends LitElement {
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			TableTypeStyles,
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
			size:Number,
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
			actions: {
				type: Array,
			},
			title: String,
			searchText:String,
			selectType:{type:String},
			message:String,
			gateway:String,
			actions: Array,
			pagination:Array,
			sortAscending:{type:Boolean}

		};
	}

	constructor() {
		super();
		this.selected = [];
		this.actions = [];
		this.pagination=[];
		this.data=[];
		this.title = ""
		this.sortAscending = true;
		this.sortedColumn = null;
		const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-surfaceContainerLow');

		this.background  = this.hexToRgbA(bgColor)
		
		// this.size = 0;

	}

	
	updated(changedProperties) {

        if (changedProperties.has('size') ) {
	
            
		}}
	
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
	
	updated(changedProperties) {
        if (changedProperties.has('totalPages')) {
			console.log("size ",this.size," totalPages ",this.totalPages);
			
			// // this.isColorBright((255,0,0));
			// const pagination = this.generatePagination(this.page,this.totalPages);
			// this.pagination=pagination;
			
		}}
	getRadioChecked(event){
		console.log("rowdata ",event);

		const rowData = event.target.getAttribute('rowData');
		const rowIndex = event.target.getAttribute('rowIndex');
		const rowValue = event.target.getAttribute('rowValue');
		
		this.actions = rowData.links;


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
				this.selected = [...this.selected, rowValue]
				this.dispatchEvent(new CustomEvent('selection-changed', {
					detail: {selected :this.selected.toString() },
				}));
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
				header:evt.detail.column.header,
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

	_pageChanged(pageNumber) {
		console.log("page number ",pageNumber);
		
		const page = pageNumber;
		const oldPage = this.page;
		if (oldPage !== undefined || oldPage !='...') {
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

	firstUpdated(){
		// this.isColorBright((255,0,0));
		const pagination = this.generatePagination(this.page,this.totalPages);
		console.log("pagination ",pagination);

		this.pagination=pagination;
	}

	_computeCurrentMaxSize(page, size, totalElements) {
		const maxSize = size * (page );
		return maxSize > totalElements ? totalElements : maxSize;
	}

	_computeCurrentSize(page, size) {
		return (page-1) * size + 1;
	}

	_nextButtonEnabled(page, totalPages) {
		return page < totalPages;
	  }
	
	  _prevButtonEnabled(page) {
		return page > 1;
	  }
	  _nextPage() {
		if (this.page < this.totalPages) {
		  this.page = this.page + 1;
		}
		this.dispatchEvent(new CustomEvent('n-page', {
		  detail: {
			page: this.page,
		  },
		}));
		this._pageChanged(this.page)
	  }
	
	  _prevPage() {
		if (this.page-1 > 0) {
		  this.page = this.page - 1;
		}
		this.dispatchEvent(new CustomEvent('p-page', {
		  detail: {
			page: this.page,
		  },
		}));
		this._pageChanged(this.page)
	  }

	renderColumn(paperDatatableApiColumn, valueFromRowData, p, rowData, rowIndex) {
		
		if (paperDatatableApiColumn.actions) {

			this.actions = rowData.links;
			return html`
			
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
							style="border: solid #fff;margin-right: 5%;"
							
							

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
							<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
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
						return html`<a download href="${valueFromRowData}">File</a>` 
					default:
						if(Object.keys(this.state).includes(paperDatatableApiColumn.property)){
							if(Object.keys(this.state[paperDatatableApiColumn.property]).includes(valueFromRowData)){
								const color=this.state[paperDatatableApiColumn.property][valueFromRowData];
								return html`
									<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;" style="background-color:${color}; padding:5px; color:${this.isColorBright(color)?`var(--link--color-invert)`:`var(--grey-darker)`}; border-radius:5px 5px 5px 5px;">
										${valueFromRowData}
									</span>
								`;
							}
							else{
								return html`
									<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
										${valueFromRowData}
									</span>
								`;
							}
						}else{
							return html`
								<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
									${valueFromRowData}
								</span>
							`;
						}
				}
			}
		}
	}

	static get is() {
		return 'table-type';
	}


	updated(changedProperties) {
		super.updated(changedProperties);

		// this._addPaginationEventListeners();
		
	}

	// _addPaginationEventListeners() {
	// 	this.shadowRoot.querySelector('.pagination-previous').addEventListener('click', () => this._navigatePage(-1));
	// 	this.shadowRoot.querySelector('.pagination-next').addEventListener('click', () => this._navigatePage(1));

	// 	const paginationLinks = this.shadowRoot.querySelectorAll('.pagination-link');
	// 	paginationLinks.forEach(link => {
	// 		link.addEventListener('click', () => {
	// 		const pageNumber = parseInt(link.textContent);
	// 			this._navigateToPage(pageNumber);
	// 		});
	// 	});
	// }
	
	_navigatePage(change) {
		const currentPage = this.page || 1;
		const newPage = currentPage + change;
		if (newPage >= 1 && newPage <= this.totalPages) {
			this._updatePage(newPage);
		}
	}
	
	_navigateToPage(pageNumber) {
		if (pageNumber >= 1 && pageNumber <= this.totalPages) {
			this._updatePage(pageNumber);
		}
	}
	
	_updatePage(newPage) {
		if (this.page !== newPage) {
			const oldPage = this.page;
			this.page = newPage;
			this.dispatchEvent(new CustomEvent('page-change', { detail: { oldPage, newPage } }));
		}
	}

	generatePagination(currentPage, totalPages) {
		console.log("current page ", currentPage, totalPages);
	  
		let pages = [];
		let maxPagesToShow = 3;
		let halfWay = Math.ceil(maxPagesToShow / 2);
		let position;
	  
		if (currentPage <= halfWay) {
		  position = 'start';
		} else if (totalPages - currentPage < halfWay) {
		  position = 'end';
		} else {
		  position = 'middle';
		}
	  
		let ellipsesNeeded = maxPagesToShow < totalPages;
	  
		for (let pageNumber = 1; pageNumber <= totalPages; ++pageNumber) {
		  let showPage = false;
		  switch (position) {
			case 'start':
			  if (pageNumber <= maxPagesToShow) {
				showPage = true;
			  }
			  break;
			case 'end':
			  if (totalPages - pageNumber < maxPagesToShow - 1) {
				showPage = true;
			  }
			  break;
			case 'middle':
			  if (Math.abs(currentPage - pageNumber) < halfWay) {
				showPage = true;
			  }
			  break;
		  }
	  
		  if (showPage) {
			pages.push(pageNumber);
		  }
	  
		  // Add ellipses when necessary
		  if (ellipsesNeeded) {
			if (position === 'start' && pageNumber === maxPagesToShow) {
			  pages.push('...');
			} else if (position === 'middle' && pageNumber === currentPage + halfWay - 1) {
			  pages.push('...');
			} else if (position === 'end' && pageNumber === totalPages - maxPagesToShow + 1) {
			  pages.push('...');
			}
		  }
		}
	  
		// Ensure the last page is always included if ellipses are used
		if (ellipsesNeeded && pages[pages.length - 1] !== totalPages) {
		  pages.push(totalPages);
		}
	  
		return pages;
	  }
	  
		  
		
		  
	_handleColumnVisibilityChanged(event) {
		// Update the table columns based on the event detail
		this.columns = [...event.detail.columns]; // This ensures reactivity
	}
	

  // This function toggles sorting based on the column selected
  toggleSort(column) {
    if (this.sortedColumn === column.property) {
      // If sorting the same column, toggle between ascending and descending
      this.sortAscending = !this.sortAscending;
    } else {
      // Set the new sorted column and default to ascending
      this.sortedColumn = column.property;
      this.sortAscending = true;
    }
    // Call the sorting function after setting sort parameters
    this._handleSort();
  }

  // Sort the rows based on the column
  _handleSort() {
    if (this.sortedColumn) {
      // Sort the entire row based on the column's property
      this.data.sort((a, b) => {
        const valueA = a[this.sortedColumn];
        const valueB = b[this.sortedColumn];

        // Sort based on ascending or descending order
        if (valueA < valueB) {
          return this.sortAscending ? -1 : 1;
        }
        if (valueA > valueB) {
          return this.sortAscending ? 1 : -1;
        }
        return 0;
      });

      // Request re-render after sorting
      this.requestUpdate();
    }
}

hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.5)';
    }
    throw new Error('Bad Hex');
}

setResultsPerPage(max){
	this.setLimit(max)
	
}




	render() {
		return html`
			<div class="content card">
				
				
				<table-type-header 
					.title="${this.title}"
					.columns="${this.columns}"
					.searchText="${this.searchText}"
					.selected=${this.selected}
					.actions=${this.actions}
					.pl=${this.pl}
					@export-type="${this._exportType}"
					@_search="${this._search}"
					@_clearSearch="${this._clearSearch}"
					@refresh="${this.refresh}"
					 @column-visibility-changed="${this._handleColumnVisibilityChanged}"
					 .loadData=${this.loadData}
				>
				</table-type-header>
				<div class="table-container">
					<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" cellspacing="0" style="border-radius: 10px;">
						<thead>
							<tr style="" style="border-radius: 10px; overflow: hidden;background: ${this.background}">
							${
								this.columns
								.filter((column) => !column.hidden && column.type !== "href")									.map((column) => html`
										<th style=" max-width: 200px;  background: ${this.background};" class="py-3 has-text-weight-bold" scope="col">
											<datasource-table-head
												.column="${column}"
												sort-direction$="[[column.sortDirection]]"
												@input-change-th-content="${this._handleInputChange}"
												sorted$="[[column.sorted]]"
												sortable$="[[column.sortable]]"
												@filter-date-range="${this._filter_date_range}"
												@sort-th-content="${this._handleSort}"
												@click="${() => this.toggleSort(column)}"  
												sorted="${this.sortedColumn === column.property}"
												.sortAscending=${this.sortAscending}
												.loadData=${this.loadData}
												>
											</datasource-table-head>
										</th>
									`)
							}
							
							</tr>
						</thead>
						<tbody style="background: var(--paper)">
						${this.data.length > 0 ?
							this.data.map((row, rowIndex) => html`
							  <tr>
								${
								  this.columns.filter((column) => !column.hidden).map((column, columnIndex) => html`
									<td class="py-3" style="vertical-align: middle; overflow: hidden; text-overflow: ellipsis; white-space: wrap;" data-label=${column}>
									  ${this.renderColumn(column, row[column.property], columnIndex, row, rowIndex)}
									</td>
								  `)
								}
							  </tr>
							`) : html`
							  <tr>
								<td colspan="${this.columns.length}" style="text-align: center;">
								  ${this.message}
								</td>
							  </tr>
							`
						  }						  
						</tbody>
						
					</table>
				</div>

				<div class="columns is-mobile is-multiline is-vcentered">
  
  <!-- Pagination Info Column -->
  <div class="column is-one-third-tablet is-full-mobile">
    ${this.data.length == 0 ? html`
      ` : html`
      ${this.paginate && html`
          <div class="pagination-range px-4 my-2  footer-d-none-mobile">
            <span class="is-size-7">
              ${this._computeCurrentSize(this.page, this.size)} - ${this._computeCurrentMaxSize(this.page, this.size, this.totalElements)} of ${this.totalElements}
            </span>
          </div>`}
   
    `}
  </div>
  
  <!-- Navigation Buttons Column -->
  <div class="column">
    <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
      ${this._prevButtonEnabled(this.page) ? html`
        <a class="pagination-previous mb-4" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}">
          
		<span class="icon">
            <adaptive-ui-icon icon=${'icons:MdChevronLeft'}></adaptive-ui-icon>
          </span>
		  Back
        </a>
      ` : html`<a class="pagination-previous mb-4" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}">
	     
	  <span class="icon">
		<adaptive-ui-icon icon=${'icons:MdChevronLeft'}></adaptive-ui-icon>
	  </span>
	  Back
	</a>`}

      <ul class="pagination-list">
        ${this.pagination.map(pageNumber => html`
          <li>
            <a  @click=${() => this._pageChanged(pageNumber)} class="pagination-link ${pageNumber === this.page ? 'is-current' : ''}" aria-label="Goto page ${pageNumber+1}" title="Goto page ${pageNumber+1}" style="${pageNumber === '...' ? 'pointer-events: none;' : ''}" ?disabled=${pageNumber === '...'}>  
              ${pageNumber}
            </a>
          </li>
        `)}
      </ul>

      ${this._nextButtonEnabled(this.page, this.totalPages) ? html`
        <a class="pagination-next mb-4" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page, this.totalPages)}">
        Next  
		<span class="icon">
            <adaptive-ui-icon icon=${'icons:MdChevronRight'}></adaptive-ui-icon>
          </span>
        </a>
      ` : html`<a class="pagination-next mb-4" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page, this.totalPages)}">
	  Next  
	  <span class="icon">
		  <adaptive-ui-icon icon=${'icons:MdChevronRight'}></adaptive-ui-icon>
		</span>
	  </a>`}
    </nav>
  </div>

  <!-- Results Per Page Column -->
  <div class="column is-one-quarter  footer-d-none-mobile">
    <div class="is-flex is-align-items-center is-justify-content-center">
      <span class="is-size-7 mx-4">Results Per Page</span>
      <select id="resultsPerPage" @change="${(e) => this.setResultsPerPage(e.target.value)}">
      <option value="10">10</option>   
	  <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>

</div>


		
 
				
				  
			
			</div>
		`;
	}
}



customElements.define(TableType.is, TableType);
