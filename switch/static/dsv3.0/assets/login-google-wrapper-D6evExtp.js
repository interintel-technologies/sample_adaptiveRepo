import{r,g as l,i as c,k as g,a as s,j as i}from"./index-C2PWchud.js";import{B as u}from"./base-element-5lxvCIHt.js";const d=class extends u{static get is(){return"login-google"}constructor(){super()}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}initializeGoogle(t){const e=document.createElement("script");e.src="https://apis.google.com/js/api.js",e.async=!0,e.defer=!0,document.head.appendChild(e),e.onload=()=>this.setupGoogleAuthentication(t)}setupGoogleAuthentication(t){const e=this.e.defaultValue;gapi.load("auth2",()=>{gapi.auth2.init({client_id:e,cookiepolicy:"single_host_origin"}).attachClickHandler(t,{},o=>{const n=this.mapGoogleProfile(o);this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.service,google:n},bubbles:!0,composed:!1}))},o=>{console.error(JSON.stringify(o,void 0,2))})})}mapGoogleProfile(t){const e=t.getBasicProfile();return{id:e.getId(),fullName:e.getName(),firstName:e.getGivenName(),lastName:e.getFamilyName(),imageUrl:e.getImageUrl(),email:e.getEmail(),accessToken:t.getAuthResponse().id_token}}firstUpdated(t){super.firstUpdated(t),this.title=this.e.name===""?"Login Google":this.e.name}init(t,e){super.init(t,e),this.name=t.name}getName(){return this.e.formName}};class a extends d{static get styles(){return[r(l),c`
				:host {
					display: block;
				}
				.button {
					width: 100%;
				}
				.icon {
					margin-right: 1em !important;
				}
			`]}firstUpdated(e){super.firstUpdated(e),this.initializeGoogle(this.shadowRoot.querySelector(".button"))}render(){return g`
			<div class="content">
				<button class="button is-primary">
				<adaptive-ui-icon icon=${"icons:MdOutlineFacebook"}></adaptive-ui-icon>

					${this.title}
				</button>
			</div>
		`}}customElements.define(a.is,a);const h=({element:t})=>{const e=s.useRef(null);return s.useEffect(()=>{e.current&&t&&e.current.e!==t&&(e.current.e=t)},[t]),i.jsx(i.Fragment,{children:t?i.jsx("login-google",{id:"login-google",ref:e}):i.jsx("p",{children:"Loading data..."})})};export{h as default};
