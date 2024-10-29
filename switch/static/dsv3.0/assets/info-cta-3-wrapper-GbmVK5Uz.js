import{i as o,h as p,r as d,g as m,k as h,a,j as n}from"./index-C2PWchud.js";import{I as f}from"./input-shared-default-D8777CY5.js";import{I as g}from"./input-label-animation-CeZfeLC5.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const u=o`
.main-container{
    width: 100%;
    min-height:500px;
    position:relative;
    align-items: center;
}
.cont{
    align-items: center;
}

h6{
    margin-bottom: 25px !important;
    max-width: 70%;
}
.title{
    font-size: 40px!important;
    color: white;
    font-weight: 600!important;
    line-height: 1.125!important;
}
.button {
    background-color: var(--app-default-color)!important;
    margin-left: 10px;
    border: none !important;
    color: white;
}
.button:hover {
    background-color: var(--app-secondary-color)!important;
    transform: scale(1.05);
    color: white;
}
.button:active {
    transform: scale(0.9);
    color: white;
}
.screen-shot{
    display:flex;
    align-items:center;
    justify-content: center;
    width:40%;
    transform:translateX(40px);
    transition:0.7s all ease-in-out;
}
img {
    width:200px;
    height:400px;
}
/* Animations */
.content-container{
    width:60%;
    flex-direction:column;
    justify-content:center;
    padding: 15px;
    transform:translateY(20px);
    transition:0.7s all ease-in-out;

}
.animate1-appear{
    transform:translateY(0px);
}
.columns {
    margin: 10px 0px;
    padding: 10px !important;
}
.animate2-appear{
    transform:translateX(0px);

}
.badge {
    width: 150px;
    height: fit-content;
    margin-right: 20px;
    object-fit: contain;
    transition: transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s, box-shadow 0.3s ease 0s, -webkit-transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s;
    cursor: pointer;
}
.badge:hover {
    transform: scale(1.05);
}
.badge:active {
    transform: scale(0.9);
}
@media screen and (max-width: 459px) {
    .main-container{
        width: 100%;
        min-height: 900px;
    }
    .mipay-info-cta{
        width: 100%;
        min-height: 900px;
    }
    .content-container{
        width: 100%;
    }
    .info-btn{
        right: 0;
        left: 20%;
        top: 30px!important;
    }

    .screen-shot{
        top: 77px!important;
        width: 100%;
        display: flex;
        justify-content: center;
        left: 0;
    }
    p{
        margin-top:0px;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .title{
        font-size: 35px!important;
        text-align: center;
        width: 100%;
    }
    .btn{
        width: 10em !important;
        height: 3em !important;
    }
    .info-btn{
        right: 0;
        width: 100%;
        left: 0;
        justify-content: center;
        display: flex;
    }
    .badge {
        margin:0;
    }
    .stores {
        justify-content: space-around;
    }
    h6{
        max-width: 90%;
    }
    
    
    
}

`;class s extends p{static get styles(){return[d(m),u,f,g,o`
                :host {
                display: block;
                }
            `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e={}}static get is(){return"info-cta-3"}updated(t){if(t.has("e")){const i=this;window.addEventListener("scroll",()=>{i.scrollAppear()})}}scrollAppear(){const t=this;let i=t.shadowRoot.getElementById("animate1"),r=t.shadowRoot.getElementById("animate2"),c=i.getBoundingClientRect().top,l=window.innerHeight/1.3;c<l&&(i.classList.add("animate1-appear"),r.classList.add("animate2-appear"))}render(){return h`
            <div class="hero is-halfheight">
                <div class="columns">
                        <div id="animate2" class="column screen-shot">
                            <img src="${this.e.details.screen_shot}" />
                        </div>
                        <div id="animate1" class="column is-flex content-container content">
                            <h3>${this.e.name}</h3>
                            <h6>${this.e.defaultValue}</h6>
                            <div class="stores is-flex">
                                <a href="${this.e.details.google_play}"><img src="src/themes/dsv1.0/img/isometic/google-play-badge.svg" class="badge" alt="App Store"/></a>
                                <a href="${this.e.details.app_store}"><img src="src/themes/dsv1.0/img/isometic/app-store-badge.svg"  class="badge" alt="Google Play"/></a>
                            </div>
                        </div>
                    </div>
            </div>
        `}}customElements.define(s.is,s);const y=({element:e})=>{const t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),n.jsx("div",{children:e?n.jsx("info-cta-3",{id:"info-cta-3",ref:t}):n.jsx("p",{children:"Loading data..."})})};export{y as default};
