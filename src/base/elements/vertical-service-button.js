
import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


;


export const VerticalServiceButtonBase = class extends utilsMixin( BaseElement) {
    constructor() {
        super();
    }


    static get is() {
        return 'vertical-service-button';
    }
    static get properties() {return {
        color: String,
    
        params: {type: Object, value: {}},
        };}
        firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const self = this;
            console.log("tjos os ",this.e);
            
    
        self.addEventListener('click', function(evt) {
            evt.preventDefault();
            this.dispatchEvent(new CustomEvent('service-call', { 
                detail: { service: this.e.service, params: {child:1} },
                bubbles: true,
                composed: true 
            }));
            // self.pl._dialog(self.e.service, self.params);
        });
        }
        init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
    
        self.params = loader.pl.paramsCopy();
        }

}

