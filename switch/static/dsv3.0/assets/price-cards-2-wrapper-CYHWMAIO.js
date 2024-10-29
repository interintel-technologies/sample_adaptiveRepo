import{i as p,S as m,r as u,g as h,k as o,a as c,j as n}from"./index-C2PWchud.js";import{u as g}from"./utils-mixin-D5aAiqNi.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";const f=p`
    .columns {
    margin:0 !important;
}
.animate1{
    opacity:0;
    transform:translateY(40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);
}
.price-tab > h6, h5 {
    margin: 0 !important;
}
.card{
    flex-direction:column;
    padding:10px;
    align-items:center;
    display:flex;
    border: 2px solid var(--primary);
    border-radius: 6px;
    min-width: 100%;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
    justify-content: center;
}


.card:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    border-color:var(--link);
}


.check-icon {
    margin-right:20px;
    width:15px !important;
    height: 15px !important;
    fill : var(--primary);
}
.block{
    padding:0 20px;
    align-self:flex-start;
}
.price-content {
    padding:20px;
}

.title{
    font-size: 25px!important;
    padding-bottom: 8px!important;
}
.contents:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.group-summary {
    margin-bottom: 28px!important;
    margin-top: 28px!important;
}

.price {
    text-align: center;
    border-radius: 50%;
    background: transparent;
    transition: all 1s ease 0s;
}

.price p {
    font-size: 29px;
    font-weight: 500;
}
.prices-header {
    max-width: 80%;
    margin-bottom: 50px !important;
    margin: auto;
    cursor: pointer;
}
.price-tab {
    position: relative;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    justify-content: center;
    background-color: #E7E9EB;
    width:100%;
    margin: 0 !important;
}
.active {
    background-color: var(--primary) !important;
}
.subtitle {
    margin: 0 !important;
}
.active h5,.active h6 {
    color: white !important;
}
.active::after{
    content: '';
    display: block;
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid var(--primary) !important;
    position: absolute;
    bottom: -20px;
    transform: scaleX(50%);
}
.price-tab:hover {
    background-color: var(--link);
}
.description {
    margin-top: 16px;
    text-align: center;
}

.description p {
    margin-top: 16px;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 8px;
}

.card h5 {
    text-align: center;
    color: var(--primary) !important;
}
.card:hover > h5 {
    color: var(--link) !important;
}
.card > * {
    pointer-events: none;
}
ul {
    margin:10px 0 !important;

}
.button {
    padding: 5px 30px;
    background-color: var(--primary)!important;
    color: white !important;
}
.button:hover {
    color: white !important;
    background-color: var(--link)!important;
}
.item-index {
    display: flex;
    width:35px;
    height:35px;
    margin:16px;
    border-radius:50%;
    background-color:var(--link)!important;
    color: white;
    font-size:24px;
    justify-content: center;
    align-items: center;
}
.item-index:hover {
    background-color:var(--info)!important;
}
#warning-text {
        display:none;
    }

  @media screen and (max-width: 950px){
    .column{
        width: 100%;
        max-width: 100%;
        margin:0 0 .75rem 0;
    }

    .columns{
        display:flex!important;
        flex-direction:column!important;
    }
    
}
hr {
    height: 3px;
    width: 90%;
}
.selected {
    border-color: var(--link);
}

  @media screen and (max-width: 775px){
    .column {
    padding: 7.5px !important;
}
`,d=class extends g(m){static get properties(){return{value:String,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array}}}constructor(){super()}firstUpdated(a){super.firstUpdated(a)}getName(){return this.e.formName}dscDataName(){return this.e.defaultValue}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(a,t){super.init(a,t);const r=this;r.title=d.toTitleCase(a.name),this.required=a.min&&a.min>0,this.name=a.name}};class l extends d{static get styles(){return[u(h),f]}static get properties(){return{categories:Array,priceCards:Array,currentTab:Number,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.priceCards=[],this.categories=[],this.rows=[],this.cols=[]}updated(t){(t.has("e")||t.has("cols"))&&(this.priceCards=[...this.rows.map(r=>Object.fromEntries(r.map((e,i)=>[this.cols[i].label,e])))],this.createCategories(),this.currentTab=this.categories[0])}updated(t){t.forEach((r,e)=>{e==="currentTab"&&(this.shadowRoot.querySelectorAll(".card").forEach(i=>i.classList.remove("selected")),this.value&&this.priceCards.findIndex(s=>s.id===this.value)>=0&&this.selectCard(this.value))})}createCategories(){const t=[];this.priceCards.forEach(r=>{const e=r.category;t.includes(e)||(t.push(e),this.categories=[...this.categories,e])})}onCardHover(t,r){this.shadowRoot.querySelectorAll(`.card-${t}-icon`).forEach(e=>{const i=getComputedStyle(document.documentElement).getPropertyValue("--app-default-color"),s=getComputedStyle(document.documentElement).getPropertyValue("--app-secondary-color");e.setAttribute("style",`fill: ${r?s:i};`)})}selectCard(t){this.shadowRoot.querySelector("#card"+t).classList.add("selected")}onCardClickHandler(t){this.shadowRoot.querySelectorAll(".card").forEach(r=>r.classList.remove("selected")),this.value===t?this.value=void 0:(this.value=t,this.selectCard(t))}formatPrice(t){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(t)}valid(t){const r=this.shadowRoot.querySelector("#warning-text");r.style.display="none"}invalid(t){const r=this.shadowRoot.querySelector("#warning-text");r.style.display="block"}static get is(){return"price-cards-2"}render(){return o`
            <div class="content">
                <div class="column content">
                    ${this.priceCards.length>1?o`
                            <div class="prices-header is-flex">
                                ${this.categories.map((t,r)=>o`
                                    <li class="price-tab is-flex ${t===this.currentTab?"active":""}" @click=${()=>this.currentTab=t}>
                                        <h5>${t}</h5>
                                    </li>
                                `)}
                            </div>
                        `:o``}
                    <div class="columns">
                        ${this.priceCards.filter(t=>t.category===this.currentTab).map((t,r)=>o`
                            <div class="column">
                                <div id=${"card"+t.id} class="card" @mouseover=${()=>this.onCardHover(r,!0)} 
                                    @mouseleave=${()=>this.onCardHover(r,!1)} @click=${()=>this.onCardClickHandler(t.id)}
                                >
                                    <div class="card-content">
                                        <h5>${t.label}</h5>
                                        <ul>
                                            ${t.points.map(e=>o`
                                                    <li class="is-flex is-align-items-center">
                                                        <span class="icon">
                                                            <fa-icon class="far fa-check-circle check-icon card-${r}-icon"></fa-icon>
                                                        </span>
                                                        <p>${e}</p>
                                                    </li>
                                                `)}
                                        </ul>
                                        <h5>${this.formatPrice(t.price)}</h5>
                                    </div>    
                                </div>
                            </div>
                        `)}
                    </div>
                    <p id="warning-text">${this.e.name} required</p>
                </div>
            </div>
        `}}customElements.define(l.is,l);const v=a=>{const{element:t,rows:r,cols:e}=a,i=c.useRef(null);return c.useEffect(()=>{i.current&&t&&(i.current.e=t,i.current.rows=r,i.current.cols=e)},[t,r,e]),n.jsx("div",{children:t?n.jsx("price-cards-2",{id:"price-cards-2",ref:i}):n.jsx("p",{children:"Loading data..."})})},k=x(v);export{k as default};
