import {css, html, unsafeCSS} from 'lit-element';
import { StaffInfoStyles } from './staff-info-css';
import { SectionPElementDsc } from '../../base/elements/section-pelement-dsc';
import globalStyles from '../../App.css?raw';

class StaffInfo extends SectionPElementDsc  {
    static get properties() {
        return {
            staffDetails:Array
        }
    }

    constructor() {
        super();
        this.staffDetails=[];
    }

    static get styles() {
        return [unsafeCSS(globalStyles),StaffInfoStyles];
    }

    firstUpdated(){
        this.loader.then(()=>{
            this.staffDetails=[...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))][0];
        })
        this.dateFormat();
        this.hasShiftStarted();
    }

    formatToKenyaShillings(value) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(value);
    }

    dateFormatter(ShiftStart,ShiftEnd){
        const options = { weekday: 'long', hour: '2-digit', minute:'2-digit' };
        const ShiftStartRaw=new Date(ShiftStart);
        const ShiftStartDate=ShiftStartRaw.toLocaleTimeString("en-US", options);
    
        const ShiftEndRaw=new Date(ShiftEnd);
        const ShiftEndDate=ShiftEndRaw.toLocaleTimeString("en-US", options);
       
        const startArray = ShiftStartDate.split(" ");
        const shiftStartDay=startArray[0];
        const shiftStartTime=startArray[1]+' '+startArray[2];
        
        const endArray = ShiftEndDate.split(" ");
        const shiftEndDay=endArray[0];
        const shiftEndTime=endArray[1]+' '+endArray[2];

        return shiftStartDay+' - '+shiftEndDay+'  :  '+shiftStartTime+' - '+shiftEndTime;    
    }

    hasShiftStarted(ShiftStart,ShiftEnd){
        const date=new Date();
        const ShiftStartRaw=new Date(ShiftStart); 
        const ShiftEndRaw=new Date(ShiftEnd);
    
        const shiftStatus=this.qs("#shiftStatus");
       
        if(date>ShiftStartRaw){
            return "Shift has Started";
        }else{
            if(shiftStatus!=null){
                shiftStatus.style.color="red";
            }
            return 'Shift not started yet';
        }
    }

    static get is(){
        return 'staff-info';
    }

    render() {
        return html`
            <div class="content">
                <div class="avtr has-text-centered">
                    <div class="imgDiv">
                        <figure class="image is-128x128">
                        <img class="is-rounded" src="https://i.postimg.cc/CMq71zb6/icons8-circled-user-male-skin-type-5-100.png">
                        </figure>
                    </div>
                    <div class="name">
                        <h2>${this.rows[0][1]}</h2>
                        <h4>Role:<span class="ml-4 is-capitalized">${this.rows[0][2]}</span></h4>
                    </div>
                </div>
                <div class="columns todayDetails is-mobile is-multiline">
                    <div class="column is-quarter-desktop is-full-mobile px-5 pt-5 pb-2">
                        <h5>orders today</h5>
                        <h4>${this.rows[0][3]}</h4>
                    </div>
                    <div class="column is-quarter-desktop is-full-mobile px-5 pt-5 pb-2">
                        <h5>cashed in today</h5>
                        <h4>${this.formatToKenyaShillings(this.rows[0][4])}</h4>
                    </div>
                    <div class="column is-quarter-desktop is-full-mobile px-5 pt-5 pb-2">
                        <h5>returned orders today</h5>
                        <h4>${this.rows[0][5]}</h4>
                    </div>    
                </div>
                <div class="staffDiv">
                    <ul class="buttonsList">
                        ${
                            Object.entries(this.staffDetails).slice(7).map(([key, value]) => html`
                                <a href="${value}"><li><h5>${key}</h5></li></a>
                            `)
                        }     
                    </ul>
                    <div class="has-text-centered">
                        <h6 class="shiftStatus" id="shiftStatus">${this.hasShiftStarted(this.rows[0][6],this.rows[0][7])}</h6>
                        <h4 class="shiftSpan">your shift:<span class="ml-3 has-text-weight-light">${this.dateFormatter(this.rows[0][6],this.rows[0][7])}</span></h4>
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define(StaffInfo.is, StaffInfo);