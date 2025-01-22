import {html, css, unsafeCSS} from 'lit-element';
import {TermsConditionsBase} from '../../base/elements/terms-conditions';
import {TermsConditionsStyles} from './terms-conditions-css';
import '../empty-view/empty-view';
import globalStyles from '../../App.css?raw'


class TermsConditions extends TermsConditionsBase {
 
  static get properties() {
    return {
      'rounded': Boolean,
      e: { type: Object },
    };
  }

  updated(changedProperties) {
		if (
			changedProperties.has('e')
		) {
	
		}
	}

  static get styles(){
    return [
      unsafeCSS(globalStyles),
      TermsConditionsStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
 
  showTermsModal(){
    const modal = this.shadowRoot.querySelector("#myModal");
    modal.style.display = "block";
    this.getTerms();
  }

  closeModal(){
    const modal = this.shadowRoot.querySelector("#myModal");
    modal.style.display = "none";
  }

  getTerms(){
    const content = this.shadowRoot.querySelector("#content");

    if(this.e.defaultValue != null && this.e.defaultValue != undefined && this.e.defaultValue !=""){
      if(this.e.kind !=null && this.e.kind != undefined && this.e.kind !="" && this.e.styles !=""){

        let firstHalfTerms = this.e.defaultValue;
        let secondHalfTerms = this.e.kind;
        let lastTerms =  this.e.styles 
        let thridFullterms = firstHalfTerms.concat(secondHalfTerms);
        let fullTerms = thridFullterms.concat(lastTerms)

        content.innerHTML = fullTerms;

      }else{
        //TODO handle a situation when there is no styles
        content.innerHTML = this.e.defaultValue;
      }

    }else{

      content.innerHTML = "<empty-view message='Terms and conditions is not up yet. Do check later'></empty-view>"

    }
  }

  //TODO UPDATE DOC ALSO USE BELOW FUNCTION FOR LOGO

  getLogo(){
    const logo = this.e.details.logo;

    if(logo !=null && logo !=undefined && logo != ""){
      return logo;
    }else{
      return "https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png";
    }
  }

  getInput() {
    return this.qs('input');
  }
  getValue() {
    return this.qs('#checkbox_1').checked;
  }

  invalid(validation) {
      const label = this.shadowRoot.querySelector("label");
      label.classList.add("error");
      
  }

  valid(validation){
    const label = this.qs("label");
    label.classList.remove("error");

  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    console.log("style",this.e.styles); 
  }
  init(pElement, loader) {
    super.init(pElement, loader);
  }

  render() {
    return html`
      <div class="content">
        <div class="column">
          <div id="myModal" class="modal">
            <div class="modal-content">
              <div class="dialog-header">
                <div class="popup-image">
                  <img src="${this.getLogo()}" alt="brand logo" />
                </div>
                <span @click="${this.closeModal}" class="close">&times;</span>
              </div>
              <div class="dialog-body">
                <h2>Terms and Conditions</h2>
                <div id="content" class="content">
                </div>
              </div>
            </div>
          </div>
          <div class="checkbox">
              <input type="checkbox" id="checkbox_1">
              <label  for="checkbox_1">${this.name}<span><a  @click="${this.showTermsModal}"> terms and conditions</span></label>
          </div>
        </div>
      </div>  
    `;
  }
}
window.customElements.define(TermsConditions.is, TermsConditions);
