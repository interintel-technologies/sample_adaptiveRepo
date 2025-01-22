
import { InputMixin } from "../../base/mixins/InputMixin";
import {DateInputBase} from '../../base/elements/date-input';

class DateInput extends InputMixin(DateInputBase) {

    // firstUpdated() {
    //     super.firstUpdated();
    //     if(this.theme.mode==="dark"){
    //         document.documentElement.style.setProperty("--calender-picker-color", this.theme.mode === "dark" ? 0 : 1);
    //     }
    // }
   
    get type() {
        return "date";
    }
}

customElements.define(DateInput.is, DateInput);
