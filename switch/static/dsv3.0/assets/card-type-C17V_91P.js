import{i as a,h as o,r as n,g as l,k as i}from"./index-C2PWchud.js";import"./iron-image-B9q0RFfs.js";import"./jspdf.min-D4P-jdMk.js";import"./iron-icon-Ci-yo7Ra.js";import{D as g,a as u}from"./datalist-element-wrapper-BtEsUu56.js";import"./paper-menu-button-C_oWXu8J.js";import"./iron-flex-layout-C17s8gyg.js";import"./paper-icon-button-B3AFeDyC.js";import"./paper-dropdown-menu-8R8AANSK.js";import"./empty-view-B1-e8K41.js";import"./polymer-legacy-CVdXdTHq.js";import"./paper-material-styles-CABhO1-r.js";import"./shadow-R2NCNWlE.js";import"./paper-ripple-CP-IWaVj.js";import"./paper-ripple-behavior-Bi9iYOcF.js";import"./datasource-mixin-DMQBE4lo.js";import"./default-theme-ChQ485_s.js";import"./mqtt-mixin-W6USKsd2.js";import"./paho-mqtt-CBfrIYbz.js";import"./utils-mixin-D5aAiqNi.js";import"./transform-C4D8YA0C.js";import"./toPropertyKey-DE8vi2zA.js";import"./DialogContent-DMuq1MYF.js";import"./iron-iconset-svg-6Nb0KSRY.js";const m=a`

`;class p extends o{static get styles(){return[n(l),g,m,a`
				:host {
					display: block;
				}
			`]}static get properties(){return{title:String}}static get is(){return"card-type-header"}render(){return i`
			<div class="table-header-buttons content" style="margin-bottom: 15px;">
				<div class="heading">
					<h6>${this.title}</h6>
				</div>
				<button id ="pdf-btn" @tap="${this.generatePDF}" class="button is-primary is-size-7 is-rounded">Export PDF</button>
				<button id ="csv-btn" @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
			</div>
		`}}customElements.define(p.is,p);const v=a`

`;class c extends o{static get styles(){return[n(l),u,v,a`
				:host {
					display: block;
				}
			`]}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}constructor(){super(),this.availableSize=[],this.size=50}_dropdownReveal(){const e=this.shadowRoot.querySelector(".p-dropdown");switch(e.style.display){case"block":e.style.display="none";break;default:e.style.display="block";break}}_computeCurrentSize(e,t){return(e-1)*t+1}_computeCurrentMaxSize(e,t,s){const r=t*e;return r>s?s:r}_nextPage(){this.page<this.totalPages&&(this.page=this.page+1),this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){this.page-1>0&&(this.page=this.page-1),this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(e,t){return e<t}_prevButtonEnabled(e){return e>1}_newSizeIsSelected(){const e=this.shadowRoot.querySelector("paper-listbox").selected;e&&(this.oldPage!==null&&this.oldPage!==void 0&&(this.page=1),this.size=e,this.dispatchEvent(new CustomEvent("size-change",{detail:{size:e}})))}_computePosition(e){return e==="right"?"end-justified":""}static get is(){return"card-type-footer"}render(){return i`
			<div class="wrapper is-flex" style="margin-top: 20px;">
				<div class="size">
					<div class="perpage-dropdown">
						<div class="p-display">
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
		`}}customElements.define(c.is,c);const b=a`
    .item {
        display:flex;
        flex-direction:row;
        padding: 20px;
        border-radius: 2px;
        background-color: white;
        border: 1px solid #ddd;
    }
    .item:focus {
        outline: 0;
        border-color: #333;
    }
    .avatar {
        height: 40px;
        width: 40px;
        border-radius: 20px;
        box-sizing: border-box;
        background-color: #DDD;
    }
    .pad {
        padding: 0 16px;
        flex:1;
        flex-basis:0.000001px;
        display:flex;
        flex-direction:column;
    }
    .primary {
        font-size: 16px;
        font-weight: bold;
    }
    .secondary {
        font-size: 14px;
    }
    .dim {
        color: gray;
    }
`;class h extends o{static get styles(){return[n(l),b,a`
				:host {
				display: block;
				}
			`]}static get properties(){return{data:{type:Array,notify:!0},pl:Object,details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String,message:String,gateway:String}}_action(e){const t=e.currentTarget.dataLink;this.pl._dialog(t.service,t.params)}values(e){const t=[];for(var s in e)e.hasOwnProperty(s)&&s!=="links"&&s!=="image"&&s!=="name"&&t.push([s,e[s]]);return t}downloads(e,t){if("download_links"in t&&t.download_links.length){const r=[];for(var s in e)e.hasOwnProperty(s)&&t.download_links.includes(s)&&r.push([s,e[s]]);return r}return[]}static get is(){return"card-type"}render(){return i`
			<card-type-header .title="${this.title}"></card-type-header>
			${this.data.length==0?i`
					<empty-view message="${this.message}" gateway="${this.gateway}" ></empty-view>
				`:i`
					<div style="height: 60vh;overflow-y: scroll;">
						${this.data.map(e=>i`
								<div class="item">
									<iron-image class="avatar" sizing="contain" src="/media/${e.image}"></iron-image>
									<div class="pad">
										<div class="primary">${e.name}</div>
										${this.values(e).map(t=>i`
												<div class="secondary">
													${t[0]}
													<span class="secondary dim">${t[1]}</span>
												</div>
											`)}
										${this.downloads(e,this.details).map(t=>i`
												<a target="_blank" class="secondary" download href="/media/${t[1]}"> Download ${t[0]}</a>
											`)}
										<div>
											${e.links.map(t=>i`
													<paper-button .dataLink=${t} @tap="${this._action}" style="display: inline-block;">${t.title}</paper-button>
												`)}
										</div>
									</div>
								</div>
							`)}
					</div>
					${this.paginate?i`
							<card-type-footer resources="${this.resources}"
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
							</card-type-footer>
						`:""} 
				`}
		`}}customElements.define(h.is,h);export{h as CardType};
