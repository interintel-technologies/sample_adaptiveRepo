import { html, css, unsafeCSS, LitElement } from 'lit-element';
import { StoreSummaryStyles } from './store-summary-css';
import globalStyles from '../../App.css?raw'

class StoreSummary extends LitElement {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            StoreSummaryStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }
    
    static get properties() {
        return {
            summaries: Array,
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        };
    }

    constructor() {
        super();
        this.summaries = [];
    }

  

    // firstUpdated() {
    //     this.loader.then(() => {
    //         this.summaries = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
    //     });
    // }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            this.summaries = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        }}

    getChangeTextColor(change) {
        if(change > 0) {
            return "green";
        }
        else if(change < 0){
            return "red"
        }
        else {
            return "black";
        }
    }

    renderChangeIcon (change) {
        let icon,fill;

        if(change > 0) {
            icon = "arrow-upward"
            fill="green";
        }
        else if(change < 0){
            icon = "arrow-downward"
            fill="red";
        }

        return change !== 0 ? html`<adaptive-ui-icon icon=${icon} style="fill: ${fill}"></adaptive-ui-icon>` : html``;
    }

    numberWithCommas(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static get is() {
        return "store-summary";
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-header-title">${this.e.name}</h5>
                        </div>
                        <div class="summaries">
                                ${
                                    this.summaries.map(summary => html`
                                        <div class="summary column">
                                            <h5>${summary.label}</h5>
                                            <h3>${this.numberWithCommas(summary.value)}</h3>
                                            <div class="is-flex">
                                                ${this.renderChangeIcon(summary.change)}
                                                <h5 style="color: ${this.getChangeTextColor(summary.change)};">
                                                    ${summary.change.toFixed(2)} %
                                                </h5>
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

customElements.define(StoreSummary.is, StoreSummary);