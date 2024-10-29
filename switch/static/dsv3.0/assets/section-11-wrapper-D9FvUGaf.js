import{i as c,r as l,g as m,k as r,a,j as n}from"./index-C2PWchud.js";import"./fa-icon-COAiXmZs.js";import{S as d}from"./section-pelement-dsc-WXP1kFbN.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";import"./lit-html-dRijB2IX.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const x=c`
.solution-area {
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    padding: 110px;
  }
 
  .solution-contaniner{
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .section-title {
    text-align: center;
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
    margin-top: -6px;
  }
  .section-title h2 {
    margin-bottom: 0;
    font-size: 40px;
    font-weight: 700;
    font-size: 42px!important;
    line-height: 52px!important;
    font-weight: 600!important;
  }
  .section-title p {
    max-width: 520px;
    margin-bottom: 0;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .single-services-box {
    background-color: var(--paper);
    margin-bottom: 30px;
    padding: 30px 25px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    position: relative;
    min-height:400px;
    border-radius:20px;
  }
  .single-services-box::before {
    content: "";
    height: 3px;
    width: 20px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: var(--primary);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .single-services-box .icon {
    margin-bottom: 18px;
    background-color:var(--primary);
    border-radius: 5px;
    width: 253px;
    height: 200px;
    line-height: 75px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-align: center;
    color: var(--app-primary-color);
  }

  .icon img{
    width:100%
  }
  .single-services-box h3 {
    margin-bottom: 0;
    font-size: 23px;
    font-weight: 600!important;
  }
  .single-services-box p {
    margin-top: 12px;
    margin-bottom: 0;
    font-size: 16px!important;
    font-weight: 390!important;
  }
  .single-services-box:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
  }

  a{

    color:var(--primary)!important;

  }
  a:hover {

    cursor:unset!important;
    color:var(--primary)!important;

  }

  /*animations*/

  .animate1{
      opacity:0;
      transform:translateX(100px);
      transition:0.7s all ease-in-out;
  }
  .animate1-appear{
      opacity: 1;
      transform:translateX(0px);
  
  }
  @media screen and (max-width: 430px) {
    .solution-area {
      padding:20px;
    }
  } 
`;class p extends d{static get styles(){return[x,l(m),c`
        /* Add any additional styles for animations */
        .column {
          opacity: 0;
          transform: translateY(50px); /* Hidden by default */
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .animate1-appear {
          opacity: 1;
          transform: translateY(0); /* Visible state when animation triggers */
        }
      `]}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.rows=[],this.cols=[],this.observer=null}render(){return r`
      <section class="solution-area bg">
        <div class="solution-container">
          <div class="section-title">
            <h2>${this.e&&this.e.name}</h2>
            <p>${this.e&&this.e.details.subtitle}</p>
          </div>
          <div id="mainColumn" class="columns">
            ${this.rows.map((t,i)=>r`
              <div class="column">
                <div class="single-services-box">
                  <div class="icon">
                    ${this.checkIcon(t[1])?r`
                        <fa-icon class="${this.getIcon(t[1])}" color="#fff" style="height:68px; width: 72px;"></fa-icon>
                      `:r`
                        <img src="${t[3]}" alt="${t[1]}" />
                      `}
                  </div>
                  <h3><a>${this.getTitle(t[1])}</a></h3>
                  <p>${t[2]}</p>
                </div>
              </div>
            `)}
          </div> <!-- main -->
        </div>
      </section>
    `}checkIcon(t){return t.includes("|")}getIcon(t){let[i,e]=t.split("|");return e}getTitle(t){let[i,e]=t.split("|");return i}firstUpdated(t){super.firstUpdated(t),this.setupObserver()}setupObserver(){const t={root:null,threshold:.2};this.observer=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&this.animateColumns()})},t);const i=this.shadowRoot.querySelector("#mainColumn");i&&this.observer.observe(i)}animateColumns(){this.shadowRoot.querySelectorAll(".column").forEach(i=>{i.classList.add("animate1-appear")})}disconnectedCallback(){this.observer&&this.observer.disconnect(),super.disconnectedCallback()}static get is(){return"section-11"}}customElements.define(p.is,p);const g=s=>{const{element:t,rows:i,paramsCallback:e}=s,o=a.useRef(null);return a.useEffect(()=>{o.current&&t&&(o.current.e=t,o.current.rows=i)},[t,i,s,e]),n.jsx("div",{children:t?n.jsx("section-11",{id:"section-11",ref:o}):n.jsx("p",{children:"Loading data..."})})},S=h(g);export{S as default};
