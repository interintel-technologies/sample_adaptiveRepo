import{i as P,r as T,g as A,k,a as C,j as E}from"./index-C2PWchud.js";import{S as j}from"./section-pelement-dsc-WXP1kFbN.js";import{N as I,h as S,d as B}from"./lit-html-dRijB2IX.js";import{m as D,p as R,a as H,G as M,n as _,r as q,c as z,b as G,d as $,e as O,f as V,s as W}from"./slide-Bzn9_qgU.js";import{w as F}from"./datasource-mixin-DMQBE4lo.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const N=new WeakMap;function J(o){return function(e,n){return async i=>{if(!(i instanceof I))throw new Error("The `transition` directive can only be used on nodes");e||(e=S`<div></div>`),(typeof e=="string"||typeof e=="number")&&(e=S`<div style="display: inline-block">${e}</div>`);const h=D(e),{enter:f,leave:x,onEnter:a,onLeave:v,onAfterEnter:g,onAfterLeave:m,mode:b="in-out"}=n;let s=N.get(i);function c(l){const p=new I(i.options);return p.appendIntoPart(i),p.setValue(l),p.commit(),p}function u(l){const{startNode:p,endNode:y}=l;try{p&&l.clear()}catch{}p&&p.parentNode&&p.parentNode.removeChild(p),y&&y.parentNode&&y.parentNode.removeChild(y)}if(!R()){s&&s.last&&u(s.last),v&&await v(),m&&await m(),a&&await a(),s&&(s.last=c(e)),g&&await g();return}async function r(l){a&&await a(),f&&await o.transition(l,f,n),g&&await g()}async function d(l){v&&await v(),x&&await o.transition(l,x,n),u(l),m&&await m()}if(s||N.set(i,s={children:new Map,styles:new Map,transition:n}),o.init&&o.init({transition:n,data:s,add:c,remove:u}),s.last&&h&&h===s.name)s.last.setValue(e),s.last.commit();else if(s.name=h,b==="in-out"){const l=s.last;await r(s.last=c(e)),l&&await d(l)}else if(b==="out-in"){const l=s.last;l&&await d(l),await r(s.last=c(e))}else s.last&&d(s.last),await r(s.last=c(e))}}}const U={async transition(o,t,e){const{duration:n=e.duration,active:i,from:h,to:f,lock:x}=t,a=H(o);if(!a)return;let v;x&&(x!==M.Auto||i&&_(a,i))&&(v=q(a)),await new Promise(async g=>{const m=z(a),b=r=>Array.isArray(r)?r.forEach(d=>m.add(d)):m.add(r),s=r=>Array.isArray(r)?r.forEach(d=>m.remove(d)):m.remove(r);v&&G(a,v);function c(r){if(r){if(r.target!==a)return;r.preventDefault(),r.stopPropagation()}["transitionend","transitioncancel","animationend","animationcancel"].filter(d=>!r||d!==r.type).forEach(d=>a.removeEventListener(d,c)),i&&s(i),h&&s(h),f&&s(f),g()}const u={once:!0};n?setTimeout(c,n):(a.addEventListener("transitionrun",function(){a.addEventListener("transitionend",c,u),a.addEventListener("transitioncancel",c,u)},u),a.addEventListener("animationstart",function(){a.addEventListener("animationend",c,u),a.addEventListener("animationcancel",c,u)},u)),h&&await $(a,()=>b(h)),i&&await $(a,()=>b(i)),h&&s(h),f&&b(f)})},init({data:o,remove:t,add:e,transition:n}){if(o._cssSource!==n.css&&(o.css&&t(o.css),n.css)){o._cssSource=n.css;let i=n.css;i=typeof i=="string"?S`<style>${i}</style>`:i,o.css=e(i)}}},X=B(function(o,t=V){return typeof t=="function"&&(t=t()),J(U)(o,O(t))}),K=P`
    .nav {
        position: absolute;
        top: 50%;
        border:1px solid black;
        background-color: white;
        transition: background-color 0.7s ease;
        border-radius:50%;
        cursor: pointer;
    }
    h3, h4, h5 {
        color: black !important;
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
        bottom: 20px;
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
    .columns > .column {
        padding: 1.1rem !important;
    }
    .active, .dot:hover {
        background-color: var(--link);
    }
    .button {
        background-color: var(--primary);
        color: white;
        padding: 20px 40px;
        height: 40px !important;
        border: none;
        margin-top: auto;
        width: fit-content;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        color: white !important;
        border: none !important;
    }
    .button:active {
        transform: scale(1.05);
        color: white !important;
    }
    .button > adaptive-ui-icon {
        fill: white;
    }
    a > h5 {
        color: white !important;
        margin-bottom: 0 !important;
        margin-right: 12px;
    }
    img {
        width: 100%;
        height: 90%;
        object-fit: contain;
    }
    #serviceCarousel {
        height: 80vh;
        position: relative;
        padding: 30px 40px;
    }
    .hero-body {
        margin: -30px -60px;
        height: 80vh;
        position:relative;
        clip-path: polygon(100% 0, 100% 92%, 45% 100%, 0 88%, 0 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0.2px);
        -webkit-backdrop-filter: blur(0.2px);
    }
    .content {
        flex-direction: column;
    }
    .columns {
        height: 100%;
        padding: 30px;
    }
    .columns.column {
        height: 100%;
    }
    @media screen and (max-width: 500px){ 
        .hero-body,#serviceCarousel {
            height: fit-content !important;
        }
        .hero-body {
            clip-path: polygon(0 0, 100% 0, 100% 95%, 59% 100%, 0 100%, 0% 50%);
        }
    }
