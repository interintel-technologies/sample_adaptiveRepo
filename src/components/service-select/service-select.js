import {html, css,unsafeCSS, LitElement} from 'lit-element';
import { ServiceSelectStyles } from './service-select-css';
import globalStyles from '../../App.css?raw'
class ServiceSelect extends LitElement{

    static get styles(){
        return [unsafeCSS(globalStyles),ServiceSelectStyles]
    }

    static get properties() {
        return {
            services:Array,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },

        }
    }

    constructor() {
        super();
        this.services = [];
        this.rows = [];
        this.cols = [];
        this.e = null;
    }



    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('cols')) {            
            this.services = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
        }
    }


    static get is() {
        return 'service-select'
    }

    render() {
        return html`
            <div class='column content'>
                <h3 class="has-text-centered">${this.e.name}</h3>
                <div class="columns is-centered" style="margin: 0;">
                    ${
                        this.services.map(service => html`   
                            <a class="column is-3" href="${service.url}" target="_blank"> 
                                <div class="card">
                                    <div class="card-content">
                                        <span class="is-flex" style="justify-content: center;">
                                            <adaptive-ui-icon icon=${service.icon} style="fill: ${service.color};"></adaptive-ui-icon>    
                                        </span>
                                    </div>
                                    <footer class="card-footer" style="justify-content: center;">
                                        <h4 class="has-text-centered mt-1">${service.name}</h4>
                                    </footer>
                                </div>
                            </a>
                        `)
                    }
                </div>
            </div>
        `
    }
}


customElements.define(ServiceSelect.is, ServiceSelect);
