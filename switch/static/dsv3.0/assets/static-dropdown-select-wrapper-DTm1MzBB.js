import{S as u,i as c,r as g,g as b,k as a,a as d,j as n,a6 as x}from"./index-C2PWchud.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const m=class extends f(u){constructor(){super(),this.data=[],this.contentOpen=!1,this.selected=null}static get is(){return"static-dropdown-select"}static get properties(){return{icon:String,items:{type:Object},color:String,vid:Object,title:String,required:Boolean,dropdownValue:Object,data:Array,columnSize:{type:Array},contentOpen:Boolean,selected:String,sectionSize:String}}getName(){return this.e.formName}validate(){return this.e.required?new this.Validation(!!this.getValue(),""):new this.Validation(!0,"valid")}valid(e){}invalid(e){}firstUpdated(e){super.firstUpdated(e)}parseData(){const e=[];let t=!1,o=[];for(var r=0;r<this.items.length;r++){const i=this.items[r];if(typeof i=="object")e.push(i);else{if(!t){o=i,t=!0;continue}const l={};for(var s=0;s<o.length;s++)l[o[s]]=i[s];e.push(l)}(i.selected||this.e.kind&&i.id===this.e.kind)&&(this.dropdownValue=i.id,this.selected=i.name)}this.data=e}checkSectionSizeHalf(){return this.sectionSize==="12|12|12"||this.sectionSize==="12|24|24"?!0:this.sectionSize==="12|12|24"}},w=c`
#warning-text{
  display:none;
  padding: 0px;
}

select{
  padding: 13.5px 20px !important;
  border: 1px solid var(--md-sys-color-outlineVariant) !important;
  border-radius: var(--CornerSmall) !important;
  line-height: 1.5;
  font-family: var(--family-sans-serif);
  background:transparent;
  color:var(--primary-text) !important;
  width: 100%;
  font-size: 14px;
}



#input{
    width: 100%!important;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(183, 181, 181);
    border-image: initial;     
          
}

#input:focus{
  box-shadow:none!important;
}
#input:active{
  box-shadow:none!important;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #757575!important;
  right: 1.5em!important;
  
}

.is-danger {
  color: rgb(255, 56, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(255, 56, 96)!important;
}

.is-success{
  color: rgb(35, 209, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(35, 209, 96)!important;
}


////////////

.paddingTop {
  padding-top:14px!important;
}

.card-header{
  padding-left: 32px;
  height: 90px;
  padding-right: 32px;
  display: flex;
  align-items: flex-start;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
    
}
.l-title {
    position: relative;
    top: -13px;
  }
  .scroll-bar {
    max-height: 404px;
    overflow: auto;
  }

  .column-container{
    margin-top:30px!important;
  }

  .dropdown-container{
    margin: 0px;
    padding: 0px;
    position: relative;
  }
  .ss-dropdown-header, .ss-dropdown-collapsable {
    
    padding: 9px 20px;
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
    top: 0;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
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

  
  .ss-option:not(.ss-disabled).ss-option-selected{
    background-color:var(--link);
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


`;class p extends m{static get properties(){return{e:Object,items:Object}}static get styles(){return[g(b),w,c`
        :host {
          display: block;
        }
        
        .is-danger {
          border-color: red;
        }

        .is-success {
          border-color: green;
        }

        #warning-text {
          color: red;
          font-size: 12px;
          display: none;
        }
      `]}updated(t){t.has("e")&&(this.parseData(),this.getSelected())}getSelected(){const t=this.shadowRoot.querySelector("select");t&&(this.dropdownValue=t.value)}optionSelected(t){t.preventDefault();const o=t.target.value;this.dropdownValue=o,this.operateDp()}operateDp(){this.contentOpen=!this.contentOpen}getValue(){return this.dropdownValue}valid(){const t=this.shadowRoot.querySelector("select"),o=this.shadowRoot.querySelector("#warning-text");t.classList.remove("is-danger"),t.classList.add("is-success"),o.style.display="none"}invalid(){const t=this.shadowRoot.querySelector("select"),o=this.shadowRoot.querySelector("#warning-text");t.classList.remove("is-success"),t.classList.add("is-danger"),o.style.display="block"}static get is(){return"static-dropdown-select"}render(){return a`
      <div class="content">
        <div class="main-container">
          <div class="dropdown-container" id="dropdownSelect">
            <p for="dropdown">${this.e.name}</p>
            <select id="dropdown" @change="${this.optionSelected}">
              <option value="" disabled selected>Select an option</option>
              ${this.data&&this.data.length===0?a`<option disabled>No values present. We are working on it.</option>`:a`
                    ${this.data.map(t=>a`<option value="${t.id}" ?selected="${t.selected}">${t.name}</option>`)}
                  `}
            </select>
            <p id="warning-text">${this.e.name} required</p>
          </div>
        </div>
      </div>
    `}}customElements.define(p.is,p);const y=({element:e,rows:t,cols:o})=>{const r=d.useRef(null);d.useEffect(()=>{r.current&&e&&(r.current.e=e,e.variableType==="STATIC DROPDOWN SELECT"&&(r.current.items=JSON.parse(e.defaultValue)),r.current.rows=t,r.current.cols=o,r.current.icon=e.icon,r.current.sectionSize=e.sectionSize)},[e,t,o]);const s=!!e;return n.jsx("div",{children:n.jsx(x,{in:s,timeout:500,children:n.jsx("div",{children:e?n.jsx("static-dropdown-select",{id:"static-dropdown-select",ref:r}):n.jsx("p",{children:"Loading data..."})})})})},z=h(y);export{z as default};