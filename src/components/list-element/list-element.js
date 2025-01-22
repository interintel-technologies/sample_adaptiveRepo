import {html,css, LitElement, unsafeCSS} from 'lit-element';
import { ListElementStyles } from './list-element-css';
import globalStyles from '../../App.css?raw';

export class ListElement extends LitElement {

    static get styles() {
        return [unsafeCSS(globalStyles),ListElementStyles,
            css`
				:host {
					display: block;
				}
			`
        ];
    }

	static get properties() {
        return {
          
            rows: {type: Array},
            e: {type: Object},


        };
    }

	constructor() {
        super();
        this.searchText = '';
        this.rows = [],
		this.e = null
    }

	static get is() {
		return 'list-element';
	}

	updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('rows')) {
			
			
		}}

	identifyIconToDisplay (change) {
		let icon,fill;
		if(change === "increase") {
			icon = "arrow-upward"
			fill="green";
		}
		else if(change === "decrease"){
			icon = "arrow-downward"
			fill="red";
		}
		return {
			icon:icon,
			fill:fill
		};
	}

	render() {
		return html`
			<div class="content">
				<div class="card">
					<h4 >${this.e.name}</h4>
					<ul>
						${
							this.rows.map(row=>html`
								<li class="is-flex">
									${
										row[3] !== "" ? html`
											<span class="icon">
												<adaptive-ui-icon icon="${this.identifyIconToDisplay(row[3]).icon}" style="fill:${this.identifyIconToDisplay(row[3]).fill}; margin-right:10px;"></adaptive-ui-icon>
											</span>
										` : html`
										<span style="margin-right:34px;"></span>
										`
									}
									<h6>${row[0]}:&emsp;</h6>
									<h6>${row[1]}</h6>
								</li>
							`)
						}
					</ul>
				</div>
			</div> 
		`;
	}
}

customElements.define(ListElement.is, ListElement);