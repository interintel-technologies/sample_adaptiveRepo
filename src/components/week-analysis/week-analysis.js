import { html, css, LitElement, unsafeCSS } from "lit-element";
import { WeekAnalysisStyles } from "./week-analysis-css";
import * as d3 from "d3";
import globalStyles from '../../App.css?raw';

class WeekAnalysis extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      WeekAnalysisStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      weekSummary: Array,
      weekAnalysis: Array,
      analysisAttributes: Array.prototype,
      colors: Array,
      colorScale: Object,
      e: { type: Object },
    };
  }

  constructor() {
    super();

    this.weekAnalysis = [];
    this.weekSummary = {};
    this.colors = [];
    this.analysisAttributes = [];
    this.colorScale = {};
    this.e = null;
  }

  updated(changedProperties) {
    if (changedProperties.has('rows') || changedProperties.has('cols')) {
      
      this.weekSummary = this.lines[0];
      this.analysisAttributes = this.cols.map((col) => col.label);
      this.createColors();
      this.createColorScale();
      this.createWeekAnalysis();

        this._updateInsights();
    }
    console.log("this insights", this.insights);
}

  // firstUpdated() {
  //   this.loader.then(() => {
  //     this.weekSummary = this.lines[0];
  //     this.analysisAttributes = this.cols.map((col) => col.label);
  //     this.createColors();
  //     this.createColorScale();
  //     this.createWeekAnalysis();
  //   });
  // }

  createWeekAnalysis() {
    const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    this.weekAnalysis = this.rows.map((row, index) => ({
      [daysOfWeek[index]]: Object.fromEntries(
        row.map((analysis, innerIndex) => [
          this.analysisAttributes[innerIndex],
          analysis,
        ])
      ),
    }));
  }

  createColors() {
    this.colors = this.analysisAttributes.map((item, index, array) =>
      this.randomColorGenerator(array.length, index)
    );
  }

  createColorScale() {
    this.colorScale = d3
      .scaleOrdinal()
      .domain(this.analysisAttributes)
      .range(this.colors);
  }

  calculateGradient(analysis) {
    let total = 0;
    const gradients = [];

    Object.entries(analysis).forEach(([key, value]) => (total = total + value));

    if (total !== 0) {
      Object.entries(analysis).forEach(([key, value], index, array) => {
        const color = this.colorScale(key);
        const rangePercentage = (value / total) * 100;

        let analysisGradientStart, analysisGradientStop;
        if (index === 0) {
          analysisGradientStart = [color, 0];
          analysisGradientStop = [color, rangePercentage];
        } else {
          const previousRangePercentageStop = gradients[index - 1][1][1];

          analysisGradientStart = [color, previousRangePercentageStop];
          analysisGradientStop = [
            color,
            previousRangePercentageStop + rangePercentage,
          ];
        }
        gradients.push([analysisGradientStart, analysisGradientStop]);
      });

      return gradients
        .map((gradient) => gradient.map((item) => ` ${item[0]} ${item[1]}%`))
        .join();
    } else {
      return " #ccc, #ccc";
    }
  }

  getCurrentWeek() {
    const current = new Date();
    const first = current.getDate() - current.getDay();
    const last = first + 6;

    const firstDay = new Date(current.setDate(first)).toDateString();
    const lastDay = new Date(current.setDate(last)).toDateString();

    return `This week ${firstDay} - ${lastDay}`;
  }

  randomColorGenerator(numberOfSteps, step) {
    let r, g, b;
    let h = step / numberOfSteps;
    let i = ~~(h * 6);
    let f = h * 6 - i;
    let q = 1 - f;
    switch (i % 6) {
      case 0:
        r = 1;
        g = f;
        b = 0;
        break;
      case 1:
        r = q;
        g = 1;
        b = 0;
        break;
      case 2:
        r = 0;
        g = 1;
        b = f;
        break;
      case 3:
        r = 0;
        g = q;
        b = 1;
        break;
      case 4:
        r = f;
        g = 0;
        b = 1;
        break;
      case 5:
        r = 1;
        g = 0;
        b = q;
        break;
    }
    const color =
      "#" +
      ("00" + (~~(r * 255)).toString(16)).slice(-2) +
      ("00" + (~~(g * 255)).toString(16)).slice(-2) +
      ("00" + (~~(b * 255)).toString(16)).slice(-2);
    return color;
  }

  static get is() {
    return "week-analysis";
  }

  render() {
    return html`
      <div class="column content">
        <div class="card">
          <div class="card-header">
            <h3 class="card-header-title">${this.e.name}</h3>
            <div class="card-header-icon">
              <a
                href="${this.e.details.seeAllLink}"
                target="_blank"
                class="button"
                ><p>See All</p></a
              >
            </div>
          </div>
          <div class="card-content">
            <h4 style="padding-left: 0.8rem;">${this.getCurrentWeek()}</h4>
            <div class="columns" style="margin-top: 20px; margin-left: 0;">
              <div class="column is-8">
                <div class="columns is-mobile">
                  ${this.weekAnalysis.map((dayAnalysis) =>
                    Object.entries(dayAnalysis).map(
                      ([day, analysis]) => html`
                        <div class="column is-flex">
                          <h5>${day}</h5>
                          <div
                            class="candle"
                            style="background: linear-gradient(to top,${this.calculateGradient(
                              analysis
                            )});"
                          ></div>
                        </div>
                      `
                    )
                  )}
                </div>
                <div class="columns">
                  ${this.analysisAttributes.map(
                    (analysisAttribute) => html`
                      <div class="column">
                        <div
                          class="is-flex"
                          style="justify-content: space-evenly;"
                        >
                          <span
                            class="circle"
                            style="background-color: ${this.colorScale(
                              analysisAttribute
                            )}"
                          ></span>
                          <p>${analysisAttribute}</p>
                        </div>
                      </div>
                    `
                  )}
                </div>
              </div>
              <div class="column is-4">
                <div class="block is-flex">
                  <h5>This week's summary</h5>
                  <div class="column">
                    ${Object.entries(this.weekSummary).map(
                      ([label, count]) => html`
                        <span class="summary is-flex">
                          <div class="count-box">${count}</div>
                          <h6>${label}</h6>
                        </span>
                      `
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(WeekAnalysis.is, WeekAnalysis);
