import {css, html, LitElement} from 'lit-element';
import { TransactionSummaryStyles } from './transaction-summary-css';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';
import { PopUp } from '../../../../themes/dsv2.0/components/popups/PopUp';
import { POSPageMixin } from '../../POSPageMixin';

class TransactionSummary extends POSPageMixin(ThemeMixin(LitElement)) {
    static get styles() {
        return [
            super.styles,
            TransactionSummaryStyles,
            css`
                :host{
                    display:block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            transactionSummary: Object,
            emailAddress: String
        }
    }

    constructor() {
        super();
        this.transactionSummary = {};
        this.emailAddress = "";
    }

    firstUpdated(){
        this.initPrintJS();
    }

    initPrintJS() {
        const script = document.createElement( 'script' );
        script.src= "https://printjs-4de6.kxcdn.com/print.min.js";
        script.async = true; 
        script.defer = true;
        document.head.appendChild(script);
    }

    formatToKenyaShillings(value) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(value);
    }

    formatValues(index,value){
        if(index==0){

            const newvalue='#'+value;
            return newvalue;
        
        }else if(index==1){
            
            return value;
        }
        else if(index==2 || index==3 ||index==4){

            return this.formatToKenyaShillings(value);

        }else if(index==5){

            const newvalue='+'+value;
            return newvalue;
        }
        
    }

    onPrintReceiptBtnClickHandler() {
        printJS({
            printable: [this.summary],
            properties: Object.keys(this.summary),
            header: "InterIntel Receipt",
            type: "json",
        })
    }

    onCashDrawerBtnClickHandler() {
        PopUp.showStatusDialog("success", "Cash Drawer Opened");
    }

    onStartNewSaleClickHandler() {
        this.viewSidePanel("cart-panel");
    }

    static get is(){
        return 'transaction-summary';
    }

    render() {
        if(typeof this.summary === "string") {
            this.summary=JSON.parse(this.summary);
        }
        return html`
            <div class="content is-flex is-flex-direction-column is-align-items-center">
                ${
                    this.isLoading ? html`
                        <center>
                            <div class="load">
                                <span class="icon">
                                    <i class="fa-solid fa-spinner fa-spin"></i>
                                </span>
                                <p>Loading</p>
                            </div>
                        </center>
                    ` : html`
                        <span class="py-2 mb-4 ">
                            <i class="fas fa-6x fa-check-circle has-text-success" ></i>
                        </span>
                        <ul class="p-2">
                            ${
                                Object.entries(this.summary).map(([key, value], index) => html`
                                    <li>
                                        <div class="columns is-mobile mb-4">
                                            <div class="column is-6 labelCol" id="labelCol${index}">
                                                <h5 class="is-marginless is-size-6">${key}</h5>
                                            </div>    
                                            <div class="column is-6 valueCol" id="valueCol${index}">
                                                <h5 class="has-text-weight-light is-size-6 is-marginless">${this.formatValues(index,value)}</h5>
                                            </div>
                                        </div>
                                    </li>
                                `)
                            }
                        </ul>
                        <!-- <div class="is-flex mb-4" style="width: 100%;">
                            <input class="input" type="email" style="width: 60%;"  placeholder="Email address" @input=${e => this.emailAddress = e.target.value}>
                            <a href="mailto:${this.emailAddress}?subject=Receipt&body=${JSON.stringify(this.summary)}">
                                Send Email
                            </a>
                        </div> -->
                        <div class="columns is-mobile sendCol mb-5">
                                <div class="column is-8">
                                    <div class="control">
                                        <input class="input" type="text" @input=${e => this.emailAddress = e.target.value} placeholder="Email Address">
                                    </div>
                                </div>
                                <div class="column is-4">
                                    <button class="sendBtn py-4">
                                        Send Receipt
                                    </button>
                                </div>
                        </div>
                        <div class="is-flex mb-4" style="width: 100%;">
                            <button class="printBtn py-4" @click=${() => this.onPrintReceiptBtnClickHandler()}>
                                <span class="icon">
                                    <i class="fa fa-print"></i>
                                </span>
                                Print Receipt
                            </button>
                            <span class="px-3"></span>
                            <button class="drawerBtn py-2" @click=${() => this.onCashDrawerBtnClickHandler()}>
                                <span class="icon">
                                    <i class="fa fa-cash-register"></i>
                                </span>
                                Cash Drawer
                            </button>
                        </div>
                        <button class="saleBtn is-link py-2" @click=${() => this.onStartNewSaleClickHandler()}>
                            Start New Sale
                        </button>
                    `
                }
            </div>
        `;
    }
}

customElements.define(TransactionSummary.is, TransactionSummary);
