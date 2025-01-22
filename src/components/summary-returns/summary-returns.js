import {css, html, LitElement, unsafeCSS} from 'lit-element';
import { SummaryReturnsStyles } from './summary-returns-css';
import globalStyles from '../../App.css?raw'

class SummaryReturns extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            SummaryReturnsStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            items: Array,
            filters: Object,
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        }
    }

    constructor() {
        super();
        this.items = [];
        this.filters={};
    }


    updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            console.log('this.e is :', this.e);
            this.filters = this.e.details.filters;
            console.log(this.filters);
            this.items = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        }}
   

    static get is(){
        return 'summary-returns';
    }

    onSelectChangeHandler(value, key) {
        console.log("value ",value);
        
        // this.updateParams(key, value);
    }

    convertStr(val){
        let numberOnly = val.replace(/^\./, "").replace(/[^\d.]+(?!\d)/g, "");
        if (numberOnly.charAt(0) === '.') {
            numberOnly = numberOnly.substr(1);
        }
        return parseFloat(numberOnly);
    }

    calculatePercentage(oldValue, newValue){
        const calc = (((this.convertStr(newValue)) - this.convertStr(oldValue)) / this.convertStr(newValue))*100;
        return calc;
    }

    render() {
        return html`
        <div class="summary-container">
            <div class="columns mt-2" id="headCol">
                <div class="column is-half" id="head1">
                    <h5>Summary Returns</h5>
                </div>
                <div class="column is-half" id="head2">
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
                </div>
            </div>

            <div class="content columns">
                ${this.items.map(item => html`
                <div class="column summary-card">
                    <div class="info_container">
                        <div class="summary-flex is-flex" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="info info-left">
                                <p class="summary-title">${item.label}</p>
                                <p class="summary-value">${item.value}</p>
                            </div>
                            <div class="info info-right">
                                ${item.value == item.preValue || this.calculatePercentage(item.preValue, item.value).toFixed(2) === 0? html`
                                    <img src='assets/svgs/Flat.svg'>
                                    ` : item.value < item.preValue ? html`
                                        <img src='assets/svgs/Decrement.svg'>
                                    ` : item.value > item.preValue ? html`
                                        <img src='assets/svgs/Increment.svg'>
                                    ` : html``
                                }
                            </div>
                        </div>
                        <footer class="summary-footer">
                            <p class="summary-comparison">${this.calculatePercentage(item.preValue, item.value).toFixed(2)}% compared to last month</p>
                            ${console.log()}
                        </footer>
                    </div>
                </div>
                `)}
            </div>
        </div>
        `;
    }

}

customElements.define(SummaryReturns.is, SummaryReturns);