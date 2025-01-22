import { SelectElementBase } from "../../base/elements/select-element";
import { InputMixin } from "../../base/mixins/InputMixin";



class SelectElement extends InputMixin(SelectElementBase){

    get type() {
		return 'select';
	}

    static get is() {
        return 'select-element';
    }
}

customElements.define(SelectElement.is, SelectElement);
