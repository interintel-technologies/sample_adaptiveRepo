import{i as x,r as C,g as S,k as I,a7 as N,bo as q,a as b,bp as D,j as e,bq as R,bf as T,al as $,bg as B,b3 as F}from"./index-C2PWchud.js";import{N as H}from"./navbar-base-W09osB0s.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const O=x`
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
`;class h extends H{static get styles(){return[C(S),O,x`
      :host{
        display: block;
      }
      `]}render(){return I`

    <div class="bind-box">
        <nav class="navbar">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
              </a>
            </div>
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>

              <a class="navbar-item">
                About
              </a>

              <a class="navbar-item">
                Portfolio
              </a>

              <a class="navbar-item">
                Blog
              </a>

              <a class="navbar-item">
                Contacts
              </a>
            </div>
            <div class="navbar-end">
              <div class="field">
                <p class="control">
                    <span class="icon">
                      <i class="fab fa-facebook"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-instagram"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-pinterest-p"></i>
                    </span>
                    <span class="icon">
                      <i class="fab fa-google-plus"></i>
                    </span>
                  <a role="button" class="navbar- flexthis" aria-label="menu" aria-expanded="false" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </p>
              </div>
            </div>
          </nav>
        </div>

     `}static get is(){return"navbar-13"}}customElements.define(h.is,h);const z=({element:t,pageGroups:w,currentPageGroupName:o,gatewayData:c})=>{var f;const i=JSON.parse(w),g=q(window.parsed_payload)._response,a=b.useRef(null),y=(f=c._response)==null?void 0:f.logo,[j,d]=b.useState(!1),k=D();b.useEffect(()=>{if(a.current&&t){a.current.e!==t&&(a.current.e=t),a.current&&c&&(a.current.logo=y),a.current.pageGroups!==i&&(a.current.pageGroups=i),a.current._pageGroup!==o&&(a.current._pageGroup=o),a.current.gateway!==g&&(a.current.gateway=g);const s=()=>{d(r=>!r)};return a.current.addEventListener("toggle-drawer",s),()=>{a.current&&a.current.removeEventListener("toggle-drawer",s)}}},[t,i,c,o]);const E=(s,r,n)=>{const p=s.target,l=r,L=n,u=p.getAttribute("data-name");if(o===l){const _=document.querySelector(".navbar").offsetHeight,v=document.querySelector(".main-content");if(v){const m=v.querySelector(`#${u}`);m?(m.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-_)):console.error(`Element with ID ${u} not found.`)}else console.error("Main content element not found.")}else k(`/${l}/${L}`);d(!1)};return e.jsx(e.Fragment,{children:t?e.jsxs(e.Fragment,{children:[e.jsx("navbar-13",{id:"navbar-13",ref:a}),e.jsx(R,{anchor:"left",open:j,onClose:()=>d(!1),children:e.jsx("div",{style:{width:240},children:e.jsx(T,{children:i.map((s,r)=>e.jsx($.Fragment,{children:s._tabs.map((n,p)=>e.jsx(B,{button:!0,"data-name":n._title.replace(/ /g,"-").toLowerCase(),onClick:l=>E(l,s._title.replace(/ /g,"-").toLowerCase(),n._title.replace(/ /g,"-").toLowerCase()),children:e.jsx(F,{primary:n._title})},p))},r))})})})]}):e.jsx("p",{children:"Loading data..."})})},J=N(z);export{J as default};
