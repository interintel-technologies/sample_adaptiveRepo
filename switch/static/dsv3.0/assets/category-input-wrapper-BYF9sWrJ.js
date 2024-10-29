import{i as c,S as d,k as l,a as n,j as s}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";import"./select-element-GuC7mP6J.js";import{u as g}from"./utils-mixin-D5aAiqNi.js";import"./InputMixin-CGm-oGk-.js";const h=c`
    .content{
        position:relative !important;
        width:100% !important;
    }
    ul{
        background-color: var(--body-background-color) !important;
        border-radius: 4px !important;
        color: var(--grey-darker) !important;
        list-style:none !important;
        margin-top:0 !important;
        margin-left:0 !important;
        box-shadow: inset 0 .0625em .125em var(--scheme-invert--5--rgba) !important;
        position:absolute !important;
        z-index:1 !important;
        width:100% !important;
        
        
    }
    
    .selected{
        background-color: var(--input-border-color) !important;
    }

    li{
        cursor:pointer !important;
        background-color: var(--body-background-color) !important;
        border-color: var(--input-border-color) !important;  
        border: 1.5px solid var(--input-border-color) !important;      
        margin-top:0 !important;
        padding-top:.25rem;
        padding-bottom:.25rem;
        padding-left:.5rem;
    }
    li:first-child{
        border-top-left-radius:4px !important;
        border-top-right-radius:4px !important;
        border: 1.5px solid var(--input-border-color) !important;
    }
    li:last-child{
        border-bottom-left-radius:4px !important;
        border-bottom-right-radius:4px !important;
        border: 1.5px solid var(--input-border-color) !important;
    }
    li:hover{  
        background-color: var(--input-border-color) !important;
    }
    .select select{
        font-family:var(--family-sans-serif) !important;
    }

`,y=class extends g(d){static get properties(){return{params:{type:Object,value:{}},type:String,pageType:{type:Object,value:{}},columnSize:{type:Array},columnOffset:{type:Array},value:Object}}constructor(){super(),this.value={}}getName(){return this.e.formName}getValue(){return this.value={category:this.selectedCategory,subCategory:this.selectedSubCategory},this.value}dscDataName(){return this.e.defaultValue}validate(){return this.getValue(),this.required&&!this.value.category&&!this.value.subCategory?new this.Validation(!1,this.e.name+" is Required"):new this.Validation(!0,"valid")}firstUpdated(r){super.firstUpdated(r)}init(r,t){super.init(r,t),this.required=this.e.required||r.min&&r.min>0,this.value=r.defaultValue||"",this.loader=this.loadData()}};class u extends y{static get properties(){return{categoryOptions:Array,subCategoryOptions:Array,selectedCategory:String,selectedSubCategory:String,e:{type:Object},cols:{type:Array},rows:{type:Array}}}constructor(){super(),this.categoryOptions=[],this.subCategoryOptions=[],this.selectedCategory="",this.selectedSubCategory="",this.rows=[],this.cols=[],this.e=null}static get styles(){return[h,c`
                :host {
                    display: block;
                }
            `]}updated(t){(t.has("cols")||t.has("rows")||t.has("e"))&&(this.rows.forEach(e=>{let a={};e.forEach((i,o)=>{o===0&&(a.value=i),o===1?a.label=i:o===2?a.sub_categories=i:i===!0&&(this.selectedCategory=e[0])}),this.categoryOptions=[...this.categoryOptions,a]}),this.selectedCategory&&this.createSubCategories(),this.categoryOptions.unshift({value:"",label:"--Choose a category--"}))}createSubCategories(){if(this.selectedCategory){const t=this.categoryOptions.filter(e=>e.value==this.selectedCategory)[0];console.log("category is ",t),this.subCategoryOptions=t.sub_categories.map(e=>{const a={label:e.name,value:e.defaultValue};return e.defaultValue&&(this.selectedSubCategory=e.name),a}),console.log("subCategoryOptions is ",this.subCategoryOptions),this.subCategoryOptions.unshift({value:"",label:"--Choose a sub category--"})}else this.subCategoryOptions=[]}onCategoryChangeHandler(t){console.log("event ",t),this.selectedCategory=t.detail.target.value,this.createSubCategories()}onSubCategoryChangeHandler(t){this.selectedSubCategory=t.detail.target.value}valid(t){this.shadowRoot.querySelectorAll("select-element").forEach(e=>{e.setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:"valid"}))})}invalid(t){this.value.category?this.value.subCategory||this.subCategoryOptions.length>0&&this.shadowRoot.querySelector("#subCategorySelect").setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Pick a valid sub category"})):this.shadowRoot.querySelector("#categorySelect").setAttribute("validation",JSON.stringify({isValid:!1,validationMessage:"Pick a valid category"}))}static get is(){return"category-input"}render(){return l`
            <select-element id="categorySelect"  .name=${this.e.name} .value=${this.selectedCategory} @on-change=${t=>this.onCategoryChangeHandler(t)} .options=${this.categoryOptions}></select-element>   
            ${this.subCategoryOptions.length>0?l`
                    <select-element  id="subCategorySelect" class="pt-4" .name=${"Sub Category"} .value=${this.selectedSubCategory} @on-change=${t=>this.onSubCategoryChangeHandler(t)} .options=${this.subCategoryOptions}></select-element> 
                `:""}
        `}}customElements.define(u.is,u);const m=({element:r,data:t,rows:e,cols:a})=>{const i=n.useRef(null);return n.useEffect(()=>{if(i.current){const o=i.current;a&&e&&(o.cols=a,o.rows=e)}},[a,e]),n.useEffect(()=>{if(i.current&&r){const o=i.current;o.e=r}},[r]),s.jsx(s.Fragment,{children:a&&e?s.jsx("category-input",{ref:i}):s.jsx(s.Fragment,{children:"loading"})})},O=p(m);export{O as default};
