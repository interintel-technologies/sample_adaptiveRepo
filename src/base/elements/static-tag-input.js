import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';


export const StaticTagInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'static-tag-input';
  }

  static get properties() {
    return {

      title: {
        type: String,
        value: '',
      },
      focused: {
        type: Boolean,
        value: false,
      },
      tags: {
        type: Array, value: [],
      },
      data: {
        type: Array,
      },
    };
  }


  getName() {
    return this.e.formName;
  }
  invalid() {
  }
  valid() {
    return true;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
  }

  _tagsChanged() {
    console.log('tags changed');
  }

  _onFocus() {
    if (this.qs('#filter').focused) {
      this.focused = true;
      // this.requestUpdate()
    }
  }

  _debug1(evt) {
    const self = this;
    // this.$.filter.value = '';
    self.focused = false;
    // self.requestUpdate()
  }

  getValue() {
    if (!this.tags) {
      return '';
    }
    return this.tags.join(',');
  }

  validate() {
    if ((this.e.required || this.required) && !this.getValue()) {
      return false;
    }
    return true;
  }

  _computeLabel(tagId, dataFromApi) {
    if (tagId === undefined || dataFromApi === undefined) {
      return;
    }

    const tag = dataFromApi.filter(function(item) {
      return item['id'] == tagId;
    })[0];

    if (tag)
    {return tag['name'];}
  }

  select(evt) {
    const institutionItem = evt.currentTarget;
    // console.log(evt.currentTarget.getAttribute('id'));
    const itemId = institutionItem.getAttribute('id');
    // console.log(id);
    this.add(institutionItem.dataName);
  }

  add(tag) {
    if (this.tags === null) {
      this.tags = [];
    }

    // TODO use before search
    // var trimmedTag = tag.replace(/^\s+/, '').replace(/\s+$/, '');
    //
    // if (trimmedTag !== '') {
    //     var tagIndex = this.tags.indexOf(trimmedTag);
    //     if (tagIndex === -1) {
    //         this.push('tags', trimmedTag);
    //     }
    // }

    var tagIndex = this.tags.indexOf(tag);
    if (tagIndex === -1) {
      this.push('tags', tag);
    }
  }

  remove(tag) {
    if (this.tags === null) {
      return;
    }
    var tagIndex = this.tags.indexOf(tag);
    if (tagIndex > -1) {
      this.tags.splice( tagIndex, 1);
      // this.requestUpdate()
      this.qs('#suggestions').selectedValues = [];
      // console.log()
    }
  }

  _onTagRemoveTapped(e) {
    e.preventDefault();
    this.remove(e.currentTarget.tag);
  }

  filter(q) {
    const self = this;

    this.data = [];
  }

  _onInput(e) {
    // if (e.keyCode === 13) {
    //
    //     this.add(e.target.value.toLowerCase());
    //
    //     e.target.value = '';
    // }else {

    // todo remove enter key dependence
    this.filter(this.$.filter.value);
    // }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    this.params = {};
    this.params['data_name'] = pElement.defaultValue;
    self.title = StaticTagInputBase.toTitleCase(pElement.name);

    this.required = pElement.min && pElement.min > 0;

    self.data = JSON.parse(pElement.kind)||[];
    this.tags = [];
    const t = [];

    for (let i = 0; i < self.data.length; i++) {
      if (self.data[i]['selected']) {
        t.push(self.data[i]['id']);
      }
    }

    this.tags = t;
  }
};
