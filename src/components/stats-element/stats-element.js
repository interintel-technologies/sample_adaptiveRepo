import {html,css, LitElement, unsafeCSS} from 'lit-element';
import { StatsElementStyles } from './stats-element-css';
import globalStyles from '../../App.css?raw';

export class StatsElement extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles), 
            StatsElementStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
		return {
			specializations:Array,
			cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
		}
	}

    constructor() {
		super();
		this.specializations = [];
        this.rows = []
        this.cols = []

        this.e = null 
	}

    updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
			
        }}

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label === columnLabel); 
    }

    

    static get is() {
        return 'stats-element';
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <h3>${this.e.name}</h3>
                    <div class="columns is-multiline">
                        ${
                            this.rows.map(row => html`
                                <div class="column">
                                    <div class="card is-flex">
                                        <adaptive-ui-icon class="stat-icon" icon="${row[this.getIndexByColumnLabel("icon")]}"></adaptive-ui-icon>
                                        <h4>${row[this.getIndexByColumnLabel("name")]}</h4>
                                        <h3>${row[this.getIndexByColumnLabel("value")]}</h3>
                                        <h5>${row[this.getIndexByColumnLabel("description")]}</h5>
                                    </div>
                                </div>
                            `)
                        }
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define(StatsElement.is, StatsElement);