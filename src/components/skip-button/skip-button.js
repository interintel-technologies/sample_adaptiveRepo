import {SkipButtonBase} from '../../base/elements/skip-button';
import {ACTION_SKIP,buttonMixin} from '../../base/mixins/button-mixin';

class SkipButton extends buttonMixin(SkipButtonBase) {

    get action() {
        return ACTION_SKIP;
      }

}

customElements.define(SkipButton.is, SkipButton);