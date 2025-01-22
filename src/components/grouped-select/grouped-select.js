import {html, css, unsafeCSS} from 'lit-element';
import {GroupedSelectBase} from '../../base/elements/grouped-select';
import {GroupedSelectStyles} from './grouped-select-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class GroupedSelect extends GroupedSelectBase {

	static get styles() {
		return [
			unsafeCSS(globalStyles),
			GroupedSelectStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	constructor() {
        super();
        this.e = {};
        this.rows = [];
        this.cols = [];
    }

	static get properties() {
		return {
			icon: { type: String },
			dataName: { type: String, value: '' },
			service: { type: String },
			title: { type: String },
			maxlength: { type: Number },
			pattern: { type: String },
			q: { type: String, value: '' },
			dropdownValue: { type: Object },
			rows: { type: Array, value: [] },
			cols: { type: Array, value: [] },
			params: { type: Object, value: {} },
			columnSize: { type: Array, value: [] },
		};
	}

	updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('rows') || changedProperties.has('cols')) {
           console.log("qwer ", this.e);
        }
    }

	dropdown(link, id) {
		if (!link) {
			this.shadowRoot.querySelector('.account-body').classList.toggle('is-block');
		} else {
			const headTitle = this.shadowRoot.querySelector('.account-header h5');
			const allLists = this.shadowRoot.querySelectorAll('.account-body li');
			headTitle.innerHTML = `${link}`;
			allLists.forEach((list) => list.className = '');
			this.shadowRoot.querySelector(`#list-${id}`).className = "list-active";
			this.shadowRoot.querySelector('.account-body').classList.toggle('is-block');
		}
	}

	render() {
		return html`
			<div class="account-select content">
				<div class="account-header" @click='${this.dropdown}'>
					<div class="account-item is-flex">
						<div class="profile-pic center">
							<adaptive-ui-icon icon=${this.e.icon || 'icons:input'}></adaptive-ui-icon>
						</div>
						<div class="accout-details center">
							<h5>${this.e.name}</h5>
						</div>
					</div>
				</div>
				<div class="account-body">
					<ul>
						${
							this.rows.map(data => html`
								<li id="list-${data[0]}" class="${this.e.kind === data[0] ? 'list-active' : ''}" @click='${() => this.dropdown(this._dataJoined(data), data[0])}'>
									<div class="account-item is-flex">
										<div class="profile-pic center">
											<adaptive-ui-icon icon=${this.e.icon || 'icons:input'}></adaptive-ui-icon>
										</div>
										<div class="accout-details center">
											<h6>${this._dataJoined(data)}</h6>
										</div>
									</div>
								</li>
							`)
						}
					</ul>
				</div>
			</div>
		`;
	}
}

customElements.define('grouped-select', GroupedSelect);
