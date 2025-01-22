import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const TemplateSelectorBase = class extends utilsMixin( dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'template-selector';
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      selected: String,
    };
  }

  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
    if (this.e.required && !this.getValue() || this.getValue() === undefined ) {
      return new this.Validation(false, 'invalid');
    }
    return new this.Validation(true, 'valid');
  }

  valid(validation) {}
  invalid(validation) {}

  /**
     * Formats a Row for Displaying
     * the first column is assumed to be the Id
     * the columns that are action links should be ignored
     * columns in contact_exclude should be ignored
     *
     * @param data
     * @return {*}
     * @private
     */
  _dataJoined(data) {
    const self = this;
    var concatExclude = [];
    if (self.e.details['concat_exclude']) {
      concatExclude = self.e.details['concat_exclude'].split(',');
    }


    return data.filter(function(item, index) {
      return !(index === 0 ||
                concatExclude.includes(String(index)) || // concat_exclude
                (self.cols.length && self.cols[index]['type'] === 'href'));
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
      self.q = '';
      self.currentGroups = self.groups;
      self.currentData = self.data;
    });
  }

  _computeItemsCount(rows) {
    return rows.length;
  }

  _shouldFilter(items) {
    var b = this._computeItemsCount(items);
    return (b>10);
  }

  _computeItems(rows, q) {
    const filteredItems = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];
      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1 ) {
          filteredItems.push(item);
        }
      } else {
        filteredItems.push(item);
      }

      // if(filtered_items.length>   10){
      //     break
      // }
    }
    return filteredItems;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);
    self.title = TemplateSelectorBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();
    if (pElement.kind) {
      this.selected = Number(pElement.kind);
    } else if (self.required && self.rows.length > 0) {
      self.selected = self.rows[0][0];
    }
    self.loader = this.loadData();
  }
};
