
import { ECommerceMixin } from '../../core/mixins/ecommerce-mixin';
import {SerializableElement} from '../../core/serializable-element';

export const CartEditorBase = class extends ECommerceMixin(SerializableElement) {
  static get properties() {
    return {
      value: Object,
      loader: Promise
    };
  }

  constructor() {
		super();
		this.value = undefined;
	}

  getValue() {
    return this.cart.map(cartItem => {
      if(this.e.details.type === "supply-order") {
        const expiryDate = this.shadowRoot.querySelector(`#dateInput${cartItem.id}`).value;
        return {id: cartItem.id, quantity: cartItem.quantity, ["expiry_date"]: expiryDate};
      }
     
      return {id: cartItem.id, quantity: cartItem.quantity, params: this.e.details.dispatch_return};
    });
	}

  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
    if(this.e.details.type === "supply-order") {
      let areAllExpiryDatesValid = true;
      this.getValue().forEach(item => {
        const isItemExpired = () => {
          return item["expiry_date"] ? (new Date().getTime() > new Date(item["expiry_date"] + "T00:00").getTime() ? true : false) : true
        };

        if(!item["expiry_date"] || isItemExpired()){
          areAllExpiryDatesValid = false
        }
      });

      return areAllExpiryDatesValid ? new this.Validation(true, "valid") : new this.Validation(false, "Invalid");
    }
    return new this.Validation(true, "valid");
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  toTitleCase(string) {
    if (!string) return '';
    string = string.toString();
    string = string.toLowerCase().split(' ');
    let newString = [];
    for (let i = 0; i < string.length; i++) {
        newString[i] = string[i].substr(0, 1).toUpperCase() + string[i].substr(1);
    }
    return newString.join(' ');
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    this.required = this.e.required || (pElement.min && pElement.min > 0);
    this.title = this.toTitleCase(pElement.name);
    this.icon = pElement.icon;
    this.params = this.pl.paramsCopy();
    this.sectionSize = pElement.sectionSize;
    this.loader = this.loadData();
  }
};