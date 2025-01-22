import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const TermsConditionsBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'terms-conditions';}
  constructor() {
    super();
    this.checked = false;
  }
  static get properties() {
    return {

    //   checked: {type: Boolean},
     
    };
  }
  getInput() {
    return this.qs('input');
  }


  getName() {
    return this.e.formName;
  }

  validate() {
    if (this.e.required && ! this.getValue() ) {
        return new this.Validation(false, 'you must accept the ');


    }else{
         return new this.Validation(true, 'accepted');
    }
  }

  valid(validation) {}
  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.title = TermsConditionsBase.toTitleCase(pElement.name);
    self.name = pElement.name;

    // if (pElement.defaultValue === 'true') {
    //   this.checked = true;
    // }
  }
};
