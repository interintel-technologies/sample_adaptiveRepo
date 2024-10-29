import{L as p,S as h,i as r,r as g,g as m,k as a,a as d,j as n}from"./index-C2PWchud.js";import{f as x}from"./fileupload-mixin-CBm8nuD9.js";import{u as v}from"./utils-mixin-D5aAiqNi.js";import{I as b}from"./input-shared-default-BN_nkxH9.js";import"./polymer-legacy-CVdXdTHq.js";const u=class extends v(x(h)){constructor(){super(),this._validFileExtensions=[],this.uploading=!1,this.validationError=!1}static get is(){return"file-input"}static get properties(){return{_validFileExtensions:Array,extensions:String,title:String,required:Boolean,value:String,uploading:Boolean,validationError:Boolean}}getValue(){return this.value}getName(){return this.e.formName}getFileSizeLimit(){const i=this.e.details.file_size_limit;return i!=null?console.log("getFileSizeLimit - ",this.e.details.file_size_limit," bytes"):console.log("getFileSizeLimit set to DEFAULT 12MB"),i}validate(){return this.required&&!this.getValue()?new this.Validation(!1,"invalid file try again"):new this.Validation(!0,"valid")}firstUpdated(i){super.firstUpdated(i)}_hasExtension(i,e){return new RegExp("("+e.join("|").replace(/\./g,"\\.")+")$").test(i)}updateUploadMessage(i){p.i.incompleteDev("file upload not displayed to user ")}responseHandler(i){const e=i.split("|"),t=e[0],s=e[1],l=this.shadowRoot.querySelector("#warning");console.log(e),t==="FAIL "?(l.style.display="block",l.innerText=s):(l.style.display="none",this.value=i,this.updateUploadMessage("File successfully uploaded. Please Proceed!"))}uploadFile(i){var e=i.files[0];const t=this,s="File Size is Above allowed Limit of 12MB",l=this.shadowRoot.querySelector("#warning");e&&(t._validFileExtensions&&t._hasExtension(e.name,t._validFileExtensions)?(this.uploadTempFile(e,"image",null,this.getFileSizeLimit()).then(o=>{this.responseHandler(o.response),this.uploading=!1}).catch(o=>{p.i.incompleteDev("Better error handling.",o),this.uploading=!1}),e.size>this.getFileSizeLimit()&&(l.style.display="block",l.innerHTML=s)):(this.uploading=!1,this.updateUploadMessage(e.type+" not supported! Please upload a "+t.extensions+" file")))}resetUpload(){this.uploading=!1,this.value=""}init(i,e){super.init(i,e);var t=this;t.required=this.e.required,t.icon=i.icon,t.title=u.toTitleCase(i.name),this.value=i.defaultValue,t.extensions=i.kind,t.extensions&&(this._validFileExtensions=this.extensions.split("|").map(function(s){return"."+s}))}},y=r`
.input{
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
}
.file-cta{
    border-color: trnasparent;
}
.file-cta, .file-name{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-color: transparent;
    padding: 18.5px 30px!important;
    outline: none;
}
.file-input-label{
    font-size: 12px;
    font-weight: 700;
    padding-bottom:8px;
    color: rgb(1, 50, 67);
}
.pro-container{
    margin:16px;
    margin-top:4px;
  }

  #warning{
    display: none;
    position: relative;
    margin-top:4px;
    color:#ff3860 !important;
    font-size:12px;
}
.lbl {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;  
    position: absolute;
    top: -8px;
  }
#divinput{
    background-color: #fff;
    border-radius: 6px;  
    border: 1px solid #ccc;
}
.danger {
    color:#ff3860!important;
}
.success {
    color: #23d160!important;
}
.file-name{
    border: 1px solid var(--input-border-color);
    box-shadow: inset 0 .0625em .125em var(--scheme-invert--5--rgba);
    border-radius: 4px;
    padding-top:9px !important;

}
.file-cta{
    border: 1px solid var(--input-border-color);
}


`;/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const w=r`
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
    // background: #fff;    
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
`;class c extends u{static get styles(){return[g(m),y,b,w,r`
                :host {
                    display: block;
                }
            `]}static get is(){return"file-input"}static get properties(){return{isFileSelected:Boolean,e:{type:Object}}}constructor(){super(),this.uploading=!1,this.isFileSelected=!1,this.validationError=!1}updated(e){e.has("e")}getValue(){return this.value}checkValidation(){this.validationError?this.validErrorValue:this.validErrorValue}valid(e){const t=this,s=this.shadowRoot.querySelector("#warning");s.style.display="none",this.validationError=!1,this.validErrorValue="valid",setTimeout(function(){t.resetStyles()},3e3)}resetStyles(){this.validationError=!1,this.validErrorValue=void 0}invalid(e){const t=this.shadowRoot.querySelector("#warning");t.style.display="block",t.textContent=e,this.validationError=!0,this.validErrorValue="invalid"}updateUploadMessage(e){const t=this.shadowRoot.querySelector("#warning");t.style.display="block",t.textContent=e}handleFile(e){this.uploading=!0,this.isFileSelected=!0;const t=this.shadowRoot.querySelector('[type="file"]'),s=this.shadowRoot.querySelector("#warning"),l=this.qs(".file-name"),o=e.target.files[0];if(o.name.split(".")[0],o.type.split("/")[1],this.value!=null){const f=this.value.split("/")[5];l.innerHTML=f}s.style.display="none",this.uploadFile(t)}render(){return a`
        <!-- <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"> -->
        <div class="mainwrapper drop-area content">
            <form id="file-form" class="upload-form">
                
                <label class="label is-capitalized">${this.e&&this.e.name}</label>
                <!-- <div class='ii-file-input control'>
                    <input type='file'
                    class="input"
                    @change="${this.handleFile}"
                    multiple accept='text/*|pdf/*|word/*/|excel/*|powerpoint/*|zip/*'
                    >
                    <div class="is-flex" style="${this.checkValidation}">
                        <span class='file-btn file-cta'>Choose file</span>
                        <label class='input' id="display" data-js-label>Choose ${this.extensions?a`${this.extensions} file here`:a` file here`}</label>
                    </div>
                    <p id="warning" style="color:#ff3860;"></p>
                </div> -->
                <div class="file has-name is-fullwidth">
                    <label class="file-label">
                        <input class="file-input" type="file" @change="${this.handleFile}"
                        multiple accept='${this.e&&this.e.kind}'>
                            <span class="file-cta">
                            <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                            <span class="file-label">
                            Choose a file…
                            </span>
                        </span>
                        <span class="file-name">
                            ${this.isFileSelected?a`

                            `:a`
                              
                            `}
                        </span>
                    </label>
                   
                </div>
                <div class="is-flex" style="${this.checkValidation}">
                        <p id="warning"></p>
                    </div>
                ${this.uploading?a`
                    <div class="pro-container"><div>Uploading file...</div><progress class="progress is-small is-primary" max="100">15%</progress></div>

                `:a``}
            </form>
        </div>
        `}}customElements.define(c.is,c);const q=({element:i})=>{const e=d.useRef(null);return d.useEffect(()=>{if(e.current&&i){const t=e.current;t.e=i}},[i]),n.jsx(n.Fragment,{children:i&&n.jsx("file-input",{id:"file-input",ref:e})})};export{q as default};
