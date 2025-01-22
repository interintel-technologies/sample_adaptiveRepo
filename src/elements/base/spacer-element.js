import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';


export const spacerElementBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'spacer-element';}
  init(pElement, loader) {
    super.init(pElement, loader);
  }

  getWidth() {
    if(this.e.kind === null || this.e.kind === ''){
       return 0;
    }else{
      return this.e.kind;  
    }

  }

  getHeight(){
    if(this.e.defaultValue === null || this.e.defaultValue === ''){
      return 0;
   }else{
      return this.e.defaultValue;  
   }

  }
};
