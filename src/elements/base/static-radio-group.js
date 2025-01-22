import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';
import {html} from 'lit-element';


class StaticRadioGroup extends utilsMixin( BaseElement) {
  render() {
    return html`
        ${SharedStyles}
  <div class="control">
  <label class="radio">
    <input type="radio" name="foobar">
    Foo
  </label>
  <label class="radio">
    <input type="radio" name="foobar" checked>
    Bar
  </label>
</div>
        `;
  }
  static get is() {
    return 'static-radio-group';
  }

  static get properties() {
    return {
      icon: String,

      data_items: String,
      title: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      data: {value: []},
    };
  }

  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.checked;
  }

  isEqual(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }

  repeatObject(item) {
    var items = [];
    if (typeof item == 'object') {
      var count = 0;
      for (var x in item) {
        items.push([count, x, item[x]]);
        count++;
      }
    }
    return items;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    this.checked = '';
    this.multi = false;
    this.mode = 'list';
    this.grouped = 'yes';
    this.size = 150; // this.$.slider.value = 150;
    this.data = [];
    this.groups = [];
  }

  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;
    if (pElement.min && pElement.min > 0) {
      self.required = true;
    }

    self.title = StaticRadioGroup.toTitleCase(pElement.name);

    self.icon = pElement.icon;

    if (pElement.defaultValue) {
      self.data_items = pElement.defaultValue;
      self.data = this.data_items.split('|');
    }

    self.maxlength = pElement.max;
  }
}

customElements.define(StaticRadioGroup.is, StaticRadioGroup);
