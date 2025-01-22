
import {css, unsafeCSS} from 'lit-element';
import {HyperlinkElementStyles} from "./hyperlink-element-css";
import { HyperlinkElementBase } from '../../base/elements/hyperlink-element';
import { ACTION_SERVICE_CALL, buttonMixin } from '../../base/mixins/button-mixin';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class HyperlinkElement extends buttonMixin(HyperlinkElementBase) {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			HyperlinkElementStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			name: String,
			params: {type: Object, value: {}},
		};
	}

	constructor(){
		super();
		this.type = 'LINK';
	}

	get action() {
		return ACTION_SERVICE_CALL;
	}
}

customElements.define(HyperlinkElement.is, HyperlinkElement);
