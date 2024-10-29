import{i as n,h as c,k as r,a as l,j as a}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";import"./lit-html-dRijB2IX.js";import"./slide-Bzn9_qgU.js";const p=n`
    .hero-body {
        position: relative;
        padding: 1.6rem 4rem 1.6rem 4rem !important;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-template-rows: 1fr 1fr;
        column-gap: 20px;
        row-gap: 25px;
        height: 100%;
    }
    .grid-item {
        cursor: pointer;
    }
    .grid-item:hover {
        cursor: pointer;
    }
    .nav {
        position: absolute;
        top: 50%;
        border:1px solid black;
        background-color: white;
        transition: background-color 0.7s ease;
        border-radius:50%;
        cursor: pointer;
    }
    .nav:hover {
        background-color: var(--app-secondary-color);
    }
    #prev {
        left: 20px;
    }
    #next {
        right: 20px;
    }
    adaptive-ui-icon {
        width: 28px;
        height: 28px;
        fill: black;
    }
    .dots-container{
        position: absolute;
        bottom: 10px;
        width: fit-content;
        transform: translateX(50%);
        right: 50%;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 8px;
        height: 8px;
        margin: 0 5px;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.7s ease;
        background-color: #bbb;
    }
    .active, .dot:hover {
        background-color: var(--link);
    }
    img {
        height: 210px;
        width: 100%;
        object-fit: contain;
    }
    @media screen and (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            overflow-y: auto;
        }
    }
    @media screen and (max-width: 400px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }
    @media screen and (max-width: 300px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
    }
`;class g extends c{static get styles(){return[p,n`
                :host {
                    display: block;
                }
            `]}static get properties(){return{slides:{type:Array},slideIndex:{type:Number},categories:{type:Array},firstLoad:{type:Boolean},e:{type:Object},cols:{type:Array},rows:{type:Array}}}constructor(){super(),this.slides=[],this.slideIndex=0,this.categories=[],this.rows=[],this.cols=[]}firstUpdated(){this.firstLoad=!0,console.log("Initial cols: ",this.cols),console.log("Initial rows: ",this.rows),this.cols.length&&this.rows.length&&this.updateCategoriesAndSlides()}updated(i){(i.has("cols")||i.has("rows"))&&this.cols.length&&this.rows.length&&this.updateCategoriesAndSlides()}updateCategoriesAndSlides(){this.categories=[...this.rows.map(i=>Object.fromEntries(i.map((e,s)=>[this.cols[s].label,e])))],this.slides=[...this.renderSlides()]}renderSlides(){let i=[],e=[];return this.categories.forEach((s,t,o)=>{i.push(s),(t+1)%6===0?(e=[...e,i],i=[]):t===o.length-1&&(e=[...e,i])}),e.map(s=>r`
            <div class="grid" style="margin: 0;">
                ${s.map(t=>r`
                        <div class="grid-item" title="${t.name}">
                            <img src="${t.image}" alt="${t.name}Image"/>
                            <h4 style="text-align:center;">${t.name}</h4>
                        </div>
                    `)}
            </div>
        `)}showSlide(i){this.firstLoad=!1,i>this.slideIndex,i<this.slideIndex,i>this.slides.length-1?this.slideIndex=0:i<0?this.slideIndex=this.slides.length-1:this.slideIndex=i;const e=this.shadowRoot.querySelectorAll(".dot"),s=this.shadowRoot.querySelector("#dot"+this.slideIndex);s&&(e.forEach(t=>t.classList.remove("active")),s.classList.add("active"))}render(){return r`
            <div class="content">
                <div class="hero-body">
                    ${this.slides.length>0?r`
                            <div class="slides">
                                ${this.slides[this.slideIndex]}
                            </div>
                        `:r``}
                    ${this.slides.length>1?r`
                            <div id="next" class="nav" @click=${()=>this.showSlide(this.slideIndex+1)}>
                                <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
                            </div>
                            <div id="prev" class="nav" @click=${()=>this.showSlide(this.slideIndex-1)}>
                                <adaptive-ui-icon icon="chevron-left"></adaptive-ui-icon>
                            </div>
                            <div class="dots-container is-flex">
                                ${this.slides.map((i,e)=>r`
                                    <span id="dot${e}" class="dot ${e===0?"active":""}" @click="${()=>this.showSlide(e)}"></span>
                                `)} 
                            </div>
                        `:r``}
                </div>
            </div>
        `}}customElements.define("categories-grid",g);const m=({element:d,data:i,rows:e,cols:s})=>{const t=l.useRef(null);return l.useEffect(()=>{if(t.current){const o=t.current;s&&e&&(o.cols=s,o.rows=e)}},[s,e]),l.useEffect(()=>{if(t.current&&d){const o=t.current;o.e=d}},[d]),a.jsx(a.Fragment,{children:s&&e?a.jsx("categories-grid",{ref:t}):a.jsx(a.Fragment,{children:"loading"})})},b=h(m);export{b as default};
