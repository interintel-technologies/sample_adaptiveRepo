import{i as o,h as r,r as a,g as l,k as c,a as s,j as i}from"./index-C2PWchud.js";/**
    @license
    Copyright (c) 2020 InterIntel Technologies. All rights reserved.

    */const d=o`
    .text-container{
        width: 100%;
        position: absolute;
        height: 100vh;
        z-index: 9999;
        display: flex;
        align-items: center;
    }
    .text-container h1{
        color: #fff;
        font-size: 64px;
        line-height: 1.22;
        font-weight: 900;
        width: 779px;
    }
    .title-container{
        padding: 0px 20em;
    }
    .button-container{
        padding: 0px 14em;
    }
    .hero-container{
        position: relative;
        width: 100%;
        height: 100vh;
        justify-content: center;
        display: flex;
    }
    .element{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        flex: 1;
        transition: .5s;
        cursor: pointer;
        height: 100vh;
        overflow: hidden;
    } 
    .element:hover{
        flex-grow: 5;
    }
    .element .overlay{
        width: 100%;
        height: 100vh;
        background: #000;
        opacity: 0.7;
        position: absolute;
    }
    .element:hover ~ .element .overlay{
        opacity: 0.9;
    }
    .element img{
        object-fit: cover;
        height: 100vh;
    }
    `,h=class extends r{constructor(){super()}static get is(){return"hero-element-6"}init(e,t){}};class n extends h{static get styles(){return[a(l),d,o` 
                :host{
                    disply: block;
                }
                `]}render(){return c`
            <div class="text-container">
                <div class="content">
                    <div class="heading title-container">
                        <h1 class="title">Creative people share amaizing photos</h1>
                    </div>

                    <div class="button-container">
                        <a href="/" class="button is-rounded is-danger has-text-weight-bold">Explore now</a>
                    </div>
                </div>
            </div>
            <div class="hero-container">
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-wallpapers-15.jpg" alt="img-1"/>
                </div>
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://i.ytimg.com/vi/goQMXfiS-dA/maxresdefault.jpg" alt="img-2"/>
                </div>
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://i.ytimg.com/vi/cwWb3XTrqnU/maxresdefault.jpg" alt="img-3"/>
                </div>
                <div class="element">
                    <div class="overlay"></div>
                    <img src="https://i.ytimg.com/vi/tFx6wt_gI3A/maxresdefault.jpg" alt="img-4"/>
                </div>
            </div>
            `}}customElements.define(n.is,n);const m=({element:e})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),i.jsx("div",{children:e?i.jsx("hero-element-6",{id:"hero-element-6",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{m as default};
