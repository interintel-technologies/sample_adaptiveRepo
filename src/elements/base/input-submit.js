import {utilsMixin} from "../../core/mixins/utils-mixin";
import { BaseElement } from '../../core/base-element';


export const InputSubmitBase = class extends utilsMixin(BaseElement) {

    static get is() {
        return 'input-submit';
    }

        static get properties(){
            return {
                params: {type: Object, value: {}},
                type:String
            }
        }
        getInput(){
          return this.qs('#input');
        }
        getValue(){
            return this.getInput().value;
        }

        getName(){
            return this.e.formName;
        }


        validate(){
            if((this.e.required || this.required) && ! this.getValue() ){
                return false;
            }
            return this.$.input.validate()
        }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
            this.type = "number";

        }
        init(pElement, loader) {
            super.init(pElement,loader);
            let self = this;
            self.title = InputSubmitBase.toTitleCase(pElement.name);
            this.required = pElement.min && pElement.min > 0;

            this.value = pElement.defaultValue || '';



        }


}

