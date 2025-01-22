
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';

import '@polymer/iron-image/iron-image';
import 'fa-icons';
import {LitElement, html,css, unsafeCSS} from 'lit-element';
import globalStyles from '../../../../../../App.css?raw';
import { TableTypeStyles } from '../../table-type-css';
import { TableTypeHeaderStyles } from './table-type-header-css';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class TableTypeHeader extends LitElement {
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
				// TableStyles,
				// DatalistHeaderStyles,
				TableTypeHeaderStyles,
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
			title: String,
			columns: Array,
			selectedParam:String,
			selected: Array,
			actions: Array,
			toggledColumns: { type: Object },
			showColumnList: { type: Boolean },
			sortAscending:{type:Boolean}
		};
	}

	constructor() {
		super();
		this.selected = []
		this.selectedParam='';
		this.toggledColumns = {};
		this.showColumnList = false;
		this.sortAscending = true;

	}





	updated(changedProperties) {
        if (changedProperties.has('columns')) {
			this.columns.forEach((column) => {
				this.toggledColumns[column.header] = column.hidden;
			  });
		}}

	onSearchSelectChangeHandler(e) {
		this.onClearSearchBtnClickHandler();
		this.selectedParam = e.target.value;
	
	
		// this.dispatchEvent(new CustomEvent('dropdown-filter', {
		// 	detail: {path: e.detail.column.propertyPath,
		// 		value: this.selectedParam},
		// 	})
		// );
		// console.log(this.searchFields(this.columns))
	}

	generateCSV(){
		const csv = 'csv';
		
		this.dispatchEvent(new CustomEvent('export-type', {
			detail: {
				type: csv,
			}
		}));
	}

	generatePDF(){
		const pdf = 'pdf';
		
		this.dispatchEvent(new CustomEvent('export-type', {
			detail: {
				type: pdf,
			}
		}));
	}

	refresh(){
		this.dispatchEvent(new CustomEvent('refresh', {
			detail: {
				type: true,
			}
		}));
	}

	searchFields(columns) {
		return columns.filter(item => item.filter);
	}

	onClearSearchBtnClickHandler() {
		this.dispatchEvent(new CustomEvent('_clearSearch', {
			detail: {
				searchFields: this.searchFields(this.columns).map(field => field.propertyPath)
			}
		}));
	}

	onSearchInputHandler(e) {
		const searchValue = e.target.value;
		const dew=this.searchFields(this.columns).map(field => field.propertyPath);
		
		this.dispatchEvent(new CustomEvent('_search', {
			detail: {
				column: this.selectedParam,
				searchFields: this.searchFields(this.columns).map(field => field.propertyPath),
				value: searchValue
			}
		}));
	}

	onSearchBtnClickHandler(e) {
		
		const searchInput=this.shadowRoot.querySelector('#hdrSearch');
		this.searchText = searchInput.value;

		if(this.selectedParam == null || this.selectedParam == undefined){
			this.selectedParam = "q"
		  }
		  if (searchInput.value) {
			// console.log(self.qIn);
			// self.q = q;
			// console.log(evt);
			this.loadData(searchInput.value)
			this.dispatchEvent(new CustomEvent('_search', {
			  detail: {
				column: this.selectedParam,
				searchFields: this.searchFields(this.columns).map(function(field) {
				  return field.propertyPath;
				}),
				value: searchInput.value,
			  },
			}));
		  }
		
		
		
	}

	onActionsDropdownItemClickHandler(link) {

		
		this.dispatchEvent(new CustomEvent('service-call', { 
			detail: { service: link.service,params:{"dispatch_id": this.selected} },
			bubbles: true,
			composed: false 
		}));

        // this.pl._dialog.apply(this.pl, [link.service, {"dispatch_id": this.selected}]);
        this.onActionsDropdownTriggerClickHandler();
    }

	onExportDropdownItemClickHandler(type) {
		switch(type) {
			case "PDF":
				this.generatePDF();
			break;
			case "CSV":
				this.generateCSV();
			break;
			default:
			break;
		}
	}

    onActionsDropdownTriggerClickHandler() {
        this.shadowRoot.querySelector("#actionsDropdown").classList.toggle("is-active")
    }

	onExportDropdownTriggerClickHandler() {
        this.shadowRoot.querySelector("#exportDropdown").classList.toggle("is-active")
    }

	toggleColumnVisibility(header) {
		console.warn("header is ",header);
		
		// Find the corresponding column and toggle its hidden property
		const column = this.columns.find((col) => col.header === header);
		if (column) {
			console.log("hidden is ",column);

		  column.hidden = !column.hidden; // Toggle hidden property
		  this.toggledColumns = { ...this.toggledColumns, [header]: column.hidden }; // Update toggledColumns state
		  this.requestUpdate(); // Trigger re-render

		      // Dispatch event to notify parent component about the column visibility change
			  this.dispatchEvent(new CustomEvent('column-visibility-changed', {
				detail: {
					columns: this.columns // Send updated columns to the parent
				},
				bubbles: true,
				composed: true
			}));
		}

		}
	  
	
	  toggleColumnList() {
		// Toggle the visibility of the column list
		this.showColumnList = !this.showColumnList;
		console.log("this showColumnList ",this.showColumnList,this.columns);
		
		this.requestUpdate(); // Trigger re-render
	  }

	static get is() {
		return 'table-type-header';
	}

	render() {
		return html`
			<div class="columns is-multiline px-2 is-vcentered py-4 is-mobile">
				<!-- Title Column -->
				<div class="column is-half-mobile is-one-half-tablet">
					<h5>${this.title}</h5>
				</div>
	
				<!-- Controls (Search, Columns, Export, Refresh) -->
				<div class="column is-half-mobile is-two-thirds-tablet is-justify-content-end">
					<div class="columns is-vcentered is-flex-wrap-wrap">
						
					

						<!-- Search -->
						<div class="column is-narrow">
							<div class="field has-addons">
								<p class="control is-expanded has-icons-left">
									<input id="hdrSearch" class="input" type="text" placeholder="Search..." style="border-radius: 6.31px; padding: 8px 0px 8px 30px !important;">
									<span class="icon is-small is-left is-clickable" @click=${(e) => this.onSearchBtnClickHandler(e)} title="Search">
										<adaptive-ui-icon icon=${'icons:MdSearch'}></adaptive-ui-icon>
									</span>
								</p>
							</div>
						</div>
	
						<!-- Columns Button -->
						<div class="column is-narrow is-clickable d-none-mobile" style="display: flex; align-items: center; cursor: pointer;" @click=${() => this.toggleColumnList()}>
							<adaptive-ui-icon class="mx-2" dataColor="var(--md-sys-color-outline)" icon=${'icons:MdViewColumn'}></adaptive-ui-icon>
							<span>Columns</span>

						</div>

						${this.showColumnList
							? html`
								<div class="column-list">
								<div class="column-item">
							  <div style="display: flex; justify-content: flex-end; padding: 8px;">
									Column List <adaptive-ui-icon class="mx-2" style="cursor:pointer" dataColor="var(--md-sys-color-outline)" icon="icons:MdClose" @click="${() => this.toggleColumnList()}"></adaptive-ui-icon>
							  </div>
								</div>
									${this.columns
										.filter((col) => col.header !== 'id' && col.type !== 'href')
										.map(
											(column) => html`
												<div class="column-item">
												<input
														type="checkbox"
														?checked="${!column.hidden}"
														@change="${() => this.toggleColumnVisibility(column.header)}"
													/>

													<label>${column.header}</label>
													
												</div>
											`
										)}
								</div>
							`
							: ''
						}
	
						<!-- Export Button -->
						<div class="column is-narrow d-none-mobile">

						${
							this.selected && this.actions ? this.selected.length > 0 ? html`
								<div id="actionsDropdown" class="dropdown is-right">
									<div class="dropdown-trigger">
										<button style="background-color: var(--paper); border-radius: var(--CornerSmall); display: flex; border: 1px solid var(--md-sys-color-outlineVariant); align-items: center;" aria-haspopup="true" @click=${() => this.onActionsDropdownTriggerClickHandler()}>
											<span>Actions</span>
											<span class="icon is-small">
												<adaptive-ui-icon dataColor="#fff" icon=${'icons:MdKeyboardArrowDown'} ></adaptive-ui-icon>
											</span>
										</button>
									</div>
									<div class="dropdown-menu" id="dropdown-menu" role="menu">
										<div class="dropdown-content">
											${
												this.actions.map((action) => html`
													<div class="dropdown-item is-clickable" title=${action.title} @click=${() => this.onActionsDropdownItemClickHandler(action)}>
														<span class="icon-text">
															<span class="icon mr-2">
																<adaptive-ui-icon icon=${action.icon}></adaptive-ui-icon>
															</span>
															<span>${action.title}</span>
														</span>
													</div>
												`)
											}
										</div>
									</div>
								</div>
							` : html `` : html `<div id="exportDropdown" class="dropdown is-right">
								<div class="dropdown-trigger">
									<button style="background-color: var(--paper); border-radius: var(--CornerSmall); display: flex; border: 1px solid var(--md-sys-color-outlineVariant); align-items: center;" aria-haspopup="true" @click=${() => this.onExportDropdownTriggerClickHandler()}>
										<span class="icon is-small mx-2">
											<adaptive-ui-icon dataColor="var(--md-sys-color-outline)" icon=${'icons:MdCloudDownload'}></adaptive-ui-icon>
										</span>
										<span>Export</span>
									</button>
								</div>
								<div class="dropdown-menu" id="dropdown-menu" role="menu">
									<div class="dropdown-content">
										${["PDF", "CSV"].map((type) => html`
											<div class="dropdown-item is-clickable" title="Export ${type}" @click=${() => this.onExportDropdownItemClickHandler(type)}>
												<span>${type}</span>
											</div>
										`)}
									</div>
								</div>
							</div>
						</div>`
						}

							
	
						<!-- Refresh Button -->
						<div class="column is-narrow d-none-mobile">
							<button class="button is-primary is-clickable" title="Refresh" @click=${() => this.refresh()}>
								<span class="icon">
									<adaptive-ui-icon dataColor="#fff" icon=${'icons:MdOutlineRefresh'}></adaptive-ui-icon>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		`;
	}
	
	
	
}

customElements.define(TableTypeHeader.is, TableTypeHeader);
