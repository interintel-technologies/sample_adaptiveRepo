
import {html, css, LitElement, unsafeCSS} from 'lit-element';
import {DescriptionBoxStyles} from './description-box-css'
import globalStyles from '../../App.css?raw'

class DescriptionBox extends LitElement {

    static get styles() {
		return [unsafeCSS(globalStyles),
			DescriptionBoxStyles
		];
	  }

      
  static get properties() {
    return {
        rows:Array
    };
   }

    
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const boxCols=this.shadowRoot.querySelector(".box-right-cols");
    }

    _getSubTitle(text){
        let [title, subTitle] = text?.split('|');
        return subTitle;
    }
    
    _getTitle(text){
        let [title, subTitle] = text.split('|');
        return title;
    }


    constructor() {
        super();
        this.rows = [];
      }

    render(){
        return html`
        ${this.e && Object.keys(this.e).length > 0 ? html`
            <div class="description-box-container content">
                <div class="columns" style="margin: 0;">
                    <div class="box-left column is-5 ">
                        <div class="box fadeIn">
                                <img src="${this.e.details.coverImage}">
                                <div class="mainInfo">
                                    <h1 class="mb-5">${this.e[0]}</h1>
                                    <p>${this.e.details.description}</p>
                                </div>
                        </div>
                    </div>
                    <div class="box-right column">
                        <div class="columns is-mobile is-multiline box-right-cols">
                            ${this.rows.map((slide, index) => html`
                            <div class="boxCol column px-0 is-6-desktop is-full-mobile is-half-tablet" id="box-${index}">
                                <div class="box m-2 fadeUp">
                                    <div class="columns is-multiline is-mobile">
                                        <div class="column is-6 mt-2 py-0">
                                            <img src="/media/${slide[3]}">
                                        </div>
                                        <div class="column is-12">
                                            <h4>${this._getTitle(slide[1])}</h4>
                                        </div>
                                        <div class="column is-11">
                                            <p>${this._getSubTitle(slide[1])}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
            ` : html`
            <p>Loading data...</p>
          `}
        `;
      }
    }

customElements.define("description-box-lit", DescriptionBox);
