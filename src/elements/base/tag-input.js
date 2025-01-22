import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const TagInputBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
  constructor() {
    super();
    this.selected = [];
  }
  static get is() {
    return 'tag-input';
  }
  static get properties() {
    return {
      title: {
        type: String,
        value: '',
      },
      selected: {
        type: Array,
      },
    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }
  getName() {
    return this.e.formName;
  }
  valid(validation) {
    return true;
  }
  invalid(validation) {

  }
  getValue() {
    if (!this.selected) {
      return '';
    }
    return this.selected.join(',');
  }

  validate() {
    if ((this.e.required || this.required) && !this.getValue()) {
      return new this.Validation( false, 'invalid');
    }
    return new this.Validation( true, 'valid');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    this.params = loader.pl.paramsCopy();
    self.title = TagInputBase.toTitleCase(pElement.name);
    this.required = this.e.required||(pElement.min && pElement.min > 0);
    if (pElement.kind) {
      const preselection = pElement.kind.split(',');
      this.selected = preselection.filter(function(el) {
        // return el.length && el==+el;
        return !isNaN(parseFloat(el)) && isFinite(el);
      });
    }
    self.loader = this.loadData();
  }
};

