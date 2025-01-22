
import {html, css,unsafeCSS} from 'lit-element';
import {LoginGoogleBase} from '../../base/elements/login-google';
import globalStyles from '../../App.css?raw';

class LoginGoogle extends LoginGoogleBase {

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

		this.initializeGoogle(this.shadowRoot.querySelector(".button"));
	}

	render() {
		return html`
			<div class="content">
				<button class="button is-primary">
				<adaptive-ui-icon icon=${'icons:MdOutlineFacebook'}></adaptive-ui-icon>

					${this.title}
				</button>
			</div>
		`;
	}
}

customElements.define(LoginGoogle.is, LoginGoogle);
