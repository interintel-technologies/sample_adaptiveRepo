import {utilsMixin} from '../../core/mixins/utils-mixin';
import {BaseElement} from '../../core/base-element';
import {Logger} from '../../core/logger';
import {httpMixin} from '../../core/mixins/http-mixin';

export const WhatsappSimulatorBase = class extends utilsMixin(httpMixin(BaseElement)) {
  static get is() {
    return 'whatsapp-simulator';
  }

  static get properties() {
    return {
      defaultValue: String,
      details: Object,
    };
  }

  makeRequest(params) {
    return new Promise((resolve, reject) => {
      this.call(this.service, params, false)
        .then((res) => {
          Logger.i.info(res);
          resolve(res);
        }, function(rejected) {
          reject(rejected);
        }).catch(function(exception) {
          Logger.i.error(exception);
          reject(exception);
        });
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.service = pElement.service;
    self.defaultValue = pElement.defaultValue;
    self.details = pElement.details
  }
};
