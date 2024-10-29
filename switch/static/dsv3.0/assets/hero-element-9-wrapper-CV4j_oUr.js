import{i as l,h as d,r as m,g as u,k as h,a as n,j as i}from"./index-C2PWchud.js";const x=l`
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
    }
    .subtitle {
        max-width:85%;
        text-align:left;
    }
    .image-column-disappear {
        opacity:0;
        transform:translateX(-100%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(100%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 1.5s all ease-in-out;
    }
    .underline {
        height:7px;
        width:60px;
        border-radius:2px;
        border-width:0px;
        background-color:var(--app-secondary-color)
    }
    #text-column {
        padding-left:20px;
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
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
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
`;class r extends d{static get styles(){return[m(u),x,l`
                :host{
                    disply: block;
                }
            `]}constructor(){super(),this.e=null}static get properties(){return{e:{type:Object}}}updated(t){t.has("e")&&window.addEventListener("scroll",()=>this.scrollAppear())}scrollAppear(){const e=this.shadowRoot.querySelector(".hero").getBoundingClientRect().top,o=window.innerHeight/2;e<o&&this.animateColumns()}animateColumns(){const t=this.shadowRoot.querySelector("#image-column"),e=this.shadowRoot.querySelector("#text-column");t.classList.add("column-appear-animation"),e.classList.add("column-appear-animation")}colorTitle(){const t=this.shadowRoot.querySelector(".title"),e=t.innerText,o=e.split(" "),s=o[o.length-1],c=e.replace(s,""),p=`<span style="color: var(--app-secondary-color)">${s}</span>`;t.innerHTML=c+p}static get is(){return"hero-element-9"}render(){return h`
            <section class="hero is-fullheight">
                <div class="hero-body columns">
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e.name}
                        </p>
                        <hr class="underline">
                        <p class="subtitle is-4">${this.e.defaultValue}</p>
                        <p class="subtitle is-5">${this.e.details.paragraph}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                </div>
            </section>
        `}}customElements.define(r.is,r);const f=({element:a})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&a&&(t.current.e=a)},[a]),i.jsx("div",{children:a?i.jsx("hero-element-9",{id:"hero-element-9",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{f as default};
