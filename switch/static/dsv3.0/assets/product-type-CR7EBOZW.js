import{i,h as p,r as m,g as u,k as a}from"./index-C2PWchud.js";import{D as g}from"./datalist-element-wrapper-BtEsUu56.js";import"./paper-menu-button-C_oWXu8J.js";import"./iron-flex-layout-C17s8gyg.js";import"./paper-icon-button-B3AFeDyC.js";import"./paper-dropdown-menu-8R8AANSK.js";import"./iron-image-B9q0RFfs.js";import"./jspdf.min-D4P-jdMk.js";import"./iron-icon-Ci-yo7Ra.js";import"./fa-icon-COAiXmZs.js";import"./empty-view-B1-e8K41.js";import"./datasource-mixin-DMQBE4lo.js";import"./polymer-legacy-CVdXdTHq.js";import"./default-theme-ChQ485_s.js";import"./paper-ripple-behavior-Bi9iYOcF.js";import"./paper-ripple-CP-IWaVj.js";import"./mqtt-mixin-W6USKsd2.js";import"./paho-mqtt-CBfrIYbz.js";import"./utils-mixin-D5aAiqNi.js";import"./transform-C4D8YA0C.js";import"./toPropertyKey-DE8vi2zA.js";import"./DialogContent-DMuq1MYF.js";import"./shadow-R2NCNWlE.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./paper-material-styles-CABhO1-r.js";import"./lit-html-dRijB2IX.js";const y=i`
	.columns {
		flex-direction:column;
	}
	.active_item{
		background-color: var(--link);
	}
	.search_ul{
		border: 1px solid lightgrey;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.75) 9px 11px 49px -21px;
	}
	.buttons {
		height: fit-content;
		width: 100%;
	}
	.fas {
		cursor:pointer;
	}
	.button {
		padding: 7px 20px;
		margin-right:20px;
	}
	.block {
		flex-wrap:wrap;
	}
	#counter {
		cursor:default;
		background-color: var(--link);
		border-color: var(--input-border-color);
		padding: 7px 20px;
		color:var(--link--color-invert);
	}
	#search_area{
		align-items: center!important;
		width:60%;
	}
	.table-header-buttons .search_box{
		border: 1px solid rgb(183, 181, 181);
		background: var(--input-background-color);
		border-radius: 6px; 
		display: flex;
		flex:2;
		margin-right: 10px;
		/* width: 200px; */
		/* box-shadow: 0 8px 6px -10px #b3c6ff; */
	}
	.table-header-buttons .search_box .dropdown{
		flex:1;
		border-right: 2px solid var(--input-border-color);
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
		background-color:var(--input-background-color);
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
		border-radius:5px;
		color:var(--link--color-invert);
	}
	.search_field{
		display:flex;
		flex: 3;
		position: relative;
	}

	::placeholder{
		font-family:var(--family-sans-serif),sans-serif;
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

	#refresh-button{
		cursor:pointer;
		color: var(--link--color-invert) !important;
		background-color:var(--app-secondary-color) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#refresh-button fa-icon{
		margin-bottom: 15%;
		margin-left: 50%;
		justify-content:center;
	}
	.searchBtn{
		background-color:var(--link);
		color: var(--link--color-invert) !important;
		margin:5px;
		font-family:var(--family-sans-serif) !important;
    }
	.clearBtn{
		background-color:var(--app-secondary-color);
		margin:5px;
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#pdf-btn{
		background-color:var(--link);
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#csv-btn{
		background-color:var(--link);
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#delete-btn{
		background-color:var(--app-secondary-color);
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	
	@media screen and (max-width: 600px) {
		#pdf-btn{
			margin-right:0.5rem!important;
		}
		#search_area {
			flex-wrap: wrap;
			justify-content: center;
			min-width:100%;
			flex-wrap:wrap;
		}
		.search_box {
			min-width: 100%;
		}
		.searchBtn {
			margin-top:15px !important;
		}
		.clearBtn {
			margin-top:15px !important;
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
		.checkbox{
			margin-left:1.5%;
			margin-top:2.5%;
		}
	}

	@media(max-width:584px){
		#refresh-button{
			justify-content:center;
			display:flex;
		}
		#refresh-button fa-icon{
			margin-bottom:5%;   
			margin-left:45%;     	
			margin-right:auto;  
			justify-content:center;
		}
	}
`;class b extends p{static get styles(){return[m(u),g,y,i`
                :host {
                    display: block;
                }
            `]}static get properties(){return{title:String,columns:{type:Array},checkedRows:Array,selectedParam:String,alert:Boolean}}updated(t){t.has("actions")&&console.log("this.actions ",this.actions)}uncheckRows(){this.dispatchEvent(new Event("uncheck-rows"))}updateSearchItem(t){const e=t.target.innerText,r=this.shadowRoot.querySelector("#qIn");r.innerText=e,this.shadowRoot.querySelectorAll(".search_item").forEach(c=>{c.classList.remove("active_item")}),t.target.classList.add("active_item"),this.selectedParam=t.target.getAttribute("param")}generateCSV(){const t="csv";this.dispatchEvent(new CustomEvent("export-type",{detail:{type:t}}))}delete(){this.dispatchEvent(new CustomEvent("delete",{detail:{delete_ids:this.checkedRows}}))}onAlertChange(){this.alert=!this.alert,this.shadowRoot.querySelector("#alert").checked=this.alert,this.dispatchEvent(new CustomEvent("alert",{detail:{alert:this.alert}}))}generatePDF(){const t="pdf";console.log("pdf called"),this.dispatchEvent(new CustomEvent("export-type",{detail:{type:t}}))}dropdown(){const t=this.shadowRoot.querySelector("ul");t.classList.contains("is-block")?t.classList.remove("is-block"):t.classList.add("is-block")}closeDropdown(){const t=this.shadowRoot.querySelector("ul");t.classList.contains("is-block")&&t.classList.remove("is-block")}specificDropdown(t){const e=this.shadowRoot.querySelector("ul");e.classList.contains("is-block")?e.classList.remove("is-block"):e.classList.add("is-block")}refresh(){this.dispatchEvent(new CustomEvent("refresh",{detail:{type:!0}}))}searchFields(t){return t.filter(function(e){return e.filter})}_searchReset(t){const e=this;this.dispatchEvent(new CustomEvent("_clearSearch",{detail:{searchFields:e.searchFields(e.columns).map(function(r){return r.propertyPath})}}))}_searchFieldsExist(t){return t.filter(function(e){return e.filter}).length>0}_search(t){const e=this,r=e.shadowRoot.querySelector("#q").value;this.searchText=r,(this.selectedParam==null||this.selectedParam==null)&&(this.selectedParam="q"),r&&this.dispatchEvent(new CustomEvent("_search",{detail:{column:this.selectedParam,searchFields:e.searchFields(e.columns).map(function(o){return o.propertyPath}),value:r}}))}firstUpdated(t){super.firstUpdated(t);const e=this;this.shadowRoot.querySelector("#alert").checked=this.alert,e._searchFieldsExist(e.columns)&&document.addEventListener("click",function(r){r.path[0].className=="dropdown"||(r.path[0].id=="qIn"?e.dropdown():e.closeDropdown())})}static get is(){return"product-type-header"}render(){return a`
            <div class="table-header-buttons" style="margin-bottom: 15px;">
                <div class="columns">
                    <div class="column is-flex-direction-column">
                        <div class="heading">
                            <h1 class="title is-size-6">${this.title}</h1>
                        </div>
                        <div class="block is-flex" style="justify-content:space-between;">
                            <div id="search_area" class="is-flex">
                                <div class="search_box is-flex">
                                    <div class="dropdown" @click=${this.dropdown}>
                                        <div id="qIn" @click="${this.specificDropdown}" class="default_option">All</div>
                                        <ul class="search_ul">
                                            <li class="search_item" @click="${this.updateSearchItem}">All</li>
                                            ${this.columns.map(t=>a`<li class="search_item" @click="${this.updateSearchItem}" param="${t.propertyPath}">${t.header}</li>`)}
                                        </ul>
                                    </div>
                                    <div class="search_field">
                                        <input id="q" type="text" name="search" title="Input" class="input" placeholder="Search..." value="${this.searchText}"/>
                                    </div>
                                </div>
                                <button class="button is-size-7 dl-buttons searchBtn" title="Search" type="submit" @click="${this._search}">Search</button>
                                <button class="button is-size-7 dl-buttons clearBtn" title="Clear" type="button" @click="${this._searchReset}">Clear</button>
                            </div> 
                            <label class="checkbox">
                                <input type="checkbox" title="Alert" ?checked=${this.alert} id="alert" @click=${this.onAlertChange}>
                                Alert on Low Stock
                            </label> 
                        </div>   
                    </div>  
                    <div class="column is-flex">
                        <div class="buttons" style="margin:0px;">
                            <span id="counter" title="Counter" class="button is-size-7">
                                <fa-icon class="fas fa-minus-square" title="Undo Checked" size="1.1em" @click=${this.uncheckRows}></fa-icon>
                                &emsp;${this.checkedRows.length} Product Selected
                            </span>
                            <span id="refresh-button" title="Refresh" class="button is-size-7" @click="${this.refresh}">
                                <fa-icon class="fas fa-redo" size="1.4em"></fa-icon>
                            </span>
                            <button title="Export PDF" id="pdf-btn"  @click="${this.generatePDF}" class="button is-size-7">Export PDF</button>
                            <button title="Export CSV" id="csv-btn" @click="${this.generateCSV}" class="button is-size-7">Export CSV</button>
                            <button title="Delete" id="delete-btn" @click=${this.delete}  class="button is-size-7">Delete</button>
                        </div>
                    </div>          
                </div>
            </div>
        `}}customElements.define(b.is,b);const x=i`
    .image {
        width: 180px;
        height: 150px;
        object-fit: contain;
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
    tbody tr{
    background-color:var(--input-background-color) !important;
 
}
.table-container{
    max-height: 80vh;
     overflow-y: auto;
}

.table-container table.dt-table tr td{
    background-color:var(--input-background-color);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    border-bottom:1px solid var(--input-border-color) !important;
}

tr td::before{
    margin-right:5px;
}

th{
    background-color:var(--input-background-color);
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
@media(max-width:1024px){
    paper-checkbox{
        transform:translateY(-1.7rem) translateX(-2.1rem) !important;
        margin-right:-1.2rem;
    }
}
.table-header-buttons .search_box .dropdown{
		flex:1;
		color: var(--grey-darker);
		position: relative;
		cursor: pointer;
		border-radius:0px;
		border-top-right-radius:0px;
		border-bottom-right-radius:0px;
		background-color:var(--input-background-color);
		font-family:var(--family-sans-serif),sans-serif !important;
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
		background-color:var(--app-secondary-color);	
		color:var(--link--color-invert)
		
	}
	.actionCol{
		justify-content: flex-end;
		padding-left:0.45rem;
		padding-right:0.95rem;
	}
	.clearBtn{
		background-color:var(--app-secondary-color);
		color:var(--link--color-invert) !important;
	}
	.submitBtn{
		background-color:var(--link);
		color:var(--link--color-invert);
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
   
`;/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */const k=i`

     
/* -- Material Design Table style -------------- */
.table {
    background-color: #fff;
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
    background-color: #fff;
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

.table-responsive-vertical {
    padding: 0;
 /*   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);*/
    overflow: auto;
}

@media screen and (max-width: 768px) {
    .table-responsive-vertical {
        margin: 16px;
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
    }

    .table-responsive-vertical > .table > tbody > tr {
        display: block;
        border: 1px solid #e0e0e0;
        border-radius: 2px;
        margin-bottom: 1.6rem;
    }

    .table-responsive-vertical > .table > tbody > tr > td {
        background-color: #fff;
        display: block;
        vertical-align: middle;
        text-align: right;
    }

    .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: inherit;
        font-weight: 400;
        color: #757575;
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
        background-color: #fff;
    }

    .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {
        background-color: #f5f5f5;
    }

    .table-responsive-vertical > .table-hover > tbody > tr:hover > td,
    .table-responsive-vertical > .table-hover > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical > .table-hover > tbody > tr > td:hover {
        background-color: rgba(0, 0, 0, 0.12);
    }
}

.table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {
    background-color: #fde0dc;
}

.table-hover.table-mc-red > tbody > tr:hover > td,
.table-hover.table-mc-red > tbody > tr:hover > th {
    background-color: #f9bdbb;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {
        background-color: #fde0dc;
    }

    .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {
        background-color: #fff;
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
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {
        background-color: #fce4ec;
    }

    .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {
        background-color: #fff;
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

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {
        background-color: #f3e5f5;
    }

    .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {
        background-color: #fff;
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

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {
        background-color: #ede7f6;
    }

    .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {
        background-color: #fff;
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
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {
        background-color: #e8eaf6;
    }

    .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {
        background-color: #fff;
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
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {
        background-color: #e7e9fd;
    }

    .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {
        background-color: #fff;
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
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {
        background-color: #e1f5fe;
    }

    .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {
        background-color: #fff;
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
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {
        background-color: #e0f7fa;
    }

    .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {
        background-color: #fff;
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
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {
        background-color: #e0f2f1;
    }

    .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {
        background-color: #fff;
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
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {
        background-color: #d0f8ce;
    }

    .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {
        background-color: #fff;
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
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {
        background-color: #f1f8e9;
    }

    .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {
        background-color: #fff;
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
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {
        background-color: #f9fbe7;
    }

    .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {
        background-color: #f0f4c3;
    }
}

.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {
    background-color: #fffde7;
}

.table-hover.table-mc-yellow > tbody > tr:hover > td,
.table-hover.table-mc-yellow > tbody > tr:hover > th {
    background-color: #fff9c4;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {
        background-color: #fffde7;
    }

    .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {
        background-color: #fff9c4;
    }
}

.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {
    background-color: #fff8e1;
}

.table-hover.table-mc-amber > tbody > tr:hover > td,
.table-hover.table-mc-amber > tbody > tr:hover > th {
    background-color: #ffecb3;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {
        background-color: #fff8e1;
    }

    .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {
        background-color: #ffecb3;
    }
}

.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {
    background-color: #fff3e0;
}

.table-hover.table-mc-orange > tbody > tr:hover > td,
.table-hover.table-mc-orange > tbody > tr:hover > th {
    background-color: #ffe0b2;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {
        background-color: #fff3e0;
    }

    .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {
        background-color: #fff;
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
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {
        background-color: #fbe9e7;
    }

    .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {
        background-color: #ffccbc;
    }
}

.topnav {
    overflow: hidden;
    /*background-color: #ffffff;*/
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
    color: #FFFFFF;
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
        background-color: #ffffff;
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
}
.table-container{
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
    background: #fff;
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
}

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
border-bottom: 5px solid #ddd;
display: block;
margin-bottom: .625em;
}

table td {
border-bottom: .3px solid #ddd;
display: block;
font-size: .7em;
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

`;class h extends p{static get styles(){return[k,x,i`
				:host {
					display: block;
				}
			`]}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},pl:Object,details:Object,columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String,searchText:String,selectType:{type:String},message:String,gateway:String,checkedRows:Array,alert:Boolean}}constructor(){super(),this.columns=[],this.cols=[],this.data=[],this.selected=[],this.selectedRadio="",this.availableSize=[10,50,100,500],this.checkedRows=[]}updated(t){t.has("size")}_handleSort(t){console.log(t)}_handleSort(t){console.log(t)}_filter_date_range(t){const e=t.detail.start_date,r=t.detail.end_date,o=t.detail.column;this.dispatchEvent(new CustomEvent("filter-date-range",{detail:{column:o,start_date:e,end_date:r}}))}getRadioChecked(t){t.target.getAttribute("rowData");const e=t.target.getAttribute("rowIndex");let o=t.target.getAttribute("rowValue");o===void 0?(o=e,this.selectedRadio=o,this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}}))):(this.selectedRadio=o,this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}})))}getCheckedRow(t){const e=t.target.getAttribute("rowData"),r=t.target.getAttribute("rowIndex"),o=t.target.getAttribute("rowValue");e.id,this.selected==null&&(this.selected=[]),o===void 0?(o=r,this.selected.includes(r)?(this.selected=this.selected.filter(l=>l!=r),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))):(this.selected.push(o),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}})))):this.selected.includes(o)?(this.selected=this.selected.filter(l=>l!=o),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))):(this.selected.push(o),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))),this.checkedRows=[...this.selected]}_uncheckRows(){this.shadowRoot.querySelectorAll("paper-checkbox").forEach(t=>{t.checked&&(t.checked=!1)}),this.checkedRows=[],this.selected=[]}_alert(t){this.dispatchEvent(new CustomEvent("alert",{detail:{alert:t.detail.alert}}))}_exportType(t){const e=t.detail.type;this.dispatchEvent(new CustomEvent("export",{detail:{type:e}}))}refresh(t){const e=t.detail.type;this.dispatchEvent(new CustomEvent("refresh",{detail:{type:e}}))}_delete(t){this.dispatchEvent(new CustomEvent("delete",{detail:{delete_ids:t.detail.delete_ids}}))}_handleInputChange(t){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:t.detail.column.propertyPath,value:t.detail.value}}))}searchFields(t){return t.filter(function(e){return e.filter})}_searchFieldsExist(t){return t.filter(function(e){return e.filter}).length>0}_action(t){const e=t.currentTarget.dataLink;this.pl._dialog(e.service,e.params)}_pageChanged(t){const e=t.detail.page,r=this.page;r!==void 0&&this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:r,page:e}})),this.page=e}_sizeChanged(t){const e=t.detail.size,r=this.size;r!==void 0&&this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:r,size:e}})),this.size=e}_selectChange(t){t.type&&t.type==="change"&&Polymer.dom(t).localTarget}_searchReset(t){this._clearSearch()}_search(t){const e=t.detail.value,r=t.detail.column,o=t.detail.searchFields;this.dispatchEvent(new CustomEvent("search",{detail:{column:r,searchFields:o,value:e}}))}_clearSearch(t){const e=t.detail.searchFields;this.dispatchEvent(new CustomEvent("clear-search",{detail:{searchFields:e}}))}renderColumn(t,e,r,o,l){if(t.actions)return a`
				<datasource-table-actions
					.cols=${this.cols}
					.pl=${this.pl}
					.item=${o}>
				</datasource-table-actions>
			`;if(this.selectable&&r===0)return a`
				${this.selectType==="single"?a`
						<label class="radio">
							<input type="radio" name="${o}" value="${o}" @click="${this.getRadioChecked}"
								rowData=${o} rowValue=${e} rowIndex=${l}>
							<span></span>
						</label>
						${e}
					`:a`
						<div style="display:flex; padding-left:15px;">
							<paper-checkbox @click="${this.getCheckedRow}" rowData=${o}
								rowIndex=${l} .rowData=${o} .rowIndex=${l} rowValue=${e}>
							</paper-checkbox>
						</div>
					`}
				`;try{let n=e,d;if(typeof n=="object")d=n;else if(d=JSON.parse(n),typeof d!="object")throw"Not Object JSON";const s=[];for(var c in d)s.push(a`<div style="margin-top:0.1px;"><strong>${c}: </strong><span>${d[c]}</span></div>`);return a`
					${s.map(f=>a` ${f}<br>`)}
				`}catch{switch(t.type){case"boolean":return a`
							${String(e).toLowerCase()=="false"?a`
								<iron-icon icon="icons:close"></iron-icon>
							`:a`
								<iron-icon icon="icons:check"></iron-icon>
							`}
						`;default:return e.toString().match(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/)?a`
							<img src="${e}" class="image"/> 
						`:a`${e}`}}}static get is(){return"product-type"}render(){return a`
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
							${this.columns.map(t=>a`
									<th scope="col">
										<datasource-table-head
											.column="${t}"
											sort-direction$="[[column.sortDirection]]"
											@input-change-th-content="${this._handleInputChange}"
											sorted$="[[column.sorted]]"
											sortable$="[[column.sortable]]"
											@filter-date-range = "${this._filter_date_range}"
											@sort-th-content="${this._handleSort}"
										>
										</datasource-table-head>
									</th>
								`)}
						</tr>
					</thead>
					<tbody>
						${this.data.map((t,e)=>a`
								<tr>
									${this.columns.map((r,o)=>a`
											<td data-label= ${r}>${this.renderColumn(r,t[r.property],o,t,e)}</td>
										`)}
								</tr>
							`)}
					</tbody>
				</table>
			</div>
			${this.data.length==0?a`
					<empty-view message="${this.message}"gateway="${this.gateway}"></empty-view>
				`:a`
					${this.paginate?a`
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
					`:a``}
				`}
		`}}customElements.define(h.is,h);
