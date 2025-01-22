
import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { AccountDetailsStyles } from './account-details-css';
import globalStyles from '../../App.css?raw';

class AccountDetails extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AccountDetailsStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            account: Object,
            columns: { type: Array },
            rows: { type: Array },
        }
    }

    firstUpdated() {
        this.loader.then(() => {
            this.account = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));
        });
    }

    updated(changedProperties) {
        if (
          changedProperties.has('cols') ||
          changedProperties.has('rows') ||
          changedProperties.has('e')
        ) {

            
            this.account = Object.fromEntries(this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue]));
         
        }
      }

    static get is() {
        return "account-details"
    }

    render() {
        return html`
            <div class="content">
                <div class="card">
                    ${
                        this.account ? html`
                            <div class="card-header">
                                <h4 class="card-header-title">My Account Details</h4>
                            </div>
                            <div class="card-content">
                                <div class="columns">
                                    <div class="column is-3">
                                        <figure class="image">
                                            <img src="${this.account.image}">
                                        </figure>
                                    </div>
                                    <div class="column is-9">
                                        ${
                                            Object.entries(this.account).filter(([key]) => key !== "image").map(([key, value]) => html`
                                                <div class="columns">
                                                    <div class="column is-4">
                                                        <h5>${key} : </h5>
                                                    </div>
                                                    <div class="column is-8">
                                                        ${
                                                            typeof value === "object" ? html`
                                                                <ul>
                                                                    ${
                                                                        Object.values(value).map(item => html`
                                                                            <li>
                                                                                <h5>${item}</h5>
                                                                            </li>
                                                                        `)
                                                                    }
                                                                </ul>
                                                            ` : html`<h5>${value}</h5>`
                                                        }
                                                    </div>
                                                </div>
                                            `)
                                        }
                                    </div>
                                </div>
                            </div>
                        ` : ""
                    }
                </div>
            </div>
        `;
    }
}

customElements.define(AccountDetails.is, AccountDetails);
