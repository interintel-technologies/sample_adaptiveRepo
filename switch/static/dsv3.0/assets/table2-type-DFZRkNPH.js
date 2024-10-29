import{i,h as g,r as u,g as y,k as r}from"./index-C2PWchud.js";import{a as C,D as P}from"./datalist-element-wrapper-BtEsUu56.js";import"./paper-menu-button-C_oWXu8J.js";import"./iron-flex-layout-C17s8gyg.js";import"./paper-icon-button-B3AFeDyC.js";import"./paper-dropdown-menu-8R8AANSK.js";import"./iron-image-B9q0RFfs.js";import"./jspdf.min-D4P-jdMk.js";import"./iron-icon-Ci-yo7Ra.js";import"./fa-icon-COAiXmZs.js";import"./empty-view-B1-e8K41.js";import"./datasource-mixin-DMQBE4lo.js";import"./polymer-legacy-CVdXdTHq.js";import"./default-theme-ChQ485_s.js";import"./paper-ripple-behavior-Bi9iYOcF.js";import"./paper-ripple-CP-IWaVj.js";import"./mqtt-mixin-W6USKsd2.js";import"./paho-mqtt-CBfrIYbz.js";import"./utils-mixin-D5aAiqNi.js";import"./transform-C4D8YA0C.js";import"./toPropertyKey-DE8vi2zA.js";import"./DialogContent-DMuq1MYF.js";import"./shadow-R2NCNWlE.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./paper-material-styles-CABhO1-r.js";import"./lit-html-dRijB2IX.js";const T=i`
  .p-dropdown{
      background-color:var(--input-background-color) !important;
      color:var(--link--color-invert);
  }
  .p-dropdown a:hover{
      background-color:var(--link) !important;
      color:var(--link--color-invert) !important;
  }
  .active-list{
      background-color:var(--link) !important;
      color:var(--link--color-invert) !important;
  }
  .wrapper{
    border-radius:0 0 20px 20px;
    border:2px solid rgba(183,181,181,.5);
    height:60px;
    margin-top:-24px;
    padding:1.5em .75em .75em 1.5em;
    /* width:96%; */
 
  }
  @media(max-width:768px){
    .wrapper{
      /* width:71.9vw; */
    }
  }
  @media(max-width:480px){
    .wrapper{
      /* width:70.8vw; */
    }
  }
`;class w extends g{static get styles(){return[u(y),C,T,i`
                :host {
                display: block;
                }
            `]}constructor(){super(),this.availableSize=[],this.size=50}static get is(){return"datasource-table2-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_dropdownReveal(){const t=this.shadowRoot.querySelector(".p-dropdown");switch(t.style.display){case"block":t.style.display="none";break;default:t.style.display="block";break}}_computeCurrentSize(t,e){return(t-1)*e+1}_computeCurrentMaxSize(t,e,o){const a=e*t;return a>o?o:a}_nextPage(){this.page<this.totalPages&&(this.page=this.page+1),this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){this.page-1>0&&(this.page=this.page-1),this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(t,e){return t<e}_prevButtonEnabled(t){return t>1}_newSizeIsSelected(t){t.preventDefault();let e=t.target.getAttribute("data-name");e&&(this.oldPage!==null&&this.oldPage!==void 0&&(this.page=1),this.size=e,this.dispatchEvent(new CustomEvent("size-change",{detail:{size:e}})))}_computePosition(t){return t==="right"?"end-justified":""}render(){return r` 
            <div class="wrapper is-flex">
                <div class="size">
                    <div class="perpage-dropdown">
                        <div class="p-display">
                            ${this.availableSize.length?r`
                                    <p class="per is-capitalized is-size-7" @click=${this._dropdownReveal}>Per Page ${this.size}</p>
                                    <div class="p-dropdown">
                                        <ul>
                                            ${this.availableSize.map(t=>r`
                                                    <li class="${t==this.size?"active-list":""}">
                                                        <a href="$1" class="is-size-7" data-name="${t}" @click="${this._newSizeIsSelected}">${t}</a>
                                                    </li>
                                                `)}
                                        </ul>
                                    </div>
                                `:r`<p class="is-capitalized is-size-7">Per Page ${this.size}</p>`}
                        </div>
                    </div>
                </div>
                <div class="range">
                    <div class="is-flex">
                        <div class="pagination-range">
                        <p class="is-size-7">${this._computeCurrentSize(this.page,this.size)} - ${this._computeCurrentMaxSize(this.page,this.size,this.totalElements)} of ${this.totalElements}</p>
                        </div>
                        <div class="is-flex pagination-buttons">
                            ${this._prevButtonEnabled(this.page)?r`<div class="left-btn btn" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}"></div>`:r`<div></div>`}
                            ${this._nextButtonEnabled(this.page,this.totalPages)?r`<div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}"></div>`:r`<div></div>`} 
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(w.is,w);const j=i`
	.active_item{
		background-color: var(--link);
	}
	.column {
		padding:0.85rem;
	}
	.buttons {
		margin: 0 auto !important;
		justify-content: flex-end;
		width:100%;
	}
	
	.button {
	padding: 7px 20px;
	border-radius:15px 15px 15px 15px !important;
	box-shadow:0 .075rem .15rem rgba(183,181,181,.45);
	border:none;
	font-family:var(--family-sans-serif);
	}

	.button:hover{
		transform:scaleX(1.01) scaleY(1.02);
		transition: 0.8s ease-out;
		color:var(--link--color-invert);
	}

	#tab_area{
		align-items: center!important;
		border-radius:15px 15px 15px 15px;
		background-color: var(--card-background-color);
		display:flex;
		flex:wrap;
		max-height:40px;
		
	}
	.tab{
		max-width:60px;
		max-height:20px;
	}
	.tab h5{
		color:var(--grey-darker);
	}
	.tab:hover{
		cursor:pointer;
	}
	.tab.active{
		background-color:var(--body-background-color);
		text-align:center;
		border-radius:15px 15px 15px 15px;
	}
	.itemCol{
		border:1px solid rgba(183,181,181,.5);
		border-radius:15px 15px 15px 15px;
		justify-content:center;
		display:flex;
		max-height:40px;
		margin-left:.5em;
		vertical-align:middle;
		background-color:var(--card-background-color);
	}
	.itemCol:hover{
		cursor:pointer;
	}
	.itemCol .icon i{
		color:var(--grey-darker);
	}
	.field .has-addons{
		border-radius:15px !important;
		background-color: var(--card-background-color) !important;
		color:var(--grey-darker);
		height:30px;
		
	}
	.field.has-addons .input{
		background-color:var(--card-background-color) !important;
		height:2.8em !important;
		border-top-right-radius:15px !important;
		border-bottom-right-radius:15px !important;
		border:2px solid rgba(183,183,181,.5);
	}
	.table-header-buttons {
		background-color: var(--body-background-color);
		top: 0;
		z-index: 2;
		border-radius:30px 30px 0 0;
		padding:1.5em 0 1.5em 0;
		border:2px solid rgba(183,181,181,.5);
		display:flex;
		flex-direction:row;
		width:auto !important;
	}
	.table-header-buttons .columns{
		padding:0.625rem;
		width:80vw;
	}
	.table-header-buttons .columns .button{
		font-family:var(--family-sans-serif),sans-serif;
	}
	.table-header-buttons .search_box{
		border-radius: 6px; 
		display: flex;
		flex:2;
	}
	#search-btns {
		display:flex;
		flex:1;
		padding-left:0;
	}

	.table-header-buttons .search_box .dropdown{
		flex:1;
		border: 2px solid rgb(183,181,181,.5);
		color: var(--grey-darker);
		position: relative;
		cursor: pointer;
		height:45px;
		border-top-left-radius:15px;
		border-bottom-left-radius:15px;
		border-bottom-right-radius:0px;
		border-top-right-radius:0px;
		background-color:var(--input-background-color);
		font-family:var(--family-sans-serif),sans-serif !important;
		vertical-align:middle;
	
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
		overflow:hidden;
	}
	.table-header-buttons .search_box .dropdown ul{
		display: none;
		position: absolute;
		top: 50px;
		left: 0px;
		background: var(--card-background-color);
		width: 150px;
		-webkit-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		-moz-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		z-index: 999 !important;
	
	}
	.table-header-buttons .search_box .dropdown ul li{
		padding-bottom: 20px;
		padding: 10px;
		font-weight:500;
	}
	.table-header-buttons .search_box .dropdown ul li:hover{
		background-color: var(--link);
		color:var(--link--color-invert);
	}
	.search_field{
		display:flex;
		flex: 3;
		position: relative;
	}
	.search_item:hover{
		color:var(--link--color-invert);
	}
	.search_field input{
		font-size: 16px;
		height:inherit;
		padding:0 7px 0 7px;
		box-shadow:none;
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
	.table-header-buttons .column.is-8{
		width:42rem;
	} 
	#refresh-button{
		margin-bottom: 11px;
		margin-left: 12px;
		background-color:var(--info--dark-color);	
		color:var(--link--color-invert)
		
	}
	.searchBtn{
		background-color:var(--link);
		color:var(--link--color-invert) !important;
		height:30px;
		
	}
	.actionCol{
		display:flex;
		justify-content: center !important;
		padding-left:0.45rem;
		padding-right:0.95rem;
		margin-left:2em;		
	}
	
	.clearBtn{
		background-color:var(--app-secondary-color);
		color:var(--link--color-invert) !important;
		height: 30px !important;
	}
	.submitBtn{
		background-color:var(--link);
		color:var(--link--color-invert);
	}
	#pdf-btn{
		background-color:var(--link);
		color:var(--link--color-invert);
	}
	#csv-btn{
		background-color:var(--link);
		color:var(--link--color-invert);
	}
	@media(max-width:1024px){
		.table-header-buttons .search_box{
			min-width:100% !important;
		}
	}
	@media(max-width:768px){
		.table-header-buttons{
			/* height:15vh; */
			justify-content:center;
			
		}
		.actionCol {
			margin-left:0;
		}
		
		#tab_area{
			max-width:58vw;
			width:57vw;
			padding:.625em .625em .625em .625em;
			font-size:14px;
		}
		.field.has-addons .control{
			flex: 1 1 0%;
		}
		.field.has-addons .control .input{
			border-bottom-left-radius:0px !important;
			border-top-left-radius:0px !important;
			background-color: var(--card-background-color) !important;
			color:var(--grey-darker);
			height:2.8em !important;
		
		}
		.searchBtn{
			font-size:13px;
		}
		.clearBtn{
			font-size:13px;
		}
		.table-header-buttons .search_box{
			min-width:100%;
		}
		#search-btns{
			justify-content:flex-end;
			padding-left:.9rem !important;
		}
			
		#search-btns .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
			/* displaY:inline-flex; */
		}
		.is-right .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
		}
	}
	@media(min-width:768px) and (max-width:900px){
		#search-btns{
			justify-content:flex-start;
			padding-left:2.5rem;
		}
		

	}
	
	@media(max-width:600px){
		.table-header-buttons .columns{
			font-size:12px !important;
		}
		.table-header-buttons .column.is-8{
			max-width:40rem;
		}	
		/* #search-btns{
			justify-content:center;
		} */
		#search-btns .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
			/* displaY:inline-flex; */
		}
		.is-right .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
		}
		
	}
	@media(max-width:430px){
		.is-right .button{
			padding:4px 7px 4px 7px;
			font-size:10px !important;
			border-radius:10px 10px 10px 10px;
		}
	}
`;class $ extends g{static get styles(){return[u(y),P,j,i`
					:host {
						display: block;
					}
				`]}static get properties(){return{title:String,columns:{type:Array},selectedParam:String,activeTab:Number}}constructor(){super(),this.activeTab=0}updateSearchItem(t){const e=t.target.innerText,o=this.shadowRoot.querySelector("#qIn"),a=this.shadowRoot.querySelectorAll(".search_item"),d=t.target;o.innerText=e,a.forEach(s=>{s.classList.remove("active_item")}),d.classList.add("active_item"),this.selectedParam=t.target.getAttribute("param")}generateCSV(){const t="csv";this.dispatchEvent(new CustomEvent("export-type",{detail:{type:t}}))}generatePDF(){const t="pdf";this.dispatchEvent(new CustomEvent("export-type",{detail:{type:t}}))}dropdown(){const t=this.shadowRoot.querySelector("ul");t.classList.contains("is-block")?t.classList.remove("is-block"):t.classList.add("is-block")}closeDropdown(){const t=this.shadowRoot.querySelector("ul");t.classList.contains("is-block")&&t.classList.remove("is-block")}specificDropdown(t){const e=this.shadowRoot.querySelector("ul");e.classList.contains("is-block")?e.classList.remove("is-block"):e.classList.add("is-block")}refresh(){this.dispatchEvent(new CustomEvent("refresh",{detail:{type:!0}}))}searchFields(t){return t.filter(function(e){return e.filter})}_searchReset(t){const e=this;this.dispatchEvent(new CustomEvent("_clearSearch",{detail:{searchFields:e.searchFields(e.columns).map(function(o){return o.propertyPath})}}))}_searchFieldsExist(t){return t.filter(function(e){return e.filter}).length>0}_search(t){const e=this,o=e.shadowRoot.querySelector("#q").value;this.searchText=o,(this.selectedParam==null||this.selectedParam==null)&&(this.selectedParam="q"),o&&this.dispatchEvent(new CustomEvent("_search",{detail:{column:this.selectedParam,searchFields:e.searchFields(e.columns).map(function(a){return a.propertyPath}),value:o}}))}clearInput(){var t=this.qs("#q");t.value!=""&&(t.value="")}firstUpdated(t){super.firstUpdated(t),this._searchFieldsExist(this.columns)&&document.addEventListener("click",function(e){e.path[0].className=="dropdown"||(e.path[0].id=="qIn"?this.dropdown():this.closeDropdown())})}static get is(){return"table2-type-header"}render(){return r`
	
			<div class="table-header-buttons">
				<div class="columns is-multiline">
					<div class="column is-4">
						<!--Tabs:functionality to be added-->
						<!-- <div id="tab_area" class="columns">
							<div class="column is-3 tab ml-1 ${this.activeTab===0?"active":""}" @click=${()=>this.activeTab=0}>
								<h6>All</h6>
							</div>
							<div class="column is-3 tab ml-1 ${this.activeTab===1?"active":""}" @click=${()=>this.activeTab=1}>
								<h6>New</h6>
							</div>
							<div class="column is-3 tab ml-1 ${this.activeTab===2?"active":""}" @click=${()=>this.activeTab=2}>
								<h6>Success</h6>
							</div>
							<div class="column is-3 tab ml-1 ${this.activeTab===3?"active":""}" @click=${()=>this.activeTab=3}>
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
													${this.columns.map(t=>r`
															<li class="search_item" @click="${this.updateSearchItem}" param="${t.propertyPath}">${t.header}</li>
														`)}
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
			
		`}}customElements.define($.is,$);/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */const I=i`
 
      
 /* -- Material Design Table style -------------- */
 /* .table {
     background-color: var(--body-background-color);
     width: 100%;
 }
 
 .table > thead > tr,
 .table > tbody > tr,
 .table > tfoot > tr {
     -webkit-transition: all 0.3s ease;
     -o-transition: all 0.3s ease;
     transition: all 0.3s ease;
 }
 
 .table > thead > tr > th,
 .table > tbody > tr > th,
 .table > tfoot > tr > th,
 .table > thead > tr > td,
 .table > tbody > tr > td,
 .table > tfoot > tr > td {
     text-align: left;
     padding: 8px 16px;
     align-items: center;
     font-size: 13px;
     color: #54667a;
     border-top: 0;
     -webkit-transition: all 0.3s ease;
     -o-transition: all 0.3s ease;
     transition: all 0.3s ease;
 }
 
 .table > thead > tr > th {
     font-weight: 400;
     color: #2d3436;
     vertical-align: bottom;
     font-size: 15px;
     padding: 15px 8px;
     text-transform: capitalize;
     border-bottom: 2px solid rgba(0, 0, 0, 0.12);
 }
 
 .table > caption + thead > tr:first-child > th,
 .table > colgroup + thead > tr:first-child > th,
 .table > thead:first-child > tr:first-child > th,
 .table > caption + thead > tr:first-child > td,
 .table > colgroup + thead > tr:first-child > td,
 .table > thead:first-child > tr:first-child > td {
     border-top: 0;
 }
 
 .table > tbody + tbody {
     border-top: 1px solid rgba(0, 0, 0, 0.12);
 }
 
 .table .table {
     background-color: var(--body-background-color);;
 }
 
 .table .no-border {
     border: 0;
 }
 
 .table-condensed > thead > tr > th,
 .table-condensed > tbody > tr > th,
 .table-condensed > tfoot > tr > th,
 .table-condensed > thead > tr > td,
 .table-condensed > tbody > tr > td,
 .table-condensed > tfoot > tr > td {
     padding: 0.8rem;
 }
 
 .table-bordered {
     border: 0;
 }
 
 .table-bordered > thead > tr > th,
 .table-bordered > tbody > tr > th,
 .table-bordered > tfoot > tr > th,
 .table-bordered > thead > tr > td,
 .table-bordered > tbody > tr > td,
 .table-bordered > tfoot > tr > td {
     border: 0;
     border-bottom: 1px solid #e0e0e0;
 }
 
 .table-bordered > thead > tr > th,
 .table-bordered > thead > tr > td {
     border-bottom-width: 2px;
 }
 
 .table-striped > tbody > tr:nth-child(odd) > td,
 .table-striped > tbody > tr:nth-child(odd) > th {
     background-color: #f5f5f5;
 }
 
 .table-hover > tbody > tr:hover > td,
 .table-hover > tbody > tr:hover > th {
     background-color: rgba(0, 0, 0, 0.12);
 }
  */
 .table-responsive-vertical {
     /* padding: 0; */
    /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); */
     /* overflow: auto; */
 }
 
 .table-responsive-vertical > tbody > tr {
    /* padding-top:.75em !important;
    padding-bottom:.75em !important;
    padding-left:.75em !important; */

 }
 
 @media screen and (max-width: 768px) {
     .table-responsive-vertical {
         /* margin: 16px; */
         /* padding-left:1.5em;
         padding-right:1.5em; */
         
     }

    .dt-table{
        /* width:99%; */
        width:auto;
        border-collapse: separate !important;
        border-spacing: 0 15px !important;
        border-left:2px solid rgba(183,181,181,.5);
        border-right:2px solid rgba(183,181,181,.5);
    }
     .table-responsive-vertical > .table {
         margin-bottom: 0;
         background-color: transparent;
     }
 
     .table-responsive-vertical > .table > thead,
     .table-responsive-vertical > .table > tfoot {
         display: none;
     }
 
     .table-responsive-vertical > .table > tbody {
         display: block;
         overflow-y: auto;
        overflow-x: hidden !important; 
     }
 
     .table-responsive-vertical > tbody > tr {
        display: block;
        border-radius: 2px;
        margin-bottom: 1.6rem;
        padding-top:.75em !important;
        padding-bottom:.5em !important;
        padding-left:.5em !important;
        padding-right:.75em !important;
     }
 
     .table-responsive-vertical > .table > tbody > tr > td {
         background-color: var(--body-background-color);
         display: block;
         vertical-align: middle;
         text-align: right;
         
     }
 
     .table-resposive-vertical > .table > tbody > tr > td[data-title]:before {
         content: attr(data-title);
         float: left;
         font-size: inherit;
         font-weight: 400;
         /* color: #757575; */
     }
 
 
 
 
 
     .table-responsive-vertical > .table-bordered {
         border: 0;
     }
 
     .table-responsive-vertical > .table-bordered > tbody > tr > td {
         border: 0;
         border-bottom: 1px solid #e0e0e0;
     }
 
     .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {
         border-bottom: 0;
     }
 
     .table-responsive-vertical > .table-striped > tbody > tr > td,
     .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {
         background-color: #f5f5f5;
     }
 
     .table-responsive-vertical > .table-hover > tbody > tr:hover > td,
     .table-responsive-vertical > .table-hover > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical > .table-hover > tbody > tr > td:hover {
         background-color: rgba(0, 0, 0, 0.12);
     }
 }
 @media (min-width:768px) and (max-width:1024px){
    .table-responsive-vertical > tbody > tr {
        display: block;
        border-radius: 2px;
        margin-bottom: 1.6rem;
        padding-top:.75em !important;
        padding-bottom:.5em !important;
        padding-left:.5em !important;
        padding-right:.75em !important;
     }
 }
 
 /* .table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {
     background-color: #fde0dc;
 }
 
 .table-hover.table-mc-red > tbody > tr:hover > td,
 .table-hover.table-mc-red > tbody > tr:hover > th {
     background-color: #f9bdbb;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {
         background-color: #fde0dc;
     }
 
     .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {
         background-color: #f9bdbb;
     }
 }
 
 .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {
     background-color: #fce4ec;
 }
 
 .table-hover.table-mc-pink > tbody > tr:hover > td,
 .table-hover.table-mc-pink > tbody > tr:hover > th {
     background-color: #f8bbd0;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {
         background-color: #fce4ec;
     }
 
     .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {
         background-color: #f8bbd0;
     }
 }
 
 .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {
     background-color: #f3e5f5;
 }
 
 .table-hover.table-mc-purple > tbody > tr:hover > td,
 .table-hover.table-mc-purple > tbody > tr:hover > th {
     background-color: #e1bee7;
 }
  */

 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {
         background-color: #f3e5f5;
     }
 
     .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {
         background-color: #e1bee7;
     }
 }
 
 .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {
     background-color: #ede7f6;
 }
 
 .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
 .table-hover.table-mc-deep-purple > tbody > tr:hover > th {
     background-color: #d1c4e9;
 }
  */

 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {
         background-color: #ede7f6;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {
         background-color: #d1c4e9;
     }
 }
 
 .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {
     background-color: #e8eaf6;
 }
 
 .table-hover.table-mc-indigo > tbody > tr:hover > td,
 .table-hover.table-mc-indigo > tbody > tr:hover > th {
     background-color: #c5cae9;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {
         background-color: #e8eaf6;
     }
 
     .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {
         background-color: #c5cae9;
     }
 }
 
 .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {
     background-color: #e7e9fd;
 }
 
 .table-hover.table-mc-blue > tbody > tr:hover > td,
 .table-hover.table-mc-blue > tbody > tr:hover > th {
     background-color: #d0d9ff;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {
         background-color: #e7e9fd;
     }
 
     .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {
         background-color: #d0d9ff;
     }
 }
 
 .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {
     background-color: #e1f5fe;
 }
 
 .table-hover.table-mc-light-blue > tbody > tr:hover > td,
 .table-hover.table-mc-light-blue > tbody > tr:hover > th {
     background-color: #b3e5fc;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {
         background-color: #e1f5fe;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {
         background-color: #b3e5fc;
     }
 }
 
 .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {
     background-color: #e0f7fa;
 }
 
 .table-hover.table-mc-cyan > tbody > tr:hover > td,
 .table-hover.table-mc-cyan > tbody > tr:hover > th {
     background-color: #b2ebf2;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {
         background-color: #e0f7fa;
     }
 
     .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {
         background-color: #b2ebf2;
     }
 }
 
 .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {
     background-color: #e0f2f1;
 }
 
 .table-hover.table-mc-teal > tbody > tr:hover > td,
 .table-hover.table-mc-teal > tbody > tr:hover > th {
     background-color: #b2dfdb;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {
         background-color: #e0f2f1;
     }
 
     .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {
         background-color: #b2dfdb;
     }
 }
 
 .table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {
     background-color: #d0f8ce;
 }
 
 .table-hover.table-mc-green > tbody > tr:hover > td,
 .table-hover.table-mc-green > tbody > tr:hover > th {
     background-color: #a3e9a4;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {
         background-color: #d0f8ce;
     }
 
     .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {
         background-color: #a3e9a4;
     }
 }
 
 .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {
     background-color: #f1f8e9;
 }
 
 .table-hover.table-mc-light-green > tbody > tr:hover > td,
 .table-hover.table-mc-light-green > tbody > tr:hover > th {
     background-color: #dcedc8;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {
         background-color: #f1f8e9;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {
         background-color: #dcedc8;
     }
 }
 
 .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {
     background-color: #f9fbe7;
 }
 
 .table-hover.table-mc-lime > tbody > tr:hover > td,
 .table-hover.table-mc-lime > tbody > tr:hover > th {
     background-color: #f0f4c3;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {
         background-color: #f9fbe7;
     }
 
     .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {
         background-color: #f0f4c3;
     }
 }
 
 .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {
     background-color: var(--body-background-color);de7;
 }
 
 .table-hover.table-mc-yellow > tbody > tr:hover > td,
 .table-hover.table-mc-yellow > tbody > tr:hover > th {
     background-color: var(--body-background-color);9c4;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {
         background-color: var(--body-background-color);de7;
     }
 
     .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {
         background-color: var(--body-background-color);9c4;
     }
 }
 
 .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {
     background-color: var(--body-background-color);8e1;
 }
 
 .table-hover.table-mc-amber > tbody > tr:hover > td,
 .table-hover.table-mc-amber > tbody > tr:hover > th {
     background-color: #ffecb3;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {
         background-color: var(--body-background-color);8e1;
     }
 
     .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {
         background-color: #ffecb3;
     }
 }
 
 .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {
     background-color: var(--body-background-color);3e0;
 }
 
 .table-hover.table-mc-orange > tbody > tr:hover > td,
 .table-hover.table-mc-orange > tbody > tr:hover > th {
     background-color: #ffe0b2;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {
         background-color: var(--body-background-color);3e0;
     }
 
     .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {
         background-color: #ffe0b2;
     }
 }
 
 .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {
     background-color: #fbe9e7;
 }
 
 .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
 .table-hover.table-mc-deep-orange > tbody > tr:hover > th {
     background-color: #ffccbc;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {
         background-color: #fbe9e7;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {
         background-color: #ffccbc;
     }
 }
 */
 /* .topnav {
     overflow: hidden;
     background-color: var(--body-background-color);fff;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
 
 }
 
 .topnav .search-container {
     display: inline-block;
 }
 
 .topnav input[type=text] {
     padding: 12px;
     margin-top: 8px;
     margin-bottom: 8px;
     background-color: #f5f5f5;
     color: #606060;
     font-size: 14px;
     border: none;
     width: 600px;
 }
 
 .topnav .search-container button {
     padding: 12px;
     margin-top: 8px;
     margin-bottom: 8px;
     color: var(--body-background-color);FFF;
     background-color: var(--app-default-color);
     font-size: 14px;
     border: none;
     cursor: pointer;
 
 }
 
 .topnav .search-container button:hover {
     background: #ccc;
 }
 
 @media screen and (max-width: 790px) {
     .topnav {
         overflow: hidden;
         background-color: var(--body-background-color);fff;
         width: 100%;
         display: contents;
         justify-content: normal;
         align-items: normal;
 
     }
 
     .topnav .search-container {
         display: inline-block;
     }
 
     .topnav .search-container {
         display: contents;
         width: 100%;
         float: none;
     }
 
     .topnav a, .topnav input[type=text], .topnav .search-container button {
         float: none;
         display: block;
         text-align: left;
         width: 100%;
         margin: 0;
         padding: 14px;
     }
 
     .topnav input[type=text] {
         border: 1px solid #ccc;
     }
 } */ 
 /* .table-container{
     width: 100%;
     position: relative;
     overflow-x: scroll;
 }
 .table-container table.dt-table{
     width: 100%;
     border-spacing: 0;
     overflow-x: scroll;
 }
 .table-container table.dt-table tr{
     background: var(--body-background-color);;
     width: inherit;
     font-size: 14px;
     line-height: 1.14;
     padding: 18px 15px;
     text-align: left;
     box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.07);
 }
 .table-container table.dt-table tr th,
 .table-container table.dt-table tr td{
     margin: 4px 0;
     padding: 18px 10px;
 }
 .table-container table.dt-table tr th{
     color: #013243;
     font-weight: 500;
     text-transform: capitalize!important;
 }
 .table-container table.dt-table tr td{
   color: #6c7a89;
   padding: 15px 10px;
 }
 .table-container table.dt-table tr:hover{
     background: #f4f6f9;
 }
 td:nth-child(5){
   word-break: break-all;
 } */
 
 @media screen and (max-width: 1023px) {
 table {
 border: 0;
 }
 
 table caption {
 font-size: 1.3em;
 }
 
 table thead {
 border: none;
 clip: rect(0 0 0 0);
 height: 1px;
 margin: -1px;
 overflow: hidden;
 padding: 0;
 position: absolute;
 width: 1px;
 }
 
 table tr {
 border-bottom: 3px solid #ddd;
 display: block;
 margin-bottom: .625em;
 }
 
 table td {
 border-bottom: 1px solid #ddd;
 display: block;
 font-size: .8em;
 text-align: right;
 padding: 20px 0!important;
 }
 
 table td::before {
 /*
 * aria-label has no advantage, it won't be read inside a table
 content: attr(aria-label);
 */
 content: attr(data-label);
 float: left;
 font-weight: bold;
 text-transform: uppercase;
 }
 
 table td:last-child {
 border-bottom: 0;
 }
 }
 
 `;/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const q=i`

thead{
    height:70px !important;
    width:100%;
    border:2px solid rgba(183,181,181,.5) !important;
    background-color:var(--body-background-color) !important;
}

thead tr th{
    border-bottom:2px solid rgba(183,181,181,.5) !important;
}

.radio {
    position: relative;
    display: inline-block;
    padding-left:30px;
    cursor:pointer;
    border: 3px solid var(--grey-darker) !important;
}

.radio input[type="radio"] {
    display:none;

}

.radio span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid var(--grey-darker) !important;
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

table2-type-header .table-header-buttons{
    position:sticky; 
    top:0;
    z-index:2; 
    background-color:var(--card-background-color) !important;   
}
.dropdown-item{
    border:1px solid rgb(183,181,181) !important;
}
tbody{
    border-left:2px solid rgba(183,181,181,.5);
    overflow-x: hidden !important; 
}

tbody tr td{
    background-color:var(--card-background-color) !important;
    padding:1.5em;
    margin-top:.75em;
    margin-bottom:.75em;
    vertical-align:middle;    
}

tbody tr:not(:first-child) td:first-child { 
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}


tbody tr:not(:first-child) td:last-child { 
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

tbody tr:first-child td:first-child { 
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

tbody tr:first-child td:last-child { 
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.table-container table .dt-table tr td:first-child{
    border-radius:20px 20px 20px 20px !important;
}
.table-container{
    max-height: 70vh;
    overflow-y: auto;
    overflow-x: auto; 
    
}

.dt-table{ 
    border-collapse: separate;
    border-spacing: 9px 15px;
    border-left:2px solid rgba(183,181,181,.5);
    border-right:2px solid rgba(183,181,181,.5);
    /* overflow-x:auto !important; */
}

.table-container table.dt-table tr td{
    background-color:var(--input-background-color);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    outline: 5px solid var(--card-background-color);
    text-align:center;
}

table th{
    background-color:var(--input-background-color);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    vertical-align:middle;
    text-align:center;
    background-color:var(--body-background-color) !important;
    padding-left:1.5em;
    padding-right:1.5em;
}
paper-checkbox #checkbox{
    border-color:var(--input-border-color) !important;

}
paper-checkbox #checkbox.checked{
    background-color: var(--link) !important;
    border-color: var(--link) !important;
}
.image{
    height:80px;
    border-radius:10px 10px 10px 10px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width:768px){
    .dt-table{
        max-width: 100%;
        overflow-x: hidden;
        width:99.5%;
    }
    .table-container{
        /* width:70vw !important; */
    /* max-width: 95% !important; */
    /* overflow-y: auto; */
    margin-left:0 !important;
    /* margin-right:25px !important; */
    /* overflow-x: hidden; */
    }
    /* .table-header-buttons{
        position:sticky; 
        top:0;
        z-index:2; 
        background-color:var(--card-background-color) !important;
        flex-wrap:wrap;    
    } */

    paper-checkbox {
        transform: translateY(-3.2rem) translateX(-2.2rem) !important;
        margin-right: -1.2rem;
    }
    .table-container table.dt-table tr td{
        /* width:76vw; */
        border:none !important;
        outline:none;
        text-align:left;
    }
    .image{
        margin-left: 1.5em;
        
    }
    tbody tr:first-child td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    tbody tr:first-child td:first-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    tbody tr:not(:first-child) td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    tbody tr:not(:first-child) td:first-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
}
@media(min-width:768px) and (max-width:1024px){
   
    paper-checkbox{
        transform:translateY(-2.9rem) translateX(-1.9rem) !important;
        margin-right:-1.2rem;
    }
    
    .table-container .dt-table tbody tr td{
        border:none;
        outline:none !important;
        text-align:left;
    }
    .dt-table{
    width:99.6% !important;
    border-collapse: separate;
    border-spacing: 2px 15px;    
    }  
    .image{
        margin-left: 1.5em;
        
    }
    tbody tr:first-child td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    } 
    tbody tr:first-child td:first-child { 
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        
       
    }
    
    tbody tr:first-child td:last-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    tbody tr:not(:first-child) td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        
    }
    tbody tr:not(:first-child) td:first-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    
    }
}
@media(min-width:1024px){
  
    .table-container table tbody tr td{
        border:none;
        outline:5.5px solid var(--card-background-color) !important;
    }
    .dt-table{
        width:99.75%;
        
    }
}
@media screen and (max-width: 1023px){
table td::before {
  content: attr(data-label);
  float: left;
  font-weight: bold;
  text-transform: uppercase;
  margin-right:1.5em !important;
  margin-left:.5em !important;
}

}

@media (max-width:480px){
    
    .button{
        padding:0 !important;
    }
    .searchBtn{
        font-size:12px !important;
    }
    .table-header-buttons .columns{
        overflow-x:hidden !important;
     }
     .dt-table{
        width:99.2%;
     }
}

`;class _ extends g{static get styles(){return[u(y),I,q,i`
				:host {
					display: block;
				}
			`]}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},pl:Object,details:Object,columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String,searchText:String,selectType:{type:String},message:String,gateway:String,activeTab:Number}}_handleSort(t){console.log(t)}constructor(){super(),this.activeTab=0}_filter_date_range(t){const e=t.detail.start_date,o=t.detail.end_date,a=t.detail.column,d=t.detail.columnValue;this.dispatchEvent(new CustomEvent("filter-date-range",{detail:{column:a,start_date:e,end_date:o,columnValue:d}}))}getRadioChecked(t){t.target.getAttribute("rowData");const e=t.target.getAttribute("rowIndex");let a=t.target.getAttribute("rowValue");a===void 0?(a=e,this.selectedRadio=a,this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}}))):(this.selectedRadio=a,this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}})))}getCheckedRow(t){t.target.getAttribute("rowData");const e=t.target.getAttribute("rowIndex"),o=t.target.getAttribute("rowValue");this.selected==null&&(this.selected=[]),o===void 0?(o=e,this.selected.includes(e)?(this.selected=this.selected.filter(a=>a!=e),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))):(this.selected.push(o),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}})))):this.selected.includes(o)?(this.selected=this.selected.filter(a=>a!=o),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))):(this.selected.push(o),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}})))}_exportType(t){const e=t.detail.type;this.dispatchEvent(new CustomEvent("export",{detail:{type:e}}))}refresh(t){const e=t.detail.type;this.dispatchEvent(new CustomEvent("refresh",{detail:{type:e}}))}_handleInputChange(t){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:t.detail.column.propertyPath,value:t.detail.value}}))}searchFields(t){return t.filter(function(e){return e.filter})}_searchFieldsExist(t){return t.filter(function(e){return e.filter}).length>0}_action(t){const e=t.currentTarget.dataLink;this.pl._dialog(e.service,e.params)}_pageChanged(t){const e=t.detail.page,o=this.page;o!==void 0&&this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:o,page:e}})),this.page=e}_sizeChanged(t){const e=t.detail.size,o=this.size;o!==void 0&&this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:o,size:e}})),this.size=e}_selectChange(t){t.type&&t.type==="change"&&Polymer.dom(t).localTarget}_searchReset(t){this._clearSearch()}_search(t){const e=t.detail.value,o=t.detail.column,a=t.detail.searchFields;this.dispatchEvent(new CustomEvent("search",{detail:{column:o,searchFields:a,value:e}}))}_clearSearch(t){const e=t.detail.searchFields;this.dispatchEvent(new CustomEvent("clear-search",{detail:{searchFields:e}}))}renderColumn(t,e,o,a,d){if(console.log(this.activeTab),t.actions)return r`
				<datasource-table-actions
					.rowIndex=${d}
					.cols=${this.cols}
					.pl=${this.pl}
					.item=${a}>
				</datasource-table-actions>
			`;if(this.selectable&&o===0)return r`
				${this.selectType==="single"?r`
						<label class="radio">
							<input type="radio" name="${a}" value="${a}" @click="${this.getRadioChecked}" 
								rowData=${a} rowValue=${e} rowIndex=${d}>
							<span></span>
						</label>
						${e}
					`:r`
						<div style="display:flex;">
							<paper-checkbox
								@click="${this.getCheckedRow}"
								rowData=${a}
								rowIndex=${d}
								.rowData=${a}
								.rowIndex=${d}
								rowValue=${e}
							></paper-checkbox>
							<div>
								${e}
							</div>
						</div>
					`}
			`;try{const h=[];let l=e,c,v=0;if(typeof l=="object")c=l;else if(c=JSON.parse(l),typeof c!="object")throw"Not Object JSON";for(var s in c){let b=0;const x=p=>{const k="nested"+v+s+d;b=b+4,v=v+1;const S=(n,z)=>{const E=this.shadowRoot.querySelector(`#${n}`),m=z.target;E.classList.toggle("appear"),m.title=m.title==="Show More"?"Hide More":"Show More",m.classList.toggle("selected")};return r`
							<span>
								${typeof p=="object"?r` 
										<span title="Show More" class="show-more" @click=${n=>S(k,n)}>...</span>
										<div id=${k} class="column nested disappear" style="margin-top:0.1px; padding-left:${b}px;">
											${Object.keys(p).map(n=>r`
														<div style="margin-top:0.1px;">
															<strong>${n}: </strong>
															<span>${x(p[n])}</span>
														</div>
													`)}
										</div>
									`:p}
							</span>
						`};h.push(r`
						<div style="margin-top:0.1px;">
							<strong>${s}: </strong>
							<span>${x(c[s])}</span>
						</div>
					`)}return r`${h.map(b=>r` ${b}<br>`)}`}catch{switch(t.type){case"boolean":return r`
							${String(e).toLowerCase()=="false"?r`
									<iron-icon icon="icons:close"></iron-icon>
								`:r`
									<iron-icon icon="icons:check"></iron-icon>
								`}
						`;case"file":return r`
							
								<a download href="${e}">File</a>
							
							`;default:if(Object.keys(this.state).includes(t.property))if(Object.keys(this.state[t.property]).includes(e)){const l=this.state[t.property][e];return r`
										<span style="background-color:${l}; padding:10px; color:${this.isColorBright(l)?"var(--link--color-invert)":"var(--grey-darker)"}; border-radius:15px 15px 15px 15px;">
											${e}
										</span>
									`}else return e.toString().match(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/)?r`
								<img src="${e}" class="image"/> 
							`:r`${e}`;else return e.toString().match(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/)?r`
							<img src="${e}" class="image"/> 
						`:r`${e}`}}}static get is(){return"table2-type"}render(){return r`
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
							${this.columns.map(t=>r`
									<th scope="col">
										<datasource-table-head
											.column="${t}"
											sort-direction$="[[column.sortDirection]]"
											@input-change-th-content="${this._handleInputChange}"
											sorted$="[[column.sorted]]"
											sortable$="[[column.sortable]]"
											@filter-date-range = "${this._filter_date_range}"
											@sort-th-content="${this._handleSort}">
										</datasource-table-head>
									</th>
								`)}
						</tr>
					</thead>
					<tbody>
						
						${this.data.map((t,e)=>r`
								<tr>
								${this.columns.map((o,a)=>r`
											<td data-label= ${o}>${this.renderColumn(o,t[o.property],a,t,e)}</td>
										`)}
								</tr>
						`)}
								
					</tbody>
				</table>
			</div>
			${this.data.length==0?r`<empty-view message="${this.message}" gateway="${this.gateway}" ></empty-view>`:r`
					${this.paginate?r`
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
						`:""}
				`}
		`}}customElements.define(_.is,_);export{_ as Table2Type};
