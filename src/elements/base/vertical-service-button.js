
import {dataSourceMixin} from '../../core/mixins/datasource-mixin'
import {BaseElement} from '../../core/base-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';

import {LitElement} from 'lit-element';


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
    
    
        self.addEventListener('click', function(evt) {
            evt.preventDefault();
            self._dialog(self.e.service, self.params);
        });
        }
        init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;
    
        self.params = loader.pl.paramsCopy();
        }

}

