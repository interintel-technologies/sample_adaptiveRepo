import { html, css, unsafeCSS } from 'lit-element';
import { FileInputBase } from '../../base/elements/file-input';
import { FileInputStyles } from './file-input-css';
import { InputDefaultStyles } from './input-shared-default';
import { FileUploadStyles } from './file-upload';
import globalStyles from '../../App.css?raw';

class FileInput extends FileInputBase{
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            FileInputStyles,
            InputDefaultStyles,
            FileUploadStyles,
            css`
                :host {
                    display: block;
                }
            `
        ]
    }

    static get is() {
        return "file-input";
    }

    static get properties(){
        return{
            isFileSelected:Boolean,
            e: { type: Object }, // Assuming 'e' is passed as a property

        }
    }
   
    constructor() {
        super();
        this.uploading = false;
        this.isFileSelected=false;
        this.validationError = false;

    }

    updated(changedProperties) {
        if (
          changedProperties.has('e')
        ) {
          
          
        }
      }

    getValue() {
        return this.value;
    }

    checkValidation(){
        if(this.validationError){
          if(this.validErrorValue === "invalid"){
            // return `background-color: #fff;border-radius: 6px;   border: 2px solid #ff3860; color:#ff3860;`;
        
        }
          
        }else{
          if(this.validErrorValue === "valid"){
            // return `background-color: #fff;border-radius: 6px; border: 2px solid #23d160;`
            }else{
            //   return `background-color: #fff;border-radius: 6px;  border: 1px solid #ccc;`
            }
          
        }
    }

    /**
     * from SerializableElement
     * @override
     */

    valid(validation) {
        const self = this;
        const errorDisplay = this.shadowRoot.querySelector('#warning');
        // const display = this.shadowRoot.querySelector('#display');
    
        // display.classList.remove("danger");
        // display.classList.add("success");
    
        errorDisplay.style.display = 'none';
        this.validationError = false;
        this.validErrorValue = "valid"
    
        setTimeout(function(){ self.resetStyles();},3000);
    }
    
    resetStyles(){
        // const display = this.shadowRoot.querySelector('#display');
        // display.classList.remove("success");
        this.validationError = false;
        this.validErrorValue  = undefined;
    
    }

    /**
     * from SerializableElement
     * @override
     */

    invalid(validation) {
        const errorDisplay = this.shadowRoot.querySelector('#warning');
        // const display = this.shadowRoot.querySelector('#display');
    
        errorDisplay.style.display = 'block';
        errorDisplay.textContent = validation;
        // display.classList.add("danger");
        this.validationError = true;
        this.validErrorValue = "invalid"
    
    }

    /**
     * from FileInputBase
     * @override
     */

    updateUploadMessage(message) {
        const warning = this.shadowRoot.querySelector('#warning');
        warning.style.display = 'block';
    
        warning.textContent = message;
    
    }
      // getFileExtension(filename){
      //   return filename.split('.').pop();
      // }
      // /**
      //  * Cancel Last Upload
      //  * @param evt
      //  */
      // cancelUpload(evt) {
      //   this.resetUpload();
      //   this.updateUploadMessage('');
      // }
      /**
       * File Selection Change handler
       * @param evt
       */
    handleFile(evt) {
        this.uploading = true;
        this.isFileSelected=true;
        const fileInput = this.shadowRoot.querySelector('[type="file"]');
        const warning = this.shadowRoot.querySelector('#warning');
        const fileDiv=this.qs(".file-name");
        const file=evt.target.files[0];
        const name=(file.name).split(".");
        const fileName=name[0];
        const Ext=(file.type).split("/");
        const fileExt=Ext[1];
        const fullFileName=fileName + '.' + fileExt;
       
        if(this.value!=null){
            const imageName=this.value.split('/')[5];
            fileDiv.innerHTML=imageName;
        }
       
        // fileDiv.innerHTML=fullFileName;
        warning.style.display = 'none';
        this.uploadFile(fileInput);
    
        // const label = this.shadowRoot.querySelector('[data-js-label]');
        // let preview = this.shadowRoot.querySelector('.file-preview img');
    
        // let reader = new FileReader();
        // reader.onload = function(){
        //   preview.src = reader.result;
        // };
        // reader.readAsDataURL(evt.target.files[0]);
    
        // fileInput.onmouseout = function () {
        //   if (!fileInput.value) return
          
        //   let value = fileInput.value.replace(/^.*[\\\/]/, '')
        //   // console.log(this.getFileExtension(value))
        //   // el.className += ' -chosen'
        //   label.innerText = value
        // }
        // this.uploadFile(fileInput);
    }

    render() {
        return html`
        <!-- <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"> -->
        <div class="mainwrapper drop-area content">
            <form id="file-form" class="upload-form">
                
                <label class="label is-capitalized">${this.e && this.e.name}</label>
                <!-- <div class='ii-file-input control'>
                    <input type='file'
                    class="input"
                    @change="${this.handleFile}"
                    multiple accept='text/*|pdf/*|word/*/|excel/*|powerpoint/*|zip/*'
                    >
                    <div class="is-flex" style="${this.checkValidation}">
                        <span class='file-btn file-cta'>Choose file</span>
                        <label class='input' id="display" data-js-label>Choose ${this.extensions ? html`${this.extensions} file here` : html` file here`}</label>
                    </div>
                    <p id="warning" style="color:#ff3860;"></p>
                </div> -->
                <div class="file has-name is-fullwidth">
                    <label class="file-label">
                        <input class="file-input" type="file" @change="${this.handleFile}"
                        multiple accept='${this.e && this.e.kind}'>
                            <span class="file-cta">
                            <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                            <span class="file-label">
                            Choose a file…
                            </span>
                        </span>
                        <span class="file-name">
                            ${this.isFileSelected ? html`

                            `:html`
                              
                            `}
                        </span>
                    </label>
                   
                </div>
                <div class="is-flex" style="${this.checkValidation}">
                        <p id="warning"></p>
                    </div>
                ${this.uploading ? html`
                    <div class="pro-container"><div>Uploading file...</div><progress class="progress is-small is-primary" max="100">15%</progress></div>

                ` :html``}
            </form>
        </div>
        `
    }
}

customElements.define(FileInput.is, FileInput)