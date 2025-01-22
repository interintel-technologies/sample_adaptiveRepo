import {LitElement, html} from 'lit-element';
import {directive} from 'lit-html';
import { Logger } from './logger';

const _DEFAULT_ICONSET = 'icons';


// this directive waits for a promise to resolve then
// updates the part with the content
// TODO #262 this can be re-used so here might not be the best location
const resolvePromise = directive((promise) => (part) => {
  // This first setValue call is synchronous, so
  // doesn't need the commit
  // TODO #263 part.setValue("Waiting for promise to resolve.");
  Promise.resolve(promise).then((resolvedValue) => {
    part.setValue(resolvedValue);
    part.commit();
  });
});


/** Icons Loader and Renderer  */
export class AdaptiveUiIcon extends LitElement {

  render() {
    return html`
      ${
        (this.icon === "mpesa" || this.icon === "visa" || this.icon === "paypal" || this.icon === "mastercard") ? html`
          <img src="src/themes/${window.THEME}/img/${this.icon}.svg"
            style="pointer-events: none; display: block; width: 100%; height: 100%;" 
          />
      ` : html`
        <svg id="svg" viewBox="0 0 24 24" 
            preserveAspectRatio="xMidYMid meet" 
            focusable="false" 
            style="pointer-events: none; display: block; width: 100%; height: 100%;">
            <g>${resolvePromise(this._iconChanged(this.icon))}</g>
        </svg>
      `
      }
    <style>
      :host {
        /* @apply --layout-inline;*/
        display:flex;
        align-items: center;
        /* @apply --layout-center-center; */
        justify-content: center;
        
        position: relative;
        vertical-align: middle;
        fill: var(--adaptive-ui-icon-fill-color, rgb(255, 255, 255););
        stroke: var(--adaptive-ui-icon-stroke-color);
        width: var(--adaptive-ui-icon-width, 24px);
        height: var(--adaptive-ui-icon-height, 24px);
        /* @apply --iron-icon; */
      }

      :host([hidden]) {
        display: none;
      }
    </style>
    `;
  }

  static get properties() {
    return {

      /**
       * The name of the icon to use. The name should be of the form:
       * `iconset_name:icon_name`.
       */
      icon: {type: String},

      /**
       * The name of the theme to used, if one is specified by the
       * iconset.
       */
      theme: {type: String},


      /**
       * If using iron-icon without an iconset, you can set the src to be
       * the URL of an individual icon image file. Note that this will take
       * precedence over a given icon attribute.
       */
      src: {type: String},

    };
  }

  firstUpdated() {
    this._iconChanged(this.icon);

    let svg = this.shadowRoot.getElementById("svg");

    if(this._iconsetName == "products"){

      if(this._iconName=="nenasasa"){
        svg.setAttribute("viewBox","0 0 400 400");
        return;
      }
      svg.setAttribute("viewBox","0 0 105.83 105.83");
    }



    
  }

  _iconChanged(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || _DEFAULT_ICONSET;
    return this._updateIcon();
  }

  _usesIconset() {
    return this.icon || !this.src;
  }
  

  /** @suppress {visibility} */
  _updateIcon() {
    return new Promise((resolve, reject) => {
      if (this._usesIconset()) {
        if (this._iconName === '') {

          // todo #264 remove icon
          // When the icon attribute is updated to undefined or empty value,
          // the current displayed icon should be removed
          if (this._iconset) {
            this._iconset.removeIcon(this);
          }
        } else if (this._iconsetName) {
          import(`./icons/${this._iconsetName}.js`).then((module) => {
            // module.default();
            // console.log('loaded module:' + moduleSpecifier);
            // console.log(module);
            // console.log(module.icons[this._iconName]);
            if (this._iconName )
            resolve(module.icons[this._iconName]);
            // this.requestUpdate('loadedIcon');
          });
        }
      }
    });
  }
}

customElements.get('adaptive-ui-icon');
