import{i as u,h as y,r as w,g as k,k as s}from"./index-C2PWchud.js";import"./datalist-element-wrapper-BtEsUu56.js";import"./paper-menu-button-C_oWXu8J.js";import"./iron-flex-layout-C17s8gyg.js";import"./paper-icon-button-B3AFeDyC.js";import"./paper-dropdown-menu-8R8AANSK.js";import"./iron-image-B9q0RFfs.js";import"./jspdf.min-D4P-jdMk.js";import"./iron-icon-Ci-yo7Ra.js";import"./fa-icon-COAiXmZs.js";import"./empty-view-B1-e8K41.js";import"./datasource-mixin-DMQBE4lo.js";import"./polymer-legacy-CVdXdTHq.js";import"./default-theme-ChQ485_s.js";import"./paper-ripple-behavior-Bi9iYOcF.js";import"./paper-ripple-CP-IWaVj.js";import"./mqtt-mixin-W6USKsd2.js";import"./paho-mqtt-CBfrIYbz.js";import"./utils-mixin-D5aAiqNi.js";import"./transform-C4D8YA0C.js";import"./toPropertyKey-DE8vi2zA.js";import"./DialogContent-DMuq1MYF.js";import"./shadow-R2NCNWlE.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./paper-material-styles-CABhO1-r.js";import"./lit-html-dRijB2IX.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const $=u`

.column-list {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: var(--paper);
    border-radius: 5px;
    position: absolute;
    left: 47vw;
    top: 4%;
    width: auto;
    z-index: 2;
    text-align: left;
    border: solid var(--primary-text);
}

.column-item {
    margin-bottom: 5px;
    display: flex;
    justify-content: left;
    column-gap: 7%;
}


.column{
    display:flex;
    align-items:center;
}
.radio {
    position: relative;
    display: inline-block;
    padding-left:30px;
    cursor:pointer;
}

.radio input[type="radio"] {
    display:none;

}
.table.is-bordered tbody td, .table.is-bordered thead th {
    border-right: none;
    border-left: none;
    padding-left: 20px;
    padding-right: 20px;
}

.table thead{
    height:70px;
}

.table th {
    white-space: nowrap;
}
span.s-clickable.is-fullheight{
    height:100%
}
.radio span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid var(--app-default-color);
    display:block;
    position: absolute;
    left:0;
    top:-18px;
}

.radio span:after {
    content:"";
    height: 11px;
    width: 11px;
    background: var(--app-default-color);
    display:block;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%) scale(0);
    border-radius:50%;
    transition: 300ms ease-in-out 0s;

}

.radio input[type="radio"]:checked ~ span:after {
    transform: translate(-50%,-50%) scale(1);

}
.selected {
    color: var(--app-secondary-color) !important;
}
.nested {
    display:none
}
.disappear {
    opacity:0;
    transform:translateY(-10%);
    transition:0.2s all ease-out;
}
.appear {
    display:block;
    opacity:1;
    transform:translateY(0px);
    transition:0.2s all ease-in;
}
.show-more {
    color: var(--app-default-color);
    font-size:25px;
    cursor:pointer;
}
.show-more:hover {
    color: var(--app-secondary-color);
}

table-type-header .table-header-buttons{
    position:sticky; 
    top:0;
    z-index:2; 
    background-color:var(--card-background-color) !important;
}
tbody{
    border-left:0 !important;
    border-right:0 !important;
}
tbody tr{
    background-color: transparent !important;
    border-left:0 !important;
    border-right:0 !important;
}
.table-container {
    overflow-y: auto;
    overflow-x: auto;
    /* border:1px solid var(--grey-lighter); */
}

/* For Webkit-based browsers (Chrome, Safari, Edge) */
.table-container::-webkit-scrollbar {
    width: 10px; /* Width of the vertical scrollbar */
    height: 8px; /* Height of the horizontal scrollbar */
}

