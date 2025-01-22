import {fileUploadMixin} from '../../core/mixins/fileupload-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';
import {Logger} from '../../core/logger';


export const ImageInputBase = class extends utilsMixin(fileUploadMixin(SerializableElement)) {
  static get is() {
    return 'image-input';
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      value: String,
      fileName: String,
      pattern: String,
      required: Boolean,
    };
  }

  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.value;
  }

  /**
   * from SerializableElement
   * @override
   * @return {Validation|*}
   */
  validate() {
    // if required but there is a default value, it is not invalid
    if (this.required && !this.getValue() && !this.e.defaultValue) {
      return new this.Validation(false, 'this input is invalid');
    }
    return new this.Validation(true, 'this input is valid');
  }

  /**
   * from SerializableElement
   * @override
   */
  valid(validation) {}

  /**
   * from SerializableElement
   * @override
   */
  invalid(validation) {}


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.e.defaultValue) {
      this.updatePreview('/media/'+this.e.defaultValue);
    }
  }

  /**
   * Override to display a message to user
   * @param message
   */
  updateUploadMessage(message) {
    Logger.i.incompleteDev('image upload progress not displayed to user ');
  }

  /**
   * Override to preview the image to user
   * @param src Anything acceptable by img src attr
   */
  updatePreview(src) {
    Logger.i.incompleteDev('image uploaded not previewed to user ');
  }

  /**
   * Uploads the first file from a fileInput
   * @param fileInput input type file node
   */
  uploadImage(fileInput) {
    const self = this;
    var file = fileInput.files[0];

    var imageType = /image.*/;

    if (!file) {
      // no file selected
      return;
    }

    self.uploadTempFile(file, 'image', imageType).then(upload => {
      this.updateUploadMessage('Image successfully uploaded. Please Proceed!');

      self.value = upload['response'];// Bind Image Path
      self.fileName = upload['name'];

      this.updatePreview(upload['result']);
    }).catch(reason => {
      Logger.i.incompleteDev('Better error handling.', reason);
    });
  }

  /**
   * Reset Last Upload
   */
  resetUpload() {
    this.value = '';
    this.fileName = '';
  }


  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required || (pElement.min && pElement.min > 0);

    self.icon = pElement.icon; // TODO this icon is not used, should be given priority over the current default
    self.title = ImageInputBase.toTitleCase(pElement.name);
    self.params = loader.pl.paramsCopy();
  }
};
