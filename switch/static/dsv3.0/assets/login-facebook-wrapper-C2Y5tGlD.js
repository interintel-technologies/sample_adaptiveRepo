import{r as u,g as l,i as f,k as g,a as r,j as n}from"./index-C2PWchud.js";import{u as d}from"./utils-mixin-D5aAiqNi.js";import{B as p}from"./base-element-5lxvCIHt.js";const m=class extends d(p){static get is(){return"login-facebook"}constructor(){super()}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}facebookInit(){console.log("face book init");const e=this.e.defaultValue;window.fbAsyncInit=function(){FB.init({appId:e,cookie:!0,xfbml:!0,version:"v10.0"}),FB.AppEvents.logPageView()},function(t,i,s){var o,a=t.getElementsByTagName(i)[0];t.getElementById(s)||(o=t.createElement(i),o.id=s,o.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(o,a))}(document,"script","facebook-jssdk")}facebookLogin(){window.FB.login(e=>{e.status==="connected"&&FB.api("/me",t=>{this._dialog(this.e.service,{facebook:{...t,...e}})})})}getName(){return this.e.formName}updated(e){e.has("e")&&(this.title=this.e.name===""?"Login Facebook":this.e.name)}init(e,t){super.init(e,t),this.name=e.name}};class c extends m{static get styles(){return[u(l),f`
				:host { 
					display: block;
				}
				.button {
					width: 100%;
				}
				.icon {
					margin-right: 1em !important;
				}
			`]}firstUpdated(t){super.firstUpdated(t),this.facebookInit()}renderDefault(){return g`
			<div class="content">
				<button class="button is-primary" @click=${()=>this.facebookLogin()}>
				<adaptive-ui-icon icon=${"icons:MdOutlineFacebook"}></adaptive-ui-icon>

					${this.title}
				</button>
			</div>
		`}}customElements.define(c.is,c);const x=({_dialog:e,element:t})=>{const i=r.useRef(null);return r.useEffect(()=>{i.current&&t&&i.current.e!==t&&(i.current.e=t,i.current._dialog=e)},[t]),n.jsx(n.Fragment,{children:t?n.jsx("login-facebook",{id:"login-facebook",ref:i}):n.jsx("p",{children:"Loading data..."})})};export{x as default};
