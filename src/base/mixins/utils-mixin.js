export const utilsMixin = (BaseClass) => class extends BaseClass {
  constructor() {
    super();
  }

  static get properties() {
    return {

    };
  }


  updated(changedProperties) {
    if (changedProperties.has('e')) {
        
    }
  }

  static isEmpty(str) {
    return ( str.length === 0 || !str.trim());
  }

  static toTitleCase(item) {
    if (!item) return '';
    item = item.toString();
    item = item.toLowerCase().split(' ');
    var newItem = [];
    for (var i = 0; i < item.length; i++) {
      newItem[i] = item[i].substr(0, 1).toUpperCase() + item[i].substr(1);
    }
    return newItem.join(' ');
  }

  qs(xxx) {
    
    const document = this.shadowRoot||window.document;

    return document.querySelector(xxx);
  }

  qsa(xxx) {
    const document = this.shadowRoot||window.document;
    return document.querySelectorAll(xxx);
  }

  randomColorGenerator (numberOfSteps, step) {
    let r, g, b;
    let h = step / numberOfSteps;
    let i = ~~(h * 6);
    let f = h * 6 - i;
    let q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    const color = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return color;
  }

  formatToKenyaShillings(value) {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(value);
  }
};
