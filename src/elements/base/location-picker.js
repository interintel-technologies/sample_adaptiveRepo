import {SerializableElement} from '../../core/serializable-element';


export const LocationPickerBase = class extends SerializableElement {
  static get is() {return 'location-picker';}
  static get properties() {
    return {
      location: Object,

    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    // this.getLocation();
  }


  getValue() {
    return this.location.lng+','+this.location.lat;
  }

  getName() {
    return this.e.formName;
  }

  valid(validation) {

  }

  invalid(validation) {

  }

  validate() {
    if (this.e.required && ! this.getValue() ) {
      return new this.Validation(false, 'invalid');
    }

    return new this.Validation(true, 'valid');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }
};
