import {html, css} from 'lit-element';
import { CcExpirationBase } from '../../base/elements/cc-expiration';
import { InputMixin } from '../../base/mixins/InputMixin';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CcExpiration extends InputMixin(CcExpirationBase) {
	
	get type() {
		return 'month';
	}

	static get is() {
		return "cc-expiration";
	}
}

customElements.define(CcExpiration.is, CcExpiration);
