import{i as c,r as m,g as d,k as n,a as s,j as r}from"./index-C2PWchud.js";import"./fa-icon-COAiXmZs.js";import{S as g}from"./section-pelement-dsc-WXP1kFbN.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";import"./lit-html-dRijB2IX.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const h=c`
  .solution-area {
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    padding: 110px;
  }
  .bg {
    background-color: #f2f6f9;
  }
  .solution-contaniner {
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
    font-size: 42px !important;
    line-height: 52px !important;
    font-weight: 600 !important;
  }
  .section-title p {
    max-width: 520px;
    margin-bottom: 0;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .single-services-box {
    background-color: #ffffff;
    margin-bottom: 30px;
    padding: 30px 25px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    position: relative;
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
    background-color: var(--link);
    border-radius: 5px;
    width: 253px;
    height: 200px;
    line-height: 75px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-align: center;
    color: var(--link);
  }
  .single-services-box h3 {
    margin-bottom: 0;
    font-size: 23px;
    font-weight: 600 !important;
  }
  .single-services-box p {
    margin-top: 12px;
    margin-bottom: 0;
    font-size: 16px !important;
    font-weight: 390 !important;
  }
  .single-services-box:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
  }

  a {
    color: var(--primary) !important;
  }
  a:hover {
    cursor: unset !important;
    color: var(--primary) !important;
  }

  /*animations*/

  .animate1 {
    opacity: 0;
    transform: translateX(100px);
    transition: 0.7s all ease-in-out;
  }
  .animate1-appear {
    opacity: 1;
    transform: translateX(0px);
  }
  @media screen and (max-width: 430px) {
    .solution-area {
      padding: 20px;
    }
  }
`;class p extends g{static get styles(){return[m(d),h]}checkIcon(t){return!!t.includes("|")}getIcon(t){let[i,e]=t.split("|");return e}getTitle(t){let[i,e]=t.split("|");return i}firstUpdated(t){super.firstUpdated(t);const i=this;this.loader.then(e=>{window.addEventListener("scroll",()=>{i.scrollAppear()})})}scrollAppear(){const t=this;let i=t.shadowRoot.querySelector(".solution-area"),e=t.shadowRoot.getElementById("mainColumn"),o=i.getBoundingClientRect().top,l=window.innerHeight/2;o<l&&e.classList.add("animate1-appear")}static get is(){return"section-1"}render(){return n`
        <section class="solution-area bg">
        <div class="solution-container">
          <div class="section-title">
            <h2>${this.e.name}</h2>
            <p>${this.e.details.subtitle}</p>
          </div>
          <div id="mainColumn" class="columns animate1">
          ${this.rows.map((t,i)=>n`
              <div class="column">
                <div class="single-services-box">
                  <div class="icon">
                    ${this.checkIcon(t[1])?n`
                          <fa-icon
                            class="${this.getIcon(t[1])}"
                            color="#fff"
                            style="height:68px; width: 72px;"
                          ></fa-icon>
                        `:n`
                          <img src="/media/${t[3]}" alt="${t[1]}" />
                        `}
                  </div>
                  <h3><a>${this.getTitle(t[1])}</a></h3>
                  <p>${t[2]}</p>
                </div>
              </div>
            `)}
            
          </div> <!--main -->
        <div>
      </section>
        `}}customElements.define(p.is,p);const f=a=>{const{element:t,rows:i,paramsCallback:e}=a,o=s.useRef(null);return s.useEffect(()=>{o.current&&t&&(o.current.e=t,o.current.rows=i)},[t,i,a,e]),r.jsx("div",{children:t?r.jsx("section-1",{id:"section-1",ref:o}):r.jsx("p",{children:"Loading data..."})})},E=x(f);export{E as default};
