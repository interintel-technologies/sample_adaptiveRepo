import{i as a,h as r,r as d,g as p,k as e}from"./index-C2PWchud.js";import"./fa-icon-COAiXmZs.js";import"./paper-menu-button-C_oWXu8J.js";import"./iron-flex-layout-C17s8gyg.js";import"./paper-icon-button-B3AFeDyC.js";import"./paper-dropdown-menu-8R8AANSK.js";import{a as u,D as g}from"./datalist-element-wrapper-BtEsUu56.js";import"./jspdf.min-D4P-jdMk.js";import"./iron-icon-Ci-yo7Ra.js";import"./lit-html-dRijB2IX.js";import"./polymer-legacy-CVdXdTHq.js";import"./default-theme-ChQ485_s.js";import"./paper-ripple-CP-IWaVj.js";import"./shadow-R2NCNWlE.js";import"./paper-ripple-behavior-Bi9iYOcF.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./datasource-mixin-DMQBE4lo.js";import"./iron-image-B9q0RFfs.js";import"./mqtt-mixin-W6USKsd2.js";import"./paho-mqtt-CBfrIYbz.js";import"./utils-mixin-D5aAiqNi.js";import"./transform-C4D8YA0C.js";import"./toPropertyKey-DE8vi2zA.js";import"./DialogContent-DMuq1MYF.js";import"./paper-material-styles-CABhO1-r.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const m=a`

`;class c extends r{static get styles(){return[d(p),u,m,a`
				:host {
				display: block;
				}
			`]}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}constructor(){super(),this.availableSize=[],this.size=50}_dropdownReveal(){const t=this.shadowRoot.querySelector(".p-dropdown");switch(t.style.display){case"block":t.style.display="none";break;default:t.style.display="block";break}}_computeCurrentSize(t,s){return(t-1)*s+1}_computeCurrentMaxSize(t,s,o){const l=s*t;return l>o?o:l}_nextPage(){this.page<this.totalPages&&(this.page=this.page+1),this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){this.page-1>0&&(this.page=this.page-1),this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(t,s){return t<s}_prevButtonEnabled(t){return t>1}_newSizeIsSelected(){const t=this.shadowRoot.querySelector("paper-listbox").selected;t&&(this.oldPage!==null&&this.oldPage!==void 0&&(this.page=1),this.size=t,this.dispatchEvent(new CustomEvent("size-change",{detail:{size:t}})))}_computePosition(t){return t==="right"?"end-justified":""}static get is(){return"staffprofile-type-footer"}render(){return e`
			<div class="wrapper is-flex" style="margin-top: 20px;">
				<div class="size">
					<div class="perpage-dropdown">
						<div class="p-display">
							${this.availableSize.length?e`
									<p class="per is-capitalized is-size-7" @click=${this._dropdownReveal}>Per Page ${this.size}</p>
									<div class="p-dropdown">
										<ul>
											${this.availableSize.map(t=>e`
													<li class="${t==this.size?"active-list":""}">
														<a href="$1" class="is-size-7" data-name="${t}" @click="${this._newSizeIsSelected}">${t}</a>
													</li>
												`)}
										</ul>
									</div>
								`:e`<p class="is-capitalized is-size-7">Per Page ${this.size}</p>`}
						</div>
					</div>
				</div>
				<div class="range">
					<div class="is-flex">
						<div class="pagination-range">
							<p class="is-size-7">${this._computeCurrentSize(this.page,this.size)} - ${this._computeCurrentMaxSize(this.page,this.size,this.totalElements)} of ${this.totalElements}</p>
						</div>
						<div class="is-flex pagination-buttons">
							${this._prevButtonEnabled(this.page)?e`
									<div class="left-btn btn" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}"></div>
								`:e`<div></div>`}
							<div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}"></div>
						</div>
					</div>
				</div>
			</div>
		`}}customElements.define(c.is,c);const b=a`

`;class h extends r{static get styles(){return[d(p),b,g,a`
				:host {
					display: block;
				}
			`]}static get properties(){return{title:String}}static get is(){return"staffprofile-type-header"}render(){return e`
			<div class="table-header-buttons" style="margin-bottom: 15px;">
				<div class="heading">
					<h1 class="title is-size-6">${this.title}</h1>
				</div>
				<button @tap="${this.generatePDF}" class="button is-primary is-size-7 is-rounded">Export PDF</button>
				<button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
			</div>
		`}}customElements.define(h.is,h);/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const v=a`

