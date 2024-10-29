import{r as o,g as r,k as s}from"./index-C2PWchud.js";const c="1",d="2",h="3",u="4",f="5",p="6",b=getComputedStyle(document.documentElement).getPropertyValue("--white"),g=l=>class extends l{static get styles(){return[o(r)]}static get properties(){return{icon:Boolean,rounded:Boolean,large:Boolean,size:String,color:String,sectionSize:String,submitting:Boolean}}constructor(){super(),this.icon=!1,this.rounded=!1,this.large=!1,this.size=32,this.submitting=!1}getMainFont(t){if(t!=null){let[i,n]=t.split("&"),[a,e]=i.split("=");return e}return""}getBackupFont(t){if(t!=null){let[i,n]=t.split("&"),[a,e]=i.split("=");return e}return""}checkSectionSize(){if(window.template=="payments"){if(this.sectionSize==="24|24|24")return"-268px";if(this.sectionSize==="12|12|12")return"-146px";if(this.sectionSize==="12|12|24")return"-146px";if(this.sectionSize==="12|24|24")return"-146px"}else return this.sectionSize==="24|24|24"?"-754px":this.sectionSize==="12|12|12"||this.sectionSize==="12|12|24"||this.sectionSize==="12|24|24"?"-418px":this.sectionSize==="18|18|18"?"-581px":this.sectionSize==="6|6|6"||this.sectionSize==="4|4|4"?"-248px":"-754px"}firstUpdated(t){super.firstUpdated(t),this.e&&(this.icon=this.e.details.icon||!1,this.large=this.e.details.large||!1,this.rounded=this.e.details.rounded||!1,this.size=this.e.details.size||32,this.color=this.e.details.color||"#0040bf",this.sectionSize=this.e.sectionSize)}_onAction(t){const i=this.shadowRoot.querySelector(".button");switch(this.submitting=!0,this.action){case c:this._dialog(this.e.service,this.params);break;case u:t.preventDefault();const n=this.e.formName,a=this.e.defaultValue;this.skipForm(this.e.service,n,a);break;case p:t.preventDefault(),i.classList.add("submit-animation"),i.disabled=!0,this.pl.submitForm2(this.e.service).then(()=>{i.classList.remove("submit-animation"),this.submitting=!1,i.disabled=!1}).catch(()=>{i.classList.remove("submit-animation"),this.submitting=!1,i.disabled=!1});break;case f:t.preventDefault(),confirm("Close Window?")&&window.open("","_self").close();break;case d:break;case h:i.classList.add("submit-animation"),i.disabled=!0,this.submitForm().then(e=>{i.classList.remove("submit-animation"),this.submitting=!1,i.disabled=!1}).catch(()=>{i.classList.remove("submit-animation"),this.submitting=!1,i.disabled=!1});break;default:i.classList.add("submit-animation"),i.disabled=!0,this.submitting=!1,i.disabled=!1;break}}render(){if(this.type==="LINK")return s`
				<div class="field">
					<div class="link-container">
						<p class="subtitle is-6" @click="${this._onAction}" >${this.e&&this.e.name}</p>
					</div>
				</div>
			`;if(this.type==="submit"||this.type==="submit2")return s`
				<div class="field" style="${this.e&&this.e.details.center?"margin:auto!important; width:50%!important":""}">        
					<div class="control">
					<div class="control btn-cont ${this.e&&this.e.details.isRight?"btn-right":""}">
						<button ?disabled="${this.submitting}" @click="${this._onAction}" 
						class="button is-primary is-clickable btn-full ${this.e&&this.e.details.variant?`btn-${this.e.details.variant}`:""}" 
						style="padding-left: 3em; padding-right: 3em; background-color: is-info;">
							${this.submitting?s`
									<div class="spinner"></div>
								`:""}
							${!this.submitting&&this.icon?s`
									<span class="icon is-small">
										<adaptive-ui-icon datacolor="${b}" icon=${this.e&&this.e.icon}></adaptive-ui-icon>
									</span>
								`:""}
							<span class="${this.submitting?"is-hidden":""}">${this.e&&this.e.name}</span>
						</button>
					</div>
				</div>
			`;if(this.type==="skip")return s`
				<div class="field">        
					<div class="control  btn-cont">
					<button class="button btn-full is-link" style="background-color: ${this.e&&this.e.details.bg_color!==void 0?this.e.details.bg_color:"is-link"}"  @click="${this._onAction}" >${this.e&&this.e.name}</button>
						${this.e&&this.e.details.info!==void 0?s`<span class="tooltiptext"><fa-icon class="fa fa-info-circle" color="var(--app-accent-color)" style="height:22px; width: 22px;"></fa-icon><span class="info-text">${this.e.details.info}</span><i></i></span>`:s``}
					</div>
				</div>
			`;if(this.type==="LINK2")return s`
				<div class="field">
					<div class="link-container">
						<p class="subtitle is-6">${this.e&&this.e.name}</p>
					</div>
				</div>
			`}};export{f as A,c as a,g as b,u as c,h as d};
