import { SubmitElementBase } from "../../base/elements/submit-element";
import { ACTION_SUBMIT,buttonMixin } from "../../base/mixins/button-mixin";


class SubmitElement extends buttonMixin(SubmitElementBase) {
  get action() {
    return ACTION_SUBMIT;
  }
}

customElements.define(SubmitElement.is, SubmitElement);