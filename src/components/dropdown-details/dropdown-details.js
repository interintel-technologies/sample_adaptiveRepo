import {LitElement,css,unsafeCSS,html} from 'lit-element';
import globalStyles from '../../App.css?raw';
import { DropDownDetailsStyles } from './dropdown-details-css';

class DropdownDetails extends LitElement {
    static get properties() {
        return {
            rows: Array ,
            e: Object ,
            cols: Array ,
            options:Array,
            amount:Number,
            isActive:Boolean
        }
    }

    constructor() {
        super();
        this.rows = [];
        this.cols = [];
        this.e = null;
        this.options=[];
        this.amount=0;
        this.isActive=false;
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DropDownDetailsStyles,
            
        ];
    }

    static get is(){
        return 'dropdown-details';
    }

    updated(changedProperties) {

        if (changedProperties.has('e') || changedProperties.has('cols')) {
            console.log("Updated properties:", this.cols, this.rows, this.e);
       
           this.options=this.e.details.options;
           const initialVal=this.options.filter(opt=>opt.name==='Total');
           this.amount=initialVal[0].amount;
           const selectElement = this.shadowRoot.querySelector('select');
           const switchElement = this.shadowRoot.querySelector('#switch');
           switchElement.addEventListener('click',(e)=>{this.switchButtonHandler(e,switchElement,selectElement)}
              
            );
        }
    }

    switchButtonHandler(e,element,select){
        
        element.classList.toggle('active');
        
        if(element.classList.contains('active')){
            this.isActive=true;
           
            const amountString=Array.from(String(this.amount));
            const hashArr=[];
            amountString.forEach(str=>{
                const hash=str.replace(str,'*');
                hashArr.push(hash);
            })
        
            const hashString=hashArr.join('');
            this.amount=hashString;
        }else{
            this.isActive=false;
            this.selectChangeHandler(e,select)
        }

        
    }

    selectChangeHandler(e,select){
        if(select){
            const filt=this.options.filter(opt=>opt.name===select.value);
            this.amount=filt[0].amount;
        }
        const filt=this.options.filter(opt=>opt.name===e.target.value);
        this.amount=filt[0].amount;
       
    }


    render() {
        return html`
            <div class="container">
               
                <div class="card">
                      
                    <div class="columns is-mobile p-1">
                        <div class="column p-0 is-half" id="selectCol">
                        <div class="select">
                            <select @change=${(e)=>this.selectChangeHandler(e)}>
                                ${this.options.map(opt=>html`
                                    <option>${opt.name}</option>
                                `)}
                                
                            </select>
                            </div>
                        </div>
                        <div class="column pl-3 is-half">
                           <div class="columns is-mobile">
                                <div class="column is-two-thirds" id="valueCol">
                                   <p>KES</p> 
                                   <span class="ml-3">${this.amount}</span>
                                </div>
                                <div class="column is-one-third pr-1">
                                <div class="switch" id="switch">
                                   
                                    <div class="circle" title="hide">
                                        ${this.isActive?
                                            html`
                                                <adaptive-ui-icon datacolor="var(--primary)" icon="MdVisibility"></adaptive-ui-icon>
                                            `:html`
                                            <adaptive-ui-icon datacolor="var(--primary)" icon="MdVisibilityOff"></adaptive-ui-icon>
                                        `}
                                    </div>
                                    <div class="circle" title="show">
                                    ${this.isActive?
                                            html`
                                                 <adaptive-ui-icon datacolor="var(--primary)" icon="MdVisibility"></adaptive-ui-icon>
                                            `:html`
                                           
                                        `}
                                    </div>      
                                </div>

                                </div>
                           </div>
                        </div>
                    </div>
                    
                </div>   
                <img src="https://i.postimg.cc/htPV08TL/Vector-140.png"/>
            </div>
        `;
    }

}

customElements.define(DropdownDetails.is, DropdownDetails);