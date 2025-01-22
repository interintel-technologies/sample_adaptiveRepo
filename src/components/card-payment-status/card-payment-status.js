import {css, html, LitElement, unsafeCSS} from 'lit-element';
import { CardPaymentStatusStyles } from './card-payment-status-css';
import globalStyles from '../../App.css?raw';

class CardPaymentStatus extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            CardPaymentStatusStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            e: { type: Object },
            defaultKeyValues:Object

        };
    }

    constructor() {
        super();
        this.e = null;
      this.defaultKeyValues={};
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('e')){
        
        const defaultValue=this.e.defaultValue;
        const defaultValArr = defaultValue.trim().split(",");
        const defaultKeyValObj = {};
        for(var strValue of defaultValArr){
          var keyValArray = strValue.trim().split("=");
          defaultKeyValObj[keyValArray[0].trim()] = keyValArray[1].trim();
        }
  
        this.defaultKeyValues=defaultKeyValObj;
        this.cardOrderStatus(this.defaultKeyValues);
        }
    }

    onRetryClickHandler(){
      console.log("retrying");
      window.parent.postMessage({activeStep:0},'*');
    };

    

    cardOrderStatus(defaultKeyValObj){
        this.showLoader();      
          
            const status=defaultKeyValObj["status"] ;
            const reference=defaultKeyValObj["reference"];
            const purchaseOrderId=defaultKeyValObj["purchase_order_id"];
           
            if (status === "PAID") {
             
                console.log("Order is paid.");
                this.hideLoader();
                // Handle "paid" status (hide loading widget, etc.)
               
                const message={[Object.keys(defaultKeyValObj)[0]]:purchaseOrderId,[Object.keys(defaultKeyValObj)[1]]:reference,[Object.keys(defaultKeyValObj)[2]]:status};
           
                // Send a message to the parent window or form
              window.parent.postMessage({ message: message }, '*');
              this.hideLoader();
                return;
            }else{
                console.log("Request Failed");
                this.showButton();
            }    
    }

      showLoader() {
        this.shadowRoot.querySelector('#loader').style.display = 'flex';
        this.shadowRoot.querySelector('#loader').style.justifyContent = 'center';
      }
    
      hideLoader() {
        this.shadowRoot.querySelector('#loader').style.display = 'none';
      }

      showButton(){
        this.hideLoader()
        this.shadowRoot.querySelector('#alert').style.display='block';
        this.shadowRoot.querySelector('#alert').style.textAlign = 'center';
      }

    static get is() {
        return "card-payment-status";
    }

   

    render() {
       
        return html`
		<div id="payment status element">
        <div id="loader">
            <img src="/static/dsv3.0/images/web/tube-spinner.svg" alt="processing..">
        </div>
        <div id="alert">
          <p>Timeout Reached!!</p>
          <button id="retryBtn" @click=${()=>this.onRetryClickHandler()}>Retry</button>
        </div>
        </div>
        `;
    }

}

customElements.define(CardPaymentStatus.is, CardPaymentStatus);