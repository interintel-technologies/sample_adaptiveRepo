import{i as y,h as L,r as C,g as E,k as i,bn as D,br as j,bo as z,bs as F,a as u,bp as I,j as o,bq as q,bf as G,al as P,bg as T,b3 as A}from"./index-C2PWchud.js";const R=y`
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
    box-shadow: var(--mui-shadows-3);
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
    padding:1.5rem !important;
    width:350px !important;
    left:-7.25rem !important;
}

.nav__item:focus::after{
    position: absolute !important;
    width: 100%!important;
    border-bottom: 5px  solid var(--primary) !important;
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




`;class f extends L{static get styles(){return[C(E),R,y`
		.drawer {
			position: absolute;
			top: 0;
			left: 0; /* Slide from the left */
			width: 250px; /* Adjust the width as needed */
			height: 100%;
			transform: translateX(-100%); /* Slide out to the left */
			transition: transform 0.3s ease;
			z-index: 1000;
			display: none; /* Hide by default */
      background: var(--paper);
      /* M3/Elevation Light/1 */
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);


      
		  }
		  
		  .drawer.open {
			transform: translateX(0); /* Slide in from the left */
		  }
		  
		  .drawer-content {
			padding: 20px;
		  }
		  
		  /* Show drawer only on small devices */
		  @media (max-width: 1023px) {
			.drawer {
			  display: block; /* Show on small devices */
			}
		  }
		  
		`]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String},e:{type:Object}}}constructor(){super(),this.group=[],this.hide=[],this.pageGroups=[],this.prevScrollPos=0,this.drawerOpen=!1,this._pageGroup="",this.logo="",this.e=null}updated(t){if(t.has("e")){this.group=this.e&&this.e.details.group,this.hide=this.e&&this.e.details.hide,this.requestUpdate();const e=document.querySelector(".page");e&&e.addEventListener("scroll",()=>this.handleScroll())}}handleScroll(){const t=this.shadowRoot.querySelector(".ii__main-header"),e=this.querySelector(".page");if(e){const r=e.scrollTop;r>850?r<this.prevScrollPos?(t.classList.remove("slideUp"),t.classList.add("slideDown")):(t.classList.add("slideUp"),t.classList.remove("slideDown")):(t.classList.remove("slideUp"),t.classList.add("slideDown")),this.prevScrollPos=r}}reloadPage(){window.location.reload()}redirectPage(){window.location.href="/"}handleDrawerToggle(){this.drawerOpen=!this.drawerOpen,this.requestUpdate()}addBlock(){this.handleDrawerToggle();const t=new CustomEvent("toggle-drawer",{detail:{},bubbles:!0,composed:!0});this.dispatchEvent(t)}scrollToSection(t){t.target;let e=t.target.getAttribute("pageGroup"),r=t.target.getAttribute("page");if(this._pageGroup===e){let a=t.target.getAttribute("data-name");this.shadowRoot.querySelector(".navbar").offsetHeight;const s=document.querySelector(".main-content");if(s){const c=s.querySelector(`#${a}`);c?c.scrollIntoView({behavior:"smooth"}):console.error(`Element with ID ${a} not found.`)}else console.error("Main content element not found.")}else window.location.hash=`#/${e}/${r}`}showDropDown(){const t=this.shadowRoot.querySelector(".navbar-dropdown");t&&t.classList.toggle("show")}init(t,e){super.init(t,e)}static get is(){return"navbar-2"}render(){return i`
      <div class="content">
        <div id="section11" class="bind-box">
          <header class="ii__main-header">
            <div class="ii__container-main">
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
                  <img src=${`/media/${this.logo}`} />
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
                          <div class="navbar-item has-dropdown is-hoverable" @click=${()=>this.showDropDown()}>
                            <a class="navbar-link is-size-6">${this.e.details.groupTitle}</a>
                            <div class="navbar-dropdown">
                              <h3 class="mb-2">${this.e.details.groupTitle}</h3>
                              <div class="columns is-multiline is-mobile mt-3" style="gap:.75rem">
                                ${this.pageGroups&&this.pageGroups.length?this.pageGroups.map((t,e)=>i`
                                      ${this.group&&this.group.includes(t._title)?i`
                                            ${this.e.details.hide.includes(t._title)?"":i`
                                                  <div class="column is-5-desktop is-5-tablet is-5-mobile serviceCol">
                                                    <div class="columns is-mobile is-multiline">
                                                      <div class="column is-2 iconCol">
                                                        <span class="icon">
                                                          <adaptive-ui-icon icon=${t.icon}></adaptive-ui-icon>
                                                        </span>
                                                      </div>
                                                      <div class="column is-6 infoCol">
                                                        <a href="${window.location.pathname+window.location.search}#/${t._title.replace(/ /g,"-").toLowerCase()}/0/"
                                                          pageGroup="${t._title.replace(/ /g,"-").toLowerCase()}" class="navbar-item li-page">
                                                          ${t._title}
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                `}
                                          `:""}
                                    `):""}
                              </div>
                            </div>
                          </div>
                        `:""}
                    ${this.pageGroups&&this.pageGroups.length?this.pageGroups.map((t,e)=>i`
                          ${this.group&&this.group.includes(t._title.replace(/ /g,"-").toLowerCase())?"":i`
                                ${this.e.details.hide.includes(t._title)?"":i`
							
                                      ${t._tabs.map((r,a)=>i`
                                        ${this.e.details.hide&&this.e.details.hide.includes(r._title)?"":i`
                                              <a tabindex="${a+1}"
                                                class="${["Sign Up","Sign up","Register","Donate to Support"].includes(r._title)?"signup-btn":"navbar-item nav__item is-capitalized"}"
                                                @click="${s=>this.scrollToSection(s)}"
                                                data-name="${r._title.replace(/ /g,"-").toLowerCase()}"
                                                pageGroup="${t._title.replace(/ /g,"-").toLowerCase()}"
                                                page="${r._title.replace(/ /g,"-").toLowerCase()}">
                                                ${r._title}
                                              </a>
                                            `}
                                      `)}
                                    `}
                              `}
                        `):""}
                  </div>
                </div>
              </nav>
            </div>
          </header>
          
		 
        </div>
      </div>
    `}}customElements.define(f.is,f);const B=({element:l})=>{var b;const t=j(window.parsed_payload)._pageGroups,e=z(window.parsed_payload),{groupName:r}=F(),a=u.useRef(null),s=(b=e._response)==null?void 0:b.logo,[c,g]=u.useState(!1),_=I();u.useEffect(()=>{if(a.current&&l){a.current.e=l,a.current.logo=s,a.current.pageGroups=t,a.current._pageGroup=r;const n=()=>{g(d=>!d)};return a.current.addEventListener("toggle-drawer",n),()=>{a.current&&a.current.removeEventListener("toggle-drawer",n)}}},[l,e,r]);const k=(n,d,p)=>{const m=n.target,h=d,$=p,v=m.getAttribute("data-name");if(r===h){const S=document.querySelector(".navbar").offsetHeight,x=document.querySelector(".main-content");if(x){const w=x.querySelector(`#${v}`);w?(w.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-S)):console.error(`Element with ID ${v} not found.`)}else console.error("Main content element not found.")}else _(`/${h}/${$}`);g(!1)};return o.jsx(o.Fragment,{children:l?o.jsxs(o.Fragment,{children:[o.jsx("navbar-2",{id:"navbar-2",ref:a}),o.jsx(q,{anchor:"left",open:c,onClose:()=>g(!1),children:o.jsx("div",{style:{width:240},children:o.jsx(G,{children:t.map((n,d)=>o.jsx(P.Fragment,{children:n._tabs.map((p,m)=>o.jsx(T,{button:!0,"data-name":p._title.replace(/ /g,"-").toLowerCase(),onClick:h=>k(h,n._title.replace(/ /g,"-").toLowerCase(),p._title.replace(/ /g,"-").toLowerCase()),children:o.jsx(A,{primary:p._title})},m))},d))})})})]}):o.jsx("p",{children:"Loading data..."})})},U=D(B);export{U as default};
