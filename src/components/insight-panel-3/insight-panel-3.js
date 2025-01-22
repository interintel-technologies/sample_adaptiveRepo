import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { InsightPanel3Styles } from './insight-panel-3-css';
import globalStyles from '../../App.css?raw';

class InsightPanel3 extends LitElement {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            InsightPanel3Styles,
            css`
                .insight-panel-2 {
                    padding: 16px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }
                .insight {
                    margin-bottom: 16px;
                }
                .is-size-7 {
                    font-size: 0.875rem;
                }
                .is-size-4 {
                    font-size: 1.5rem;
                }
                .has-text-weight-bold {
                    font-weight: bold;
                }
                .has-text-succ {
                    color: green;
                }
            `
        ];
    }

    static get properties() {
        return {
            insights: { type: Array },
            e: { type: Object },
            rows: { type: Array },
            cols: { type: Array }
        };
    }

    constructor() {
        super();
        this.insights = [];
        this.e = null;
        this.rows = [];
        this.cols = [];
    }

    static get is() {
        return 'insight-panel-3';
    }

    firstUpdated() {
        this._updateInsights();
    }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            this._updateInsights();
        }
        console.log("this insights", this.insights);
    }

    _updateInsights() {
        this.insights = this.rows.map(row => {
            return Object.fromEntries(row.map((rowValue, index) => {
                return [this.cols[index].label, rowValue];
            }));
        });
    }

    render() {
        return html`
            <div class="insight-panel-2 card">
                <div class="card-content is-flex">
                    ${this.insights.map((item, index) => html`
                        <div class="insight" key=${index}>
                            <p class="is-size-7">${item.insightTitle || 'Title not available'}</p>
                            <h5 class="is-size-4 has-text-weight-bold">${item.insightValue || 'Value not available'}</h5>
                            <p class="is-size-7 has-text-succ">${item.insightTrend || 'Trend not available'} <span class="icon"><i class="fa-solid fa-arrow-trend-up"></i></span></p>
                        </div>
                    `)}
                </div>
            </div>
        `;
    }
}

customElements.define(InsightPanel3.is, InsightPanel3);
