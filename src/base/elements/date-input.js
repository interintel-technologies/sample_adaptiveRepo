import {SerializableElement} from '../../core/serializable-element';
import {format, parse} from 'date-fns';
import { utilsMixin } from '../mixins/utils-mixin';


export const DateInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'date-input';
  }

  static get properties() {
    return {

      /**
             * The label for this input.
             */
      label: {
        type: String,
        value: 'Choose Date',
      },
      required: Boolean,
      datestring: {type: String, value: ''},
      columnSize: {type: Array},
      noPastDate: Boolean,
      sectionSize:String,

    };
  }


  getName() {
    return this.e.formName;
  }

  valid(validation) {

  }

  invalid(validation) {

  }

  validate() {
    if ((this.required) && !this.getValue()) {
      return new this.Validation( false, 'Invalid date');
    }else{
          this.noPastDate = this.e.details.noPastDate;
        
          if(this.noPastDate){
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

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);
    self.sectionSize = pElement.sectionSize;
    self.label = DateInputBase.toTitleCase(pElement.name);
    self.params = loader.pl.paramsCopy();
  }
};
