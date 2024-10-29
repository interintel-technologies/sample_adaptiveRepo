import{S as l,i as n,r as c,g as d,k as h,a as o,j as a}from"./index-C2PWchud.js";import{u}from"./utils-mixin-D5aAiqNi.js";const r=class extends u(l){static get is(){return"comment-box"}static get properties(){return{params:{type:Object,value:{}},type:String,value:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if((this.e.required||this.required)&&!this.getValue())return new this.Validation(!1,this.e.name+" is Required");if((this.e.required||this.required)&&(this.getValue().length>this.e.max||this.getValue().length<this.e.min)){if(this.getValue().length>this.e.max)return new this.Validation(!1,this.e.name+" characters must not be more than "+this.e.max);if(this.getValue().length<this.e.min)return new this.Validation(!1,this.e.name+" characters must not be less than "+this.e.min)}return new this.Validation(!0,"valid")}valid(e){}invalid(e){}firstUpdated(e){super.firstUpdated(e)}init(e,t){super.init(e,t);const i=this;i.title=r.toTitleCase(e.name),this.required=this.e.required||e.min&&e.min>0,this.value=e.defaultValue||""}},m=n`
    .text-area {
        padding: 16px;
        position: relative;
    } 
    .mytextarea{
        border: 1px solid #b7b5b5;
        outline: 0;
        color: #013243;
        box-shadow: none!important;
        min-height: 150px;
        max-height: 150px;
        padding:5px;
        width: 100%;
        border-radius: 6px;
        border-color: rgb(183, 181, 181);
    }
    #label{
        position: absolute;
        top: 28px;
        left: 40px;
        font-size: 16px;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        transition: all 0.3s ease 0s;
    }
    .mytextarea.is-success{
        border: 2px solid #23d160;
        color: #23d160;
    }
    .mytextarea.is-danger{
        border: 2px solid #ff3860;
        color: #ff3860;
    }
    .lbl.is-success{
        color: #23d160!important;
    }
    .lbl.is-danger{
        color: #ff3860!important;
    }
    .icon{
        position: absolute;
        right: 40px;
        bottom: 40px;
        display: none;
    }
    #danger-icon {
        visibility: hidden;
        margin-top: 8px;
    }

    #check-icon {
        visibility: hidden;
        margin-top: 8px;
    }
    #warning-text{
        display:none;
    }
    .counter{
        position: absolute;
        right: 45px;
        bottom: -10px;
        color: #cecece;
        right: 15px;
    }
`;class p extends r{static get properties(){return{e:{type:Object}}}constructor(){super(),this.e={max:"unlimited",name:""}}static get styles(){return[c(d),m,n`
				:host {
				display: block;
				}
			`]}getInput(){return this.shadowRoot.querySelector("#input")}getValue(){return this.getInput().value}valid(t){const i=this.shadowRoot.querySelector(".label"),s=this.shadowRoot.querySelector("#warning-text");i.classList.remove("is-danger"),i.classList.add("is-success"),s.style.display="none"}invalid(t){const i=this.shadowRoot.querySelector(".label"),s=this.shadowRoot.querySelector("#warning-text");s.style.display="block",s.innerText=t.validationMessage,i.classList.remove("is-success"),i.classList.add("is-danger"),s.innerText=t.validationMessage}count(){const t=this.getInput().value.length;this.shadowRoot.querySelector("#count").textContent=`${t}/${this.e.max}`,this.e.max!=="unlimited"&&t>this.e.max?this.shadowRoot.querySelector("#count").style.color="#FF7273":this.shadowRoot.querySelector("#count").style.color="#cecece"}updated(t){t.has("e")&&this.e&&(console.log("max is ",this.e.max),this.e.max=this.e.max!=null?this.e.max:"unlimited")}render(){return h`
			<div class="content">
				<label class="label">${this.e.name}</label>
				<div class="text-area control">
					<textarea class="mytextarea" id="input" @keyup="${this.count}">${this.value}</textarea>
					<span id="danger-icon" class="icon is-small is-right">
						<fa-icon class="fas fa-exclamation-triangle icon" size="1em" color="#ff3860"></fa-icon>
					</span>
					<span id="check-icon" class="icon is-small is-right">
						<fa-icon class="fas fa-check" size="1em" color="#23d160"></fa-icon>
					</span>
					<div class="counter" id="count">
						<p>0/${this.e.max}</p>
					</div>
					<p id="warning-text" style="color:#ff3860; margin-left: 2px;"></p>
				</div>
			</div>
		`}}window.customElements.define("comment-box",p);const f=({element:e})=>{const t=o.useRef(null);return o.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),a.jsx(a.Fragment,{children:e?a.jsx("comment-box",{id:"comment-box",ref:t}):a.jsx("p",{children:"Loading data..."})})};export{f as default};
