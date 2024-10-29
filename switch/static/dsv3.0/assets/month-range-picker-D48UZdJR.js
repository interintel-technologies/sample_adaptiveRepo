import{i,h as a,r as h,g as r,k as o}from"./index-C2PWchud.js";const l=i`
.content {
  display: flex;
  justify-content: flex-start; 
  /* align-items: center; */
  padding: 14px;
}


.select-container {
  display: flex;
  justify-content: center; 
  align-items: center;     
  height: 100%; 
}


.select select {
  margin: 0 8px;
  appearance: none;
  font-weight: 400 !important;
  font-size:16px !important;
  cursor: pointer;
  border: 0;

}
.select select:focus {
  outline: none !important;
  border: 0 !important;
  font-weight: bold ;
}
.select select:active {
  outline: none !important;
  border: 0 !important;
  font-weight: bold ;
}
.select select:not([multiple]) {
  padding-right: 0 !important;
}
option {
  display: block;
  padding: 0px 2px 1px !important;
  white-space: nowrap; 
  background-color:var(--paper);
  font-size:14px !important
}
.month-container {
  border: 1px solid var(--md-sys-color-surfaceVariant);
  width:85%;
  border-radius: 20px;
  padding: 10px;
  display:flex;
  overflow: hidden;
}
.icon-container {
  display: flex;           
  justify-content: center; 
  align-items: center;     
}

.select:not(.is-multiple):not(.is-loading)::after {
  border: none !important;
}

label{
  display:flex;
  align-items: center;
}

@media (max-width: 600px) { 

  .content{
        width: 80vw;
        position: relative;
        left: -11px;
        overflow:hidden;
  }

  .icon-container{
    display:none
  }
 
}
`;class d extends a{static get styles(){return[h(r),l,i`
        :host {
          display: block;
          margin-bottom: 16px;
        }
      `]}static get properties(){return{data:{type:Array},fromMonth:{type:String},toMonth:{type:String},months:{type:Array},monthNames:{type:Array},filteredMonths:{type:Array}}}constructor(){super(),this.fromMonth="",this.toMonth="",this.months=this.generateMonths("2024"),this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],this.filteredMonths=[]}generateMonths(t){const e=[];for(let n=1;n<=12;n++){const s=n<10?`0${n}`:n;e.push(`${t}-${s}`)}return e}handleMonthChange(){this.dispatchEvent(new CustomEvent("month-range-changed",{detail:{fromMonth:this.fromMonth,toMonth:this.toMonth}})),this.updateFilteredMonths()}updateFilteredMonths(){const t=this.months.indexOf(this.fromMonth),e=t+2;this.filteredMonths=this.months.slice(t,Math.min(e+1,this.months.length)),this.filteredMonths.indexOf(this.toMonth)===-1&&(this.toMonth=this.filteredMonths[this.filteredMonths.length-1])}updated(t){if(super.updated(t),t.has("data")&&this.data.length>0){const e=this.data[0].date.split("-")[0];this.months=this.generateMonths(e),this.fromMonth=this.months[0],this.toMonth=this.months[Math.min(2,this.months.length-1)],this.updateFilteredMonths()}(t.has("fromMonth")||t.has("toMonth"))&&this.handleMonthChange()}render(){return o`
      <div class="content">
        <div class="month-container">
          <label>
            <div class="select">
              <select .value=${this.fromMonth} @change=${t=>{this.fromMonth=t.target.value,this.handleMonthChange()}}>
                ${this.months.map((t,e)=>o`<option value=${t}>${this.monthNames[e]}</option>`)}
              </select>
            </div>
          </label>
          <label>
            -
          </label>
          <label>
            <div class="select-container">
              <div class="select is-rounded is-normal">
                <select .value=${this.toMonth} @change=${t=>{this.toMonth=t.target.value,this.handleMonthChange()}}>
                  ${this.filteredMonths.map((t,e)=>{const n=this.months.indexOf(t);return o`<option value=${t}>${this.monthNames[n]}</option>`})}
                </select>
              </div>
            </div>
          </label>
          <label>
            <adaptive-ui-icon icon="MdCalendarToday"></adaptive-ui-icon>
          </label>
        </div>
      </div>
    `}}customElements.define("month-range-picker",d);
