import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { StatsElement2Styles } from './stats-element-2-css';
import globalStyles from '../../App.css?raw';

class StatsElement2 extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles), 
            StatsElement2Styles,
            css``,
        ];
    }

    static get properties() {
        return {
            stats: Number,
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        };
    }

    constructor() {
        super();
        this.stats = [];
        this.rows = []
        this.cols = []

        this.e = null 
    }

    // firstUpdated() {
    //     this.loader.then(() => {
    //         this.stats = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
    //     });
    // }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
			this.stats = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        }}

    static get is() {
        return "stats-element-2";
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    <div class="columns">
                        ${
                            this.stats.map(stat => html`
                                <div class="column">
                                    <div class="card">
                                        <adaptive-ui-icon icon=${stat.icon}></adaptive-ui-icon>
                                        <h4>${stat.label}</h4>
                                        <h4><strong>${stat.value}</strong></h4>
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

customElements.define(StatsElement2.is, StatsElement2);
