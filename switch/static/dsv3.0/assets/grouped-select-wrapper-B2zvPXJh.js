import{S as p,i as d,r as h,g,k as n,a as l,j as c}from"./index-C2PWchud.js";import{u as m}from"./utils-mixin-D5aAiqNi.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";const u=class extends m(p){static get is(){return"grouped-select"}static get properties(){return{title:String,selected:Object,icon:String,maxlength:Number,pattern:String,q:String,dropdownValue:Object,params:Object,columnSize:Array,rows:{type:Array},cols:{type:Array},data:{type:Array}}}getValue(){return this.selected}getName(){return this.e.formName}validate(){return!(this.e.required&&!this.getValue())}_dataJoined(t){const e=this;var i=[];return e.e.details.concat_exclude&&(i=e.e.details.concat_exclude.split(",")),t.filter(function(o,s){return!(s===0||i.includes(String(s))||this.cols.length&&this.cols[s].type==="href")}).join(" ")}dscDataName(){return this.e.defaultValue}firstUpdated(t){super.firstUpdated(t),this.q="",this.currentGroups=this.groups,this.currentData=this.data,Object.keys(this.rows).length>0&&!self.dropdownValue&&(self.dropdownValue=self.rows[0][0])}_computeItemsCount(t){return t.length}_shouldFilter(t){var e=this._computeItemsCount(t);return e>10}_computeItems(t,e){const i=[];for(let r=0;r<t.length;r++){const a=t[r];if(e){var o=e.toLowerCase(),s=a[1].toLowerCase();s.indexOf(o)!==-1&&i.push(a)}else i.push(a)}return i}init(t,e){super.init(t,e);var i=this;i.required=this.e.required||t.min&&t.min>0,i.title=u.toTitleCase(t.name),i.icon=t.icon,i.params=i.pl.paramsCopy(),i.maxlength=t.max,i.loader=this.loadData()}},v=d`
	.center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.account-select{
		position: relative;
		-moz-user-select: none; 
		-webkit-user-select: none; 
		-ms-user-select:none; 
		user-select:none;
		-o-user-select:none;
	}
	.account-select .account-header{
		background-color: var(--input-background-color);
		padding:0 20px 0 10px;
		position: relative;
		display:inline-block;
		cursor: pointer;
		width: 100%;
		height:40px;
		border-radius: 4px;
	}
	.account-header p span{
		color: #6c7a89;
	}
	.account-select .account-header::after{
		content: '';
		width: 8px;
		height: 8px;
		border-left: 2px solid #4a4a4a;
		border-bottom: 2px solid #4a4a4a;
		border-right: 2px solid transparent;
		border-top: 2px solid transparent;
		position: absolute;
		transform: rotate(-43deg);
		top: 15px;
		right:15px;
	}
	.account-item{
		padding: 7px;
	}
	.account-item .profile-pic img{
		width: 25px;
		height: 25px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.account-item .accout-details p{
		font-size: 14px;
		font-weight: 500;
	}
	.account-item .accout-details p span{
		font-weight: lighter;
	}
	.account-body{
		background: var(--md-sys-color-surfaceContainerLowest);;
		display: none;
		position:absolute;
		padding: 10px 20px 10px 10px;
		width: 100%;
		z-index:5;
		box-shadow:var(--global-box-shadow);
	}
	h5,h6 {
		margin: 0 10px!important;
	}
	.account-body ul li{
		cursor: pointer;
		border-bottom: 1px solid #ececec;
		list-style: none;
	}
	.list-active h6{
		color: var(--link);
	}
	.list-active adaptive-ui-icon{
		fill:var(--link);
	}
	.account-body ul li:last-child{
		border-bottom: 0 solid transparent;
	}
`;let y=class extends u{static get styles(){return[h(g),v,d`
				:host {
					display: block;
				}
			`]}constructor(){super(),this.e={},this.rows=[],this.cols=[]}static get properties(){return{icon:{type:String},dataName:{type:String,value:""},service:{type:String},title:{type:String},maxlength:{type:Number},pattern:{type:String},q:{type:String,value:""},dropdownValue:{type:Object},rows:{type:Array,value:[]},cols:{type:Array,value:[]},params:{type:Object,value:{}},columnSize:{type:Array,value:[]}}}updated(e){(e.has("e")||e.has("rows")||e.has("cols"))&&console.log("qwer ",this.e)}dropdown(e,i){if(!e)this.shadowRoot.querySelector(".account-body").classList.toggle("is-block");else{const o=this.shadowRoot.querySelector(".account-header h5"),s=this.shadowRoot.querySelectorAll(".account-body li");o.innerHTML=`${e}`,s.forEach(r=>r.className=""),this.shadowRoot.querySelector(`#list-${i}`).className="list-active",this.shadowRoot.querySelector(".account-body").classList.toggle("is-block")}}render(){return n`
			<div class="account-select content">
				<div class="account-header" @click='${this.dropdown}'>
					<div class="account-item is-flex">
						<div class="profile-pic center">
							<adaptive-ui-icon icon=${this.e.icon||"icons:input"}></adaptive-ui-icon>
						</div>
						<div class="accout-details center">
							<h5>${this.e.name}</h5>
						</div>
					</div>
				</div>
				<div class="account-body">
					<ul>
						${this.rows.map(e=>n`
								<li id="list-${e[0]}" class="${this.e.kind===e[0]?"list-active":""}" @click='${()=>this.dropdown(this._dataJoined(e),e[0])}'>
									<div class="account-item is-flex">
										<div class="profile-pic center">
											<adaptive-ui-icon icon=${this.e.icon||"icons:input"}></adaptive-ui-icon>
										</div>
										<div class="accout-details center">
											<h6>${this._dataJoined(e)}</h6>
										</div>
									</div>
								</li>
							`)}
					</ul>
				</div>
			</div>
		`}};customElements.define("grouped-select",y);const x=({element:t,data:e,cols:i,rows:o})=>{const s=l.useRef(null);return l.useEffect(()=>{s.current&&o.length>0&&(s.current.rows=o,s.current.cols=i,s.current.e=t,s.current.data=e)},[o]),c.jsx("div",{children:t&&e&&o?c.jsx("grouped-select",{ref:s}):c.jsx("p",{children:"Loading data..."})})},j=f(x);export{j as default};
