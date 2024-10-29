import{i as f,h as L,r as S,g as C,k as i,a7 as E,br as D,bo as j,bs as F,a as m,bp as z,j as r,bq as P,bf as I,al as q,bg as T,b3 as G}from"./index-C2PWchud.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const A=f`

.section11{
    position:relative;
}
.navbar-link:hover {
    background-color: var(--md-sys-color-surfaceContainerLowest) !important;
    color: var(--grey-dark) !important;
}
.navbar-item.has-dropdown:hover .navbar-link{
    background-color:  var(--default) !important;
    color:var(--grey-dark) !important;
}
.navbar-link{
   font-weight:500 !important;
}
.navbar-link:not(.is-arrowless)::after {
    border-color:var(--primary)!important;
    margin-top: -.375em;
    right: 1.125em;
}
.signup-btn {
    display: block;
    background-color: var(--primary) !important;
    color: var(--white);
    border-radius: var(--CornerMedium);
    font-weight:700;
    font-size: 16px;
    font-weight: inherit;
    height: fit-content;
    padding: 7px 26px;
    line-height:19.5px;
    margin: 7px;
    text-align: center;
    align-self: center;
}
.signup-btn:hover {
    padding: 6px 25px;
    border: 1px solid var(--white);
}
.ii__container-main{
    margin: 0 auto;
    padding: 0 90px;
    background: rgba(255, 255, 255, 0.55) !important;
    backdrop-filter: blur(24px);
}
/* header */
.ii__main-header{
    background-color: transparent !important;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 1px 0 0 rgb(183,183,183);
    background: transparent !important;
    transition: top 0.3s ease-in-out;
    width: 100%; /* Make sure header does not exceed parent container */
    box-sizing: border-box; /* Include padding and border in width */
}
.navbar{
    background: transparent;
    height: 3.5em;
    background-color:transparent !important;
}

/**.navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
} */
.ii__main-header.is-scroll {
    top: -100px;
    z-index: 100;
    /*transform: translateY(-100%);*/
    transition: top 0.3s ease-in-out;
}

.nav__item{
    font-weight: regular;
    font-size: 16px;
    
    font-weight: 450;
}
.navbar-brand{
    color: var(--primary) !important;
}
.nav__item:hover{

    position: relative;
    background-color: var(--md-sys-color-surfaceContainerLowest) !important;
    color: var(--secondary) !important;

}

.mobile-navbar-time:hover{

    /* Link */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 12px;
gap: 12px;


/* orange white linear */
background: var(--paper);
/* M3/Elevation Light/1 */
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
z-index: 0;
border-left:solid var(--primary) 2px;

}

.mobile-navbar-time:focus::after{
    position: absolute !important;
    width: 100%!important;
    border-bottom: none !important;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    z-index: 9999!important;
    content: ''!important;
    bottom: 0!important;
    left: 0!important;
    background-color:transparent !important;
    color:var(--secondary-color-invert) !important;
}

.nav__item:hover::after{
    position: absolute;
    width: 100%;
    border-left: 10px solid var(--primary);
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    z-index: 9999;
    content: '';
    bottom: 0;
    left: 0;
}
.navbar-dropdown{
    background-color:var(--md-sys-color-surfaceContainerLowest) !important;
    border-radius:5px;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08) !important;
    border:.5px solid rgba(0, 0, 0, 0.08);
    width:150px !important;

}

.nav__item:focus::after{
    position: absolute !important;
    width: 100%!important;
    border-bottom: 5px solid var(--primary) !important;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    z-index: 9999!important;
    content: ''!important;
    bottom: 0!important;
    left: 0!important;
    background-color:transparent !important;
    color:var(--secondary-color-invert) !important;
}
a.navbar-item{
    font-weight:600 !important;
    font-size:12px !important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
    color:var(--grey-dark) !important;
    font-weight:600 !important;
    background-color:transparent !important;
}
.show{
    display:block !important;
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
    background-color: transparent!important;
}

.drawer-content{
    background: var(--primary);
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);

}
.navbar-burger{
    color:var(--secondary)!important;
}
adaptive-ui-icon{
    fill: var(--Background-Default-Light, #FFF);
    stroke-width: 0.319px;
    stroke: var(--primary);
    filter: drop-shadow(0px 1.276px 6.379px rgba(162, 26, 76, 0.20));
    fill:  #FFF;
    width:1.125rem;
}
.iconCol{
    display:flex;
    justify-content:center;  
}
.iconCol .icon{
    border-radius: 5px;
    border: 0.313px solid var(--primary);
    background: #FFF;
    box-shadow: 0px 1.253px 6.263px 0px rgba(162, 26, 76, 0.20);
    padding:.5rem;
}
.infoCol{
    display:flex;
    justify-content:flex-start;  
}
.serviceCol:hover{
    background-color:#FFF9EC;
    border-radius:5px;
    cursor:pointer;
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
    .signup-btn {
        border-radius: 0px;
        text-align: left;
        margin: 0px;
    }
    .navbar-menu{
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.5) !important;
    }
}
    @media(max-width:768px){
    .navbar-dropdown{
        width: 80vw !important; 
        display:none;
    }
}

