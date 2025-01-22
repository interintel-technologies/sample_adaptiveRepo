import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const IndustriesCategoriesBase = class extends dataSourceMixin(utilsMixin(SerializableElement)) {
  static get is() {
    return 'industries-categories';
  }

  static get properties() {
    return {
      icon: String,
      data_name: {type: String, value: ''},
      title: String,
      q: {type: String},
      required: Boolean,
      industrySection: {type: Number},
      industryDivision: {type: Number},
      industryGroup: {type: Number},
      industryClass: {type: Number},


    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  dataResponseType() {
    return Symbol.for('LIST');
  }

  valid(validation) {

  }

  invalid(validation) {

  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if (this.e.required && ! this.getValue() ) {
      return new this.Validation(false, 'invalid');
    }
    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {
      self.currentGroups = self.groups;
      self.currentData = self.data;
      self.loading = false;

      // self.requestUpdate();
    });
  }

  _computeItemsCount(rows) {
    return rows.length;
  }

  _shouldFilter(items) {
    var b = this._computeItemsCount(items);
    return (b > 10);
  }

  // TODO can be optimized to a single listener with an extra param of what to update
  _onSectionSelected(e) {
    this.industrySection = e.detail.item.pk;
  }

  _onDivisionSelected(e) {
    this.industryDivision = e.detail.item.pk;
  }

  _onGroupSelected(e) {
    this.industryGroup = e.detail.item.pk;
  }

  _computeSections(rows, q) {
    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];

      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }

  _computeDivisions(data, iS, q) {
    if (!iS) return [];

    const industrySection = this.qs('#industry-section').selectedItem;
    if (!industrySection) return;

    const rows = industrySection.next;

    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];


      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }

  _computeGroups(data, iS, iD, q) {
    if (!iD) return [];

    const industrySection = this.qs('#industry-division').selectedItem;
    if (!industrySection) return;

    const rows = industrySection.next;

    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];


      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }

  _computeClasses(data, iS, iD, iG, q) {
    if (!iG) return [];
    const industrySection = this.qs('#industry-group').selectedItem;
    if (!industrySection) return;

    const rows = industrySection.next;

    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];


      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }


  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;
    self.required = this.e.required|| (pElement.min && pElement.min > 0);

    self.title = IndustriesCategoriesBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();
    self.data_name = pElement.defaultValue;

    self.loader = this.loadData();
  }
};
