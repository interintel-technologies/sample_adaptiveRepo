import { html, css,unsafeCSS } from 'lit-element';
import { SmsFloatPurchaseStyles } from './sms-float-purchase-css'
import { InputDefaultStyles } from '../../styles/input-shared-default'
import { InputLabelAnimationtStyles } from "../../styles/input-label-animation";
import { SmsFloatPurchaseBase } from "../../base/elements/sms-float-purchase";
import globalStyles from '../../App.css?raw'
class SmsFloatPurchase extends SmsFloatPurchaseBase {

  static get styles() {
    return [unsafeCSS(globalStyles),
      SmsFloatPurchaseStyles,
      InputDefaultStyles,
      InputLabelAnimationtStyles
    ];
  }

  static get properties() {
    return {
      contentOpen: Boolean,
      dropdownLabel: String,
      dropDownList: Array,
      rateSelected: Boolean,
      selectedRate: Number,
      networkSelected: String,
      amountToPay: String,

    };
  }

  constructor() {
    super();
    this.contentOpen = false;
    this.dropdownOptions = [];
    this.dropDownList = [];
    this.selected = null;
    this.rateSelected = false;
  }


  parseDropdownOptions() {
    const parsed = [];
    const self = this;

    const labelContainer = this.shadowRoot.querySelector(".ss-dropdown-label");

    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      // console.log(this.items[i]);
      if (typeof item === 'object') {
        if (item['selected']) {
          self.selected = item['name'];
          labelContainer.classList.add('form-field--is-active');
        }
        parsed.push(item);
      }
    }
    this.dropDownList = parsed;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    const self = this;


    this.parseDropdownOptions();

