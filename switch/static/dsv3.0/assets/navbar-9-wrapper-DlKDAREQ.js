import{i as k,r as L,g as S,k as p,a7 as E,br as G,bo as C,bs as P,a as v,bp as R,j as r,bq as B,bf as N,al as I,bg as A,b3 as D}from"./index-C2PWchud.js";import{N as q}from"./navbar-base-W09osB0s.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const z=k`
.ii__container-main{
    margin: 0 auto;
    padding: 0 90px;
    background-color: var(--app-default-color);
}
/* header */
.ii__main-header{
    background-color: var(--app-default-color);
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
    background-color: var(--app-default-color);
}
.nav__item{
    font-weight: regular;
    font-size: 16px;
    color: #fff;
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
    background-color:var(--app-default-color)!important;
    color:#fff!important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
    background-color:var(--app-default-color)!important;
    color:#fff!important;
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
    background-color: var(--app-default-color)!important;
}
.navbar-burger{
    color:#fff!important;
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
}
`;class y extends q{static get styles(){return[L(S),z,k`
        :host {
          display: block;
        }
      `]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String},e:{type:Object},gateway:{type:Object}}}constructor(){super(),this.group=[],this.hide=[],this.pageGroups=[],this.prevScrollPos=0,this.drawerOpen=!1,this._pageGroup="",this.logo="",this.e={},this.gateway={}}updated(t){t.has("e")}render(){return p`
      <div id="section11" class="bind-box">
        <header class="ii__main-header">
          <div class="ii__container-main">
            <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color:var(--app-default-color)">
              <div class="navbar-brand">
                <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
                  <img class="logo-img" src="/media/${this.gateway.logo}" alt="brand">
                </a>

                <a role="button" class="navbar-burger burger" @click=${this.addBlock} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                  ${this.pageGroups.map((t,o)=>p`
                    ${t._tabs.map((a,e)=>p`
                      ${this.hide.includes(a._title.replace(/ /g,"-").toLowerCase())?p``:p`
                        <a tabindex="${e+1}" class="navbar-item nav__item is-capitalized"
                          @click="${this.scrollToSection}"
                          data-name="${a._title.replace(/ /g,"-").toLowerCase()}"
                          pageGroup="${t._title.replace(/ /g,"-").toLowerCase()}"
                          page="${a._title.replace(/ /g,"-").toLowerCase()}">
                          
                          ${a._title}
                        </a>
                      `}
                    `)}
                  `)}
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    `}reloadPage(){window.location.reload()}redirectPage(){window.location.href="/"}addBlock(){this.shadowRoot.querySelector(".navbar-menu").classList.toggle("is-block")}scrollToSection(t){let o=t.target,a=o.getAttribute("pageGroup"),e=o.getAttribute("page");if(this._pageGroup===a){var g=t.target.getAttribute("data-name");let u=this.shadowRoot.querySelector(".navbar").offsetHeight;const l=document.getElementById(g),m=u;if(l){const b=document.body.getBoundingClientRect().top,i=l.getBoundingClientRect().top-b-m;window.scrollTo({top:i,behavior:"smooth"})}}else window.location.hash="#/"+a+"/"+e}static get is(){return"navbar-9"}init(t,o){super.init(t,o)}}customElements.define(y.is,y);const T=({element:s})=>{var h;const t=G(window.parsed_payload)._pageGroups,o=C(window.parsed_payload),{groupName:a}=P(),e=v.useRef(null),g=(h=o._response)==null?void 0:h.logo,[u,l]=v.useState(!1),m=R();v.useEffect(()=>{if(e.current&&s){e.current.e!==s&&(e.current.e=s),e.current&&o&&(e.current.logo=g),e.current.pageGroups!==t&&(e.current.pageGroups=t),e.current._pageGroup!==a&&(e.current._pageGroup=a),e.current.gateway!==o&&(e.current.gateway=o);const n=()=>{l(i=>!i)};return e.current.addEventListener("toggle-drawer",n),()=>{e.current&&e.current.removeEventListener("toggle-drawer",n)}}},[s,t,o,a]);const b=(n,i,c)=>{const f=n.target,d=i,$=c,w=f.getAttribute("data-name");if(a===d){const j=document.querySelector(".navbar").offsetHeight,_=document.querySelector(".main-content");if(_){const x=_.querySelector(`#${w}`);x?(x.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-j)):console.error(`Element with ID ${w} not found.`)}else console.error("Main content element not found.")}else m(`/${d}/${$}`);l(!1)};return r.jsx(r.Fragment,{children:s?r.jsxs(r.Fragment,{children:[r.jsx("navbar-9",{id:"navbar-9",ref:e}),r.jsx(B,{anchor:"left",open:u,onClose:()=>l(!1),children:r.jsx("div",{style:{width:240},children:r.jsx(N,{children:t.map((n,i)=>r.jsx(I.Fragment,{children:n._tabs.map((c,f)=>r.jsx(A,{button:!0,"data-name":c._title.replace(/ /g,"-").toLowerCase(),onClick:d=>b(d,n._title.replace(/ /g,"-").toLowerCase(),c._title.replace(/ /g,"-").toLowerCase()),children:r.jsx(D,{primary:c._title})},f))},i))})})})]}):r.jsx("p",{children:"Loading data..."})})},W=E(T);export{W as default};
