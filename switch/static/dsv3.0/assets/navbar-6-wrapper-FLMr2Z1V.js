import{i as y,r as E,g as C,k as w,a7 as G,bo as I,a as u,bp as N,j as a,bq as q,bf as A,al as D,bg as O,b3 as R}from"./index-C2PWchud.js";import{N as F}from"./navbar-base-W09osB0s.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const T=y`

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

`;class x extends F{static get styles(){return[E(C),T,y`
        :host {
          display: block;
        }
      `]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String}}}constructor(){super(),this.group=[],this.hide=[],this.pageGroups=[],this.prevScrollPos=0,this.drawerOpen=!1,this._pageGroup="",this.logo=""}render(){return w`

      <div class="bind-box has-background-dark">
          <div class="block">
              <nav class="navbar has-background-dark">
                <div class="navbar-brand">
                  <a class="navbar-item" href="#">
                    <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                  </a>
                  <a role="button" class="navbar-burger is-active flexthis" aria-label="menu" aria-expanded="false" >
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu is-active">
                  <div class="navbar-end">
                  ${this.pageGroups.map((n,s)=>w`
                  <a href="${window.location.pathname+window.location.search}#/${n._title.replace(/ /g,"-").toLowerCase()}/${n._tabs[0]._title.replace(/ /g,"-").toLowerCase()}/" 
                  class="navbar-item ${s==this._pageGroup?"is-purple":""}" >
                      ${n._title}
                  </a>`)}
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `}static get is(){return"navbar-6"}}customElements.define(x.is,x);const z=({element:r,pageGroups:n,currentPageGroupName:s,gatewayData:d})=>{var h;const l=JSON.parse(n),b=I(window.parsed_payload)._response,e=u.useRef(null),_=(h=d._response)==null?void 0:h.logo,[k,p]=u.useState(!1),j=N();u.useEffect(()=>{if(e.current&&r){e.current.e!==r&&(e.current.e=r),e.current&&d&&(e.current.logo=_),e.current.pageGroups!==l&&(e.current.pageGroups=l),e.current._pageGroup!==s&&(e.current._pageGroup=s),e.current.gateway!==b&&(e.current.gateway=b);const t=()=>{p(o=>!o)};return e.current.addEventListener("toggle-drawer",t),()=>{e.current&&e.current.removeEventListener("toggle-drawer",t)}}},[r,l,d,s]);const L=(t,o,i)=>{const g=t.target,c=o,S=i,v=g.getAttribute("data-name");if(s===c){const $=document.querySelector(".navbar").offsetHeight,m=document.querySelector(".main-content");if(m){const f=m.querySelector(`#${v}`);f?(f.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-$)):console.error(`Element with ID ${v} not found.`)}else console.error("Main content element not found.")}else j(`/${c}/${S}`);p(!1)};return a.jsx(a.Fragment,{children:r?a.jsxs(a.Fragment,{children:[a.jsx("navbar-6",{id:"navbar-6",ref:e}),a.jsx(q,{anchor:"left",open:k,onClose:()=>p(!1),children:a.jsx("div",{style:{width:240},children:a.jsx(A,{children:l.map((t,o)=>a.jsx(D.Fragment,{children:t._tabs.map((i,g)=>a.jsx(O,{button:!0,"data-name":i._title.replace(/ /g,"-").toLowerCase(),onClick:c=>L(c,t._title.replace(/ /g,"-").toLowerCase(),i._title.replace(/ /g,"-").toLowerCase()),children:a.jsx(R,{primary:i._title})},g))},o))})})})]}):a.jsx("p",{children:"Loading data..."})})},J=G(z);export{J as default};
