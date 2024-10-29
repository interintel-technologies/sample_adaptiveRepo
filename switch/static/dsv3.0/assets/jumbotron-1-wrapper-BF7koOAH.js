import{i,r as n,g as a,k as d,a as o,j as r}from"./index-C2PWchud.js";import{B as m}from"./base-element-5lxvCIHt.js";import{u as c}from"./utils-mixin-D5aAiqNi.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const l=i`

#nav-section{
    background-color: var(--paper);
    max-width: 1520px; 
    height: 220px;
    padding: 2rem 8.75rem 0px 8.25rem;
    margin-bottom: 6rem;
  }

  #nav-title {
    float: right;
    color: var(--md-sys-color-onPrimaryContainer);
    font-weight: bold;
    font-size: 10px;
  }
  #page-title{
    color: var(--md-sys-color-onPrimaryContainer);
    font-size: 36px;
    line-height: 48px;
  }

`,p=class extends c(m){static get is(){throw new DOMException("Extending [JumbotronBaseBase] must implement `static get is()`")}firstUpdated(t){super.firstUpdated(t)}init(t,e){super.init(t,e)}};class s extends p{static get styles(){return[n(a),l,i`
        :host {
          display: block;
        }
      `]}render(){return d`   
    <section id="nav-section" class="hero">
      <div class="hero-body">
        <div id="nav-title">NAVIGATION</div>
        <div id="page-title">System-wide elements, Navigation<br /> &amp; Step-Menus</div>
      </div>
    </section>
     `}static get is(){return"jumbotron-1"}}customElements.define(s.is,s);const f=({element:t})=>{const e=o.useRef(null);return o.useEffect(()=>{e.current&&t&&(e.current.e=t)},[t]),r.jsx("div",{children:t?r.jsx("jumbotron-1",{id:"jumbotron-1",ref:e}):r.jsx("p",{children:"Loading data..."})})};export{f as default};
