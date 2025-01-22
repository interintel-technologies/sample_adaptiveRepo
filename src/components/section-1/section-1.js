import { html, css,unsafeCSS } from "lit-element";
import "fa-icons";
import { Section1Styles } from "./section-1-css";
import { SectionPElementDsc } from "../../base/elements/section-pelement-dsc";
import globalStyles from '../../App.css?raw'
class Section1 extends SectionPElementDsc {
  static get styles() {
    return [unsafeCSS(globalStyles),Section1Styles];
  }

  checkIcon(dscname) {
    if (dscname.includes("|")) {
      return true;
    } else {
      return false;
    }
  }

  getIcon(dscname) {
    let [title, icon] = dscname.split("|");

    return icon;
  }

  getTitle(dscname) {
    let [title, icon] = dscname.split("|");

    return title;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    const self = this;

    this.loader.then((dsc) => {
      window.addEventListener("scroll", () => {
        self.scrollAppear();
      });
    });
  }

  scrollAppear() {
    const self = this;

    let contentContainer = self.shadowRoot.querySelector(".solution-area");
    let mainColumn = self.shadowRoot.getElementById("mainColumn");

    let contentStartPosition = contentContainer.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (contentStartPosition < screenPosition) {
      mainColumn.classList.add("animate1-appear");
    }
  }

  static get is() {
    return "section-1";
  }

  render() {
    return html`
        <section class="solution-area bg">
        <div class="solution-container">
          <div class="section-title">
            <h2>${this.e.name}</h2>
            <p>${this.e.details.subtitle}</p>
          </div>
          <div id="mainColumn" class="columns animate1">
          ${this.rows.map(
            (slide, index) => html`
              <div class="column">
                <div class="single-services-box">
                  <div class="icon">
                    ${this.checkIcon(slide[1])
                      ? html`
                          <fa-icon
                            class="${this.getIcon(slide[1])}"
                            color="#fff"
                            style="height:68px; width: 72px;"
                          ></fa-icon>
                        `
                      : html`
                          <img src="/media/${slide[3]}" alt="${slide[1]}" />
                        `}
                  </div>
                  <h3><a>${this.getTitle(slide[1])}</a></h3>
                  <p>${slide[2]}</p>
                </div>
              </div>
            `
          )}
            
          </div> <!--main -->
        <div>
      </section>
        `;
  }
}

customElements.define(Section1.is, Section1);
