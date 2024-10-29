import{i as d,S as c,r as u,g as h,k as o,a as r,j as a}from"./index-C2PWchud.js";import"./iron-icon-Ci-yo7Ra.js";import{f}from"./fileupload-mixin-CBm8nuD9.js";import{u as m}from"./utils-mixin-D5aAiqNi.js";import"./iron-flex-layout-C17s8gyg.js";import"./polymer-legacy-CVdXdTHq.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const g=d`
    .column {
        padding:16px;
    }
    .files-drop-zone {
        display:flex;
        height:300px;
        border:2px dashed var(--primary);
        border-radius:10px;
        align-items:center;
        padding:10px;
        justify-content:center
    }
    /* .files-drop-zone * {pointer-events: none;} */
    .files-drop-zone-drag {
        border:2px solid var(--link);
    }
    .instructions-container {
        display:flex;
        flex-direction:column;
        width:fit-content;
        align-items:center;
        flex:1;
        padding:5px;
        height:fit-content;
    } 
    .icon-container {
        width:100px;
        height:100px;
        border-radius:50%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .instruction-text {
        text-align:center;
        color: var(--grey-darker);
    }
    .browse-text {
        color:var(--primary);
    }
    .browse-text:hover {
        color:var(--primary);
    }
    span * {
        pointer-events: auto !important;
        cursor: pointer !important;
    }
    .uploads-list {
        display:none;
        flex:1;
        flex-direction:column;
        height:100%;
        overflow-y:auto;
        padding:0;
        max-height:300px;
        overflow-x:hidden;
    }
    .show-list {
        display:flex;
    }
    #file-input {
        display:none;
    }
    
    .upload-item {
        display:flex;
        flex-direction:column;
        padding:25px 10px 10px 10px;
        margin: 6px;
        border:1px solid var(--grey-darker);
        border-radius:3px;
        position:relative;
    }
    .upload-image {
        height:140px;
        max-width:100%;
        object-fit:contain;
    }
    .upload-name {
        margin:5px;
        color: var(--grey-darker);
    }
    .remove-upload {
        position:absolute;
        top:0;
        right:0;
        margin:4px;
        width:20px !important;
        height: 20px !important;
    }
    .remove-upload:hover {
        cursor:pointer;
        border-radius:50%;
        background-color:#f5f6e9;
    } 
    .pro-container{
        margin:16px;
        margin-top:4px;
    } 
    .label {
        width: 100%;
        color: var(--grey-darker);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
    }
