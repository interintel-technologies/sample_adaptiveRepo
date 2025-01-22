import { html, css, unsafeCSS, LitElement } from 'lit-element';
import { NextClientStyles } from './next-client-css';
import globalStyles from '../../App.css?raw';

class NextClient extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      NextClientStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      profile: { type: Object },
      appointment: { type: Object },
      rows: { type: Array },
      e: { type: Object },
      cols: { type: Array },
      lines: { type: Array }
    };
  }

  constructor() {
    super();
    this.profile = {};
    this.appointment = {};
    this.rows = [];
    this.cols = [];
    this.lines = [];
    this.e = null;
  }

  updated(changedProperties) {
    if (changedProperties.has('e') || changedProperties.has('lines') || changedProperties.has('cols')) {
      console.log('Updated properties detected:', changedProperties);

      if (this.lines.length > 0) {
        this.profile = this.lines[0];
        this.appointment = Object.fromEntries(
          this.rows[0].map((rowValue, index) => [this.cols[index].label, rowValue])
        );
      } else {
        console.warn('Lines array is empty.');
      }
    }
  }

  static get is() {
    return 'next-client';
  }

  render() {
    return html`
      <div class="content">
        <div class="column content">
          <div class="card">
            <div class="card-header">
              <h4 class="card-header-title">Next Client</h4>
            </div>
            <div class="card-content">
              <div class="media">
                <figure class="media-left">
                  <p class="image">
                    <img src="/media/${this.profile.image}" alt="${this.profile.name}">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="block">
                    <h4>${this.profile.name}</h4>
                    <p>${this.profile.age} years, ${this.profile.gender}</p>
                  </div>
                </div>
              </div>
              ${Object.entries(this.appointment).map(
                ([label, value]) => html`
                  <div class="block">
                    <h4>${label}</h4>
                    <p>${value}</p>
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(NextClient.is, NextClient);
