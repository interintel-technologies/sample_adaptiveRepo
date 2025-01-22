import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';


export const CheckboxValueBase = class extends utilsMixin(SerializableElement) {
  static get is() {return 'checkbox-value';}
  constructor() {
    super();
    this.checked = false;
  }
  static get properties() {
    return {

      checked: {type: Boolean},
      type: String,
      icon: String,
      initialData:{type:Object},
      title: String,
      maxlength: Number,
      required: Boolean,
      columnSize: String,
      columnOffset: {type: Array},
      id: String
    };
  }
  getInput() {
    return this.qs('input');
  }


  getName() {
    return this.e.formName;
  }

  validate() {
    return new this.Validation(true, 'always valid');
  }

  invalid(validation) {
    // will never happen
  }
  parseData(){

    if(this.initialData !=null && this.initialData != undefined 
        && !(Object.keys(this.initialData).length === 0 && this.initialData.constructor === Object))
        {
            this.id = this.initialData.id;
            this.checked = this.initialData.checked;
        }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.parseData();
  }
  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.title = CheckboxValueBase.toTitleCase(pElement.name);
    self.name = pElement.name;
    if(pElement.defaultValue != null & pElement.defaultValue != undefined && pElement.defaultValue != ""){
        self.initialData =  JSON.parse(pElement.defaultValue);

    }
  }
};
