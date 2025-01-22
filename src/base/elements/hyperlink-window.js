import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const HyperlinkWindowBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'hyperlink-window';}

  objToQueryString(obj) {
    var k = Object.keys(obj);
    var s = '';
    for (var i = 0; i < k.length; i++) {
      s += k[i] + '=' + encodeURIComponent(obj[k[i]]);
      if (i != k.length - 1) s += '&';
    }
    return s;
  }

  _linkClick(evt) {
    evt.preventDefault();
    // var encodedParams = this.objToQueryString(formParams);
    window.open(
      this.e.defaultValue,
      '_blank', 'location=yes,height=570,scrollbars=yes,status=yes'
    );
  }


  init(pElement, loader) {
    super.init(pElement, loader);
    this.title = HyperlinkWindowBase.toTitleCase(pElement.name);
    this.name = HyperlinkWindowBase.toTitleCase(pElement.name);

    this.params = loader.pl.paramsCopy();
  }
};
