import{i as x,r as S,g as C,k as I,a7 as N,bo as q,a as g,bp as D,j as a,bq as R,bf as T,al as $,bg as F,b3 as O}from"./index-C2PWchud.js";import{N as z}from"./navbar-base-W09osB0s.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const B=x`
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
`;class h extends z{static get styles(){return[S(C),B,x`
      :host{
        display: block;
      }
      `]}render(){return I`
   <div class="bind-box">
          <div class="block">
            <nav class="navbar is-dark">
              <div class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                  </a>
                </div>
                <div class="navbar-end">
                  <a class="navbar-link">
                    <figure class="image is-32x32">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                    </figure>
                  </a>
                  <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>


     `}static get is(){return"navbar-12"}}customElements.define(h.is,h);const G=({element:r,pageGroups:w,currentPageGroupName:o,gatewayData:c})=>{var b;const i=JSON.parse(w),u=q(window.parsed_payload)._response,e=g.useRef(null),y=(b=c._response)==null?void 0:b.logo,[j,d]=g.useState(!1),k=D();g.useEffect(()=>{if(e.current&&r){e.current.e!==r&&(e.current.e=r),e.current&&c&&(e.current.logo=y),e.current.pageGroups!==i&&(e.current.pageGroups=i),e.current._pageGroup!==o&&(e.current._pageGroup=o),e.current.gateway!==u&&(e.current.gateway=u);const t=()=>{d(s=>!s)};return e.current.addEventListener("toggle-drawer",t),()=>{e.current&&e.current.removeEventListener("toggle-drawer",t)}}},[r,i,c,o]);const E=(t,s,n)=>{const p=t.target,l=s,L=n,m=p.getAttribute("data-name");if(o===l){const _=document.querySelector(".navbar").offsetHeight,v=document.querySelector(".main-content");if(v){const f=v.querySelector(`#${m}`);f?(f.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-_)):console.error(`Element with ID ${m} not found.`)}else console.error("Main content element not found.")}else k(`/${l}/${L}`);d(!1)};return a.jsx(a.Fragment,{children:r?a.jsxs(a.Fragment,{children:[a.jsx("navbar-12",{id:"navbar-12",ref:e}),a.jsx(R,{anchor:"left",open:j,onClose:()=>d(!1),children:a.jsx("div",{style:{width:240},children:a.jsx(T,{children:i.map((t,s)=>a.jsx($.Fragment,{children:t._tabs.map((n,p)=>a.jsx(F,{button:!0,"data-name":n._title.replace(/ /g,"-").toLowerCase(),onClick:l=>E(l,t._title.replace(/ /g,"-").toLowerCase(),n._title.replace(/ /g,"-").toLowerCase()),children:a.jsx(O,{primary:n._title})},p))},s))})})})]}):a.jsx("p",{children:"Loading data..."})})},J=N(G);export{J as default};
