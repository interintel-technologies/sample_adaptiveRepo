import { utilsMixin } from "../../core/mixins/utils-mixins-2";
import { SerializableElement } from "../../core/serializable-element";


export const TimeElementBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'time-input';
  }

  static get properties() {
    return {

      /**
       * The label for this input.
       */
      label: {
        type: String,
        value: 'Choose Time',
      },
      required: Boolean,
      datestring: {type: String, value: ''},
      columnSize: {type: Array},
      e: { type: Object, value: {} }, // Ensure 'e' is initialized with an empty object
      type: String,
    };
  }

  constructor() {
    super();
    this.e = {}; // Initialize 'e' in the constructor
  }

  convertTime24to12(timeString) {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? 'AM' : 'PM';
    timeString = h + timeString.substr(2, 3) +' '+ ampm;

    return timeString;
  }

  convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return hours + ':' + minutes;
  }

  getName() {
    return this.e.formName;
  }

  valid(validation) {
    return true;
  }
  invalid(validation) {}

  validate() {
    if ((this.e.required || this.required) && ! this.getValue() ) {
      return new this.Validation(false, 'invalid');
    }
    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('cols')) {

      
      var self = this;
      self.required = this.e.required || (this.e.min && this.e.min > 0);
      self.label = TimeElementBase.toTitleCase(this.e.name);
  
    }
}



  init(pElement, loader) {
    super.init(pElement, loader);
  }
};
