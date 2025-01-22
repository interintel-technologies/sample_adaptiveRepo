import { css, html,unsafeCSS } from 'lit-element';
import { ProductImageUploadStyles } from './product-image-upload-css';
import { ProductImageUploadBase } from '../../base/elements/product-image-upload';
import globalStyles from '../../App.css?raw'
class ProductImageUpload extends ProductImageUploadBase {
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            ProductImageUploadStyles,
            css`
                :host {
                    display:block;
                }
            `
        ]
    }

    static get properties() {
        return {
            uploadedImages:Array,
            selectedFiles: Array,
            e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.uploadedImages = [];
        this.selectedFiles = [];
        this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
    }

    // firstUpdated() {
    //     this.loader.then(()=>{
    //         this.getAlreadyUploadedImages();
    //     });
    // }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            this.getAlreadyUploadedImages();

        }
    }

    getAlreadyUploadedImages() {
        this.rows.forEach(row=>{
            this.uploadedImages = [...this.uploadedImages, "/media/"+row[0]];
        });

        this.value = [...this.uploadedImages];
    }

    fileInputChangeHandler() {
        const fileInput = this.shadowRoot.querySelector("#file-input");
    
        if (fileInput.files && fileInput.files.length) {
            for (let i = 0; i < fileInput.files.length; i++) {
                const file=fileInput.files[i];
                
                this.uploadedImages = [...this.uploadedImages, window.URL.createObjectURL(file)];
                this.uploadImage(file);
            }
        }
    }

    removeUploadedImageClickHandler(image) {
        const imageIndex  = this.uploadedImages.findIndex(uploadedImage => uploadedImage === image);

        const tempUploadedImages = this.uploadedImages;
        const tempValue = this.value;

        tempUploadedImages.splice(imageIndex, 1);
        tempValue.splice(imageIndex, 1);

        this.uploadedImages = [...tempUploadedImages];
        this.value = [...tempValue];
    }

    uploadImageView(image, clss) {
        return html`
            <li class="image-item is-flex">
                <adaptive-ui-icon class="remove-icon"  icon="remove-circle" @click=${()=>this.removeUploadedImageClickHandler(image)}></adaptive-ui-icon>
                <img class="upload-image ${clss}" src="${image}" alt="product-image"/>
            </li>
        `;
    }

    largeImagesList() {
        return html`
            <li class="list is-flex">
                ${
                    this.uploadedImages.map((image,index)=>{
                        return (index === 0 || index%3 === 0) ? this.uploadImageView(image, "large-image") :
                            html``
                    })
                }
            </li>
        `;
    }

    smallImagesList() {
        return html`
            <li class="list is-flex">
                ${
                    this.uploadedImages.map((image,index)=>{
                        return (index !== 0 && index%3 !== 0) ? this.uploadImageView(image, "small-image") :
                            html``
                    })
                }
            </li>
        `;
    }

    static get is() {
        return "product-image-upload";
    }

    render() {
        return html`
            <div class="column content">
                <div class="card-header">
                    <h4 class="card-header-title">${this.e.name}</h4>
                </div>
                <div class="card-content">
                    <div id="columns-container" class="columns is-flex">
                        <div id="images-column" class="column card is-three-quarters" style="display: ${this.uploadedImages.length > 0 ? "flex" : "none"};">
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
        `;
    }
}

customElements.define(ProductImageUpload.is,ProductImageUpload);