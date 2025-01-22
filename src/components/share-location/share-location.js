import { html } from "lit-html";
import { ShareLocationStyles } from './share-location-css';
import { ShareLocationBase } from "../../base/elements/share-location";
import globalStyles from '../../App.css?raw'
import { unsafeCSS } from "lit-element";
class ShareLocation extends ShareLocationBase{

    static get styles () {
        return [unsafeCSS(globalStyles),ShareLocationStyles]
    }

    static get properties () {
        return {
            latitude        : String,
            longitude       : String,
            status          : String
        }
    }

    constructor () {
        super ();
        this.latitude       = '';
        this.longitude      = '';
        this.status         = '';
    }

    static get is () {
        return 'share-location'
    }

    captureLocation(){
        if ( navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition( position => {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;

                this.value = {
                    "long"     : this.longitude, 
                    "lat"      : this.latitude
                };
            } )
        } else {
            this.status = "Geolocation is not supported."
        }
    }
    
    render () {
        return html `
        <div class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
            <div>
                <div class="logger-center is-flex is-justify-content-center is-align-items-center">
                    <div class="location-icon is-flex is-justify-content-center is-align-items-center mb-6">
                        <span class="icon">
                            <i class="fa-solid fas fa-lg fa-location-dot"></i>
                        </span>
                    </div>
                    ${this.longitude && this.latitude ? html `<p>Location captured</p>
                    `: html `
                    <button @click = ${this.captureLocation} class="button is-link is-fullwidth">Share your location</button>
                    `}
                </div>
                <p>${this.status}</p>
            </div>
        </div>
        `
    }
}

customElements.define(ShareLocation.is, ShareLocation);