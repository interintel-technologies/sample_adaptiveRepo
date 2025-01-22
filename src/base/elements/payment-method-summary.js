import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';

export const PaymentMethodSummaryBase = class extends utilsMixin(SerializableElement) {
    constructor() {
        super();
        this.value = [];
    }

    static get properties() {
        return {
            value: String,
        };
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        return this.value;
    }

    validate() {
        if (!this.getValue().length > 0 ) {
            return new this.Validation(false, 'Make sure to connect to a payment method.');
        }else{
            return new this.Validation(true, 'valid');
        }
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    _computeItemsCount(rows) {
        return rows.length;
    }
    
    _shouldFilter(items) {
        var b = this._computeItemsCount(items);
        return (b>10);
    }
    
    _computeItems(rows, q) {
        const filteredItems = [];
    
        for (let i = 0; i < rows.length; i++) {
            const item = rows[i];
          // institution name isn't specified in values
            if (q) {
                var query = q.toLowerCase();
                var name = item[1].toLowerCase();
        
                if (name.indexOf(query) !== -1 ) {
                    filteredItems.push(item);
                }
            } else {
                filteredItems.push(item);
            }
    
          // if(filtered_items.length>   10){
          //     break
          // }
        }
        return filteredItems;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        this.name = pElement.name;

        if (pElement.kind) {
            this.selected = Number(pElement.kind);
        }
        else if (this.required && this.rows.length > 0) {
            this.selected = this.rows[0][0];
        }
        this.loader = this.loadData();
    }
};
