import{i as o,h as m,r as c,g as p,k as d,a,j as s}from"./index-C2PWchud.js";const h=o`
    .columns {
        flex-wrap:wrap;
    }
    .image {
        min-width:300px;
        height:300px;
        object-fit:contain;
        margin:auto;
    }
    .title {
        max-width:95%;
        text-align:left;
        color: var(--primary-text) !important;
        font-size: 2rem!important;
        font-weight: 500!important;
        line-height: 2.125!important;
    }
    .subtitle {
        max-width:85%;
        text-align:left;
        color: var(--primary-text) !important;
        font-size: 18px!important;
        font-weight: 390!important;
        line-height: 1.50!important;
    }
 

    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 0.7s all ease-in-out;
    }
    @media screen and (max-width: 550px){ 
        #text-column {
            min-width:100%;
        }
        .title {
            max-width:100%;
        }
    
        .subtitle{
            max-width:100%;
        }
    }

    @media screen and (max-width: 320px) {
  
        .image {
            min-width:250px
        }
        
    }
    @media screen and (max-width: 280px) {
  
        .image {
            min-width:200px
        }
        
    }

    .image-column-disappear, .text-column-disappear {
        opacity: 0;
        transform: translateY(50px); /* Initial hidden state */
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    }
    
    .column-appear-animation {
        opacity: 1;
        transform: translateY(0px); /* Element fades in and moves to its normal position */
    }

    
`;class n extends m{static get styles(){return[c(p),h,o`
                :host {
                    display: block;
                }
            `]}constructor(){super(),this.e=null,this.observer=null}static get properties(){return{e:{type:Object}}}firstUpdated(){this.setupObserver()}static get is(){return"hero-element-8"}setupObserver(){const t={root:null,threshold:.2};this.observer=new IntersectionObserver(r=>{r.forEach(l=>{l.isIntersecting&&this.animateColumns()})},t);const i=this.shadowRoot.querySelector(".hero");i&&this.observer.observe(i)}animateColumns(){const t=this.shadowRoot.querySelector("#image-column"),i=this.shadowRoot.querySelector("#text-column");t&&i&&(t.classList.add("column-appear-animation"),i.classList.add("column-appear-animation"))}disconnectedCallback(){this.observer&&this.observer.disconnect(),super.disconnectedCallback()}render(){return d`
            <section class="hero is-halfheight">
                <div class="hero-body columns">
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e&&this.e.details.image}" />
                    </div>
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e&&this.e.name}
                        </p>
                        <p class="subtitle">
                            ${this.e&&this.e.defaultValue}
                        </p>
                    </div>
                </div>
            </section>
        `}}customElements.define(n.is,n);const x=({element:e})=>{const t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),s.jsx("div",{children:e?s.jsx("hero-element-8",{id:"hero-element-8",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{x as default};
