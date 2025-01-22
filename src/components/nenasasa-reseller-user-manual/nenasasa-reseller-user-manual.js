import { html, css, unsafeCSS } from 'lit-element';
import { NenaSasaResellerUserManualStyles } from './nenasasa-reseller-user-manual-css';
import { SectionPElementBase } from '../../base/elements/section-pelement';
import globalStyles from '../../App.css?raw';

class NenaSasaResellerUserManual extends SectionPElementBase{
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            NenaSasaResellerUserManualStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    accordionContentVisibility(id) {
        const accordionContent = this.shadowRoot.querySelector("#cardContent"+id);
        const arrowIcon = this.shadowRoot.querySelector("#arrow"+id);
        
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            arrowIcon.classList.toggle("rotate-icon");
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            arrowIcon.classList.toggle("rotate-icon");
        }
    }
    
    static get is() {
        return "nenasasa-reseller-user-manual";
    }

    render() {
        return html`
	    	<div class="content">
                <div class="column content">
                    <h2>NenaSasa Reseller Guide</h2>
                    <hr>
                    <h3>Let's get you started</h3>
                    <ul class="cards-list">
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(1)}>
                                <h4 class="card-header-title">1. Who is a reseller</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow1"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <div id="cardContent1" class="card-content hide-accordion-content">
                                <p>
                                    A Nenasasa reseller purchases sms in bulk with the aim of not consuming the bought sms but selling to their clients for a profit. A reseller might have both individual and business clients and buys bulk
                                </p>
                            </div>
                        </li>
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(2)}>
                                <h4 class="card-header-title">2. What you need in order to be a reseller</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow2"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ul id="cardContent2" class="card-content hide-accordion-content">
                                <li>
                                    <p>A Nenasasa account</p>
                                </li>
                                <li>
                                    <p>Float (bulk sms to sell to your clients)</p>
                                </li>
                                <li>
                                    <p>Client list</p>
                                </li>
                                <li>
                                    <p>Clients registration certificate and authorization letter ( when requesting for them short-codes from Safaricom)</p>
                                </li>
                                <li>
                                    <p>A payment method to purchase the bulk sms</p>
                                </li>
                            </ul>
                        </li>
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(3)}>
                                <h4 class="card-header-title">3. How do I add a new Reseller Account ?</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow3"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ol id="cardContent3" class="card-content hide-accordion-content">
                                <li>
                                    <h5>Click on Reseller Account on right side panel > Add New Account</h5>
                                    <p>This is illustrated in the image below</p>
                                    <img src="https://user-images.githubusercontent.com/31030432/154029173-f9c660e0-8545-4d33-ae7e-9ea6c3db7b82.png" alt="create account"/> 
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <img src="src/themes/dsv1.0/img/isometic/banner.png" alt="banner"/>
                    <h3>Your Reseller Account</h3>
                    <ul class="cards-list">
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(4)}>
                                <h4 class="card-header-title">1. How to purchase SMS Float</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow4"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ol id="cardContent4" class="card-content hide-accordion-content">
                                <li>
                                    <h5>Navigate to Float> Purchase Float > Select SMS option</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/1.png" alt="SMS option"/> 
                                </li>
                                <li>
                                    <h5>Choose a suitable rate for your reselling needs. There are discounts on purchases of more than Ksh.50,000</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/2.png" alt="suitable rate"/> 
                                </li>
                                <li>
                                    <h5>Purchase</h5>
                                </li>
                                <li>
                                    <h5>View the purchase report</h5>
                                    <h5>Navigate to Float>Purchase report</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/3.png" alt="purchase report"/> 
                                </li>
                            </ol>
                        </li>
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(5)}>
                                <h4 class="card-header-title">2. How to purchase Email Float</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow5"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ol id="cardContent5" class="card-content hide-accordion-content">
                                <li>
                                    <h5>Navigate to Float > Purchase Float > Select Email option</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/4.png" alt="purchase Email option"/> 
                                </li>
                                <li>
                                    <h5>Choose a suitable rate for your reselling needs. There are discounts on purchases of more than Ksh.50,000</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/2.png" alt="suitable rate"/> 
                                </li>
                            </ol>
                        </li>
                        <!-- Add this as a topic but leave blank for now -->
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(6)}>
                                <h4 class="card-header-title">3. How to make payments on your float purchase</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow6"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ol id="cardContent6" class="card-content hide-accordion-content">
                            </ol>
                        </li>
                        <!--  -->
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(7)}>
                                <h4 class="card-header-title">4. How to add your clients</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow7"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ol id="cardContent7" class="card-content hide-accordion-content">
                                <li>
                                    <h5>Navigate to Clients > Create</h5>
                                    <h5>Add the clients details and click the create button</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/5.png" alt="create client"/> 
                                </li>
                                <li>
                                    <h5>Navigate to Clients> List Clients to view the all the clients created</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/6.png" alt="all clients"/> 
                                </li>
                            </ol>
                        </li>
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(8)}>
                                <h4 class="card-header-title">5. How to allocate float to your clients</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow8"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ol id="cardContent8" class="card-content hide-accordion-content">
                                <li>
                                    <h5>Navigate to Account Requests> Client Float Allocation</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/7.png" alt="Client Float Allocation"/> 
                                </li>
                                <li>
                                    <h5>Select a client from the dropdown list</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/8.png" alt="Select a client"/> 
                                </li>
                                <li>
                                    <h5>Enter float amount</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/9.png" alt="Enter float amount"/> 
                                </li>
                                <li>
                                    <h5>Select product type from the dropdown list and click next</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/10.png" alt="Select product type"/> 
                                </li>
                            </ol>
                        </li>
                        <li class="card">
                            <div class="card-header" @click=${()=>this.accordionContentVisibility(9)}>
                                <h4 class="card-header-title">6. Request Sender ID for your clients</h4>
                                <span class="card-header-icon" aria-label="more options">
                                    <adaptive-ui-icon id=${"arrow9"} icon="arrow-drop-down" class="arrow-icon"></adaptive-ui-icon>
                                </span>
                            </div>
                            <ol id="cardContent9" class="card-content hide-accordion-content">
                                <li>
                                    <h5>Navigate to Account Requests> Short Code Request</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/11.png" alt="Short Code Request"/> 
                                </li>
                                <li>
                                    <h5>Select Client from the dropdown list</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/12.png" alt="client dropdown"/> 
                                </li>
                                <li>
                                    <h5>Enter the short code to request</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/13.png" alt="Enter the short code "/> 
                                </li>
                                <li>
                                    <h5>Attach the authorization letter and registration certificate and click submit</h5>
                                    <img src="src/themes/dsv1.0/img/user-manual/14.png" alt="Attach the authorization letter"/> 
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define(NenaSasaResellerUserManual.is, NenaSasaResellerUserManual);
