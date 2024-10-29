import{k as l}from"./index-C2PWchud.js";import"./calendar-element-C00wmKBV.js";import"./select-element-GuC7mP6J.js";var i=Object.freeze,o=Object.defineProperty,c=(n,e)=>i(o(n,"raw",{value:i(n.slice())})),r;const g=n=>class extends n{static get properties(){return{dateRange:Object,selectedDateType:String,legend:Array,e:{type:Object},rows:{type:Array},cols:{type:Array},isLoaded:{type:Boolean}}}constructor(){super(),this.dateRange={},this.legend=[],this.e={},this.rows=[],this.cols=[],this.isLoaded=!1}firstUpdated(e){super.firstUpdated(e),this.isLoaded=!0}animateOnLoad(){this.path.attr("stroke-dasharray",function(){const e=this.getTotalLength();return`${e} ${e}`}).attr("stroke-dashoffset",function(){return this.getTotalLength()}).transition().duration(1e3).attr("stroke-dashoffset",0),this.dots.attr("r",0).transition().delay(1e3).duration(500).attr("r",2.5)}toggleDropdown(){const e=this.shadowRoot.querySelector(".dropdown-content");e.style.display=e.style.display==="none"?"block":"none"}handleDateSelected(e){const a=e.detail,t=this.shadowRoot.querySelector(".dropdown-header span");t.textContent=a;const s=this.shadowRoot.querySelector(".dropdown-content");s.style.display="none"}createDateFilter(){const e=this.cols.filter(a=>a.date_filters)[0];return this.shadowRoot.querySelector("date-element-2"),this.shadowRoot.querySelector(".date-container"),l`
			${e?l`
				<div class="custom-dropdown">
					<div class="dropdown-header" @click=${this.toggleDropdown}>
						<span>Select a date</span>
						<i class="fa fa-caret-down"></i>
					</div>
					<div class="dropdown-content">
						<lit-calendar @date-selected=${this.handleDateSelected}></lit-calendar>
					</div>
				</div>
				`:""}
		`}createSelectFilters(){const e=this.cols.filter(t=>t.list_filters),a=(t,s)=>{this.updateParams(t,s)};return e.length>0?l`
			<div class="select-filters is-flex">
				${e.map(t=>l`
						<select-element .name=${""} .options=${t.list_filters.map(s=>({value:s,label:s}))} 
							@on-change=${s=>a(t.value,s.detail.target.value)}></select-element>
					`)}
			</div>
		`:""}createLegend(){return l`
			<div class="legend">
				${this.legend.map(e=>l`
						<div class="legend-item">
							<div class="legend-color" style="color: ${e.color};"></div>
							<h6>${e.label}</h6>
						</div>
					`)}
			</div>
		`}formatDate(e){var a=new Date(e),t=""+(a.getMonth()+1),s=""+a.getDate(),d=a.getFullYear();return t.length<2&&(t="0"+t),s.length<2&&(s="0"+s),[d,t,s].join("-")}toTitleCase(e){if(!e)return"";e=e.toString(),e=e.toLowerCase().split(" ");let a=[];for(let t=0;t<e.length;t++)a[t]=e[t].substr(0,1).toUpperCase()+e[t].substr(1);return a.join(" ")}render(){return this.isLoaded?l(r||(r=c([`
			<script src="https://d3js.org/d3.v6.min.js"><\/script>
			<div class="chart-container content card">
				<div class="level is-align-items-flex-start">
					<div class="level-left">
						<div class="level-item">
							<h4>`,`</h4>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<div class="level is-mobile filters is-align-items-flex-start">
								<div class="level-left">
									<div class="level-item">
										`,`
									</div>
								</div>
								<div class="level-right">
									<div class="level-item">
										`,`
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="m-2">
				<div id="chart"></div>
				<div class="legend legend-container" id="lg">
					`,`
				</div>
			</div>
		`])),this.e.name,this.createDateFilter(),this.createSelectFilters(),this.legend.map(e=>l`
							<div class="legend-item mr-1">
								<div class="legend-color" style="background-color: ${e.color};"></div>
								<h6 style="margin-bottom: 0;">${e.label}</h6>
							</div>
						`)):l`<p>Loading data...</p>`}};export{g as C};
