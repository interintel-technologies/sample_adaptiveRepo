import{S as l,i as s,r as n,g as h,k as d,a as o,j as i}from"./index-C2PWchud.js";import{u}from"./utils-mixin-D5aAiqNi.js";const r=class extends u(l){static get is(){return"checkbox-input"}constructor(){super(),this.checked=!1,this.defaultDataActive=!1}static get properties(){return{checked:{type:Boolean},type:String,icon:String,initialData:{type:Object},title:String,maxlength:Number,required:Boolean,columnSize:String,defaultDataActive:Boolean,columnOffset:{type:Array},id:String}}getInput(){return this.shadowRoot.querySelector("input")}getName(){return this.e.formName}validate(){return new this.Validation(!0,"always valid")}invalid(e){}parseData(){this.defaultDataActive&&this.initialData!=null&&this.initialData!=null&&!(Object.keys(this.initialData).length===0&&this.initialData.constructor===Object)&&(this.id=this.initialData.id,this.checked=this.initialData.checked)}firstUpdated(e){super.firstUpdated(e),this.parseData()}init(e,t){super.init(e,t);var a=this;a.title=r.toTitleCase(e.name),a.name=e.name,e.defaultValue==="true"?this.checked=!0:e.defaultValue===""||e.defaultValue===null?this.defaultDataActive=!1:typeof JSON.parse(e.defaultValue)=="object"&&JSON.parse(e.defaultValue)!==null&&(this.defaultDataActive=!0,a.initialData=JSON.parse(e.defaultValue))}},f=s`
    .checkbox input[type="checkbox"] {
        opacity: 0;
    }
    .checkbox label {
        position: relative;
        display: inline-block;
        /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
        padding-left: 22px;
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
`;class c extends r{static get styles(){return[n(h),f,s`
				:host {
					display: block;
				}
			`]}static get properties(){return{rounded:Boolean,e:{type:Object}}}constructor(){super(),this.rounded=!1,this.e=null}firstUpdated(t){super.firstUpdated(t),this.rounded=this.e.details.rounded||!1,this.shadowRoot.querySelector("#checkbox_1").checked=this.checked}updated(t){t.has("e")&&this.e&&this.e.details.length>0&&(this.rounded=this.e.details.details.rounded||!1)}getInput(){return this.shadowRoot.querySelector("input")}getValue(){return this.id!=null&&this.id!=null?this.id:this.shadowRoot.querySelector("#checkbox_1").checked}valid(t){}render(){return d`
			<div class="content">
				<div class="checkbox">
					<input type="checkbox" name=${this.e.formName} id="checkbox_1">
					<label for="checkbox_1">${this.e.name}</label>
				</div>
			</div>
		`}}window.customElements.define(c.is,c);const x=({element:e})=>{const t=o.useRef(null);return o.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),i.jsx(i.Fragment,{children:e?i.jsx("checkbox-input",{id:"checkbox-input",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{x as default};
