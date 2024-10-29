import{i as a,S as l,r as c,g as p,k as e,a as r,j as o}from"./index-C2PWchud.js";import{u}from"./utils-mixin-D5aAiqNi.js";const v=a`
    .active-option{
        width:75%;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .active-option:active {
        transform: scale(1.05);
    }
    .dropdown {
        width: 25% !important;
    }
    .selected-option {
        width: 75% !important;
    }
    
    .button {
        background-color: var(--primary);
        color: white;
        border: none !important;
        border-radius:0 !important;
    }
    .button:hover {
        background-color: var(--link);
        color: white !important;
        border: none !important;
    }
    .dropdown-item,h4{
        cursor: pointer;
    }
    .dropdown-trigger{
        width:100%;
    }
    .options-btn {
        width:100% !important;
        filter: brightness(90%);
    }
`,d=class extends u(l){static get properties(){return{value:Array,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array}}}constructor(){super(),this.value=[]}firstUpdated(i){super.firstUpdated(i)}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(i){}valid(i){}init(i,t){super.init(i,t);const s=this;s.title=d.toTitleCase(i.name),this.required=i.min&&i.min>0,this.name=i.name}};let n=class extends d{static get styles(){return[c(p),v,a`
                :host {
                display: block;
                }
            `]}static get properties(){return{activeOption:"String",cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.activeOption=""}updated(t){super.updated(t),(t.has("cols")||t.has("rows")||t.has("e"))&&(this.activeOption=this.e.details.options[0],this.value=this.activeOption)}onActiveOptionBtnClickHandler(){}onDropDownClickHandler(){this.shadowRoot.querySelector(".dropdown").classList.add("is-active")}onDropDownItemClickHandler(t){this.shadowRoot.querySelector(".dropdown").classList.remove("is-active"),this.activeOption=t,this.value=t}static get is(){return"split-button"}renderDefault(){return e`
            <div class="content">
                <div class="hero-body is-flex">
                    <div class="button active-option" @click=${()=>this.onActiveOptionBtnClickHandler()} title="${this.activeOption}">
                        ${this.activeOption}
                    </div>
                    <div class="dropdown is-up" >
                        <div class="dropdown-trigger">
                            <button class="button options-btn" @click=${()=>this.onDropDownClickHandler()} aria-haspopup="true" aria-controls="dropdown-menu7">
                                <span class="icon is-small" >
                                    <fa-icon class="fas fa-angle-up" style="fill: white;" aria-hidden="true"></fa-icon>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu7" role="menu">
                            <div class="dropdown-content">
                            ${this.e.details.options.map(t=>e`
                                    <div class="dropdown-item" @click=${()=>this.onDropDownItemClickHandler(t)}>
                                        <h4>${t}</h4>
                                    </div>  
                                `)}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        `}};customElements.define(n.is,n);const b=({element:i})=>{const t=r.useRef(null);return r.useEffect(()=>{t.current&&i&&(t.current.e=i)},[i]),o.jsx("div",{children:i?o.jsx("split-button",{id:"split-button",ref:t}):o.jsx("p",{children:"Loading data..."})})};export{b as default};
