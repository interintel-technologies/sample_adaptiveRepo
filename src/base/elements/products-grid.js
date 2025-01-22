import { ECommerceMixin } from './../../core/mixins/ecommerce-mixin';
import { BaseElement } from '../../core/base-element';

export class ProductsGridBase extends ECommerceMixin(BaseElement) {
    static get properties() {
        return {
            value: Object
        };
    }

    constructor() {
        super();
        this.value = [];
    }

    getName() {
        const el = this.e.formName.split('=');
        return el[0];
    }

    getValue() {
        return this.value;
    }

    validate() {
        if (this.e.required && !this.value || this.value === undefined ) {
        return new this.Validation(false, 'invalid');
        }
        return new this.Validation(true, 'valid');
    }

    fetchProductsByCategory(category) {
        if(Object.keys(this.dscParams).includes("subCategory")) {
            this.deleteParamKeys(["subCategory"]);
        }
        this.mergeParams({"category": category === "All" ? "" : category});
    }

    fetchProductsBySubCategory(subCategory) {
        this.mergeParams({"subCategory": subCategory === "All" ? "" : subCategory});
    }

    valid(validation) {}

    invalid(validation) {}

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);

        this.required = this.e.required || (pElement.min && pElement.min > 0);
        this.icon = pElement.icon;
        this.params = this.pl.paramsCopy();
        this.sectionSize = pElement.sectionSize;
    
    }
}