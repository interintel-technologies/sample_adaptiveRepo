import {html, css, unsafeCSS} from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';


import {BulkUploadStyles} from './bulk-upload-css';
import { BulkUploadBase } from '../../base/elements/bulk-upload';
import globalStyles from '../../App.css?raw';
const datacolor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-onPrimaryContainer');

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class BulkUpload extends BulkUploadBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      BulkUploadStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      files: Array,
      uploading:Boolean,
      e: { type: Object },
    }
  }

  constructor() {
    super();
    this.files=[];
    this.uploading = false;
    this.e = null; // Initialize `e` to null

  }



  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if(propName === "files") {
        this.filesListVisibility();
      }
    });
  }

  onFilesDropHandler(evt) {
    // Drag and Drop option
    evt.preventDefault();

    if(evt.dataTransfer.items) {      
      for (let i = 0; i < evt.dataTransfer.items.length; i++) {
        if (evt.dataTransfer.items[i].kind === 'file') {
          const file = evt.dataTransfer.items[i].getAsFile();
          this.processUpload(file);
        }
      }
    }
  }

  onFileInputChangeHandler() {
    //Browse option
    const fileInput = this.shadowRoot.querySelector("#file-input");

    if (fileInput.files && fileInput.files.length) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const file=fileInput.files[i];
        this.processUpload(file);
      }
    }
  }

  onDragEnterFilesDropZoneHandler() {
    const element = this.shadowRoot.querySelector(".files-drop-zone");
    element.classList.add("files-drop-zone-drag");
  }

  onDragLeaveFilesDropZoneHandler() {
    const element = this.shadowRoot.querySelector(".files-drop-zone");
    element.classList.remove("files-drop-zone-drag");
  }

  onRemoveUploadClickHandler(i) {
    const tempUploads=this.uploads.concat();
    const tempFiles=this.files.concat();

    tempUploads.splice(i,1);
    this.uploads=[...tempUploads];
    
    tempFiles.splice(i,1);
    this.files = [...tempFiles];
  }

  processUpload(file) {
    const fileUrl = file.type.match(/image/) ?  window.URL.createObjectURL(file) : undefined;
    
    this.files = [...this.files, {
      name: file.name,
      type:file.type,
      src:fileUrl
    }];
    this.uploadFile(file);
  }

  filesListVisibility() {
    const smallList = this.shadowRoot.querySelector("#small-list");
    const largeList = this.shadowRoot.querySelector("#large-list");
    const filesDropZone = this.shadowRoot.querySelector(".files-drop-zone");
    const filesDropZoneWidth = filesDropZone.offsetWidth;

    if(this.files.length>0) {
      //use width of files-drop-zone to decide the list to show
      if(filesDropZoneWidth < 520) {
        smallList.classList.add("show-list");

      }
      else {
        largeList.classList.add("show-list");     
      }
      filesDropZone.classList.add("files-drop-zone-drag");
    }
    else {
      largeList.classList.remove("show-list");     
      smallList.classList.remove("show-list");
      filesDropZone.classList.remove("files-drop-zone-drag");
    }
  }

  uploadFile(file) {
    this.uploading = true;
    this.uploadTempFile(file, 'file', null).then(upload => {
      this.uploading = false;
      this.uploads = [...this.uploads, {
        'name': upload['name'],
        'response': upload['response'],
        'src': upload['result'], // TODO is it possible to preview from /media/tmp/uploads/?
      }];
    }).catch(reason => {
      this.uploading = false;
      // TODO add better error handling
      console.warn('[INCOMPLETE DEV] Better error handling.', reason);
    });
  }

  valid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display='none';

    this.shadowRoot.querySelector('.validation-info').textContent= 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display='block';

    if (validation)
    {this.shadowRoot.querySelector('.validation-info').textContent= validation;}
  }

  filesList(id) {
    return html`
      <ul id="${id}" class="uploads-list">
        <li style="position:sticky; top:0; background-color:var(--var(background-color)); z-index:1;"><h4 class="ml-1" style="margin-left:10px; color: var(--grey-darker)">Selected Files</h4></li>
        ${
          this.files.map((file,index)=>html`
            <li class="upload-item" key="${index}">
              ${
                file.src ? html`
                  <img class="upload-image" src="${file.src}"/>
                `: ""
              }
              <h4 class="upload-name">${file.name}</h4>
              <adaptive-ui-icon datacolor="${datacolor}"  icon="icons:MdClose" @click=${()=>this.onRemoveUploadClickHandler(index)}></adaptive-ui-icon>
              
            </li>
          `)
        }
      </ul>
    `
  }

  static get is() {
    return 'bulk-upload';
  }

  render() {
    return html`
      <section class="column">
        <h3 class="label">${this.e.name}</h3>
        <p>${this.e.details.description}</p>
        ${
          this.uploading ? html`
            <div class="pro-container">
              <div>Uploading file...</div>
              <progress class="progress is-small is-primary" max="100">15%</progress>
            </div>
          ` :html``
        }
        <div class="files-drop-zone" 
          @drop=${e=>this.onFilesDropHandler(e)} 
          @dragover=${evt=>evt.preventDefault()} 
          @dragenter=${()=>this.onDragEnterFilesDropZoneHandler()}
          @dragleave=${()=>this.onDragLeaveFilesDropZoneHandler()}
        >
          ${this.filesList("large-list")}
          <div class="instructions-container">
            <div class="icon-container">
              <svg style="width:50px !important;height: 50px !important;" viewBox="0 -24 512.00046 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m413.492188 128.910156c-17.292969-86.765625-101.648438-143.082031-188.414063-125.789062-63.460937 12.648437-113.082031 62.238281-125.769531 125.691406-61.519532 7.089844-105.648438 62.707031-98.5625 124.230469 6.523437 56.621093 54.480468 99.339843 111.476562 99.300781h80.09375c8.847656 0 16.019532-7.171875 16.019532-16.019531 0-8.847657-7.171876-16.019531-16.019532-16.019531h-80.09375c-44.238281-.261719-79.882812-36.332032-79.625-80.566407.261719-44.234375 36.332032-79.882812 80.570313-79.625 8.164062.003907 15.023437-6.140625 15.921875-14.253906 8.132812-70.308594 71.722656-120.710937 142.03125-112.578125 59.109375 6.839844 105.738281 53.464844 112.574218 112.578125 1.34375 8.257813 8.5 14.308594 16.867188 14.253906 44.238281 0 80.097656 35.859375 80.097656 80.097657 0 44.234374-35.859375 80.09375-80.097656 80.09375h-80.09375c-8.847656 0-16.019531 7.171874-16.019531 16.019531 0 8.847656 7.171875 16.019531 16.019531 16.019531h80.097656c61.925782-.386719 111.816406-50.898438 111.433594-112.828125-.351562-56.394531-42.53125-103.753906-98.507812-110.605469zm0 0"/><path d="m313.019531 287.464844c6.148438 6.367187 16.289063 6.542968 22.652344.394531 6.363281-6.144531 6.539063-16.285156.394531-22.648437-.128906-.136719-.261718-.265626-.394531-.394532l-67.9375-67.953125c-6.246094-6.265625-16.390625-6.277343-22.65625-.03125-.007813.011719-.019531.019531-.027344.03125l-67.9375 67.953125c-6.363281 6.144532-6.539062 16.285156-.394531 22.648438 6.148438 6.363281 16.289062 6.539062 22.652344.394531.132812-.128906.265625-.261719.394531-.394531l40.609375-40.625v201.617187c0 8.847657 7.171875 16.019531 16.019531 16.019531 8.84375 0 16.015625-7.171874 16.015625-16.019531v-201.617187zm0 0"/></svg>
            </div>
            <h4 class="instruction-text">Drag and Drop or 
              <span>
                <input type="file" id="file-input" @change=${this.onFileInputChangeHandler} multiple>
                <label for="file-input" class="browse-text" >Browse </label>
              </span>
            your files.</h4>
          </div>
        </div>
        <small class="validation-info" style="display:none;">Required</small>
        ${this.filesList("small-list")}  
      </section>
    `;
  }
}

customElements.define(BulkUpload.is, BulkUpload);