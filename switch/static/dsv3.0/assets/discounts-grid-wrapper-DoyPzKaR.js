import{i as l,h,r as p,g as u,k as r,a,j as d}from"./index-C2PWchud.js";import"./lit-html-dRijB2IX.js";import"./slide-Bzn9_qgU.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const g=l`
    #discountsGrid {
        background-color: var(--md-sys-color-surfaceContainerLowest);
    }
    .hero-body {
        position: relative;
        padding: 1.6rem 4rem 1.6rem 4rem !important;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-template-rows: 1fr;
        column-gap: 20px;
        row-gap: 25px;
    }
    .grid-item {
        cursor: pointer;
    }
    .grid-item:hover > .content > img {
        cursor: pointer;
        border-color: var(--link);
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
        background-color: var(--link);
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
        padding: 10px;
        object-fit: contain;
        border: 1.5px solid var(--primary);
    }
    h6 {
        text-decoration: underline;
    }
    @media screen and (max-width: 600px) {
        .hero-body {
            height: 80vh;
            padding:0 !important
        }
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            overflow-y: auto;
            height: 100%;
        }
        .grid-item{
            width:90%
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
`;class n extends h{static get styles(){return[p(u),g,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{slides:Array,slideIndex:Number,discounts:Array,firstLoad:Boolean,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.slides=[],this.slideIndex=0,this.discounts=[],this.e=null,this.rows=[],this.cols=[]}updated(i){(i.has("rows")||i.has("cols"))&&(this.discounts=[...this.rows.map(t=>Object.fromEntries(t.map((e,s)=>[this.cols[s].label,e])))],this.slides=[...this.renderSlides()])}renderSlides(){let i=[],t=[];return this.discounts.forEach((e,s,c)=>{i.push(e),(s+1)%3===0?(t=[...t,i],i=[]):s===c.length-1&&(t=[...t,i])}),console.log("Generated slides:",t),t.map(e=>r`
            <div class="grid" style="margin: 0;">
                ${e.map(s=>r`
                    <div class="grid-item" title="${s.name}">
                        <div class="content">
                            <img src="${s.image}" alt="${s.name}Image"/>
                            <h5>${s.text}</h5>
                            <h6>Shop ${s.name}</h6>
                        </div>
                    </div>
                `)}
            </div>
        `)}showSlide(i){this.firstLoad=!1,i>this.slideIndex,i<this.slideIndex,i>this.slides.length-1?this.slideIndex=0:i<0?this.slideIndex=this.slides.length-1:this.slideIndex=i;const t=this.shadowRoot.querySelectorAll(".dot"),e=this.shadowRoot.querySelector("#dot"+this.slideIndex);e&&(t.forEach(s=>s.classList.remove("active")),e.classList.add("active"))}static get is(){return"discounts-grid"}render(){return r`
            <div id="discountsGrid" class="column content">
                <div class="hero-body">
                    ${this.slides.length>0?this.slides[this.slideIndex]:r``}
                    ${this.slides.length>1?r`
                            <div id="next" class="nav" @click=${()=>this.showSlide(this.slideIndex+1)}>
                            next    
                            <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
                            </div>
                            <div id="prev" class="nav" @click=${()=>this.showSlide(this.slideIndex-1)}>
                                <adaptive-ui-icon  icon="chevron-left"></adaptive-ui-icon>
                            </div>
                            <div class="dots-container is-flex">
                                ${this.slides.map((i,t)=>r`
                                    <span id="dot${t}" class="dot ${t===0?"active":""}" @click="${()=>this.showSlide(t)}"></span>
                                `)} 
                            </div>
                        `:r``}
                </div>
            </div>
        `}}customElements.define(n.is,n);const x=({element:o,rows:i,cols:t})=>{const e=a.useRef(null);return a.useEffect(()=>{e.current&&o&&(e.current.e=o,e.current.rows=i,e.current.cols=t)},[o,i,t]),d.jsx(d.Fragment,{children:o&&i&&t?d.jsx("discounts-grid",{id:"discounts-grid",ref:e}):d.jsx("p",{children:"Loading data..."})})},y=m(x);export{y as default};
