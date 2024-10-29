import{L as s,S as u,i as l,r as c,g as f,k as m,a as o,j as r}from"./index-C2PWchud.js";import"./iron-icon-Ci-yo7Ra.js";import"./iron-icons-CfX5YBfy.js";import"./fa-icon-COAiXmZs.js";import{f as g}from"./fileupload-mixin-CBm8nuD9.js";import{u as h}from"./utils-mixin-D5aAiqNi.js";import{I as v}from"./input-shared-default-D8777CY5.js";import"./iron-flex-layout-C17s8gyg.js";import"./polymer-legacy-CVdXdTHq.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./lit-html-dRijB2IX.js";const n=class extends h(g(u)){static get is(){return"image-input"}static get properties(){return{icon:String,title:String,value:String,fileName:String,pattern:String,required:Boolean}}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.required&&!this.getValue()&&!this.e.defaultValue?new this.Validation(!1,"this input is invalid"):new this.Validation(!0,"this input is valid")}valid(i){}invalid(i){}firstUpdated(i){super.firstUpdated(i),this.e.defaultValue&&this.updatePreview("/media/"+this.e.defaultValue)}updateUploadMessage(i){s.i.incompleteDev("image upload progress not displayed to user ")}updatePreview(i){s.i.incompleteDev("image uploaded not previewed to user ")}uploadImage(i){const e=this;var t=i.files[0],d=/image.*/;t&&e.uploadTempFile(t,"image",d).then(a=>{this.updateUploadMessage("Image successfully uploaded. Please Proceed!"),e.value=a.response,e.fileName=a.name,this.updatePreview(a.result)}).catch(a=>{s.i.incompleteDev("Better error handling.",a)})}resetUpload(){this.value="",this.fileName=""}init(i,e){super.init(i,e);var t=this;t.required=this.e.required||i.min&&i.min>0,t.icon=i.icon,t.title=n.toTitleCase(i.name),t.params=e.pl.paramsCopy()}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const y=l`

`;/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const x=l`
.file-preview{
    width: 10%;
    background: #e5e5e5;
}
.drop-area{
    width: 100%;
}
.drop-area form.upload-form{
    width: 100%;
   
    padding-bottom: 16px
}
.ii-file-input {
    display: inline-block;
    text-align: left;
    background: #fff;
    padding:3px 13px;
    width: 100%;
    position: relative;
    border-radius: 3px;
}
.ii-file-input > [type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;
    cursor: pointer;
}
.ii-file-input > .button {
    display: inline-block;
    cursor: pointer;
    background: #eee;
    padding: 8px 16px;
    border-radius: 2px;
    margin-right: 8px;
}
.ii-file-input:hover > .button {
    background: dodgerblue;
    color: white;
}
.ii-file-input .label {
    white-space: nowrap;
    opacity: .9;
    position: relative;
    margin-left: 20px;
    top: 6px;
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #4A4A4A;
    padding-top: 4px;
}
.ii-file-input.-chosen .label {
    opacity: 1;
}
.file-btn{
    font-size: 14px;
    font-weight: 600;
    color: #fff!important;
    background-color: var(--primary)!important;
    padding: 20px 30px;
}
`;class p extends n{static get styles(){return[c(f),v,y,x,l`
        :host {
          display: block;
        }
      `]}static get properties(){return{e:{type:Object}}}updated(e){e.has("e")&&console.log("Updated properties:",this.e)}render(){return m`
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
        `}constructor(){super(),this.e=null}getValue(){return this.value}firstUpdated(){}updatePreview(e){var t=this.qs("#display");t.src=e}updateUploadMessage(e){const t=this.shadowRoot.querySelector("#label");t.textContent=e}handleFile(){const e=this.shadowRoot.querySelector('[type="file"]');this.uploadImage(e)}valid(e){const t=this.shadowRoot.querySelector("#errorDisplay");t.style.display="none"}invalid(e){const t=this.shadowRoot.querySelector("#errorDisplay");t.style.display="block",t.textContent=e}cancelUpload(e){this.resetUpload(),this.updateUploadMessage("")}}customElements.define(p.is,p);const M=({element:i})=>{const e=o.useRef(null);return o.useEffect(()=>{const t=e.current;t&&i&&(t.e=i)},[i]),r.jsx("div",{children:i?r.jsx("image-input",{id:"image-input",ref:e}):r.jsx("p",{children:"Loading data..."})})};export{M as default};
