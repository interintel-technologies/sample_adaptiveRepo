import{i as g,k as S,a7 as z,bo as C,a as u,bp as M,j as a,bq as D,bf as I,al as N,bg as q,b3 as $}from"./index-C2PWchud.js";import{N as R}from"./navbar-base-W09osB0s.js";import"./fa-icon-COAiXmZs.js";import"./base-element-5lxvCIHt.js";import"./lit-html-dRijB2IX.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const U=g`
nav {
	font-size: 16px;
}
.bind-box {
	margin-bottom: 1.5rem;
	background-color: #4a4a4a!important;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
	color: white;
    display: block;
    padding: 1.25rem 4.5rem;
    
}
#site-name {
	font-size: 25px;
}

.icon{
  margin: 0px 3px;
}
`;/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const B=g`

`;class w extends R{constructor(){super()}static get properties(){return{darkMode:{type:Boolean,reflect:!0}}}get styles(){return console.log("dark mode"),[this.darkModeUpdator,g`
        :host {
          display: block;
        }
      `]}render(){return S`
  
    <div class="bind-box">
      <div class="block">
        <nav class="level">
            <div class="has-text-left">
              <p class="control">
                <span class="icon">
                <fa-icon class="fab fa-facebook-square" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-instagram" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-twitter" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-pinterest-p" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-google-plus" color="#ffffff" size="16px"></fa-icon>
                </span>
              </p>
            </div>
          <p class="level-item has-text-centered">
            <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
          </p>
          <p class="level-item has-text-centered">
            <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </p>
        </nav>
      </div>
    </div>


     `}firstUpdated(l){super.firstUpdated(l)}darkModeUpdator(){return this.darkMode=this.e.details.darkMode,this.darkMode?U:B}static get is(){return"navbar-8"}}customElements.define(w.is,w);const F=({element:s,pageGroups:l,currentPageGroupName:o,gatewayData:f})=>{var m;const i=JSON.parse(l),b=C(window.parsed_payload)._response,e=u.useRef(null),k=(m=f._response)==null?void 0:m.logo,[y,p]=u.useState(!1),j=M();u.useEffect(()=>{if(e.current&&s){e.current.e!==s&&(e.current.e=s),e.current&&f&&(e.current.logo=k),e.current.pageGroups!==i&&(e.current.pageGroups=i),e.current._pageGroup!==o&&(e.current._pageGroup=o),e.current.gateway!==b&&(e.current.gateway=b);const t=()=>{p(r=>!r)};return e.current.addEventListener("toggle-drawer",t),()=>{e.current&&e.current.removeEventListener("toggle-drawer",t)}}},[s,i,f,o]);const E=(t,r,n)=>{const d=t.target,c=r,L=n,h=d.getAttribute("data-name");if(o===c){const _=document.querySelector(".navbar").offsetHeight,x=document.querySelector(".main-content");if(x){const v=x.querySelector(`#${h}`);v?(v.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-_)):console.error(`Element with ID ${h} not found.`)}else console.error("Main content element not found.")}else j(`/${c}/${L}`);p(!1)};return a.jsx(a.Fragment,{children:s?a.jsxs(a.Fragment,{children:[a.jsx("navbar-8",{id:"navbar-8",ref:e}),a.jsx(D,{anchor:"left",open:y,onClose:()=>p(!1),children:a.jsx("div",{style:{width:240},children:a.jsx(I,{children:i.map((t,r)=>a.jsx(N.Fragment,{children:t._tabs.map((n,d)=>a.jsx(q,{button:!0,"data-name":n._title.replace(/ /g,"-").toLowerCase(),onClick:c=>E(c,t._title.replace(/ /g,"-").toLowerCase(),n._title.replace(/ /g,"-").toLowerCase()),children:a.jsx($,{primary:n._title})},d))},r))})})})]}):a.jsx("p",{children:"Loading data..."})})},A=z(F);export{A as default};
