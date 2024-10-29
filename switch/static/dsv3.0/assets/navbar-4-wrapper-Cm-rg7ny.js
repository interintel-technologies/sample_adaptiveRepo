import{i as y,r as $,g as z,k as x,a7 as C,bo as I,a as f,bp as G,j as a,bq as N,bf as q,al as R,bg as A,b3 as D}from"./index-C2PWchud.js";import"./fa-icon-COAiXmZs.js";import{N as F}from"./navbar-base-W09osB0s.js";import"./lit-html-dRijB2IX.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const O=y`
nav {
	font-size: 16px;
}

.bind-box {
	margin-bottom: 1.5rem;
	background-color: white;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
	color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;
    
}

#site-name {
	font-size: 25px;
}

.has-text-white a {
 	color: #fff;
 }

`;class w extends F{static get styles(){return[$(z),O,y`
        :host {
          display: block;
        }
      `]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String},gateway:{type:String}}}constructor(){super(),this.group=[],this.gateway={},this.hide=[],this.pageGroups=[],this.prevScrollPos=0,this.drawerOpen=!1,this._pageGroup="",this.logo=""}render(){return x`
    <style>

nav {
	font-size: 16px;
}
      .bind-box {
	margin-bottom: 1.5rem;
	background-color: white;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
	color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;
   
}

.has-text-white a {
 	color: #fff;
 }

#site-name {
	font-size: 25px;
}

#section5 nav.navbar div.navbar-menu a.is-active {
    border-bottom-color: #3273dc;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    margin-bottom: -1px;
}
#section5 a.is-active:hover {
	border-bottom-color: #3273dc;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    color: #4a4a4a;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
}
.icon{
  margin: 0px 2px;
}

      </style>
    

    <div id="section5" class="bind-box has-background-dark has-text-white has-text-weight-semibold">
        <div class="block">
          <nav class="level">
              <!-- left side -->
              <div class="level-left">
                <div class="level-item">
                  <div class="field">
                    <p class="control">
                      <span class="icon">
                        <fa-icon class="fab fa-facebook-square" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-instagram" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-twitter" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-pinterest-p" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-google-plus" color="#fff" size="16px"></fa-icon>
                      </span>
                    </p>
                  </div>
                </div>
              </div>                                                        
              <!-- right side -->
              <div class="level-right">
                <p class="level-item"><a href="">EN - RU</a></p>
              </div>
            </nav>
              <hr class="navbar-divider" clear="all">
            <nav class="navbar has-background-dark has-text-white">
              <div id="site-name" class="navbar-brand has-text-weight-semibold">
                <a class="navbar-item" href="#">
                  <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                </a>
              </div>
              <div class="navbar-menu is-spaced is-active">
              ${this.pageGroups.map((o,r)=>x`
              <a href="${window.location.pathname+window.location.search}#/${o._title.replace(/ /g,"-").toLowerCase()}/${o._tabs[0]._title.replace(/ /g,"-").toLowerCase()}/" 
              class="navbar-item ${r==this._pageGroup?"is-active has-text-link":""}" >
                  ${o._title}
              </a>`)}
              </div>
              <div class="navbar-menu">
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-rounded is-small is-dark">Sign In</a>
                      <a class="button is-rounded is-small is-link">Sign Up</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        </div>
        </div>

     `}static get is(){return"navbar-4"}}customElements.define(w.is,w);const T=({element:s,pageGroups:o,currentPageGroupName:r,gatewayData:d})=>{var v;const l=JSON.parse(o),g=I(window.parsed_payload)._response,e=f.useRef(null),k=(v=d._response)==null?void 0:v.logo,[_,p]=f.useState(!1),S=G();f.useEffect(()=>{if(e.current&&s){e.current.e!==s&&(e.current.e=s),e.current&&d&&(e.current.logo=k),e.current.pageGroups!==l&&(e.current.pageGroups=l),e.current._pageGroup!==r&&(e.current._pageGroup=r),e.current.gateway!==g&&(e.current.gateway=g);const t=()=>{p(i=>!i)};return e.current.addEventListener("toggle-drawer",t),()=>{e.current&&e.current.removeEventListener("toggle-drawer",t)}}},[s,l,d,r]);const j=(t,i,n)=>{const b=t.target,c=i,L=n,m=b.getAttribute("data-name");if(r===c){const E=document.querySelector(".navbar").offsetHeight,h=document.querySelector(".main-content");if(h){const u=h.querySelector(`#${m}`);u?(u.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-E)):console.error(`Element with ID ${m} not found.`)}else console.error("Main content element not found.")}else S(`/${c}/${L}`);p(!1)};return a.jsx(a.Fragment,{children:s?a.jsxs(a.Fragment,{children:[a.jsx("navbar-4",{id:"navbar-4",ref:e}),a.jsx(N,{anchor:"left",open:_,onClose:()=>p(!1),children:a.jsx("div",{style:{width:240},children:a.jsx(q,{children:l.map((t,i)=>a.jsx(R.Fragment,{children:t._tabs.map((n,b)=>a.jsx(A,{button:!0,"data-name":n._title.replace(/ /g,"-").toLowerCase(),onClick:c=>j(c,t._title.replace(/ /g,"-").toLowerCase(),n._title.replace(/ /g,"-").toLowerCase()),children:a.jsx(D,{primary:n._title})},b))},i))})})})]}):a.jsx("p",{children:"Loading data..."})})},M=C(T);export{M as default};
