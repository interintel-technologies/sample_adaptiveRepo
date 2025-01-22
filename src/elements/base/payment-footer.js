import {utilsMixin} from "../../core/mixins/utils-mixin";
import { BaseElement } from '../../core/base-element';


export const PaymentFooterBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'payment-footer';
  }
}