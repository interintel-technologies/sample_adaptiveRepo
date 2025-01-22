import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { ClientCounterStyles } from './client-counter-css';
import globalStyles from '../../App.css?raw';


class ClientCounter extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            ClientCounterStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            counter: Number,
            interval: Object,
            e: { type: Object }, // Add `e` as a property
            details: { type: Object }, // Add `details` as a property


        }
    }

    constructor() {
        super();
        this.e = null; // Initialize `e` to null
        this.counter = 0;
        this.details = {}; // Initialize `details` to an empty object

    }


    updated(changedProperties) {
        if (changedProperties.has('e')) {
            this.counterTrigger();
        window.addEventListener("scroll", () => this.counterTrigger());
        this.details = this.e.details;

        }
      }
    
    counterTrigger() {
        const columnStartPosition = this.shadowRoot.querySelector('.content').getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.4 ;
        
        if(columnStartPosition < screenPosition){
            setTimeout(() => this.startCounter(), 300);
        }
    }

    startCounter() {
        const limit = this.e.defaultValue;
        const speed = 200;
        const time = limit / speed;
        this.interval = setInterval(()=>this.updateCounter(limit, time), time);
    }
    
    updateCounter(limit, time){
        this.counter = Math.ceil(this.counter + time);;
        if(this.counter>limit)
        {
            this.counter = limit;
            clearInterval(this.interval);
        }
    }

    static get is() {
        return "client-counter";
    }

    render() {
        return html`
            <div class="content">
                <div class="card">
                    <div class="card-content">
                        <div class="is-flex">
                            <adaptive-ui-icon icon="${this.e.icon}"></adaptive-ui-icon>
                            <h2>${this.counter}</h2>
                        </div>
                         <h5>${this.details}</h5>
                        <p>${this.details.description}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define(ClientCounter.is, ClientCounter);
