import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { SummaryTabsStyles } from './summary-tabs-css';
import '../select-element/select-element';
import globalStyles from '../../App.css?raw'

export class SummaryTabs extends LitElement {
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            SummaryTabsStyles,
            css`
                :host {
                    display:block;
                }
            `];
    }

    static get properties() {
        return {
            summaryTabs: Array,
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },  
        };
    }

    constructor() {
        super();
        this.summaryTabs = [1, 2, 3, 4, 5];
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            this.updateRows();
        }
    }

    updateRows(){
        this.summaryTabs = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        this.summaryTabs = [...this.summaryTabs.map((summaryTab, index, array) => {
            summaryTab.color = this.randomColorGenerator(array.length, index);
            return summaryTab;
        })];
    }


    static get is() {
        return "summary-tabs";
    }

    randomColorGenerator(arrayLength, index) {
        const hue = Math.floor((index / arrayLength) * 360);
        return `hsl(${hue}, 100%, 70%)`;
    }

    updateParams(key, value) {
        this.summaryTabs = this.summaryTabs.filter(tab => tab[key] === value);
        this.requestUpdate();
    }

    hexToRGBA(hex, alf) {
        if (!hex || typeof hex !== 'string' || hex.length < 7 || hex[0] !== '#') {
            return '';
        }

        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16); 
        
        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            return '';
        }

        return `rgba(${r}, ${g}, ${b}, ${alf})`;
    }

    createSelectFilters() {
        const columnsWithFilters = this.cols.filter(col => col.filters);
        const onSelectFilterChangeHandler = (key, value) => {
            this.updateParams(key, value);
        };
    
        return html`
            <div class="select-filters columns is-mobile is-multiline">
                ${columnsWithFilters.map(col => html`
                <div class="column is-half-mobile">
                    <select-element  .options=${col.filters.map(filter => ({ value: filter, label: filter }))} 
                        @on-change=${e => onSelectFilterChangeHandler(col.value, e.detail.target.value)} >
                    </select-element>
                </div>
                `)}
            </div>
        `;
    }

    render () {
        return html`
            <div class="column content">
                <div class="level is-align-items-flex-start">
					<div class="level-left">
						<div class="level-item">
							<h4>${this.e.name}</h4>
						</div>
					</div>
                    <div class="level-right">
                        ${this.createSelectFilters()}
					</div>
				</div>
                <div class="columns is-mobile is-multiline">
                    ${this.summaryTabs.map(summaryTab => html`
                        <div class="column card-cont is-half-mobile">
                            <div class="card summary_card">
                                <div class="card-content is-flex">
                                   <span class="icon icon_cont">
                                        <adaptive-ui-icon icon=${summaryTab.icon}></adaptive-ui-icon>
                                    </span>

                                    <div class="summary-content">
                                        <h4>${summaryTab.label}</h4>
                                        <p>${summaryTab.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        `;
    }
}

customElements.define(SummaryTabs.is, SummaryTabs);
