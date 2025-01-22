import {LitElement,unsafeCSS,css, html} from 'lit-element';
import { SummaryCardStyles } from './summary-card-css';
import globalStyles from '../../App.css?raw';

class SummaryCard extends LitElement {
    static get properties() {
        return {
            rows:Array,
            cols:Array,
            groups:Array,
            e:Object,
            items:Array,
            isCurrency:Boolean
        }
    }

    constructor() {
        super();
        this.rows = [];
        this.cols = [];
        this.groups = []
        this.e = null;
        this.items=[];
        this.isCurrency=false;
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            SummaryCardStyles
        ];
    }

    static get is(){
        return 'summary-card';
    }

    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('cols')) {
            console.log("Updated properties:", this.cols, this.rows, this.e);
       
            this.items = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
            this.e.details.currency? this.isCurrency=true :this.isCurrency=false; 
        }
    }

    onBtnClickHandler(service,id){
console.log("service dispatched",service)
        this.dispatchEvent(new CustomEvent('service-call', {
            detail: {  service },
            bubbles: true,
            composed: true
        }));
    }


    render() {
        return html`
        <div class="container">
            <div class="card">
                <div class="columns is-mobile">
                    ${this.items.map((item,index)=>html`
                            <div class="column is-half" @click=${()=>this.onBtnClickHandler(item.service)}>
                            <div class="titleDiv" id="titleDiv-${index}">
                                <adaptive-ui-icon dataColor="var(--primary)" icon="${item.icon}"></adaptive-ui-icon>
                                <p class="ml-3">${item.action_name}</p>
                            </div>
                            <div class="svgDiv pl-2" id="svgDiv-${index}">
                                <p>${this.isCurrency? this.e.details.currency+' ' +item.value : item.value}</p>
                            </div>
                        </div>
                            `)}
                
                </div>                
            </div>
        </div>
        
        `;
    }

}

customElements.define(SummaryCard.is, SummaryCard);