/* Track (background of the scrollbar) */
.table-container::-webkit-scrollbar-track {
    background: var(--grey-lighter); /* Custom track color */
    border-radius: 10px; /* Rounded track */
}

/* Handle (draggable part of the scrollbar) */
.table-container::-webkit-scrollbar-thumb {
    background-color: var(--primary); /* Custom handle color */
    border-radius: 10px; /* Rounded handle */
    border: 2px solid var(--grey-lighter); /* Add border for a gap around the thumb */
}

/* Handle on hover */
.table-container::-webkit-scrollbar-thumb:hover {
    background-color: var(--primary); /* Darker color on hover */
}

/* For Firefox */
.table-container {
    scrollbar-color: var(--primary) var(--grey-lighter); /* Handle and track colors */
    scrollbar-width: thin; /* Narrow scrollbar */
}



.table-container table.dt-table tr td{
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    border-bottom:1px solid var(--input-border-color) !important;
}
tr td span{
    font-size:14px !important;
    
}

tr td::before{
    margin-right:5px;
}

th{
    background-color:var(--grey-light);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    border-bottom:1px solid var(--input-border-color) !important;
    border-top:1px solid var(--input-border-color) !important;
}
paper-checkbox #checkbox{
    border-color:var(--input-border-color) !important;

}
paper-checkbox #checkbox.checked{
    background-color: var(--link) !important;
    border-color: var(--link) !important;
}
.pagination{
    justify-content:center;
    display:block;
}
nav.pagination .pagination-list{
    overflow-x: auto; 
    white-space: nowrap;
    display:inline-block;
    margin-bottom: 0 !important;
    padding-bottom:1rem;
    width:fit-content !important;
}
.pagination-list li{
    display: inline-block;
}
.content ul{
    margin-top:0 !important;
    margin-left:auto !important;
    margin-right:auto !important;
}
.pagination-previous{
    margin-top:.2rem !important;
}
.pagination-next{
    margin-top:.2rem !important;
}
@media(max-width:1024px){
    paper-checkbox{
        transform:translateY(-1.7rem) translateX(-1.2rem) !important;
        margin-right:-1.2rem;
    }
}
@media(max-width:768px){
    .pagination-previous{
    margin-top:.4rem !important;
}
.pagination-next{
    margin-top:.4rem !important;
}
}

.button-holder{
    justify-content: center;align-items: center;display: flex;
}

option{
    background:var(--paper);
    color:var(--primary-text)
}

@media screen and (max-width: 1118px) {
    .footer-d-none-mobile{
        display:none !important
    }
}




