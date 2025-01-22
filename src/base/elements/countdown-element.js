import { BaseElement } from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';


export const CountdownElementBase = class extends utilsMixin( BaseElement) {
  static get is() {return 'countdown-element';}
  static get properties() {
    return {
      icon: String,
      title: {
        type: String,
        value: 'countdown ends in',
      },
      name: {
        type: String,
        value: 'countdown ends in',
      },
      params: {type: Object, value: {}},

      timeLeft: {
        type: Object,
      },

      duration: String,
      untill: String,
      timeout: {
        type: Number,
        value: 1000,
      },
      tickFtns: {
        type: Array,
        value: [],
      },
      running: Boolean,
    };
  }
  firstUpdated(changedProperties) {

    if (changedProperties.has('e') ) {
      console.log("Updated properties:", this.cols, this.rows, this.e);
  

    this.title = CountdownElementBase.toTitleCase(pElement.elementJson[0]);
    this.name = CountdownElementBase.toTitleCase(pElement.elementJson[0]);

    this.duration = (new Date(pElement.defaultValue) - new Date()) / 1000;
    this.start();

    }
  }


  start() {
    if (this.running) {
      return;
    }
    this.running = true;
    var start = Date.now();
    var that = this;
    var diff; var obj;

    (function timer() {
      diff = that.duration - (((Date.now() - start) / 1000) | 0);

      if (diff > 0) {
        setTimeout(timer, that.timeout);
      } else {
        diff = 0;
        that.running = false;
      }

      obj = that.parse(diff);
      that.timeLeft = obj;
      if (that.tickFtns != null) {
        that.tickFtns.forEach(function(ftn) {
          ftn.call(this, obj.minutes, obj.seconds);
        }, that);
      }
    }());
  }

  onTick(ftn) {
    if (typeof ftn === 'function') {
      this.tickFtns.push(ftn);
    }
    return this;
  }

  expired() {
    return !this.running;
  }

  parse(fullSeconds) {
    // console.log(fullSeconds);

    var sec_num = parseInt(fullSeconds, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }


    return {
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
      // 'seconds': (seconds % 60) | 0
      // 'seconds': (seconds % 60) | 0
    };
  }


  init(pElement, loader) {
    super.init(pElement, loader);

  }
};
