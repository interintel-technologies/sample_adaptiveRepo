import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const PriceSelectBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'price-select';
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      q: {type: String, value: ''},
      dropdownValue: Object,
      rows: {value: []},
      params: {type: Object, value: ''},
      columnSize: {type: Array},
      selected: String,
      colorType: {type: Array},
    };
  }

  getValue() {
    return this.selected;
  }

  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
    if (this.e.required && !this.getValue()) {
      return new this.Validation(false, 'valid');
    }

    return new this.Validation(true, 'valid');
  }


  /**
     * Formats a Row for Displaying
     * the first column is assumed to be the Id
     * the columns that are action links should be ignored
     *
     * @param data
     * @return {*}
     * @private
     */
  _dataJoined(data) {
    const self = this;

    return data.filter(function(item, index) {
      if (index === 0 || (self.cols.length && self.cols[index]['type'] === 'href')) {
        return false;
      }

      return true;
    }).join(' ');
  }


  dscDataName() {
    return this.e.defaultValue;
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {
      // console.log(dsc);

      self.cols = dsc.cols;
      self.rows = dsc.rows;
      self.q = '';

      self.groups = dsc.groups;
      self.currentGroups = self.groups;

      self.data = dsc.data;
      self.currentData = self.data;

      if (Object.keys(self.rows).length > 0 && !self.dropdownValue) {
        self.dropdownValue = self.rows[0][0];
      }
    });
  }

  setSelected(num) { // todo convert to setter
    this.selected = num;
    //   console.log("selected"+ num );
  }


  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);

    self.title = PriceSelectBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();
    self.dropdownValue = Number(pElement.kind);
    self.loader = this.loadData();
    self.colorType = ['success', 'secondary', 'warning', 'danger', 'primary'];
  }
};
