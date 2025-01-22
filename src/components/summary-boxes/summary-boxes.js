
import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { SummaryBoxesStyles } from './summary-boxes-css';
import '../datalist-element/components/loader-element/loader-element';
import graphPng from '../../../images/web/Graph.png';
import globalStyles from '../../App.css?raw'
import { SummaryBoxesBase } from '../../base/elements/summary-boxes';

class SummaryBoxes extends SummaryBoxesBase {

static get styles() {
    return [
        unsafeCSS(globalStyles),
        SummaryBoxesStyles,
       
    ];
}

static get properties() {
    return {
        loading: Boolean,
        rows:Array,
        cols:Array,
        groups:Array,


    };
}

constructor() {
    super();
    this.loading = false;
    this.rows = [];
    this.cols = [];
    this.groups = []
}


static get is() {
    return "summary-boxes";
}

_computeData(index) {
    console.log("this _computeData data ",this.data);
    
    return this.data[index];
}

_rowsOrColumns(cData) {
    if (cData === undefined) { return; }
    return cData.length;
}

onLoadData(dsc) {
    super.onLoadData(dsc);
}

render() {
    return html`
        <div class="">
            <div class="summary-content columns is-multiline is-mobile has-text-centered is-centered">
                
                ${this.loading ? html`
                    <loader-element></loader-element>
                `: html`
                ${!this._rowsOrColumns(this.rows) ? html`

                    ${this.groups.length == 0 ? html`
                        <empty-view 
                        message="${this.e.details.empty_message}"
                        gateway="${this.e.details.gateway}"
                        ></empty-view>
                        `: html`

                            ${this.groups.map((group, groupIndex) => html`
                                ${this.data.length == 0 ? html`

                                    <empty-view 
                                    message="${this.e.details.empty_message}"
                                    gateway="${this.e.details.gateway}"
                                    ></empty-view>
                        
                                `: html`
                                
                                <div class="cov column is-2-desktop is-5-tablet is-12-mobile" >

                                    ${this._computeData(groupIndex).map((item) => html`
                                            <div class="card">
                                                <div class="hdr">
                                                    <h1 class="title has-text-justified">${item.count}</h1>
                                                </div>
                                                <div class="graph">
                                                    <img src="${graphPng}"/>
                                                </div>
                                                <ul class="summary-details mt-5">
                                                    ${this.e.details.unit?html`
                                                        <li class="currency is-text-7 has-text-justified has-text-uppercase">${this.e.details.unit}</li>
                                                    `:html`
                                                    
                                                    `} 
                                                    <li class="summary-type has-text-justified has-text-capitalized">${item.description}</li>
                                                    <li class="summary-type has-text-justified has-text-capitalized">${item.kind}</li>
                                                    <li class="summary-type has-text-justified has-text-capitalized">${item.type}</li>
                                                    <li class="summary-type has-text-justified has-text-capitalized">${item.name}</li>
                                                </ul>
                                            </div>
                                    `)}
                                </div>
                            `}   

                        `)}
                                
                                
                        `}
                        
                    
                        `: html`
                    
                        <div class="row">
                            <div class="col-md-12">
                                <h1 style="text-align: center;">${this.title}</h1>
                            </div>
                        </div>
                    
                        ${this.rows.map((item) => html`
                            <div class="column sumCol">
                                <div class="summary-wrapper">
                                    <div class="graph">
                                        <img src="${graphPng}"/>
                                        <!-- <img src="../../../../../images/web/Screenshot.png" alt="profile image"> -->
                                    </div>
                                    <ul class="summary-details mt-5">
                                        <li><p class="currency is-text-7 has-text-justified has-text-uppercase">KES</p></li>
                                        <li><h1 class="title has-text-justified">${item.count}</h1></li>
                                        <li><p class="summary-type has-text-justified has-text-capitalized">${item.name}</p></li>
                                    </ul>
                                </div>
                            </div>
                        `)}
                    
                    `}
                `}    
            </div>
        </div>
    `;
}
}
customElements.define(SummaryBoxes.is, SummaryBoxes);