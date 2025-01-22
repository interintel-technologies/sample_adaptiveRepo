/* eslint-disable semi */
import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const MonthYearBase = class extends utilsMixin( SerializableElement) {
  static get is() {
    return 'month-year';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);

    self.title = MonthYearBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();
    // self.dropdownValue = Number(pElement.kind);

    self.maxlength = pElement.max;
  }
}
