import { css, html, unsafeCSS } from "lit-element";

import { ThemeMixin } from "../../mixins/ThemeMixin";
import { FloatingThemeToggleStyles } from "./floating-theme-toggle-css";
import { SectionPElementBase } from "../../../../../elements/base/section-pelement";
import globalStyles from '../../App.css?raw';

class FloatingThemeToggle extends ThemeMixin(SectionPElementBase) {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      FloatingThemeToggleStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      theme: String, // default, dark
    };
  }

  constructor() {
    super();
    this.theme = "light";
  }

  updated(changedProperties) {
    // all local storage logic is handled here
    super.updated(changedProperties);

    changedProperties.forEach((oldValue, propName) => {
      if (propName === "theme") {
        if (oldValue === undefined) {
          const retrievedTheme = localStorage.getItem("theme");
          if (retrievedTheme) {
            this.theme = retrievedTheme;
            this.applyMode(this.theme);
          } else {
            localStorage.setItem("theme", "light");
            this.applyLightTheme();
          }
        } else if (oldValue !== this.theme) {
          localStorage.setItem("theme", this.theme);
        }
      }
    });
  }

  onThemeToggleClickHandler() {
    if (this.theme === "light") {
      this.theme = "dark";
      this.applyDarkTheme();
    } else if (this.theme === "dark") {
      this.applyLightTheme();
    }
  }

  static get is() {
    return "floating-theme-toggle";
  }

  render() {
    return html`
      <div @click=${() => this.onThemeToggleClickHandler()} class="float" title="${this.theme === "dark" ? "Dark" : "Light"} Theme">
        <span class="icon">
          <i
            class=${this.theme == "light" ? "fa-solid fa-sun" : "fas fa-moon"}
          ></i>
        </span>
      </div>
    `;
  }
}

window.customElements.define(FloatingThemeToggle.is, FloatingThemeToggle);