`,l=class extends m(f(c)){constructor(){super(),this.uploads=[]}static get properties(){return{icon:String,service:String,title:String,value:String,fileName:String,required:Boolean,columnSize:Array,uploads:Array}}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.saveUploads(),console.log("this is required",this.required,this.getValue()),this.required&&!this.getValue()&&!this.e.defaultValue?(this.shadowRoot.querySelector(".files-drop-zone").style.background="#FDEDED",this.shadowRoot.querySelector(".validation-info").style.display="block",this.shadowRoot.querySelector(".validation-info").textContent="this input is invalid",new this.Validation(!1,"this input is invalid")):new this.Validation(!0,"this input is valid")}valid(t){}invalid(t){}firstUpdated(t){super.firstUpdated(t)}updated(t){if(t.has("e")){console.log("this is bulk upload in base ",this.e);var e=this;e.required=this.e.required||this.e.min&&this.e.min>0,e.icon=this.e.icon,e.title=l.toTitleCase(this.e.name),e.service=this.e.service,e.maxlength=this.e.max}}saveUploads(){this.value=this.uploads.map(function(t){return`${t.response}:${t.name}`}).join("|")}init(t,e){super.init(t,e);var i=this;i.required=this.e.required||t.min&&t.min>0,i.icon=t.icon,i.title=l.toTitleCase(t.name),i.service=t.service,i.params=e.pl.params,i.maxlength=t.max}},v=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-onPrimaryContainer");class n extends l{static get styles(){return[u(h),g,d`
        :host {
          display: block;
        }
      `]}static get properties(){return{files:Array,uploading:Boolean,e:{type:Object}}}constructor(){super(),this.files=[],this.uploading=!1,this.e=null}updated(e){super.updated(e),e.forEach((i,s)=>{s==="files"&&this.filesListVisibility()})}onFilesDropHandler(e){if(e.preventDefault(),e.dataTransfer.items){for(let i=0;i<e.dataTransfer.items.length;i++)if(e.dataTransfer.items[i].kind==="file"){const s=e.dataTransfer.items[i].getAsFile();this.processUpload(s)}}}onFileInputChangeHandler(){const e=this.shadowRoot.querySelector("#file-input");if(e.files&&e.files.length)for(let i=0;i<e.files.length;i++){const s=e.files[i];this.processUpload(s)}}onDragEnterFilesDropZoneHandler(){this.shadowRoot.querySelector(".files-drop-zone").classList.add("files-drop-zone-drag")}onDragLeaveFilesDropZoneHandler(){this.shadowRoot.querySelector(".files-drop-zone").classList.remove("files-drop-zone-drag")}onRemoveUploadClickHandler(e){const i=this.uploads.concat(),s=this.files.concat();i.splice(e,1),this.uploads=[...i],s.splice(e,1),this.files=[...s]}processUpload(e){const i=e.type.match(/image/)?window.URL.createObjectURL(e):void 0;this.files=[...this.files,{name:e.name,type:e.type,src:i}],this.uploadFile(e)}filesListVisibility(){const e=this.shadowRoot.querySelector("#small-list"),i=this.shadowRoot.querySelector("#large-list"),s=this.shadowRoot.querySelector(".files-drop-zone"),p=s.offsetWidth;this.files.length>0?(p<520?e.classList.add("show-list"):i.classList.add("show-list"),s.classList.add("files-drop-zone-drag")):(i.classList.remove("show-list"),e.classList.remove("show-list"),s.classList.remove("files-drop-zone-drag"))}uploadFile(e){this.uploading=!0,this.uploadTempFile(e,"file",null).then(i=>{this.uploading=!1,this.uploads=[...this.uploads,{name:i.name,response:i.response,src:i.result}]}).catch(i=>{this.uploading=!1,console.warn("[INCOMPLETE DEV] Better error handling.",i)})}valid(e){this.shadowRoot.querySelector(".validation-info").style.display="none",this.shadowRoot.querySelector(".validation-info").textContent="Required"}invalid(e){this.shadowRoot.querySelector(".validation-info").style.display="block",e&&(this.shadowRoot.querySelector(".validation-info").textContent=e)}filesList(e){return o`
      <ul id="${e}" class="uploads-list">
        <li style="position:sticky; top:0; background-color:var(--var(background-color)); z-index:1;"><h4 class="ml-1" style="margin-left:10px; color: var(--grey-darker)">Selected Files</h4></li>
        ${this.files.map((i,s)=>o`
            <li class="upload-item" key="${s}">
              ${i.src?o`
                  <img class="upload-image" src="${i.src}"/>
                `:""}
              <h4 class="upload-name">${i.name}</h4>
              <adaptive-ui-icon datacolor="${v}"  icon="icons:MdClose" @click=${()=>this.onRemoveUploadClickHandler(s)}></adaptive-ui-icon>
              
            </li>
          `)}
      </ul>
    `}static get is(){return"bulk-upload"}render(){return o`
      <section class="column">
        <h3 class="label">${this.e.name}</h3>
        <p>${this.e.details.description}</p>
        ${this.uploading?o`
            <div class="pro-container">
              <div>Uploading file...</div>
              <progress class="progress is-small is-primary" max="100">15%</progress>
            </div>
          `:o``}
        <div class="files-drop-zone" 
          @drop=${e=>this.onFilesDropHandler(e)} 
          @dragover=${e=>e.preventDefault()} 
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
    `}}customElements.define(n.is,n);const q=({details:t,element:e})=>{const i=r.useRef(null);return r.useEffect(()=>{i.current&&t&&(i.current.details=t)},[t]),r.useEffect(()=>{if(i.current&&e){const s=i.current;s.e=e}},[e]),a.jsx("div",{children:a.jsx("bulk-upload",{id:"bulk-upload",ref:i})})};export{q as default};
