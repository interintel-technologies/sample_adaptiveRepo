
import { html, css,unsafeCSS, LitElement} from 'lit-element';
import { PaymentsPageBarStyles } from './payments-page-bar-css';
import safcomSvg from '../../svgs/safaricom.svg';
import telkomSvg from '../../svgs/telkom.svg';
import airtelSvg from '../../svgs/airtel.svg';
import globalStyles from '../../App.css?raw'

class PaymentsPageBar extends LitElement {

    static get styles() {
        return [unsafeCSS(globalStyles), PaymentsPageBarStyles];
    }

    firstUpdated() {
        const feed = JSON.parse(`{"title":"Conveniently buy Airtel-Telkom-Safaricom Airtime using Paybill<br> <span class='numberSpan' style='color: #1065B3'> 339 339</span><br> and your Phone Number as the <span style='color: #1065B3'>Account Number</span><br><br><span class='support'>Support: <span style='color: #1065B3'>0769-339-399/0789-399-399</span></span>","services":"<img src=${telkomSvg}> &ensp; <img src=${safcomSvg}> &ensp; <img src=${airtelSvg}>","heroImage":"https://i.postimg.cc/q7Q76BRk/woman-holds-modern-mobile-phone-surfs-net-checks-newsfeed-social-networks-wears-headband-white-shirt.png"}`)
        this.image          = feed.heroImage;
        this.title          = feed.title;
        this.services       = feed.services;

        this.shadowRoot.querySelector('img').src = this.image;
        this.shadowRoot.querySelector('h2').innerHTML = this.title; 
        this.shadowRoot.querySelector('.services').innerHTML = this.services
    }

    static get is() {
        return "payments-page-bar";
    }

    render() {
        return html`
           <div class="columns is-mobile payments-banner-container">
            <div class="column is-5 imgCol">
                <img class="img" src="/media/${this.image}" alt=""/>
            </div>
            <div class="column content hero-content is-flex is-justify-content-center">
                <h2></h2>
                <div class="services"></div>
            </div>
           </div>
        `;
    }
}

customElements.define(PaymentsPageBar.is, PaymentsPageBar);
