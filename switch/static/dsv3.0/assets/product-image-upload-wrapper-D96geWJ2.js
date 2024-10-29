import{i as d,S as m,r as p,g,k as l,a as r,j as o}from"./index-C2PWchud.js";import{f as h}from"./fileupload-mixin-CBm8nuD9.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";import"./polymer-legacy-CVdXdTHq.js";const v=d`
    #images-column {
        max-height:370px;
        overflow-y:auto;
        border: 1.3px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .columns {
        flex:1;
        flex-wrap:wrap;
    }
    #columns-container{
        margin:0;
    }
    #button-column {
        flex:1;
        justify-content:center;
        align-items:center;
        width:fit-content;
    }
    .card-header {
        box-shadow: none;
    }
    .card-header-title {
        margin: 0 !important;
    }
    #button-container {
        flex-direction:column;
        max-width:fit-content;
        align-items:center;
    }
    .button {
        background-color: black;
        padding: 20px 35px;
        width:fit-content;
        border: none;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        transform: scale(1.05);
        border: none !important;
    }
    .button:active {
        transform: scale(0.95);
    }
    .subtitle {
        width:fit-content;
    }
    .show-images-column{
        display:flex;
    }
    .image-item {
        position:relative;
        border: 1.3px solid rgb(183, 181, 181);
        border-radius: 6px;
        justify-content:center;
        height:fit-content;
        margin:17px 4px;
        padding:5px;
    }
    .upload-image {
        object-fit:contain;
        width:100%
    }
    .add-btn {
        position:relative;
        padding: 60px;
        background-color: var(--primary);
    } 
    .add-icon {
        position:absolute;
        width:38px !important;
        height: 38px !important;
        top: 50%;
        transform: translateY(-50%);
        left:50%;
        margin-left:-19px;
        fill: white;
    }
    .remove-icon {
        position:absolute;
        width:34px !important;
        height: 34px !important;
        top: 0;
        left:0;
        margin:-17px 0 0 -17px;
        background-color: white;
        cursor:pointer;
        fill: var(--link);
    }
    .remove-icon:hover {
        fill: var(--primary);
    }
    #file-input {
        display:none;
    }
    .list {
        flex-direction:column;
        box-shadow:none;
    }
    h5 {
        margin-top: 10px !important;
    }
    
    .large-image {
        height:317px;
    }
    .small-image {
        height:135px;
    }

    .title-danger{
        color: #ff2b56;
    }
    .title-success{
        color: #23d160 !important;
    }
    .add-btn-success {
        background-color: #23d160 !important;   
    }
    #warning-text{
        display:none;
    }
    @media screen and (max-width: 550px) {
        #images-column {
            min-width:100%
        }
        .large-image,
        .small-image {
            height:200px;
        }
        .image-item {
            margin:10px;
        }
    }
`,c=class extends f(h(m)){static get properties(){return{icon:String,title:String,selected:String,value:Array,fileName:String,required:Boolean,columnSize:Array}}constructor(){super(),this.value=[]}getName(){return this.e.formName}getValue(){return this.value}uploadImage(i){this.uploadTempFile(i,"image",/image.*/).then(e=>this.responseHandler(e)).catch(e=>{console.warn("[INCOMPLETE DEV] Better error handling.",e)})}responseHandler(i){this.value=[...this.value,i],console.log(this.value,"background-color: #7FFF00; color: #FFF;")}updateUploadMessage(i){Logger.i.incompleteDev("file upload not displayed to user ")}validate(){if(!this.getValue())return new this.Validation(!1,"invalid");const i=this.getValue();return i.length<this.e.min||i.length>this.e.max?this.e.min==this.e.max?new this.Validation(!1,this.e.name+" value is invalid. Please add "+this.e.max+" images."):new this.Validation(!1,this.e.name+" value is invalid. Only "+this.e.min+" — "+this.e.max+" images accepted."):new this.Validation(!0,"valid")}valid(i){const e=this.shadowRoot.querySelector(".title"),t=this.shadowRoot.querySelector(".add-btn"),a=this.shadowRoot.querySelector("#warning-text");t.classList.add("add-btn-success"),e.classList.remove("title-danger"),e.classList.add("title-success"),a.style.display="none",setTimeout(()=>{e.classList.remove("title-success"),t.classList.remove("add-btn-success")},3e3)}invalid(i){const e=this.shadowRoot.querySelector(".title"),t=this.shadowRoot.querySelector("#warning-text");e.classList.add("title-danger"),t.innerText=i.validationMessage,t.style.display="block"}dscDataName(){return this.e.defaultValue}init(i,e){super.init(i,e);var t=this;t.required=this.e.required||i.min&&i.min>0,t.title=c.toTitleCase(i.name),t.icon=i.icon,t.params=t.pl.paramsCopy(),i.kind?this.selected=Number(i.kind):t.required&&t.rows.length>0&&(t.selected=t.rows[0][0]),t.loader=this.loadData()}};class n extends c{static get styles(){return[p(g),v,d`
                :host {
                    display:block;
                }
            `]}static get properties(){return{uploadedImages:Array,selectedFiles:Array,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.uploadedImages=[],this.selectedFiles=[],this.e=null,this.rows=[],this.cols=[]}updated(e){(e.has("rows")||e.has("cols"))&&this.getAlreadyUploadedImages()}getAlreadyUploadedImages(){this.rows.forEach(e=>{this.uploadedImages=[...this.uploadedImages,"/media/"+e[0]]}),this.value=[...this.uploadedImages]}fileInputChangeHandler(){const e=this.shadowRoot.querySelector("#file-input");if(e.files&&e.files.length)for(let t=0;t<e.files.length;t++){const a=e.files[t];this.uploadedImages=[...this.uploadedImages,window.URL.createObjectURL(a)],this.uploadImage(a)}}removeUploadedImageClickHandler(e){const t=this.uploadedImages.findIndex(u=>u===e),a=this.uploadedImages,s=this.value;a.splice(t,1),s.splice(t,1),this.uploadedImages=[...a],this.value=[...s]}uploadImageView(e,t){return l`
            <li class="image-item is-flex">
                <adaptive-ui-icon class="remove-icon"  icon="remove-circle" @click=${()=>this.removeUploadedImageClickHandler(e)}></adaptive-ui-icon>
                <img class="upload-image ${t}" src="${e}" alt="product-image"/>
            </li>
        `}largeImagesList(){return l`
            <li class="list is-flex">
                ${this.uploadedImages.map((e,t)=>t===0||t%3===0?this.uploadImageView(e,"large-image"):l``)}
            </li>
        `}smallImagesList(){return l`
            <li class="list is-flex">
                ${this.uploadedImages.map((e,t)=>t!==0&&t%3!==0?this.uploadImageView(e,"small-image"):l``)}
            </li>
        `}static get is(){return"product-image-upload"}render(){return l`
            <div class="column content">
                <div class="card-header">
                    <h4 class="card-header-title">${this.e.name}</h4>
                </div>
                <div class="card-content">
                    <div id="columns-container" class="columns is-flex">
                        <div id="images-column" class="column card is-three-quarters" style="display: ${this.uploadedImages.length>0?"flex":"none"};">
                            <div class="columns">
                                <div class="column is-three-quarters">
                                    ${this.largeImagesList()}
                                </div>
                                <div class="column">
                                    ${this.smallImagesList()}
                                </div>
                            </div>
                        </div>
                        <div id="button-column" class="column is-flex">
                            <div id="button-container" class="column is-flex">
                                <label for="file-input" class="button add-btn" title="Open file directory.">
                                    <iron-icon icon="add" class="add-icon"></iron-icon>
                                </label>
                                <input id="file-input" type="file" accept="image/*" @change=${this.fileInputChangeHandler} multiple>
                                <h5>Add images</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `}}customElements.define(n.is,n);const b=i=>{const{element:e,rows:t,paramsCallback:a}=i,s=r.useRef(null);return r.useEffect(()=>{s.current&&e&&(s.current.e=e,s.current.rows=t)},[e,t,i,a]),o.jsx("div",{children:e?o.jsx("product-image-upload",{id:"product-image-upload",ref:s}):o.jsx("p",{children:"Loading data..."})})},L=x(b);export{L as default};
