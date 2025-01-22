import {SerializableElement} from '../../core/serializable-element';


export const TimeElementBase = class extends SerializableElement {
  static get is() {
    return 'time-element';
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

    };
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


  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required || (pElement.min && pElement.min > 0);
    self.label = TimeElementBase.toTitleCase(pElement.name);
  }
};
