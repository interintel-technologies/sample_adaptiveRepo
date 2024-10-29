import{i as l,h as d,r as p,g as h,k as e,a as o,j as c}from"./index-C2PWchud.js";import{icons as v}from"./communication-CRhHM5f1.js";import{icons as r}from"./av-B0llvuQE.js";import{icons as f}from"./editor-73hbyQuS.js";import{icons as m}from"./icons-gOvW6_60.js";import{icons as g}from"./hardware-CR8W4J_W.js";import{icons as u}from"./device-CjP4A2Wz.js";import{icons as b}from"./image-D4ZQYTVX.js";import{icons as y}from"./maps-BJI2YmhK.js";import{icons as $}from"./notification-Bsv8OtDa.js";import{icons as k}from"./places-D4gAdb0a.js";import{icons as x}from"./products-7s6xLlkt.js";import{icons as S}from"./social-DbkzpWtS.js";import"./lit-html-dRijB2IX.js";const w=l`
.active{
    display: block!important;
}
.link-active{
    background-color: #b5b5b5;
    color: #292b33!important;
}
.icon{
    width: 3em!important;
    height: 3em!important;
}
.icon-tabs{
    display: none;
}
.bd-docs-nav {
    background-color: #fafafa;
    width: 11.25rem;
    z-index: 40;
}
.bd-cartegories {
    -webkit-overflow-scrolling: touch;
    --height: 1.25;
    max-height: 100vh;
    overflow-y: auto;
    margin-top: 20px;
    position: sticky;
    top: 0;
}
.bd-category-group {
    color: #b5b5b5;
    font-size: .625em;
    font-weight: 600;
    letter-spacing: .2em;
    margin-bottom: calc(var(--docs-side-padding)/ 2);
    margin-top: var(--docs-side-padding);
    text-transform: uppercase;
}
.bd-category-list {
    padding: 0.25em 0.75em 0.75em;
}
.content ul {
    list-style: outside disc;
    margin-left: 0em!important;
    margin-top: 1em;
}
.bd-category-list li {
    align-items: flex-start;
    display: flex;
    font-size: .875em;
    margin-left: 0!important;
}
.content > .icon-cont{
    color: var(--grey-darker);
}
.bd-category-list li a {
    width: 100%;
    align-items: center;
    border-radius: 0.375em;
    color: var(--grey-darker);
    cursor: pointer;
    display: flex;
    line-height: var(--height);
    padding: 0.375em 0.75em;
    transition-duration: 86ms;
    transition-property: background-color,color;
}
.bd-category-list li:hover{
    background-color: #292b33;
    border-radius: 4px;
    color: var(--grey-darker);
}
.bd-category-list li:hover > .bg-cartegory-list li a{
    color: #fff;
}
`;class n extends d{constructor(){super(),this.searchValue="",this.filteredIcons=[],this.isSearching=!1,this.cartegories=[{id:"av",label:"av",active:!0,content:r},{id:"communication",label:"communication",active:!1,content:v},{id:"editor",label:"editor",active:!1,content:f},{id:"icons",label:"icons",active:!1,content:m},{id:"hardware",label:"hardware",active:!1,content:g},{id:"device",label:"device",active:!1,content:u},{id:"image",label:"image",active:!1,content:b},{id:"maps",label:"maps",active:!1,content:y},{id:"notification",label:"notification",active:!1,content:$},{id:"places",label:"places",active:!1,content:k},{id:"products",label:"products",active:!1,content:x},{id:"social",label:"social",active:!1,content:S}],this.currentTab="av",this.defaultIcons=r}static get styles(){return[p(h),w,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{searchValue:String,filteredIcons:Array,isSearching:Boolean,cartegories:Array,defaultIcons:Object,currentTab:String}}static get is(){return"icons-display"}handleSearch(){if(!this.searchValue.trim())return;this.isSearching=!0;const a=new RegExp(`^${this.searchValue}`,"i");this.filteredIcons=Object.entries(this.defaultIcons).filter(([i,t])=>i.match(a)).map(([i,t])=>({name:i,icon:t}))}cartegoryClick(a){let i=a.currentTarget.getAttribute("data-tab");this.cartegories=this.cartegories.map(t=>t.id===i?{...t,active:!0}:{...t,active:!1}),this.isSearching=!1,this.currentTab=i,this.defaultIcons={...this.cartegories.find(t=>t.id==i).content}}handleCopy(a){navigator.clipboard.writeText(`<adaptive-ui-icon icon="${this.currentTab}:${a}"></adaptive-ui-icon>`).then(()=>{console.log("icon html copied to clipboard")},()=>console.log("failed to copy HTML"))}render(){return e`
            <div class="content">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-header-title">Icon search</h4>
                    </div>
                    <div class="container">
                        <div class="columns" style="margin: 0">
                            <div class="column is-one-fifth">
                                <nav id="docsNav" class="bd-categories-filter">
                                    <nav id="cartegories" class="bd-cartegories">
                                    <div id="search" class="control has-icons-left has-icons-right mobile-search">
                                        <span class="icon is-small is-left">
                                            <i class="fa-solid fa-arrow-left"></i>
                                        </span>
                                        <input class="input" type="text" placeholder="Search icons" @input=${a=>this.searchValue=a.target.value} @keyup=${this.handleSearch}>
                                        <span class="icon is-small is-right">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </span>
                                    </div>
                                    <!-- <p class="bd-cartegroy-group">Cartegories</p> -->
                                    <div class="bd-category">
                                        <ul class="bd-category-list">
                                            ${this.cartegories.map(a=>e`
                                            <li>
                                                <a href="/" data-name="Start" @click=${i=>this.cartegoryClick(i)} data-tab=${a.id} class=${a.active?"active link-active":""}>
                                                    <span class="bd-name">${a.label}</span>                                                
                                                </a>
                                            </li>
                                            `)}
                                        </ul>
                                    </div>
                                    </nav>
                                </nav>
                            </div>
                                <div class="container pt-6 pb-6">
                                    ${this.cartegories.map(a=>e`
                                        <div id=${a.id} class='${a.active?"active":""} icon-tabs'>
                                            <div class="columns is-multiline is-desktop">
                                                ${this.isSearching?this.filteredIcons.map(({name:i,icon:t})=>e`
                                                    <div class="column is-one-fifth">
                                                        <a href="#" @click=${()=>this.handleCopy(i)}>
                                                            <div class="card pt-5 has-text-centered">
                                                                <div class="card-image">
                                                                    <span class="icon has-text-link">
                                                                        <adaptive-ui-icon icon=${`${this.currentTab}:${i}`} title=${i} @click=${()=>this.handleCopy(i)}></adaptive-ui-icon>
                                                                    </span>
                                                                </div>
                                                                <div class="card-content">
                                                                    <div class="content">
                                                                        <p class="icon-cont">${i}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    `):Object.entries(this.defaultIcons).map(([i,t])=>e`
                                                    <div class="column is-one-fifth">
                                                        <a href="#" @click=${()=>this.handleCopy(i)}>
                                                            <div class="card pt-5 has-text-centered">
                                                                <div class="card-image">
                                                                    <span class="icon has-text-link">
                                                                        <adaptive-ui-icon icon=${`${this.currentTab}:${i}`} title=${i} @click=${()=>this.handleCopy(i)}></adaptive-ui-icon>
                                                                    </span>
                                                                </div>
                                                                <div class="card-content">
                                                                    <div class="content">
                                                                        <p class="icon-cont">${i}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                `)}
                                            </div>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        </div>
                        <!-- <div class="head">
                        </div> -->
                    </div>
                </div>
            </div>
        `}}customElements.define(n.is,n);const M=({element:s})=>{const a=o.useRef(null);return o.useEffect(()=>{const i=a.current;i&&s&&(i.e=s)},[s]),c.jsx("div",{children:s?c.jsx("icons-display",{id:"icons-display",ref:a}):c.jsx("p",{children:"Loading data..."})})};export{M as default};
