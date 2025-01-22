
import {html, css,unsafeCSS} from 'lit-element';
import {ServiceButtonBase} from '../../base/elements/service-button';
import {ServiceButtonStyles} from './service-button-css';
import globalStyles from '../../App.css?raw'
class ServiceButton extends ServiceButtonBase {
    static get styles() {
        return [unsafeCSS(globalStyles),ServiceButtonStyles];
    }

    constructor() {
        super();
        this.e = null;
    }

    
    static get properties() {
        return {
            e: { type: Object },
        };
    }

    updated(changedProperties) {
        if (changedProperties.has('e') ) {
        }
    }

    getPadding(){
        const detailsPadding = this.e.details['padding'];
        if(detailsPadding !== undefined){
            return detailsPadding;
        }else{
            return '1.25rem';
        }
    }

    onBtnClickHandler() {
        this._dialog(this.e.service, {});
    }

    render() {
        return html`
    
            <div class="column service-button-container">
            <div class="content-area is-flex">
                <div class="icon-holder">
                <adaptive-ui-icon icon="${this.e && this.e.icon}"></adaptive-ui-icon>
                </div>
                <div class="content-text">
                    <div class="heading">
                        <h2 class="is-size-5">${ServiceButton.toTitleCase(this.e && this.e.name)}</h2>
                        <p class="subtitle">${this.e &&  this.e.details.description}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define(ServiceButton.is, ServiceButton);
