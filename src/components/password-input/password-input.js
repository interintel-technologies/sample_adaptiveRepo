import { PasswordInputBase } from '../../base/elements/password-input';
import { InputMixin } from "../../base/mixins/InputMixin";


class PasswordInput extends InputMixin(PasswordInputBase) {
	get type() {
		return 'password';
	}
}

window.customElements.define(PasswordInput.is, PasswordInput);
