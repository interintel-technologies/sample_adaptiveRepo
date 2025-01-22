
import {html, unsafeCSS} from 'lit-element';
import {TextViewBase} from '../../base/elements/text-view';
import {css} from 'lit-element';
import {TextViewStyles} from './text-view-css';
import globalStyles from '../../App.css?raw'

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TextView extends TextViewBase {
	static get styles() {
		return [
			unsafeCSS(globalStyles),
			TextViewStyles,
			css`
				:host {
					display: block;
				}
			`
		];

	}

	static get properties() {
		return {
			e: { type: Object }, 
			name: { type: String },          
			text: { type: String },          

		};
	}

	updated(changedProperties) {
		if (
			changedProperties.has('e')
		) {
		this.name = this.e.name
		this.text = this.e.defaultValue

	
		}
	}

	render() {
		return html`
		<div class="field">
<article class="message is-primary">
  <div class="message-header">
    <p>${this.name}</p>
  </div>
  <div class="message-body">
  ${this.text}
  </div>
</article>
</div>

		`;
	}
}

window.customElements.define(TextView.is, TextView);
