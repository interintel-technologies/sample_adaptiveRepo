import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const TagInputBase = class extends utilsMixin(SerializableElement) {
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

  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('cols')) {
      var self = this;

      self.title = TagInputBase.toTitleCase(this.e.name);
      this.required = this.e.required||(this.e.min && this.e.min > 0);
      if (this.e.kind) {
        const preselection = this.e.kind.split(',');
        this.selected = preselection.filter(function(el) {
          // return el.length && el==+el;
          return !isNaN(parseFloat(el)) && isFinite(el);
        });
      }    }
}

  // init(pElement, loader) {
  //   super.init(pElement, loader);
   
  //   self.loader = this.loadData();
  // }
};

