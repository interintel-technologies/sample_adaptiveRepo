import { dataSourceMixin } from '../../core/mixins/datasource-mixin';
import { SerializableElement } from '../../core/serializable-element';
import { utilsMixin } from '../../core/mixins/utils-mixin';
import { utcFormat } from 'd3';
export const TelephoneInputBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
    static get properties() {
        return {
            required: Boolean,
			title: String,
			icon: String,
			params: Object,
			sectionSize: String,
			loader: Function,
            value: Object
        };
    }

    constructor() {
        super();
        this.value = undefined;
    }

    getName() {
        const el = this.e.formName.split('=');
        return el[0];
    }

    getValue() {
        return this.value;
    }

    static get is() {
        return 'telephone-input';
      }

      validate() {
        if (this.required && !this.getValue()) {
          return new this.Validation(false, `${this.e.name} is required`);
        }
        
        const pattern = /^\+?\d{0,3}[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        const inputValue = this.getValue();
      
        if (!pattern.test(inputValue)) {
          return new this.Validation(false, 'Please enter a valid telephone number.');
        }
        
        return new this.Validation(true, 'Valid');
    }

    valid(validation) {}

    invalid(validation) {}

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);

        this.required = this.e.required || (pElement.min && pElement.min > 0);
        this.title = TelephoneInputBase.toTitleCase(pElement.name);
        this.icon = pElement.icon;
        this.params = this.pl.paramsCopy();
        this.sectionSize = pElement.sectionSize;
        this.loader = this.loadData();
    }

}