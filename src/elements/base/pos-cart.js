import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {mqttMixin} from '../../core/mixins/mqtt-mixin';
import {BaseElement} from '../../core/base-element';

export const PosCartBase = class extends utilsMixin( mqttMixin(dataSourceMixin(BaseElement))) {
  static get is() {
    return 'pos-cart';
  }

  static get properties() {
    return {
      icon: String,
      target: String,
      data_name: String,
      service: String,
      params: {type: Object, value: {}},
      color: String,
      _postl: Object,
      inline: {
        type: Object,
        value: function() {
          return this;
        },
      },
      sums: Object,
      loading: {
        type: Boolean,
        value: false,
      },
      title: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      multi: Boolean,
      cart_items: String,
      col_sums: Array,
      currentData: {type: Array, notify: true},
    };
  }
  static get behaviors() {
    return [MqttBehavior];
  }


  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.cart_items;
  }

  validate() {
    return true;
  }

  _getImagePath(url) {
    return this.media_url + url;
  }


  dscDataName() {
    return this.data_name;
  }

  repeatObject(item) {
    var items = [];
    if (typeof item == 'object') {
      var count = 0;
      for (var x in item) {
        items.push([count, x, item[x]]);
        count++;
      }
    }
    return items;
  }

  computeTarget(link) {
    return /* link.target ||*/ this.target;
  }

  computeParams(link) {
    return JSON.stringify(link.params);
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    var target = this;
    const self = this;


    this.loader.then(dsc => {

      /* todo incomplete dev

            let payload = req.response;

            target.cols = payload.response.data_source.cols;
            target.rows = payload.response.data_source.rows;
            var items = [];
            var itemIds = [];
            var sums = {};

            var config = document.querySelector('switch-config');


            for (var i = 0; i < target.rows.length; i++) {
                var item = {};
                var itemLinks = [];
                for (var j = 0; j < target.cols.length; j++) {
                    if (target.cols[j]['type'] == 'number') {
                        if (!sums[target.cols[j]['value']]) {
                            sums[target.cols[j]['value']] = {
                                'name': target.cols[j]['label'],
                                'value': 0
                            }
                        }
                        sums[target.cols[j]['value']]['value'] += parseInt(target.rows[i][j])
                    }

                    if (target.cols[j]['type'] == 'href') {
                        // target.cols[j]['type']
                        var links = target.cols[j]['links'];

                        for (var link in links) {
                            var linkObject = links[link];
                            //console.log(link + " -> " + linkObject);

                            var linkProcessed = {};
                            linkProcessed['service'] = linkObject['service'];
                            linkProcessed['icon'] = linkObject['icon'];

                            linkProcessed['params'] = {};
                            for (var linkParamKey in linkObject['params']) {
                                var linkParam = linkObject['params'][linkParamKey];
                                // get from item, simple hack since links are the always the last
                                linkProcessed['params'][linkParamKey] = item[linkParam]
                            }


                            var endpoint = config.protocol
                                + '//' + config.hostname + '/' + linkProcessed['service'] + "/?";

                            var params_string = Object.keys(linkProcessed['params']).map(function (k) {
                                return encodeURIComponent(k) + "=" + encodeURIComponent(linkProcessed['params'][k]);
                            }).join('&');

                            endpoint = endpoint + params_string;

                            linkProcessed['fullUrl'] = endpoint;

                            itemLinks.push(linkProcessed);
                            //console.log(item);
                            //console.log(linkProcessed);

                        }

                    }
                    else {
                        item[target.cols[j]['label']] = target.rows[i][j]
                    }


                }

                item['inline'] = itemLinks;
                items.push(item);
                itemIds.push(item['id']);

            }
            target.currentData = items;

            // ES8 :)
            target.col_sums = Object.values(sums);

            target.cart_items = itemIds.join(',');

            */


    });


    /* todo incomplete dev

        try {
            self.$.mqtt.register(self,self.e.kind);
        }catch (e){
            console.error(e)
        }
        */
  }


  // TODO this should be collected together into a Utilities functions
  mergeParams(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }
    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }
    return obj3;
  }

  onMqttMessage(message) {
    var self = this;
    console.log('pos cart on-mqtt-message');
    var payload = JSON.parse(message.payloadString);
    console.info(payload);

    for (var i = 0; i < payload.action.length; i++) {
      var action = payload.action[i];
      if (action == 'REPLACE') {
        self.cols = payload.cols;
        self.rows = payload.rows;
        const items = [];
        const itemIds = [];
        const sums = {};

        const config = document.querySelector('switch-config');

        for (var i = 0; i < self.rows.length; i++) {
          var item = {};
          var itemLinks = [];

          for (var j = 0; j < self.cols.length; j++) {
            if (self.cols[j]['type'] == 'number') {
              if (!sums[self.cols[j]['value']]) {
                sums[self.cols[j]['value']] = {
                  'name': self.cols[j]['label'],
                  'value': 0,
                };
              }
              sums[self.cols[j]['value']]['value'] += parseInt(self.rows[i][j]);
            }

            if (self.cols[j]['type'] == 'href') {
              // self.cols[j]['type']
              var links = self.cols[j]['links'];

              for (var link in links) {
                var linkObject = links[link];
                // console.log(link + " -> " + linkObject);

                var linkProcessed = {};
                linkProcessed['service'] = linkObject['service'];
                linkProcessed['icon'] = linkObject['icon'];

                linkProcessed['params'] = {};
                for (var linkParamKey in linkObject['params']) {
                  var linkParam = linkObject['params'][linkParamKey];
                  // get from item, simple hack since links are the always the last
                  linkProcessed['params'][linkParamKey] = item[linkParam];
                }

                var endpoint = config.protocol
                                    + '//' + config.hostname + '/' + linkProcessed['service'] + '/?';

                var params_string = Object.keys(linkProcessed['params']).map(function(k) {
                  return encodeURIComponent(k) + '=' + encodeURIComponent(linkProcessed['params'][k]);
                }).join('&');

                endpoint = endpoint + params_string;

                linkProcessed['fullUrl'] = endpoint;

                itemLinks.push(linkProcessed);
                // console.log(item);
                // console.log(linkProcessed);
              }
            }
            else {
              item[self.cols[j]['label']] = self.rows[i][j];
            }
          }

          item['inline'] = itemLinks;
          items.push(item);
          itemIds.push(item['id']);
        }
        self.currentData = items;
        // ES8 :)
        self.col_sums = Object.values(sums);
        self.cart_items = itemIds.join(',');
      } else if (action == 'COMPARE') {

      } else if (action == 'APPEND') {

      }
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    // this reference is required when appending inline-forms

    self.title = PosCartBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = loader.pl.params;
    self.data_name = pElement.defaultValue;
    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};


