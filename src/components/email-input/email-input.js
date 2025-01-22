import { InputMixin } from "../../base/mixins/InputMixin";
import { EmailInputBase } from '../../base/elements/email-input';

class EmailInput extends InputMixin(EmailInputBase) {
	get type() {
		return 'email';
	}
}

customElements.define(EmailInput.is, EmailInput);
