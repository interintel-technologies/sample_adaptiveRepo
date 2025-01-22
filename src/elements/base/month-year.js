/* eslint-disable semi */
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const MonthYearBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
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
