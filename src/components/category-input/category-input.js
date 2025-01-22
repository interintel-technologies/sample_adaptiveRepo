
import {css, html} from 'lit-element';
import "../select-element/select-element.js";
import { CategoryInputStyles } from './category-input-css';
import { CategoryInputBase } from '../../base/elements/category-input.js';

class CategoryInput extends CategoryInputBase{
    static get properties() {
        return {
            categoryOptions: Array,
            subCategoryOptions: Array,
            selectedCategory: String,
            selectedSubCategory: String,
            e: { type: Object }, // Assuming 'e' is passed as a property
            cols: { type: Array }, // Add 'cols' property
            rows: { type: Array }  // Add 'rows' property

        }
    }

    constructor() {
        super();
        this.categoryOptions=[];
        this.subCategoryOptions=[];
        this.selectedCategory = "";
        this.selectedSubCategory="";
        this.rows = [];
        this.cols = [];
        this.e = null
    }

    static get styles() {
        return [
        
            CategoryInputStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }



    updated(changedProperties) {
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e') 
           
        ) {

            this.rows.forEach(row => {
                let option = {};
                row.forEach((rowValue, index) => {
                    if(index === 0) {
                        option.value = rowValue;
                    }
                    if(index === 1){
                        option.label = rowValue;
                    }else if(index === 2){
                        option.sub_categories = rowValue;
                    }
                    else {
                        if(rowValue === true){
                            this.selectedCategory = row[0];
                        }
                    }
                });
                this.categoryOptions = [...this.categoryOptions, option];
            });


            
            if(this.selectedCategory) {
                this.createSubCategories();
            }

            this.categoryOptions.unshift({
                value: '',
                label: '--Choose a category--'
            });
        }
    }

    createSubCategories() {
        if(this.selectedCategory) {
            const category = this.categoryOptions.filter(opt => {
                return opt.value == this.selectedCategory;
            })[0];

            console.log("category is ",category);

            
            this.subCategoryOptions = category.sub_categories.map(subCategory => {
                const option = {
                    label: subCategory.name,
                    value: subCategory.defaultValue
                };
    
                if(subCategory["defaultValue"]) {
                    this.selectedSubCategory = subCategory.name;
                }
    
                return option;
            });

            console.log("subCategoryOptions is ",this.subCategoryOptions);


            this.subCategoryOptions.unshift({
                value: '',
                label: '--Choose a sub category--'
            });
        }
        else {
            this.subCategoryOptions = [];
        }
    }

    onCategoryChangeHandler(event) {
        console.log("event ",event);
        
        this.selectedCategory = event.detail.target.value;
        this.createSubCategories();
    }

    onSubCategoryChangeHandler(event){
        this.selectedSubCategory = event.detail.target.value;
    }

    valid(validation) {
		this.shadowRoot.querySelectorAll("select-element").forEach(selectElement => {
            selectElement.setAttribute("validation", JSON.stringify({
                isValid: true,
                validationMessage: "valid"
            }));
        });
	}

	invalid(validation) {
        if(!this.value.category) {
            this.shadowRoot.querySelector("#categorySelect").setAttribute("validation", JSON.stringify({
                isValid: false,
                validationMessage: "Pick a valid category"
            }));
        }
        else if(!this.value.subCategory) {
            if(this.subCategoryOptions.length > 0) {
                this.shadowRoot.querySelector("#subCategorySelect").setAttribute("validation", JSON.stringify({
                    isValid: false,
                    validationMessage: "Pick a valid sub category"
                }));
            }
        }
	}

    static get is(){
        return "category-input";
    }
    
    render() {
        return html`
            <select-element id="categorySelect"  .name=${this.e.name} .value=${this.selectedCategory} @on-change=${e => this.onCategoryChangeHandler(e)} .options=${this.categoryOptions}></select-element>   
            ${
                this.subCategoryOptions.length > 0 ? html`
                    <select-element  id="subCategorySelect" class="pt-4" .name=${"Sub Category"} .value=${this.selectedSubCategory} @on-change=${e => this.onSubCategoryChangeHandler(e)} .options=${this.subCategoryOptions}></select-element> 
                ` : ""
            }
        `;
    }

}

customElements.define(CategoryInput.is, CategoryInput);