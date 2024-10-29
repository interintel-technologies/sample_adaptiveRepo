import{S as m,i as p,r as h,g as f,k as o,a as c,j as l}from"./index-C2PWchud.js";import{u as g}from"./utils-mixin-D5aAiqNi.js";import{I as v}from"./InputMixin-CGm-oGk-.js";import{w as y}from"./datasource-mixin-DMQBE4lo.js";const u=class extends g(m){constructor(){super(),this.selected=[]}static get is(){return"tag-input"}static get properties(){return{title:{type:String,value:""},selected:{type:Array}}}dscDataName(){return this.e.defaultValue}getName(){return this.e.formName}valid(s){return!0}invalid(s){}getValue(){return this.selected?this.selected.join(","):""}validate(){return(this.e.required||this.required)&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}updated(s){if(s.has("e")||s.has("cols")){var t=this;if(t.title=u.toTitleCase(this.e.name),this.required=this.e.required||this.e.min&&this.e.min>0,this.e.kind){const e=this.e.kind.split(",");this.selected=e.filter(function(i){return!isNaN(parseFloat(i))&&isFinite(i)})}}}},b=p`
.card{
    box-shadow:none !important;
}
.card-header{
    cursor:pointer !important;   
    min-height:40px;
    height:auto !important;
    box-shadow:none !important;
}
.card-header-title{
    min-height:40px;
    height:auto;
    width:100%;
    padding:0 0 0 1rem !important;
}
.card-header-title.has-values{
    display:flex;
    min-height:40px !important;
    flex:1;

}
.card-header-title.has-values .lblActive{
    top: -2.6rem;
}
.searchBar{
    list-style:none !important;
    margin-left:0 !important;
    margin-top:0 !important;
    margin-bottom:0.5rem !important;
    padding-left:0.5rem !important;
}

.optionsList{
    list-style:none !important;
    margin-left:0 !important;
    margin-top:0 !important;
    padding-left:0.5rem !important;
}

.card-content{
    border-top:1px solid var(--primary);
    position: absolute;
    width: 99%;
    z-index:10;
    box-sizing: border-box;
    background-color:var(--paper);
    padding:0.35rem 0.35rem 0.35rem 0 !important;
    transform-origin: center top;
    animation-name: openDown;
    animation-duration: .25s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
}

.label-name{
    cursor:pointer;
    line-height:20px;
}

.content-name{
    padding-top:0;
    padding-bottom:0;
}

.fa-plus{
    transform: rotate(0deg);
    transition: all 0.5s ease;
}
.mainBtn{
    background-color:var(--md-sys-color-surfaceContainerLow) !important;
}
.fa-plus.rotate{
    transform: rotate(45deg);
}

.is-hidden{
    /* display:none;   */
    animation-name: closeUp;
    animation-duration: .25s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;  
}

.btnDiv{
    justify-content:end;
}

.ssBtn{
    background-color:var(--primary);
    margin: 3px 5px 3px 0;
    animation-name: scaleIn;
    animation-duration: .2s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    border-radius:var(--CornerSmall) !important;
 
}
.ssBtn:hover{
    color:"white"!important;
}

.deleteIcon{
    margin: 15px 0 0 15px;
}

.ssLabel{
    justify-content:start;
}

.ss-option{
    padding-left:0.35rem;
    font-family: var(--family-sans-serif), sans-serif !important;
    border-radius:var(--CornerSmall)
}

::placeholder{
    font-family: var(--family-sans-serif), sans-serif !important;
}
.ss-option:hover{
    cursor:pointer;
}

.ss-option-selected{
    background-color:var(--primary);
    border-radius:var(--CornerSmall);
    color:white;
}

.ss-values{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 100%;
    width: calc(100% - 30px);
    padding:2px 10px 2px 5px;
    position:relative;
    height:auto;
}

.lblActive{
    width: 100%;
    top: -3.7rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--grey-darker);
    position: relative;
    left: -75px;
    padding-left:14px;
    margin-bottom: -2.5rem;
}


@keyframes scaleIn {
0% {
  transform: scale(0);
  opacity: 0; }
100% {
  transform: scale(1);
  opacity: 1; } 
}

@keyframes openDown {
0% {
  transform: scaleY(0);
  opacity: 0; }
100% {
  transform: scaleY(1); 
  opacity: 1; } 
}

@keyframes closeUp {
0% {
    transform: scaleY(1); 
    opacity: 1; }
  
100% {
    transform: scaleY(0);
    opacity: 0; }
}

@media(min-width:768px){
    .card{
        margin-top:2rem !important;
    }
}
@media(max-width:768px){
    #content{
        margin-top:1.5rem;
    }
}
`;class d extends v(u){static get styles(){return[h(f),b,p`
                :host{
                    display:block;
                }
            `]}static get properties(){return{summaryTabs:Array,cols:{type:Array},rows:{type:Array},e:{type:Object}}}updated(t){if(t.has("cols")||t.has("rows")||t.has("e")){const e=[...this.rows.map(i=>Object.fromEntries(i.map((a,n)=>[this.cols[n].label,a])))];this.allOptions=e,this.rows=this.rows}}get type(){return"tag"}static get properties(){return{isVisible:Boolean,options:Array,allOptions:Array,searchArrays:Array}}constructor(){super(),this.isVisible=!0,this.selected=[],this.allOptions=[],this.searchArrays=[],this.rows=[],this.cols=[],this.e=null}openContent(){const t=this.shadowRoot.querySelector("#optionsBox"),e=this.shadowRoot.querySelector(".expandIcon adaptive-ui-icon");t.classList.toggle("is-hidden"),e.getAttribute("icon")=="icons:add"?e.setAttribute("icon","icons:close"):e.setAttribute("icon","icons:add")}selectOptions(){const t=[];for(var e=0;e<this.rows.length;e++){const i=this.rows[e],a={};a.value=i[0],a.label=i[1],a.selected=this.selected.includes(a.value),t.push(a)}return t}onOptionClick(t){const e=t.currentTarget.dataset.value;this.selected=Array.from(new Set([...this.selected,e])),this.shadowRoot.querySelector(".card-header-title").classList.add("has-values")}onDeselectValueClick(t){t.stopPropagation();const e=t.currentTarget.dataset.value;var i=this.selected.filter(n=>n!=e);this.selected=i;const a=this.shadowRoot.querySelector(".card-header-title");i.length==0&&a.classList.remove("has-values")}getOption(t){const e=this.rows.find(function(i){return i[0]==t});if(e)return{label:e[1],value:e[0]}}getSelections(){return this.selected.map(e=>this.getOption(e))}onSearchKeyUp(t){const e=t.target.value,i=this.allOptions.filter(n=>n.name.toLowerCase().indexOf(e)>-1);this.searchArrays=i;const a=this.shadowRoot.querySelectorAll(".ss-option");for(let n=0;n<a.length;n++){const r=a[n];r.innerHTML.toLowerCase().indexOf(e)>-1?r.style.display="":r.style.display="none"}}getValue(){return this.selected.join(",")}static get is(){return"tag-input"}render(){return o`
            <div class="content" id="content">
                <div class="card">
                    <header class="card-header" @click=${()=>this.openContent()}>
                        <button class="card-header-icon mainBtn" aria-label="more options">
                            <span class="icon is-small expandIcon"><adaptive-ui-icon icon="icons:add"></adaptive-ui-icon></span>
                        </button>
                        <div class="card-header-title">
                            <div class="ss-values">
                                <label for="name" class="label-name lblActive"><span id="label" class="content-name">Select ${this.e.name}</span></label>
                                ${this.getSelections(this.selected).map(t=>o`
                                <button class="button is-small ssBtn">
                                    <span class="ssLabel">${t.label}</span>
                                    <span class="icon deleteIcon" data-value="${t.value}" @click=${this.onDeselectValueClick}>
                                        <adaptive-ui-icon icon="icons:delete" dataColor="#fff" style="position:relative;top:-7px" class="fas fa-x"></adaptive-ui-icon>
                                    </span>
                                </button>
                                `)}        
                            </div>
                        </div>   
                    </header>
           
                    <div class="card-content ${this.isVisible?"is-hidden":""}" id="optionsBox">
                        <div class="content">
                            <ul class="searchBar">
                                <li class="p-0">
                                        <div class="field">
                                            <div class="control">
                                                <input class="input" type="search" placeholder="Enter Search" @keyup=${this.onSearchKeyUp}>    
                                            </div>    
                                        </div>
                                </li>
                            </ul>
                            <ul class="optionsList">
                                ${this.selectOptions(this.rows).map(t=>o`
                                    <li class="py-1 ss-option ${t.selected?"ss-option-selected":""}" data-value=${t.value} @click=${this.onOptionClick}>${t.label}</li>
                                `)}      
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(d.is,d);const x=({element:s,data:t,rows:e,cols:i})=>{const a=c.useRef(null);return console.log("rows is ",e),c.useEffect(()=>{a.current&&s&&(a.current.e=s,a.current.data=t,a.current.rows=e,a.current.cols=i)},[s,t,e,i]),l.jsx("div",{children:s&&t&&e?l.jsx("tag-input",{id:"tag-input",ref:a}):l.jsx("p",{children:"Loading data..."})})},C=y(x);export{C as default};
