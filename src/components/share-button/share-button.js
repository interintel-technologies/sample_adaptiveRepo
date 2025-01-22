import {html, css,unsafeCSS} from 'lit-element';
import {SectionPElementBase} from '../../base/elements/section-pelement';
import { ShareButtonStyles } from './share-button-css';
import globalStyles from '../../App.css?raw'
class ShareButton extends SectionPElementBase{


    static get styles() {
        return [unsafeCSS(globalStyles),ShareButtonStyles];
    }
    
    onShareBtnClickHandler() {
        const dataObject = {
            title:this.e.details.title,
            text:this.e.details.text,
            url:this.e.details.url,
            files:this.e.details.files
        };

        const cleanedDataObject = () => {
            const presentKeys = Object.keys(dataObject).filter(dataObjectKey=>dataObject[dataObjectKey] !== undefined);
            let tempDataObject = {};
            presentKeys.forEach(presentKey => tempDataObject = {...tempDataObject,[presentKey]:dataObject[presentKey]});
            return tempDataObject;
        }
        const files = cleanedDataObject().files;
        if(files) {
            if (navigator.canShare && navigator.canShare(files)) {
                navigator.share(cleanedDataObject())
            } else {
                console.log(`Your system doesn't support sharing files.`);
            }
        }
        else {
            navigator.share(cleanedDataObject());
        }
    }

    static get is() {return 'share-button';}

    render(){
        return html`
            <div class="content">
                <div class="hero-body">
                    <button class='button is-flex' @click=${()=>this.onShareBtnClickHandler()}>
                        <span class="icon">
                            <fa-icon class="fas fa-share" size="1.7em"></fa-icon>
                        </span>
                        <h4>Share</h4>
                    </button>
                </div>
            </div>
        `
    }
}

customElements.define(ShareButton.is, ShareButton);