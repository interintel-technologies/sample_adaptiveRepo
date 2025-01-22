import { css, html, unsafeCSS } from 'lit-element';
import "./../text-input/text-input.js";
import "./../number-input/number-input.js";
import { AddProductServiceStyle } from './add-product-service-css';
import { AddProductServiceBase } from '../../base/elements/add-product-service.js';
import globalStyles from '../../App.css?raw';

class AddProductService extends AddProductServiceBase {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AddProductServiceStyle,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            productsServices: Array,
            e: { type: Object }
        };
    }

    constructor() {
        super();
        this.productsServices = [{
            description: "",
            quantity: undefined,
            unitPrice: undefined,
            subtotal: 0
        }];
        this.e = null;
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        console.log("element is add product ", this.e);
    }

    onInputHandler(event, index, key) {
        const value = event.target.value; 
        this.productsServices = [
            ...this.productsServices.slice(0, index),
            { ...this.productsServices[index], [key]: value },
            ...this.productsServices.slice(index + 1)
        ];
        this.performCalculations();
    }
    

    performCalculations() {
        let total = 0;

        this.productsServices = [...this.productsServices.map((productService, index) => {
            if (productService.quantity && productService.unitPrice) {
                productService.subtotal = productService.quantity * productService.unitPrice;
                total = total + productService.subtotal;

                const subtotalElement = this.shadowRoot.querySelector(`#subtotal${index}`);
                if (subtotalElement) {
                    subtotalElement.innerHTML = this.formatToKenyaShillings(productService.subtotal);
                }
            } else {
                const subtotalElement = this.shadowRoot.querySelector(`#subtotal${index}`);
                if (subtotalElement) {
                    subtotalElement.innerHTML = this.formatToKenyaShillings(0);
                }
            }
            return productService;
        })];

        const totalElement = this.shadowRoot.querySelector(`#total`);
        if (totalElement) {
            totalElement.innerHTML = this.formatToKenyaShillings(total);
        }
    }

    onNewLineClickHandler() {
        const newProductService = {
            description: "",
            quantity: undefined,
            unitPrice: undefined,
            subtotal: 0
        };

        this.productsServices = [...this.productsServices, newProductService];
    }

    onRemoveIconVisibility(index, isVisible) {
        const removeIcon = this.shadowRoot.querySelector("#removeIcon" + index);
        if (removeIcon) {
            removeIcon.setAttribute("style", `display: ${isVisible ? "block" : "none"};`);
        }
    }

    onRemoveIconClickHandler(index) {
        this.productsServices.splice(index, 1);
        this.productsServices = [...this.productsServices];
        this.performCalculations();
    } 

    valid() {
        const warningText = this.shadowRoot.querySelector("#warning-text");
        if (warningText) {
            warningText.style.display = 'none';
        }

        const inputWarnings = this.shadowRoot.querySelectorAll(".input-warning");
        inputWarnings.forEach(inputWarning => inputWarning.style.display = "none");
    }
    
    invalid() {
        const warningText = this.shadowRoot.querySelector("#warning-text");
        if (warningText) {
            warningText.style.display = 'block';
        }
    }

    onSaveAndSendBtnClickHandler() {
        let errors = false;
        this.value = [...this.productsServices];

        this.value.forEach((productService, index) => {
            const descriptionInput = this.shadowRoot.querySelector(`#descriptionInput${index}`);
            const quantityInput = this.shadowRoot.querySelector(`#quantityInput${index}`);
            const unitPriceInput = this.shadowRoot.querySelector(`#unitPriceInput${index}`);

            if (!productService.description || !productService.quantity || !productService.unitPrice) {
                if (descriptionInput) {
                    descriptionInput.setAttribute("validation", JSON.stringify({
                        isValid: !!productService.description,
                        validationMessage: productService.description ? "" : "Field is empty"
                    }));
                }
                if (quantityInput) {
                    quantityInput.setAttribute("validation", JSON.stringify({
                        isValid: !!productService.quantity,
                        validationMessage: productService.quantity ? "" : "Field is empty"
                    }));
                }
                if (unitPriceInput) {
                    unitPriceInput.setAttribute("validation", JSON.stringify({
                        isValid: !!productService.unitPrice,
                        validationMessage: productService.unitPrice ? "" : "Field is empty"
                    }));
                }
                errors = errors || !productService.description || !productService.quantity || !productService.unitPrice;
            }
        });

        if (!errors) {
            this.submitForm()
        }
    }

    static get is() {
        return "add-product-service";
    }

    render() {
        return html`
            <div class="content">
            <h4>${this.e.name}</h4>
                <div class="buttons">
                    <button id="addLineBtn" class="button is-dark" title="Add Line" @click=${this.onNewLineClickHandler}>+ Add Line</button>
                </div>
               
                <li class="column mainCol">
                ${this.productsServices.map((productService, index) => {
                    const descriptionId = `descriptionInput${index}`;
                    const quantityId = `quantityInput${index}`;
                    const unitPriceId = `unitPriceInput${index}`;
                    const subtotalId = `subtotal${index}`;
                
                    console.log(`Generated IDs: ${descriptionId}, ${quantityId}, ${unitPriceId}, ${subtotalId}`);
                
                    // Event Handlers
                    const handleRemoveClick = () => this.onRemoveIconClickHandler(index);
                
                    return html`
                    <div class="columns is-multiline line">
                    <div class="column is-12">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-12">    
                            <text-input  id="${descriptionId}" name="Description" 
                            @input=${(event) => this.onInputHandler(event, index, "description")}
                        ></text-input>
                        
                            </div>
                            <div class="column is-6">
                            <number-input  id="${quantityId}" name="Quantity" 
                            @input=${(event) => this.onInputHandler(event, index, "quantity")}
                        ></number-input>
                        
                            </div>
                            <div class="column is-6">
                                <number-input  id="${unitPriceId}" name="Unit Price" 
                                    @input=${(event) => this.onInputHandler(event, index, "unitPrice")}
                                ></number-input>
                            </div>
                        </div>
                    </div>
                    <div class="column is-12">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-8-desktop is-7-tablet is-3-mobile deleteCol" style="display:flex; justify-content:flex-end;">
                                ${index !== 0 ? html`
                                    <span class="icon is-small" id="deleteBtn" title="Remove" @click=${handleRemoveClick}>
                                        <i class="fa fa-trash fa-2x"></i>
                                    </span>
                                ` : ""}
                            </div>
                            <div class="column is-8-desktop is-7-tablet is-7-mobile subtotalCol"> 
                                <h6 style="text-align: right;" id="${subtotalId}">Subtotal:  <span class="bold">KES 0</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
                })}
                
            </li>
            
                <div class="totalDiv">
                    <h3 id="total">Total  <span class="bold">${this.formatToKenyaShillings(0)}</span></h3>
                </div>
                <div class="buttons">
                    <button id="cancelBtn" name="Cancel" class="button is-danger"  
                        @click=${() => this.pl.skipForm(this.e.service, this.e.formName, this.e.defaultValue)}
                    >
                        Cancel
                    </button>
                    <button id="saveSendBtn" title="Save & Send" class="button is-success"
                        @click=${this.onSaveAndSendBtnClickHandler}
                    >
                        Save and Send
                    </button>
                </div>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `;
    }
}

customElements.define(AddProductService.is, AddProductService);
