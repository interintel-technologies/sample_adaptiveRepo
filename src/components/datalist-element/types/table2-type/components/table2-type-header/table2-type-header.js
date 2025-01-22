
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import { Table2TypeHeaderStyles } from "./table2-type-header-css";
import '@polymer/iron-image/iron-image';
import 'fa-icons';import {LitElement, html,css, unsafeCSS} from 'lit-element';
// import { TableStyles } from './../../../../../../../../dsv1.0/styles/table-type';
import globalStyles from '../../../../../../App.css?raw';
import { DatalistHeaderStyles } from '../../../../datalist-header-css';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class Table2TypeHeader extends LitElement {
	
	static get styles() {
		return [
			unsafeCSS(globalStyles),
				// TableStyles,
				DatalistHeaderStyles,
				Table2TypeHeaderStyles,
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
			columns: {
				type: Array
			},
			selectedParam:String,
			activeTab:Number
		};
	}

	constructor(){
		super();
		this.activeTab=0;
	}

	updateSearchItem(e){
		const selectedItemText = e.target.innerText;
		const qIn = this.shadowRoot.querySelector('#qIn');
		const allSearchItem = this.shadowRoot.querySelectorAll(".search_item");
		const selectedItem = e.target;
		
		qIn.innerText = selectedItemText;
		allSearchItem.forEach(item => {
			item.classList.remove("active_item");
		});
		selectedItem.classList.add("active_item");
		this.selectedParam = e.target.getAttribute("param");
	}

	generateCSV(){
		const csv = 'csv';
		
		this.dispatchEvent(new CustomEvent('export-type', {
			detail: {
				type: csv,
			},
		}));
	}

	generatePDF(){
		const pdf = 'pdf';
		
		this.dispatchEvent(new CustomEvent('export-type', {
			detail: {
				type: pdf,
			},
		}));
	}

	dropdown(){
		const dropdown = this.shadowRoot.querySelector('ul');

		if(dropdown.classList.contains('is-block')){
			dropdown.classList.remove('is-block');
		}else{
			dropdown.classList.add('is-block');
		}
	}

	closeDropdown(){
		const dropdown = this.shadowRoot.querySelector('ul');

		if(dropdown.classList.contains('is-block')){
			dropdown.classList.remove('is-block');
		}
	}

	specificDropdown(e){
		const dropdown = this.shadowRoot.querySelector('ul');
		
		if(dropdown.classList.contains('is-block')){
			dropdown.classList.remove('is-block');
		}else{
			dropdown.classList.add('is-block');
		}
	}

	refresh(){
		this.dispatchEvent(new CustomEvent('refresh', {
			detail: {
				type: true,
			},
		}));
	}

	searchFields(columns) {
		return columns.filter(function(item) {
			return item.filter;
		});
	}

	_searchReset(evt) {
		const self = this;

		this.dispatchEvent(new CustomEvent('_clearSearch', {
			detail: {
				searchFields: self.searchFields(self.columns).map(function(field) {
				return field.propertyPath;
				}),
			},
		}));
	}

	_searchFieldsExist(columns) {
		return columns.filter(function(item) {
			return item.filter;
		}).length > 0;
	}


	_search(evt) {
		const self = this;
		const q = self.shadowRoot.querySelector('#q').value;
		this.searchText = q;
		
		if(this.selectedParam == null || this.selectedParam == undefined){
			this.selectedParam = "q"
		}
		if (q) {
			this.dispatchEvent(new CustomEvent('_search', {
				detail: {
					column: this.selectedParam,
					searchFields: self.searchFields(self.columns).map(function(field) {
						return field.propertyPath;
					}),
					value: q,
				},
			}));
		}
	}

	clearInput(){
		var getValue= this.qs("#q");
		  if (getValue.value !="") {
			  getValue.value = "";
		  }
   }

	firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);
		if(this._searchFieldsExist(this.columns)){
			document.addEventListener('click', function (event) {
				if(event.path[0].className == 'dropdown'){
					//do nothing
				}else if(event.path[0].id == 'qIn'){
					this.dropdown()
				}else{
					this.closeDropdown();
				}
			});
		}
	
	}

	static get is() {
		return 'table2-type-header';
	}

	render() {
		return html`
	
			<div class="table-header-buttons">
				<div class="columns is-multiline">
					<div class="column is-4">
						<!--Tabs:functionality to be added-->
						<!-- <div id="tab_area" class="columns">
							<div class="column is-3 tab ml-1 ${this.activeTab===0 ? 'active':''}" @click=${()=>this.activeTab = 0}>
								<h6>All</h6>
							</div>
							<div class="column is-3 tab ml-1 ${this.activeTab===1 ? 'active':''}" @click=${()=>this.activeTab = 1}>
								<h6>New</h6>
							</div>
							<div class="column is-3 tab ml-1 ${this.activeTab===2 ? 'active':''}" @click=${()=>this.activeTab = 2}>
								<h6>Success</h6>
							</div>
							<div class="column is-3 tab ml-1 ${this.activeTab===3 ? 'active':''}" @click=${()=>this.activeTab = 3}>
								<h6>Failed</h6>
							</div>	
						<div>     -->
						<div class="field has-addons">
							<div class="control has-icons-left">
								<div id="search_area" class="is-flex">
									<div class="search_box is-flex">
										<div class="dropdown" @click=${this.dropdown}>
											<div id="qIn" @click="${this.specificDropdown}" class="default_option">All</div>
												<ul class="search_ul">
													<li class="search_item" @click="${this.updateSearchItem}">All</li>
													${
														this.columns.map(item => html`
															<li class="search_item" @click="${this.updateSearchItem}" param="${item.propertyPath}">${item.header}</li>
														`)
													}
												</ul>
											</div>
											<div class="search_field">
												<input class="input" id="q" type="text" placeholder="Search item" value="${this.searchText}"/>
												<!-- <span class="icon is-small is-left ">
												<i class="fas fa-magnifying-glass"></i>
												</span> -->
											</div>
										</div>	
									</div>		
								</div>
								
							</div>	
						</div>
						<div id="search-btns" class="column is-2-desktop">
								<button class="searchBtn button" type="submit" @click="${this._search}">Search</button>
								<button class="clearBtn button ml-4 is-danger" @click="${this.clearInput}">Clear</button>
								</div>	
						<div class="column is-4-desktop is-10-tablet actionCol">
						
							<!--Date filter:functionality to be added-->
							<!-- <div class="column is-7 itemCol" id="dateFilter">
								<div class="field has-addons mr-2">
									<div class="control has-icons-left">
										<input class="input" id="q" type="date" id="startDate">	
									</div>	
								</div>
								<h5 class="mt-2">-</h5> 
								<div class="field has-addons ml-2">
									<div class="control has-icons-left">
										<input class="input" id="q" type="date" id="enDate">	
									</div>	
								</div>
							</div> -->							
							<div class="buttons is-right">
								<span id="refresh-button" title="Refresh" class="button is-size-7 is-responsive mt-1" @click="${this.refresh}">
									<adaptive-ui-icon class="fas fa-redo pt-3"></adaptive-ui-icon>
								</span>
								<button id ="pdf-btn" @click="${this.generatePDF}" class="button is-size-7 is-responsive">Export PDF</button>
								<button id ="csv-btn" @click="${this.generateCSV}" class="button is-size-7 is-responsive">Export CSV</button>
							</div>	
						
						</div>
						 	
					</div>
					 
				</div>
			</div>
			
		`;
	}
}

customElements.define(Table2TypeHeader.is, Table2TypeHeader);
