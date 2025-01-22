import {css, html, LitElement, unsafeCSS} from 'lit-element';
import { UserInfoStyles } from './user-info-css';
import globalStyles from '../../App.css?raw';


class UserInfo extends LitElement{
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            UserInfoStyles,
            css`
                :host{
                    display:block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            UserDetails:Array,
            columns: { type: Array },
            rows: { type: Array },
            gatewayDetails: { type: Object },
            e: { type: Object },
        }
    }

    constructor() {
        super();
        this.UserDetails=[];
        this.columns = [];
        this.rows = [];
        this.e = null; // Default structure
    
    
    }


    updated(changedProperties) {
        if (
            changedProperties.has('columns') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {
            this.UserDetails = [
                ...this.rows.map(row => 
                    Object.fromEntries(row.map((rowValue, index) => 
                        [this.columns[index].label, rowValue]
                    ))
                )
            ][0];
        }
    }
    
    static get is(){
        return 'user-info';
    }

    render() {
        return html`
            <div class="content">
                <div class="mainInfo">
                    <div class="avtr has-text-centered">
                        <span class="icon">
                            <i class="fas fa-user-circle fa-5x"></i>
                        </span>
                        <div class="name">
                            <h4>${this.rows[0][1]}</h4>
                        </div>
                    </div>
                    <div class="columns is-mobile details is-multiline">
                        <div class="column is-6 is-6-mobile">
                            <h5>
                                <span class="icon ">
                                <i class="fas fa-envelope"></i>
                                </span>
                                Email: <span class="has-text-weight-light ml-2">${this.rows[0][2]}</<span>
                            </h5>
                        </div>    
                        <div class="column is-6 is-6-mobile">
                            <h5>
                                <span class="icon ">
                                <i class="fas fa-map-marker"></i>
                                </span>
                                Address: <span class="has-text-weight-light ml-2">${this.rows[0][3]}</span>
                            </h5>
                        </div>
                        <div class="column is-6 is-6-mobile">
                            <h5>
                                <span class="icon">
                                <i class="fas fa-phone"></i>
                                </span>
                                Phone: <span class="has-text-weight-light ml-2">${this.rows[0][4]}</span>
                            </h5>
                        </div>
                        <div class="column is-6 is-6-mobile">
                            <h5>
                                <span class="icon  ">
                                <i class="fas fa-barcode"></i>
                                </span>
                                CustomerID: <span class="has-text-weight-light ml-2">${this.rows[0][5]}</span>
                            </h5>
                        </div>
                    </div>

                    <div class="columns otherDetails is-mobile is-multiline">
                        ${
                            Object.entries(this.UserDetails).slice(6,-5).map(([key, value]) => html`
                            <div class="column is-one-fifth-desktop is-6-mobile p-5">
                                <h4>${value}</h4>
                                <h5 class="has-text-weight-light is-text-capitalized">${key}</h5>
                            </div>
                            `)
                        }
                       
                    </div>

                    <div class="columns is-multiline ftr is-mobile">
                        ${
                            Object.entries(this.UserDetails).slice(-5).map(([key, value]) =>html`
                                <div class="column is-one-fifth-desktop is-6-mobile py-3 px-4" title="${key}">
                                    <h5><a href="${value}">${key}</a></h5>
                                </div>
                            `)
                        }
                          
                    </div>
                 
                </div>
            </div>
        `;
    }

}

customElements.define(UserInfo.is, UserInfo);