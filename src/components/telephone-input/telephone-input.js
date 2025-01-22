import {TelephoneInputBase} from '../../base/elements/telephone-input';
import { InputMixin } from "../../base/mixins/InputMixin";

class TelephoneInput extends InputMixin(TelephoneInputBase) {
	get type() {
		return 'tel';
	}
}
customElements.define(TelephoneInput.is, TelephoneInput);
