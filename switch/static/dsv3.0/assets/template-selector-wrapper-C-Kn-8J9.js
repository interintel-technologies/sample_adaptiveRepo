import{i as p,S as u,r as h,g as f,k as n,a as c,j as r}from"./index-C2PWchud.js";import{u as g}from"./utils-mixin-D5aAiqNi.js";import{w as b}from"./datasource-mixin-DMQBE4lo.js";const x=p`
    #template-selector-container {
        position:relative;
    }
    .content-container {
        display:flex;
        justify-content:space-between;
        padding:7px 25px 7px 25px;
        align-items:center;
        border: 1px solid rgb(183, 181, 181);
        border-radius:6px;
        height:fit-content;
        
    }
    .title-label {
        font-size: 16px;
        width: 100%;
        pointer-events: none;
        transition: all 0.3s ease 0s;
    }
    .selected-template-label {
        display:none;
        width:fit-content;
        margin:0;
        font-size:14px;
        transition: all 0.4s ease 0s;
    }
    .templates {
        display:flex;
        flex-direction:column;
        max-height:0;
        align-items:center;
        margin: 10px 10px 0 10px;
        overflow-y:auto;
    }
    .arrow {
        position:relative;
        content: '';
        width: 10px;
        height: 10px;
        border-left: 2px solid #4a4a4a;
        border-bottom: 2px solid #4a4a4a;
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        transform: rotate(-45deg);
        right:0;
    }
    .arrow-up {
        transform: rotate(135deg);
        transition:all 0.4s ease-in-out;
    }
    .arrow-down {
        transform: rotate(-45deg);
        transition:all 0.4s ease-in-out;
    }
    .show-templates {
        max-height:300px;
        transition:all 0.4s ease-in-out;
    }
    .hide-templates {
        max-height:0;
        transition:all 0.4s ease-in-out;
    }
    .template {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        height:150px;
        margin:5px;
    }   
    .template:hover {
        cursor:pointer;
    }
    .template:active {   
        margin-right:8px;
        margin-left:8px;
        transition: all 0.17s ease-out;
    }
    .template-name {
        padding-left:7px;
    }
    .template-image {
        height:130px;
        width:100%;
        object-fit:contain;
        border: 1px solid rgb(183, 181, 181);
        border-radius: 6px;
        padding:3px;
    }
    .selected {
        border-color:var(--link);
    }
    .is-arrow-danger {
        border-color:rgb(255, 56, 96)!important;
    }
    .is-arrow-success{
        border-color: #23d160 !important;
    }  
    .lbl-danger{
        color: #ff2b56;
    }
    .cont-danger{
        border: 2px solid #ff2b56;
    }
    .lbl-success{
        color: #23d160 !important;
    }
    .cont-success{
        border: 2px solid #23d160;
    }
    #warning-text{
        display:none;
    }
`,m=class extends g(u){static get is(){return"template-selector"}static get properties(){return{icon:String,title:String,selected:String}}getName(){return this.e.formName.split("=")[0]}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(s){}invalid(s){}_dataJoined(s){const e=this;var t=[];return e.e.details.concat_exclude&&(t=e.e.details.concat_exclude.split(",")),s.filter(function(l,a){return!(a===0||t.includes(String(a))||e.cols.length&&e.cols[a].type==="href")}).join(" ")}dscDataName(){return this.e.defaultValue}firstUpdated(s){super.firstUpdated(s);const e=this;this.loader.then(t=>{e.q="",e.currentGroups=e.groups,e.currentData=e.data})}_computeItemsCount(s){return s.length}_shouldFilter(s){var e=this._computeItemsCount(s);return e>10}_computeItems(s,e){const t=[];for(let i=0;i<s.length;i++){const o=s[i];if(e){var l=e.toLowerCase(),a=o[1].toLowerCase();a.indexOf(l)!==-1&&t.push(o)}else t.push(o)}return t}init(s,e){super.init(s,e);var t=this;t.required=this.e.required||s.min&&s.min>0,t.title=m.toTitleCase(s.name),t.icon=s.icon,t.params=t.pl.paramsCopy(),s.kind?this.selected=Number(s.kind):t.required&&t.rows.length>0&&(t.selected=t.rows[0][0]),t.loader=this.loadData()}};class d extends m{static get styles(){return[h(f),x,p`
				:host {
					display: block;
				}
			`]}static get properties(){return{selectedTemplate:String,value:String,isTemplatesOpen:Boolean,columns:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.isTemplatesOpen=!1,this.selectedTemplate=null,this.value=null}updated(e){(e.has("columns")||e.has("rows")||e.has("e"))&&document.addEventListener("click",t=>this.outsideClickHandler(t))}templatesVisibility(){const e=this.shadowRoot.querySelector(".templates"),t=this.shadowRoot.querySelector(".arrow");this.isTemplatesOpen?(t.classList.remove("arrow-up"),t.classList.add("arrow-down"),e.classList.remove("show-templates"),e.classList.add("hide-templates")):(t.classList.add("arrow-up"),t.classList.remove("arrow-down"),e.classList.remove("hide-templates"),e.classList.add("show-templates")),this.isTemplatesOpen=!this.isTemplatesOpen}outsideClickHandler(e){const t=this.shadowRoot.querySelector(".templates"),l=e.composedPath().find(i=>i.id==="template-selector-container"),a=Object.values(t.classList).find(i=>i==="show-templates");!l&&a&&this.templatesVisibility()}getSelectedTemplate(e){const t=this.rows.find(l=>l[0]===e[0]);t&&(this.selectedTemplate={label:t[1],value:t[0]},this.value=this.selectedTemplate.value,this.moveLabel(),this.templatesVisibility(),this.showSelectedTemplate())}showSelectedTemplate(){const e=this.shadowRoot.querySelector(".selected-template-label");e.style.display="flex"}checkSelectedTemplate(e){if(this.selectedTemplate)return e[0]===this.selectedTemplate.value}templateClickHandler(e){this.getSelectedTemplate(e)}moveLabel(){const e=this.shadowRoot.querySelector(".title-label");e.style.position="absolute",e.style.top="-7px",e.style.left="18px",e.style.fontSize="12px",e.style.fontWeight=700}valid(e){const t=this.shadowRoot.querySelector(".title-label"),l=this.shadowRoot.querySelector(".content-container"),a=this.shadowRoot.querySelector(".selected-template-label"),i=this.shadowRoot.querySelector("#warning-text");t.classList.remove("lbl-danger"),t.classList.add("lbl-success"),a.classList.add("lbl-success"),a.classList.remove("lbl-danger"),l.classList.remove("cont-danger"),l.classList.add("cont-success"),i.style.display="none",setTimeout(()=>{t.classList.remove("lbl-success"),a.classList.remove("lbl-success"),l.classList.remove("cont-success")},3e3)}invalid(e){const t=this.shadowRoot.querySelector(".title-label"),l=this.shadowRoot.querySelector(".content-container"),a=this.shadowRoot.querySelector(".selected-template-label"),i=this.shadowRoot.querySelector("#warning-text");t.classList.remove("lbl-success"),t.classList.add("lbl-danger"),a.classList.remove("lbl-success"),a.classList.add("lbl-danger"),l.classList.remove("cont-success"),l.classList.add("cont-danger"),i.style.display="block"}getValue(){return this.value}render(){return n`
			<div id="template-selector-container" class="column">           
				<div class="content-container" @click=${()=>!this.templatesVisibility()}>
					<h4 class="title-label">${this.e.name}</h4>
					<h4 class="selected-template-label">${this.selectedTemplate?this.selectedTemplate.label:""}</h4>
					<div class="arrow"></div>
				</div>
				<ul class="templates">
					${this.rows.map(e=>n`
							<li class="template" @click=${()=>this.templateClickHandler(e)}>
								<h3 class="template-name">${e[1]}</h3>
								<img class="template-image ${this.checkSelectedTemplate(e)?"selected":""}" src="${e[2]}"/>
							</li>
						`)}
				</ul>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
			</div>
		`}}customElements.define(d.is,d);const w=({element:s,data:e,rows:t})=>{const l=c.useRef(null);return c.useEffect(()=>{l.current&&s&&(l.current.e=s,l.current.data=e,l.current.rows=t)},[s,e,t]),r.jsx("div",{children:s&&e&&t?r.jsx("template-selector",{id:"template-selector",ref:l}):r.jsx("p",{children:"Loading data..."})})},L=b(w);export{L as default};
