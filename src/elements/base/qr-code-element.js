import { utilsMixin } from '../../core/mixins/utils-mixin';
import { SerializableElement } from '../../core/serializable-element';
import { fileUploadMixin } from '../../core/mixins/fileupload-mixin';


export const QRCodeElementBase = class extends utilsMixin(fileUploadMixin(SerializableElement)) {
    static get is() {
        return 'qr-code-element';
    }

    static get properties() {
        return {
            value: String,
            data:String,

        };
    }

    getName() {
        const el = this.e.formName.split('=');
        return el[0];
    }

    getValue() {
        return this.value;
    }


    validate() {
        // if (this.e.required && !this.getValue() || this.getValue() === undefined || this.getValue() === null) {
        //     return new this.Validation(false, 'invalid');
        // }
        // return new this.Validation(true, 'valid');

    }

    valid(validation) { }
    invalid(validation) { }



    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

    }
    getFileSizeLimit() {
        const fileSizeLimit = this.e.details.file_size_limit;

        if (fileSizeLimit != undefined) {
            console.log("getFileSizeLimit - ", this.e.details.file_size_limit, " bytes");
        } else {
            console.log("getFileSizeLimit set to DEFAULT 12MB");
        }


        return fileSizeLimit;

    }

    uploadFile(file) {

        const self = this;

        if (!file) {
            // no file selected
            console.log("file not processed");
            return;
        }

        this.uploadTempFile(file, 'image', null, this.getFileSizeLimit()).then(upload => {
            this.responseHandler(upload["response"]);
        }).catch(reason => {
            // TODO add better error handling
            console.warn('Better error handling.', reason);

        });

    }

    responseHandler(response) {
        const splitResponse = response.split("|");
        const responseType = splitResponse[0];
        const responseMessage = splitResponse[1];

        const warningText = this.shadowRoot.querySelector('#warning');

        if (responseType === "FAIL ") {
            warningText.style.display = 'block';
            warningText.innerText = responseMessage;
        }
        else {
            warningText.style.display = 'none';
            this.value = response;// Bind Image Path
            this.updateUploadMessage('File successfully uploaded. Please Proceed!');
        }
    }



    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;

        self.required = this.e.required || (pElement.min && pElement.min > 0);
        self.title = QRCodeElementBase.toTitleCase(pElement.name);
        self.icon = pElement.icon;
        self.params = self.pl.paramsCopy();
        self.data =  pElement.defaultValue|| '';

    }
};
