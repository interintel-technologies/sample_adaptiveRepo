import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const TextViewBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'text-view';}
  static get properties() {
    return {
      icon: String,
      text: String,
      name: String,
      style:String,
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  checkStyles(){
    if(this.style){
      return true;
    }else{
      return false;
    }
  }

  
  init(pElement, loader) {
    super.init(pElement, loader);
    this.name = TextViewBase.toTitleCase(pElement.name);
    //  the content should be rendered as is
    this.text = pElement.defaultValue;
    this.style = pElement.styles;
  }
};
