
import { css, html, unsafeCSS } from 'lit-element';
import { DeliveryCheckboxStyles } from './delivery-checkbox-css';
import { DeliveryCheckboxBase } from '../../base/elements/delivery-checkbox';
import globalStyles from '../../App.css?raw';


class DeliveryCheckbox extends DeliveryCheckboxBase {

    static get styles () {
        return [
            unsafeCSS(globalStyles),
            DeliveryCheckboxStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            deliveryOptions:Array,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.deliveryOptions = [{
            id:`bike_rider`,
            icon:`motorcycle`,
            label:`Blade Rider`
        },{
            id:`van`,
            icon:`bus`,
            label:`Van`
        },{
            id:`truck`,
            icon:`truck`,
            label:`Truck`
        },{
            id:`air`,
            icon:`plane`,
            label:`Air`
        },{
            id:`shipping`,
            icon:`ship`,
            label:`Shipping`
        },{
            id:`no_delivery`,
            label:`I don't offer Delivery`
        }];
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    onCheckBoxClickHandler(value) {
        const checkedBoxes = this.shadowRoot.querySelectorAll("input:checked");
        if(value === "no_delivery") {
            checkedBoxes.forEach(checkedBox => {
                if(checkedBox.value !=="no_delivery") {
                    checkedBox.checked = false;
                }
            });
        }
        else {
            checkedBoxes.forEach(checkedBox => {
                if(checkedBox.value ==="no_delivery") {
                    checkedBox.checked = false;
                }
            });
        }
    }

    static get is() {
        return "delivery-checkbox";
    }

    render() {
        return html`
            <div class="content">
                <h5 class="label" style="margin-bottom:0;">${this.e[0]}</h5>
                <ul class="column">
                    ${
                        this.deliveryOptions.map((deliveryOption,index,array) => html`
                            ${
                                index+1 !== array.length ? html`
                                    <li class="is-flex">
                                        <div class="cont input-cont is-flex">
                                            <input type="checkbox" value=${deliveryOption.id} @click=${()=>this.onCheckBoxClickHandler(deliveryOption.id)}>
                                        </div>
                                        <div class="cont is-flex">
                                            <span class="icon has-text-primary">
                                                <i class="fa-solid fa-${deliveryOption.icon}"></i>
                                            </span>
                                        </div>
                                        <div class="cont label-cont is-flex">
                                            <h6>${deliveryOption.label}</h6>
                                        </div>
                                    </li>
                                ` : 
                                html`
                                    <li class="is-flex">
                                        <div class="cont input-cont is-flex">
                                            <input type="checkbox" value=${deliveryOption.id} @click=${()=>this.onCheckBoxClickHandler(deliveryOption.id)}>
                                        </div>
                                        <div id="last-label" class="cont label-cont is-flex">
                                            <h3 class="subtitle is-6">${deliveryOption.label}</h3>
                                        </div>
                                        <div class="cont is-flex">
                                        </div>
                                    </li>
                                `
                            }
                        `)
                    }
                </ul>
                <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `;
    } 
}

customElements.define(DeliveryCheckbox.is,DeliveryCheckbox);