.table td, .table th{
    padding: 15px 0;
  }
  .staff-profile{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    margin-bottom: 10px;
  } 
  .staffTitle h3, .staffTitle p{
    font-size: 20px;
  }
  .staffTitle p{
    cursor: pointer;
    color: var(--app-primary-color);
  }

  .staff-header{
    padding: 5px 30px;
    border-bottom: 1px solid #e5e5e5;
  }
  .staff-table{
    padding: 5px 30px;
  }

  .table thead td, .table thead th{
    border-bottom: 0 solid transparent;
    border: 0;
    border-width: 0 0 0!important;
  }

`;class f extends r{static get styles(){return[d(p),v,a`
				:host {
				display: block;
				}
			`]}static get is(){return"staffprofile-type"}static get properties(){return{data:{type:Array,notify:!0},details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String}}firstUpdated(t){super.firstUpdated(t);const s=this.shadowRoot.querySelectorAll(".side-action"),o=this.shadowRoot.querySelectorAll(".arrow-down"),l=this.shadowRoot.querySelectorAll('a[class~="button"]');s.forEach(i=>{i.classList.add("hidden")}),o.forEach(i=>{i.classList.add("hidden")}),l.forEach(i=>{i.innerHTML!=="Active"||i.classList.replace("active","suspended")})}doService(t){this.details.service&&this.dispatchEvent(new CustomEvent("do-service",{detail:{service:this.details.service}}))}checkRow(t){const s=this.shadowRoot.querySelector("#tr-"+t);this.shadowRoot.querySelector("#checkbox-"+t).checked==!0?s.classList.add("active-row"):s.classList.remove("active-row")}render(){return e`
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
			<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
			<section class="section">
				<staffprofile-type-header ></staffprofile-type-header>
				<div class="staff-profile">
					<div class="columns staff-header">
						<div class="column">
							<div class="staffTitle">
								<h3 class="has-text-weight-bold">${this.title}</h3>
							</div>
						</div>
						${this.details.addType?e`
								<div class="column">
									<div class="staffTitle is-pulled-right">
										<p @click="${this.doService}" class="has-text-weight-bold" color="var(--app-primary-color)">
											<span class="icon" style="color: #000;">
												<fa-icon class="fas fa-user-plus fa-flip-horizontal" color="var(--app-primary-color)"></fa-icon>
											</span>
											Add ${this.details.addType}
										</p>
									</div>
								</div>
							`:""}
					</div>
					<div class="staff-table">
						<table class="table is-fullwidth is-hoverable">
							<thead>
								<tr>
									${this.columns.map(t=>e`
											<th>
												<p class="has-text-weight-bold is-capitalized">
													<datasource-staffprofile-head
														.column="${t}"
														sort-direction$="[[column.sortDirection]]"
														@input-change-th-content="${this._handleInputChange}"
														sorted$="[[column.sorted]]"
														sortable$="[[column.sortable]]"
														@sort-th-content="${this._handleSort}">
													</datasource-staffprofile-head>
												</p>
											</th>
										`)}
									<th></th>
								</tr>
							</thead>
							<tbody>
								${this.data.map((t,s)=>e`
										<tr>
											${this.details.selectable!==!0?e`
													<td>
														<span class="normal-td" style="font-weight: normal;">${t.index}</span>
													</td>
												`:e`
													<td>
														<label class="checkbox">
														<input id="checkbox-${s}" @click="${()=>this.checkRow(s)}" type="checkbox">
														</label>
													</td>
												`}
											<td>
												<span class= "normal-td" >${t.name}</span>
											</td>
											<td> 
												<a id="status-${s}"  class="button is-small  is-rounded active">${t.description}</a>
											</td>
											<td>
												<span class= "normal-td">${t["Contact Count"]}</span>
											</td>
											${this.details.selectable!==!0?"":e`
													<td class="side-action">  
														<span class="icon is-pulled-right pointer">
														<fa-icon class="fas fa-ellipsis-v" color="#6c7a89"></fa-icon>
														</span>
													</td>
												`}
										</tr>
									`)}
							</tbody>
						</table>
					</div>
				</div>
				${this.paginate?e`
						<staffprofile-type-footer 
							resources="${this.resources}"
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
						</staffprofile-type-footer>
					`:""}
			</section>
		`}}customElements.define(f.is,f);export{f as StaffProfileType};
