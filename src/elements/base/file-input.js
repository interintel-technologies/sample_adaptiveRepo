import {utilsMixin} from '../../core/mixins/utils-mixin';
import {fileUploadMixin} from '../../core/mixins/fileupload-mixin';
import {SerializableElement} from '../../core/serializable-element';
import {Logger} from '../../core/logger';


export const FileInputBase = class extends utilsMixin(fileUploadMixin(SerializableElement)) {
  constructor() {
    super();
    this._validFileExtensions = [];
    this.uploading = false;
    this.validationError = false;
  }

  static get is() {
    return 'file-input';
  }

  static get properties() {
    return {
      _validFileExtensions: Array,
      extensions: String,
      title: String,
      required: Boolean,
      value: String,
      uploading:Boolean,
      validationError:Boolean
    };
  }

  getValue() {
    return this.value;
  }

  getName() {
    return this.e.formName;
  }

  getFileSizeLimit(){
    const fileSizeLimit = this.e.details.file_size_limit;   

    if(fileSizeLimit != undefined ){
      console.log("getFileSizeLimit - ",this.e.details.file_size_limit," bytes");
    }
    else{
      console.log("getFileSizeLimit set to DEFAULT 12MB");      
    }
    

    return fileSizeLimit;
    
  }
   


  validate() {
    if (this.required && !this.getValue()) {
      return new this.Validation(false, 'invalid file try again');
    }
    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    
  }

  _hasExtension(fileName, exts) {
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
  }

  /**
   * Override to display a message to user
   * @param message
   */
  updateUploadMessage(message) {
    Logger.i.incompleteDev('file upload not displayed to user ');
  }

  /**
   * Uploads the first file from a fileInput
   * @param fileInput input type file node
   */

  responseHandler(response) {
    const splitResponse = response.split("|");
    const responseType = splitResponse[0];
    const responseMessage = splitResponse[1];

    const warningText = this.shadowRoot.querySelector('#warning');
    console.log(splitResponse)
    if(responseType === "FAIL ") {
      warningText.style.display = 'block';
      warningText.innerText = responseMessage;
    }
    else {
      warningText.style.display = 'none';
      this.value = response;// Bind Image Path
      this.updateUploadMessage('File successfully uploaded. Please Proceed!');
    }
  }

  uploadFile(fileInput) {
    var file = fileInput.files[0];
    const self = this;
    const message= 'File Size is Above allowed Limit of 12MB';
    const warningText = this.qs('#warning');

    if (!file) {
      // no file selected
      return;
    }
    if ((self._validFileExtensions && self._hasExtension(file.name, self._validFileExtensions))) {  
      this.uploadTempFile(file, 'image', null,this.getFileSizeLimit()).then(upload => {
        this.responseHandler(upload["response"]);
        this.uploading = false;
      }).catch(reason => {
        // TODO add better error handling
        Logger.i.incompleteDev('Better error handling.', reason);
        this.uploading = false;
        

      });
      if(file.size>this.getFileSizeLimit()){
        warningText.style.display = 'block';
        warningText.innerHTML=message;
      }
    }
    else {
      this.uploading = false;

      this.updateUploadMessage( file.type + ' not supported! Please upload a '+self.extensions + ' file');
    }  
  }

  /**
   * Reset Last Upload
   */
  resetUpload() {
    this.uploading = false;
    this.value = '';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.required = this.e.required;

    self.icon = pElement.icon;
    self.title = FileInputBase.toTitleCase(pElement.name);

    this.value = pElement.defaultValue;
    self.extensions = pElement.kind;
    if (self.extensions) {
      this._validFileExtensions = this.extensions.split('|').map(function(li) {
        return '.' + li;
      });
    }
  }
};