`,P=u`
span{
	color:var(--md-sys-color-outline) !important;
}
.contol{
	margin-right:2rem;
}
	.active_item{
		background-color: var(--link);
	}
	.search_ul{
		border: 1px solid lightgrey;
		border-radius: 5px;
		box-shadow: var(--input-border-color) 9px 11px 49px -21px;
		background-color:var(--input-background-color) !important;
		color:var(--grey-darker);
		font-family:var(--family-sans-serif),sans-serif !important;
	}
	.search_ul li:hover{
		color:var(--grey-darker);
		background-color:var(--link);
	}
	.column {
		padding:0.85rem;
	}
	.buttons {
		padding-top:35px;
		margin: 0 auto !important;
		justify-content: flex-end;
		width:100%;
	}
	.button {
	padding: 7px 20px;
	}

	#search_area{
		align-items: center!important;
	}
	.table-header-buttons {
		position: sticky;
		background-color: var(--card-background-color);
		top: 0;
		z-index: 2;
	}
	.table-header-buttons .columns{
		padding:0.625rem;
	}
	.table-header-buttons .columns .button{
		font-family:var(--family-sans-serif),sans-serif;
	}
	.table-header-buttons .search_box{
		border: 1px solid rgb(183, 181, 181);
		background: #fff;
		border-radius: 6px; 
		display: flex;
		flex:2;
		margin-right: 10px;
		/* width: 200px; */
		/* box-shadow: 0 8px 6px -10px #b3c6ff; */
	}
	#search-btns {
		display:flex;
		flex:1;
	}
	.table-header-buttons .search_box .dropdown{
		flex:1;
		border-right: 2px solid #dde2f1;
		color: var(--grey-darker);
		position: relative;
		cursor: pointer;
		border-top-right-radius:0px;
		border-bottom-right-radius:0px;
		background-color:var(--input-background-color);
		font-family:var(--family-sans-serif),sans-serif !important;
	}
	.table-header-buttons .search_box .dropdown::before{
		content: '';
		position: absolute;
		top: 20px;
		right: 5px;
		border: 5px solid;
		border-color: #9B9B9B transparent transparent transparent;
	}
	.table-header-buttons .search_box .dropdown .default_option{
		padding: 13px 8px;
		font-size: 14px;
		position: static;
		top:0;
		font-weight: 500;
		
	}
	.table-header-buttons .search_box .dropdown ul{
		display: none;
		position: absolute;
		top: 50px;
		left: 0px;
		background: #fff;
		width: 150px;
		-webkit-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		-moz-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		z-index: 999;
	
	}
	.table-header-buttons .search_box .dropdown ul li{
		padding-bottom: 20px;
		padding: 10px;
		font-weight:500;
	}
	.table-header-buttons .search_box .dropdown ul li:hover{
		background-color: var(--link);
	}
	.search_field{
		display:flex;
		flex: 3;
		position: relative;
	}
	.search_field input{
		border-color: transparent;
		font-size: 16px;
		height:inherit;
		padding:0 7px 0 7px;
		box-shadow:none;
		border-radius:0 6px 6px 0;
	}

	.search_field input:hover{
		border-color: transparent;
	}
	.search_field input:focus-within{
		outline: none;
	}
	.search_field input:focus{
		outline: none;
		border-color: transparent;
	}
	.input {
		border-radius:none;
		border-color:none;
	}
	::placeholder{
		font-family:var(--family-sans-serif),sans-serif;
	}
	#refresh-button{
		margin-bottom: 11px;
		margin-left: 12px;
	}
	.actionCol{
		justify-content: flex-end;
		padding-left:0.45rem;
		padding-right:0.95rem;
	}
	@media screen and (max-width: 600px) {
		
		#pdf-btn{
			margin-right:0.5rem!important;
		}
		#search_area {
			flex-wrap: wrap;
			justify-content: center;
			flex-wrap:wrap;
		}
		.search_box {
			min-width: 100%;
		}
		.buttons {
			padding-top:0;
		}
		#search-btns {
			margin-top:20px;
			width:100%;
			display:flex;
		}
		.button {
			flex:1;
		}
		.table-header-buttons .search_box{
			margin-right:0px;   
		}
		.button {
			margin:5px;
		}
		#refresh-button{
			margin-top:7px !important;
		}
	}


	@media screen and (max-width: 1250px) {
		.d-none-mobile{
			display:none !important
		}
	}



