import {css, html,unsafeCSS} from 'lit-element';
import { QuickOverviewStyles } from './quick-overview-css';
import { SectionPElementDsc } from '../../base/elements/section-pelement-dsc';
import globalStyles from '../../App.css?raw'
class QuickOverview extends SectionPElementDsc {

    static get styles() {
        return [unsafeCSS(globalStyles),QuickOverviewStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            overviews: Array,
            filters: Object,
        };
    }
    
    constructor() {
        super();
        this.overviews = [];
        this.filters = {};
    }

    firstUpdated() {
        this.filters = this.e.details.filters;

        this.loader.then(() => {
            this.overviews = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        });
    }

    onSelectChangeHandler(value, key) {
        this.updateParams(key, value);
    }

    static get is() {
        return "quick-overview";
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-header-title">${this.e.name}</h4>
                            <span class="card-header-icon">
                                <div class="filters">
                                    ${
                                        Object.entries(this.filters).map(([key, value]) => html`
                                            <div class="select">
                                                <select @change=${e=>this.onSelectChangeHandler(e.target.value, key)}>
                                                    ${
                                                        value.map(v => html`
                                                            <option>${v}</option>
                                                        `)
                                                    }
                                                </select>
                                            </div>
                                        `)
                                    }
                                </div>
                            </span>
                        </div>
                        <div class="card-content">
                            ${
                                this.overviews.map(overview => html`
                                    <div class="columns">
                                        <div class="column">
                                            <div class="icon-container">
                                                <adaptive-ui-icon icon=${overview.icon}></adaptive-ui-icon>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <h5>${overview.label}</h5>
                                        </div>
                                        <div class="column">
                                            <h5>${overview.description}</h5>
                                        </div>
                                    </div>
                                `)
                            }
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(QuickOverview.is, QuickOverview);
