import { html } from "lit-html";
import { InsightPanel1Styles } from "./insight-panel-1-css";
import { LitElement } from "lit-element";

class InsightPanel1 extends LitElement {
    static get styles() {
        return [
            InsightPanel1Styles
        ];
    }

    static get is() {
        return 'insight-panel-1';
    }

    static get properties() {
        return {
            gateway: { type: Object },
            profile: { type: Object }
        };
    }

    constructor() {
        super();
        this.gateway = {};
        this.profile = null;  // Initialize profile as null
    }

    updated(changedProperties) {
        if (changedProperties.has('gateway')) {
            this.profile = this.gateway.profile ;

            console.log("this profile ",this.profile);
            
        }
    }

    getInitials(fName, lName) {
        if (!fName || !lName) return '';
        return `${fName[0]}${lName[0]}`;
    }

    logout(evt) {
        evt.preventDefault();
        window.location = '/logout/';
    }

    render() {
        if(this.profile){

            const { first_name, last_name, profile_photo, access_level } = this.profile;

            console.log("first name is ", first_name);
    
            return html`
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            ${!profile_photo ? html`
                            <div class="profile-initial is-rounded">
                                <p>${this.getInitials(first_name, last_name)}</p>
                            </div>
                            ` : html`
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="${profile_photo}" alt="Profile image">
                            </figure>
                            `}
                        </div>
                        <div class="media-content" style="overflow-y: hidden;">
                            <p class="title is-size-5">Welcome ${first_name}</p>
                            <p class="subtitle is-size-7">
                                ${access_level === 'admin' || access_level === 'administrator' ? 'Checkout' : html`<div style="cursor: pointer" @click=${e => this.logout(e)}>Sign Out</div>`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            
        }
   
    }
}

customElements.define(InsightPanel1.is, InsightPanel1);
