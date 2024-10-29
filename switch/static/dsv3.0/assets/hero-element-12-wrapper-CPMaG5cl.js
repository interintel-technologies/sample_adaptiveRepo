import{i as r,r as c,g as d,k as i,a as s,j as o}from"./index-C2PWchud.js";const m=r`
    #hero-bdy{
        padding:80px;
    }
    .columns {
        flex-wrap:wrap;
    }
    .image {
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
        transform:translateX(100%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(-100%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 0.7s all ease-in-out;
    }
    .button{
        background-color: var(--app-default-color);
        color:white;
        padding:0 16px;
    }
    .button:hover {
        background-color: var(--app-secondary-color);
        color:white;
    }
    @media screen and (max-width: 550px){ 
        .image {
            min-width:100%;
        }
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
`;class n extends LitElement{static get styles(){return[c(d),m,r`
                :host{
                    disply: block;
                }
            `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}updated(t){t.has("e")&&window.addEventListener("scroll",()=>this.scrollToAppear())}scrollToAppear(){const a=this.shadowRoot.querySelector(".hero").getBoundingClientRect().top,l=window.innerHeight/2;a<l&&this.animateColumns()}animateColumns(){const t=this.shadowRoot.querySelector("#image-column"),a=this.shadowRoot.querySelector("#text-column");t.classList.add("column-appear-animation"),a.classList.add("column-appear-animation")}static get is(){return"hero-element-12"}render(){return i`
            <section class="hero is-halfheight">
                <div id="hero-bdy" class="hero-body columns">
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e.name}
                        </p>
                        <p class="subtitle" style="margin-top:0;">
                            ${this.e.defaultValue}
                        </p>
                        ${Object.keys(this.e.details).includes("button_title")?i`
                            <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>   
                            `:i``}
                    </div>
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                </div>
            </section>
        `}}customElements.define(n.is,n);const p=({element:e})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),o.jsx("div",{children:e?o.jsx("hero-element-12",{id:"hero-element-12",ref:t}):o.jsx("p",{children:"Loading data..."})})};export{p as default};
