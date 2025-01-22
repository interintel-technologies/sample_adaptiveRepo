
import {TextAreaBase} from '../../base/elements/text-area';
import { InputMixin } from '../../base/mixins/InputMixin';

class TextArea extends InputMixin(TextAreaBase) {
	
	get type() {
		return "textarea"
	}
}

window.customElements.define(TextArea.is, TextArea);
