import{i as r,h as m,r as c,g as p,k as n,a as o,j as a}from"./index-C2PWchud.js";const d=r`
    .columns {
        flex-wrap:wrap;
        margin: 0 !important;
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
        color: #4e4e4e!important;
        font-size: 2rem!important;
        font-weight: 500!important;
        line-height: 2.125!important;
    }
    .subtitle {
        max-width:85%;
        text-align:left;
        color: #4a4a4a!important;
        font-size: 18px!important;
        font-weight: 390!important;
        line-height: 1.50!important;
    }
    .image-column-disappear {
        opacity:0;
        transform:translateX(-20%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(20%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 0.7s all ease-in-out;
    }
    ul { 
        padding: 20px !important;
    }
    li {
        list-style-type: disc;
    }
    p {
        max-width: 70%;
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
        p {
            max-width: 90%;
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
`;class s extends m{static get styles(){return[c(p),d,r`
                :host{
                    display: block;
                }
            `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}updated(t){t.has("e")&&window.addEventListener("scroll",()=>this.scrollAppear())}scrollAppear(){const i=this.shadowRoot.querySelector(".hero").getBoundingClientRect().top,l=window.innerHeight+20;i<l&&this.animateColumns()}animateColumns(){const t=this.shadowRoot.querySelector("#image-column"),i=this.shadowRoot.querySelector("#text-column");t.classList.add("column-appear-animation"),i.classList.add("column-appear-animation")}static get is(){return"hero-element-14"}render(){return n`
            <section class="hero is-halfheight">
                <div class="hero-body columns">
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                    <ul id="text-column" class="column text-column-disappear">
                        ${this.e.details.points.map(t=>n`
                                <li class="content">
                                    <h4>${t.title}</h4>
                                    <p>${t.description}</p>
                                </li>
                            `)}
                    </ul>
                </div>
            </section>
        `}}customElements.define(s.is,s);const u=({element:e})=>{const t=o.useRef(null);return o.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),a.jsx("div",{children:e?a.jsx("hero-element-14",{id:"hero-element-14",ref:t}):a.jsx("p",{children:"Loading data..."})})};export{u as default};
