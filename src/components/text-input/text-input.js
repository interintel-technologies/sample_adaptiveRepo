import { TextInputBase } from "../../base/elements/text-input";
import { InputMixin } from "../../base/mixins/InputMixin";

class TextInput extends InputMixin(TextInputBase) {}

customElements.define(TextInput.is, TextInput);
