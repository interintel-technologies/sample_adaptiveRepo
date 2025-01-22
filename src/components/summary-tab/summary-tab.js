import {html,css, unsafeCSS} from 'lit-element';
import {SummaryTabBase} from '../../base/elements/summary-tab';
import { SummaryTabStyles } from "./summary-tab-css";
import globalStyles from '../../App.css?raw'

class SummaryTab extends SummaryTabBase{

    static get styles() {
        return [
          unsafeCSS(globalStyles),
            SummaryTabStyles,
          css`
            :host {
              display: block;
            }
          `
        ];
      }

      
static get properties() {
  return {
      loading: Boolean,
      rows:Array,
      cols:Array,
      groups:Array,
      e:Object


  };
}

constructor() {
  super();
  this.loading = false;
  this.rows = [];
  this.cols = [];
  this.groups = []
  this.e = null
}

updated(changedProperties) {
  super.updated(changedProperties);

  if (changedProperties.has('e')) {
    console.log("summary-tab ",this.e);
    
  }
}
    render(){
        return html`
        
    <section>
      Summary Tab
        <div class="columns has-text-weight-bold is-size-6">

            ${this.getGroupTitles(JSON.parse(this.e.defaultValue)).map((groupTitle, groupIndex) => html`
                <div class="group-title">
                  <h1>${groupTitle}</h1>
                </div>
            
              <div class="group">
             ${this._getSubGroupTitles(groupTitle).map((subTitle) => html`
             
                <div class="column">
                  <div class="details" style="background-color:hsl(${this.hueGenerator()},50%,50%)">
                    <div>
                      <p class="summary-p ">${subTitle}</p>
                      <p class="summary-info">${this._getSubtitleValue(groupTitle,subTitle)}</p>
                    </div>
                    <iron-icon class="iron-icon" style="width:50px !important;height: 50px !important; color: white!important;" icon="${this.e.icon}"></iron-icon>
                  </div> 
                </div>
            
             
             `)}
            </div>
            
            
            `)}

        
    </section>
        
        `
    }

    static get is(){
        return 'summary-tab'
    }


      firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        
      }
      getGroupTitles(mainObject){
        return Object.keys(mainObject);

      }

      _getSubGroupTitles(objectKeyTitle){

        let obj = JSON.parse(this.e.defaultValue);
      
        let subtilesObject = obj[objectKeyTitle]; // we get an object
        let subTitles  = Object.keys(subtilesObject);

        return subTitles;

        
      }

      _getSubtitleValue(objectKeyTitle,subTitleKey){
        let obj = JSON.parse(this.e.defaultValue);
      
        let subtilesObject = obj[objectKeyTitle];// we get an object
        let subTitlesValue  = subtilesObject[subTitleKey]  // we get the value

        return subTitlesValue;
        
      }

      hueGenerator () {
        let hue=Math.random()*360;

        // if hue falls in this range recur color generator
        if((hue >= 38 && hue <= 103) || (hue >=169 && hue <=189)){
          this.hueGenerator();
        }
        return hue;
      }
}

customElements.define(SummaryTab.is, SummaryTab);