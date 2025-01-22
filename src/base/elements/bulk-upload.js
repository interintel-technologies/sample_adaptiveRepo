import {fileUploadMixin} from '../../core/mixins/fileupload-mixin';

import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const BulkUploadBase = class extends utilsMixin(fileUploadMixin(SerializableElement)) {
  constructor() {
    super();
    this.uploads = [];
  }

  static get properties() {
    return {
      icon: String,
      service: String,
      title: String,
      value: String,
      fileName: String,
      required: Boolean,
      columnSize: Array,
      uploads: Array,
    };
  }

  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.value;
  }

  /**
     *
     *
     * @return {Validation|*}
     */
  validate() {
    this.saveUploads();
    console.log("this is required",this.required,this.getValue());
    

    // if required but there is a default value, it is not invalid
    if (this.required && !this.getValue() && !this.e.defaultValue) {
      
      this.shadowRoot.querySelector('.files-drop-zone').style.background = "#FDEDED"

      this.shadowRoot.querySelector('.validation-info').style.display='block';
      this.shadowRoot.querySelector('.validation-info').textContent= "this input is invalid";
      return new this.Validation(false, 'this input is invalid');
    }
    return new this.Validation(true, 'this input is valid');
  }

  valid(validation) {}
  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  updated(changedProperties) {
    if (changedProperties.has('e')) {
      console.log("this is bulk upload in base ",this.e);

      var self = this;
      self.required = this.e.required || (this.e.min && this.e.min > 0);
  
      self.icon = this.e.icon; // TODO this icon is not used, should be given priority over the current default
      self.title = BulkUploadBase.toTitleCase(this.e.name);
      self.service = this.e.service;
      // self.params = loader.pl.params;
  
      self.maxlength = this.e.max;
    }}

  saveUploads() {
    this.value = this.uploads.map(function(upload) {
      // return {'response': upload['response'],'name': upload['name'] }
      return `${upload['response']}:${upload['name']}`;
    }).join('|');
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;
    self.required = this.e.required || (pElement.min && pElement.min > 0);

    self.icon = pElement.icon; // TODO this icon is not used, should be given priority over the current default
    self.title = BulkUploadBase.toTitleCase(pElement.name);
    self.service = pElement.service;
    self.params = loader.pl.params;

    self.maxlength = pElement.max;
  }
};
