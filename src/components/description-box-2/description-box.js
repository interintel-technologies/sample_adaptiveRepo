import {html, css, LitElement, unsafeCSS} from 'lit-element';
import {DescriptionBoxStyles} from './description-box-css'
import globalStyles from '../../App.css?raw'

class DescriptionBox extends LitElement{
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DescriptionBoxStyles,
          css`
            :host {
              display: block;
            }
          `
        ];
      }

      
    render(){
        return html`
        ${this.e && Object.keys(this.e).length > 0 ? html`
    <div class="main-container">
        <div class="descriptionBox is-flex">
       
                
                <div class="descriptionBox__tabs">
                <ul>
                ${this.rows.map((slide,index) => html`
                    <li id="li-${index}" class="descriptionBox__item" data-item="" @click="${() => this.openTab(index, 'content-'+index)}">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold">${this._getTitle(slide[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(slide[1])}</p>
                        </div>
                    </li>
                    `)}
                </ul>

            </div>

            <div class="descriptionBox__content">
            ${this.rows.map((slide,index) => html`
                <div class="content-container" id="content-${index}">
                    <div class="tab_drawer_heading">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold is-centered">${this._getTitle(slide[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(slide[1])}</p>
                        </div>
                    </div>
                    <div class="columns is-flex data">
                        <div class="my-content column is-three-quarters">
                            <div class="content">
                                <h1>${this._getTitle(slide[1])}</h1>
                                <p>${slide[2]}</p>
                            </div>
                        </div>
                        <div class="image-container column">
                            <img class="fade-in one" src="/media/${slide[3]}" alt=" ${this._getTitle(slide[1])} image}"/>
                        </div>
                    </div>
                </div>
                `)}

            </div>
                       
        </div>
    </div>
    ` : html`
    <p>Loading data...</p>
  `}
`;
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);


            // let contents = this.shadowRoot.querySelectorAll(".content-container");
            // let lists = this.shadowRoot.querySelectorAll(".descriptionBox__item");
            // console.log("contents ",contents);
            

            // contents[0].style.display = 'block'; 
            // lists[0].classList.add('active')
  
        

      }

      _getSubTitle(text){

        let [title, subTitle] = text.split('|');
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

      static get properties() {
        return {
            rows:Array
        };
       }

    static get is(){
        return 'description-box';
    }

    openTab(index, tabName) {
       
        let contents = this.shadowRoot.querySelectorAll(".content-container");
        let lists = this.shadowRoot.querySelectorAll(".descriptionBox__item");

        contents.forEach((content)=>{content.style.display="none"})

        lists.forEach((list)=>{list.classList.remove("li-active") });

        this.shadowRoot.querySelector("#" + tabName).style.display = "block";
        this.shadowRoot.querySelector("#li-"+index).classList.add("li-active");
    }
}

customElements.define(DescriptionBox.is, DescriptionBox);
