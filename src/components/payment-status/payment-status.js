import {css, html, LitElement, unsafeCSS} from 'lit-element';
import { PaymentStatusStyles } from './payment-status-css';
import globalStyles from '../../App.css?raw';
import { callAxios } from '../../core/mixins/http-mixin';

class PaymentStatus extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            PaymentStatusStyles,
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
            reference: String,
            status:String,
            iframeData: Object,
            activeStep: Number,
            parentLink:String

        };
    }

    constructor() {
        super();
        this.e = null;
        this.reference='';
        this.status='';
        this.activeStep='';
        this.parentLink='';
        
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('e')){
            this.parentLink=window.parent.location;
           
            const defaultvalue=this.e.defaultValue;
            this.status=this.e.details.post_data_label[1];
            this.reference=this.e.details.post_data_label[0];
 
         if(this.e.details.data_polling){
            this.mobilePollingStatus(defaultvalue);
         }
          
        }
    }

    onRetryClickHandler(){
      // // Update the active step and current feed
      // setActiveStep(index);
      // setCurrentFeed(index);
      
      // // Remove the items that are ahead of the selected index
      // setFeeds((prevFeeds) => prevFeeds.slice(0, index + 1));
      console.log("retrying");
      
      window.parent.postMessage({activeStep:0},'*');
    };



    async cardOrderStatus(defaultvalue){
        this.showLoader(); 
        const params={data_name:defaultvalue};
        // Assume `fetchOrderStatus` is a function that makes the API call
        const response = await callAxios(this.e.service,params);
        const responseStatus=response.response.response_status;

        const cols=response.response.response.data_source.cols;
        const rows=response.response.response.data_source.rows;

        if(responseStatus==="00"){
            const data=[...rows.map(row => Object.fromEntries(row.map((rowValue, index) => [cols[index].label, rowValue])))];
            console.log("card data",data)
            const status=data[0].status;
            const reference=data[0].reference;
            const purchaseId=data[0].purchase_order_id;
           
            if (status=== "PAID") {
             
                console.log("Order is paid. Stop polling.");
                this.hideLoader();
                // Handle "paid" status (hide loading widget, etc.)
                const post_data_label =this.e.details.post_data_label;
                const message={[post_data_label[0]]:purchaseId, [post_data_label[1]]:status};
           
                // Send a message to the parent window or form
              window.parent.postMessage({ message: message }, '*');
              this.hideLoader();
                return;
              }
        }else{
            console.log("Request Failed");
            this.showButton();
        }
    }

    mobilePollingStatus(defaultvalue) {
        this.showLoader(); 
        let elapsedTime = 0; // track the total time elapsed
        const pollingInterval = 3000; // 3 seconds
        const timeoutLimit = 60000; // 1 minute
      
        const intervalId = setInterval(async () => {
          try {
            const params={data_name:defaultvalue};
            // Assume `fetchOrderStatus` is a function that makes the API call
            const response = await callAxios(this.e.service,params);
            const cols=response.response.response.data_source.cols;
            const rows=response.response.response.data_source.rows;
            if(cols.length>0 && rows.length>0){
                const data=[...rows.map(row => Object.fromEntries(row.map((rowValue, index) => [cols[index].label, rowValue])))];
                const status=data[0].status;
                const reference=data[0].reference;
                const purchaseId=data[0].purchase_order_id;
                // If the status is PAID, clear the interval and proceed
    
                const responseStatus=response.response.response_status;
                if(responseStatus==="00"){
                    if (status === this.e.details.control_value) {
                        clearInterval(intervalId);
                        this.hideLoader();
                        console.log("Order is paid. Stop polling.");

                    // Handle "paid" status (hide loading widget, etc.)
                    const post_data_label =this.e.details.post_data_label;
             
                    const message={[post_data_label[0]]:purchaseId, [post_data_label[1]]:status};
                   
                    // Send a message to the parent window or form
                    window.parent.postMessage({ message: message }, '*');
                      return;
                    }
                }else{
                    "Request Failed"
                }
               
          
                // Update elapsed time and check if the timeout limit is reached
                elapsedTime += pollingInterval;
                if (elapsedTime >= timeoutLimit) {
                  clearInterval(intervalId);
                  this.hideLoader();
                  console.log("Timeout reached. Stop polling.");
                 this.showButton();
                  // Handle timeout scenario
    
                }
            }else{
                elapsedTime += pollingInterval;
                if (elapsedTime >= timeoutLimit) {
                  clearInterval(intervalId);
                  this.hideLoader();
                  console.log("Timeout reached. Stop polling.");
                  this.showButton();
                  // Handle timeout scenario
                }
            }
   
          } catch (error) {
            console.error("Error fetching order status:", error);
          
            // Optionally, you could clear the interval here or continue polling based on your error-handling needs
          }
        }, pollingInterval);
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
        return "payment-status";
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

customElements.define(PaymentStatus.is, PaymentStatus);