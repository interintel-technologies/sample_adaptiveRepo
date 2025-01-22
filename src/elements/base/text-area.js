import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const TextAreaBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'text-area';}
  static get properties() {
    return {
      params: {type: Object, value: {}},
      type: String,
      value: String,
      columnSize: {type: Array},
    };
  }

  getValue() {
    return this.value;
  }

  getName() {
    return this.e.formName;
  }


  validate() {
    if ((this.e.required || this.required) && ! this.getValue() ) {
      return new this.Validation(false, this.e.name+' is Required');
    }else if((this.e.required || this.required) && (this.getValue().length > this.e.max || this.getValue().length < this.e.min)){
      if(this.getValue().length > this.e.max){
        return new this.Validation(false, this.e.name + ' characters must not be more than '+this.e.max);

      }else if(this.getValue().length < this.e.min){
        return new this.Validation(false, this.e.name + ' characters must not be less than '+this.e.min);

      }

    }
    return new this.Validation(true, 'valid');
  }

  valid(validation) {}
  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = TextAreaBase.toTitleCase(pElement.name);
    this.required = this.e.required|| (pElement.min && pElement.min > 0);

    this.value = pElement.defaultValue || '';
  }
};
