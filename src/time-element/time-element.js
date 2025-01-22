

import {TimeElementBase} from '../../base/elements/time-element';
import { InputMixin } from "../../base/mixins/InputMixin";

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TimeElement extends InputMixin(TimeElementBase) {

	get type() {
		return "time"
	}
}

customElements.define(TimeElement.is, TimeElement);
