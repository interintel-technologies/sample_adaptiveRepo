import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {SerializableElement} from '../../core/serializable-element';
import {utilsMixin} from '../../core/mixins/utils-mixin';


export const PaymentOptionsBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'payment-options';
  }

  constructor() {
    super();
    this.paymentMethods = [];
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      maxlength: Number,
      columnSize: {type: Array},
      paymentMethods: Array,
    };
  }


  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
    if (this.e.required && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }
    return new this.Validation(true, 'valid');
  }

  valid(validation) {

  }

  invalid(validation) {

  }


  dscDataName() {
    return this.e.defaultValue;
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {
      /**
       * Groups datalist rows by the payment method column
       *
       * @type {{}}
       */
      const options = {};
      for (let i = 0; i < dsc.data.length; i++) {
        const option = dsc.data[i];
        if (!(option['payment_method_name'] in options)) {
          options[option['payment_method_name']] = [];
        }
        options[option['payment_method_name']].push(option);
      }

      const listOptions = [];

      // loop over values
      for (const entry of Object.entries(options)) {
        listOptions.push({
          'name': entry[0],
          'options': entry[1],
        });
      }

      self.paymentMethods = listOptions;
    });
  }


  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.required = pElement.min && pElement.min > 0;

    self.title = PaymentOptionsBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy();
    self.loader = this.loadData();
  }
};
