import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const CodePreviewBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'code-preview';}
  static get properties() {
    return {
      params: {type: Object, value: {}},
      type: String,
      value: String,
      columnSize: {type: Array},
    };
  }




  getName() {
    return this.e.formName;
  }


  validate() {
   
    if(this._verified(this.getValue()['email'])){
        return new this.Validation(true, 'valid');
      }else{
       //show error message
       return new this.Validation(false, 'Enter Valid Email Address');
        }
  }

  _verified(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }



  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = CodePreviewBase.toTitleCase(pElement.name);
    this.required = this.e.required|| (pElement.min && pElement.min > 0);
    
  }
};
