import { html, css, unsafeCSS } from "lit-element";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icon/iron-icon.js";
import "fa-icons";
import { ImageInputBase } from "../../base/elements/image-input";
import {ImageInputStyles} from './image-input-css';
// import {InputDefaultStyles} from '../../../styles/input-shared-default';
import {FileUploadStyles} from '../../styles/file-upload';
import { InputDefaultStyles } from "../../styles/input-shared-default";
import globalStyles from '../../App.css?raw';


class ImageInput extends ImageInputBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      InputDefaultStyles,
      ImageInputStyles,
      FileUploadStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }


static get properties() {
    return {
        e: { type: Object },
    };
}

updated(changedProperties) {
  if (changedProperties.has('e')) {
      console.log("Updated properties:", this.e);
  }
}

  render() {
    return html`
    <div class="mainwrapper drop-area">
      <form id="file-form" class="upload-form is-flex">
          <div class="file-preview">
            <img id="display" src="" />
          </div>
        <div class='ii-file-input'>
          <input type='file'
            @change="${this.handleFile}"
            multiple accept='image/*|audio/*|video/*'
            >
          <div class="is-flex"style="background-color: #fff;border-radius: 6px;  border: 1px solid #ccc;">
            <span class='file-btn file-cta'>Upload  ${this.e.name} </span>
            <span id="label" class='label' data-js-label> ${this.fileName}</label>
          </div>
        </div>
      </form>
    </div>
        `;
  }
  constructor() {
    super();
    this.e = null;
  }

  getValue() {
    return this.value;
  }

  firstUpdated() {
    // let preview = this.shadowRoot.querySelector(".file-preview img");
    // let previewFile = this.shadowRoot.querySelector(".file-preview");

    // if (preview.src) {
    //   previewFile.innerContent = "No Preview";
    // }
  }

  // /**
  //  * from SerializableElement
  //  * @override
  //  */
  // valid(validation) {
  //   const validationDisplay = this.shadowRoot.querySelector('#validation');
  //   validationDisplay.style.display='none';
  //   validationDisplay.textContent= 'Required';
  // }

  // /**
  //  * from SerializableElement
  //  * @override
  //  */
  // invalid(validation) {
  //   const validationDisplay = this.shadowRoot.querySelector('#validation');
  //   validationDisplay.style.display='flex';
  //   if (validation) {
  //     validationDisplay.textContent= validation;
  //   }
  // }

  /**
   * from ImageInputBase
   * @override
   */
  updatePreview(src) {
    var display = this.qs('#display');
    display.src = src;
  }

  /**
   * Override to display a message to user
   * @param message
   */
  updateUploadMessage(message) {
    const display = this.shadowRoot.querySelector('#label');
    display.textContent = message;
  }

  // /**
  //  * Cancel Last Upload
  //  * @param evt
  //  */
  // cancelUpload(evt) {
  //   this.resetUpload();
  //   this.updateUploadMessage('');
  // }

  handleFile() {
    const fileInput = this.shadowRoot.querySelector('[type="file"]');
    this.uploadImage(fileInput);
  }

  /**
   * from SerializableElement
   * @override
   */
  valid(validation) {
    const errorDisplay = this.shadowRoot.querySelector("#errorDisplay");
    errorDisplay.style.display = "none";
  }
  /**
   * from SerializableElement
   * @override
   */
  invalid(validation) {
    const errorDisplay = this.shadowRoot.querySelector("#errorDisplay");
    errorDisplay.style.display = "block";
    errorDisplay.textContent = validation;
  }
  // /**
  //  * from FileInputBase
  //  * @override
  //  */
  // updateUploadMessage(message) {
  //   const display = this.shadowRoot.querySelector("#display");
  //   // display.textContent = message;
  // }
  // getFileExtension(filename) {
  //   return filename.split(".").pop();
  // }
  /**
   * Cancel Last Upload
   * @param evt
   */
  cancelUpload(evt) {
    this.resetUpload();
    this.updateUploadMessage("");
  }
  // uploadFile(fileInput) {
  //   var file = fileInput.files[0];
  //   const self = this;

  //   if (!file) {
  //     // no file selected
  //     return;
  //   }
  //   if (
  //     self._validFileExtensions &&
  //     self._hasExtension(file.name, self._validFileExtensions)
  //   ) {
  //     this.uploadTempFile(file, "image", null)
  //       .then(upload => {
  //         this.value = upload["response"]; // Bind Image Path
  //         this.updateUploadMessage(
  //           "File successfully uploaded. Please Proceed!"
  //         );
  //       })
  //       .catch(reason => {
  //         // TODO add better error handling
  //         Logger.i.incompleteDev("Better error handling.", reason);
  //       });
  //   } else {
  //     this.updateUploadMessage("File type" + file.type + " not supported!");
  //   }
  // }
  // /**
  //  * File Selection Change handler
  //  * @param evt
  //  */
  // handleFile(evt) {
  //   const fileInput = this.shadowRoot.querySelector('[type="file"]');
  //   const label = this.shadowRoot.querySelector("[data-js-label]");
  //   let preview = this.shadowRoot.querySelector(".file-preview img");
  //   let reader = new FileReader();

  //   // console.log(preview.src);

  //   reader.onload = function() {
  //     preview.src = reader.result;
  //   };
  //   reader.readAsDataURL(evt.target.files[0]);
  //   fileInput.onmouseout = function() {
  //     if (!fileInput.value) return;

  //     let value = fileInput.value.replace(/^.*[\\\/]/, "");
  //     // console.log(this.getFileExtension(value))
  //     // el.className += ' -chosen'
  //     label.innerText = value;
  //   };
  //   this.uploadFile(fileInput);
  // }
}
customElements.define(ImageInput.is, ImageInput);
