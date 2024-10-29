import{i as w,r as L,g as C,k as I,a7 as G,bo as N,a as b,bp as O,j as a,bq as $,bf as q,al as A,bg as D,b3 as F}from"./index-C2PWchud.js";import{N as R}from"./navbar-base-W09osB0s.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const z=w`
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

.bind-box-4block-left {
  padding: 0 0 0 4.5rem;
}

.has-text-white a {
 	color: #fff;
 }

#site-name {
	font-size: 25px;
}

`;class x extends R{static get styles(){return[L(C),z,w`
        :host {
          display: block;
        }
      `]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String},gateway:{type:Object}}}constructor(){super(),this.group=[],this.hide=[],this.pageGroups=[],this.prevScrollPos=0,this.drawerOpen=!1,this._pageGroup="",this.logo="",this.gateway={}}updated(c){c.has("e")}render(){return I`

    <div class="bind-box is-paddingless">
          <div class="block bind-box-4block-left">
              <div class="columns">
                <div class="column is-half">
                  <nav class="navbar">
                    <div class="navbar-brand">
                      <a class="navbar-item" href="#">
                        <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                      </a>
                      <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="column has-background-dark">
                  <div class="navbar-menu is-active is-size-7 is-uppercase has-text-white">
                    <div class="navbar-end block">
                      <a class="navbar-item has-text-weight-semibold">
                        Sign Up
                      </a>
                      <a class="navbar-item">
                        Sign In
                      </a>
                      <div class="bind-box-4block-right"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>


     `}static get is(){return"navbar-5"}}customElements.define(x.is,x);const T=({element:r,pageGroups:c,currentPageGroupName:i,gatewayData:d})=>{var v;const o=JSON.parse(c),u=N(window.parsed_payload)._response,e=b.useRef(null),y=(v=d._response)==null?void 0:v.logo,[k,p]=b.useState(!1),j=O();b.useEffect(()=>{if(e.current&&r){e.current.e!==r&&(e.current.e=r),e.current&&d&&(e.current.logo=y),e.current.pageGroups!==o&&(e.current.pageGroups=o),e.current._pageGroup!==i&&(e.current._pageGroup=i),e.current.gateway!==u&&(e.current.gateway=u);const t=()=>{p(s=>!s)};return e.current.addEventListener("toggle-drawer",t),()=>{e.current&&e.current.removeEventListener("toggle-drawer",t)}}},[r,o,d,i]);const S=(t,s,n)=>{const g=t.target,l=s,_=n,h=g.getAttribute("data-name");if(i===l){const E=document.querySelector(".navbar").offsetHeight,f=document.querySelector(".main-content");if(f){const m=f.querySelector(`#${h}`);m?(m.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-E)):console.error(`Element with ID ${h} not found.`)}else console.error("Main content element not found.")}else j(`/${l}/${_}`);p(!1)};return a.jsx(a.Fragment,{children:r?a.jsxs(a.Fragment,{children:[a.jsx("navbar-5",{id:"navbar-5",ref:e}),a.jsx($,{anchor:"left",open:k,onClose:()=>p(!1),children:a.jsx("div",{style:{width:240},children:a.jsx(q,{children:o.map((t,s)=>a.jsx(A.Fragment,{children:t._tabs.map((n,g)=>a.jsx(D,{button:!0,"data-name":n._title.replace(/ /g,"-").toLowerCase(),onClick:l=>S(l,t._title.replace(/ /g,"-").toLowerCase(),n._title.replace(/ /g,"-").toLowerCase()),children:a.jsx(F,{primary:n._title})},g))},s))})})})]}):a.jsx("p",{children:"Loading data..."})})},J=G(T);export{J as default};