    document.addEventListener('click', function (event) {

      // console.log("ID", event.path[0].tagName, "id", event.path[0].id, "class", event.path[0].className)


      if (event.path[0].id == "placeholder"
        || event.path[0].id == "drp-cont"
        || event.path[0].id == "arrow "
        || event.path[0].className == 'placeholder label-name'
        || event.path[0].className == 'label-name placeholder lbl is-active has-text-weight-bold'
        || event.path[0].className == 'ss-dropdown-header ss-single-selected ss-open-below'
        || event.path[0].className == 'ss-dropdown-header ss-single-selected'
        || event.path[0].className == 'ss-arrow'
        || event.path[0].className == 'arrow-up'
        || event.path[0].className == 'label-name placeholder lbl '
        || event.path[0].className == 'ss-dropdown-header ss-single-selected') {

        //do nothing

      } else {
        self.close();
      }


    });

  }

  close() {
    if (this.contentOpen) {
      this.contentOpen = false;
    }

  }

  stickyLabel3(index) {

    const label = this.shadowRoot.querySelector('#label' + index.toString());

    label.style.top = -65 + "px";
    label.style.left = 0;
    label.style.fontSize = 12 + "px";
    label.style.fontWeight = 700;

  }
  stickyLabel2(e) {


    const input = e.target.value;
    const inputID = e.target.getAttribute("label-id");

    const label = this.shadowRoot.querySelector("#" + inputID);

    if (input == "") {
      label.style.top = -35 + "px";
      label.style.left = 25 + "px";
      label.style.fontSize = 14 + "px";
      label.style.fontWeight = "normal";
    }

  }

  stickyLabel(e) {

    const input = e.target.value;
    const inputID = e.target.getAttribute("label-id");
    const label = this.shadowRoot.querySelector("#" + inputID);

    if (input == "") {
      label.style.top = -65 + "px";
      label.style.left = 0;
      label.style.fontSize = 12 + "px";
      label.style.fontWeight = 700;
    }


  }



  getSelected() {

  }


  _getRate(arrayRateIndex, value) {

    let inputValue = value;
    let rateReturned;
    let choosenRateObj = this.dropDownList[arrayRateIndex].rates




    let keys = Object.keys(choosenRateObj)

    keys.forEach(key => {

      // console.log("keys>>>",key);

      if (key.includes("-")) {

        let [lowerRate, higerRate] = key.split("-");

        if (inputValue >= parseInt(lowerRate) && inputValue <= parseInt(higerRate)) {
          rateReturned = choosenRateObj[key];

        }

      } else {

        if (inputValue > parseInt(key)) {
          rateReturned = choosenRateObj[key];
        }

      }

    });



    // console.log("rate Returned>>",rateReturned);
    return rateReturned



  }


  optionSelected(event) {
    event.preventDefault();

    const selected = event.target.getAttribute("option_value");
    const selectedRate = event.target.getAttribute("option_rate");
    const networkSelected = event.target.getAttribute("option_name");
    const dropdownItems = this.shadowRoot.querySelector("#dropdownList").getElementsByTagName("li");
    const labelContainer = this.shadowRoot.querySelector(".ss-dropdown-label");


    for (var i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].classList.remove("ss-option-selected");

    }


    event.currentTarget.className += " ss-option-selected";

    this.selected = selected;
    this.rateSelected = true;
    this.selectedRate = selectedRate;
    this.networkSelected = networkSelected;

    // console.log("option selected was >>>", selected);

    labelContainer.classList.add('form-field--is-active');
    this.operateDp();
  }

  _calculate() {

    let inputValue = this.shadowRoot.querySelector("input").value;
    let warningText = this.shadowRoot.querySelector("#warning");
    let cal_area = this.shadowRoot.querySelector(".cal-area");
    let amountText = this.shadowRoot.querySelector("#amount");
    let rateText = this.shadowRoot.querySelector("#rate-amount");


    let amountToPay;

    const self = this;

    if (inputValue !== "" && this.rateSelected && inputValue !== 0 && inputValue !== "0") {
      let actualRate = this._getRate(self.selectedRate, inputValue);
      // console.log("actual Rate>>",actualRate);
      warningText.style.display = "none";

      amountToPay = inputValue * actualRate;
      this.amountToPay = self.formatMoney(amountToPay);


      amountText.innerText = "Ksh " + self.formatMoney(amountToPay).toLocaleString("en-US");
      rateText.innerText = "SMS: " + parseInt(inputValue).toLocaleString("en-US") + " " + "(" + self.networkSelected + ")";


      cal_area.style.display = "flex";

    } else {

      if (inputValue === 0 || inputValue === "0") {

        warningText.style.display = "block";
        warningText.innerText = "Please enter a valid number";

        return;

      }

      if (this.rateSelected === false && inputValue === "") {
        warningText.style.display = "block";
        warningText.innerText = "Select a mobile network & enter float amount to calculate";

      } else if (this.rateSelected && inputValue === "") {
        warningText.style.display = "block";
        warningText.innerText = "Enter a float amount to calculate"
      } else if (this.rateSelected === false && inputValue != "") {
        warningText.style.display = "block";
        warningText.innerText = "Select a mobile network to calculate";
      }
    }
  }

  formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
      decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return sign +
      (j ? i.substr(0, j) + thouSep : "") +
      i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
      (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
  }


  formatMoney2(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  operateDp() {

    if (!this.contentOpen) {
      this.contentOpen = true;
    } else {
      this.contentOpen = false;
    }
  }

  getValue() {
    let amountObj;

    if (this.networkSelected !== undefined && this.amountToPay !== undefined) {
      amountObj = { "network": this.networkSelected, "amount": this.amountToPay }
    }
    return amountObj;

  }

  valid(validation) {
    let warningText = this.shadowRoot.querySelector("#warning");
    warningText.style.display = "none";
  }

  invalid(validation) {
    let warningText = this.shadowRoot.querySelector("#warning");
    warningText.style.display = "block";
    warningText.innerText = "Calculate float amount";
  }
  renderDefault() {
    return html`

      <div class="content">
        <div class="column calc">          
          <div class="dropdown-container" id="dropdownSelect">
            <div @load=${this.getIcons} id="drp-cont"
              class="ss-dropdown-header ss-single-selected ${this.contentOpen ? 'ss-open-below' : ''}"
              @click="${this.operateDp}">
              <div class="ss-dropdown-label">
                <span class="label-name placeholder lbl ">Select Mobile Network</span>
                <span class="placeholder">${this.selected}</span>
              </div>
              <fa-icon class="fas fa-times ss-deselect ss-plus" @click="${this._onDeselectClick}"
                style="fill: rgb(1, 50, 67);height: 15px;width: 15px;position: absolute;top: 9px;"></fa-icon>
              <div class="ss-icons">
                <span class="ss-arrow">
                  <span id="arrow" class="${this.contentOpen ? 'arrow-up' : 'arrow-down'}"></span>
                </span>
              </div>
            </div>
            <div class="ss-dropdown-collapsable ss-content ${this.contentOpen ? 'ss-open' : ''}">
              <ul id="dropdownList" class="ss-dropdown-items">

                ${this.dropDownList.length == 0 ? html`
                  <li class="ss-option">No values present. We are working on it.</li>
        
                `: html`
        
                ${this.dropDownList.map((option, index) => html`
                  <li @click="${this.optionSelected}" option_value="${option.id}" option_name=${option.name} option_rate=${index}
                    class="ss-option ${option.selected ? 'ss-option-selected' : ''}">${option.name}</li>
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
    `;
  }
}

customElements.define(SmsFloatPurchase.is, SmsFloatPurchase);
