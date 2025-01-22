import {html,css,unsafeCSS} from 'lit-element';
import {LoginFacebookBase} from '../../base/elements/login-facebook';
import globalStyles from '../../App.css?raw'

class LoginFacebook extends LoginFacebookBase {
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			css`
				:host { 
					display: block;
				}
				.button {
					width: 100%;
				}
				.icon {
					margin-right: 1em !important;
				}
			`
		];
	}

	firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);
		
		this.facebookInit();
	}

	renderDefault() {
		return html`
			<div class="content">
				<button class="button is-primary" @click=${()=>this.facebookLogin()}>
				<adaptive-ui-icon icon=${'icons:MdOutlineFacebook'}></adaptive-ui-icon>

					${this.title}
				</button>
			</div>
		`; 
	}
}

customElements.define(LoginFacebook.is, LoginFacebook);
