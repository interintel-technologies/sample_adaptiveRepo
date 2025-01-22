import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const StaticDropdownSelectBase = class extends utilsMixin(SerializableElement) {
  constructor() {
    super();
    this.data = [];
    this.contentOpen = false;
    this.selected = null;
  }

  static get is() {return 'static-dropdown-select';}
  static get properties() {
    return {
      icon: String,
      items: {type: Object},
      color: String,
      vid: Object,
      title: String,
      required: Boolean,
      dropdownValue: Object,
      data: Array,
      columnSize: {type: Array},
      contentOpen:Boolean,
      selected:String,
      sectionSize:String
    };
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if (this.e.required) {
      return new this.Validation(Boolean(this.getValue()), '');
    }
    return new this.Validation(true, 'valid');
  }

  valid(validation) {}
  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.parseData();
  }
  parseData() {
    const parsed = [];
    let keys = false;
    let titles = [];
    for (var i = 0; i<this.items.length; i++) {
      const item = this.items[i];
      if (typeof item === 'object') {
        parsed.push(item);
      } else {
        if (!keys) {
          titles = item;
          keys = true;
          continue;
        }
        const obj = {};
        for (var j=0; j<titles.length; j++) {
          obj[titles[j]] = item[j];
        }
        parsed.push(obj);
      }

      if (item['selected'] || (this.e.kind && (item['id'] === this.e.kind))) {
        this.dropdownValue = item['id'];
        this.selected = item['name'];
      }
    }

    this.data = parsed;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    self.required = this.e.required || (pElement.min && pElement.min > 0);

    self.title = StaticDropdownSelectBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.items = JSON.parse(pElement.defaultValue);
    self.sectionSize = pElement.sectionSize;
  }

  
  checkSectionSizeHalf(){
    if(this.sectionSize === '12|12|12'){
      return true;
    }else if(this.sectionSize === '12|24|24'){
    return true;
    }else if(this.sectionSize === '12|12|24'){
      return true;
    }else{
      return false;
    }
  }
};