`,w={mode:"both",opacity:0};class L extends j{static get styles(){return[T(A),,K,P`
                :host {
                    display: block;
                }
            `]}static get properties(){return{slides:Array,slideIndex:Number,loopId:String,autoPlayTime:Number}}constructor(){super(),this.slides=[],this.slideIndex=0,this.autoPlayTime=1e4}firstUpdated(){this.loader.then(()=>{this.slides=[...this.renderSlides()],this.showSlide(0),this.autoPlayTime=this.e.details.autoPlayTime?this.e.details.autoPlayTime:this.autoPlayTime})}onNavBtnClickHandler(t){clearTimeout(this.loopId),this.showSlide(t)}showSlide(t){t>this.slideIndex&&(w.right=!1,w.left=!0),t<this.slideIndex&&(w.right=!0,w.left=!1),t>this.slides.length-1?this.slideIndex=0:t<0?this.slideIndex=this.slides.length-1:this.slideIndex=t;const e=this.shadowRoot.querySelectorAll(".dot"),n=this.shadowRoot.querySelector("#dot"+this.slideIndex);n&&(e.forEach(i=>i.classList.remove("active")),n.classList.add("active")),this.loopId=setTimeout(()=>this.showSlide(this.slideIndex+1),this.autoPlayTime)}getEntries(t){return t.split("|")}renderSlides(){return this.rows.map(t=>k`
            <div class="columns">
                <div class="column content is-flex">
                    <h3>${this.getEntries(t[1])[0]}</h3>
                    <h4>${this.getEntries(t[1])[1]}</h4>
                    ${JSON.parse(t[2]).points.map(e=>k`
                            <div class="is-flex">
                                <fa-icon class="far fa-check-square"></fa-icon>
                                <h5>${e}</h5>
                            </div>
                        `)}
                    <a class="button" href="${JSON.parse(t[2]).link}" target="_blank">
                        Get Started
                        <adaptive-ui-icon icon="arrow-forward"></adaptive-ui-icon>
                    </a>
                </div>
                <div class="column">
                    <img src="/media/${t[3]}" alt="${this.getEntries(t[1])[0]}Image"/>
                </div>
            </div>
        `)}static get is(){return"services-carousel"}render(){return k`
			<div class="content">
                <div id="serviceCarousel" class="column">
                    <div class="hero-body has-background-link-light">
                        ${X(this.slides[this.slideIndex],W(w))}
                        <div id="next" class="nav" @click=${()=>this.onNavBtnClickHandler(this.slideIndex+1)}>
                            <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
                        </div>
                        <div id="prev" class="nav" @click=${()=>this.onNavBtnClickHandler(this.slideIndex-1)}>
                            <adaptive-ui-icon  icon="chevron-left"></adaptive-ui-icon>
                        </div>
                        <div class="dots-container is-flex">
                            ${this.slides.map((t,e)=>k`
                                <span id="dot${e}" class="dot ${e===0?"active":""}" @click="${()=>this.onNavBtnClickHandler(e)}"></span>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(L.is,L);const Q=o=>{const{element:t,rows:e,paramsCallback:n}=o,i=C.useRef(null);return C.useEffect(()=>{i.current&&t&&(i.current.e=t,i.current.rows=e)},[t,e,o,n]),E.jsx("div",{children:t?E.jsx("services-carousel",{id:"services-carousel",ref:i}):E.jsx("p",{children:"Loading data..."})})},rt=F(Q);export{rt as default};
