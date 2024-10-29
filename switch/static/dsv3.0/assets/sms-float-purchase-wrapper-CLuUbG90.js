import{i as m,S as b,r as g,g as w,k as n,a as c,j as p}from"./index-C2PWchud.js";import{I as x}from"./input-shared-default-D8777CY5.js";import{I as y}from"./input-label-animation-CeZfeLC5.js";import{u as S}from"./utils-mixin-D5aAiqNi.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";const k=m`

.cal-area {
    display: none;
    justify-content: space-evenly;
    background-color: #ccfce1;
    padding: 18px;
    margin-bottom: 16px;
    border-radius: 6px;
    overflow-x: visible;
    overflow-y: visible;
}

.p-text {
  font-size: 16px;
  font-weight: 700;
}

input {
    font: 500 14px / 24px Lato, Arial, sans-serif;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    border-radius: 6px;
    padding: 16px 13.5px;
    color: rgb(1, 50, 67);
}

.field{
    margin-top:42px!important;
}

.calc {
    width: 50%!important;
    margin: 0 auto!important;
}
.button{
    width: 100%!important;
    background-color: var(--primary)!important;
    color: #fff!important;
}


#warning-text{
  display: none;
  position: relative;
  margin-top: 8px;
  
}

  .dropdown-container{
    width: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    // margin-left: 36px;
  }
  .ss-dropdown-header, .ss-dropdown-collapsable {
    // width: 100%;
    padding: 9.5px 20px;
    background-color: #fff;
    border-radius: 4px;
    color: rgb(1, 50, 67);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(183, 181, 181);
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)
  }
  .ss-icons{
    display: flex;
    justify-content: center;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    top: 2px;
  }
  .label-name{
    position: relative;
    top: 0px;
    transition: all 0.4s ease 0s;
    color: rgb(1, 50, 67);
    font-size: 16px;
}
  
  
  .ss-single-selected .ss-arrow {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    margin: 0 6px 0 6px; 
  }
  .ss-single-selected .ss-arrow span {
    border: solid #666666;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transition: transform .2s, margin .2s; 
  }
  .ss-single-selected .ss-arrow span.arrow-up {
      transform: rotate(-135deg);
      margin: 10px 0 0 0; 
      top: 4px;
      position: relative;
  }
  .ss-single-selected .ss-arrow span.arrow-down {
      transform: rotate(45deg);
      // margin: -17px; 
  }
  .ss-dropdown-collapsable{
    top: 73px;
    display: none;
    position: absolute;
    padding-right: 16px;
    overflow-y: auto;
    right: 0;
    left: 0;
    z-index: 99;
    cursor: initial;
    transform-origin: center top;
    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
    opacity: 0;
  }
  .ss-dropdown-collapsable::before{
    content: '';
    width: 0;
    height: 10px;
    position: absolute;
    top: -30px;
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
  }
  
  .ss-dropdown-collapsable .ss-search {
    width: 100%;
  }
  
  .ss-dropdown-collapsable .ss-search input {
    display: inline-flex;
    font-size: inherit;
    line-height: inherit;
    flex: 1 1 auto;
    width: inherit;
    min-width: 0px;
    height: 30px;
    padding: 6px 8px;
    margin: 0;
    border: 1px solid rgb(183, 181, 181);
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    text-align: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-appearance: textfield; 
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    max-height: 196px;
    overflow-y: auto;
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items li {
    padding: 10px;
    cursor: pointer;
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items li:hover{
    background-color: #e5e5e5;
  }
  
  .ss-option:not(.ss-disabled).ss-option-selected{
    background-color:var(--primary);
    color: #fff;
  }
  
  .ss-dropdown-collapsable.ss-open{
    opacity: 1;
    display: block;
    transform: scaleY(1);
  }
  .ss-plus{
    display: none;
  }
  .ss-plus.active{
    display: block;
    position: absolute;
    right: 43px;
  }
  .form-field--is-active .label-name{
    transform: translateY(-24px);
    position: absolute;
    font-size: 12px;
    left:3px;
    font-weight: 700;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;
    padding-bottom: 10px;
  }
  .is-arrow-danger {
    border-color:rgb(255, 56, 96)!important;
  }
  .is-arrow-success{
    border-color: #23d160 !important;
  }
  
  .lbl-danger{
    color: #ff2b56;
  }
  .cont-danger{
    border: 2px solid #ff2b56;
  }
  
  .lbl-success{
    color: #23d160 !important;
  }
  .cont-success{
    border: 2px solid #23d160;
  }


  @media screen and (max-width:800px) {   
    .calc {
      width: 80%!important;
      margin: 0 auto!important;
    }
  
  }

  @media screen and (max-width:600px) {   
    .calc {
      width: 100%!important;
      margin: 0 auto!important;
    }
  
  }



`,h=class extends S(b){static get is(){return"sms-float-purchase"}static get properties(){return{params:{type:Object,value:{}},type:String,value:String,columnSize:{type:Array},items:{type:Object},dropDownList:Array,selected:String}}getName(){return this.e.formName}validate(){return(this.e.required||this.required)&&!this.getValue()?new this.Validation(!1,this.e.name+" is Required"):(this.e.required||this.required)&&this.getValue()?new this.Validation(!0,"valid"):new this.Validation(!0,"valid")}firstUpdated(r){super.firstUpdated(r)}init(r,e){super.init(r,e);const t=this;t.title=h.toTitleCase(r.name),this.required=this.e.required||r.min&&r.min>0,t.items=JSON.parse(r.defaultValue),this.value=r.defaultValue||""}};class u extends h{static get styles(){return[g(w),k,x,y]}static get properties(){return{contentOpen:Boolean,dropdownLabel:String,dropDownList:Array,rateSelected:Boolean,selectedRate:Number,networkSelected:String,amountToPay:String}}constructor(){super(),this.contentOpen=!1,this.dropdownOptions=[],this.dropDownList=[],this.selected=null,this.rateSelected=!1}parseDropdownOptions(){const e=[],t=this,s=this.shadowRoot.querySelector(".ss-dropdown-label");for(var o=0;o<this.items.length;o++){const i=this.items[o];typeof i=="object"&&(i.selected&&(t.selected=i.name,s.classList.add("form-field--is-active")),e.push(i))}this.dropDownList=e}firstUpdated(e){super.firstUpdated(e);const t=this;this.parseDropdownOptions(),document.addEventListener("click",function(s){s.path[0].id=="placeholder"||s.path[0].id=="drp-cont"||s.path[0].id=="arrow "||s.path[0].className=="placeholder label-name"||s.path[0].className=="label-name placeholder lbl is-active has-text-weight-bold"||s.path[0].className=="ss-dropdown-header ss-single-selected ss-open-below"||s.path[0].className=="ss-dropdown-header ss-single-selected"||s.path[0].className=="ss-arrow"||s.path[0].className=="arrow-up"||s.path[0].className=="label-name placeholder lbl "||s.path[0].className=="ss-dropdown-header ss-single-selected"||t.close()})}close(){this.contentOpen&&(this.contentOpen=!1)}stickyLabel3(e){const t=this.shadowRoot.querySelector("#label"+e.toString());t.style.top="-65px",t.style.left=0,t.style.fontSize="12px",t.style.fontWeight=700}stickyLabel2(e){const t=e.target.value,s=e.target.getAttribute("label-id"),o=this.shadowRoot.querySelector("#"+s);t==""&&(o.style.top="-35px",o.style.left="25px",o.style.fontSize="14px",o.style.fontWeight="normal")}stickyLabel(e){const t=e.target.value,s=e.target.getAttribute("label-id"),o=this.shadowRoot.querySelector("#"+s);t==""&&(o.style.top="-65px",o.style.left=0,o.style.fontSize="12px",o.style.fontWeight=700)}getSelected(){}_getRate(e,t){let s=t,o,i=this.dropDownList[e].rates;return Object.keys(i).forEach(a=>{if(a.includes("-")){let[d,f]=a.split("-");s>=parseInt(d)&&s<=parseInt(f)&&(o=i[a])}else s>parseInt(a)&&(o=i[a])}),o}optionSelected(e){e.preventDefault();const t=e.target.getAttribute("option_value"),s=e.target.getAttribute("option_rate"),o=e.target.getAttribute("option_name"),i=this.shadowRoot.querySelector("#dropdownList").getElementsByTagName("li"),l=this.shadowRoot.querySelector(".ss-dropdown-label");for(var a=0;a<i.length;a++)i[a].classList.remove("ss-option-selected");e.currentTarget.className+=" ss-option-selected",this.selected=t,this.rateSelected=!0,this.selectedRate=s,this.networkSelected=o,l.classList.add("form-field--is-active"),this.operateDp()}_calculate(){let e=this.shadowRoot.querySelector("input").value,t=this.shadowRoot.querySelector("#warning"),s=this.shadowRoot.querySelector(".cal-area"),o=this.shadowRoot.querySelector("#amount"),i=this.shadowRoot.querySelector("#rate-amount"),l;const a=this;if(e!==""&&this.rateSelected&&e!==0&&e!=="0"){let d=this._getRate(a.selectedRate,e);t.style.display="none",l=e*d,this.amountToPay=a.formatMoney(l),o.innerText="Ksh "+a.formatMoney(l).toLocaleString("en-US"),i.innerText="SMS: "+parseInt(e).toLocaleString("en-US")+" ("+a.networkSelected+")",s.style.display="flex"}else{if(e===0||e==="0"){t.style.display="block",t.innerText="Please enter a valid number";return}this.rateSelected===!1&&e===""?(t.style.display="block",t.innerText="Select a mobile network & enter float amount to calculate"):this.rateSelected&&e===""?(t.style.display="block",t.innerText="Enter a float amount to calculate"):this.rateSelected===!1&&e!=""&&(t.style.display="block",t.innerText="Select a mobile network to calculate")}}formatMoney(e,t,s,o){t=isNaN(t=Math.abs(t))?2:t,s=typeof s>"u"?".":s,o=typeof o>"u"?",":o;var i=e<0?"-":"",l=String(parseInt(e=Math.abs(Number(e)||0).toFixed(t))),a=(a=l.length)>3?a%3:0;return i+(a?l.substr(0,a)+o:"")+l.substr(a).replace(/(\decSep{3})(?=\decSep)/g,"$1"+o)+(t?s+Math.abs(e-l).toFixed(t).slice(2):"")}formatMoney2(e){return e.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")}operateDp(){this.contentOpen?this.contentOpen=!1:this.contentOpen=!0}getValue(){let e;return this.networkSelected!==void 0&&this.amountToPay!==void 0&&(e={network:this.networkSelected,amount:this.amountToPay}),e}valid(e){let t=this.shadowRoot.querySelector("#warning");t.style.display="none"}invalid(e){let t=this.shadowRoot.querySelector("#warning");t.style.display="block",t.innerText="Calculate float amount"}renderDefault(){return n`

      <div class="content">
        <div class="column calc">          
          <div class="dropdown-container" id="dropdownSelect">
            <div @load=${this.getIcons} id="drp-cont"
              class="ss-dropdown-header ss-single-selected ${this.contentOpen?"ss-open-below":""}"
              @click="${this.operateDp}">
              <div class="ss-dropdown-label">
                <span class="label-name placeholder lbl ">Select Mobile Network</span>
                <span class="placeholder">${this.selected}</span>
              </div>
              <fa-icon class="fas fa-times ss-deselect ss-plus" @click="${this._onDeselectClick}"
                style="fill: rgb(1, 50, 67);height: 15px;width: 15px;position: absolute;top: 9px;"></fa-icon>
              <div class="ss-icons">
                <span class="ss-arrow">
                  <span id="arrow" class="${this.contentOpen?"arrow-up":"arrow-down"}"></span>
                </span>
              </div>
            </div>
            <div class="ss-dropdown-collapsable ss-content ${this.contentOpen?"ss-open":""}">
              <ul id="dropdownList" class="ss-dropdown-items">

                ${this.dropDownList.length==0?n`
                  <li class="ss-option">No values present. We are working on it.</li>
        
                `:n`
        
                ${this.dropDownList.map((e,t)=>n`
                  <li @click="${this.optionSelected}" option_value="${e.id}" option_name=${e.name} option_rate=${t}
                    class="ss-option ${e.selected?"ss-option-selected":""}">${e.name}</li>
                  `)}
                  
                `}
              </ul>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-right input-mixin input-effect">
              <input class="label-animation" id="input1" label-id="label1" @focusin=${this.stickyLabel}
                @focusout=${this.stickyLabel2} type="number" maxlength="${this.e.max}" minlength="${this.e.min}" value=""
                placeholder="">
              <label id="label1">Enter Number of sms </label>
            </div>
            <p id="warning"></p>
          </div>
          <div class="cal-area">
            <p id="rate-amount" class="p-text">0.7(Safaricom)</p>
            <p id="amount" class="p-text">Amount to pay: Ksh 33,000</p>
          </div>
    
          <button class="button" @click="${this._calculate}">Calculate</button>

        </div>
      </div>  
    `}}customElements.define(u.is,u);const R=({element:r})=>{const e=c.useRef(null);return c.useEffect(()=>{const t=e.current;t&&r&&(t.e=r)},[r]),p.jsx("div",{children:r?p.jsx("sms-float-purchase",{id:"sms-float-purchase",ref:e}):p.jsx("p",{children:"Loading data..."})})},D=v(R);export{D as default};
