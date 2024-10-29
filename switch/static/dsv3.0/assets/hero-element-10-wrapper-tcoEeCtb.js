import{i as n,h as c,r as d,g as h,k as p,a as s,j as i}from"./index-C2PWchud.js";const m=n`
    .hero {
        background: var(--app-default-color);
    }
    .hero-body {
        flex-direction:column;
    }
    .title {
        color:var(--white);
        text-align:center;
        transform:translateY(-50%);
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.125;
    }
    .title.is-4 {
        font-size: 1.5rem;
    }
    .mid-title {
        max-width:45%;
    }
    .subtitle {
        color:white;
        text-align:center;
        max-width:50%;
        transform:translateY(-50%);
        color:var(--white);
    }
    .str-btn {
        border-radius: 5px!important;       
        background-color: var(--app-secondary-color)!important;
        color: #fff!important;
        margin-top: 30px;
        border: none!important;
        font-weight: bold;   
        padding: 25px;
        font-size: 19px!important;
        transform:translateY(-50%);
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
        border: 4px var(--app-secondary-color) solid!important ;
        padding:21px;
    }
    .item-appear-animation {
        opacity:1;
        transform:translateY(0px);
        transition: 1.2s transform ease-in-out, 1.2s opacity ease-in-out;
    }

    @media screen and (max-width: 600px){ 
        .mid-title {
            max-width:90%;
        }
        .subtitle {
            max-width:90%;
        }
    }
`;class a extends c{static get styles(){return[d(h),m,n` 
                :host {
                    display: block;
                }
            `]}constructor(){super(),this.e=null}static get properties(){return{e:{type:Object}}}firstUpdated(t){super.firstUpdated(t),window.addEventListener("scroll",()=>this.scrollAppear())}scrollAppear(){const o=this.shadowRoot.querySelector(".hero").getBoundingClientRect().top,r=window.innerHeight/2;o<r&&this.animateItems()}animateItems(){const t=this.shadowRoot.querySelectorAll(".title"),o=this.shadowRoot.querySelector(".subtitle"),r=this.shadowRoot.querySelector(".button");[...t,o,r].forEach(l=>this.animateItem(l))}animateItem(t){t.classList.add("item-appear-animation")}static get is(){return"hero-element-10"}render(){return p`
            <section class="hero is-halfheight columns">
                <div class="hero-body">
                    <h3 class="title">${this.e&&this.e.name}</h3>
                    <h3 class="title is-4 mid-title" style="margin-top:0px;">${this.e&&this.e.defaultValue}</h3>
                    <p class="subtitle" style="margin-top:0px;color:var(--white) !important;">${this.e&&this.e.details.text}</p>
                    <a href="${this.e&&this.e.details.path}" class="button str-btn">${this.e&&this.e.details.button_title}</a>
                </div>
            </section>
        `}}customElements.define(a.is,a);const x=({element:e})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),i.jsx("div",{children:e?i.jsx("hero-element-10",{id:"hero-element-10",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{x as default};
