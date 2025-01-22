import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {BaseElement} from '../../core/base-element';

export const PosProductsBase = class extends utilsMixin( dataSourceMixin( BaseElement)) {
  static get is() {return 'pos-products';}
  static get properties() {return {
    icon: String,
    data_name: String,
    service: String,
    name: String,
    maxlength: Number,
    pattern: String,
    required: Boolean,
    variable: String,
    items: {type: Array, value: []},
    default_value: String,
  };}
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    var target = this;

    this.loader.then(dsc => {

      /* todo incomplete dev
            let payload = req.response;

            target.cols = payload.response.data_source.cols;
            target.rows = payload.response.data_source.rows;
            var items = [];

            var row = new Array();
            for (var i = 0; i < target.rows.length; i++) {
                var item = {};
                var itemLinks = [];
                for (var j = 0; j < target.cols.length; j++) {


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

                            itemLinks.push(linkProcessed);
                            //console.log(item);
                            //console.log(linkProcessed);

                        }

                    } else {
                        item[target.cols[j]['label']] = target.rows[i][j]
                    }


                }

                item['links'] = itemLinks;
                row.push(item);
                if (((i + 1) % 5) == 0) {
                    items.push(row);
                    row = new Array();
                }
            }

            if (row.length) {
                items.push(row);
            }

            target.items = items;

            */

    });
  }

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


  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    if (pElement.elementJson[2] && pElement.elementJson[2] > 0) {
      self.required = true;
    }
    self.icon = pElement.elementJson[6];
    self.title = PosProductsBase.toTitleCase(pElement.elementJson[0]);
    self.params = loader.pl.params;
    // also self.service in others
    self.default_value = pElement.elementJson[11];
    self.variable = pElement.elementJson[4];
    self.kind = pElement.elementJson[8];
    self.loader = this.loadData();
  }

  dscDataName() {
    return this.e.defaultValue;
  }
};


