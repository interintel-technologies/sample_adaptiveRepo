import {LitElement, html, css} from 'lit-element';

const _DEFAULT_ICONSET = 'icons';

class AdaptiveUiIcon extends LitElement {
  static get properties() {
    return {
      icon: {type: String},
      theme: {type: String},
      src: {type: String},
      loadedIcon: {type: String},
      dataColor: {type: String} // New property for dynamic color
    };
  }

  updated(changedProperties) {
    // Check if dataColor has changed and update color
    if (changedProperties.has('dataColor')) {
      // console.log("DataColor has changed to:", this.dataColor);
      this.updateIconColor();
    }
  
    // Check if icon has changed and load the new icon
    if (changedProperties.has('icon')) {
      this.loadAndRenderIcon().then(() => {
        this.updateIconColor(); // Update color after loading and rendering the new icon
      });
    }
  }

  render() {
    return html`
      ${
        this.icon && this.icon.startsWith("Md") ? html`
        <div class="icon" style="height:100%">
          <svg id="svg" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="xMidYMid meet" 
               focusable="false" 
               style="pointer-events: none; display: block; width: 100%; height: 100%;"
               fill="${this.dataColor || '#8E8E93'}">
          </svg>
        </div>
        ` : html`
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
                   <g></g>
              </svg>
            `
          }
        `
      }
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          vertical-align: middle;
          width: var(--adaptive-ui-icon-width, 24px);
          height: var(--adaptive-ui-icon-height, 24px);
          --adaptive-ui-icon-stroke-color: var(--adaptive-ui-icon-stroke-color, #8E8E93); /* Default color */
        }

        :host([hidden]) {
          display: none;
        }
      </style>
    `;
  }

  async loadAndRenderIcon() {
    const iconSVG = await this._iconChanged(this.icon);

    if (this.icon && this.icon.startsWith("Md")) {
      // Insert the SVG into the shadow DOM
      this.shadowRoot.querySelector('svg').innerHTML = `${iconSVG}`;
    } else {
      // Modify the SVG string to add a fill attribute to the <path> elements
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = iconSVG;

      // Find all <path> elements within the SVG
      const paths = tempDiv.querySelectorAll('path');
      paths.forEach(path => path.setAttribute('fill', this.dataColor || '#8E8E93')); // Use dataColor or fallback
        
      // Update the iconSVG with the modified SVG string
      const modifiedSVG = tempDiv.innerHTML;

      // Insert the modified SVG into the shadow DOM
      this.shadowRoot.querySelector('g').innerHTML = `${modifiedSVG}`;
    }
  }

  updateIconColor() {
    // Find all <path> elements within the SVG
    const pathElements = this.shadowRoot.querySelectorAll('path');
  
    if (pathElements.length > 1) {
      // Target the second <path> element
      const secondPathElement = pathElements[1];
      const firstPathElement = pathElements[0];
  
      // Log to ensure we're targeting the correct path
      firstPathElement.setAttribute('fill', "none");

      // console.log("Second SVG Path Element:", secondPathElement);
  
      // Update the fill attribute of the second path
      secondPathElement.setAttribute('fill', this.dataColor || '#8E8E93');
    } else {
      console.warn("The SVG does not contain a second <path> element to update.");
    }
  }
  

  async _iconChanged(icon) {
    const parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || _DEFAULT_ICONSET;
    
    return this._updateIcon();
  }

  _usesIconset() {
    return this.icon || !this.src;
  }

  _updateIcon() {
    return new Promise((resolve, reject) => {
      if (this._usesIconset()) {
        if (this._iconName === '') {
          resolve('');
        } else if (this._iconsetName) {
          import(`../icons/${this._iconsetName}.js`).then((module) => {
            this.loadedIcon = module.icons[this._iconName];
            resolve(this.loadedIcon.strings[0]);
          }).catch(reject);
        } else {
          resolve('');
        }
      } else {
        resolve('');
      }
    });
  }
}

customElements.define('adaptive-ui-icon', AdaptiveUiIcon);
