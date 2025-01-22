import {html,css,unsafeCSS, LitElement} from 'lit-element';
import { ListElement4Styles } from './list-element-4-css';
import globalStyles from '../../App.css?raw'

export class ListElement4 extends LitElement {
    static get styles() {
        return [unsafeCSS(globalStyles),
			ListElement4Styles
		];
    }


    
    constructor() {
        super();
        this.searchText = '';
        this.rows = [],
        this.cols = [],
		this.e = null
    }

    static get properties() {
        return {
          
            rows: {type: Array},
            e: {type: Object},
            cols: {type: Array},


        };
    }

 


    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label === columnLabel); 
    }

    formatPrice(value) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(value);
    }

    static get is() {
        return 'list-element-4';
    }

    render() {
        return html`
        <div class="content">
            <div class="column content">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-header-title">${this.e.name}</h4>
                    </div> 
                    <ul class="card-content">
                        ${
                            this.rows.map(row=>html`
                                <li class="content">
                                    <h5>${row[this.getIndexByColumnLabel("name")]}</h5>
                                    <div class="is-flex" style="justify-content: space-between">
                                        <h5>${row[this.getIndexByColumnLabel("label")]}</h5>
                                        <h5>${this.e.details.isValueCurrency ? this.formatPrice(row[this.getIndexByColumnLabel("value")]) : row[this.getIndexByColumnLabel("value")]}</h5>
                                    </div>
                                </li>
                            `)
                        }
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define(ListElement4.is, ListElement4);