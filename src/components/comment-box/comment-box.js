import {html, css, unsafeCSS} from 'lit-element';
import {CommentBoxBase} from '../../base/elements/comment-box';
import {CommentBoxStyles} from './comment-box-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CommentBox extends CommentBoxBase {

	static get properties() {
        return {
            e: { type: Object }, // Add `e` as a property
        };
    }

    constructor() {
        super();
        this.e = { max: 'unlimited', name: '' }; // Initialize `e` with defaults
    }

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			CommentBoxStyles,
			css`
				:host {
				display: block;
				}
			`
		];
	}

	getInput() {
		return this.shadowRoot.querySelector('#input');
	}

	getValue() {
		return this.getInput().value;
	}

	valid(validation) {
		const lbl = this.shadowRoot.querySelector('.label');
		const warningText = this.shadowRoot.querySelector("#warning-text");

		// Revert general text content
		lbl.classList.remove("is-danger");
		lbl.classList.add("is-success");
		warningText.style.display = "none";
	}

	invalid(validation) {
		const lbl = this.shadowRoot.querySelector('.label');
		const warningText = this.shadowRoot.querySelector("#warning-text");

		warningText.style.display='block';
		warningText.innerText = validation.validationMessage;
		lbl.classList.remove("is-success");
		lbl.classList.add("is-danger");
		warningText.innerText = validation.validationMessage;
	}

	count() {
		const valueLength = this.getInput().value.length;
		this.shadowRoot.querySelector('#count').textContent = `${valueLength}/${this.e.max}`;
		if (this.e.max !== 'unlimited' && valueLength > this.e.max) {
			this.shadowRoot.querySelector('#count').style.color = '#FF7273';
		} else {
			this.shadowRoot.querySelector('#count').style.color = '#cecece';
		}
	}

	updated(changedProperties) {
        if (changedProperties.has('e') && this.e) {
			console.log("max is ", this.e.max);

			// Set max to 'unlimited' if it's null or undefined
			this.e.max = this.e.max != null ? this.e.max : 'unlimited';
        }
    }

	render() {
		return html`
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
		`;
	}
}

window.customElements.define('comment-box', CommentBox);
