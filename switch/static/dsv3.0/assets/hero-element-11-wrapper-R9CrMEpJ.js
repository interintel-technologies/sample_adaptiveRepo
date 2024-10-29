import{i as d,h as p,r as c,g as h,k as a,a as n,j as r}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const u=d`
    .title {
        font-size: 3.5rem!important;
        margin-bottom: 3.5rem!important;
    }

    .p-padding {
        padding-top: 8px!important;
        padding-bottom: 8px!important;
    }

    .hero-body {
        clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 80%);
        background-color: var(--app-default-color)!important;
        
    }
    .columns {
        height:fit-content;
        flex-wrap:wrap;
    }
    .column {
        display: flex;
        flex-direction: column;
        height:fit-content;
        padding:110px 35px 0 50px;
        opacity:0;
    }
    #imageContainer{
        align-items:center;
    }
    .slide {
        display:flex;
        flex-direction: column;
        align-items: center;
        animation:slide-animation 5s infinite;
    }
    .desc {
        margin-bottom:10px;
    }
    .str-btn {
        border-radius: 5px!important;
        width:fit-content;
        background-color: var(--app-secondary-color)!important;
        color: #fff!important;
        margin-top: 20px;
        border: none!important;
        font-weight: bold;
        padding:25px;
        font-size: 19px!important;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 11px;
        height: 11px;
        border-radius:50%;
        margin: 0 2px;
        display: inline-block;
        transition: background-color 1.2s ease;
        background-color: #bbb;
    }
    .active, .dot:hover {
        background-color: var(--app-secondary-color);
      }
    .slide-image{
        height:300px;
        object-fit:contain;
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
        border: 4px var(--app-secondary-color) solid!important ;
        padding:21px;
    }
    .column-appear-animation{
        opacity: 1;
        transition:0.7s opacity ease-in-out;     
    }
    @keyframes slide-animation {
        0%   {opacity: 0;transform:translateX(50%);}
        7%  {opacity:1;transform:translateX(0px);}
        93% {opacity:1;transform:translateX(0px)}
        100% {opacity: 0;transform:translateX(-50%)}
    }

    @media screen and (max-width: 550px){ 
        .hero-body {
            clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 95%);
            height:fit-content;
            padding:50px 20px 20px 20px;
        }
        .column {
            padding:50px 15px 20px 15px;
            min-width:100%;
        }
    }
    @media screen and (min-width: 571px) and (max-width: 1025px){ 
        .hero-body {
            clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 90%);
            height:fit-content;
            padding:50px 20px 20px 20px;
        }
        .column {
            padding:180px 15px 20px 15px;
            min-width:100%;
        }
        #imageContainer {
            padding-top:50px;
        }
        .slide-image {
            height:350px;
        }
    }
`;class l extends p{static get styles(){return[c(h),u,d`
                :host {
                display: block;
                }
            `]}static get properties(){return{slideIndex:Number,autoplay:Boolean,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.e=null,this.rows=[],this.cols=[],this.slideIndex=1,this.autoplay=!0}updated(t){t.has("e")&&this.showSlides(this.slideIndex)}showColumns(){const t=this.shadowRoot.querySelectorAll(".column");setTimeout(()=>{t.forEach(e=>e.classList.add("column-appear-animation"))},700)}showSlides(t){const e=this.shadowRoot.querySelectorAll(".slide"),i=this.shadowRoot.querySelectorAll(".dot");t>e.length&&(this.slideIndex=1),t<1&&(this.slideIndex=e.length);for(let o=0;o<e.length;o++)e[o].style.display="none";for(let o=0;o<i.length;o++)i[o].className=i[o].className.replace(" active","");e[this.slideIndex-1].style.display="flex",i[this.slideIndex-1].className+=" active",this.autoplay?setTimeout(()=>this.showSlides(this.slideIndex+=1),5e3):this.autoplay=!0}showCurrentSlide(t){let e=parseInt(t.target.getAttribute("currentSlide"));this.autoplay=!1,this.showSlides(this.slideIndex=e)}static get is(){return"hero-element-11"}render(){return a`
            <section class="hero is-fullheight">
                <div class="hero-body columns" style="align-items:flex-start;">
                    <div id="textContainer" class="column">
                        <h1 class="title has-text-white">${this.e.name} </h1>
                        <p class="subtitle has-text-white">${this.e.details.text}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                    <div id="imageContainer" class="column">
                        ${this.rows.map(t=>a`
                                <div class="slide">
                                    <img class="slide-image" src="/media/${t[3]}" alt="image slide"/>
                                    <p class="subtitle-6 has-text-white p-padding">${t[2]}</p>
                                </div>
                            `)}
                        <div class="dots-container">
                            ${this.rows.map((t,e)=>a`
                                <span class="dot" @click="${this.showCurrentSlide}" currentSlide="${e+1}"></span>
                            `)}
                        </div>
                    </div>
                </div>
            </section>
        `}}customElements.define(l.is,l);const x=({element:s,rows:t,cols:e})=>{const i=n.useRef(null);return n.useEffect(()=>{i.current&&s&&(i.current.e=s,i.current.rows=t,i.current.cols=e)},[s]),r.jsx("div",{children:s?r.jsx("hero-element-11",{id:"hero-element-11",ref:i}):r.jsx("p",{children:"Loading data..."})})},y=m(x);export{y as default};