`;class v extends y{static get styles(){return[w(k),P,$,u`
					:host {
						display: block;
					}
				`]}static get properties(){return{title:String,columns:Array,selectedParam:String,selected:Array,actions:Array,toggledColumns:{type:Object},showColumnList:{type:Boolean},sortAscending:{type:Boolean}}}constructor(){super(),this.selected=[],this.selectedParam="",this.toggledColumns={},this.showColumnList=!1,this.sortAscending=!0}updated(t){t.has("columns")&&this.columns.forEach(e=>{this.toggledColumns[e.header]=e.hidden})}onSearchSelectChangeHandler(t){this.onClearSearchBtnClickHandler(),this.selectedParam=t.target.value}generateCSV(){const t="csv";this.dispatchEvent(new CustomEvent("export-type",{detail:{type:t}}))}generatePDF(){const t="pdf";this.dispatchEvent(new CustomEvent("export-type",{detail:{type:t}}))}refresh(){this.dispatchEvent(new CustomEvent("refresh",{detail:{type:!0}}))}searchFields(t){return t.filter(e=>e.filter)}onClearSearchBtnClickHandler(){this.dispatchEvent(new CustomEvent("_clearSearch",{detail:{searchFields:this.searchFields(this.columns).map(t=>t.propertyPath)}}))}onSearchInputHandler(t){const e=t.target.value;this.searchFields(this.columns).map(i=>i.propertyPath),this.dispatchEvent(new CustomEvent("_search",{detail:{column:this.selectedParam,searchFields:this.searchFields(this.columns).map(i=>i.propertyPath),value:e}}))}onSearchBtnClickHandler(t){const e=this.shadowRoot.querySelector("#hdrSearch");this.searchText=e.value,(this.selectedParam==null||this.selectedParam==null)&&(this.selectedParam="q"),e.value&&(this.loadData(e.value),this.dispatchEvent(new CustomEvent("_search",{detail:{column:this.selectedParam,searchFields:this.searchFields(this.columns).map(function(i){return i.propertyPath}),value:e.value}})))}onActionsDropdownItemClickHandler(t){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:t.service,params:{dispatch_id:this.selected}},bubbles:!0,composed:!1})),this.onActionsDropdownTriggerClickHandler()}onExportDropdownItemClickHandler(t){switch(t){case"PDF":this.generatePDF();break;case"CSV":this.generateCSV();break}}onActionsDropdownTriggerClickHandler(){this.shadowRoot.querySelector("#actionsDropdown").classList.toggle("is-active")}onExportDropdownTriggerClickHandler(){this.shadowRoot.querySelector("#exportDropdown").classList.toggle("is-active")}toggleColumnVisibility(t){console.warn("header is ",t);const e=this.columns.find(i=>i.header===t);e&&(console.log("hidden is ",e),e.hidden=!e.hidden,this.toggledColumns={...this.toggledColumns,[t]:e.hidden},this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-visibility-changed",{detail:{columns:this.columns},bubbles:!0,composed:!0})))}toggleColumnList(){this.showColumnList=!this.showColumnList,console.log("this showColumnList ",this.showColumnList,this.columns),this.requestUpdate()}static get is(){return"table-type-header"}render(){return s`
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
									<span class="icon is-small is-left is-clickable" @click=${t=>this.onSearchBtnClickHandler(t)} title="Search">
										<adaptive-ui-icon icon=${"icons:MdSearch"}></adaptive-ui-icon>
									</span>
								</p>
							</div>
						</div>
	
						<!-- Columns Button -->
						<div class="column is-narrow is-clickable d-none-mobile" style="display: flex; align-items: center; cursor: pointer;" @click=${()=>this.toggleColumnList()}>
							<adaptive-ui-icon class="mx-2" dataColor="var(--md-sys-color-outline)" icon=${"icons:MdViewColumn"}></adaptive-ui-icon>
							<span>Columns</span>

						</div>

						${this.showColumnList?s`
								<div class="column-list">
								<div class="column-item">
							  <div style="display: flex; justify-content: flex-end; padding: 8px;">
									Column List <adaptive-ui-icon class="mx-2" style="cursor:pointer" dataColor="var(--md-sys-color-outline)" icon="icons:MdClose" @click="${()=>this.toggleColumnList()}"></adaptive-ui-icon>
							  </div>
								</div>
									${this.columns.filter(t=>t.header!=="id"&&t.type!=="href").map(t=>s`
												<div class="column-item">
												<input
														type="checkbox"
														?checked="${!t.hidden}"
														@change="${()=>this.toggleColumnVisibility(t.header)}"
													/>

													<label>${t.header}</label>
													
												</div>
											`)}
								</div>
							`:""}
	
						<!-- Export Button -->
						<div class="column is-narrow d-none-mobile">

						${this.selected&&this.actions?this.selected.length>0?s`
								<div id="actionsDropdown" class="dropdown is-right">
									<div class="dropdown-trigger">
										<button style="background-color: var(--paper); border-radius: var(--CornerSmall); display: flex; border: 1px solid var(--md-sys-color-outlineVariant); align-items: center;" aria-haspopup="true" @click=${()=>this.onActionsDropdownTriggerClickHandler()}>
											<span>Actions</span>
											<span class="icon is-small">
												<adaptive-ui-icon dataColor="#fff" icon=${"icons:MdKeyboardArrowDown"} ></adaptive-ui-icon>
											</span>
										</button>
									</div>
									<div class="dropdown-menu" id="dropdown-menu" role="menu">
										<div class="dropdown-content">
											${this.actions.map(t=>s`
													<div class="dropdown-item is-clickable" title=${t.title} @click=${()=>this.onActionsDropdownItemClickHandler(t)}>
														<span class="icon-text">
															<span class="icon mr-2">
																<adaptive-ui-icon icon=${t.icon}></adaptive-ui-icon>
															</span>
															<span>${t.title}</span>
														</span>
													</div>
												`)}
										</div>
									</div>
								</div>
							`:s``:s`<div id="exportDropdown" class="dropdown is-right">
								<div class="dropdown-trigger">
									<button style="background-color: var(--paper); border-radius: var(--CornerSmall); display: flex; border: 1px solid var(--md-sys-color-outlineVariant); align-items: center;" aria-haspopup="true" @click=${()=>this.onExportDropdownTriggerClickHandler()}>
										<span class="icon is-small mx-2">
											<adaptive-ui-icon dataColor="var(--md-sys-color-outline)" icon=${"icons:MdCloudDownload"}></adaptive-ui-icon>
										</span>
										<span>Export</span>
									</button>
								</div>
								<div class="dropdown-menu" id="dropdown-menu" role="menu">
									<div class="dropdown-content">
										${["PDF","CSV"].map(t=>s`
											<div class="dropdown-item is-clickable" title="Export ${t}" @click=${()=>this.onExportDropdownItemClickHandler(t)}>
												<span>${t}</span>
											</div>
										`)}
									</div>
								</div>
							</div>
						</div>`}

							
	
						<!-- Refresh Button -->
						<div class="column is-narrow d-none-mobile">
							<button class="button is-primary is-clickable" title="Refresh" @click=${()=>this.refresh()}>
								<span class="icon">
									<adaptive-ui-icon dataColor="#fff" icon=${"icons:MdOutlineRefresh"}></adaptive-ui-icon>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		`}}customElements.define(v.is,v);class x extends y{static get styles(){return[w(k),$,u`
				:host {
					display: block;
				}
			`]}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},pl:Object,details:Object,size:Number,columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},actions:{type:Array},title:String,searchText:String,selectType:{type:String},message:String,gateway:String,actions:Array,pagination:Array,sortAscending:{type:Boolean}}}constructor(){super(),this.selected=[],this.actions=[],this.pagination=[],this.data=[],this.title="",this.sortAscending=!0,this.sortedColumn=null;const t=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-surfaceContainerLow");this.background=this.hexToRgbA(t)}updated(t){t.has("size")}_filter_date_range(t){const e=t.detail.start_date,i=t.detail.end_date,a=t.detail.column,o=t.detail.columnValue;this.dispatchEvent(new CustomEvent("filter-date-range",{detail:{column:a,start_date:e,end_date:i,columnValue:o}}))}updated(t){t.has("totalPages")&&console.log("size ",this.size," totalPages ",this.totalPages)}getRadioChecked(t){console.log("rowdata ",t);const e=t.target.getAttribute("rowData"),i=t.target.getAttribute("rowIndex"),a=t.target.getAttribute("rowValue");this.actions=e.links;let o=a;o===void 0?(o=i,this.selectedRadio=o,this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}}))):(this.selectedRadio=o,this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}})))}getCheckedRow(t){t.target.getAttribute("rowData");const e=t.target.getAttribute("rowIndex"),i=t.target.getAttribute("rowValue");this.selected==null&&(this.selected=[]),i===void 0?(i=e,this.selected.includes(e)?(this.selected=this.selected.filter(a=>a!=e),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))):(this.selected.push(i),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}})))):this.selected.includes(i)?(this.selected=this.selected.filter(a=>a!=i),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))):(this.selected=[...this.selected,i],this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}})))}_exportType(t){const e=t.detail.type;this.dispatchEvent(new CustomEvent("export",{detail:{type:e}}))}refresh(t){const e=t.detail.type;this.dispatchEvent(new CustomEvent("refresh",{detail:{type:e}}))}_handleInputChange(t){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:t.detail.column.propertyPath,header:t.detail.column.header,value:t.detail.value}}))}searchFields(t){return t.filter(function(e){return e.filter})}_searchFieldsExist(t){return t.filter(function(e){return e.filter}).length>0}_action(t){const e=t.currentTarget.dataLink;this.pl._dialog(e.service,e.params)}_pageChanged(t){console.log("page number ",t);const e=t,i=this.page;(i!==void 0||i!="...")&&this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:i,page:e}})),this.page=e}_sizeChanged(t){const e=t.detail.size,i=this.size;i!==void 0&&this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:i,size:e}})),this.size=e}_selectChange(t){t.type&&t.type==="change"&&Polymer.dom(t).localTarget}_searchReset(t){this._clearSearch()}_search(t){const e=t.detail.value,i=t.detail.column,a=t.detail.searchFields;this.dispatchEvent(new CustomEvent("search",{detail:{column:i,searchFields:a,value:e}}))}_clearSearch(t){const e=t.detail.searchFields;this.dispatchEvent(new CustomEvent("clear-search",{detail:{searchFields:e}}))}firstUpdated(){const t=this.generatePagination(this.page,this.totalPages);console.log("pagination ",t),this.pagination=t}_computeCurrentMaxSize(t,e,i){const a=e*t;return a>i?i:a}_computeCurrentSize(t,e){return(t-1)*e+1}_nextButtonEnabled(t,e){return t<e}_prevButtonEnabled(t){return t>1}_nextPage(){this.page<this.totalPages&&(this.page=this.page+1),this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}})),this._pageChanged(this.page)}_prevPage(){this.page-1>0&&(this.page=this.page-1),this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}})),this._pageChanged(this.page)}renderColumn(t,e,i,a,o){if(t.actions)return this.actions=a.links,s`
			
			`;if(this.selectable&&i===0)return s`
				${this.selectType==="single"?s`
						<label class="radio">
							<input type="radio" name="${a}" value="${a}" @click="${this.getRadioChecked}" 
								rowData=${a} rowValue=${e} rowIndex=${o}>
							<span></span>
						</label>
						${e}
					`:s`
						<div style="display:flex;">
							<paper-checkbox
							style="border: solid #fff;margin-right: 5%;"
							
							

								@click="${this.getCheckedRow}"
								rowData=${a}
								rowIndex=${o}
								.rowData=${a}
								.rowIndex=${o}
								rowValue=${e}
							></paper-checkbox>
							<div>
								${e}
							</div>
						</div>
					`}
			`;try{const d=[];let r=e,l,g=0;if(typeof r=="object")l=r;else if(l=JSON.parse(r),typeof l!="object")throw"Not Object JSON";for(var n in l){let p=0;const b=h=>{const f="nested"+g+n+o;p=p+4,g=g+1;const _=(c,E)=>{const S=this.shadowRoot.querySelector(`#${c}`),m=E.target;S.classList.toggle("appear"),m.title=m.title==="Show More"?"Hide More":"Show More",m.classList.toggle("selected")};return s`
							<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
								${typeof h=="object"?s` 
										<span title="Show More" class="show-more" @click=${c=>_(f,c)}>...</span>
										<div id=${f} class="column nested disappear" style="margin-top:0.1px; padding-left:${p}px;">
											${Object.keys(h).map(c=>s`
														<div style="margin-top:0.1px;">
															<strong>${c}: </strong>
															<span>${b(h[c])}</span>
														</div>
													`)}
										</div>
									`:h}
							</span>
						`};d.push(s`
						<div style="margin-top:0.1px;">
							<strong>${n}: </strong>
							<span>${b(l[n])}</span>
						</div>
					`)}return s`${d.map(p=>s` ${p}<br>`)}`}catch{switch(t.type){case"boolean":return s`
							${String(e).toLowerCase()=="false"?s`
									<iron-icon icon="icons:close"></iron-icon>
								`:s`
									<iron-icon icon="icons:check"></iron-icon>
								`}
						`;case"file":return s`<a download href="${e}">File</a>`;default:if(Object.keys(this.state).includes(t.property))if(Object.keys(this.state[t.property]).includes(e)){const r=this.state[t.property][e];return s`
									<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;" style="background-color:${r}; padding:5px; color:${this.isColorBright(r)?"var(--link--color-invert)":"var(--grey-darker)"}; border-radius:5px 5px 5px 5px;">
										${e}
									</span>
								`}else return s`
									<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
										${e}
									</span>
								`;else return s`
								<span class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
									${e}
								</span>
							`}}}static get is(){return"table-type"}updated(t){super.updated(t)}_navigatePage(t){const i=(this.page||1)+t;i>=1&&i<=this.totalPages&&this._updatePage(i)}_navigateToPage(t){t>=1&&t<=this.totalPages&&this._updatePage(t)}_updatePage(t){if(this.page!==t){const e=this.page;this.page=t,this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:e,newPage:t}}))}}generatePagination(t,e){console.log("current page ",t,e);let i=[],a=3,o=Math.ceil(a/2),n;t<=o?n="start":e-t<o?n="end":n="middle";let d=a<e;for(let r=1;r<=e;++r){let l=!1;switch(n){case"start":r<=a&&(l=!0);break;case"end":e-r<a-1&&(l=!0);break;case"middle":Math.abs(t-r)<o&&(l=!0);break}l&&i.push(r),d&&(n==="start"&&r===a||n==="middle"&&r===t+o-1||n==="end"&&r===e-a+1)&&i.push("...")}return d&&i[i.length-1]!==e&&i.push(e),i}_handleColumnVisibilityChanged(t){this.columns=[...t.detail.columns]}toggleSort(t){this.sortedColumn===t.property?this.sortAscending=!this.sortAscending:(this.sortedColumn=t.property,this.sortAscending=!0),this._handleSort()}_handleSort(){this.sortedColumn&&(this.data.sort((t,e)=>{const i=t[this.sortedColumn],a=e[this.sortedColumn];return i<a?this.sortAscending?-1:1:i>a?this.sortAscending?1:-1:0}),this.requestUpdate())}hexToRgbA(t){var e;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(t))return e=t.substring(1).split(""),e.length==3&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),e="0x"+e.join(""),"rgba("+[e>>16&255,e>>8&255,e&255].join(",")+",0.5)";throw new Error("Bad Hex")}setResultsPerPage(t){this.setLimit(t)}render(){return s`
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
							${this.columns.filter(t=>!t.hidden&&t.type!=="href").map(t=>s`
										<th style=" max-width: 200px;  background: ${this.background};" class="py-3 has-text-weight-bold" scope="col">
											<datasource-table-head
												.column="${t}"
												sort-direction$="[[column.sortDirection]]"
												@input-change-th-content="${this._handleInputChange}"
												sorted$="[[column.sorted]]"
												sortable$="[[column.sortable]]"
												@filter-date-range="${this._filter_date_range}"
												@sort-th-content="${this._handleSort}"
												@click="${()=>this.toggleSort(t)}"  
												sorted="${this.sortedColumn===t.property}"
												.sortAscending=${this.sortAscending}
												.loadData=${this.loadData}
												>
											</datasource-table-head>
										</th>
									`)}
							
							</tr>
						</thead>
						<tbody style="background: var(--paper)">
						${this.data.length>0?this.data.map((t,e)=>s`
							  <tr>
								${this.columns.filter(i=>!i.hidden).map((i,a)=>s`
									<td class="py-3" style="vertical-align: middle; overflow: hidden; text-overflow: ellipsis; white-space: wrap;" data-label=${i}>
									  ${this.renderColumn(i,t[i.property],a,t,e)}
									</td>
								  `)}
							  </tr>
							`):s`
							  <tr>
								<td colspan="${this.columns.length}" style="text-align: center;">
								  ${this.message}
								</td>
							  </tr>
							`}						  
						</tbody>
						
					</table>
				</div>

				<div class="columns is-mobile is-multiline is-vcentered">
  
  <!-- Pagination Info Column -->
  <div class="column is-one-third-tablet is-full-mobile">
    ${this.data.length==0?s`
      `:s`
      ${this.paginate&&s`
          <div class="pagination-range px-4 my-2  footer-d-none-mobile">
            <span class="is-size-7">
              ${this._computeCurrentSize(this.page,this.size)} - ${this._computeCurrentMaxSize(this.page,this.size,this.totalElements)} of ${this.totalElements}
            </span>
          </div>`}
   
    `}
  </div>
  
  <!-- Navigation Buttons Column -->
  <div class="column">
    <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
      ${this._prevButtonEnabled(this.page)?s`
        <a class="pagination-previous mb-4" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}">
          
		<span class="icon">
            <adaptive-ui-icon icon=${"icons:MdChevronLeft"}></adaptive-ui-icon>
          </span>
		  Back
        </a>
      `:s`<a class="pagination-previous mb-4" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}">
	     
	  <span class="icon">
		<adaptive-ui-icon icon=${"icons:MdChevronLeft"}></adaptive-ui-icon>
	  </span>
	  Back
	</a>`}

      <ul class="pagination-list">
        ${this.pagination.map(t=>s`
          <li>
            <a  @click=${()=>this._pageChanged(t)} class="pagination-link ${t===this.page?"is-current":""}" aria-label="Goto page ${t+1}" title="Goto page ${t+1}" style="${t==="..."?"pointer-events: none;":""}" ?disabled=${t==="..."}>  
              ${t}
            </a>
          </li>
        `)}
      </ul>

      ${this._nextButtonEnabled(this.page,this.totalPages)?s`
        <a class="pagination-next mb-4" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}">
        Next  
		<span class="icon">
            <adaptive-ui-icon icon=${"icons:MdChevronRight"}></adaptive-ui-icon>
          </span>
        </a>
      `:s`<a class="pagination-next mb-4" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}">
	  Next  
	  <span class="icon">
		  <adaptive-ui-icon icon=${"icons:MdChevronRight"}></adaptive-ui-icon>
		</span>
	  </a>`}
    </nav>
  </div>

  <!-- Results Per Page Column -->
  <div class="column is-one-quarter  footer-d-none-mobile">
    <div class="is-flex is-align-items-center is-justify-content-center">
      <span class="is-size-7 mx-4">Results Per Page</span>
      <select id="resultsPerPage" @change="${t=>this.setResultsPerPage(t.target.value)}">
      <option value="10">10</option>   
	  <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>

</div>


		
 
				
				  
			
			</div>
		`}}customElements.define(x.is,x);export{x as TableType};
