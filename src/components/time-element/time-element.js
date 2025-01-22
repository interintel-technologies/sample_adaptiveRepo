

import {TimeElementBase} from '../../base/elements/time-element';
import { InputMixin } from "../../base/mixins/InputMixin";

class TimeElement extends InputMixin(TimeElementBase) {

	get type() {
		return "time-input"
	}
}

customElements.define(TimeElement.is, TimeElement);
