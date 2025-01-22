import {html, css, unsafeCSS} from 'lit-element';
import globalStyles from '../../App.css?raw';
import 'fa-icons';

import {TimeElementStyles} from './time-element-css'
import { TimeElementBase } from '../../elements/base/time-element';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/


class TimeElement extends TimeElementBase {

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      TimeElementStyles,
      css`
        :host {
          display: block;
          width: 100%;
        }
      `
    ];
  }

  static get properties() {
    return {
      dropDownMenuHidden: Boolean,
      today: String,
      todayHourTime: String,
      todayMinTime: String,
      amOrPm:String,
      isHourSelected:Boolean,
      isMinSelected:Boolean,
      isTODSelected:Boolean,
      iconColor:String,
      name:String,
      defaultValue:String,
      e: { type: Object },
    };
  }
  constructor() {
    super();
    this.dropDownMenuHidden = true;
    this.today = new Date();
    this.todayHourTime = this._getHour(this.today);
    this.todayMinTime = this._getMin(this.today.getMinutes());
    this.amOrPm = this._getAMOrPM(this.today);
    this.iconColor = "#4a4a4a";
    this.name = "";
    this.defaultValue="";
  }

  _getHour(today){
   let H = today.getHours();
   let h = H % 12 || 12;
   return h.toString();

  }
  _getMin(time){
    let min = time;
    min < 10 ? min = "0"+time : min = time;
    return min.toString();
  }
  _getAMOrPM(today){
    let H = today.getHours();
    var ampm = (H < 12 || H === 24) ? "AM" : "PM";
    return ampm.toString();
  }
  render() {
    return html`


<div class="column">
  <div class="control">
  <label class="label">${this.e && this.e.name}</label>
  <!-- Start of calender select -->
  <div class="calendar-select" style="width:100%;">
    <div id="calendar-select-header" class="calendar-select-header" @click="${()=>this._dropdown()}">
      <p id="dateSelected"  class="has-text-center">
        <fa-icon class="fas fa-clock" color="${this.iconColor}" size="1em"></fa-icon>&nbsp;&nbsp; <a class="hour" id="hrs">${this.todayHourTime}</a>&nbsp;:&nbsp;<a class="minutes" id="min">${this.todayMinTime}</a> <a class="tod" id="tod">${this.amOrPm}</a></p>
        <div id="dropdown-arrow" class="dropdown-arrow"></div>
    </div>
      <!-- start of the timer dropdown -->
  
  <div id="timer-dropdown" class="timer-dropdown-container dropdown-containeris-flex is-hidden" style="position: absolute; z-index:999; width:100%">
    <div id="timer-section" class="timer-columns is-flex">
      <div class="timer-column">
        <a @click="${this.increaseHour}"><span>
        <adaptive-ui-icon datacolor="var(--primary-text)"  icon="MdArrowUpward" title="arrow-up"></adaptive-ui-icon>

        </span></a>
        <p  class="timer-p" id="hourTxt">${this.todayHourTime}</p>
        <a @click="${this.decreaseHour}"><span>
        <adaptive-ui-icon datacolor="var(--primary-text)"  icon="MdArrowDownward" title="arrow-down"></adaptive-ui-icon>
        </span></a>
      </div>
      <div class="timer-column">
        <p class="timer-p">&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="timer-column">
        <a @click="${this.increaseMin}"><span>
        <adaptive-ui-icon datacolor="var(--primary-text)"  icon="MdArrowUpward" title="arrow-up"></adaptive-ui-icon>

        </span></a>
        <p  class="timer-p"style="padding:0 1px" contentEditable="true" @keydown=${this.validateKeys} @keyup=${this.validateKeys2} @focusout=${this.validateKeys3} id="minTxt">${this.todayMinTime}</p>
        <a @click="${this.decreaseMin}"><span>
        <adaptive-ui-icon datacolor="var(--primary-text)"  icon="MdArrowDownward" title="arrow-down"></adaptive-ui-icon>
        </span></a>
      </div>
      <div class="timer-column">
        <p class="timer-p">&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="timer-column">
        <a @click="${this.changeTimeOfDay}"><span>
        <adaptive-ui-icon datacolor="var(--primary-text)"  icon="MdArrowUpward" title="arrow-up"></adaptive-ui-icon>
        </span></a>
        <p class="timer-p" id="todTxt">${this.amOrPm}</p>
        <a @click="${this.changeTimeOfDay}"><span>
        <adaptive-ui-icon datacolor="var(--primary-text)"  icon="MdArrowDownward" title="arrow-down"></adaptive-ui-icon>
        </span></a>
      </div>
    </div>
    <div class="close" @click="${this.closeDropdown}"><span><fa-icon  class="fas fa-times" color="#4a4a4a"></fa-icon></span></div>
  </div>
 
  <!-- end of the timer dropdown -->
  </div> 


  <!-- end of calender select -->

  <p id="warning-text" style="color:#ff3860;">${this.name} required</p>

  </div>
</div>
`;
  }

  increaseHour(){
    const hourTxt = this.shadowRoot.querySelector('#hourTxt');
    const hourText = this.shadowRoot.querySelector("#hrs");

    let hourNum  = parseInt(hourTxt.innerText);

    if(hourNum == 12){
      hourNum = 1;
      hourTxt.innerText = hourNum;
      hourText.innerText = hourTxt.innerText

    }else{
      hourNum++;
      hourTxt.innerText = hourNum;
      hourText.innerText = hourTxt.innerText


    }    


  }

  decreaseHour(){
    const hourTxt = this.shadowRoot.querySelector('#hourTxt');
    const hourText = this.shadowRoot.querySelector("#hrs");

    let hourNum  = parseInt(hourTxt.innerText);

    if(hourNum == 1){
      hourNum = 12;
      hourTxt.innerText = hourNum;
      hourText.innerText = hourTxt.innerText

    }else{
      hourNum--;
      hourTxt.innerText = hourNum;
      hourText.innerText = hourTxt.innerText


    }    

  }

  increaseMin(){

    const minTxt = this.shadowRoot.querySelector('#minTxt');
    const minText = this.shadowRoot.querySelector("#min");

    let minNum  = parseInt(minTxt.innerText);

    if(minNum == 59){
      minNum = 0;
    }else{
      minNum++;
    }
    
    if(minNum < 10){
      minTxt.innerText = "0"+minNum;
      minText.innerText = minTxt.innerText;
    }else{
      minTxt.innerText = minNum;
      minText.innerText = minTxt.innerText;
    }

  }

  decreaseMin(){

    const minTxt = this.shadowRoot.querySelector('#minTxt');
    const minText = this.shadowRoot.querySelector("#min");

    let minNum  = parseInt(minTxt.innerText);

    if(minNum == 0){
      minNum = 59;
    }else{
      minNum--;
    }
    
    if(minNum < 10){
      minTxt.innerText = "0"+minNum;
      minText.innerText = minTxt.innerText;

    }else{
      minTxt.innerText = minNum;
      minText.innerText = minTxt.innerText;

    }

  }
  changeTimeOfDay(){
    const todTxt = this.shadowRoot.querySelector('#todTxt');
    const todText = this.shadowRoot.querySelector('#tod');
    

    if(todTxt.innerText == 'AM'){
        todTxt.innerText = 'PM';
        todText.innerText = todTxt.innerText;

    }else{
      todTxt.innerText = 'AM';
      todText.innerText = todTxt.innerText;

    }


  }

  validateKeys(e){
    const minTxt = this.shadowRoot.querySelector('#minTxt');

    const key = e.key || e.code;


    if(e.keyCode == 13){
      e.preventDefault();
      return;
    }
    

    if ((e.key.length <= 1) && (!(e.metaKey || e.ctrlKey || e.altKey))) {

      if(minTxt.innerText.length == 2){
        if(e.keyCode !== 8) {
          e.preventDefault();
          return;
        }

      }



      if (!((key >= '0' && key <= '9'))) {
        if (e.preventDefault) {
          e.preventDefault();
          
        } else {
          e.returnValue = false;

        }

      }
    }
  
  }

  validateKeys2(e){

    const minTxt = this.shadowRoot.querySelector('#minTxt');
    const minNumber= parseInt(minTxt.innerText);

    if(minTxt.innerText.length == 2){
      //check if number is greater than 59
      if(minNumber >59){
        minTxt.innerText = this.todayMinTime;
      }
    }

  }

  validateKeys3(e){

    const minTxt = this.shadowRoot.querySelector('#minTxt');
    

    if(minTxt.innerText.length == 0){
       minTxt.innerText = this.todayMinTime;
    }

  


  }

  _dropdown(){
    const dropdown = this.shadowRoot.querySelector("#timer-dropdown");

    dropdown.classList.toggle('is-hidden');

  }

  closeDropdown(){

    

    const dropdown = this.shadowRoot.querySelector("#timer-dropdown");
    
    if(!(dropdown.classList.contains('is-hidden'))){
      dropdown.classList.add('is-hidden');
      this._getTime(this.getValue());
    }


  }

  _getTime(time){
    this.dispatchEvent(new CustomEvent('getTime',{
      detail: {
          time: time
      },
    }));
  }

  getInput() {
    const hourText = this.shadowRoot.querySelector("#hrs");
    const minText = this.shadowRoot.querySelector("#min");
    const timeofDay = this.shadowRoot.querySelector("#tod");

    const actualTime = hourText.innerText +":"+ minText.innerText +" "+ timeofDay.innerText;



    const picker = actualTime;
    return picker;
  }


  getValue() {
    const pickerDate = this.getInput(); // AsDate;//.getUTCDate();

    return pickerDate;
    // if (pickerDate) {
    //   return this.convertTime24to12(pickerDate);
    // }
  }

  valid(Validation) {
    //this.shadowRoot.querySelector('.validation-info').style.display='none';
    this.shadowRoot.querySelector('#warning-text').style.display='none';
    
    const calenderSelect = this.shadowRoot.querySelector('.calendar-select');

    const label = this.shadowRoot.querySelector('label');
    const hours = this.shadowRoot.querySelector('#hrs');
    const mins = this.shadowRoot.querySelector('#min');
    const tod = this.shadowRoot.querySelector('#tod');
    const dropdownArrow = this.shadowRoot.querySelector('#dropdown-arrow');



    calenderSelect.classList.remove('is-danger');
    calenderSelect.classList.remove('calender-select');
    calenderSelect.classList.add('is-success');

    

    label.classList.remove('is-label-danger');
    label.classList.add('is-label-success');

    hours.classList.remove('is-label-danger');
    hours.classList.add('is-label-success');

    mins.classList.remove('is-label-danger');
    mins.classList.add('is-label-success');

    tod.classList.remove('is-label-danger');
    tod.classList.add('is-label-success');

    dropdownArrow.classList.remove('is-arrow-danger');
    dropdownArrow.classList.add('is-arrow-success');
    this.iconColor = '#23D160'

    setTimeout(()=>{this.resetStyles()}, 3000);

    // Revert general text content
    //this.shadowRoot.querySelector('.validation-info').textContent= 'Required';
  }

  resetStyles(){

    const calenderSelect = this.shadowRoot.querySelector('.calendar-select');

    const label = this.shadowRoot.querySelector('label');
    const hours = this.shadowRoot.querySelector('#hrs');
    const mins = this.shadowRoot.querySelector('#min');
    const tod = this.shadowRoot.querySelector('#tod');
    const dropdownArrow = this.shadowRoot.querySelector('#dropdown-arrow');

    calenderSelect.classList.remove('is-success');
    label.classList.remove('is-label-success');
    hours.classList.remove('is-label-success');
    mins.classList.remove('is-label-success');
    tod.classList.remove('is-label-success');
    dropdownArrow.classList.remove('is-arrow-success');

    this.iconColor = "#4a4a4a";


  }

  invalid(validation) {
    this.shadowRoot.querySelector('#warning-text').style.display='block';
    this.shadowRoot.querySelector('#warning-text').innerText = validation.message;


    const calenderSelect = this.shadowRoot.querySelector('.calendar-select-header');
    const label = this.shadowRoot.querySelector('label');
    const hours = this.shadowRoot.querySelector('#hrs');
    const mins = this.shadowRoot.querySelector('#min');
    const tod = this.shadowRoot.querySelector('#tod');
    const dropdownArrow = this.shadowRoot.querySelector('#dropdown-arrow');

    calenderSelect.classList.remove('is-success');
    calenderSelect.classList.add('is-danger');

    label.classList.remove('is-label-success');
    label.classList.add('is-label-danger');

    hours.classList.remove('is-label-success');
    hours.classList.add('is-label-danger');

    mins.classList.remove('is-label-success');
    mins.classList.add('is-label-danger');

    tod.classList.remove('is-label-success');
    tod.classList.add('is-label-danger');

    dropdownArrow.classList.remove('is-arrow-success');
    dropdownArrow.classList.add('is-arrow-danger');
    this.iconColor = '#23D160'


    // if (validation)
    // {this.shadowRoot.querySelector('.validation-info').textContent= validation;}
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if(this.e) {
      this.name = this.e.name; 
      this.defaultValue = this.e.defaultValue;
    }
    else {
      this.name =  this.propName; 
      this.defaultValue = this.propDefaultValue;
    }
    const self = this;
      const qIn  = self.shadowRoot.querySelector('#dateSelected');

  
        document.addEventListener('click', function (event) {

          // console.log("ID",event.path[0].tagName, "id",event.path[0].id,"class",event.path[0].className)
          

          if(event.path[0].tagName == 'P' ||event.path[0].tagName == 'svg' || event.path[0].tagName == 'use'|| event.path[0].id=="timer-section" || event.path[0].id=="timer-dropdown"||  event.path[0].className == 'fa-icon'){
            
              if(qIn.id ==event.path[0].id || event.path[0].id == 'timer-section' || event.path[0].id=="timer-dropdown" || event.path[0].tagName == 'svg' || event.path[0].className == 'timer-p'|| event.path[0].className == 'fa-icon'|| event.path[0].className == 'timer-column' || event.path[0].tagName == 'use'){
                //do nothing
              }else{
                
                self.closeDropdown();
              }
          }else{
            self.closeDropdown();
          }

          
        });



    if (this.required && !this.defaultValue) {
      //Shows current by default
    }
    if (this.defaultValue) {
      if(this.defaultValue.length > 5){
        //default time is in 12hr format
        let defaultTime = this.defaultValue;
        const [time, modifier] = defaultTime.split(' ');
        let [hours, minutes] = time.split(':');
        this.todayHourTime = hours;
        this.todayMinTime = minutes;
        this.amOrPm = modifier.toUpperCase();
      }else{
        //default time is in 24hr format
        let defaultTime = this.convertTime24to12(this.defaultValue);
        const [time, modifier] = defaultTime.split(' ');
        let [hours, minutes] = time.split(':');
        this.todayHourTime = hours;
        this.todayMinTime = minutes;
        this.amOrPm = modifier;

      }
      
    }
  }
}

customElements.define(TimeElement.is, TimeElement);
