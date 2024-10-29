import{i as y,r as E,g as C,k as v,a7 as G,bo as I,a as h,bp as N,j as t,bq as q,bf as A,al as D,bg as O,b3 as R}from"./index-C2PWchud.js";import{N as T}from"./navbar-base-W09osB0s.js";import"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const F=y`
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

`;class x extends T{static get styles(){return[E(C),F,y`
        :host {
          display: block;
        }
      `]}static get properties(){return{group:{type:Array},hide:{type:Array},pageGroups:{type:Array},_pageGroup:{type:String},logo:{type:String},gateway:{type:String}}}constructor(){super(),this.group=[],this.gateway={},this.hide=[],this.pageGroups=[],this.prevScrollPos=0,this.drawerOpen=!1,this._pageGroup="",this.logo=""}render(){return v`

    <div class="bind-box has-background-dark">
          <div class="block">
            <nav class="level has-text-white">
            <p id="site-name" class="level-item has-text-centered has-text-weight-semibold">
              <a class="link">${this.gateway.name}</a>
            </p>
            ${this.pageGroups.map((o,s)=>v`
            <p class="level-item has-text-centered">
            <a href="${window.location.pathname+window.location.search}#/${o._title.replace(/ /g,"-").toLowerCase()}/${o._tabs[0]._title.replace(/ /g,"-").toLowerCase()}/" 
            class="link is-info ${s==this._pageGroup?"is-active":""}" >
                ${o._title}
            </a>
            </p>
            `)}
          </nav>
        </div>
      </div>



     `}static get is(){return"navbar-3"}}customElements.define(x.is,x);const z=({element:a,pageGroups:o,currentPageGroupName:s,gatewayData:p})=>{var b;const l=JSON.parse(o),u=I(window.parsed_payload)._response,e=h.useRef(null),_=(b=p._response)==null?void 0:b.logo,[k,d]=h.useState(!1),j=N();h.useEffect(()=>{if(e.current&&a){e.current.e!==a&&(e.current.e=a),e.current&&p&&(e.current.logo=_),e.current.pageGroups!==l&&(e.current.pageGroups=l),e.current._pageGroup!==s&&(e.current._pageGroup=s),e.current.gateway!==u&&(e.current.gateway=u);const r=()=>{d(n=>!n)};return e.current.addEventListener("toggle-drawer",r),()=>{e.current&&e.current.removeEventListener("toggle-drawer",r)}}},[a,l,p,s]);const L=(r,n,i)=>{const g=r.target,c=n,S=i,f=g.getAttribute("data-name");if(s===c){const $=document.querySelector(".navbar").offsetHeight,m=document.querySelector(".main-content");if(m){const w=m.querySelector(`#${f}`);w?(w.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-$)):console.error(`Element with ID ${f} not found.`)}else console.error("Main content element not found.")}else j(`/${c}/${S}`);d(!1)};return t.jsx(t.Fragment,{children:a?t.jsxs(t.Fragment,{children:[t.jsx("navbar-3",{id:"navbar-3",ref:e}),t.jsx(q,{anchor:"left",open:k,onClose:()=>d(!1),children:t.jsx("div",{style:{width:240},children:t.jsx(A,{children:l.map((r,n)=>t.jsx(D.Fragment,{children:r._tabs.map((i,g)=>t.jsx(O,{button:!0,"data-name":i._title.replace(/ /g,"-").toLowerCase(),onClick:c=>L(c,r._title.replace(/ /g,"-").toLowerCase(),i._title.replace(/ /g,"-").toLowerCase()),children:t.jsx(R,{primary:i._title})},g))},n))})})})]}):t.jsx("p",{children:"Loading data..."})})},J=G(z);export{J as default};
