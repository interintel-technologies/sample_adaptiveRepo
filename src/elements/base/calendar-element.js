import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';
import { dataSourceMixin } from '../../core/mixins/datasource-mixin';
import {format} from 'date-fns';


export const CalendarElementBase = class extends dataSourceMixin(utilsMixin(SerializableElement)) {

    static get properties() {
        return {
            label: String,
            required: Boolean,
            value: Number,
            loader: Object
        };
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        const outputTokens = "yyyy-MM-dd";
        let evalu = new Date(this.value);
        let valueDate =  format(evalu, outputTokens);

        return valueDate;
    }

    validate() {
        if ((this.required) && !this.getValue()) {
            return new this.Validation( false, 'Invalid date');
        }else{
            this.minDate = this.e.details.minDate;
            
            if(this.minDate){
                if(this.getValue() == null || this.getValue() == undefined ){
                    return new this.Validation( false, 'Invalid date');}else{
    
                    const outputTokens = "yyyy-MM-dd";
                    let evalu = new Date(this.getInput());
                    let valueDate =  format(evalu, outputTokens);
                    let datePicked = new Date(valueDate);
                    let todaysDate = new Date();
                    
                    if(datePicked.setHours(0, 0, 0, 0) <= todaysDate.setHours(0, 0, 0, 0)){ 
        
                        return new this.Validation( false, 'Select a future date');
                    }else{ 
                        return new this.Validation( true, 'valid date');
                    };
                
            }
        }//end of this.noPastDate
    
        return new this.Validation( true, 'valid date');
        }
    }
    
    dscDataName() {
        return this.e.defaultValue;
    }
    
    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;

        self.label = CalendarElementBase.toTitleCase(pElement.name);
        self.params = loader.pl.paramsCopy();
        self.required = this.e.required || (pElement.min && pElement.min > 0);
        self.loader = this.loadData();
    }
};
