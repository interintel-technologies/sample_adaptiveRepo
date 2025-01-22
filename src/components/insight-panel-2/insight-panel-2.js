import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { InsihtPanel2Styles } from './insight-panel-2-css';
import globalStyles from '../../App.css?raw';

class InsightPanel2 extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            InsihtPanel2Styles,
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
            `
        ];
    }

    static get is() {
        return 'insight-panel-2';
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

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
  
            this._updateInsights();
        }
    }

    _updateInsights() {
        this.insights = this.rows.map(row => {
            const insight = {};
            row.forEach((rowValue, index) => {
                const key = this.cols[index].label;
                insight[key] = rowValue;
            });
            return insight;
        });
    }

    render() {
        return html`
            <div class="insight-panel-2 card">
                <div class="card-content is-flex is-justify-content-space-between">
                    ${this.insights.map(item => html`
                        <div class="insight is-align-items-center px-6 is-flex is-justify-content-space-between">
                        <p class="is-size-7 has-text-weight-bold">${item.insightTitle}</p>
                        <h5 class="is-size-4 has-text-weight-bold">${item.insightValue}</h5>
                    </div>
                    `)}
                </div>
            </div>
        `;
    }
}

customElements.define(InsightPanel2.is, InsightPanel2);
