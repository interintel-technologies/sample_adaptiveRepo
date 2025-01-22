import {utilsMixin} from '../../core/mixins/utils-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {BaseElement} from '../../core/base-element';

export const ProductItemImagesBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  static get is() {return 'product-item-images';}
  static get properties() {
    return {
      s: String,
      main: String,
      params: {type: Object, value: {}},
      data_name: String,
      service: String,
      default_value: String,
    };
  }
  mergeParams(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj2) {obj3[attrname] = obj2[attrname];}
    for (var attrname in obj1) {obj3[attrname] = obj1[attrname];}
    return obj3;
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.loader.then(dsc => {

      /*

            let payload = req.response;

            target.cols = payload.response.data_source.cols;
            target.rows = payload.response.data_source.rows;
            var items = [];


            for(var i=0;i<target.rows.length;i++){
                var item = {};
                var itemLinks = [];
                for(var j=0;j<target.cols.length;j++){


                    if(target.cols[j]['type'] == 'href'){
                        // target.cols[j]['type']
                        var links = target.cols[j]['links'];

                        for (var link in links){
                            var linkObject = links[link];
                            //console.log(link + " -> " + linkObject);

                            var linkProcessed = {};
                            linkProcessed['service'] = linkObject['service'];
                            linkProcessed['icon'] = linkObject['icon'];

                            linkProcessed['params'] = {};
                            for (var linkParamKey in linkObject['params']){
                                var linkParam = linkObject['params'][linkParamKey];
                                // get from item, simple hack since links are the always the last
                                linkProcessed['params'][linkParamKey] = item[linkParam]
                            }

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

                if (i>2){break}

            }
            target.currentData = items;
            */

    });
  }


  dscDataName() {
    return this.data_name;
  }

  /*


     */
  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;
    self.s = pElement.elementJson[1];

    self.icon = pElement.icon;
    self.title = ProductItemImagesBase.toTitleCase(pElement.name);
    self.service = pElement.service;
    self.main = pElement.defaultValue;
    self.data_name = pElement.defaultValue;
    self.params = loader.pl.paramsCopy();
    self.loader = this.loadData();
  }
};


