import{i as n,r as a,g as c,k as d,a as s,j as r}from"./index-C2PWchud.js";import{B as l}from"./base-element-5lxvCIHt.js";import{u as p}from"./utils-mixin-D5aAiqNi.js";const u=n`
  .service-button-container {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 1.875em;
    border-radius: 5px;
    padding: 0;
    border: 0px solid transparent;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  .service-button-container:hover {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 11px 0px;
  }
  .service-button-container .content-area {
    padding: 1.25em;
    position: relative;
    width: 100%;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    align-items: center;
    justify-content: center;
  }
  .icon-holder {
    background-color: var(--info);
    box-shadow: 0 14px 26px -12px var(--info) !important;
    position: absolute;
    top: -16px;
    left: 42%;
    padding: 12px;
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    border-radius: 6px;
  }

  .content-txt {
    padding: 30px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    top: 17px;
  }
  .content-txt h1 {
    text-align: center;
  }
  .content-txt p {
    font-size: 10px;
    text-align: center;
  }
`,x=class extends p(l){constructor(){super()}static get is(){return"vertical-service-button"}static get properties(){return{color:String,params:{type:Object,value:{}}}}firstUpdated(i){super.firstUpdated(i);const t=this;console.log("tjos os ",this.e),t.addEventListener("click",function(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.service,params:{child:1}},bubbles:!0,composed:!0}))})}init(i,t){super.init(i,t);var e=this;e.params=t.pl.paramsCopy()}};class o extends x{static get styles(){return[a(c),u,n`
        :host {
          display: block;
        }
      `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}updated(t){t.has("e")}render(){return d`
      <div class="service-button-container">
        <div class="content-area">
          <div class="icon-holder">
            <adaptive-ui-icon
              icon="icons:input"
              style="width:28px !important;height: 28px !important;"
            ></adaptive-ui-icon>
          </div>
          <div class="content-txt is-flex">
            <div class="heading">
              <h1 class="title is-size-6">${this.e.name}</h1>
              <p class="subtitle">${this.e.details.description}</p>
            </div>
            <div class="nxt"></div>
          </div>
        </div>
      </div>
    `}}customElements.define(o.is,o);const h=({_dialog:i,element:t})=>{const e=s.useRef(null);return s.useEffect(()=>{e.current&&t&&(e.current.e=t,e.current._dialog=i)},[t]),r.jsx("div",{children:t?r.jsx("vertical-service-button",{id:"vertical-service-button",ref:e}):r.jsx("p",{children:"Loading data..."})})};export{h as default};
