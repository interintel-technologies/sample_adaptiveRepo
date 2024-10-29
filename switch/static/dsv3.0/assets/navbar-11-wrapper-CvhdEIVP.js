import{i as x,r as $,g as _,k as C,a7 as P,bo as q,a as d,bp as I,j as t,bq as L,bf as R,al as D,bg as H,b3 as A}from"./index-C2PWchud.js";import{N as B}from"./navbar-base-W09osB0s.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const F=x`
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
`;class w extends B{static get styles(){return[$(_),F,x`
      :host{
        display: block;
      }
      `]}render(){return C`
      <div class="bind-box">
          <div class="block">
              <nav class="navbar">
                <div class="navbar-brand">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                  </a>
                </div>
                <div class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active" @click="${()=>this.activePage("home")}">
                      Home
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("products")}">
                      Products
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("services")}">
                      Services
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("about-us")}">
                      About Us
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("help")}">
                      Help
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("contacts")}">
                      Contacts
                    </a>
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-small is-rounded is-primary"  @click="${()=>this.activePage("buy-now")}">Buy now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `}activePage(c){const e=this.shadowRoot.querySelector(".navbar-menu").querySelectorAll("a"),r="button is-small is-rounded is-primary";c==="home"?(e.forEach(a=>a.className="navbar-item"),e[0].className="navbar-item is-active",e[6].className=r):c==="products"?(e.forEach(a=>a.className="navbar-item"),e[1].className="navbar-item is-active",e[6].className=r):c==="services"?(e.forEach(a=>a.className="navbar-item"),e[2].className="navbar-item is-active",e[6].className=r):c==="about-us"?(e.forEach(a=>a.className="navbar-item"),e[3].className="navbar-item is-active",e[6].className=r):c==="help"?(e.forEach(a=>a.className="navbar-item"),e[4].className="navbar-item is-active",e[6].className=r):c==="contacts"&&(e.forEach(a=>a.className="navbar-item"),e[5].className="navbar-item is-active",e[6].className=r)}static get is(){return"navbar-11"}}customElements.define(w.is,w);const O=({element:n,pageGroups:c,currentPageGroupName:e,gatewayData:r})=>{var g;const a=JSON.parse(c),u=q(window.parsed_payload)._response,s=d.useRef(null),y=(g=r._response)==null?void 0:g.logo,[N,v]=d.useState(!1),E=I();d.useEffect(()=>{if(s.current&&n){s.current.e!==n&&(s.current.e=n),s.current&&r&&(s.current.logo=y),s.current.pageGroups!==a&&(s.current.pageGroups=a),s.current._pageGroup!==e&&(s.current._pageGroup=e),s.current.gateway!==u&&(s.current.gateway=u);const i=()=>{v(o=>!o)};return s.current.addEventListener("toggle-drawer",i),()=>{s.current&&s.current.removeEventListener("toggle-drawer",i)}}},[n,a,r,e]);const k=(i,o,l)=>{const b=i.target,m=o,j=l,p=b.getAttribute("data-name");if(e===m){const S=document.querySelector(".navbar").offsetHeight,h=document.querySelector(".main-content");if(h){const f=h.querySelector(`#${p}`);f?(f.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-S)):console.error(`Element with ID ${p} not found.`)}else console.error("Main content element not found.")}else E(`/${m}/${j}`);v(!1)};return t.jsx(t.Fragment,{children:n?t.jsxs(t.Fragment,{children:[t.jsx("navbar-11",{id:"navbar-11",ref:s}),t.jsx(L,{anchor:"left",open:N,onClose:()=>v(!1),children:t.jsx("div",{style:{width:240},children:t.jsx(R,{children:a.map((i,o)=>t.jsx(D.Fragment,{children:i._tabs.map((l,b)=>t.jsx(H,{button:!0,"data-name":l._title.replace(/ /g,"-").toLowerCase(),onClick:m=>k(m,i._title.replace(/ /g,"-").toLowerCase(),l._title.replace(/ /g,"-").toLowerCase()),children:t.jsx(A,{primary:l._title})},b))},o))})})})]}):t.jsx("p",{children:"Loading data..."})})},W=P(O);export{W as default};
