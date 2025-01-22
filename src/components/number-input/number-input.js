
import {NumberInputBase} from '../../base/elements/number-input';
import { InputMixin } from "../../base/mixins/InputMixin";


class NumberInput extends InputMixin(NumberInputBase) {
	get type() {
		return 'number';
	}
}
customElements.define(NumberInput.is, NumberInput);
