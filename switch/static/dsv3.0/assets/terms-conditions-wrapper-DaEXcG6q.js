import{S as h,i as l,r as p,g as u,k as f,a as s,j as i}from"./index-C2PWchud.js";import{u as x}from"./utils-mixin-D5aAiqNi.js";import"./empty-view-B1-e8K41.js";const n=class extends x(h){static get is(){return"terms-conditions"}constructor(){super(),this.checked=!1}static get properties(){return{}}getInput(){return this.qs("input")}getName(){return this.e.formName}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"you must accept the "):new this.Validation(!0,"accepted")}valid(t){}invalid(t){}firstUpdated(t){super.firstUpdated(t)}init(t,e){super.init(t,e);var o=this;o.title=n.toTitleCase(t.name),o.name=t.name}},b=l`
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 9; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 228px;
}


.close:hover,
.close:focus {
  color: var(--link);
  text-decoration: none;
  cursor: pointer;
}

.dialog-header{
    display: flex;
    justify-content: center;
    align-items: baseline;
}
.popup-image{
    display:flex;
    justify-content:center;
}
.content{
    max-height: 375px;
    overflow: auto;
}
img{
    width:15%;
}
a{
    color: var(--link)!important;
    cursor: pointer;
    text-decoration: none!important;
}
span{
    color:var(--link);
    font-style: italic;
    font-weight: 500;
    cursor: pointer;
}
.error{
    text-decoration: underline;
   text-decoration-color: red;
}
.checkbox input[type="checkbox"] {
    opacity: 0;
}

.checkbox label {
    position: relative;
    display: inline-block;
    
    /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
    
    padding-left: 24px;
    padding-top: 1px;
}

.checkbox label::before,
.checkbox label::after {
    position: absolute;
    content: "";
    
    /*Needed for the line-height to take effect*/
    display: inline-block;
}

/*Outer box of the fake checkbox*/
.checkbox label::before{
    height: 16px;
    width: 16px;
    
    border: 1px solid;
    left: 0px;
    
    /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
     *to vertically center it.
     */
    top: 3px;
}

/*Checkmark of the fake checkbox*/
.checkbox label::after {
    height: 5px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    
    transform: rotate(-45deg);
    
    left: 4px;
    top: 7px;
}

/*Hide the checkmark by default*/
.checkbox input[type="checkbox"] + label::after {
    content: none;
}

/*Unhide on the checked state*/
.checkbox input[type="checkbox"]:checked + label::after {
    content: "";
}

/*Adding focus styles on the outer-box of the fake checkbox*/
.checkbox input[type="checkbox"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
}

@media screen and (max-width: 930px) {
    .close {
        right: 100px;
      }
}
@media screen and (max-width: 594px) {
    .close {
        right: 80px;
      }
}
`;class a extends n{static get properties(){return{rounded:Boolean,e:{type:Object}}}updated(e){e.has("e")}static get styles(){return[p(u),b,l`
        :host {
          display: block;
        }
      `]}showTermsModal(){const e=this.shadowRoot.querySelector("#myModal");e.style.display="block",this.getTerms()}closeModal(){const e=this.shadowRoot.querySelector("#myModal");e.style.display="none"}getTerms(){const e=this.shadowRoot.querySelector("#content");if(this.e.defaultValue!=null&&this.e.defaultValue!=null&&this.e.defaultValue!="")if(this.e.kind!=null&&this.e.kind!=null&&this.e.kind!=""&&this.e.styles!=""){let o=this.e.defaultValue,r=this.e.kind,c=this.e.styles,d=o.concat(r).concat(c);e.innerHTML=d}else e.innerHTML=this.e.defaultValue;else e.innerHTML="<empty-view message='Terms and conditions is not up yet. Do check later'></empty-view>"}getLogo(){const e=this.e.details.logo;return e!=null&&e!=null&&e!=""?e:"https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png"}getInput(){return this.qs("input")}getValue(){return this.qs("#checkbox_1").checked}invalid(e){this.shadowRoot.querySelector("label").classList.add("error")}valid(e){this.qs("label").classList.remove("error")}firstUpdated(e){super.firstUpdated(e),console.log("style",this.e.styles)}init(e,o){super.init(e,o)}render(){return f`
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
    `}}window.customElements.define(a.is,a);const v=({element:t})=>{const e=s.useRef(null);return s.useEffect(()=>{e.current&&t&&(e.current.e=t)},[t]),i.jsx("div",{children:t?i.jsx("terms-conditions",{id:"terms-conditions",ref:e}):i.jsx("p",{children:"Loading data..."})})};export{v as default};
