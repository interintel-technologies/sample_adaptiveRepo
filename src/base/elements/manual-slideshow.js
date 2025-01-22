import {BaseElement} from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const ManualSlideshowBase = class extends utilsMixin(BaseElement) {
  constructor() {
    super();
    this.slideIndex = 1;

  }
  static get is() {return 'manual-slideshow';}
  static get properties() {return {
    icon: String,
    dataName: {type: String, value: ''},
    service: String,
    q: {type: String, value: ''},
    title: String,
    maxlength: Number,
    required: Boolean,
    rows: {type: Object, value: []},
    params: {type: Object, value: ''},
    slideIndex: Number, 
  };
  }

  dscDataName() {
    return this.dataName;
  }


  updated(changedProperties) {
    if (changedProperties.has('e') ) {
      
      self.cols = dsc.cols;
      self.rows = dsc.rows;
      self.q = '';

      self.groups = dsc.groups;
      self.currentGroups = self.groups;

      self.data = dsc.data;
      self.currentData = self.data;

      if (Object.keys(self.rows).length > 0 ) {
        self.dropdownValue = self.rows[0][0];
      }
    }
}

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);
  //   const self = this;

  //   this.loader.then(dsc => {
  //     // console.log(dsc);

  //     self.cols = dsc.cols;
  //     self.rows = dsc.rows;
  //     self.q = '';

  //     self.groups = dsc.groups;
  //     self.currentGroups = self.groups;

  //     self.data = dsc.data;
  //     self.currentData = self.data;

  //     if (Object.keys(self.rows).length > 0 ) {
  //       self.dropdownValue = self.rows[0][0];
  //     }
  //   });
  //   //  this.showSlides(this.slideIndex);
  //   // var slideIndex = 0;
  // }


  init(pElement, loader) {
    super.init(pElement, loader);

    var self = this;

    self.required = pElement.min && pElement.min > 0;

    self.title = ManualSlideshowBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;

    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }
};
