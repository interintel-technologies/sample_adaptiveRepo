import { utilsMixin } from "../../core/mixins/utils-mixins-2";
import { SerializableElement } from "../../core/serializable-element";

export const TextInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'text-input';
  }

  static get properties() {
    return {
      params: { type: Object, value: {} },
      type: String,
      pageType: { type: Object, value: {} },
      columnSize: { type: Array },
      columnOffset: { type: Array },
      e: { type: Object, value: {} }, // Ensure 'e' is initialized with an empty object
    };
  }

  constructor() {
    super();
    this.e = {}; // Initialize 'e' in the constructor
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    this.required  = this.e.required || (this.e.min && this.e.min > 0)
    console.log("this is ",this.e);
    
    if(this.required){
      const input=this.shadowRoot.querySelector('.input');
      if(input.value===null || input.value==''){
        input.style.border = '1px solid red'; // Adjust the color variable as needed

        return new this.Validation(false, 'Value is required');
        
      }
      else{
        input.style.border = '1px solid var(--md-sys-color-outlineVariant)'; // Adjust the color variable as needed
        this.shadowRoot.querySelector(".help").innerHTML = ""
        if(this.shadowRoot.querySelector(".icon.is-right")){
          this.shadowRoot.querySelector(".icon.is-right").innerHTML = ""
        }
        return new this.Validation(true, '');

      }
    }
    // Validation logic remains the same
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    // Ensure 'e' is initialized here if it wasn't in the constructor
    if (!this.e) {
      this.e = {};
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = TextInputBase.toTitleCase(pElement.name);
    this.required = this.e.required || (pElement.min && pElement.min > 0);
    this.value = pElement.defaultValue || '';
  }
};
