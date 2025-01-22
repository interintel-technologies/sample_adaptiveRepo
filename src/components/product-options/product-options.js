
import { html, css, unsafeCSS } from 'lit-element';
import { ProductOptionsBase } from '../../base/elements/product-options';
import { ProductOptionsStyles } from './product-options-css';
import globalStyles from '../../App.css?raw';

class ProductOptions extends ProductOptionsBase {

    static get styles() {
        return [unsafeCSS(globalStyles),ProductOptionsStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            attributes: Array,
            packs: Array,
            defaultAttributes: Array,
            defaultPacks: Array,
            editAttribute: String,
            editAttributeValue: String,
            editPack: String,
            editPackValue: String,
            productOptions: Array,
            finalProductOptions: Array,
            selectedPackName: String,
            data:Object,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.attributes = [];
        this.packs = [];
        this.defaultAttributes = [];
        this.defaultPacks = [];
        this.editAttribute = "";
        this.editAttributeValue = "";
        this.editPack = "";
        this.editPackValue = "";
        this.productOptions = [];
        this.data={};
        this.rows = [];
        this.cols = [];
        if(JSON.stringify())
        this.selectedPackName = "";
        this.finalProductOptions = [];
    }

    updated(changedProperties) {
		if (changedProperties.has('e') || changedProperties.has('cols')) {
   
            

            this.attributes = this.e.details.attributes.map(attribute => ({...attribute, value: []}));
            // this.packs = this.e.details.packs.map(pack => ({...pack, value: []}));
           
            
              
                this.productOptions = this.data.map(option => Object.fromEntries(Object.entries(option).map(([key, value]) => {
                    // if(key === "pack") {
                    //     return ["packs", [value]];
                    // }
                    return [key, value];
                })));
                this.finalProductOptions = [...this.productOptions];
    console.log(this.productOptions[0])
                if(this.productOptions.length > 0) {
                    this.shadowRoot.querySelector("#createOptions").classList.add("is-hidden");
                }
    }}


//     firstUpdated(changedProperties) {
//         super.firstUpdated(changedProperties);

//         this.attributes = this.e.details.attributes.map(attribute => ({...attribute, value: []}));
//         // this.packs = this.e.details.packs.map(pack => ({...pack, value: []}));
       
        
          
//             this.productOptions = this.data.map(option => Object.fromEntries(Object.entries(option).map(([key, value]) => {
//                 // if(key === "pack") {
//                 //     return ["packs", [value]];
//                 // }
//                 return [key, value];
//             })));
//             this.finalProductOptions = [...this.productOptions];
// console.log(this.productOptions[0])
//             if(this.productOptions.length > 0) {
//                 this.shadowRoot.querySelector("#createOptions").classList.add("is-hidden");
//             }
      
        
//     }

    onAddAttributeValueClickHandler(attributeName) {
        this.editAttribute = attributeName;

        this.updateComplete.then(() => {
            const attributeInput = this.shadowRoot.querySelector("#attributeInput");
            attributeInput.value = "";
            this.editAttributeValue = "";
        });
    }

    onAddPackValueClickHandler(packName) {
        this.editPack = packName;
        
        this.updateComplete.then(() => {
            const packQuantityInput = this.shadowRoot.querySelector("#packQuantityInput");
            const packContainSelect = this.shadowRoot.querySelector("#packContainSelect");

            packQuantityInput.value = "";
            this.editPackValue = undefined;
        });
    }

    onToggleAttributeClickHandler(attributeName) {
        // const firstAttribute = this.defaultAttributes.filter(attribute => attribute.name === attributeName)[0];
        const currentAttribute = this.attributes.filter(attribute => attribute.name === attributeName)[0];

        this.attributes = [...this.attributes.map(attribute => {
            if(attribute.name === attributeName) {
                // return {...attribute, value: currentAttribute.value.length > 0 ? [] : firstAttribute.value};
                return {...attribute, value: []};
            }
            
            return attribute;
        })];

        // if(!firstAttribute.value.length > 0) {
        //     this.onAddAttributeValueClickHandler(attributeName);
        // }
        if(currentAttribute.value.length === 0) {
            this.onAddAttributeValueClickHandler(attributeName);
        }
    }

    onTogglePackClickHandler(packName) {
        // const firstPack = this.defaultPacks.filter(pack => pack.name === packName)[0];
        const currentPack = this.packs.filter(pack => pack.name === packName)[0];
        
        this.packs = [...this.packs.map(pack => {
            if(pack.name === packName) {
                return {...pack, value: []};
                // return {...pack, value: currentPack.value ? null : firstPack.value};
            }

            return pack;
        })];

        // if(!firstAttribute.value.length > 0) {
        //     this.onAddAttributeValueClickHandler(attributeName);
        // }
        if(currentPack.value.length === 0) {
            this.onAddPackValueClickHandler(packName);
        }
    }

    onDeleteAttributeValuesClickHandler(attributeName) {
        this.attributes = [...this.attributes.map(attribute => {
            if(attribute.name === attributeName) {
                return {...attribute, value: []};
            }
            
            return attribute;
        })];
        this.defaultAttributes = [...this.attributes];
    }
    
    onDeletePackValueClickHandler(packName) {
        this.packs = [...this.packs.map(pack => {
            if(pack.name === packName) {
                return {...pack, value: []};
            }

            return pack;
        })];
    }

    onDeleteDefaultProductOptionClickHandler(productOptionIndex) {
        const tempProductOptions = [...this.productOptions];

        tempProductOptions.splice(productOptionIndex, 1);
        this.productOptions = [...tempProductOptions];
        this.finalProductOptions = [...this.productOptions];
    }

    onDeleteProductOptionClickHandler(productOptionIndex) {
        const tempProductOptions = [...this.productOptions];
        const productOption = tempProductOptions[productOptionIndex];
        const tempFinalProductOptions = [...this.finalProductOptions.filter(finalProductOption => JSON.stringify({attributes: finalProductOption.attributes}) !== JSON.stringify({attributes: productOption.attributes}))];

        this.finalProductOptions = [...tempFinalProductOptions];

        tempProductOptions.splice(productOptionIndex, 1);
        this.productOptions = [...tempProductOptions];
    }
    
    onDeleteAttributeItemClickHandler(attributeName, attributeItem) {
        const attributeIndex = this.attributes.findIndex(attribute => attribute.name === attributeName);
        const currentAttribute = this.attributes[attributeIndex];
        const tempAttributes = [...this.attributes];
        
        currentAttribute.value = currentAttribute.value.filter(item => item !== attributeItem);
        tempAttributes.splice(attributeIndex, 1, currentAttribute);
        
        this.attributes = [...tempAttributes];
        this.defaultAttributes = [...this.attributes];
    }

    onDeletePackItemClickHandler(packName, packItem) {
        const packIndex = this.packs.findIndex(pack => pack.name === packName);
        const currentPack = this.packs[packIndex];
        const tempPacks = [...this.packs];
        
        currentPack.value = currentPack.value.filter(item => item !== packItem);
        tempPacks.splice(packIndex, 1, currentPack);
        
        this.packs = [...tempPacks];
        this.defaultPacks = [...this.packs];
    }

    onEditAttributeValueClickHandler(attributeName, attributeValue) {
        this.editAttribute = attributeName;
        this.editAttributeValue = attributeValue;

        this.updateComplete.then(() => {
            const attributeInput = this.shadowRoot.querySelector("#attributeInput");
            if(this.getEditAttributeUnits()) {
                const select = this.shadowRoot.querySelector("select");
    
                attributeInput.value = this.splitAttributeValueUnit(attributeValue)[0];
                select.value = this.splitAttributeValueUnit(attributeValue)[1];
            }
            else {
                attributeInput.value = attributeValue;
            }
        });
    }

    onEditPackValueClickHandler(packName, packValue) {
        this.editPack = packName;
        this.editPackValue = packValue;

        this.updateComplete.then(() => {
            const packQuantityInput = this.shadowRoot.querySelector("#packQuantityInput");
            const packContainSelect = this.shadowRoot.querySelector("#packContainSelect");

            packQuantityInput.value = this.editPackValue.quantity;
            packContainSelect.value = this.editPackValue.contains;
        });
    }

    getEditAttributeUnits() {
        return this.attributes.filter(attribute => attribute.name === this.editAttribute)[0].units;
    }

    splitAttributeValueUnit(attributeValue) {
        let value, unit;
        this.getEditAttributeUnits().forEach(un => {
            const s =attributeValue.split(un); 
            if(s.length === 2) {
                value = s[0];
                unit = un;

                return;
            }
        });

        return [value, unit];
    }

    getAttributeValueUnit(attributeName, attributeValue) {
        let unit, units;
        units = this.attributes.filter(attribute => attribute.name === attributeName)[0].units;
        if(units) {
            units.forEach(un => {
                const s =attributeValue.split(un); 
                if(s.length === 2) {
                    unit = un;
    
                    return;
                }
            });
        }

        return unit;
    }

    onSaveAttributeClickHandler() {
        const attributeInput = this.shadowRoot.querySelector("#attributeInput");
        let value =  attributeInput.value;

        if(value) {
            const attributeIndex = this.attributes.findIndex(attribute => attribute.name === this.editAttribute);
            const currentAttribute = this.attributes[attributeIndex];
            const tempAttributes = [...this.attributes];

            if(this.getEditAttributeUnits()) {
                const selectValue = this.shadowRoot.querySelector("select").value;
                value = value + "" + selectValue;
            }
            
            if(this.editAttributeValue) {
                const tempCurrentAttributeValue = [...currentAttribute.value];
                const editAttributeValueIndex = tempCurrentAttributeValue.findIndex(item => item === this.editAttributeValue);

                tempCurrentAttributeValue.splice(editAttributeValueIndex, 1, value);
                currentAttribute.value = [...tempCurrentAttributeValue];
            }
            else {
                if(!currentAttribute.value.includes(value)) {
                    currentAttribute.value = [...currentAttribute.value, value];
                }
            }
            tempAttributes.splice(attributeIndex, 1, currentAttribute);
    
            this.attributes = [...tempAttributes];
            this.defaultAttributes = [...this.attributes];
            this.editAttribute = "";
        }
        else {
            attributeInput.classList.add("is-danger");
        }
    }

    onCloseEditAttributeClickHandler() {
        this.editAttribute = "";
        this.editAttributeValue = "";
    }

    onCloseEditPackClickHandler() {
        this.editPack = "";
        this.editPackValue = undefined;
    }

    onSavePackClickHandler() {
        const packQuantityInput = this.shadowRoot.querySelector("#packQuantityInput");
        const packContainSelect = this.shadowRoot.querySelector("#packContainSelect");
        let packQuantity = packQuantityInput.value;
        let packContain = packContainSelect.value;

        if(packQuantity && packContain) {
            const packIndex = this.packs.findIndex(pack => pack.name === this.editPack);
            const currentPack = this.packs[packIndex];
            const tempPacks = [...this.packs];
            
            const newPackValue = {name: this.editPack, quantity: packQuantity, contains: packContain, level: this.packs.findIndex(pack => pack.name === this.editPack) + 1};
            if(this.editPackValue) {
                const tempCurrentPackValue = [...currentPack.value];
                const editPackValueIndex = tempCurrentPackValue.findIndex(item => JSON.stringify(item) === JSON.stringify(this.editPackValue));

                tempCurrentPackValue.splice(editPackValueIndex, 1, newPackValue);
                currentPack.value = [...tempCurrentPackValue];
            }
            else {
                if(!currentPack.value.find(v => JSON.stringify(v) === JSON.stringify(newPackValue))){
                    currentPack.value = [...currentPack.value, newPackValue];
                }
            }
            tempPacks.splice(packIndex, 1, currentPack);
    
            this.packs = [...tempPacks];
            this.defaultPacks = [...this.packs];
            this.editPack = "";
            this.editPackValue = undefined;
        }
        else {
            packQuantityInput.classList.add("is-danger");
            packContainSelect.classList.add("is-danger");
        }
    }

    onPackChangeHandler(e, packName) {
        const value = e.target.value;
        const tempPacks = [...this.packs];
        const packIndex = tempPacks.findIndex(pack => pack.name === packName);

        tempPacks.splice(packIndex, 1, {...this.packs[packIndex], value: value});
        this.packs = [...tempPacks];
    }

    onDefaultProductOptionPriceChangeHandler(e, index) {
        const price = e.target.value;
        const tempProductOptions = this.productOptions;
        tempProductOptions.splice(index, 1, {...this.productOptions[index], variant_cost: price});

        this.productOptions = [...tempProductOptions];
        this.finalProductOptions = [...this.productOptions];
    }

    onProductOptionPriceChangeHandler(e, productOptionIndex, packIndex, valueIndex) {
        const productOption = this.productOptions[productOptionIndex];
        // let pack, packValue;
        // if(packIndex !== null) {
        //     pack = productOption.packs[packIndex];
        //     packValue = pack[valueIndex];
        // }

        const newProductOption = {
            attributes: productOption.attributes,
            // pack: packValue,
            variant_cost: e.target.value
        };

        const finalProductOptionIndex = this.finalProductOptions.findIndex(finalProductOption => JSON.stringify({attributes: finalProductOption.attributes, pack: finalProductOption.pack}) === JSON.stringify({attributes: productOption.attributes, pack: packValue}));
        if(finalProductOptionIndex >= 0) {
            const tempFinalProductOptions = [...this.finalProductOptions];

            tempFinalProductOptions.splice(finalProductOptionIndex, 1, {...newProductOption, id: finalProductOptionIndex + 1});
            this.finalProductOptions = [...tempFinalProductOptions];
        }
        else {
            this.finalProductOptions = [...this.finalProductOptions, {...newProductOption, id: this.finalProductOptions.length + 1}]
        }
    }

    onRemoveProductOptionPackValueClickHandler(productOptionIndex, packIndex, valueIndex) {
        const optionDiv = this.shadowRoot.querySelector("#option" + productOptionIndex + "-" + packIndex + "-" + valueIndex);
        optionDiv.setAttribute("style", "display: none");

        const tempProductOptions = [...this.productOptions];
        const productOption = tempProductOptions[productOptionIndex];
        const pack = productOption.packs[packIndex];    
        const packValue = pack[valueIndex];

        const finalProductOptionIndex = this.finalProductOptions.findIndex(finalProductOption => JSON.stringify({attributes: finalProductOption.attributes, pack: finalProductOption.pack}) === JSON.stringify({attributes: productOption.attributes, pack: packValue}));
        if(finalProductOptionIndex >= 0) {
            const tempFinalProductOptions = [...this.finalProductOptions];

            tempFinalProductOptions.splice(finalProductOptionIndex, 1);
            this.finalProductOptions = [...tempFinalProductOptions];
        }
    }

    onPackNameSelectChangeHandler(e) {
        this.selectedPackName = e.target.value;
    } 

    generateProductOptions() {
        const selectedAttributes = [...this.attributes.filter(attribute => attribute.value.length > 0)];

        // const selectedPacks = [...this.packs.filter(pack => pack.value.length > 0)];
        let productOptions = [];
        let productOptions2 = [];
        
        for(let i = 0; i < selectedAttributes[0].value.length; i++) {
            productOptions.push({
                attributes: [
                    {
                        name: selectedAttributes[0].name,
                        level: this.attributes.findIndex(attribute => attribute.name === selectedAttributes[0].name) + 1,
                        value: selectedAttributes[0].value[i]
                    },
                ],
                variant_cost: 0
            });
        }

        for(let i = 1; i < selectedAttributes.length; i++) {
            productOptions.forEach(productOption => {
                for(let j = 0; j < selectedAttributes[i].value.length; j++) {
                    productOptions2.push({
                        attributes: [
                            ...productOption.attributes,
                            {
                                name: selectedAttributes[i].name,
                                level: this.attributes.findIndex(attribute => attribute.name === selectedAttributes[i].name) + 1,
                                value: selectedAttributes[i].value[j]
                            },
                        ],
                        variant_cost: 0
                    });
                }
            });
            productOptions = [...productOptions2];
        }

        this.productOptions = [...productOptions.map(productOption => {
            return {...productOption, attributes: productOption.attributes.map(attribute => {
                const unit = this.getAttributeValueUnit(attribute.name, attribute.value);
                if(unit) {
                    return {...attribute, measurement_unit: unit};
                }
                return attribute;
            })};
        })];
    }

    presentGenerateOptionsBtn() {
        return this.attributes.filter(attribute => attribute.value.length > 0);
    }

    static get is() {
        return "product-options";
    }

    render() {
        return html`
            <div class="content">
                <div id="createOptions">
                    <h5>${this.e.name}</h5>
                    <div class="field is-grouped is-grouped-multiline">
                        ${
                            this.attributes.map(attribute => html`
                                <p class="control">
                                    <button class="button ${attribute.value.length > 0 && "is-primary"}" @click=${() => this.onToggleAttributeClickHandler(attribute.name)}>${attribute.name}</button>
                                </p>
                            `)
                        }
                    </div>
                    <ul class="attributes mx-0 my-5">
                        ${
                            this.attributes.map(attribute => attribute.value.length > 0 ? html`
                                <li class="columns m-0">
                                    <div class="column is-2 is-flex is-align-items-center">
                                        <h5 class="mb-0">${attribute.name}: </h5>
                                    </div>
                                    <div class="column is-9">
                                        <div class="field is-grouped is-grouped-multiline">
                                            ${
                                                attribute.value.map(value => html`
                                                    <div class="control">
                                                        <div class="tags has-addons">
                                                            <a class="tag is-primary is-clickable" @click=${() => this.onEditAttributeValueClickHandler(attribute.name, value)}>${value}</a>
                                                            <a class="tag is-delete" @click=${() => this.onDeleteAttributeItemClickHandler(attribute.name, value)}></a>
                                                        </div>
                                                    </div>
                                                `)
                                            }
                                        </div>
                                    </div>
                                    <div class="column is-1 is-flex is-justify-content-space-between is-align-items-center">
                                        <span class="icon has-text-primary is-clickable" title="Edit" @click=${() => this.onAddAttributeValueClickHandler(attribute.name)}>
                                            <i class="fa-solid fa-plus"></i>
                                        </span>
                                        <span class="icon has-text-primary is-clickable" title="Delete" @click=${() => this.onDeleteAttributeValuesClickHandler(attribute.name)}>
                                            <i class="fa-solid fa-trash"></i>
                                        </span>
                                    </div>
                                </li>
                            ` : "")
                        }
                    </ul>
                    ${
                        this.editAttribute ? html`
                            <div class="attribute-editor field is-grouped is-justify-content-center">
                                <div class="field mr-3">
                                    <label class="label">Value</label>
                                    <p class="control">
                                        <input id="attributeInput" class="input" type="${this.getEditAttributeUnits() ? "number" : "text"}" value=${!this.editAttributeValue && ""} placeholder="Add ${this.editAttribute}">
                                    </p>
                                </div>
                                ${
                                    this.getEditAttributeUnits() ? html`
                                        <div class="field mr-3">
                                            <label class="label">Units</label>
                                            <p class="control ${!this.getEditAttributeUnits() && "is-hidden"}">
                                                <span class="select">
                                                    <select>
                                                        ${
                                                            this.getEditAttributeUnits().map(unit => html`
                                                                <option>${unit}</option>
                                                            `)
                                                        }
                                                    </select>
                                                </span>
                                            </p>
                                        </div>
                                    ` : ""
                                }
                                <div class="field mr-3">
                                    <p class="control">
                                        <button class="button is-primary" style="margin-top: 1.9rem;" title="Save" @click=${() => this.onSaveAttributeClickHandler()}>Save</button>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control">
                                        <span class="icon has-text-primary is-clickable" title="close" style="margin-top: 2.4rem;" @click=${() => this.onCloseEditAttributeClickHandler()}>
                                            <i class="fa-solid fa-xmark fa-xl"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ` : ""
                    }
                   
                    ${
                        this.presentGenerateOptionsBtn() ? html`
                            <button class="button is-primary" @click=${() => this.generateProductOptions()}>
                                Generate Options
                            </button>
                        ` : ""
                    }
                </div>
                ${
                    this.productOptions.length > 0 ? html`
                        <h5 class="mt-5">${this.data.length > 0 ? this.e.name : "Product options:"}</h5>
                        <ul class="product-options mx-0 my-5">
                            ${
                                this.data.length === 0 ? this.productOptions.map((productOption, productOptionIndex) => html`
                                    <li class="column">
                                        <div class="columns m-0">
                                            <div class="column is-9 is-flex is-align-items-center">
                                                <h6 class="mb-0">${productOption.attributes.map(attribute => attribute.value).join(", ")}</h6>
                                            </div>
                                            <div class="column is-2">
                                                <div class="field">
                                                    <label class="label">Price</label>
                                                    <p class="control">
                                                        <input class="input" type="number" value=${productOption.price} @change=${e => this.onProductOptionPriceChangeHandler(e, productOptionIndex, null, null)}>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="column is-1 is-flex is-justify-content-flex-end is-align-items-center">
                                                <span class="icon has-text-primary is-clickable" title="Delete" @click=${() => this.onDeleteProductOptionClickHandler(productOptionIndex)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </span>
                                            </div>
                                        </div>
                                       
                                    </li>
                                `) : Object.entries(this.productOptions[0]).map((productOption, index) => html`
                                    <li class="column">
                                        <div class="columns m-0">
                                            <div class="column is-9 is-flex is-align-items-center">
                                                <h6 class="mb-0">${productOption[1].attributes.map(attribute => attribute.value + (attribute.measurementUnit ? " " + attribute.measurementUnit : ""))}</h6>
                                            </div>
                                            <div class="column is-2">
                                                <div class="field">
                                                    <label class="label">Price</label>
                                                    <p class="control">
                                                        <input class="input" type="number" value=${productOption.variant_cost} @change=${e => this.onDefaultProductOptionPriceChangeHandler(e, index)}>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="column is-1 is-flex is-justify-content-flex-end is-align-items-center">
                                                <span class="icon has-text-primary is-clickable" title="Delete" @click=${() => this.onDeleteDefaultProductOptionClickHandler(index)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                `)
                            }
                        </ul>
                    ` : ""
                }
            </div>
        `;
    }
}

customElements.define(ProductOptions.is, ProductOptions);
