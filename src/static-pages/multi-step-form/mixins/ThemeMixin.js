import "../components/adaptive-ui-icon.js";
import BulmaStyles from "../styles/bulma-styles/bulma-styles.scss";
import FontStyles from "../styles/font-styles/font-styles.scss";
import { IconStyles } from "../styles/icon-styles/icon-styles-css.js";
import BulmaGeneratedStyles from "../styles/bulma-generated.scss";
import { LoadingStyles } from '../styles/loading-styles/loading-styles-css';
import { ButtonStyles } from '../styles/button-styles/button-styles-css';
import { utilsMixin } from '../mixins/utils-mixin.js';
import { InputStyles } from '../styles/input-styles/input-styles-css';
import { bulmaCssVariablesDefs } from '../components/bulma-generated/bulma-colors.js';
import { ColorUpdater, hsl } from 'bulma-css-vars';
import { connect } from "pwa-helpers/connect-mixin.js";
import { themeStore, setTheme } from "../components/themeSlice.js";

/**
 * @typedef Theme
 * @property {string} mode - light || dark || saved
 * @property {Colors} colors
 * @property {string} font - any from https://fonts.google.com/
 */

/**
 * @typedef Colors
 * @property {string} primary - primary color
 * @property {string} link - secondary color
 * @property {string} info - accent color
 */

const colorUpdater = new ColorUpdater(bulmaCssVariablesDefs);

