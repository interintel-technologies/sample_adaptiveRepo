import{i as l,h as n,r as d,g as p,k as i}from"./index-C2PWchud.js";import"./fa-icon-COAiXmZs.js";import"./paper-menu-button-C_oWXu8J.js";import"./iron-flex-layout-C17s8gyg.js";import"./paper-icon-button-B3AFeDyC.js";import"./paper-dropdown-menu-8R8AANSK.js";import{a as v,D as f}from"./datalist-element-wrapper-BtEsUu56.js";import"./jspdf.min-D4P-jdMk.js";import"./iron-icon-Ci-yo7Ra.js";import"./lit-html-dRijB2IX.js";import"./polymer-legacy-CVdXdTHq.js";import"./default-theme-ChQ485_s.js";import"./paper-ripple-CP-IWaVj.js";import"./shadow-R2NCNWlE.js";import"./paper-ripple-behavior-Bi9iYOcF.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./datasource-mixin-DMQBE4lo.js";import"./iron-image-B9q0RFfs.js";import"./mqtt-mixin-W6USKsd2.js";import"./paho-mqtt-CBfrIYbz.js";import"./utils-mixin-D5aAiqNi.js";import"./transform-C4D8YA0C.js";import"./toPropertyKey-DE8vi2zA.js";import"./DialogContent-DMuq1MYF.js";import"./paper-material-styles-CABhO1-r.js";const u=l`

`;class g extends n{static get styles(){return[d(p),v,u,l`
				:host {
					display: block;
				}
			`]}constructor(){super(),this.availableSize=[],this.size=50}_dropdownReveal(){const e=this.shadowRoot.querySelector(".p-dropdown");switch(e.style.display){case"block":e.style.display="none";break;default:e.style.display="block";break}}_computeCurrentSize(e,t){return(e-1)*t+1}_computeCurrentMaxSize(e,t,s){const o=t*e;return o>s?s:o}_nextPage(){this.page<this.totalPages&&(this.page=this.page+1),this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){this.page-1>0&&(this.page=this.page-1),this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(e,t){return e<t}_prevButtonEnabled(e){return e>1}_newSizeIsSelected(){const e=this.shadowRoot.querySelector("paper-listbox").selected;e&&(this.oldPage!==null&&this.oldPage!==void 0&&(this.page=1),this.size=e,this.dispatchEvent(new CustomEvent("size-change",{detail:{size:e}})))}_computePosition(e){return e==="right"?"end-justified":""}static get is(){return"inbox-type-footer"}render(){return i`
			<div class="wrapper is-flex" style="margin-top: 20px;">
				<div class="size">
					<div class="perpage-dropdown">
						<div class="p-display" >
							${this.availableSize.length?i`
									<p class="per is-capitalized is-size-7" @click=${this._dropdownReveal}>Per Page ${this.size}</p>
									<div class="p-dropdown">
										<ul>
											${this.availableSize.map(e=>i`
													<li class="${e==this.size?"active-list":""}">
														<a href="$1" class="is-size-7" data-name="${e}" @click="${this._newSizeIsSelected}">${e}</a>
													</li>
												`)}
										</ul>
									</div>
								`:i`<p class="is-capitalized is-size-7">Per Page ${this.size}</p>`}
						</div>
					</div>
				</div>
				<div class="range">
					<div class="is-flex">
						<div class="pagination-range">
							<p class="is-size-7">${this._computeCurrentSize(this.page,this.size)} - ${this._computeCurrentMaxSize(this.page,this.size,this.totalElements)} of ${this.totalElements}</p>
						</div>
						<div class="is-flex pagination-buttons">
						${this._prevButtonEnabled(this.page)?i`
								<div class="left-btn btn" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}"></div>
							`:i`<div></div>`}
						${this._nextButtonEnabled(this.page,this.totalPages)?i`
								<div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}"></div>
							`:i`<div></div>`} 
						</div>
					</div>
				</div>
			</div>
		`}}customElements.define(g.is,g);const m=l`

`;class y extends n{static get styles(){return[d(p),f,m,l`
				:host {
					display: block;
				}
			`]}static get properties(){return{title:String}}static get is(){return"inbox-type-header"}render(){return i`
			<div class="table-header-buttons" style="margin-bottom: 15px;">
				<div class="heading">
					<h1 class="title is-size-6">${this.title}</h1>
				</div>
				<button @tap="${this.generatePDF}" class="button is-primary is-size-7 is-rounded">Export PDF</button>
				<button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
			</div>
		`}}customElements.define(y.is,y);const x=l`
	td {
		font-family: Raleway;
		font-size: 12px;
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: 0.86px;
		color: #6c4c9b;
	}
	#icon-delete {
		margin-left: -90px;
		margin-top: -10px;
	}
	#icon-message {
		margin-left: -120px;
	}
	#first-row {
		background-color: #fff;
	}
	.active-row {
		box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
		background-color: #fff; 
		border-left: 5px solid #419588;  
	}
	.active-color {
		color: #419588;
	}
	.normal-tr{
		box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
	}
	.default-start{
		fill: #6e6e36;
		height: 17px;
		width: 19px;
	}
	.hidden{
		display: none;
		visibility: hidden;
	}
	.visible {
		display: block;
		visibility: visible;
	}
	.overlay {
		background-color: rgba(170,170,170,0.6);
	}
	.pointer{
		cursor:pointer;
	}
	.hide-action{
		visibility: hidden;
	}
	.unhide-action{
		visibility: visible;
	}
`;class b extends n{static get styles(){return[d(p),x,l`
				:host {
					display: block;
				}
			`]}static get properties(){return{data:{type:Array,notify:!0},columns:{},details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String}}firstUpdated(e){super.firstUpdated(e);const t=this.details.selectable,s=this.shadowRoot.querySelectorAll("input[type=checkbox]"),o=this.shadowRoot.querySelectorAll(".icon.has-text-grey.pointer.visible");typeof this.columns!=="Boolean"?o.forEach(a=>{a.classList.replace("visible","hidden")}):o.forEach(a=>{}),t===void 0?s.forEach(a=>{a.style.display="none"}):t!==!0?s.forEach(a=>{a.style.display="none"}):s.forEach(a=>{a.style.display="block"})}checkRow(e){const t=this.shadowRoot.querySelector("#tr-"+e),s=this.shadowRoot.querySelector("#checkbox-"+e),o=this.shadowRoot.querySelector("#deleteAchieveSec"),c=this.shadowRoot.querySelector("#hideUnhideSec"),a=t.querySelectorAll(".normal-td");this.shadowRoot.querySelectorAll("input:checked").length===0?(o.className="hide-action",c.className="hide-action"):(o.className="unhide-action",c.className="unhide-action"),s.checked==!0?(t.classList.add("active-row"),a.forEach(r=>{r.classList.add("active-color")})):(t.classList.remove("active-row"),a.forEach(r=>{r.classList.remove("active-color")}))}favorite(e){const t=this.shadowRoot.querySelector("#span-icon1-"+e),s=this.shadowRoot.querySelector("#span-icon2-"+e);t.classList.contains("visible")?(t.classList.replace("visible","hidden"),s.classList.replace("hidden","visible")):(t.classList.replace("hidden","visible"),s.classList.replace("visible","hidden"))}deleteMessages(){this.shadowRoot.querySelectorAll('tr[class~="active-row"]').forEach(t=>{t.classList.add("hidden")})}archiveMessages(){this.shadowRoot.querySelectorAll('tr[class~="active-row"]').forEach(t=>{t.classList.add("hidden")})}overlayMessages(){this.shadowRoot.querySelectorAll('tr[class~="active-row"]').forEach(t=>{t.classList.add("overlay")})}removeOverlayMessages(){this.shadowRoot.querySelectorAll('tr[class~="overlay"]').forEach(t=>{t.classList.remove("overlay")})}_pageChanged(e){const t=e.detail.page,s=this.page;s!==void 0&&this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:s,page:t}})),this.page=t}_sizeChanged(e){const t=e.detail.size,s=this.size;s!==void 0&&this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:s,size:t}})),this.size=t}static get is(){return"inbox-type"}render(){return i`
			<section class="section">
				<inbox-type-header .title="${this.title}"></inbox-type-header>
				<table class="table is-fullwidth is-hoverable"  style="background-color: #f7f6f6;">
					<thead>
						<tr >
							<th style="padding-top: 10px; padding-bottom: 10px;">
								<input  type="checkbox" name="" id=""> 
							</th>
							<th id="hideUnhideSec" class="hide-action" style="padding-top: 10px; padding-bottom: 10px; ">
								<div id="eye-icon" @click="${this.removeOverlayMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px;" class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-eye" color="#000000"></fa-icon>
								</div>
								<div id="eye-slash-icon" @click="${this.overlayMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px;" class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-eye-slash" ></fa-icon>
								</div>
							</th>
							<th id="deleteAchieveSec" class="hide-action" style="padding-top: 10px; padding-bottom: 10px;">
								<span id="icon-delete" @click="${this.deleteMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px; " class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-trash-alt" ></fa-icon>
								</span>
								<span id="icon-archive" @click="${this.archiveMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px; margin-left: -5px; " class="icon pointer" style="color: #000000;">
									<fa-icon class="fas fa-archive"></fa-icon>
								</span>
							</th>
							<th></th>
							<th style="padding-top: 10px; padding-bottom: 10px;">
								<p id="icon-message" style="font-weight: bold; font-size: 16px; font-family: Montserrat; color: #2f75ec;">
									<span class="icon is-pulled-left" style="color: #000000; margin-right: 7px; margin-top: 4px;">
										<fa-icon class="fas fa-envelope" color= "#2f75ec" ></fa-icon>
									</span>
									Text Message
								</p>
							</th>
						</tr>
					</thead>
					<tbody>
						${this.data.map((e,t)=>i`
								<tr id="tr-${t}" class="normal-tr">
									<th style="padding-top: 20px; padding-bottom: 20px;">
										<label class="checkbox">
											<input id="checkbox-${t}" class="inboxCheckBox" @click="${()=>this.checkRow(t)}" type="checkbox">
										</label>
									</th>
									<td style="padding-top: 20px; padding-bottom: 20px;">
										<span id="span-icon1-${t}" class="icon has-text-grey pointer visible" @click="${()=>this.favorite(t)}">
											<fa-icon id="fa-${t}"  class="far fa-star" style="fill: #d4d4d4;height: 17px;width: 19px;" ></fa-icon>
										</span>
										<span id="span-icon2-${t}" class="icon has-text-grey pointer hidden " @click="${()=>this.favorite(t)}">
											<fa-icon id="fa-${t}"  class="fas fa-star" style="fill: #ff8000;height: 17px;width: 19px;" ></fa-icon>
										</span>
									</td>
									<td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${e.name}</td>
									<td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${e.description}</td>
									<td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${e.id}</td>
								</tr>
							`)}
					</tbody>
				</table>
				${this.paginate?i`
						<inbox-type-footer resources="${this.resources}"
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
						</inbox-type-footer>
					`:""}
			</section>
		`}}customElements.define(b.is,b);export{b as InboxType};