`;class B extends L{static get styles(){return[S(C),A,f`
        .drawer {
          position: absolute;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 1000;
          display: none;
          background: var(--paper);
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
        }

        .drawer.open {
          transform: translateX(0);
        }

        .drawer-content {
          padding: 20px;
        }

        @media (max-width: 1023px) {
          .drawer {
            display: block;
          }
        }
      `]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String},drawerOpen:{type:Boolean},e:{type:Object}}}constructor(){super(),this.group=[],this.hide=[],this.pageGroups=[],this._pageGroup="",this.logo="",this.drawerOpen=!1,this.prevScrollPos=0,this.e=null}updated(t){if(t.has("e")){this.group=this.e&&this.e.details.group,this.hide=this.e&&this.e.details.hide;const e=document.querySelector(".page");e&&e.addEventListener("scroll",this.handleScroll.bind(this))}}handleScroll(){const t=this.shadowRoot.querySelector(".ii__main-header"),e=this.querySelector(".page");if(e){const a=e.scrollTop;a>850?a<this.prevScrollPos?(t.classList.remove("slideUp"),t.classList.add("slideDown")):(t.classList.add("slideUp"),t.classList.remove("slideDown")):(t.classList.remove("slideUp"),t.classList.add("slideDown")),this.prevScrollPos=a}}reloadPage(){window.location.reload()}redirectPage(){window.location.href="/"}handleDrawerToggle(){this.drawerOpen=!this.drawerOpen,this.requestUpdate()}addBlock(){this.handleDrawerToggle(),this.dispatchEvent(new CustomEvent("toggle-drawer",{bubbles:!0,composed:!0}))}scrollToSection(t){let e=t.target,a=e.getAttribute("pageGroup"),o=e.getAttribute("page");if(this._pageGroup===a){let c=e.getAttribute("data-name");const g=document.querySelector(".main-content");if(g){const s=g.querySelector(`#${c}`);s?s.scrollIntoView({behavior:"smooth"}):console.error(`Element with ID ${c} not found.`)}}else window.location.hash=`#/${a}/${o}`}showDropDown(){const t=this.shadowRoot.querySelector(".navbar-dropdown");t==null||t.classList.toggle("show")}render(){return i`
      <div class="content">
        <div id="section11" class="bind-box">
          <header class="ii__main-header">
            <div class="ii__container-main">
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
                    <img src=${this.logo} />
                  </a>
                  <a
                    role="button"
                    class="navbar-burger burger"
                    @click=${this.addBlock}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                  >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-end">
                    ${this.e&&this.e.details.groupTitle?i`
                      <div class="navbar-item has-dropdown is-hoverable" @click=${this.showDropDown}>
                        <a class="navbar-link navbar-item ">${this.e.details.groupTitle}</a>
                        <div class="navbar-dropdown is-boxed">
                       
                          ${this.pageGroups.map((t,e)=>i`
                            ${this.group&&this.group.includes(t._title)||this.hide&&this.hide.includes(t._title)?i`
                             
                                    <a 
                                      pageGroup="${t._title.replace(/ /g,"-").toLowerCase()}" 
                                      class="navbar-item li-page"
                                      @click="${this.scrollToSection}"  
                                      data-name="${t._tabs[0]._title.replace(/ /g,"-").toLowerCase()}"
                                      page="${t._tabs[0]._title.replace(/ /g,"-").toLowerCase()}">
                                      ${t._title}
                                    </a>
                               
                              </div>`:""}
                          `)}
                       
                      </div>
                      
                      </div>
                    `:""}
                    ${this.pageGroups.map(t=>i`
                      ${this.group&&this.group.includes(t._title)?"":i`
                        ${this.hide&&this.hide.includes(t._title)?"":i`
                          ${t._tabs.map((e,a)=>i`
                            ${this.hide&&this.hide.includes(e._title)?"":i`
                              <a tabindex="${a+1}"
                                class="${["Sign Up","Sign up","Register","Donate to Support"].includes(e._title)?"signup-btn":"navbar-item nav__item is-capitalized"}"
                                @click="${this.scrollToSection}"
                                data-name="${e._title.replace(/ /g,"-").toLowerCase()}"
                                pageGroup="${t._title.replace(/ /g,"-").toLowerCase()}"
                                page="${e._title.replace(/ /g,"-").toLowerCase()}">
                                ${e._title}
                              </a>
                            `}
                          `)}
                        `}
                      `}
                    `)}
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </div>
    `}}customElements.define("navbar-15",B);const N=({element:d})=>{var u;const t=D(window.parsed_payload)._pageGroups,e=j(window.parsed_payload),{groupName:a}=F(),o=m.useRef(null),c=(u=e._response)==null?void 0:u.logo,[g,s]=m.useState(!1),y=z();m.useEffect(()=>{if(o.current&&d){o.current.e=d,o.current.logo=c,o.current.pageGroups=t,o.current._pageGroup=a;const n=()=>{s(l=>!l)};return o.current.addEventListener("toggle-drawer",n),()=>{o.current&&o.current.removeEventListener("toggle-drawer",n)}}},[d,e,a]);const _=(n,l,p)=>{const h=n.target,b=l,k=p,x=h.getAttribute("data-name");if(currentPageGroupName===b){const $=document.querySelector(".navbar").offsetHeight,v=document.querySelector(".main-content");if(v){const w=v.querySelector(`#${x}`);w?(w.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-$)):console.error(`Element with ID ${x} not found.`)}else console.error("Main content element not found.")}else y(`/${b}/${k}`);s(!1)};return r.jsx(r.Fragment,{children:d?r.jsxs(r.Fragment,{children:[r.jsx("navbar-15",{id:"navbar-15",ref:o}),r.jsx(P,{anchor:"left",open:g,onClose:()=>s(!1),children:r.jsx("div",{style:{width:240},children:r.jsx(I,{children:t.map((n,l)=>r.jsx(q.Fragment,{children:n._tabs.map((p,h)=>r.jsx(T,{button:!0,"data-name":p._title.replace(/ /g,"-").toLowerCase(),onClick:b=>_(b,n._title.replace(/ /g,"-").toLowerCase(),p._title.replace(/ /g,"-").toLowerCase()),children:r.jsx(G,{primary:p._title})},h))},l))})})})]}):r.jsx("p",{children:"Loading data..."})})},R=E(N);export{R as default};
