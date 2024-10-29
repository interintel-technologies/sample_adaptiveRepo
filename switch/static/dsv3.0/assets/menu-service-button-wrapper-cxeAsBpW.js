import{i as o,r as c,g as l,k as f,a as r,j as s}from"./index-C2PWchud.js";import{B as d}from"./base-element-5lxvCIHt.js";import{u}from"./utils-mixin-D5aAiqNi.js";const n=class extends u(d){static get is(){return"menu-service-button"}static get properties(){return{color:String,icon:String,name:String,params:{type:Object,value:{}}}}firstUpdated(e){super.firstUpdated(e);const t=this;t.addEventListener("click",function(i){i.preventDefault(),this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.service,params:t.params},bubbles:!0,composed:!0}))})}init(e,t){super.init(e,t);var i=this;i.title=n.toTitleCase(e.name),i.name=n.toTitleCase(e.name),i.icon=e.icon,i.color=e.kind}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const p=o`
.ccc {
    width : 100%;
    min-width: 10em;
    padding: 1em 0.5em;
    text-align: center;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex: 1 1 0.000000001px;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0.000000001px;
    flex-basis: 0.000000001px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.feature-wrap {
    font-size: 48px;
    padding: 32px;
    border-radius: 100%;
    text-align: center;
    background: blue;
    color: #ffffff;
    box-shadow: inset 0 0 0 5px #f2f2f2;
    -webkit-box-shadow: inset 0 0 0 5px #f2f2f2;
    -webkit-transition: 500ms;
    -moz-transition: 500ms;
    -o-transition: 500ms;
    transition: 500ms;
}

h3{
    font-weight: 300;
}
.feature-wrap:hover {
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
    opacity: 0.6;
    transform: scale(1.1);
}
iron-icon {
    color: #ffffff;
}
`;class a extends n{static get styles(){return[c(l),p,o`
        :host {
          display: block;
        }
      `]}renderDefault(){return f`
      <div class="box">
        <div id="container content">
          <div class="ccc">
            <div class="feature-wrap">
              <adaptive-ui-icon
                style="width:88px !important;height: 88px !important;"
                icon="[[icon]]"
              ></adaptive-ui-icon>
            </div>
            <h3>${this.name}</h3>
          </div>
        </div>
      </div>
    `}}window.customElements.define(a.is,a);const v=({element:e})=>{const t=r.useRef(null);return r.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),s.jsx(s.Fragment,{children:e?s.jsx("menu-service-button",{id:"menu-service-button",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{v as default};
