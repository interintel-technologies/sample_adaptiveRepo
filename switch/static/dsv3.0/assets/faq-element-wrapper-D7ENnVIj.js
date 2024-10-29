import{i as l,h as p,r as h,g as m,k as i,a as n,j as s}from"./index-C2PWchud.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";const g=l`
    li {
        list-style: none;
    }
    .far {
        cursor: pointer;
        margin: 0px 7px;
    }
    .card {
        background-color: var(--paper);
        border-radius: 0.25rem;
        box-shadow: 0 .5em 1em -0.125em var(--scheme-invert--10--rgba), 0 0 0 1px var(--scheme-invert--2--rgba);
        max-width: 100%;
        position: relative;
    }
    .card {
        margin-bottom:10px;
        padding:5px 10px;
        border-radius:6px;
    }
    .card-header {
        cursor: pointer;
        box-shadow:none;
    }
    .card-content {
        max-height: 0;
        overflow: hidden;
        padding:1.2px 1.5rem;
        transition: max-height 0.3s ease-out;
    }
    .card-header-title {
        margin: 0 !important;
    }
    .far {
        cursor: pointer;
        margin:0 7px;
    }
    .far:hover {
        cursor: pointer;
        margin:0 7px;
    }
    .far:active {
        transform: scale(0.9);
    }
    .tabs a {
        border-bottom-width: 3px !important;
    }
    .tabs a:hover {
        border-bottom-color: var(--primary) !important;
        color: var(--primary) !important;
    }
    .tabs li.is-active a {
        border-bottom-color: var(--link) !important;
        color: var(--link) !important;
    }
    .arrow-icon {
        transform: rotate(0deg);
        transition: transform 0.3s ease-out;
        width: 30px !important;
        height: 30px !important;
        cursor: pointer;
    }
    .rotate-icon {
        transform:rotate(180deg);
    }
    .level {
        margin-top:27px;
        margin-bottom:13px;
    }
    .helpful {
        opacity:0.6;
    }
    .label {
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
    }
`;class c extends p{static get styles(){return[h(m),g,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{categories:{type:Array},activeCategory:{type:Number},e:{type:Object},rows:{type:Array},loader:{type:Object}}}constructor(){super(),this.categories=[],this.activeCategory=0,this.e={},this.rows=[],this.loader=new Promise(t=>t())}updated(t){super.updated(t),(t.has("e")||t.has("rows"))&&(this.createCategories(),this.categories&&this.categories[this.activeCategory]&&Object.values(this.categories[this.activeCategory]).forEach(r=>r.forEach(e=>this.appendAnswer(e.id,e.answer))))}createCategories(){const t=[];this.rows.forEach(e=>{t.includes(e[1])||t.push(e[1])});const r=t.map(e=>{const d=this.rows.filter(o=>o[1]===e);return{[e]:d.map(o=>({id:o[0],question:o[2].split("|")[0],answer:o[2].split("|")[1]}))}});this.categories=[...r]}accordionContentVisibility(t){const r=this.shadowRoot.querySelector("#card-content"+t),e=this.shadowRoot.querySelector("#arrow-icon"+t);r.style.maxHeight?(r.style.maxHeight=null,e.classList.toggle("rotate-icon")):(r.style.maxHeight=r.scrollHeight+"px",e.classList.toggle("rotate-icon"))}hideAllAccordions(){const t=this.shadowRoot.querySelectorAll(".card-content"),r=this.shadowRoot.querySelectorAll(".arrow-icon");t.forEach(e=>e.style.maxHeight=null),r.forEach(e=>e.classList.remove("rotate-icon"))}onTabClickHandler(t){this.hideAllAccordions(),setTimeout(()=>this.activeCategory=t,300)}appendAnswer(t,r){const e=this.shadowRoot.querySelector("#answer"+t);e&&(e.innerHTML=r)}static get is(){return"faq-element"}render(){return i`
            <section class="content">
                <h4>${this.e&&this.e.name}</h4>
                ${this.categories.length>1?i`
                        <div class="tabs is-fullwidth">
                            <ul>
                                ${this.categories.map((t,r)=>i`
                                        <li class="${this.activeCategory===r?"is-active":""}">
                                            <a @click=${()=>this.onTabClickHandler(r)}>${Object.keys(t)[0]}</a>
                                        </li>
                                    `)}
                            </ul>
                        </div>
                    `:i``}
                <ul>
                    ${this.categories.length>0?Object.values(this.categories[this.activeCategory]||{})[0].map(t=>i`
                            <li class="card">
                                <div class="card-header" @click=${()=>this.accordionContentVisibility(t.id)}>
                                    <p class="card-header-title">${t.question}</p>
                                    <span class="card-header-icon" aria-label="more options">
                                        <iron-icon id=${"arrow-icon"+t.id} icon="arrow-drop-down" class="arrow-icon"></iron-icon>
                                    </span>
                                </div>
                                <div id=${"card-content"+t.id} class="card-content hide-accordion-content">
                                    <p id=${"answer"+t.id} class="answer"></p>
                                    <div class="level">
                                        <div class="level-left">
                                            <strong class="level-item">Did this help?</strong>
                                            <div class="level-item">
                                            <adaptive-ui-icon class="far" icon=${"icons:MdOutlineThumbUpAlt"}></adaptive-ui-icon>

                                             
                                                <p>Yes </p>
                                            <adaptive-ui-icon class="far" icon=${"icons:MdOutlineThumbDown"}></adaptive-ui-icon>

                                                 
                                                <p>No </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        `):i``}
                </ul>
            </section>
        `}}customElements.define(c.is,c);const v=({element:a,rows:t,cols:r})=>{const e=n.useRef(null);return n.useEffect(()=>{e.current&&a&&(e.current.e=a,e.current.rows=t,e.current.cols=r)},[a,t,r]),s.jsx(s.Fragment,{children:a&&t&&r?s.jsx("faq-element",{id:"faq-element",ref:e}):s.jsx("p",{children:"Loading data..."})})},b=u(v);export{b as default};