export const ThemeMixin = (BaseClass) => class extends utilsMixin(connect(themeStore)(BaseClass)) {
  static get styles() {
    return [
      BulmaStyles,
      IconStyles,
      BulmaGeneratedStyles,
      FontStyles,
      LoadingStyles,
      InputStyles,
      ButtonStyles,
    ];
  }

  static get properties() {
    return {
      theme: Object,
    };
  }

  constructor() {
    super();
    this.theme={};
  }

  stateChanged(state) {
    if(state.theme) {
      this.theme = state.theme;
    }
  }

  firstUpdated() {
    this.#appendFontLinkToDOM();
  }

  updated(changedProperties) {
    // all local storage logic is handled here
    super.updated(changedProperties);

    changedProperties.forEach((oldValue, propName) => {
      if(propName === "theme" && oldValue !== undefined) {
        if(this.theme.mode != oldValue.mode) {
          this.#appendFontLinkToDOM();
        }
      }
    });
  }

  /**
   * Apply a theme
   * @param {Theme} theme
   */
  applyTheme(theme) {
    this.applyFont(theme.font);
    this.applyMode(theme.theme);
    this.applyColors(theme.colors);
  }

  /**
   * 
   * @param {string} font any font from https://fonts.google.com/ 
   */
  applyFont(font) {
    this.theme = {...this.theme, font: font ?? "Inter"};
    themeStore.dispatch(setTheme(this.theme));
  }

  /**
   * 
   * @param {string} mode - light || dark
   */
  applyMode(mode) {
    this.theme = {...this.theme, mode: mode};
    document.documentElement.style.setProperty("--mode", this.theme.mode);
    const modeColors = this.theme.mode === "light" ? this.#lightModeColors() : this.#darkModeColors()
    Object.entries(this.#ignoreColors({...modeColors, ...this._setDerivedCSSVars(modeColors)})).forEach(([key, value]) => colorUpdater.updateVarsInDocument(key, value));
    
    themeStore.dispatch(setTheme(this.theme));
  }

  /**
   * 
   * @param {Colors} colors 
   */
  applyColors(colors) {
    this.theme = {...this.theme, colors: colors};
    Object.entries(this.theme.colors).forEach(([key, value]) => colorUpdater.updateVarsInDocument(key, value.toLowerCase()));
    
    themeStore.dispatch(setTheme(this.theme));
  }

  /**
   * @description This method appends the link to theme font for all loaded elements.
   */
  #appendFontLinkToDOM() {
    const fontFamily = this.theme.font.replace(/ /g, '+');
    const href = `https://fonts.googleapis.com/css2?family=${fontFamily.split(" ").join("+")}:wght@300;400;600;700;800&display=swap`;
    const link = document.createElement("link");
    document.documentElement.style.setProperty("--family-sans-serif", this.theme.font);

    link.id = "googleFontLink"
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = href;

    let previousLink;
    if(this.shadowRoot) {
      previousLink = this.shadowRoot.querySelector("#" + link.id);
      
      if(previousLink) {
        if(previousLink.getAttribute("href") !== link.href) {
          this.shadowRoot.replaceWith(link);
        }
      }
      else {
        this.shadowRoot.prepend(link);
      }
    }
    previousLink = document.head.querySelector("#" + link.id);

    if(previousLink) {
      if(previousLink.getAttribute("href") !== link.href) {
        document.head.replaceWith(link);
      }
    }
    else {
      document.head.appendChild(link);
    }
  }

  #darkModeColors() {
    return  {
      'black': hsl(0, 0, 100),
      'black-bis': hsl(0, 0, 98),
      'black-ter': hsl(0, 0, 96),
      'white': hsl(0, 0, 4),
      'white-bis': hsl(0, 0, 7),
      'white-ter': hsl(0, 0, 14),
      "grey": hsl(0, 0, 48),
      "grey-dark": hsl(0, 0, 71),
      "grey-darker": hsl(0, 0, 86),
      "grey-lightest": hsl(0, 0, 93), // confirm
      'grey-light': hsl(0, 0, 29),
      'grey-lighter': hsl(0, 0, 21),
      "grey-darker": "#FFF",
      "grey-dark": "#FFF"
    };
  }

  #lightModeColors() {
    return  {
      'white': hsl(0, 0, 100),
      'white-bis': hsl(0, 0, 98),
      'white-ter': hsl(0, 0, 96),
      'black': hsl(0, 0, 4),
      'black-bis': hsl(0, 0, 7),
      'black-ter': hsl(0, 0, 14),
      "grey": hsl(0, 0, 48),
      "grey-light": hsl(0, 0, 71),
      "grey-lighter": hsl(0, 0, 86),
      "grey-lightest": hsl(0, 0, 93),
      'grey-dark': hsl(0, 0, 29),
      'grey-darker': hsl(0, 0, 21),
    };
  }

  _setDerivedCSSVars(initialColors) {
    const derivedColors = {};
    
    derivedColors['scheme-main'] = initialColors["white"];
    derivedColors['scheme-main-bis'] = initialColors["white-bis"];
    derivedColors['scheme-main-ter'] = initialColors["white-ter"];
    derivedColors['scheme-invert'] = initialColors["black"];
    derivedColors['scheme-invert-bis'] = initialColors["black-bis"];
    derivedColors['scheme-invert-ter'] = initialColors["black-ter"];

    derivedColors['body-background-color'] = derivedColors["scheme-main-bis"];
    derivedColors['card-background-color'] = derivedColors["scheme-main"];
    derivedColors['dropdown-content-background-color'] = derivedColors["scheme-main"];
    derivedColors['input-background-color'] = initialColors["white"];
    derivedColors['modal-card-body-background-color'] = derivedColors["scheme-main-ter"];
    derivedColors['input-border-color'] = initialColors["grey-lighter"];
    return derivedColors;
  }

  #ignoreColors(colors) {
    // this removes a warning on the console but doesn't affect colors
    const colorsToIgnore = ["turquoise", "cyan", "scheme-invert-bis", "scheme-invert-ter"];
    return Object.fromEntries(Object.entries(colors).filter(([k]) => !colorsToIgnore.includes(k)));
  }

  toTitleCase(item) {
    if (!item) return "";
    item = item.toString();
    item = item.toLowerCase().split(" ");
    var newItem = [];
    for (var i = 0; i < item.length; i++) {
      newItem[i] = item[i].substr(0, 1).toUpperCase() + item[i].substr(1);
    }
    return newItem.join(" ");
  }

  isColorBright(hc){
    const [r, g, b] = [0, 2, 4].map( p => parseInt( String(hc).substring( p, 2 ), 16 ) );
    return ((r * 299) + (g * 587) + (b * 114)) / 1000 >= 128; 
  }
};
