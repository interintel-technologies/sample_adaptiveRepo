import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import { fileUploadMixin } from '../../core/mixins/fileupload-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';

export const ProductImageUploadBase = class extends utilsMixin(fileUploadMixin(dataSourceMixin(SerializableElement))) {
    static get properties() {
        return {
            icon: String,
            title: String,
            selected: String,
            value: Array,
            fileName: String,
            required: Boolean,
            columnSize: Array,
        };
    }

    constructor() {
        super();
        this.value = [];
    }

    getName() {
        return this.e.formName;
    }

    getValue() {
        return this.value;
    }

    uploadImage(image) {
        this.uploadTempFile(image, 'image', /image.*/).then(upload => this.responseHandler(upload)).catch(reason => {
          // TODO add better error handling
            console.warn('[INCOMPLETE DEV] Better error handling.', reason);
        });
    }

    responseHandler(response) {
        this.value = [...this.value, response];
        
    }

    updateUploadMessage(message) {
        Logger.i.incompleteDev('file upload not displayed to user ');
    }

    validate() {
        if (!this.getValue()) {
            return new this.Validation(false, 'invalid');
        }
        const inputValueInt = this.getValue();
    
        if (inputValueInt.length < this.e.min || inputValueInt.length > this.e.max) {
            if(this.e.min == this.e.max){
                return new this.Validation(false, this.e.name + ' value is invalid. Please add '+this.e.max +' images.');
            }else{
                return new this.Validation(false, this.e.name + ' value is invalid. Only '+this.e.min +" — "+this.e.max+" images accepted.");
            }
        }else{
            return new this.Validation(true, 'valid');
        }
    }

    valid(validation) {
        const title = this.shadowRoot.querySelector('.title');
        const addBtn =this.shadowRoot.querySelector(".add-btn");
        const warningText =this.shadowRoot.querySelector("#warning-text");

        addBtn.classList.add("add-btn-success");
        title.classList.remove('title-danger');
        title.classList.add('title-success');
        warningText.style.display = 'none';

        setTimeout(()=>{
            title.classList.remove('title-success');
            addBtn.classList.remove("add-btn-success");
        }, 3000);
    }

    invalid(validation) {
        const title = this.shadowRoot.querySelector('.title');
        const warningText =this.shadowRoot.querySelector("#warning-text");

        title.classList.add('title-danger');
        warningText.innerText = validation.validationMessage;
        warningText.style.display = 'block';
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;

        self.required = this.e.required || (pElement.min && pElement.min > 0);
        self.title = ProductImageUploadBase.toTitleCase(pElement.name);
        self.icon = pElement.icon;
        self.params = self.pl.paramsCopy();
            if (pElement.kind) {
                this.selected = Number(pElement.kind);
            } else if (self.required && self.rows.length > 0) {
                self.selected = self.rows[0][0];
            }
        self.loader = this.loadData();
    }
};
