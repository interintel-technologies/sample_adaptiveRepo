import{i as l,S as n,r as d,g as p,k as r,a,j as t}from"./index-C2PWchud.js";import{u}from"./utils-mixins-2-CV_UYnIr.js";const c=l`
.flexi-container {
    padding: 10px;
}

.horizontal .form-group{
    display: inline-block;
    margin-right: 5px;
}

.vertical .form-group{
    display: block;
    margin-left: 0!important;
}

.form-group {
    display: block;
    margin-bottom: 15px;
}

.form-group input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
}

.form-group label {
    position: relative;
    cursor: pointer;
}

.form-group input[type=radio] + label:before {
    content:'';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid var(--grey-darker);
    border-radius: 50px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
    top: -2px;
}
.form-group input[type=checkbox] + label:before {
    content:'';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid var(--grey-darker);
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 10px;
    top: -2px;
}
.form-group input:checked + label:before{
    border: 2px solid var(--link);
} 
.form-group input:checked + label{
    color: var(--link)
}

.form-group input[type=checkbox]:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid var(--link);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.form-group input[type=radio]:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 5px;
    width: 14px;
    height: 14px;
    border: solid var(--link);
    border-radius: 50px;
    background: var(--link);
}
`,s=class extends u(n){static get properties(){return{required:Boolean,title:String,icon:String,params:Object,sectionSize:String,loader:Function,value:Object}}constructor(){super(),this.value=void 0}getName(){return this.e.formName.split("=")[0]}getValue(){return this.value}validate(){return this.e.required&&!this.value||this.value===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(e){}invalid(e){}dscDataName(){return this.e.defaultValue}init(e,i){super.init(e,i),this.required=this.e.required||e.min&&e.min>0,this.title=s.toTitleCase(e.name),this.icon=e.icon,this.params=this.pl.paramsCopy(),this.sectionSize=e.sectionSize,this.loader=this.loadData()}};class o extends s{static get properties(){return{e:{type:Object}}}constructor(){super(),this.value="",this.e=null}static get styles(){return[d(p),c]}handleChange(i){this.value=i.target.value}static get is(){return"flexi-radio-buttons"}firstUpdated(){console.log("Component first updated with details:",this.e.details)}updated(i){i.has("e")&&console.log("Component updated with new details:",this.e.details)}render(){return this.e.details?r`
      <div class="flexi-container ${this.e&&this.e.details.orientation}">
        <form class="control">
          ${this.e&&this.e.details.options.map(i=>r`
            <div class="form-group ${this.e.details.type}">
              <input 
                type="${this.e.details.type}" 
                name="flexi-radio-buttons" 
                id="${i.value}" 
                value="${i.value}" 
                ?checked="${this.value===i.value}" 
                @change="${this.handleChange}">
              <label for="${i.value}">${i.label}</label>
            </div>
          `)}
        </form>
      </div>
    `:r`<p>Details not provided.</p>`}}customElements.define(o.is,o);const g=({element:e})=>{const i=a.useRef(null);return a.useEffect(()=>{i.current&&e&&(i.current.e=e)},[e]),t.jsx(t.Fragment,{children:e?t.jsx("flexi-radio-buttons",{id:"flexi-radio-buttons",ref:i}):t.jsx("p",{children:"Loading data..."})})};export{g as default};
