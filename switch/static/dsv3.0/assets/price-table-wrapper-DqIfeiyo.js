import{i as c,r as d,g as u,k as o,a as s,j as n}from"./index-C2PWchud.js";import{B as m}from"./base-element-5lxvCIHt.js";import{u as g}from"./utils-mixin-D5aAiqNi.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";const h=c`
  .columns {
    margin: 0 !important;
  }
  /*animations*/

  .animate1 {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.7s all ease-in-out;
  }
  .animate1-appear {
    opacity: 1;
    transform: translateY(0px);
  }

  .column {
    width: 100%;
    margin: 0.75rem;
  }
  .card {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--mui-shadows-3);
    background: var(--paper);

  }
  .block {
    padding: 0 20px;
  }
  .price-content {
    padding: 20px;
  }

  .title {
    text-align: center !important;
    font-size: 25px !important;
    padding-bottom: 8px !important;
  }
  .contents:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .subtitle {
    text-align: center !important;
    line-height: 2.3;
    text-align: center;
    font-size: 18px;
  }
  .subtitle.is-4 {
    color: white !important;
  }

  .group-summary {
    margin-bottom: 28px !important;
    margin-top: 28px !important;
  }

  .price {
    text-align: center;
    border-radius: 50%;
    background: transparent;
    transition: all 1s ease 0s;
  }

  .price p {
    font-size: 29px;
    font-weight: 500;
  }

  .price:hover {
  }
  .description {
    margin-top: 16px;
    text-align: center;
  }

  .description p {
    margin-top: 16px;
    text-align: center;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 8px;
  }
  .button {
    margin-top: 16px;
    margin-bottom: 38px;
    width: 70% !important;
    background-color: var(--secondary) !important;
    color: #fff !important;
    border-radius: 20px 20px !important;
  }
  .button:hover {
    background-color: var(--info) !important;
    color: var(--secondary) !important;
    border: 3px solid var(--secondary) !important;
    border-color: var(--secondary) !important;
  }
  .item-index {
    display: flex;
    width: 35px;
    height: 35px;
    margin: 16px;
    border-radius: 50%;
    background-color: var(--secondary) !important;
    color: white;
    font-size: 24px;
    justify-content: center;
    align-items: center;
  }
  .item-index:hover {
    background-color: var(--secondary) !important;
  }

  .ii__product {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: auto;
    border-radius: 8px;
    position: relative;
    color: #4a4a4a;
  }
  .ii__product:hover {
  }

  .ii__product-logo img {
    max-width: 50px;
    max-height: 50px;
    margin-left: 25px;
  }

  .ii__product-logo {
    display: flex;
    align-items: center;
    width: 95px;
    height: 95px;
    background: var(--info);
    border-radius: 50%;
    margin: 0 auto;
  }
  .read_more {
    color: var(--info);
    font-weight: bolder;
    cursor: pointer;
  }
  .show_less {
    color: var(--info);
    font-weight: bolder;
    cursor: pointer;
  }
  .is-custom-color {
    background-color: var(--info);
    color: #fff;
  }
  .ii__content {
    margin-top: 10px;
  }

  @media screen and (max-width: 950px) {
    .column {
      width: 100%;
      max-width: 100%;
      margin: 0 0 0.75rem 0;
    }

    .columns {
      display: flex !important;
      flex-direction: column !important;
    }
  }

  @media screen and (max-width: 775px) {
    .column {
      width: 100%;
      max-width: 100%;
    }
  }
`,p=class extends g(m){static get is(){return"price-table"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(r){super.firstUpdated(r);const t=this;t.currentGroups=t.groups,t.currentData=t.data}_computeData(r){return this.data[r]}_rowsOrColumns(r){if(r!==void 0)return r.length}init(r,t){super.init(r,t);var e=this;e.title=p.toTitleCase(r.name),e.icon=r.icon,e.service=r.service,e.params=t.pl.paramsCopy(),e.maxlength=r.max,e.loader=this.loadData()}};class l extends p{static get styles(){return[d(u),h,c`
                :host {
                    display: block;
                }
            `]}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.rows=[],this.cols=[]}updated(t){if(t.has("e")||t.has("cols")){const e=this;this.shadowRoot.querySelectorAll(".column-group-0"),window.addEventListener("scroll",()=>{e.scrollAppear()})}}getGroupTitles(t){return Object.keys(t)}_getData(t){return this.e.details[t]}_computeData(t){return this.data[t]}_rowsOrColumns(t){if(t!==void 0)return t.length}getTitle(t){let[e,i]=t.split("|");return e}getSubTitle(t){let[e,i]=t.split("|");return i}scrollAppear(){let e=this.shadowRoot.querySelector(".price-content"),i=e.getBoundingClientRect().top,a=window.innerHeight/2;i<a&&e.classList.add("animate1-appear")}onLoadData(t){super.onLoadData(t)}renderDefault(){return o`
            <div class="price-content">
                ${this.e.details&&this.getGroupTitles(this.e.details).map((t,e)=>o`
                        <div class="row">
                            <div class="col-md-12 group-summary">
                                <p class="title is-3">${this.getTitle(t)}</p>
                                <p class="subtitle is-5">${this.getSubTitle(t)}</p>
                            </div>
                        </div>

                        <div class="columns is-multiline container-group-${e}">
                            ${this._getData(t).map((i,a)=>o`
                                    <div class="column card is-flex">
                                        <div class="block item-index" style="padding: 0;">
                                            ${a+1}
                                        </div>
                                        <div class="block" style="margin:0;">
                                            <h2 class="title is-6">${i.name}</h2>
                                        </div>
                                        <div class="block" style="margin:0;">
                                            <p class="subtitle is-5">${i.description}</p>
                                        </div>
                                        <div class="block" style="margin:0;">
                                            <p class="title is-6">${i.count}</p>
                                        </div>
                                        <a
                                            href="${i.kind}"
                                            target="_blank"
                                            class="button"
                                            service="${i.kind}"
                                            @click="${this.launchService}"
                                        >
                                            <p class="subtitle is-4">BUY</p>
                                        </a>
                                    </div>
                                `)}
                        </div>
                    `)}
            </div>
        `}}customElements.define(l.is,l);const f=r=>{const{element:t,rows:e,paramsCallback:i}=r,a=s.useRef(null);return s.useEffect(()=>{a.current&&t&&(a.current.e=t,a.current.rows=e)},[t,e,r,i]),n.jsx("div",{children:t?n.jsx("price-table",{id:"price-table",ref:a}):n.jsx("p",{children:"Loading data..."})})},k=x(f);export{k as default};
