import{i as S,r as L,g as R,k as f,a7 as B,bo as C,a as v,bp as P,j as o,bq as T,bf as G,al as z,bg as A,b3 as I}from"./index-C2PWchud.js";import{N as q}from"./navbar-base-W09osB0s.js";import"./fa-icon-COAiXmZs.js";import"./base-element-5lxvCIHt.js";import"./lit-html-dRijB2IX.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const D=S`
.ii__container-main{
  margin: 0 auto;
  padding: 0 90px;
  background-color: white;
}
/* header */
.ii__main-header{
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 1px 0 0 #d9d9d9;
  /* background: #fff; */
}
.navbar{
  background: transparent;
  height: 5.5em;
  background-color: white;
}
.nav__item{
  font-weight: regular;
  font-size: 16px;
  font-weight: 450;
}
.nav__item:hover{
  /* font-weight: bolder; */
  position: relative;
  color: #fff!important;
  position: relative;
  background: transparent!important;
}
.nav__item:hover::after{
  position: absolute;
  width: 100%;
  border-bottom: 4px solid var(--app-secondary-color);
  z-index: 9999;
  content: '';
  bottom: 0;
  left: 0;
}
.nav__item:focus::after{
  position: absolute!important;
  width: 100%!important;
  border-bottom: 4px solid var(--app-secondary-color)!important;
  z-index: 9999!important;
  content: ''!important;
  bottom: 0!important;
  left: 0!important;
  background-color:white!important;
  color:#fff!important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
  background-color:white!important;
  color:black !important;
}
/* .nav__item:hover::after{
  content: '';
  position: absolute;
  width: 90%;
  height: 3px;
  top: 50px;
  left: 0;
  background: #409DB5;
} */
.navbar-item .buttons .button{
  font-size: 13px;
  font-weight: inherit;
  width: 115px;
  height: 3em;
}
.navbar-item .logo-img {
height: auto;
object-fit: contain;
width: 100%;
}
.navbar-item img{
min-height: 3.75rem!important; 
}
.navbar-menu{
  background-color: white!important;
  margin-left: 50px;
}
.navbar-burger{
  color:black!important;
  margin: auto 0px auto auto;
}
.navbar-end {
  width:100%;
  justify-content:flex-start;
}
.login-btn {
  display:block;
  background-color:var(--app-secondary-color);
  color:white;
  border-radius:8px;
  font-size: 16px;
  font-weight: inherit;
  height: fit-content;
  padding: 7px 14px;
  margin:7px;
  text-align:center;
  align-self: center;
}
.login-btn:hover {
  border:2px solid var(--app-default-color);

}
@media screen and (max-width: 1023px){
.ii__container-main{
      margin: 0 auto;
      padding: 0 10px;
  }
  .top{
      position: relative;
      top: 44px;
  }
  .login-btn {
    border-radius:0;
    text-align:left;
    margin:0;
  }
}
`;class $ extends q{static get styles(){return[L(R),D,S`
        :host {
          display: block;
        }
      `]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String}}}constructor(){super(),this.group=[],this.hide=[],this.pageGroups=[],this.prevScrollPos=0,this.drawerOpen=!1,this._pageGroup="",this.logo=""}updated(e){e.has("e")}visibleMenuTitles(e,a){return console.log("page group is ",e),e.pages.map((r,i)=>{let n=0;return this.e&&this.e.details&&!this.e.details.hide.includes(r.title)?(n+=1,f`
          <a tabindex="${i+1}" class="${r._title==="Log In"?"login-btn":"navbar-item nav__item is-capitalized"}"
            @click="${this.scrollToSection}"
            style=${a===1&&n===1?"margin-left:auto;":""}
            data-name="${r._title.replace(/ /g,"-").toLowerCase()}" pageGroup="${a}" page="${i}" 
          >
            ${r._title}
          </a>            
        `):f``})}render(){var e,a;return f`
      <div id="section11" class="bind-box">
        <header class="ii__main-header">
          <div class="ii__container-main">
            <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color:white">
              <div class="navbar-brand">
                <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
                  <img class="logo-img" src="/media/${(e=this.gateway)==null?void 0:e.logo}" alt="brand">
                </a>
                <a role="button" class="navbar-burger burger" @click=${this.addBlock} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                  ${(a=this.pageGroups)==null?void 0:a.map((r,i)=>this.visibleMenuTitles(r,i))} 
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    `}reloadPage(){window.location.reload()}redirectPage(){window.location.href="/"}addBlock(){this.shadowRoot.querySelector(".navbar-menu").classList.toggle("is-block")}scrollToSection(e){e.target;let a=e.target.getAttribute("pageGroup"),r=e.target.getAttribute("page");if(this._pageGroup==a){var i=e.target.getAttribute("data-name");let n=this.shadowRoot.querySelector(".navbar").offsetHeight;const t=document.getElementById(i),u=n;if(t){const h=document.body.getBoundingClientRect().top,b=t.getBoundingClientRect().top-h-u;window.scrollTo({top:b,behavior:"smooth"})}}else window.location.hash="#/"+a+"/"+r}static get is(){return"navbar-10"}init(e,a){super.init(e,a)}}customElements.define($.is,$);const N=({element:l,pageGroups:e,currentPageGroupName:a,gatewayData:r})=>{var x;const i=JSON.parse(e),n=C(window.parsed_payload)._response,t=v.useRef(null),u=(x=r._response)==null?void 0:x.logo,[h,p]=v.useState(!1),w=P();v.useEffect(()=>{if(t.current&&l){t.current.e!==l&&(t.current.e=l),t.current&&r&&(t.current.logo=u),t.current.pageGroups!==i&&(t.current.pageGroups=i),t.current._pageGroup!==a&&(t.current._pageGroup=a),t.current.gateway!==n&&(t.current.gateway=n);const s=()=>{p(c=>!c)};return t.current.addEventListener("toggle-drawer",s),()=>{t.current&&t.current.removeEventListener("toggle-drawer",s)}}},[l,i,r,a]);const b=(s,c,d)=>{const m=s.target,g=c,j=d,_=m.getAttribute("data-name");if(a===g){const E=document.querySelector(".navbar").offsetHeight,y=document.querySelector(".main-content");if(y){const k=y.querySelector(`#${_}`);k?(k.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-E)):console.error(`Element with ID ${_} not found.`)}else console.error("Main content element not found.")}else w(`/${g}/${j}`);p(!1)};return o.jsx(o.Fragment,{children:l?o.jsxs(o.Fragment,{children:[o.jsx("navbar-10",{id:"navbar-10",ref:t}),o.jsx(T,{anchor:"left",open:h,onClose:()=>p(!1),children:o.jsx("div",{style:{width:240},children:o.jsx(G,{children:i.map((s,c)=>o.jsx(z.Fragment,{children:s._tabs.map((d,m)=>o.jsx(A,{button:!0,"data-name":d._title.replace(/ /g,"-").toLowerCase(),onClick:g=>b(g,s._title.replace(/ /g,"-").toLowerCase(),d._title.replace(/ /g,"-").toLowerCase()),children:o.jsx(I,{primary:d._title})},m))},c))})})})]}):o.jsx("p",{children:"Loading data..."})})},W=B(N);export{W as default};
