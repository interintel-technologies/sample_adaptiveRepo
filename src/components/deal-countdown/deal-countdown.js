import {html, css, LitElement, unsafeCSS} from 'lit-element';
import { DealCountdownStyles } from './deal-countdown-css';
import globalStyles from '../../App.css?raw';

class DealCountdown extends LitElement {

    static get styles () {
        return [
            unsafeCSS(globalStyles),
            DealCountdownStyles,
            css`
                :host {
                    display: block;
                }
            `
        ]
    }

    static get properties() {
        return {
            days:Number,
            hours:Number,
            mins:Number,
            secs:Number,
            id:String,
            title:String,
            description:String,
            leftImage:String,
            rightImage:String,
            e: { type: Object }, // Assuming 'e' is passed as a property
            cols: { type: Array }, // Add 'cols' property
            rows: { type: Array }  // Add 'rows' property

        }
    }

    constructor() {
        super();
        this.days = 0;
        this.hours = 0;
        this.mins = 0;
        this.secs = 0;
        this.id = "";
        this.title = "";
        this.description = "";
        this.leftImage = "";
        this.rightImage = "";
    }

    updated(changedProperties) {
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows')
        ) {
    
            
            const deal = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));
            this.leftImage = deal.leftImage;
            this.rightImage = deal.rightImage;
            this.id = deal.id;
            this.title = deal.title;
            this.description = deal.description;
            this.countDown(deal.deadline);
        }
    }

    // firstUpdated(changedProperties) {
    //     super.firstUpdated(changedProperties);
    //     this.loader.then(()=>{
    //         const deal = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));
    //         this.leftImage = deal.leftImage;
    //         this.rightImage = deal.rightImage;
    //         this.id = deal.id;
    //         this.title = deal.title;
    //         this.description = deal.description;
    //         this.countDown(deal.deadline);
    //     })
    // };

    countDown(deadline) {
        const timeLeft = parseInt(deadline) - Date.now(); 

        this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setTimeout(()=>{ 
            this.countDown(deadline);
        },1000)
    }

    onShopNowClickHandler() {
        this.dispatchEvent(new CustomEvent('service-call', { 
            detail: { service: this.e.service, params: {id:this.id} },
            bubbles: true,
            composed: true 
        }));

    } 

    static get is() {
        return "deal-countdown";
    }

    render(){
        return html`
            <div class="level">
                <div class="level-item">
                    <img src="${this.leftImage}" class="image" />
                </div>
                <div class="level-item">
                    <div class="column content is-flex">
                        <div class="is-flex">
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.days}</p>
                                <p>Days</p>
                            </div>
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.hours}</p>
                                <p>Hours</p>
                            </div>
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.mins}</p>
                                <p>Mins</p>
                            </div>
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.secs}</p>
                                <p>Secs</p>
                            </div>
                        </div>
                        <h5 style="margin-top: 16px;">${this.title}</h5>
                        <h6>${this.description}</h6>
                        <button class="button is-primary" @click=${()=>this.onShopNowClickHandler()}>
                            Shop Now
                        </button>
                    </div>
                </div>
                <div class="level-item">
                    <img src="${this.rightImage}" class="image" />
                </div>
            </div>
        `;
    }
}


customElements.define(DealCountdown.is, DealCountdown);