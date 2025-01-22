
import {css, unsafeCSS} from 'lit-element';
import {ACTION_WINDOW_CLOSE, buttonMixin} from '../../base/mixins/button-mixin';
import {HyperlinkElement2Base} from '../../base/elements/hyperlink-element-2';
import {HyperlinkElement2Styles} from "./hyperlink-element-2-css";
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class HyperlinkElement2 extends buttonMixin(HyperlinkElement2Base) {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			HyperlinkElement2Styles,
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
		this.type = 'LINK2';
	}

	get action() {
		return ACTION_WINDOW_CLOSE;
	}
}

customElements.define(HyperlinkElement2.is, HyperlinkElement2);
