import{i as n,r as o,g as p,k as l,a as r,j as e}from"./index-C2PWchud.js";import"./iron-icons-CfX5YBfy.js";import"./iron-icon-Ci-yo7Ra.js";import{B as c}from"./base-element-5lxvCIHt.js";import{u as m}from"./utils-mixin-D5aAiqNi.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./polymer-legacy-CVdXdTHq.js";import"./iron-flex-layout-C17s8gyg.js";const u=class extends m(c){static get is(){return"login-mipay"}constructor(){super(),this.addEventListener("click",i=>{i.preventDefault(),this.pl._dialog(this.e.service,this.params)})}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}firstUpdated(i){super.firstUpdated(i),this.type="submit"}init(i,t){super.init(i,t);const s=this;this.name=i.name,s.params=t.pl.paramsCopy()}_submit(){this.pl.submitForm()}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const d=n`
.hero-body {
    padding:16px;
  }
  .button {
    padding: 16px;
    border-color:none;
    background-color:#CDCDCD;
    justify-content: center;
  }
  .button:hover {
    background-color:#A4A4A4;
    transition:all 0.25s ease-in-out;
  }
  .mipay-image {
    width:27px;
    height:22px;
    object-fit:contain;
  }
  .title{
    margin:0 auto;
  }

`;class a extends u{static get styles(){return[o(p),d,n`
        :host {
          display: block;
        }
      `]}renderDefault(){return l`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <div class="hero-body">
        <a class="button is-flex">
          <img class="mipay-image" src="src/themes/dsv1.0/img/mipay.png"/>
          <h3 class="title is-6">Login with Mipay</h3>
        </a>
      </div>
    `}constructor(){super()}firstUpdated(t){super.firstUpdated(t)}init(t,s){super.init(t,s)}}customElements.define(a.is,a);const k=i=>{const{element:t}=i,s=r.useRef(null);return r.useEffect(()=>{s.current&&t&&(s.current.e=t)},[t]),e.jsx("div",{children:t?e.jsx("login-mipay",{id:"login-mipay",ref:s}):e.jsx("p",{children:"Loading data..."})})};export{k as default};
